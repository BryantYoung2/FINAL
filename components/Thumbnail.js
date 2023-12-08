import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef, useState } from "react";

const Thumbnail = forwardRef(({ result, code }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [isCodeEntered, setIsCodeEntered] = useState(false);
  const [inputCode, setInputCode] = useState("");

  const handleCodeSubmit = () => {
    if (inputCode === code) {
      setIsCodeEntered(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCodeSubmit();
    }
  };

  return (
    <div ref={ref} className="p-2 group cursor-pointer relative">
      <Image
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
        height={1080}
        width={1920}
        className={`transition-all duration-300 ease-in-out ${
          isCodeEntered ? "" : "filter blur-md"
        }`}
      />
      <div className="p-2 absolute top-0 left-0 w-full h-full backdrop-filter backdrop-blur-md group-hover:backdrop-blur-0">
        <div className="flex flex-col h-full">
          <h2
            className={`mt-1 text-2xl text-white transition-all duration-100 ease-in-out ${
              isCodeEntered ? "group-hover:font-bold" : ""
            }`}
            style={{
              textShadow: isCodeEntered ? "2px 2px 2px black" : "none",
            }}
          >
            {isCodeEntered ? result.title || result.original_name : "Input Code:"}
          </h2>
          {isCodeEntered && (
            <p
              className="text-white flex items-center opacity-0 group-hover:opacity-100"
              style={{
                textShadow: "2px 2px 2px black",
              }}
            >
              {result.media_type && `${result.media_type} *`}{" "}
              {result.release_date || result.first_air_date} *{" "}
              <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
            </p>
          )}
          {!isCodeEntered && (
            <div className="mt-2 flex flex-col">
              <input
                type="text"
                placeholder="Enter Code"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                onKeyDown={handleKeyDown}
                className="p-2 border border-red-300 rounded focus:outline-none mb-2 text-black bg-gray-300"
              />
              <button
                onClick={handleCodeSubmit}
                className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-300 focus:outline-none transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Thumbnail;
