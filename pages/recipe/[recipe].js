import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchNav from "../../components/SearchNav";
import Category from "../../components/Category";
import Image from "next/image";

function Recipe() {
  const router = useRouter();
  const { recipe } = router.query;

  const [detailResult, setDetailResult] = useState([]);

  const [activeTab, setActiveTab] = useState("instruction");

  const fetchDetail = async (id) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=e1e24a34c17a4e5c915971e5691d06a8`,
    );

    const detailData = await data.json();
    setDetailResult(detailData);
  };

  useEffect(() => {
    fetchDetail(recipe);
  }, [recipe]);

  return (
    <div className="m-0 p-0 box-border font-Montserrat antialiased">
      <div className="mx-[20%]">
        <SearchNav />
        <Category />
        {detailResult.length === 0 ? (
          "loading"
        ) : (
          <div className="mt-40 mb-20 flex ">
            <div className="w-1/2  h-full">
              <h2 className=" text-base font-semibold mb-8">
                {detailResult.title}
              </h2>
              <Image
                className=" absolute w-full h-full "
                src={detailResult.image}
                alt={detailResult.title}
                objectFit="cover"
                width={200}
                height={200}
              />
            </div>

            <div className=" w-1/2">
              <div className="flex w-1/2 h-10 ">
                <button
                  onClick={() => setActiveTab("instruction")}
                  className={
                    activeTab === "instruction"
                      ? "px-8  text-white bg-[#313131] border-2 border-black mr-8 font-semibold"
                      : "px-8  text-[#313131] bg-white border-2 border-black mr-8 font-semibold"
                  }
                >
                  Instruction
                </button>
                <button
                  onClick={() => setActiveTab("ingredients")}
                  className={
                    activeTab === "ingredients"
                      ? "px-8  text-white bg-[#313131] border-2 border-black mr-8 font-semibold"
                      : "px-8  text-[#313131] bg-white border-2 border-black mr-8 font-semibold"
                  }
                >
                  Ingredient
                </button>
              </div>

              {activeTab === "instruction" && (
                <div className="">
                  <h3
                    className="text-sm text-gray-800 leading-6 mx-0 my-1"
                    dangerouslySetInnerHTML={{ __html: detailResult.summary }}
                  ></h3>
                  <h3
                    className="text-sm text-gray-800 leading-6 mx-0 my-1"
                    dangerouslySetInnerHTML={{
                      __html: detailResult.instructions,
                    }}
                  ></h3>
                </div>
              )}

              {activeTab === "ingredients" && (
                <ul className="mt-2">
                  {detailResult.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipe;
