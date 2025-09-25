import React from 'react'
import { Box, Typography } from '@mui/material';

const ResultCard = ({ count, imgSrc }) => {
    const displayCount = count > 120 ? 120 : count;
    return (
        <Box
            sx={{
                pt: 0,
                width: "100%",
                display: "flex",
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Box sx={{
                textAlign: "left",
                display: "flex",
                alignItems: 'center',
                gap: 1
            }}>
                <Typography sx={{ color: "red", fontWeight: "bold", fontSize: 12 }}>
                    {count}
                </Typography>
                <Typography sx={{ color: "black", fontSize: 12 }}>
                    Result in Thailand
                </Typography>
            </Box>
        </Box>
    )
}

export default ResultCard