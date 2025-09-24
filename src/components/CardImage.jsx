import React from 'react';
import { Box } from '@mui/material';

const CardImage = ({ src, alt, height }) => {
    return (
        <Box
            component="img"
            src="/images/thailand.jpg"
            alt="Thailand"
            sx={{
                width: 76,
                height: 76,
                borderRadius: 2,
                objectFit: 'cover',  // รูปเต็ม container โดยไม่ยืด
                boxShadow: 2,
                mt: -0.5,
                ml: -0.5
            }}
        />
    );
};

export default CardImage;
