import Link from "next/link";
import Layout from "../components/layout";
import { close, headerSushiFirstIcon } from "../utils/icon";

function UserCabinet() {
  return (
    <>
      <section className="bg-[#979797] min-h-screen ">
        <div className="bg-white flex flex-col max-w-lg mx-auto rounded-xl py-[24px] px-[24px]">
          <div className=" flex justify-end ">
            <Link href={"/"}>
              <span className=" bg-[#F5F5F7] rounded-md p-[10px] inline-block cursor-pointer ">
                {close}
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-[32px] font-bold ">Авторизация</p>
            <span>{headerSushiFirstIcon}</span>
          </div>
          <p className="text-sm text-[#686870] text-center">
            Введите ваши данные:
          </p>
          <form className="flex flex-col space-y-[10px] mt-3">
            <div>
              <p className="text-[#686870] font-semibold">Name:</p>
              <input
                type={"text"}
                className="outline-none border rounded-md py-2 px-3 w-full"
                placeholder="Mike"
              />
            </div>
            <div>
              <p className="text-[#686870] font-semibold">Password:</p>
              <input
                type={"password"}
                className="outline-none border rounded-md py-2 px-3 w-full"
                placeholder="Mike2022"
              />
            </div>
            <div>
              <p className="text-[#686870] font-semibold">Email:</p>
              <input
                type={"email"}
                className="outline-none border rounded-md py-2 px-3 w-full"
                placeholder="mikesushininja@gmail.com"
              />
            </div>

            <button className="bg-[#00CC2D] text-white rounded-md py-2 ">
              Войти
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default UserCabinet;
