import React from 'react';
import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CardLocation = ({ location, color = "text.primary", fontSize = 9 }) => {
    const displayText = location.length > 10 ? location.slice(0, 10) : location;
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOnIcon sx={{ fontSize: fontSize + 2, color }} />
            <Typography
                variant="body2"
                sx={{
                    color,
                    fontSize,
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {displayText}
            </Typography>
        </Box>
    )
}

export default CardLocation