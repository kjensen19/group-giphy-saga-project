import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Nav(){
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const searchForGifs = () => {
        console.log(searchTerm);
        dispatch({
            type: 'SEARCH_GIFS_S',
            payload: searchTerm
        });
    };

    const showFaves = () => {
        console.log('in showFaves')
        dispatch({
            type: 'GET_FAVES_S'
        })
    };

    return (

        <div className="searchSection">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={searchForGifs}>Submit</button>
            <button onClick={showFaves}>Show Favorites</button>
        </div>
    )
}

export default Nav;