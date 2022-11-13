import "./SearchBar.css";
import Input from "../Input/Input";
import { List } from "react-bootstrap-icons";
import InvisButton from "../InvisButton/InvisButton";

function SearchBar() {
	return (
		<div className="SearchBar">
			<Input
				id={"searchbar-input"}
				placeholder={"Search"}
			/>
		</div>
	);
}
export default SearchBar;
