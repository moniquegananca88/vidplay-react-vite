import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
  getMovieProviders,
  getMovieCertification,
} from "../../services/getData";

import { getImages } from "../../services/utils/getImages";

import {
  Container,
  Background,
  Cover,
  Info,
  ContainerMovies,
  WatchButton,
} from "./style";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieSimilar, setMovieSimilar] = useState([]);
  const [providers, setProviders] = useState({});
  const [certification, setCertification] = useState("");

  const providerLink =
    providers?.PT?.link ||
    providers?.BR?.link ||
    Object.values(providers || {})[0]?.link ||
    `https://www.themoviedb.org/movie/${id}/watch`;

  useEffect(() => {
    async function getAllData() {
      const [movie, videos, credits, similar, providersData, certifications] =
        await Promise.all([
          getMovieById(id),
          getMovieVideos(id),
          getMovieCredits(id),
          getMovieSimilar(id),
          getMovieProviders(id),
          getMovieCertification(id),
        ]);

      const brazilCertification =
        certifications
          ?.find((item) => item.iso_3166_1 === "BR")
          ?.release_dates?.find((item) => item.certification)?.certification ||
        "L";

      setMovie(movie);
      setMovieVideos(videos);
      setMovieCredits(credits);
      setMovieSimilar(similar);
      setProviders(providersData?.results || providersData || {});
      setCertification(brazilCertification);
    }

    getAllData();
  }, [id]);

  return (
    <>
      {movie && (
        <>
          <Background
            $image={movie.backdrop_path ? getImages(movie.backdrop_path) : null}
          />

          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} alt={movie.title} />
            </Cover>

            <Info>
              <h2>{movie.title}</h2>

              <div className="movie-details">
                <span>+ {certification}</span>

                {movie.genres?.map((genre) => (
                  <small key={genre.id}>{genre.name}</small>
                ))}
              </div>

              <p>{movie.overview}</p>

              <a href={providerLink} target="_blank" rel="noreferrer">
                <WatchButton>🎬 Assistir</WatchButton>
              </a>

              <div className="credits-container">
  <Credits credits={movieCredits} />
</div>
            </Info>
          </Container>

          <ContainerMovies>
            {movieVideos.slice(0, 3).map((video) => (
              <div key={video.id}>
                <h4>{video.name}</h4>

                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  width="100%"
                  height="500"
                  allowFullScreen
                />
              </div>
            ))}
          </ContainerMovies>

          {movieSimilar.length > 0 && (
            <Slider info={movieSimilar} title="Filmes Similares" type="movie" />
          )}
        </>
      )}
    </>
  );
}

export default Detail;
