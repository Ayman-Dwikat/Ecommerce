import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { assets } from "../assets/assets";
import { setSearch, setShowSearch } from "../store/slices/searchSlice";
import styled from "styled-components";

const SearchContainer = styled.div`
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  background-color: #f8f9fa;
  text-align: center;
`;

const SearchBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #888;
  padding: 0.5rem 1.3rem;
  margin: 1rem 0.75rem;
  border-radius: 50px;
  width: 75%;
  max-width: 50%;
  transition: all 0.2s ease-in-out;

  &:focus-within {
    border-color: #333;
    background-color: #f6f6f6;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  background-color: inherit;
  font-size: 0.875rem;
`;

const SearchIcon = styled.img`
  width: 1rem;
  cursor: pointer;
`;

const CloseIcon = styled.img`
  width: 0.85rem;
  cursor: pointer;
`;

const SearchBar = () => {
  const dispatch = useDispatch();
  const { search, showSearch } = useSelector((state) => state.search);

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleHideSearch = () => {
    dispatch(setShowSearch(false));
    dispatch(setSearch(""));
  };

  return (
    showSearch && (
      <SearchContainer>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
          <SearchIcon src={assets.search_icon} alt="search" />
        </SearchBox>
        <CloseIcon
          src={assets.cross_icon}
          alt="close"
          onClick={handleHideSearch}
        />
      </SearchContainer>
    )
  );
};

export default SearchBar;
