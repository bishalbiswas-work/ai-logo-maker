"use client";

import React from "react";
import {
    Box,
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    Paper,
    InputBase,
    Button,
    Avatar,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import { Search, FilterList, CloudDownload, Add, MoreVert } from "@mui/icons-material";

const DataView = ({ users }) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <Box sx={{ p: { xs: 2, md: 3 }, bgcolor: "#f9fafb", minHeight: "100vh" }}>
            <CssBaseline />

            {/* Top Navigation */}
            <AppBar position="static" elevation={0} sx={{ bgcolor: "white", color: "black", p: 1 }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                    {/* Search Bar */}
                    <Paper
                        component="form"
                        sx={{
                            p: "4px 8px",
                            display: "flex",
                            alignItems: "center",
                            width: { xs: "100%", sm: 300 },
                            borderRadius: "10px",
                            boxShadow: 1,
                            mb: { xs: 2, sm: 0 },
                        }}
                    >
                        <IconButton sx={{ p: "10px" }}>
                            <Search />
                        </IconButton>
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search here..." />
                    </Paper>

                    {/* Buttons */}
                    <Box>
                        <Button
                            variant="outlined"
                            startIcon={<CloudDownload />}
                            sx={{ mr: 1, borderRadius: "10px", display: { xs: "none", sm: "inline-flex" } }}
                        >
                            Export CSV
                        </Button>
                        <Button variant="contained" startIcon={<Add />} sx={{ bgcolor: "rgb(255, 86, 48)", borderRadius: "10px" }}>
                            Add User
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Users Section */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Users
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Showing data over the last 30 days
                </Typography>

                {/* Filter & Search Bar */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, flexWrap: "wrap" }}>
                    <Paper
                        component="form"
                        sx={{
                            p: "4px 8px",
                            display: "flex",
                            alignItems: "center",
                            width: { xs: "100%", sm: 300 },
                            borderRadius: "10px",
                            boxShadow: 1,
                            mb: { xs: 2, sm: 0 },
                        }}
                    >
                        <IconButton sx={{ p: "10px" }}>
                            <Search />
                        </IconButton>
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search here..." />
                    </Paper>
                    <Button variant="outlined" startIcon={<FilterList />} sx={{ borderRadius: "10px" }}>
                        Filter
                    </Button>
                </Box>

                {/* Users List Table */}
                <TableContainer component={Paper} sx={{ mt: 3, borderRadius: "10px", boxShadow: 2, overflowX: "auto" }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                                <TableCell width={50}>
                                    <input type="checkbox" />
                                </TableCell>
                                <TableCell width={250}>Name</TableCell>
                                {!isMobile && <TableCell width={150}>ID</TableCell>}
                                <TableCell>Email</TableCell>
                                {!isMobile && <TableCell width={150}>Logo</TableCell>}
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <input type="checkbox" />
                                    </TableCell>
                                    <TableCell sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <Avatar sx={{ bgcolor: "#D6D8FF" }}>{user.logo}</Avatar>
                                        <Typography sx={{ textTransform: "capitalize" }}>{user.name}</Typography>
                                    </TableCell>
                                    {!isMobile && <TableCell sx={{ fontWeight: "bold", color: "gray" }}>#{user.id}</TableCell>}
                                    <TableCell>{user.email}</TableCell>
                                    {!isMobile && (
                                        <TableCell>
                                            <Chip label="Logo" sx={{ bgcolor: "#E8F0FE", color: "black", fontWeight: "bold" }} />
                                        </TableCell>
                                    )}
                                    <TableCell>
                                        <IconButton>
                                            <MoreVert />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default DataView;
