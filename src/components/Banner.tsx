import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { borderBottom, Box, Container } from "@mui/system";
import banner_img from "../assets/banner.png";
import banner_bottom from "../assets/banner_bottom.png";
const Banner = () => {
  return (
    <>
      <Box sx={{ background: "#0a292f", color: "#fff", pt: 10, pb: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Typography variant="h2">
                IQDFX, A broker <br /> You can trust
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 5 }}>
                We look forward to get to know and help you to take your
                investment to whole new level.
              </Typography>
              <Box sx={{ display: "flex", mt: 8 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "30px",
                    py: 1.8,
                    px: 3,
                    textTransform: "capitalize",
                  }}
                >
                  Open a Real Account
                </Button>
                <Box>
                  <Typography
                    sx={{
                      mt: 1.1,
                      ml: 4,
                      pb: 1,
                      borderBottom: "2px solid #ddd",
                      fontSize: "1rem",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    Demo Account
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={8} sx={styles.img_wrapper}>
              <img src={banner_img} alt="" style={styles.banner_img} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <img
        src={banner_bottom}
        style={{
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          maxWidth: "100%",
        }}
        alt=""
      />
    </>
  );
};

export default Banner;

const styles = {
  banner_img: {
    maxWidth: "100%",
  },
  img_wrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
};
