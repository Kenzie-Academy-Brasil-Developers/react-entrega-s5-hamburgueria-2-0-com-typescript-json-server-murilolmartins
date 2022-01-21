import { createContext, useContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

interface ProductCart {
  id: number;
  name: string;
  category: string;
  price: 14.0;
  img: string;
  userId: number;
  qtd: number;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: 14.0;
  img: string;
  userId: number;
}

interface CartContextProps {
  cart: ProductCart[];
  addCart: (product: Product) => void;
  removeCart: (product: ProductCart) => void;
  isModalCartOpen: boolean;
  setIsModalCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clearCart: () => void;
  addOneMore: (product: ProductCart) => void;
  removeOneMore: (product: ProductCart) => void;
}

interface CardProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartProvider = ({ children }: CardProviderProps) => {
  const [cart, setCart] = useState<ProductCart[]>(() => {
    return JSON.parse(`${localStorage.getItem("@HCart")}`) || [];
  });

  const [isModalCartOpen, setIsModalCartOpen] = useState<boolean>(false);

  const addOneMore = (product: ProductCart) => {
    const listCart = JSON.parse(`${localStorage.getItem("@HCart")}`);
    const index = listCart.findIndex(
      (prod: ProductCart) => prod.name === product.name
    );
    listCart[index].qtd += 1;
    localStorage.setItem("@HCart", JSON.stringify(listCart));
    setCart(listCart);
  };

  const addCart = (product: Product) => {
    const isInCart = cart.find(
      (prod: ProductCart) => product.name === prod.name
    );
    if (!!isInCart) {
      const listCart = JSON.parse(`${localStorage.getItem("@HCart")}`);
      const index = listCart.findIndex(
        (prod: ProductCart) => prod.name === product.name
      );
      listCart[index].qtd += 1;
      localStorage.setItem("@HCart", JSON.stringify(listCart));
      setCart(listCart);
    } else {
      const { category, id, img, name, price, userId } = product;
      const newProduct = { name, img, id, price, userId, category, qtd: 1 };
      setCart([...cart, newProduct]);
      localStorage.setItem("@HCart", JSON.stringify([...cart, newProduct]));
      toast.success("Produto adicionado ao carrinho!");
    }
  };

  const removeOneMore = (product: ProductCart) => {
    const listCart = JSON.parse(`${localStorage.getItem("@HCart")}`);
    const index = listCart.findIndex(
      (prod: ProductCart) => prod.name === product.name
    );
    if (listCart[index].qtd > 1) {
      listCart[index].qtd -= 1;
      localStorage.setItem("@HCart", JSON.stringify(listCart));
      setCart(listCart);
    } else {
      const newListCart = listCart.filter(
        (prod: ProductCart) => prod.name !== product.name
      );
      localStorage.setItem("@HCart", JSON.stringify(newListCart));
      setCart(newListCart);
    }
  };

  const removeCart = (product: ProductCart) => {
    const listCart = JSON.parse(`${localStorage.getItem("@HCart")}`);

    const newListCart = listCart.filter(
      (prod: ProductCart) => prod.name !== product.name
    );
    localStorage.setItem("@HCart", JSON.stringify(newListCart));
    setCart(newListCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("@HCart", JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{
        addCart,
        removeCart,
        cart,
        isModalCartOpen,
        setIsModalCartOpen,
        clearCart,
        addOneMore,
        removeOneMore,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCart = () => useContext(CartContext);
