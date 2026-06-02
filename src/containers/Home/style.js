import styled, {keyframes} from 'styled-components'

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

export const Background = styled.div`
  background-image: url(${props => props.$img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
  }

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));    
  }

   @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 40px 0;
  }

`
export const Container = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    height: 100%;
    max-width:1500px;

      @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    padding: 100px 20px 40px;
  }

   @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    padding: 80px 20px 40px;
  }

      
`


export const Info = styled.div`
  z-index: 2;
  padding: 120px 20px 20px;
  width: 50%;
  max-height: 80vh;
  overflow: hidden;
  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 28px;
     
  }

  small, span {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);

    padding: 6px 12px;
    border-radius: 20px;
    margin: 10px 8px 0 0; 
    font-size: 14px;
    display: inline-block;
  }

   @media (max-width: 900px) {
    width: 100%;
    padding: 20px;
    max-height: none;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
  
`

export const Poster = styled.div`
  z-index: 2;

  img{
    width: 360px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;
  }
    
  @media (max-width: 900px) {
    img {
      width: 280px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 220px;
      border-radius: 20px;
    }
  }
    
  `
  export const ContainerButtons = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 30px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }


  `
  
