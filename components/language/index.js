import { ukrain } from "../../utils/icon";

function Language() {
  return (
    <>
      <div className="flex items-center space-x-[10px]">
        <span>{ukrain}</span>
        <p className="font-medium">Киев</p>
        <p className="font-medium">RU</p>
      </div>
    </>
  );
}

export default Language;
