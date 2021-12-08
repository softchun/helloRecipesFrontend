import React from 'react';
import RecipesList from '../components/RecipesList';

function Recipes() {

    const body = {
        from: 0,
        size: 30,
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginTop: 30, fontSize: 48, fontWeight: 300 }}>
                Recipes
            </div>
            <RecipesList body={body}/>
        </div>
    )
}

export default Recipes