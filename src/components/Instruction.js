import React from 'react';
import { Avatar, Box } from '@mui/material';

function Instruction({ instruction }){
    return(
        <div style={{ display: 'flex', margin: 8 }}>
            <Avatar sx={{ bgcolor: "#C9CCD5", width: 35, height: 35 }} aria-label="recipe">{instruction.position}</Avatar>
            <Box style={{ paddingTop: 4, marginLeft: 10 }}>{instruction.display_text}</Box>
        </div>
    )
}

export default Instruction