import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SearchNav from "../../components/SearchNav";
import Category from "../../components/Category";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";

function Search() {
  const router = useRouter();
  const { search } = router.query;
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getSearch(search);
  }, [search]);

  const getSearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=e1e24a34c17a4e5c915971e5691d06a8&query=${name}`,
    );

    const recipes = await data.json();
    setSearchResult(recipes.results);
  };

  return (
    <div className="m-0 p-0 box-border font-Oleo antialiased">
      <div className="mx-[20%]">
        <Navbar />
        <SearchNav />
        <Category />
        <div className="w-full h-full 10 mx-0 my-8">
          {searchResult.length === 0 ? (
            <div className="flex justify-center">
              <div className=" space-y-7">
                <Loading />
                <h1 className="text-4xl">
                  Sorry. If Loading too Long.
                  <span className="text-red-800">{search}</span> No Found
                </h1>
              </div>
            </div>
          ) : (
            <div className=" grid grid-cols-4 gap-6">
              {searchResult.map((cuisine) => (
                <div key={cuisine.id} className="text-center w-full">
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

export default Search;
