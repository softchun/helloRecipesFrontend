import React from 'react';
import { Chip } from '@mui/material';

function Tag({ tag }){

    return(
        <div style={{margin:5}}>
            <Chip style={{backgroundColor: '#DCDFE5'}} label={tag.display_name} component="a" href={`/tag/${tag.name}`} clickable />
        </div>
    )
}

export default Tag