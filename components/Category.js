import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { useState } from "react";

function Category() {
  const router = useRouter();
  const [italian, setItalian] = useState(false);
  const [american, setAmerican] = useState(false);
  const [thai, setThai] = useState(false);
  const [japanese, setJapanese] = useState(false);

  return (
    <div className=" flex justify-center mx-8 my-0 ">
      <div
        className={`${
          italian
            ? "w-24 h-24 cursor-pointer scale-75 flex justify-center mx-8 my-0 flex-col items-center rounded-[50%] bg-gradient-to-r from-[#f27121] to-[#e94057]"
            : "w-24 h-24 cursor-pointer scale-75 flex justify-center mx-8 my-0 flex-col items-center rounded-[50%] bg-gradient-to-r from-[#494949] to-[#313131] active:bg-gradient-to-r active:from-[#f27121] active:to-[#e94057]"
        }`}
        onClick={() => {
          router.push("/cuisine/Italian");
          setItalian(true);
          setAmerican(false);
          setThai(false);
          setJapanese(false);
        }}
      >
        <FaPizzaSlice className="text-white text-2xl active:text-base" />
        <h4 className="text-white text-base active:text-sm">Italian</h4>
      </div>

      <div
        className={`${
          american
            ? "w-24 h-24 cursor-pointer scale-75 flex justify-center mx-8 my-0 flex-col items-center rounded-[50%] bg-gradient-to-r from-[#f27121] to-[#e94057]"
            : "w-24 h-24 cursor-pointer scale-75 flex justify-center mx-8 my-0 flex-col items-center rounded-[50%] bg-gradient-to-r from-[#494949] to-[#313131] active:bg-gradient-to-r active:from-[#f27121] active:to-[#e94057]"
        }`}
        onClick={() => {
          router.push("/cuisine/American");
          setItalian(false);
          setAmerican(true);
          setThai(false);
          setJapanese(false);
        }}
      >
        <FaHamburger className="text-white text-2xl active:text-base" />
        <h4 className="text-white text-base active:text-sm">American</h4>
      </div>

      <div
        className={`${
          thai
            ? "w-24 h-24 cursor-pointer scale-75 flex justify-center mx-8 my-0 flex-col items-center rounded-[50%] bg-gradient-to-r from-[#f27121] to-[#e94057]"
            : "w-24 h-24 cursor-pointer scale-75 flex justify-center mx-8 my-0 flex-col items-center rounded-[50%] bg-gradient-to-r from-[#494949] to-[#313131] active:bg-gradient-to-r active:from-[#f27121] active:to-[#e94057]"
        }`}
        onClick={() => {
          router.push("/cuisine/Thai");
          setItalian(false);
          setAmerican(false);
          setThai(true);
          setJapanese(false);
        }}
      >
        <GiNoodles className="text-white text-2xl active:text-base" />
        <h4 className="text-white text-base active:text-sm">Thai</h4>
      </div>

      <div
        className={`${
          japanese
            ? "w-24 h-24 cursor-pointer scale-75 flex justify-center mx-8 my-0 flex-col items-center rounded-[50%] bg-gradient-to-r from-[#f27121] to-[#e94057]"
            : "w-24 h-24 cursor-pointer scale-75 flex justify-center mx-8 my-0 flex-col items-center rounded-[50%] bg-gradient-to-r from-[#494949] to-[#313131] active:bg-gradient-to-r active:from-[#f27121] active:to-[#e94057]"
        }`}
        onClick={() => {
          router.push("/cuisine/Japanese");
          setItalian(false);
          setAmerican(false);
          setThai(false);
          setJapanese(true);
        }}
      >
        <GiChopsticks className="text-white text-2xl active:text-base" />
        <h4 className="text-white text-base active:text-sm">Japanese</h4>
      </div>
    </div>
  );
}

export default Category;
