import Link from "next/link";

function PhoneLink(props) {
  return (
    <>
      <Link href={`tel:${props.link}`}>{props.tel}</Link>
    </>
  );
}

export default PhoneLink;
