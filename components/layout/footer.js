import Link from "next/link";
import {
  android,
  apple,
  facebook,
  headerNameIcon,
  headerSushiFirstIcon,
  instagram,
  masterCard,
  newCard,
  telegram,
  visa,
} from "../../utils/icon";
import HeaderLink from "../links/headerLink";
import PhoneLink from "../links/linkPhone";
function Footer() {
  return (
    <>
      <footer className="bg-white py-[64px]">
        <div className="max-w-[1576px] mx-auto">
          <div className=" flex justify-between">
            <div>
              <div className="flex ">
                <span>{headerSushiFirstIcon}</span>
                <span>{headerNameIcon}</span>
              </div>
              <div className="flex  space-x-5 mt-[25px]">
                <button className="bg-black flex items-center py-[13px] px-[10px] rounded-lg space-x-[15px] w-[123px] text-xs  font-semibold">
                  <span>{apple}</span>
                  <span className="text-white">App Store</span>
                </button>
                <button className="bg-black flex items-center py-[13px] px-[10px] rounded-lg space-x-[7px] w-[123px] text-xs  font-semibold">
                  <span>{android}</span>
                  <span className="text-white">Google Store</span>
                </button>
              </div>
              <p className="text-[#9E9E9E] text-sm mt-[17px]">
                © Ninja Sushi. All rights reserved.
              </p>
            </div>
            <div className="flex  flex-col space-y-[12px]">
              <p className="text-[#686870] text-sm">Навигация:</p>
              <div className="flex flex-col space-y-[8px] font-medium">
                <HeaderLink linkName={"Главная"} />
                <HeaderLink linkName={"Меню"} />
                <HeaderLink linkName={"Доставка"} />
                <HeaderLink linkName={"Вакансии"} />
                <HeaderLink linkName={"Новости"} />
              </div>
            </div>
            <div className="flex flex-col space-y-[12px]">
              <p className="text-[#686870] text-sm">Оформить заказ:</p>
              <div className="flex flex-col space-y-[8px] font-medium">
                <PhoneLink
                  tel={"+38 (067) 436 61 27"}
                  link={"+38 (067) 436 61 27"}
                />
                <PhoneLink
                  tel={"+38 (066) 031 76 30"}
                  link={"+38 (066) 031 76 30"}
                />
                <PhoneLink
                  tel={"+38 (093) 924 98 28"}
                  link={"+38 (093) 924 98 28"}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-[12px]">
              <p className="text-[#686870] text-sm">Время работы:</p>
              <div className="flex flex-col  space-y-[8px]">
                <span className="font-medium">с 11:00 до 22:45</span>
                <span className="font-medium">с 22.45 до 06.00</span>
                <span className="text-[#9E9E9E] font-medium">
                  Ночная доставка
                </span>
              </div>
            </div>
            <div>
              <p className="text-[#686870] text-sm">Мы в соц. сетях:</p>
              <div className="flex space-x-[12px] mt-[12px]">
                <span>{facebook}</span>
                <span>{instagram}</span>
              </div>
              <button className="flex items-center mt-[18px] space-x-[12px] bg-[#F5F5F7] py-[14px] px-[12px] rounded-lg">
                <span>{telegram}</span>
                <span className="text-[#039BE5]">Техподдержка</span>
              </button>
            </div>
            <div className="flex flex-col space-y-[8px]">
              <p className="font-bold text-5xl">#NinjaSushi</p>
              <div className="flex flex-col space-y-[18px]">
                <p className="text-[#9E9E9E] max-w-[220px]">
                  Ninja Sushi в фотографиях наших клиентов
                </p>
                <button className="text-[#00CC2D] bg-[#F5F5F7] py-[16px] px-[42px] rounded-xl">
                  Перейти в instagram
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <HeaderLink linkName={"Политика конфиденциальности"} />
            <div className="flex items-center space-x-[24px] mt-[46px]">
              <span>{masterCard}</span>
              <span>{visa}</span>
              <span>{newCard}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
