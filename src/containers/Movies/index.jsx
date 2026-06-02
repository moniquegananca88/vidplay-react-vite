import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Slider from "../../components/Slider";
import Modal from "../../components/Modal";

import {
  getMovies,
  getTopMovies,
  getRecentMovies,
  getMovieById,
  getMovieCertification,
} from "../../services/getData";

import { getImages } from "../../services/utils/getImages";

import {
  Container,
  Banner,
  Content,
  Section,
  ContainerButtons,
} from "./style";

function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [recentMovies, setRecentMovies] = useState([]);
  const [certification, setCertification] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllMovies() {
      const [movies, topRated, recent] = await Promise.all([
        getMovies(),
        getTopMovies(),
        getRecentMovies(),
      ]);

      const movieDetails = await getMovieById(movies[0].id);
      const certifications = await getMovieCertification(movies[0].id);

      const brazilCertification =
        certifications
          ?.find((item) => item.iso_3166_1 === "BR")
          ?.release_dates?.find((item) => item.certification)
          ?.certification || "L";

      setPopularMovies(movies);
      setTopMovies(topRated);
      setBannerMovie(movieDetails);
      setCertification(brazilCertification);
      setRecentMovies(recent);
    }

    getAllMovies();
  }, []);

  return (
    <Container>
      {bannerMovie && (
        <Banner $img={getImages(bannerMovie.backdrop_path)}>
          {showModal && (
            <Modal
              movieId={bannerMovie.id}
              setShowModal={setShowModal}
              type="movie"
            />
          )}

          <Content>
            <h1>{bannerMovie.title}</h1>

            <div className="movie-details">
              <span>+ {certification}</span>

              {bannerMovie.genres?.map((genre) => (
                <small key={genre.id}>{genre.name}</small>
              ))}
            </div>

            <p>{bannerMovie.overview}</p>

            <ContainerButtons>
  <Button red onClick={() => navigate(`/detalhe/${bannerMovie.id}`)}>
    Assista Agora
  </Button>

  <Button onClick={() => setShowModal(true)}>
    Assista o Trailer
  </Button>
</ContainerButtons>
          </Content>
        </Banner>
      )}

      <Section>
        <Slider info={recentMovies} title="Filmes Recentes" type="movie" />
      </Section>

      <Section>
        <Slider info={popularMovies} title="Filmes Populares" type="movie" />
      </Section>

      <Section>
        <Slider
          info={topMovies}
          title="Filmes Mais Bem Avaliados"
          type="movie"
        />
      </Section>
    </Container>
  );
}

export default Movies;