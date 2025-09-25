import React from 'react'
import { Box, Typography, } from "@mui/material";
import SearchBox from './SearchBox';
import StatusMapBox from './StatusMapBox';
import GraphCard from './GraphCard';
const MapBox = ({ statusList, collapsed, issues }) => {
    return (
        <Box
            sx={{
                position: "relative",  // ให้ภายใน Box สามารถซ้อนทับได้
                width: '100%',
                height: '100%',
                bgcolor: "background.paper",
                borderRadius: 2,
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#000000",
                }}
            >
                <Typography>เนื้อหาหลัก</Typography>
            </Box>

            <Box
                sx={{
                    width: collapsed
                        ? { xs: '10%', sm: '10%', md: '10%', lg: '40%', xl: '30%' }
                        : { xs: '20%', sm: '20%', md: '25%', lg: '40%', xl: '30%' },
                    height: '90%',
                    position: "absolute",
                    top: 8,
                    left: 8,
                    color: "white",
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                <SearchBox collapsed={collapsed} />
                <StatusMapBox statusList={statusList} collapsed={collapsed} />
                <GraphCard collapsed={collapsed} issues={issues} />
            </Box>
        </Box >

    )
}

export default MapBox