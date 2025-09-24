import React from 'react';
import { Typography } from "@mui/material";

const CardTitle = ({ text, size = "h6", align = "left", color = "text.primary" }) => {
    const displayText = text.length > 30 ? text.slice(0, 30) + "..." : text;
    return (
        <Typography
            variant={size}
            align={align}
            sx={{
                width: '100%',
                fontWeight: "bold",
                fontSize: 10,
                color: color,
                mb: 2, // margin bottom
            }}
        >
            {displayText}
        </Typography>
    )
}

export default CardTitle