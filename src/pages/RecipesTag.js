import React from 'react';
import { useParams } from "react-router-dom";
import RecipesList from '../components/RecipesList';

function RecipesTag() {

    const { tags } = useParams();

    const body = {
        from: 0,
        size: 30,
        tags
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginTop: 30, fontSize: 48, fontWeight: 300 }}>
                Tag: {tags}
            </div>
            <RecipesList body={body}/>
        </div>
    )
}

export default RecipesTag