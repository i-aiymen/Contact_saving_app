import React from "react";
import Contact from "../components/Contact";
import Form from "../components/Form";

function Home({ formSub }) {
  return (
    <div className="container my-5">
      <div className="row justify-content-sm-center my-5">
        <Form formSub={formSub} />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
