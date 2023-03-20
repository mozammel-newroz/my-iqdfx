import { Box, colors, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Logo from "../assets/logo.svg";
import send from "../assets/send.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import googlePlay from "../assets/googlePlay.png";
import macos from "../assets/macos.png";
import meta from "../assets/meta.png";
import windows from "../assets/windows.png";

const Footer = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={{ mb: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2.6}>
            <Grid item md={5}>
              <img src={Logo} alt="" />
              <Typography variant="h6" sx={{ fontWeight: 400, mt: "-5px" }}>
                Nulla Lorem mollit
              </Typography>
              <Box sx={styles.icon}>
                <img src={send} alt="" />
                <img src={whatsapp} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
              </Box>
              <Box sx={styles.company}>
                <Box sx={styles.company_logo}>
                  <img src={googlePlay} alt="" />
                  <img src={windows} alt="" />
                </Box>
                <Box sx={styles.company_logo}>
                  <img src={meta} alt="" />
                  <img src={macos} alt="" />
                </Box>
              </Box>
            </Grid>
            <Grid item md={2}>
              <Typography sx={styles.menu_title}>Company</Typography>
              <Typography sx={styles.menu}>About Us</Typography>
              <Typography sx={styles.menu}>Our Services</Typography>
              <Typography sx={styles.menu}>Contact Us</Typography>
              <Typography sx={styles.menu}>Partnership</Typography>
              <Typography sx={styles.menu}>Academy</Typography>
              <Typography sx={styles.menu}>Platforms</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography sx={styles.menu_title}>Quick Links</Typography>
              <Typography sx={styles.menu}>Demo Account</Typography>
              <Typography sx={styles.menu}>Real Account</Typography>
              <Typography sx={styles.menu}>Accounts</Typography>
              <Typography sx={styles.menu}>Compare Products</Typography>
              <Typography sx={styles.menu}>Download Apps</Typography>
            </Grid>
            <Grid item md={3}>
              <Typography sx={styles.menu_title}>
                Contact Information
              </Typography>
              <Typography sx={styles.menu}>info@iqdfx.com</Typography>
              <Typography sx={styles.menu}>
                Technical: 0750 12 123 456
              </Typography>
              <Typography sx={styles.menu}>Finance: 0750 12 123 456</Typography>
              <Typography sx={styles.menu}>
                Sales: 0750 12 123 <br /> 456- 0750 12 123 456
              </Typography>
              <Typography sx={styles.menu}>
                Marketing: 0750 12 123 456
              </Typography>
              <Typography sx={styles.menu}>
                Empire Business World, Erbil, Kurdistan
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ borderTop: "1px solid #666", py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2.6}>
            <Grid item md={12}>
              <Typography sx={styles.bottom_text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ borderTop: "1px solid #333", py: 1.5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2.6}>
            <Grid item md={6}>
              <Typography sx={styles.menu_bottom_left}>
                © All Rights Reserved IQDX.com | Made by Newroz
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Box sx={styles.menu_bottom}>
                <Typography sx={styles.menu_bottom_item}>
                  Terms of Services
                </Typography>
                <Typography sx={styles.menu_bottom_item}>
                  Privacy Policy
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

const styles = {
  wrapper: {
    pt: 15,
    background: "#0a292f",
    color: "#8294AE",
  },
  icon: {
    mt: 4,
    img: {
      mr: 1,
    },
  },
  company: {
    my: 4,
  },
  company_logo: {
    img: {
      mr: 2,
      mb: 2,
    },
  },
  menu_title: {
    fontSize: "1.32rem",
    mb: 2,
    fontWeight: 500,
    color: "#fff",
  },
  menu: {
    fontSize: "1rem",
    mb: 1.5,
    cursor: "pointer",
  },
  bottom_text: {
    fontSize: "0.875rem",
  },
  menu_bottom_left: {
    fontSize: "1rem",
  },
  menu_bottom_item: {
    fontSize: "1rem",
    mr: 4,
    cursor: "pointer",
  },
  menu_bottom: {
    display: "flex",
    Box: {
      background: "red",
    },
  },
};
