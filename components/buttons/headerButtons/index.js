import Link from "next/link";

function HeaderBtn(props) {
  return (
    <>
      <Link href={props.link} className={`${props.class}`}>
        {props.icon}
      </Link>
    </>
  );
}

export default HeaderBtn;
