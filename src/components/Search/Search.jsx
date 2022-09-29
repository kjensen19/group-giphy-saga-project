import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Search(){
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const searchForGifs = () => {
        console.log(searchTerm);
        dispatch({
            type: 'SEARCH_GIFS_S',
            payload: searchTerm
        });
    };

    return (
        <div className="searchSection">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={searchForGifs}>Submit</button>
        </div>
    )
}

export default Search;