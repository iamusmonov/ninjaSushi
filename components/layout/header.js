import Link from "next/link";
import {
  bell,
  bouls,
  cart,
  drinks,
  like,
  notDefined,
  phone,
  rols,
  sets,
  soups,
  sushi,
  ukrain,
  user,
} from "../../utils/icon";
import Brand from "../brand";
import HeaderLink from "../links/headerLink";
import Language from "../language";
import LinkPhoneIcon from "../links/linkPhoneIcon";
import HeaderBtn from "../buttons/headerButtons";
import CartBtn from "../buttons/cartButton";
import FoodTypeBtn from "../buttons/foodTypeBtn";

function Header() {
  return (
    <>
      <header className="bg-[#F5F5F7] pt-[16px] ">
        <div className="max-w-[1576px] mx-auto bg-white py-[16px] px-[30px] rounded-2xl">
          <div className="flex justify-between items-center">
            <Brand />
            <div className="flex space-x-[48px]">
              <Language />
              <HeaderLink
                link={"/"}
                linkName={"Главная"}
                class={"font-medium"}
              />
              <HeaderLink
                link={"#"}
                linkName={"Доставка"}
                class={"font-medium"}
              />
              <HeaderLink link={"#"} linkName={"О нас"} class={"font-medium"} />
              <HeaderLink
                link={"#"}
                linkName={"Новости"}
                class={"font-medium"}
              />
              <LinkPhoneIcon />
            </div>
            <div className="flex items-center space-x-4">
              <HeaderBtn
                link={"#"}
                icon={bell}
                class={"p-[14px] border rounded-xl"}
              />
              <HeaderBtn
                link={"#"}
                icon={like}
                class={"p-[16px] border rounded-xl"}
              />
              <HeaderBtn
                link={"/userCabinet"}
                icon={user}
                class={"p-[14px] border rounded-xl"}
              />
              <CartBtn />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white mt-[16px] flex items-end space-x-[51px]  py-[14px]  px-[35px] rounded-2xl">
            <FoodTypeBtn
              class={"flex flex-col items-center"}
              name={"Роллы"}
              icon={rols}
            />
            <FoodTypeBtn
              class={"flex flex-col items-center"}
              name={"Суши"}
              icon={sushi}
            />
            <FoodTypeBtn
              class={"flex flex-col items-center"}
              name={"Сеты"}
              icon={sets}
            />
            <FoodTypeBtn
              class={"flex flex-col items-center"}
              name={"Боулы"}
              icon={bouls}
            />
            <FoodTypeBtn
              class={"flex flex-col items-center"}
              name={"Напитки"}
              icon={drinks}
            />
            <FoodTypeBtn
              class={"flex flex-col items-center"}
              name={"Соусы"}
              icon={soups}
            />
            <FoodTypeBtn
              class={"flex flex-col items-center "}
              name={"Нeизвестно"}
              icon={notDefined}
              nameClass={"max-w-[58px] truncate text-[#9E9E9E]"}
            />
            <FoodTypeBtn
              class={"flex flex-col items-center"}
              name={"Нeизвестно"}
              icon={notDefined}
              nameClass={"max-w-[58px] truncate text-[#9E9E9E]"}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
