import { BiSolidOffer } from "react-icons/bi";
import Coupon from "./Coupon";
import { useAppContext } from "@/store/AppContext";

type AppContextType = {
  isCoupon: boolean;
  setCoupon: (value: boolean) => void;
};

export default function ApplyCoupon() {
  const { isCoupon, setCoupon }: AppContextType = useAppContext();

  function handleApplyCoupon(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setCoupon(!isCoupon);
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <button
        className="flex w-full items-center justify-center gap-1 rounded-md p-2 text-sm font-medium uppercase text-DarkGrey outline-dashed outline-1 outline-Grey hover:shadow-md"
        onClick={(e) => handleApplyCoupon(e)}
      >
        <BiSolidOffer />
        {isCoupon ? "Hide Coupons" : "Show Coupons"}
      </button>

      {isCoupon && <Coupon />}
    </div>
  );
}
