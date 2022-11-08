import Link from "next/link";

function HeaderLink(props) {
  return (
    <>
      <Link href={`${props.link}`}>
        <a className={`${props.class}`}>{props.linkName}</a>
      </Link>
    </>
  );
}

export default HeaderLink;
