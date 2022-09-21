import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const linkMap = [
    {
        title: "Houston, TX Real Estate",
        link: "/"
    },
    {
        title: "Las Vegas, NV Real Estate",
        link: "/"
    },
    {
        title: "Los Angeles, CA Real Estate",
        link: "/"
    },
    {
        title: "San Diego, CA Real Estate",
        link: "/"
    },
]

const linkMap1 = [
    {
        title: "Apartments for rent in Manhattan, NY",
        link: "/"
    },
    {
        title: "Apartments for rent in Atlanta, GA",
        link: "/"
    },
    {
        title: "Apartments for rent in Charlotte, NC",
        link: "/"
    },
    {
        title: "Apartments for rent in San Antonio, TX",
        link: "/"
    },
]
const linkMap2 = [
    {
        title: "Addams Family House",
        link: "/"
    },
    {
        title: "Fair housing",
        link: "/"
    },
    {
        title: "Best Tenant Screening Services",
        link: "/"
    },
    {
        title: "Best Sites to Find Tenants",
        link: "/"
    },
]

const linkMap3 = [
    {
        title: "Alabama New Listings",
        link: "/"
    },
    {
        title: "Alaska New Listings",
        link: "/"
    },
    {
        title: "Arizona New Listings",
        link: "/"
    },
    {
        title: "Arkansas New Listings",
        link: "/"
    },
]


const Index = () => {
    return (
        <>
            <Box className="mt-4 mb-12">

                <Container maxWidth="xl">
                    <Box>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box>
                                    <Typography variant="body1" py={2} >
                                        Popular Real Estate Markets
                                    </Typography>
                                    <ul>
                                        {
                                            linkMap.map((item, key) => (
                                                <Box key={key}>

                                                    <Link href={item.link}>
                                                        <a>
                                                            <li className="text-blue-500 underline">
                                                                {item.title}
                                                            </li>
                                                        </a>
                                                    </Link>
                                                </Box>
                                            ))
                                        }
                                    </ul>
                                    <Button fontWeight="bold." sx={{
                                        "&:hover": {
                                            backgroundColor: "white"
                                        }
                                    }} variant="text">
                                        See More <ArrowDropDownIcon />
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box>
                                    <Typography variant="body1" py={2} >
                                        Popular Apartment Cities
                                    </Typography>
                                    <ul>
                                        {
                                            linkMap1.map((item, key) => (
                                                <Box key={key}>
                                                    <Link href={item.link}>
                                                        <a>
                                                            <li className="text-blue-500 underline">
                                                                {item.title}
                                                            </li>
                                                        </a>
                                                    </Link>
                                                </Box>
                                            ))
                                        }
                                    </ul>
                                    <Button sx={{
                                        "&:hover": {
                                            backgroundColor: "white"
                                        }
                                    }} variant="text">
                                        See More <ArrowDropDownIcon />
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box>
                                    <Typography variant="body1" py={2} >
                                        Popular Resources
                                    </Typography>
                                    <ul>
                                        {
                                            linkMap2.map((item, key) => (
                                                <Box key={key}>
                                                    <Link href={item.link}>
                                                        <a>
                                                            <li className="text-blue-500 underline">
                                                                {item.title}
                                                            </li>
                                                        </a>
                                                    </Link>
                                                </Box>
                                            ))
                                        }
                                    </ul>
                                    <Button sx={{
                                        "&:hover": {
                                            backgroundColor: "white"
                                        }
                                    }} variant="text">
                                        See More <ArrowDropDownIcon />
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box>
                                    <Typography variant="body1" py={2} >
                                        New Listing By State
                                    </Typography>
                                    <ul>
                                        {
                                            linkMap3.map((item, key) => (
                                                <Box key={key}>
                                                    <Link href={item.link}>
                                                        <a>
                                                            <li className="text-blue-500 underline">
                                                                {item.title}
                                                            </li>
                                                        </a>
                                                    </Link>
                                                </Box>
                                            ))
                                        }
                                    </ul>
                                    <Button sx={{
                                        "&:hover": {
                                            backgroundColor: "white"
                                        }
                                    }} variant="text">
                                        See More <ArrowDropDownIcon />
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

        </>
    )
}

export default Index