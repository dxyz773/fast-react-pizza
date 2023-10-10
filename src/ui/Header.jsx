import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
function Header() {
  return (
    <header>
      <Link to="/">Fast Rect Pizza Co.</Link>

      <SearchOrder />
      <p>Username: Demi</p>
    </header>
  );
}

export default Header;
