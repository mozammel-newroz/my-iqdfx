import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import logo from "../assets/logo.svg";
import { Button, Grid, MenuItem, Select, Typography } from "@mui/material";

const MenuBar = () => {
  const [language, setLanguage] = useState("EN");
  return (
    <Box sx={{ background: "#0a292f" }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xl={12}>
            <Box sx={styles.wrapper}>
              <div className="">
                <img src={logo} alt="" />
              </div>
              <Box sx={styles.menu}>
                <Button>
                  <Typography variant="h6" sx={styles.menu_item}>
                    Home
                  </Typography>
                </Button>
                <Button>
                  <Typography variant="h6" sx={styles.menu_item}>
                    About Us
                  </Typography>
                </Button>
                <Button>
                  <Typography variant="h6" sx={styles.menu_item}>
                    Platforms
                  </Typography>
                </Button>
                <Button>
                  <Typography variant="h6" sx={styles.menu_item}>
                    Accounts
                  </Typography>
                </Button>
                <Button>
                  <Typography variant="h6" sx={styles.menu_item}>
                    Partnership
                  </Typography>
                </Button>
                <Button>
                  <Typography variant="body1" sx={styles.menu_item}>
                    Contact Us
                  </Typography>
                </Button>
                <Select
                  variant="standard"
                  value={language}
                  label="Language"
                  onChange={(e) => setLanguage(e.target.value)}
                  displayEmpty
                  sx={{
                    border: "0px solid red",
                    color: "#fff",
                    marginLeft: "20px",
                    "& .MuiSvgIcon-root": {
                      color: "white",
                      border: "0px solid red",
                    },
                  }}
                  // inputProps={{ disableUnderline: true }}
                >
                  <MenuItem value="EN">EN</MenuItem>
                  <MenuItem value="FR">FR</MenuItem>
                </Select>
                {/* <Button>
                  <Typography variant="body1" sx={styles.menu_item}>
                    EN
                  </Typography>
                </Button> */}
              </Box>
              <div className="">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "25px",
                    py: 1.2,
                    px: 2.5,
                    mr: 2,
                    ml: { xs: 2, md: 0 },
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ borderRadius: "25px", py: 1.2, px: 2.5 }}
                >
                  MT5 WEB
                </Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MenuBar;

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pt: 6,
    pb: 4,
  },
  menu: {
    display: { xs: "none", sm: "block" },
  },
  menu_item: {
    color: "#fff",
    textTransform: "capitalize",
    px: 1,
  },
};
