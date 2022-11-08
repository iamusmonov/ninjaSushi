import { useState } from "react";
import {
  down,
  headerNameIcon,
  headerSushiFirstIcon,
  ninjaF,
  ninjaS,
  ninjaT,
} from "../../utils/icon";
function Brand() {
  const [brands, setBrands] = useState(false);
  const [icon, setIcon] = useState(headerSushiFirstIcon);
  const changeIconF = () => {
    setIcon(ninjaF);
    setBrands(!brands);
  };
  const changeIconS = () => {
    setIcon(ninjaS);
    setBrands(!brands);
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setBrands(!brands)}
          className="flex items-center group"
        >
          <span>{icon}</span>
          <span className="ml-[4px]">{headerNameIcon}</span>
          <span className="bg-[#F5F5F7] py-[14px] px-[11px] rounded-md ml-[12px] group-hover:translate-y-1 duration-500">
            {down}
          </span>
        </button>
        {brands && (
          <div className="flex flex-col absolute  bg-white top-[73px] -left-5 rounded-xl py-4 px-3 space-y-5">
            <button onClick={changeIconF}>{ninjaF}</button>
            <button onClick={changeIconS}>{ninjaS}</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Brand;
