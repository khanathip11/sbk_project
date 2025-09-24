import React from 'react'
import { TextField, InputAdornment, Stack, Button, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const SearchBox = ({ collapsed }) => {
    return (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ width: !collapsed ? '100%' : '75%' }}>
            {/* Search */}
            <Autocomplete
                freeSolo
                disableClearable
                options={["Banana", "Apple", "Orange"]}
                sx={{ flex: 1 }} // ✅ ให้ search box ขยายเอง
                onInputChange={(event, value) => console.log("Search input:", value)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="ค้นหาตามพื้นที่..."
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: 'white', fontSize: 18 }} />
                                </InputAdornment>
                            ),
                            type: 'search',
                        }}
                        size="small"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(5px)',
                                borderRadius: 5,
                                height: '30px',
                                '& fieldset': { border: '1px solid white' },
                                '&:hover fieldset': { border: '1px solid white' },
                                '&.Mui-focused fieldset': { border: '1px solid white' },
                                color: 'white',
                                fontSize: '12px',
                            },
                            input: {
                                color: 'white',
                                padding: '4px 8px',
                            },
                        }}
                    />
                )}
            />

            {/* Filter Button */}
            <Button
                variant="contained"
                startIcon={<FilterListIcon />}
                onClick={() => console.log("Filter clicked")}
                sx={{
                    height: '30px',
                    textTransform: 'none',
                    fontSize: 12,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid white',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.2)',
                    },
                }}
            >
                Filter
            </Button>
        </Stack>


    )
}

export default SearchBox