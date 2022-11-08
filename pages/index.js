import { useState } from "react";
import Layout from "../components/layout";

export default function Home() {
  const slider = [
    {
      title: "Ninja Sushi в Киеве! Пока только на левом берегу",
      image: "/images/falldropw.webp",
    },
    {
      title: "Доставка суши для настоящих ценителей",
      image: "/images/main2.jpg",
    },
    {
      title: "Обновление в меню: белое, розовое и другое вино",
      image: "/images/main3.webp",
    },
    {
      title: "Ninja Sushi: новая зона доставки!",
      image: "/images/main4.jpg",
    },
  ];

  const [slide, setSlide] = useState(true);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);

  const [title, setTitle] = useState(slider[0].title);
  const [img, setImg] = useState(slider[0].image);

  const changeSlider = (i) => {
    setTitle(slider[i].title);
    setImg(slider[i].image);
  };

  return (
    <>
      <section className="bg-[#F5F5F7]">
        <Layout>
          <div className="max-w-[1576px] mx-auto   my-[38px] flex relative">
            <div className="pl-[94px] py-[98px] w-[50%] z-40 rounded-2xl space-y-[20px]">
              <p className="text-[64px] font-bold w-[530px] h-96">{title}</p>
              <p className="text-[#686870] text-xl">
                Доставку делаем с 10:00 до 19:30
              </p>
              <button className="bg-[#00CC2D] font-medium py-[15px] px-[80px] text-white rounded-2xl">
                Перейти к новости
              </button>
              <div className="absolute bottom-3 flex left-[50%]  space-x-3">
                <button
                  onClick={() => {
                    changeSlider(0);
                    setSlide(true);
                    setSlide2(false);
                    setSlide3(false);
                    setSlide4(false);
                  }}
                  className={`w-4 h-4 rounded-full  ${
                    slide ? "bg-[#FF6633]" : "bg-[#D2D2D7]"
                  } `}
                ></button>
                <button
                  onClick={() => {
                    changeSlider(1);
                    setSlide(false);
                    setSlide2(true);
                    setSlide3(false);
                    setSlide4(false);
                  }}
                  className={`w-4 h-4 rounded-full  ${
                    slide2 ? "bg-[#FF6633]" : "bg-[#D2D2D7]"
                  }`}
                ></button>
                <button
                  onClick={() => {
                    changeSlider(2);
                    setSlide(false);
                    setSlide2(false);
                    setSlide3(true);
                    setSlide4(false);
                  }}
                  className={`w-4 h-4 rounded-full ${
                    slide3 ? "bg-[#FF6633]" : "bg-[#D2D2D7]"
                  } `}
                ></button>
                <button
                  onClick={() => {
                    changeSlider(3);
                    setSlide(false);
                    setSlide2(false);
                    setSlide3(false);
                    setSlide4(true);
                  }}
                  className={`w-4 h-4 rounded-full ${
                    slide4 ? "bg-[#FF6633]" : "bg-[#D2D2D7]"
                  }`}
                ></button>
              </div>
            </div>
            <div className=" absolute top-0 right-0 left-0 bottom-0 z-10 rounded-2xl">
              <img src={img} className="w-full h-full rounded-2xl" />
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
}
