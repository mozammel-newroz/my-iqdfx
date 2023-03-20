import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import Flag from "../assets/flag.png";
import Flag2 from "../assets/flag2.png";

function createData(
  name: string,
  flag: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  high: number,
  low: number,
  prev: number
) {
  return { name, flag, calories, fat, carbs, protein, high, low, prev };
}

const rows = [
  createData("Frozen yoghurt", Flag, 159, 6.0, 24, 4.0, 6.0, 24, 4.0),
  createData("Ice cream sandwich", Flag2, 237, 9.0, 37, 4.3, 6.0, 24, 4.0),
  createData("Eclair", Flag, 262, 16.0, 24, 6.0, 6.0, 24, 4.0),
  createData("Cupcake", Flag2, 305, 3.7, 67, 4.3, 6.0, 24, 4.0),
  createData("Gingerbread", Flag, 356, 16.0, 49, 3.9, 6.0, 24, 4.0),
];

const RealTimeChart = () => {
  const StyledTableCell = styled(TableCell)({
    padding: "9px",
  });
  const StyledTableCellHead = styled(TableCell)({
    padding: "15px 9px 15px 9px",
    color: "#999",
  });
  return (
    <Container maxWidth="lg" sx={styles.wrapper}>
      <Grid container spacing={2.6}>
        <Grid item md={12}>
          <Typography variant="h3" sx={styles.top_headline}>
            Check Real Time Charts
          </Typography>
          <Box sx={styles.menu}>
            <Button>
              <Typography
                variant="h6"
                sx={styles.menu_item}
                style={{ color: "#009981" }}
              >
                Forex
              </Typography>
            </Button>
            <Button>
              <Typography variant="h6" sx={styles.menu_item}>
                Cryptocurrencies
              </Typography>
            </Button>
            <Button>
              <Typography variant="h6" sx={styles.menu_item}>
                Futures
              </Typography>
            </Button>
            <Button>
              <Typography variant="h6" sx={styles.menu_item}>
                Indices
              </Typography>
            </Button>
            <Button>
              <Typography variant="h6" sx={styles.menu_item}>
                Stocks
              </Typography>
            </Button>
          </Box>
          <Box sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer
              sx={{
                border: "1px solid rgba(224, 224, 224, 1)",
                width: "100%",
              }}
            >
              <Table
                size="small"
                aria-label="a dense table"
                sx={{ tableLayout: "fixed" }}
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCellHead>Name</StyledTableCellHead>
                    <StyledTableCellHead align="right">
                      Value
                    </StyledTableCellHead>
                    <StyledTableCellHead align="right">
                      Change
                    </StyledTableCellHead>
                    <StyledTableCellHead align="right">
                      Chg%
                    </StyledTableCellHead>
                    <StyledTableCellHead align="right">
                      Open
                    </StyledTableCellHead>
                    <StyledTableCellHead align="right">
                      High
                    </StyledTableCellHead>
                    <StyledTableCellHead align="right">Low</StyledTableCellHead>
                    <StyledTableCellHead align="right">
                      Prev
                    </StyledTableCellHead>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <StyledTableCell
                      colspan="8"
                      sx={{
                        borderBottom: "0px solid red",
                        background: "#f8f9fd",
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        MAJOR
                      </Typography>
                    </StyledTableCell>
                  </TableRow>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        <img
                          src={row.flag}
                          alt=""
                          style={{ marginRight: "7px" }}
                        />{" "}
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.protein}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.high}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.low}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.prev}
                      </StyledTableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <StyledTableCell
                      colspan="8"
                      sx={{
                        borderBottom: "0px solid red",
                        background: "#f8f9fd",
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        MINOR
                      </Typography>
                    </StyledTableCell>
                  </TableRow>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        <img
                          src={row.flag}
                          alt=""
                          style={{ marginRight: "7px" }}
                        />{" "}
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.protein}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.high}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.low}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.prev}
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RealTimeChart;

const styles = {
  wrapper: {
    mt: 12,
    mb: 16,
  },
  top_headline: { textAlign: "center", mb: 5 },
  menu: {
    textAlign: "center",
    mb: 4,
  },
  menu_item: {
    textTransform: "capitalize",
    px: 1,
    color: "#333",
  },
};
