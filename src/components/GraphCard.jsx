import React from 'react'
import { Card, CardContent, Typography } from "@mui/material";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

const data = [
    { name: "Jan", uv: 400 },
    { name: "Feb", uv: 300 },
    { name: "Mar", uv: 200 },
    { name: "Apr", uv: 278 },
    { name: "May", uv: 189 },
];

const GraphCard = ({ collapsed }) => {
    return (
        <Card sx={{ width: collapsed ? '76%' : "100%", p: 2 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    สถิติการใช้งาน
                </Typography>
                <LineChart width={400} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart>
            </CardContent>
        </Card>
    )
}

export default GraphCard