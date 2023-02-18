import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Tag from '../components/Tag';
import Instruction from '../components/Instruction';

function ViewRecipe() {

    const { id } = useParams();

    const [recipe, setRecipe] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/recipes/info/${id}`)
        .then((res) => {
            setRecipe(res.data.data.recipeInfo);
        })
    }, [id]);

    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + ' ' + month + ' ' + year;
        return time;
    }

    return (
        <div>
            {recipe && <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
                    <div style={{fontSize: 48, fontWeight: 200 }}>
                        {recipe.name}
                    </div>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'start', flexWrap: 'wrap', marginBottom: 40 }}>
                        <div style={{ marginRight: 30 }}>CREATED AT {timeConverter(recipe.created_at)}</div>
                        <div>UPDATED AT {timeConverter(recipe.updated_at)}</div>
                    </div>
                    <div>
                        <img alt='' src={recipe.thumbnail_url} style={{ maxWidth: '100%' }} />
                    </div>
                    <div style={{fontSize: 26, fontWeight: 200, marginTop: 30 }}>INSTRUCTIONS</div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'inline-flex', flexWrap: 'wrap', margin: 'auto', width: '90%' }}>
                            {recipe.instructions && recipe.instructions.map(obj => {
                                return (
                                    <Instruction instruction={obj} key={obj.id} />
                                )
                            })}
                        </div>
                    </div>
                    <div style={{fontSize: 26, fontWeight: 200, marginTop: 30 }}>Related to:</div>
                    <div style={{ display: 'flex', marginBottom: 20 }}>
                        <div style={{ display: 'inline-flex', flexWrap: 'wrap', margin: 'auto', width: '90%' }}>
                            {recipe.tags && recipe.tags.map(obj => {
                                return (
                                    <Tag tag={obj} key={obj.id} />
                                )
                            })}
                        </div>
                    </div>
                </Container>
            </Box>}
        </div>
    )
}

export default ViewRecipe
