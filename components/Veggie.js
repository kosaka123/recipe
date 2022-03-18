import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  const lazyRoot = useRef(null);
  const router = useRouter();

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      //string the data to array
      setVeggie(JSON.parse(check));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=e1e24a34c17a4e5c915971e5691d06a8&number=5&tags=vegetarian`,
      );
      const data = await res.json();
      //string it the data
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  return (
    <div>
      {veggie.length === 0 ? (
        "loading"
      ) : (
        <div className="mx-0 my-16">
          <h3 className="text-2xl text-gray-800 leading-10 mx-0 my-8">
            Our Vegetarian Picks
          </h3>
          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {veggie.map((recipe, i) => (
              <SplideSlide key={recipe.id}>
                <div
                  onClick={() => {
                    router.push(`/recipe/${recipe.id}`);
                  }}
                  className=" min-h-[12rem] rounded-[2rem] overflow-hidden relative "
                >
                  <div className="absolute flex justify-center items-center z-50  text-white w-full  text-center text-base font-semibold h-full ">
                    <div className="w-3/4 h-full text-center flex justify-center items-center ">
                      <p className=" mt-20">{recipe.title}</p>
                    </div>
                  </div>

                  <Image
                    className="rounded-[2rem] absolute w-full h-full "
                    src={recipe.image}
                    alt={recipe.title}
                    layout="fill"
                    objectFit="cover"
                    lazyRoot={lazyRoot}
                  />

                  <div className=" z-10 absolute w-full h-full bg-gradient-to-t from-black opacity-50"></div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </div>
  );
}

export default Veggie;
