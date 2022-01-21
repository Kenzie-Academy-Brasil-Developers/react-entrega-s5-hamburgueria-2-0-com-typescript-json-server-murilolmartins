import SmallLogo from "../../assets/small_logo.png";
import SearchInput from "../SearchInput";
import Container from "./style";
import { BsFillCartFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { useAuth } from "../../provider/Auth";
import { useHistory } from "react-router";
import { UseCart } from "../../provider/Cart";
import { UseProducts } from "../../provider/Products";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const { logOut } = useAuth();
  const { setIsModalCartOpen, cart } = UseCart();
  const { loadProducts } = UseProducts();
  const [isSearch, setIsSearch] = useState(false);
  const history = useHistory();

  return (
    <Container isSearch={isSearch}>
      <div className="small_container">
        <div className="logo_container">
          <img
            src={SmallLogo}
            alt="logo"
            onClick={() => {
              loadProducts();
              setIsSearch(false);
            }}
          ></img>
        </div>
        <div className="options_container">
          <SearchInput isSearch={isSearch} />
          <BiSearch className="search" onClick={() => setIsSearch(true)} />
          <div className="cart_container">
            <div className="count">{cart.length}</div>
            <BsFillCartFill onClick={() => setIsModalCartOpen(true)} />
          </div>
          <HiOutlineLogout onClick={() => logOut(history)} />
        </div>
      </div>
    </Container>
  );
};

export default Header;
