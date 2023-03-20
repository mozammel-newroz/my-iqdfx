import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import dive_deeper from "../assets/dive_deeper.png";
import googlePlay from "../assets/googlePlay.png";
import macos from "../assets/macos.png";
import meta from "../assets/meta.png";
import windows from "../assets/windows.png";
import fastpay from "../assets/fastpay.png";
import firstIraqiBank from "../assets/firstIraqiBank.png";

const DiveDipper = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2.6}>
        <Grid item md={12}>
          <Box sx={styles.wrapper}>
            <Grid container spacing={2.6}>
              <Grid item md={6}>
                <Typography variant="h3" sx={styles.top_headline}>
                  Dive deeper into markets with MetaTrader5
                </Typography>
                <Typography variant="h5" sx={styles.subtitle}>
                  Successful trading starts with convenient and functional
                  trading tool. MetaTrader 5 is the best choice for the modern
                  trader.
                </Typography>
                <Box sx={styles.imageWrapper}>
                  <img src={windows} alt="" />
                  <img src={googlePlay} alt="" />
                  <img src={macos} alt="" />
                  <img src={meta} alt="" />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box sx={styles.banner_wrapper}>
                  <img src={dive_deeper} alt="" style={styles.banner} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h4" sx={styles.header2}>
            Our Partners
          </Typography>
          <Box sx={styles.bank}>
            <img src={firstIraqiBank} alt="" />
            <img src={fastpay} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DiveDipper;

const styles = {
  wrapper: {
    mt: 15,
    mb: 10,
    background: "#eef2f9",
    p: 7,
    borderRadius: "10px",
  },
  top_headline: { mb: 5 },
  subtitle: {
    color: "#393964",
  },
  imageWrapper: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    mt: 6,
    img: {
      maxWidth: "100%",

      m: 0.7,
    },
  },
  banner_wrapper: {
    display: "flex",
    justifyContent: "center",
    p: 3,
  },
  banner: {
    maxWidth: "100%",
  },
  header2: {
    textAlign: "center",
    fontSize: "2rem",
  },
  bank: {
    mt: 5,
    mb: 6,

    textAlign: "center",
    img: {
      padding: "20px",
    },
  },
};
