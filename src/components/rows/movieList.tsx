import RowTemplate from "./rowTemplate";

const MovieList = () => {
  const categories = ["Netflix Original", "Top Rated", "Fantasy", "Action", "Comedy", "Anime"];
 
  return (
    <div className="grid gap-8">
      {categories.map((cat) => (
        <RowTemplate key={cat} category={cat} />
      ))}
    </div>
  );
};

export default MovieList;
