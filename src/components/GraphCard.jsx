import React from 'react'
import { Card, CardContent, Typography, Stack } from "@mui/material";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const COLORS = [
    "#000000",
    "#000033",
    "#001A4D",
    "#002D80",
    "#0047B3",
    "#0066FF",
    "#3385FF",
    "#66A3FF",
    "#99C2FF",
    "#CCE0FF",
    "#E6F0FF",
    "#FFFFFF",
];


const GraphCard = ({ collapsed, issues }) => {
    const total = issues.reduce((sum, item) => sum + item.count, 0);
    return (
        <Card sx={{
            width: collapsed ? "76%" : "100%", p: 2, overflowY: 'scroll', "&::-webkit-scrollbar": {
                width: "6px",
            }, color: '#ffffff', bgcolor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(5px)',
            borderRadius: 5,
            border: '1px solid white',
        }}>
            <CardContent sx={{ p: 0 }}>
                <Typography gutterBottom fontSize={12} fontWeight="bold" mb={2}>
                    ประเภทปัญหาที่ขอความช่วยเหลือ
                </Typography>

                <Stack direction="column" gap={2} spacing={2} justifyContent="flex-start">
                    {/* Chart */}
                    <ResponsiveContainer width={150}
                        height={150}
                        style={{ margin: 'auto', display: 'block', border: '5px solid blue', borderRadius: 100, background: 'conic-gradient(blue, cyan, black)' }} >
                        <PieChart>
                            <Pie
                                data={issues}
                                dataKey="count"
                                nameKey="issue"
                                innerRadius={45}
                                outerRadius={70}
                                paddingAngle={2}
                            >
                                {issues.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* List */}
                    <Stack spacing={0.5}>
                        {issues.map((item, index) => (
                            <Typography
                                key={index}
                                variant="body2"
                                fontSize={11}
                                sx={{ display: "flex", alignItems: "center", gap: 1 }}
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        backgroundColor: COLORS[index % COLORS.length],
                                    }}
                                ></span>
                                {item.issue} {item.count}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default GraphCard