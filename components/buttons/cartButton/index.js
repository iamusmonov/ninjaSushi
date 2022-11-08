import { cart } from "../../../utils/icon";

function CartBtn() {
  return (
    <>
      <button className="flex items-center px-[25px] py-[14px] border rounded-xl space-x-3">
        <p className="text-[#686870] text-base">Корзина</p>
        <span>{cart}</span>
      </button>
    </>
  );
}

export default CartBtn;
