import styled from 'styled-components'

export const Background = styled.div`
      height: 100vh;
      width: 100vw;
      z-index: 999;
      background-color:rgba(0,0,0,0.6);
      position: fixed;
      inset:0;
      display: flex;
      align-items:center;
      justify-content: center;
       z-index: 9999;
`
export const Container = styled.div`

    background: #000;
    width:70%;
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;
    padding: 50px;
    max-width: 1200px;

    iframe {
      border:none;
      border-radius: 10px;
    }
`
export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 40px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: white;
  font-size: 20px;
`

