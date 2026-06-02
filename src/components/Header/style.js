import styled from 'styled-components'

export const Container = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 130px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;
  margin: 0;

  box-sizing: border-box;

  background-color: ${props =>
    props.$changeBackground ? 'rgba(0, 0, 0, 0.59)' : 'transparent'};

  transition: background-color 0.5s ease-in-out;

  img {
    width: 25%;
    max-width: 260px;
    margin: 0;
  }

  @media (max-width: 1031px) {
    width: 100%;
    height: 90px;
    padding: 0 20px;
    margin: 0;

    img {
      width: 45%;
      max-width: 180px;
      margin: 0;
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  margin: 150px;

  @media (max-width: 1031px) {
    position: fixed;
    top: 90px;
    left: 0;

    width: 100%;

    background: rgba(0, 0, 0, 0.95);
    
    flex-direction: column;
    gap: 20px;

    padding: 60px;

    margin: 0;

    display: ${({ $open }) =>
      $open ? 'flex' : 'none'};
  }
`
export const Li = styled.li`
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${props => (props.$isActive ? '100%' : '0')};
    background-color: #E50914;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
  @media (max-width: 1031px) {
    font-size: 20px;  
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  position: absolute;
  right: 30px;
`

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

export const SearchInput = styled.input`
  width: 260px;
  height: 38px;
  padding: 0 15px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  margin-right: 10px;
  outline: none;
  animation: expand 0.3s ease;

  @keyframes expand {
    from {
      width: 0;
      opacity: 0;
    }

    to {
      width: 260px;
      opacity: 1;
    }
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`

export const Results = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 320px;
  max-height: 400px;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 10px;
  z-index: 9999;
`

export const ResultItem = styled.div`
  color: white;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #E50914;
  }
`
export const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  

  @media (max-width: 1031px) {
    display: block;
    
    
  }
`
