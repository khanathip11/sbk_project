import React from 'react'
import { Grid, Box } from "@mui/material";
import StatusBadge from './StatusBadge';

const StatusMapBox = ({ statusList }) => {
    return (
        // StatusMapBox.jsx
        <Grid
            container
            spacing={1}
            sx={{
                width: '100%',
                flexWrap: 'wrap',
            }}
        >
            {statusList.map((s) => (
                <Grid
                    item
                    xs={6}                  // กำหนด 2 badge ต่อแถว
                    key={s.id}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',  // จัดกลาง
                        px: 0,                     // ลบ padding ซ้ายขวา เพื่อให้เต็ม 50%
                    }}
                >
                    <Box sx={{ width: '100%' }}>  {/* wrapper ให้เต็ม column */}
                        <StatusBadge
                            statusMB={s.status}
                            borderMB={s.borderL}
                            sx={{
                                width: '100%',                  // เต็ม wrapper
                                height: '50px',
                                bgcolor: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(5px)',
                                borderRadius: 5,
                                border: '1px solid white',
                                width: '7rem'
                            }}
                        />
                    </Box>
                </Grid>
            ))}
        </Grid>


    )
}

export default StatusMapBox