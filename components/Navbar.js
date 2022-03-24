import { useRouter } from "next/router";
import { GiKnifeFork } from "react-icons/gi";

function Navbar() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="px-0 py-10 flex justify-start items-center drop-shadow-md cursor-pointer"
    >
      <GiKnifeFork className="text-4xl" onClick={() => router.push("/")} />
      <div className="text-4xl font-normal font-Oleo antialiased">
        RecipeYummy!!
      </div>
    </div>
  );
}

export default Navbar;
