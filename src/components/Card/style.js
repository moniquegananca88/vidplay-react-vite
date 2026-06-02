import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    border-radius: 30px;
    width: 280px;
    height: 420px;
    object-fit: cover;
    margin: 10px;
  }

  h3 {
    color: #ffffff;
    margin-top: 15px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 320px;

    img {
      width: 320px;
      height: 480px;
    }

    h3 {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    width: 280px;

    img {
      width: 280px;
      height: 420px;
    }

    h3 {
      font-size: 16px;
    }
  }
`