import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 100%;
  padding-left: 3vmin;
  padding-right: 3vmin;
`;

export const NavBar = styled.nav`
  background-color: white;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  input {
    border: 1px solid #555;
    padding: 2vmin 3vmin 2vmin 9vmin;
    background: transparent url("searchIcon.svg") no-repeat 2.3vmin center;
    border-radius: 20px;
    width: 70%;

    &::placeholder {
      font-size: 3.5vmin;
    }
  }

  #search-tags {
    padding: 5px;
    display: flex;
    font-size: 0.8rem;
    width: 100%;
    justify-content: space-between;
    .search-tag {
      padding: 5px 10px;
      border-bottom: solid black 2px;
      font-weight: 500;
      font-size: 1rem;
    }
  }

  #search-tools {
    display: flex;
    width: 100%;
    padding-top: 5px;
    gap: 0rem;
    align-items: center;
    justify-content: center;
  }
`;
export const SearchResultItems = styled(motion.button)`
  color: black;
  background-color: white;
  border: none;
  width: 100%;
  overflow: hidden;
  height: 20vh;
  border-radius: 1rem;
  margin-bottom: 1.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 100%;
    width: 35vw;
    object-fit: cover;
  }

  #product-info {
    padding: 1rem 0.5rem;
    width: 50vw;
    height: 100%;
    text-align: left;
    h4,
    h3 {
      margin: 0;
    }

    h4 {
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
