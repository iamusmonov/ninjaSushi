import Link from "next/link";
import { phone } from "../../../utils/icon";

function linkPhoneIcon() {
  return (
    <>
      <Link href={"tel:+38 097 699 34 38"}>
        <div className="flex items-center">
          <span>{phone}</span>
          <p className="font-medium">+38 097 699 34 38</p>
        </div>
      </Link>
    </>
  );
}

export default linkPhoneIcon;
