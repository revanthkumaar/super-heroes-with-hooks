import React, {useState} from "react";




const Search = (props) => {

    const [search,setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value)
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);//initiate the search
        resetInputField();
    }

    return(
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input
                onClick={callSearchFunction}
                type="submit"
                value="SEARCH"
            />
        </form>
    );
}

export default Search;