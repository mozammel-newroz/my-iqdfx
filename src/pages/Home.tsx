import React from "react";
import Banner from "../components/Banner";
import ChoseAccountType from "../components/ChoseAccountType";
import DiveDipper from "../components/DiveDipper";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import RealTimeChart from "../components/RealTimeChart";
import TestTable from "../components/TestTable";
import Why from "../components/Why";

const Home = () => {
  return (
    <div>
      <MenuBar />
      <Banner />
      <Why />
      <RealTimeChart />
      {/* <TestTable /> */}
      <ChoseAccountType />
      <DiveDipper />
      <Footer />
    </div>
  );
};

export default Home;
