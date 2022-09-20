import React from "react";
import { Helmet } from "react-helmet";

function Layout({ title }) {
  return (
    <Helmet>
      {title && <title> {title} | Petgram 🐕‍🦺</title>}
      <meta
        name="description"
        content="Con Petgram encuentras fotos profesionales de animales domésticos"
      />
    </Helmet>
  );
}

export default Layout;
