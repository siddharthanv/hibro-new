import React from "react";
import Header from "./Header/Header";
import CategoryBox from "./CategoryBox/CategoryBox";
import OnlineSupport from "./OtherBox/OnlineSupport";
import SuccessRate from "./OtherBox/SuccessRate";
import HowItWorks from "./OtherBox/HowItWorks";
import HappyCustomers from "./OtherBox/HappyCustomers";
import OurPlans from "./OtherBox/OurPlans";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <CategoryBox />
      <OnlineSupport />
      <SuccessRate />
      <HowItWorks />
      <HappyCustomers />
      <OurPlans />
      <Footer />
    </div>
  );
}

export default Home;
