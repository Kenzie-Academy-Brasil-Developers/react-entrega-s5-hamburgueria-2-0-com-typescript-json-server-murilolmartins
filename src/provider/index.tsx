import { ReactNode } from "toasted-notes/node_modules/@types/react";
import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";
import { ProductProvider } from "./Products";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <CartProvider>
      <ProductProvider>
        <AuthProvider>{children} </AuthProvider>
      </ProductProvider>
    </CartProvider>
  );
};
