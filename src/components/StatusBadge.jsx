import React from 'react'
import { Chip } from '@mui/material';

const StatusBadge = ({ status, color, bgColor }) => {

    return (
        <Chip
            label={status}
            size="small"
            variant="filled" // ✅ ต้องระบุ filled เพื่อใช้ bgcolor
            sx={{
                bgcolor: bgColor || 'grey',
                color: color || 'white',
                height: 22,
                fontSize: 8,
                fontWeight: "bold",
                borderRadius: 1,
            }}
        />
    )
}

export default StatusBadge