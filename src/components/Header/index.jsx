import {
  Container,
  Menu,
  Li,
  SearchContainer,
  SearchInput,
  SearchButton,
  Results,
  ResultItem,
  MenuButton
} from "./style";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

import Logo from "../../assets/logo.png";
import { searchMulti } from "../../services/getData";

function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    async function searchData() {
      if (!search) {
        setResults([]);
        return;
      }

      const response = await searchMulti(search);
      setResults(response);
    }

    searchData();
  }, [search]);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 150) {
        setChangeBackground(true);
      } else {
        setChangeBackground(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleNavigate(path) {
    navigate(path);
    setMenuOpen(false);
    setSearch("");
    setResults([]);
    setShowSearch(false);
  }

  return (
    <Container $changeBackground={changeBackground}>
      <img src={Logo} alt="logo-dev-movies" />

      <Menu $open={menuOpen}>
        <Li $isActive={pathname === "/"}>
          <Link onClick={() => setMenuOpen(false)} to="/">
            Home
          </Link>
        </Li>

        <Li $isActive={pathname.includes("filmes")}>
          <Link onClick={() => setMenuOpen(false)} to="/filmes">
            Filmes
          </Link>
        </Li>

        <Li $isActive={pathname.includes("series")}>
          <Link onClick={() => setMenuOpen(false)} to="/series">
            Séries
          </Link>
        </Li>
      </Menu>

      <SearchContainer>
        {showSearch && (
          <SearchInput
            placeholder="Títulos, séries e filmes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
        )}

        <SearchButton onClick={() => setShowSearch(!showSearch)}>
          <FaSearch />
        </SearchButton>

        {results.length > 0 && (
          <Results>
            {results
              .filter(
                (item) =>
                  item.media_type === "movie" ||
                  item.media_type === "tv"
              )
              .map((item) => (
                <ResultItem
                  key={`${item.media_type}-${item.id}`}
                  onClick={() => {
                    if (item.media_type === "movie") {
                      handleNavigate(`/detalhe/${item.id}`);
                    } else {
                      handleNavigate(`/serie/${item.id}`);
                    }
                  }}
                >
                  {item.title || item.name}
                </ResultItem>
              ))}
          </Results>
        )}
      </SearchContainer>

      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>
    </Container>
  );
}

export default Header;