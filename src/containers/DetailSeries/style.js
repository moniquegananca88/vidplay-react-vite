import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

export const Background = styled.div`
  background-image: ${({ $image }) => ($image ? `url(${$image})` : 'none')};
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.48);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }

  @media (max-width: 900px) {
    height: 35vh;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1500px;
  margin: 0px auto 0;
  padding: 100px 80px 0;
  gap: 30px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin: -200px auto 0;
    padding: 40px 20px 0;
    gap: 20px;
    text-align: center;
  }
`

export const Cover = styled.div`
  padding: 30px;
  margin-top: -260px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  img {
    width: 400px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 0;
    padding: 2cqh;
    t

    img {
      width: 300px;
      
    }
  }

  @media (max-width: 480px) {
    img {
      width: 240px;
      border-radius: 20px;
    }
  }
`

export const Info = styled.div`
  padding: 20px;
  margin-top: -280px;
  width: 50%;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: #fff;
  }

  p {
    font-weight: 700;
    color: #fff;
    margin: 20px 0 30px;
    line-height: 26px;
  }

  small,
  span {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
    padding: 6px 12px;
    border-radius: 20px;
    margin: 20px 8px 10px 0;
    font-size: 14px;
    display: inline-block;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 0;
    align-items: center;
    text-align: center;

    .credits-container,
    .card-container {
      display: none;
    }

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    h2 {
      font-size: 26px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }

    small,
    span {
      font-size: 12px;
      margin: 8px 4px;
    }
  }
`

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    margin: 20px 0;
  }

  h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  iframe {
    border: none;
    width: 100%;
    height: 500px;
  }

  @media (max-width: 768px) {
    padding: 10px;

    iframe {
      height: 300px;
    }

    h4 {
      font-size: 16px;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    iframe {
      height: 220px;
    }
  }
`

export const WatchButton = styled.button`
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  margin-bottom: 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    background: #ffffff;
    color: #ff0000;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`