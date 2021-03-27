import { MovieCard } from "./MovieCard";

interface MovieProps {
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
}

interface GenreResponseProps {
  title: string;
}

interface contendProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content(props: contendProps) {
  
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {props.selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
