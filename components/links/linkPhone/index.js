import Link from "next/link";

function PhoneLink(props) {
  return (
    <>
      <Link href={`tel:${props.link}`}>
        <a>{props.tel}</a>
      </Link>
    </>
  );
}

export default PhoneLink;
