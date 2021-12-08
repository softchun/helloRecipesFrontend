import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecipesList from '../components/RecipesList';
import { Button } from '@mui/material';

function Index() {
    
    const navigate = useNavigate();

    const body = [
        { from: 100, size: 3 },
        { from: 0, size: 3, tags: 'thanksgiving' },
        { from: 0, size: 3, tags: 'seafood' },
        { from: 0, size: 3, tags: 'italian' },
        { from: 0, size: 3, tags: 'desserts' },
    ];

    return (
        <div style={{margin:'auto'}}>
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'center', marginTop: 30 }}>
                    <div style={{ textAlign: 'start', fontSize: 48, fontWeight: 300 }}>
                        Recipes
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Button onClick={() => {navigate(`/recipes`)}} variant="contained" style={{ backgroundColor: '#C9CCD5', color: 'black'}}>SEE MORE...</Button>
                    </div>
                </div>
                <RecipesList body={body[0]} />
                <div  style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
                    <hr/>
                </div>
            </div>

            <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'center', marginTop: 30 }}>
                    <div style={{ textAlign: 'start', fontSize: 48, fontWeight: 300 }}>
                        Thanksgiving
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Button onClick={() => {navigate(`/tag/thanksgiving`)}} variant="contained" style={{ backgroundColor: '#C9CCD5', color: 'black'}}>SEE MORE...</Button>
                    </div>
                </div>
                <RecipesList body={body[1]} />
                <div  style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
                    <hr/>
                </div>
            </div>

            {/* <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'center', marginTop: 30 }}>
                    <div style={{ textAlign: 'start', fontSize: 48, fontWeight: 300 }}>
                        Seafood
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Button onClick={() => {navigate(`/tag/seafood`)}} variant="contained" style={{ backgroundColor: '#C9CCD5', color: 'black'}}>SEE MORE...</Button>
                    </div>
                </div>
                <RecipesList body={body[2]} />
                <div  style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
                    <hr/>
                </div>
            </div> */}
            
            <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'center', marginTop: 30 }}>
                    <div style={{ textAlign: 'start', fontSize: 48, fontWeight: 300 }}>
                        Italian
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Button onClick={() => {navigate(`/tag/italian`)}} variant="contained" style={{ backgroundColor: '#C9CCD5', color: 'black'}}>SEE MORE...</Button>
                    </div>
                </div>
                <RecipesList body={body[3]} />
                <div  style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
                    <hr/>
                </div>
            </div>

            <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'center', marginTop: 30 }}>
                    <div style={{ textAlign: 'start', fontSize: 48, fontWeight: 300 }}>
                        Desserts
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Button onClick={() => {navigate(`/tag/desserts`)}} variant="contained" style={{ backgroundColor: '#C9CCD5', color: 'black'}}>SEE MORE...</Button>
                    </div>
                </div>
                <RecipesList body={body[4]} />
                <div  style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Index