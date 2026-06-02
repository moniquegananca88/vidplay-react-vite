import Button from "../../components/Button";
import Slider from "../../components/Slider";

import { Background, Info, Poster, Container, ContainerButtons } from "./style";

import { useEffect, useState } from "react";
import { getImages } from "../../services/utils/getImages";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";

import {
  getMovies,
  getTopMovies,
  getTopSeries,
  getPopularSeries,
  getTopPeople,
  getMovieById,
  getMovieCertification,
} from "../../services/getData";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const [certification, setCertification] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      const [movies, topMovies, topSeries, popularSeries, topPeople] =
        await Promise.all([
          getMovies(),
          getTopMovies(),
          getTopSeries(),
          getPopularSeries(),
          getTopPeople(),
        ]);

      const movieDetails = await getMovieById(movies[1].id);
const certifications = await getMovieCertification(movies[1].id);

      const brazilCertification =
        certifications
          ?.find((item) => item.iso_3166_1 === "BR")
          ?.release_dates?.find((item) => item.certification)?.certification ||
        "L";

      setMovie(movieDetails);
      setCertification(brazilCertification);
      setTopMovies(topMovies);
      setTopSeries(topSeries);
      setPopularSeries(popularSeries);
      setTopPeople(topPeople);
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
  <Modal
    movieId={movie.id}
    setShowModal={setShowModal}
    type="movie"
  />
)}

          <Container>
            <Info>
              <h1>{movie.title}</h1>

              <div className="movie-details">
                <span>{certification}</span>

                {movie.genres?.map((genre) => (
                  <small key={genre.id}>{genre.name}</small>
                ))}
              </div>

              <p>{movie.overview}</p>

              <ContainerButtons>
                <Button
                  red
                  onClick={() => {
                    console.log("ASSISTA AGORA");
                    navigate(`/detalhe/${movie.id}`);
                  }}
                >
                  Assista Agora
                </Button>

                <Button onClick={() => setShowModal(true)}>
  Assista o Trailer
</Button>
              </ContainerButtons>
            </Info>

            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}

      {topMovies && <Slider info={topMovies} title="Top Filmes" type="movie" />}

      {topSeries && <Slider info={topSeries} title="Top Séries" type="tv" />}

      {popularSeries && (
        <Slider info={popularSeries} title="Séries Populares" type="tv" />
      )}

      {topPeople && <Slider info={topPeople} title="Top Artistas" />}
    </>
  );
}

export default Home;
