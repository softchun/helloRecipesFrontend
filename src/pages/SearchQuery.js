import React from 'react';
import { useLocation } from "react-router-dom";
import RecipesList from '../components/RecipesList';

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

function SearchQuery(){

    const query = useQuery();

    const q = query.get("q");
    //const tags = query.get("tags");

    const body = {
        from: 0,
        size: 30,
        q
    };

    return(
        <div>
            <div style={{ textAlign: 'center', marginTop: 30, fontSize: 48, fontWeight: 300 }}>
                Search: {q}
            </div>
            <RecipesList body={body}/>
        </div>
    )
}

export default SearchQuery