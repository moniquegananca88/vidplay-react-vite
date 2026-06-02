import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getSeriesById,
  getSeriesCredits,
  getSeriesSimilar,
  getSeriesVideos,
  getSeriesProviders,
  getSeriesCertification,
} from "../../services/getData";

import { getImages } from "../../services/utils/getImages";

import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

import {
  Container,
  Background,
  Cover,
  Info,
  ContainerMovies,
  WatchButton,
} from "./style";

function DetailSeries() {
  const { id } = useParams();

  const [serie, setSerie] = useState();
  const [serieVideos, setSerieVideos] = useState([]);
  const [serieCredits, setSerieCredits] = useState([]);
  const [serieSimilar, setSerieSimilar] = useState([]);
  const [providers, setProviders] = useState();
  const [certification, setCertification] = useState("");

  useEffect(() => {
    async function getAllData() {
      const [serie, videos, credits, similar, providersData, certifications] =
        await Promise.all([
          getSeriesById(id),
          getSeriesVideos(id),
          getSeriesCredits(id),
          getSeriesSimilar(id),
          getSeriesProviders(id),
          getSeriesCertification(id),
        ]);

      const brazilCertification =
        certifications?.find((item) => item.iso_3166_1 === "BR")?.rating || "L";

      setSerie(serie);
      setSerieVideos(videos);
      setSerieCredits(credits);
      setSerieSimilar(similar);
      setProviders(providersData);
      setCertification(brazilCertification);
    }

    getAllData();
  }, [id]);

  const providerLink =
    providers?.PT?.link ||
    providers?.BR?.link ||
    Object.values(providers || {})[0]?.link;

  return (
    <>
      {serie && (
        <>
          <Background
            $image={serie.backdrop_path ? getImages(serie.backdrop_path) : null}
          />

          <Container>
            <Cover>
              <img src={getImages(serie.poster_path)} alt={serie.name} />
            </Cover>

            <Info>
              <h2>{serie.name}</h2>

              <div className="movie-details">
                <span>+ {certification}</span>

                {serie.genres?.map((genre) => (
                  <small key={genre.id}>{genre.name}</small>
                ))}
              </div>

              <p>{serie.overview}</p>

              {providerLink && (
                <a href={providerLink} target="_blank" rel="noreferrer">
                  <WatchButton>📺 Assistir Série</WatchButton>
                </a>
              )}

              <div className="credits-container">
                <Credits credits={serieCredits} />
              </div>
            </Info>
          </Container>

          <ContainerMovies>
            {serieVideos.slice(0, 3).map((video) => (
              <div key={video.id}>
                <h4>{video.name}</h4>

                <iframe
                  src={`https://www.youtube.com/embed/${video.key}?cc_load_policy=1&cc_lang_pref=pt`}
                  title={video.name}
                  height="500"
                  width="100%"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </ContainerMovies>

          {serieSimilar.length > 0 && (
            <Slider info={serieSimilar} title="Séries Similares" type="tv" />
          )}
        </>
      )}
    </>
  );
}

export default DetailSeries;
