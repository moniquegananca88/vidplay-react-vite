import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background: #000;
  padding-bottom: 50px;
`

export const Banner = styled.div`
  height: 650px;

  background-image: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.9)
    ),
    url(${props => props.$img});

  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  padding-top: 100px;

  @media (max-width: 768px) {
    height: 550px;
    background-position: center top;
    padding: 0 20px;
    align-items: center;
  }

  @media (max-width: 480px) {
    height: 520px;
  }
`

export const Content = styled.div`
  margin-left: 70px;
  max-width: 600px;
  

  h1 {
    color: white;
    font-size: 3rem;
    margin-bottom: 10px;
  }

  p {
    color: white;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  small,
  span {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
    padding: 6px 12px;
    border-radius: 20px;
    margin: 5px 8px 10px 0;
    font-size: 14px;
    display: inline-block;
  }

  @media (max-width: 768px) {
    margin: 120px auto 0;
    max-width: 100%;
    text-align: center;
    padding: 0 10px;

    h1 {
      font-size: 2.2rem;
      margin-bottom: 15px;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  @media (max-width: 480px) {
    margin: 100px auto 0;

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.9rem;
    }

    small,
    span {
      font-size: 12px;
      margin: 6px 4px;
    }
  }
`

export const Section = styled.div`
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`