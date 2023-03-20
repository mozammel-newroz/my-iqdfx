import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Icon from "../assets/icon1.png";

const Why = () => {
  return (
    <Container maxWidth="lg" sx={styles.wrapper}>
      <Grid container spacing={2.6}>
        <Grid item md={12}>
          <Typography variant="h3" sx={styles.top_headline}>
            Why trade with IQDFX?
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Box sx={styles.box}>
            <img src={Icon} alt="" />
            <Typography variant="h4" sx={styles.headline}>
              Trusted Trading Partner
            </Typography>
            <Typography variant="body1">
              Licensed and regulated true ECN broker
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box sx={styles.box}>
            <img src={Icon} alt="" />
            <Typography variant="h4" sx={styles.headline}>
              Easy Deposit & Withdrawal
            </Typography>
            <Typography variant="body1">
              Add, transfer or withdraw funds with ease with FastPay, FIB & Cash
            </Typography>
          </Box>
        </Grid>

        <Grid item md={4}>
          <Box sx={styles.box}>
            <img src={Icon} alt="" />
            <Typography variant="h4" sx={styles.headline}>
              Lowest Spread
            </Typography>
            <Typography variant="body1">
              Enjoy spreads from zero and trade at the best available prices.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box sx={styles.box}>
            <img src={Icon} alt="" />
            <Typography variant="h4" sx={styles.headline}>
              Best Platform
            </Typography>
            <Typography variant="body1">
              Trade on MetaTrader 5 from your desktop, mobile or tablet device.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box sx={styles.box}>
            <img src={Icon} alt="" />
            <Typography variant="h4" sx={styles.headline}>
              24/7 Support
            </Typography>
            <Typography variant="body1">
              24/7 support in over 3 languages by live chat, email and phone.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box sx={styles.box}>
            <img src={Icon} alt="" />
            <Typography variant="h4" sx={styles.headline}>
              Focused on the Clients
            </Typography>
            <Typography variant="body1">
              We ensure our clients receive the same quality services & support.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Why;

const styles = {
  wrapper: {
    my: 15,
  },
  top_headline: { textAlign: "center", mb: 7 },
  box: {
    textAlign: "center",
    py: 4.5,
    px: 2,
    boxShadow: "0px 2px 20px 5px #eee",
  },
  headline: {
    my: 2,
  },
};
