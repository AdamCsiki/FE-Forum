import "./SearchBar.css";
import Input from "../Input/Input";

function SearchBar() {
	return (
		<div className="searchbar-container">
			<Input
				id={"searchbar-input"}
				placeholder={"Search"}
			/>
		</div>
	);
}
export default SearchBar;
