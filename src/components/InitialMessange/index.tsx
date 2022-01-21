import Container from "./style";
import Logo from "../../assets/logo.png";
import { FiShoppingBag } from "react-icons/fi";
import Img from "../../assets/pontos.png";

const InitialMessange = () => {
  return (
    <Container>
      <div className="img_container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="messange_container">
        <div className="icon_container">
          <FiShoppingBag />
        </div>
        <div className="text_container">
          <p>
            A vida e como um sanduiche, é preciso <br />
            recheala com os
            <span> melhores</span>
            <br /> ingredientes
          </p>
        </div>
      </div>
      <div className="pontos_container">
        <img src={Img} alt="pontos" />
      </div>
    </Container>
  );
};

export default InitialMessange;
