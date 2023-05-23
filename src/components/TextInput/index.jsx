import p from 'prop-types'
import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      type="search"
      onChange={handleChange}
      value={searchValue}
      placeholder="Search"
    />
  );
};


TextInput.propTypes = {
  searchValue: p.string.isRequired,
  handleChange: p.func.isRequired,
}
