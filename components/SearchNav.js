import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

function SearchNav() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search/${input}`);
  };

  return (
    <form onSubmit={submitHandler} className="w-3/4 mx-auto my-0">
      <div className="w-full relative">
        <FaSearch className="absolute top-1/2 left-0 text-white translate-x-[100%] translate-y-[-50%]"></FaSearch>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="w-full border-none bg-gradient-to-r from-[#494949] to-[#313131] text-white px-12 py-4 rounded-2xl outline-none"
        />
      </div>
    </form>
  );
}

export default SearchNav;
