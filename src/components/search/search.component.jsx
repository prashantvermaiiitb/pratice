import { SearchBoxInput } from "./search.styles";

const SearchBox = ({ value, onValueChange }) => {
  return (
    <SearchBoxInput
      placeholder="Enter Id to highlight"
      type="number"
      min={1}
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
    />
  );
};

export default SearchBox;
