import { useTitle } from "../../hooks/useTitle";
import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty";
import { useCart } from "../../context/index";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);

  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
