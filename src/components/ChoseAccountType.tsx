import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Icon from "../assets/icon1.png";

const ChoseAccountType = () => {
  return (
    <Box sx={styles.wrapper}>
      <Container maxWidth="lg">
        <Grid container spacing={2.6}>
          <Grid item md={12}>
            <Typography variant="h3" sx={styles.top_headline}>
              Choose your account type
            </Typography>
            <Typography variant="subtitle1" sx={styles.subtitle}>
              Select one of the tailored special package developed for beginner
              to advanced level traders.
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Box sx={styles.box}>
              <Typography variant="h4" sx={styles.headline}>
                CLASSIC
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Minimum Opening Balance
                <span>$500 USD</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Spreads From
                <span>2.9 pips</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Instruments
                <span>60+ FX pairs, metals, indices, commodities</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Maximum Leverage
                <span>1:400</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Execution
                <span>ENC-Pricing</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Minimum Trade Size
                <span>0.01 Lot</span>
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: "25px", py: 1.2, px: 2.5, width: "100%" }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>

          <Grid item md={3}>
            <Box sx={styles.box}>
              <Typography variant="h4" sx={styles.headline}>
                SILVER
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Minimum Opening Balance
                <span>$1000 USD</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Spreads From
                <span>2.2 pips</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Instruments
                <span>60+ FX pairs, metals, indices, commodities</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Maximum Leverage
                <span>1:400</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Execution
                <span>ENC-Pricing</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Minimum Trade Size
                <span>0.05 Lot</span>
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: "25px", py: 1.2, px: 2.5, width: "100%" }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>

          <Grid item md={3}>
            <Box sx={styles.box}>
              <Typography variant="h4" sx={styles.headline}>
              GOLD
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Minimum Opening Balance
                <span>$10,000 USD</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Spreads From
                <span>1 pips</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Instruments
                <span>60+ FX pairs, metals, indices, commodities</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Maximum Leverage
                <span>1:400</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Execution
                <span>ENC-Pricing</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Minimum Trade Size
                <span>0.01 Lot</span>
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: "25px", py: 1.2, px: 2.5, width: "100%" }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>

          <Grid item md={3}>
            <Box sx={styles.box}>
              <Typography variant="h4" sx={styles.headline}>
              DIAMOND
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Minimum Opening Balance
                <span>Call us</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Spreads From
                <span>0.1 pips</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Instruments
                <span>60+ FX pairs, metals, indices, commodities</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Maximum Leverage
                <span>1:400</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Execution
                <span>ENC-Pricing</span>
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Minimum Trade Size
                <span>0.25 Lot</span>
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: "25px", py: 1.2, px: 2.5, width: "100%" }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChoseAccountType;

const styles = {
  wrapper: {
    py: 13,
    background: "#0a292f",
  },
  top_headline: { textAlign: "center", mb: 2, color: "#fff" },

  subtitle: {
    my: 2,
    textAlign: "center",
    color: "#fff",
  },
  box: {
    py: 5,
    px: 4,
    borderRadius: "10px",
    background: "#fff",
  },
  headline: {
    mb: 3,
  },
  text: {
    color: "#56575E",
    fontWeight: 400,
    mb: 1.5,
    span: {
      color: "#000",
      display: "block",
      fontWeight: 500,
    },
  },
};
