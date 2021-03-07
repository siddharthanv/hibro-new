import React from "react";
import Header from "./Header/Header";
import CategoryBox from "./CategoryBox/CategoryBox";
import OnlineSupport from "./OtherBox/OnlineSupport";
import SuccessRate from "./OtherBox/SuccessRate";
import HowItWorks from "./OtherBox/HowItWorks";
import HappyCustomers from "./OtherBox/HappyCustomers";

function Home() {
  return (
    <div>
      <Header />
      <CategoryBox />
      <OnlineSupport />
      <SuccessRate />
      <HowItWorks />
      <HappyCustomers />
    </div>
  );
}

export default Home;
