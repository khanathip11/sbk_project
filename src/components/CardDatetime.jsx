import React from 'react';
import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const CardDatetime = ({ date, time, color = "text.secondary", fontSize = 9 }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: fontSize + 2, color }} />
            <Typography
                variant="body2"
                sx={{
                    color,
                    fontSize,
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                }}
            >
                {date} | {time}
            </Typography>
        </Box>
    )
}

export default CardDatetime