import React from 'react'
import { Chip, } from '@mui/material';

const Issue = ({ issue }) => {
    const displayText = issue.length > 15 ? issue.slice(0, 15) + "..." : issue;
    return (
        <Chip
            label={displayText}
            size="small"
            sx={{
                bgcolor: 'white',
                color: "blue",
                height: 22,
                fontSize: 8,
                fontWeight: "bold",
                borderRadius: 1,
                ml: -1
            }}
        />
    )
}

export default Issue