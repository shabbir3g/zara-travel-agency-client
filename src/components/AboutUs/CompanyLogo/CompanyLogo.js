import React from "react";

import laxuary from "../../../images/travel company/company_1.png";
import travel from "../../../images/travel company/company_2.png";
import tripswivel from "../../../images/travel company/company_3.png";
import airhovk from "../../../images/travel company/company_4.png";
import globtravel from "../../../images/travel company/company_5.png";

const img = {
  width: "16%",
  margin: "2%",
};

const CompanyLogo = () => {
  return (
    <div style={{backgroundColor: "#f5f5f5"}}>
      <img style={img} src={laxuary} alt="" />
      <img style={img} src={travel} alt="" />
      <img style={img} src={tripswivel} alt="" />
      <img style={img} src={airhovk} alt="" />
      <img style={img} src={globtravel} alt="" />
    </div>
  );
};

export default CompanyLogo;
