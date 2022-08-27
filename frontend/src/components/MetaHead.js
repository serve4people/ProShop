import React from "react";
import { Helmet } from "react-helmet";
const MetaHead = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keyword} />
    </Helmet>
  );
};
MetaHead.defaultProps = {
  title: "Welcome to Proshop",
  description: "Best and Cheap Products",
  keywords: "Clothing,Grocery,Electronics,Home Appliances",
};

export default MetaHead;
