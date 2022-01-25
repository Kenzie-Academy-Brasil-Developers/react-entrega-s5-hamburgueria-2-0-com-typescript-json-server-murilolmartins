import { createContext, useContext, useState, ReactNode } from "react";
import { api } from "../../services/api";

interface Products {
  id: number;
  name: string;
  category: string;
  price: 14.0;
  img: string;
  userId: number;
}
interface ProductsContextProps {
  products: Products[];
  loadProducts: () => void;
  productsSearch: (search: string) => void;
}

interface ProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);

export const ProductProvider = ({ children }: ProviderProps) => {
  const [products, setProducts] = useState<Products[]>([]);

  const loadProducts = () => {
    api
      .get("/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  };

  const productsSearch = (search: string) => {
    if (search === "") {
      loadProducts();
    } else {
      const insensitiveCase = new RegExp(search, "i");
      const filteredProducts = products.filter(
        (prod) =>
          insensitiveCase.test(prod.name) || insensitiveCase.test(prod.category)
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <ProductsContext.Provider
      value={{ products, loadProducts, productsSearch }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const UseProducts = () => useContext(ProductsContext);
