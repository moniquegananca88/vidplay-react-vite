import { useEffect, useState } from 'react'

import { getMovieVideos, getSeriesVideos } from '../../services/getData'

import { Container, Background, CloseButton } from './style'

function Modal({ movieId, setShowModal, type = 'movie' }) {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function getVideos() {
      const response =
        type === 'tv'
          ? await getSeriesVideos(movieId)
          : await getMovieVideos(movieId)

      setVideos(response || [])
    }

    getVideos()
  }, [movieId, type])

  const trailer =
    videos?.find(video => video.site === 'YouTube' && video.type === 'Trailer') ||
    videos?.find(video => video.site === 'YouTube') ||
    videos?.[0]

  return (
    <Background onClick={() => setShowModal(false)}>
      <Container onClick={(event) => event.stopPropagation()}>
        <CloseButton onClick={() => setShowModal(false)}>
          X Fechar
        </CloseButton>

        {trailer ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}?cc_load_policy=1&cc_lang_pref=pt`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        ) : (
          <p>Trailer não encontrado.</p>
        )}
      </Container>
    </Background>
  )
}

export default Modal