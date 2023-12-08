// Results.js

import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result, index) => (
        <Thumbnail
          key={result.id}
          result={result}
          code={`ABC76DEU34EX${index + 1}`} // Start with 1 and increment for each movie
        />
      ))}
    </FlipMove>
  );
};

export default Results;
