import Container from "./style";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { UseProducts } from "../../provider/Products";

interface SearchInputProps {
  isSearch: boolean;
}

const SearchInput = ({ isSearch }: SearchInputProps) => {
  const [search, setSearch] = useState("");
  const { productsSearch } = UseProducts();
  return (
    <Container isSearch={isSearch}>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => productsSearch(search)}>
        <div className="icon_container">
          <BiSearch />
        </div>
      </button>
    </Container>
  );
};

export default SearchInput;
