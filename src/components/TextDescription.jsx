import React from 'react'
import { Typography } from '@mui/material';

const TextDescription = ({ desc, color = '#555', align = 'left' }) => {
    const displayText = desc.length > 35 ? desc.slice(0, 35) + '...' : desc;
    return (
        <Typography
            variant="body2"
            align={align}
            sx={{
                width: '100%',
                fontSize: 9,
                color: color,
                lineHeight: 1.4,
                wordBreak: 'break-word', // ตัดคำเมื่อเกิน container
            }}
        >
            {displayText}
        </Typography>
    )
}

export default TextDescription