import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box className="bg-[#2B2B2B]">
                <Container maxWidth="xl">
                    <Grid container >
                        <Grid item xs={12} md={12} className='flex md:block justify-center md:justify-between'>
                            <Box className=" sm:block justify-center md:flex md:justify-between items-center my-8">
                                <Box className="flex"  >
                                    <Stack direction="row" spacing={2}>

                                        <Box className="bg-white rounded-sm ">
                                            <Link href="/">
                                                <svg className='p-1' viewBox="0 0 24 24" data-testid="icon-facebook" style={{ display: "inline-block", width: "1.5em", height: "1.5em", fontSize: "24px", color: "inherit", fill: "currentColor" }} aria-hidden="true" focusable="false"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                                            </Link>
                                        </Box>
                                        <Box className="bg-white rounded-sm ">
                                            <Link href="/">
                                                <svg className='p-1' viewBox="0 0 24 24" data-testid="icon-twitter" style={{ display: "inline-block", width: "1.5em", height: "1.5em", fontSize: "24px", color: "inherit", fill: "currentColor" }} aria-hidden="true" focusable="false"><path d="M19.953 8.046c.012.176.012.352.012.53 0 5.422-4.128 11.675-11.675 11.675v-.003A11.616 11.616 0 012 18.408a8.24 8.24 0 006.073-1.7 4.108 4.108 0 01-3.834-2.85 4.088 4.088 0 001.853-.07A4.104 4.104 0 012.8 9.766v-.052c.57.317 1.21.494 1.863.513a4.108 4.108 0 01-1.27-5.478 11.646 11.646 0 008.456 4.286 4.108 4.108 0 016.992-3.742 8.234 8.234 0 002.607-.996 4.118 4.118 0 01-1.804 2.27A8.16 8.16 0 0022 5.92a8.337 8.337 0 01-2.047 2.126z"></path></svg>
                                            </Link>
                                        </Box>
                                        <Box className="bg-white rounded-sm ">
                                            <Link href="/">
                                                <svg className="p-1" viewBox="0 0 24 24" data-testid="icon-linkedin" style={{ display: "inline-block", width: "1.5em", height: "1.5em", fontSize: "24px", color: "inherit", fill: "currentColor" }} aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.222 6.277c1.434 0 2.307-.957 2.307-2.138C6.5 2.928 5.656 2 4.279 2 2.9 2 2 2.93 2 4.139c0 1.18.872 2.138 2.222 2.138zm-2.11 1.686v13.756h4.276V7.963H2.113zm6.722 0a92.13 92.13 0 01.113 4.388v9.368h4.277v-7.934c0-.393.027-.787.14-1.068.31-.787 1.013-1.603 2.194-1.603 1.547 0 2.167 1.21 2.167 2.982v7.623H22v-8.13c0-4.05-2.109-5.935-4.922-5.935-2.307 0-3.686 1.322-4.248 2.222h-.085l-.198-1.913H8.834z"></path></svg>
                                            </Link>
                                        </Box>
                                        <Box className="bg-white rounded-sm ">
                                            <Link href="/">
                                                <svg className="p-1" viewBox="0 0 24 24" data-testid="icon-instagram" style={{ display: "inline-block", width: "1.5em", height: "1.5em", fontSize: "24px", color: "inherit", fill: "currentColor" }} aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.802c2.67 0 2.986.01 4.04.058.975.044 1.505.207 1.857.344.467.182.8.398 1.15.748.35.35.567.683.748 1.15.137.352.3.882.344 1.857.048 1.054.059 1.37.059 4.04s-.01 2.987-.059 4.041c-.044.975-.207 1.505-.344 1.857-.181.467-.398.8-.748 1.15-.35.35-.683.567-1.15.748-.352.137-.882.3-1.857.344-1.054.048-1.37.059-4.04.059s-2.987-.01-4.041-.059c-.975-.044-1.505-.207-1.857-.344a3.102 3.102 0 01-1.15-.748 3.093 3.093 0 01-.748-1.15c-.137-.352-.3-.882-.344-1.857-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.041c.045-.975.207-1.505.344-1.857.182-.467.398-.8.748-1.15.35-.35.683-.567 1.15-.748.352-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.04-.058zM12 2c-2.716 0-3.057.012-4.123.06-1.065.049-1.791.218-2.428.465A4.897 4.897 0 003.68 3.68a4.898 4.898 0 00-1.154 1.77c-.247.637-.416 1.363-.465 2.428C2.012 8.943 2 9.284 2 12c0 2.715.012 3.056.06 4.123.049 1.064.218 1.79.465 2.427a4.897 4.897 0 001.154 1.77 4.9 4.9 0 001.77 1.154c.637.248 1.364.417 2.428.465 1.067.05 1.407.06 4.123.06s3.056-.01 4.123-.06c1.064-.048 1.791-.217 2.427-.465a4.897 4.897 0 001.771-1.153 4.902 4.902 0 001.154-1.771c.247-.636.416-1.363.465-2.427.048-1.067.06-1.408.06-4.123 0-2.716-.012-3.057-.06-4.123-.049-1.065-.218-1.792-.465-2.428a4.898 4.898 0 00-1.154-1.77 4.9 4.9 0 00-1.77-1.154c-.637-.247-1.364-.416-2.428-.465C15.056 2.012 14.715 2 12 2zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path></svg>
                                            </Link>
                                        </Box>
                                        <Box className="bg-white rounded-sm ">
                                            <Link href="/">
                                                <svg className="p-1" viewBox="0 0 24 24" data-testid="icon-pinterest" style={{ display: "inline-block", width: "1.5em", height: "1.5em", fontSize: "24px", color: "inherit", fill: "currentColor" }} aria-hidden="true" focusable="false"><path d="M12 2C6.481 2 2 6.481 2 12a10 10 0 006.352 9.315c-.093-.797-.167-2 .037-2.87.185-.778 1.167-4.963 1.167-4.963s-.297-.593-.297-1.482c0-1.389.815-2.426 1.815-2.426.852 0 1.26.648 1.26 1.408 0 .851-.538 2.148-.834 3.333-.24 1 .5 1.815 1.482 1.815 1.777 0 3.148-1.87 3.148-4.574 0-2.39-1.723-4.075-4.186-4.075-2.851 0-4.518 2.13-4.518 4.334 0 .852.333 1.778.74 2.278a.322.322 0 01.075.277c-.056.315-.222.982-.26 1.13-.055.185-.148.222-.333.13-1.24-.574-2.037-2.408-2.037-3.87 0-3.149 2.296-6.056 6.611-6.056 3.463 0 6.167 2.463 6.167 5.778 0 3.444-2.167 6.222-5.185 6.222-1.019 0-1.963-.519-2.297-1.148 0 0-.5 1.907-.63 2.37-.221.87-.833 1.963-1.24 2.63A9.81 9.81 0 0012 22c5.518 0 10-4.482 10-10 0-5.519-4.482-10-10-10z"></path></svg>
                                            </Link>
                                        </Box>
                                        <Box className="bg-white rounded-sm ">
                                            <Link href="/">
                                                <svg className="p-1" viewBox="0 0 24 24" data-testid="icon-youtube" style={{ display: "inline-block", width: "1.5em", height: "1.5em", fontSize: "24px", color: "inherit", fill: "currentColor" }} aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.815 5.418c.861.23 1.538.907 1.768 1.768C22 8.746 22 12 22 12s0 3.255-.418 4.814a2.505 2.505 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.505 2.505 0 011.768-1.768C5.746 5 12 5 12 5s6.255 0 7.815.418zM10 9.001V15l5.197-3L10 9z"></path></svg>
                                            </Link>
                                        </Box>

                                    </Stack>
                                </Box>

                            </Box>
                        </Grid>

                    </Grid>

                    <Box className="md:flex space-x-3 pt-6 text-white xs:block" >
                        <ul className="flex  space-x-3">
                            <Link href="/">
                                <a >
                                    <li>
                                        About Us
                                    </li>
                                </a>
                            </Link>

                            <Link href="/">
                                <a >
                                    <li>
                                        Carrers
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        Accessibility
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        Feedback
                                    </li>
                                </a>
                            </Link>

                        </ul>
                        <ul className="flex space-x-3">
                            <Link href="/">
                                <a >
                                    <li>
                                        Media room
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        Ad Choices
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        Advertise With us
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        Agent Support
                                    </li>
                                </a>
                            </Link>
                        </ul>
                        <ul className="flex space-x-3">
                            <Link href="/">
                                <a >
                                    <li>
                                        Privacy
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        Terms
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        Home Made
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        Tech Blog
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        SitMap
                                    </li>
                                </a>
                            </Link>

                        </ul>

                    </Box>
                    <Box>
                        <Link href="/">
                            <a>
                                <Typography variant="body1" color="#E08D2D" fontWeight="bold" py={6}>
                                    Do Not Sell My Personal Information
                                </Typography>
                            </a>
                        </Link>

                    </Box>
                    <Box className="py-8">
                        <Box>
                            <Typography variant="body1" fontWeight="bold" className="text-white">
                                PRODUCTS
                            </Typography>
                        </Box>
                        <Box>
                            <ul className="flex py-8 space-x-3 text-white">
                                <Link href="/">
                                    <a >
                                        <li>
                                            Leads & Branding
                                        </li>
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a >
                                        <li>
                                            ListHub
                                        </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a >
                                        <li>
                                            Moving.com
                                        </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a >
                                        <li>
                                            International
                                        </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a >
                                        <li>
                                            Door Steps
                                        </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a >
                                        <li>
                                            Avail
                                        </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a >
                                        <li>
                                            UpNest
                                        </li>
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a >
                                        <li>
                                            Builder Solution
                                        </li>
                                    </a>
                                </Link>

                            </ul>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Typography variant="body1" fontWeight="bold" className="text-white">
                                NEWS CORP
                            </Typography>
                        </Box>
                        <ul className="flex py-8 space-x-3 text-white">
                            <Link href="/">
                                <a >
                                    <li>
                                        Barrons
                                    </li>
                                </a>
                            </Link>

                            <Link href="/">
                                <a >
                                    <li>
                                        ListHub
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        Financial News
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        Harper Collins
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        Mansion Global
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        MarketWatch
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        New York Post
                                    </li>
                                </a>
                            </Link>
                            <Link href="/">
                                <a >
                                    <li>
                                        REA Group
                                    </li>
                                </a>
                            </Link>

                        </ul>
                    </Box>



                    <Box className="pb-8">
                        <Typography className="text-white">
                            © 1995-2022
                            National Asociation of Propert267 @2022
                            and Move,Inc  All rights reserved.
                        </Typography>
                    </Box>
                </Container >
            </Box >
        </>
    )
}

export default Footer

