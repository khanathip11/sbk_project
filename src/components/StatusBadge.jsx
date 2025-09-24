import React from 'react'
import { Chip } from '@mui/material';

const StatusBadge = ({ status, color, bgColor, statusMB, borderMB, width, height, backgroundColor, backdropFilter, borderRadius, sx }) => {
    const displayStatus = statusMB || status;

    return (
        <Chip
            label={displayStatus}
            size="small"
            variant="filled"
            sx={{
                bgcolor: bgColor || backgroundColor,
                color: color || 'white',
                width: width || 'auto',  // ใช้ props width ถ้ามี ถ้าไม่มีก็ auto
                height: height || 22,
                fontSize: 8,
                fontWeight: "bold",
                borderRadius: borderRadius || 1,
                borderLeft: borderMB,
                backdropFilter: backdropFilter,
                ...sx
            }}
        />
    )
}

export default StatusBadge