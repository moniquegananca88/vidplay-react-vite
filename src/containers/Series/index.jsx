import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Slider from "../../components/Slider";
import Modal from "../../components/Modal";

import {
  getTopSeries,
  getPopularSeries,
  getOnAirSeries,
  getSeriesById,
  getSeriesCertification,
} from "../../services/getData";

import { getImages } from "../../services/utils/getImages";

import {
  Container,
  Banner,
  Content,
  Section,
  ContainerButtons,
} from "./style";

function Series() {
  const [popularSeries, setPopularSeries] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [onAirSeries, setOnAirSeries] = useState([]);
  const [bannerSerie, setBannerSerie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [certification, setCertification] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllSeries() {
      const [popular, topRated, onAir] = await Promise.all([
        getPopularSeries(),
        getTopSeries(),
        getOnAirSeries(),
      ]);

      const serieDetails = await getSeriesById(popular[0].id);

      const certifications = await getSeriesCertification(
        popular[0].id
      );

      const brazilCertification =
        certifications?.find(
          (item) => item.iso_3166_1 === "BR"
        )?.rating || "L";

      setPopularSeries(popular);
      setTopSeries(topRated);
      setOnAirSeries(onAir);
      setBannerSerie(serieDetails);
      setCertification(brazilCertification);
    }

    getAllSeries();
  }, []);

  return (
    <Container>
      {bannerSerie && (
        <Banner $img={getImages(bannerSerie.backdrop_path)}>
          {showModal && (
            <Modal
              movieId={bannerSerie.id}
              setShowModal={setShowModal}
              type="tv"
            />
          )}

          <Content>
            <h1>{bannerSerie.name}</h1>

            <div className="movie-details">
              <span>+ {certification}</span>

              {bannerSerie.genres?.map((genre) => (
                <small key={genre.id}>{genre.name}</small>
              ))}
            </div>

            <p>{bannerSerie.overview}</p>

            <ContainerButtons>
              <Button
                red
                onClick={() => navigate(`/serie/${bannerSerie.id}`)}
              >
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
        <Slider
          info={onAirSeries}
          title="Séries Recentes"
          type="tv"
        />
      </Section>

      <Section>
        <Slider
          info={popularSeries}
          title="Séries Populares"
          type="tv"
        />
      </Section>

      <Section>
        <Slider
          info={topSeries}
          title="Séries Mais Bem Avaliadas"
          type="tv"
        />
      </Section>
    </Container>
  );
}

export default Series;