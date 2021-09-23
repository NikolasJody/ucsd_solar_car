import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    setIsSmallScreen(screen.width <= 600);
  }, []);

  return (
    <div >
      <Head>
        <title>UCSD Solar Car</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />


      <div>
        {isSmallScreen ? (
          <div className="back">
            <Image
              src="/SolarCarCity.jpg"
              layout="responsive"
              width="100"
              height="50"

            />
          </div>
        ) : (
            <div className="landing-image">
            </div>
          )}
      </div>
      <div className="our-mission">
        <div className="our-mission-container">
          <div className="our-mission-title"> A Student Organization Dedicated to Excellence in Sustainable Engineering</div>
          <div className="our-mission-text">
            Established in the fall of 2015, UCSD's Solar Car Team is a student sustainability project partnered with the Engineers for a Sustainable World at UCSD (ESW), and is an entirely student-run project that aims to design, build, and race UCSD’s first solar car. Students across a variety of disciplines have come together to start a Solar Car project at UCSD, located in one of the sunniest cities in the world.
          </div>
        </div>
      </div>

      <div className="about-us">
        {isSmallScreen ? (
          <div>
            <div className="about-us-container margin-top-lg">
              <div className="about-us-text-container">
                <div className="our-mission-title">The Racers</div>
                <div className="our-mission-text">
                  Our Solar Car is designed to be highly efficient in converting solar energy into mechanical motion, and all power used to run the car will come from the sun. To demonstrate our car to the rest of the world, we aim in participating in solar races, including some of the below:

                  The Formula Sun Grand Prix (Summer 2022) : The Formula Sun Grand Prix (FSGP) is an annual track race that is held on grand prix or road style closed courses. This unique style of solar car racing is open to teams from around the world and truly tests the limits of the vehicles in handling curves, braking, and acceleration.

The American Solar Challenge (Summer 2022) : The American Solar Challenge (ASC) is a multi-day, 1,500-2,000 mile cross-country endurance rally across North America. The event is typically held every other year during the summer and is open to collegiate level solar car teams from countries all over the world. The routes have varied greatly over the course of the event’s rich history, but they are always designed to provide teams with a great opportunity to demonstrate their solar cars under real world driving conditions and thoroughly test the reliability of all onboard systems.

                  </div>
              </div>
            </div>
          </div>
        ) : (
            <div>
              <div className="">
                <div className="our-mission-container">
                  <div className="our-mission-title">The Races</div>
                  <div className="our-mission-text">
                    Our Solar Car is designed to be highly efficient in converting solar energy into mechanical motion, and all power used to run the car will come from the sun. To demonstrate our car to the rest of the world, we aim in participating in solar races, including some of the below:
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
      <Footer />
    </div>
  );
}
