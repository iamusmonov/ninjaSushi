import Link from "next/link";

function HeaderLink(props) {
  return (
    <>
      <Link href={`${props.link}`} className={`${props.class}`}>
        {props.linkName}
      </Link>
    </>
  );
}

export default HeaderLink;
