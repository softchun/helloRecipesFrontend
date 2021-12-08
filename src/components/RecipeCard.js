import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardActionArea, Avatar } from '@mui/material';

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
}

function RecipeCard({ recipe }) {

    const navigate = useNavigate();

    function handleClick(id) {
        navigate(`/recipes/${id}`);
    }

    return (
        <Card sx={{ maxWidth: 345, minWidth: 310, margin: 2, bgcolor: '#DCDFE5' }}>
            <CardActionArea onClick={() => handleClick(recipe.id)}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "#C9CCD5" }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={recipe.name}
                subheader={timeConverter(recipe.created_at)}
            />
            <CardMedia
                component="img"
                height="240"
                image={recipe.thumbnail_url}
                alt="Paella dish"
            />
            </CardActionArea>
        </Card>
    )
}

export default RecipeCard