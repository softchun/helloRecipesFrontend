import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import MOCK_DATA from '../MOCK_DATA.json';

function Recipes() {
    const data = MOCK_DATA.data.recipeList;
    return (
        <div>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
                <h1>Recipes</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'inline-flex', flexWrap: 'wrap', margin: 'auto', width: '90%', justifyContent: 'center' }}>
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

export default Recipes