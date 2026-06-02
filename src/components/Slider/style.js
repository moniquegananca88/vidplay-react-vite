import styled from 'styled-components'

export const Container = styled.div`
  background: #000;
  padding: 0 40px;

  h2 {
    color: #fff;
    font-size: 24px;
    margin: 50px 0 20px 20px;
  }

  .swiper {
    position: relative;
    padding: 0 45px;
    
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff !important;
    background: rgba(0, 0, 0, 0.8);
    width: 35px !important;
    height: 35px !important;
    border-radius: 50%;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 18px !important;
  }

  .swiper-button-prev {
    left: 5px !important;
  }

  .swiper-button-next {
    right: 5px !important;
  }

  @media (max-width: 768px) {
    padding: 0 10px;

    h2 {
      font-size: 20px;
      text-align: center;
      margin: 40px 0 20px;
    }

    .swiper {
      padding:  40px;
      
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: flex !important;
      width: 30px !important;
      height: 30px !important;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 16px !important;
    }
  }
`