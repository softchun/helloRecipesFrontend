import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

function RecipesList({ body }) {

    const [data, setData] = useState();

    useEffect(() => {
        axios.post(`https://pink-mysterious-octopus.cyclic.app/recipes/search`, { body })
            .then((res) => {
                setData(res.data.data.recipeList)
            })
    }, [body]);

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div style={{ display: 'inline-flex', flexWrap: 'wrap', margin: 'auto', width: '95%', justifyContent: 'center' }}>
                    {data && data.map(obj => {
                        return (
                            <RecipeCard recipe={obj} key={obj.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RecipesList
