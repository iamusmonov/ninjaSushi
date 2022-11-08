function FoodTypeBtn(props) {
  return (
    <>
      <button className={`${props.class}`}>
        {props.icon}
        <span className={`${props.nameClass}`}>{props.name}</span>
      </button>
    </>
  );
}

export default FoodTypeBtn;
