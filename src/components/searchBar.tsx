import React, { useState, useCallback, useRef } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { useScroll } from "../hooks/useScroll";
import { fetchNews } from "../actions";

type searchBarProps = {
  fetchNews: (search: string) => void;
};

const SearchBar: React.FC<searchBarProps> = ({ fetchNews }) => {
  const lastYoffset = useRef(0);
  const [searchInput, setSearchInput] = useState("");
  const handleInputChange = useCallback((event) => {
    setSearchInput(event.target.value);
  }, []);

  const submitSearch = useCallback(() => {
    fetchNews(searchInput);
    setSearchInput("");
  }, [fetchNews]);
  useScroll(lastYoffset);

  return (
    <>
      <input
        placeholder="Search some news heare"
        value={searchInput}
        onChange={handleInputChange}
      />
      <button onClick={submitSearch}>Search</button>
    </>
  );
};

const MapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchNews }, dispatch);

export default connect(null, MapDispatchToProps)(SearchBar);
