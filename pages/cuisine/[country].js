import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Category from "../../components/Category";
import Image from "next/image";
import SearchNav from "../../components/SearchNav";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";

function Country() {
  const router = useRouter();
  const { country } = router.query;

  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    getCuisine(country);
  }, [country]);

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=e1e24a34c17a4e5c915971e5691d06a8&cuisine=${name}`,
    );

    const recipes = await data.json();
    setCuisines(recipes.results);
  };
  return (
    <div className="m-0 p-0 box-border font-Oleo antialiased">
      <div className="mx-[20%]">
        <Navbar />
        <SearchNav />
        <Category />
        <div className="w-full h-full 10 mx-0 my-8">
          {cuisines.length === 0 ? (
            <Loading />
          ) : (
            <div className=" grid grid-cols-4 gap-6">
              {cuisines.map((cuisine) => (
                <div
                  onClick={() => {
                    router.push(`/recipe/${cuisine.id}`);
                  }}
                  key={cuisine.id}
                  className="text-center w-full"
                >
                  <Image
                    className="rounded-[2rem] w-full "
                    src={cuisine.image}
                    alt={cuisine.title}
                    objectFit="cover"
                    width={250}
                    height={200}
                  />
                  <div className="">{cuisine.title}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Country;
