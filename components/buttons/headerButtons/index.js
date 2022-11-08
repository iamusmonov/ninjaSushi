import Link from "next/link";

function HeaderBtn(props) {
  return (
    <>
      <Link href={props.link} className={`${props.class} bg-red-300 border`}>
        {props.icon}
      </Link>
    </>
  );
}

export default HeaderBtn;
