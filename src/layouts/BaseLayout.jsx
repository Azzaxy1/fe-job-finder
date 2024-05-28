// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
