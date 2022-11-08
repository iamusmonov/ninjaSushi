import Link from "next/link";
import { phone } from "../../../utils/icon";

function linkPhoneIcon() {
  return (
    <>
      <Link href={"tel:+38 097 699 34 38"}>
        <a className="flex items-center">
          <span>{phone}</span>
          <p className="font-medium">+38 097 699 34 38</p>
        </a>
      </Link>
    </>
  );
}

export default linkPhoneIcon;
