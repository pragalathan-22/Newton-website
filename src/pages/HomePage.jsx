import React from "react";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";

const HomePage = ({ data }) => {
  return (
    <>
      <Header data={data.Header} />
      <Features data={data.Features} />
      <About data={data.About} />
      <Services data={data.Services} />
      <Gallery data={data.Gallery} />
      <Testimonials data={data.Testimonials} />
      <Team data={data.Team} />
      <Contact data={data.Contact} />
    </>
  );
};

export default HomePage;
