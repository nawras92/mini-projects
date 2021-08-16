import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchAction } from "../redux/actions/SearchAction";
const SearchBar = (props) => {
  const { handleFormSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SearchAction({ term: searchTerm }));
    handleFormSubmit(searchTerm);
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="search-bar">
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <div className="search-bar-field">
          <label className="search-bar-label" htmlFor="video-search"></label>
          <input
            placeholder="Search..."
            className="search-bar-input"
            type="text"
            name="video-search"
            onChange={handleChange}
            value={searchTerm}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
