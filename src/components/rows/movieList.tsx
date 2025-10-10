import RowTemplate from "./rowTemplate";

const MovieList = () => {
  const categories = ["Netflix Original", "Top Rated", "Fantasy", "Action", "Comedy", "Anime"];

  return (
    <div className="grid gap-8">
      {categories.map((category) => (
        <RowTemplate key={category} category={category} />
      ))}
    </div>
  );
};

export default MovieList;
