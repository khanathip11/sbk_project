import React from 'react'
import { Box, Typography } from '@mui/material';

const ResultCard = ({ count, imgSrc }) => {
    const displayCount = count > 120 ? 120 : count;
    return (
        <Box
            sx={{
                // p: 2,
                pt: 0,
                width: "100%",
                display: "flex",
                justifyContent: 'space-between',
                alignItems: 'center'
                // textAlign: "center",
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

            {/* ชิดขวา */}
            {/* <Box sx={{ textAlign: "right", backgroundColor: '#FF9999', p: 0.2, borderRadius: 2 }}>
                <Typography sx={{ color: "red", fontSize: 10, p: 0.5 }}>
                    ระบบรับข้อมูลแล้ว
                </Typography>
            </Box> */}
        </Box>
    )
}

export default ResultCard