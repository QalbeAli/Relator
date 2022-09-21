import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Images from "../../public/Images/images"
import Image from "next/image"
import Link from "next/link";

const linkMap = [
  {
    title: "About NAR",
    link: "/"
  },
  {
    title: "Agent vs. REALTOR",
    link: "/"
  },
  {
    title: "Find an Appraiser",
    link: "/"
  },
  {
    title: "Commercial Services",
    link: "/"
  },
  {
    title: "NAR Gobal Alliance",
    link: "/"
  },


]

const linkMap2 = [
  {
    title: "Look for the R",
    link: "/"
  },
  {
    title: "Watch Season 2 for First-Time Buyer",
    link: "/"
  },
  {
    title: "Real Estate Today",
    link: "/"
  },
  {
    title: "Reasons to work with a REALTOR®",
    link: "/"
  },
]


const linkMap3 = [
  {
    title: "Give your safety the attention YOU deserve",
    link: "/"
  },
  {
    title: "Hear from your peers, tune in to the Drive With NAR podcast",
    link: "/"
  },
  {
    title: "Get property data, reports, prospecting and more with RPR®",
    link: "/"
  },
  {
    title: "Choose a .realtor™ web address and customers will choose you",
    link: "/"
  },
]


const Index = () => {
  return (
    <>
      <Box className="border-b  mb-12 border-black">
        <Container maxWidth="xl" >
          <Box className="my-20">
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Image src={Images.real} />
                </Box>
                <Box>
                  <Typography variant="subtitle1">
                    Find out how the NAR works <br /> for consumers and REALTORS®
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Learn About N.A.R
                  </Typography>
                  <ul>
                    {
                      linkMap.map((item, key) => (
                        <Link href={item.link}>
                          <a>
                            <li className="text-blue-500">
                              • {item.title}
                            </li>
                          </a>
                        </Link>
                      ))
                    }
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    For Homeowners
                  </Typography>
                  <ul>
                    {
                      linkMap2.map((item, key) => (
                        <Link href={item.link}>
                          <a>
                            <li className="text-blue-500">
                              • {item.title}
                            </li>
                          </a>
                        </Link>
                      ))
                    }
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    For REALTORS®
                  </Typography>
                  <ul>
                    {
                      linkMap3.map((item, key) => (
                        <Link href={item.link}>
                          <a>
                            <li className="text-blue-500">
                              • {item.title}
                            </li>
                          </a>
                        </Link>
                      ))
                    }
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

    </>
  )
};

export default Index;
