import React from 'react';
import { Box } from '@mui/material';
import CardImage from './CardImage';
import StatusBadge from './StatusBadge';
import Issue from './Issue';
import CardTitle from '../components/CardTitle.jsx';
import TextDescription from './TextDescription.jsx';
import CardLocation from './CardLocation.jsx';
import CardDatetime from './CardDatetime.jsx';

const CardWrapper = ({ issue, status, height, width, color, bgColor, text, desc }) => {
    return (
        <Box
            sx={{
                height: height || "100%",
                width: width || "100%",
                p: 2,
                boxShadow: 3,
                borderRadius: 4,
                bgcolor: "background.paper",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 1.5,
            }}
        >
            {/* Left: Image */}
            <CardImage
                sx={{
                    width: 100,
                    height: 100,
                    flexShrink: 0,
                    borderRadius: 2,
                    objectFit: "cover",
                }}
            />

            {/* Right: Content */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        mt: -0.5
                    }}
                >
                    <Issue issue={issue} />
                    <StatusBadge status={status} color={color} bgColor={bgColor} />
                </Box>

                <Box sx={{ mt: 0.2 }}>
                    <CardTitle text={text} />
                </Box>

                <Box sx={{ mt: -1.8 }}>
                    <TextDescription desc={desc} />
                </Box>

                <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between' }}>
                    <CardLocation location={"Banhkok"} />
                    <CardDatetime date={"24/09/2025"} time={"10:49:23"} />
                </Box>

            </Box>
        </Box>
    );
};

export default CardWrapper;
