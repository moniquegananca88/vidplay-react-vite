import { useNavigate } from 'react-router-dom'
import { getImages } from '../../services/utils/getImages'
import { Container } from './style'

function Card({ item, type }) {
  const navigate = useNavigate()

  const imagePath =
    item.poster_path || item.profile_path

  const handleClick = () => {
    // Se for série
    if (
      type === 'tv' ||
      item.media_type === 'tv'
    ) {
      navigate(`/serie/${item.id}`)
      return
    }

    // Se for filme
    navigate(`/detalhe/${item.id}`)
  }

  return (
    <Container onClick={handleClick}>
      {imagePath && (
        <img
          src={getImages(imagePath)}
          alt={item.title || item.name}
        />
      )}

      <h3>
        {item.title || item.name || 'Sem tradução'}
      </h3>

      
    </Container>
  )
}

export default Card