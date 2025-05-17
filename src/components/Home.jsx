// components/Home.js
import React, { useEffect, useState } from "react";
import { Header }       from "./header";
import { Features }     from "./features";
import { About }        from "./about";
import { Services }     from "./services";
import { Gallery }      from "./gallery";
import { Testimonials } from "./testimonials";
import { Team }         from "./Team";
import { Contact }      from "./contact";

import JsonData from "../data/data.json";

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(JsonData);
  }, []);

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

export default Home;
