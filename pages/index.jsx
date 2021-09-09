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
          <div>
            <Image
              src="/landing.jpg"
              layout="responsive"
              width="100"
              height="50"
            />
            <div className="landing-text-container">
              <div className="landing-text-title">
                Join UCSD's Solar Car Team
              </div>
              <div className="landing-text">
              The Solar Car Project is the first of its kind in that it attracts a large variety of students from various engineering as well as non-engineering backgrounds. Participating in this project gives students the opportunity to gain hands-­on experience with different fields of engineering (mechanical, engineering, aerospace, design) as well as experience in business, operations, and project management. Students in Triton Solar Car can stand out from the crowd by gaining important real-world experience and operating in an environment that prepares them for their careers by getting involved in setting deadlines, budgets, designs, reviews while doing their best to control all the unforeseen variables that may arise.
              </div>
              <a href="" className="landing-button">
                Join Now
              </a>
            </div>
          </div>
        ) : (
          <div className="landing-image">
            <div className="landing-text-container">
              <div className="landing-text-title">
                Join UCSD's Solar Car Team
              </div>
              <div className="landing-text">
              The Solar Car Project is the first of its kind in that it attracts a large variety of students from various engineering as well as non-engineering backgrounds. Participating in this project gives students the opportunity to gain hands-­on experience with different fields of engineering (mechanical, engineering, aerospace, design) as well as experience in business, operations, and project management. Students in Triton Solar Car can stand out from the crowd by gaining important real-world experience and operating in an environment that prepares them for their careers by getting involved in setting deadlines, budgets, designs, reviews while doing their best to control all the unforeseen variables that may arise.
              </div>
              <a href="" className="landing-button">
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="our-mission">
        <div className="our-mission-container">
          <div className="our-mission-title">Our Mission</div>
          <div className="our-mission-text">
            Triton Solar Car is a sustainability project partnered with UCSD Engineers for a Sustainable World (ESW). Our mission is to build a car that is fueled 100% by solar energy and once the car is finished, we will apply to compete in solar car races.
            This will not only portray the power of solar energy, but this project also helps inspire both team members and peers to get involved in sustainable projects both in school and their future careers. This also trains our members' useful skills needed to be successful engineers in any field they choose to pursue. Each of our members are working hard not only to finish the car but to learn how impactful using solar energy can be.
          </div>
        </div>
      </div>

      <div className="about-us">
        {isSmallScreen ? (
          <div>
            <div className="about-us-background-image">
              <Image
                src="/landing-solar-car.png"
                layout="responsive"
                width="575"
                height="440"
              />
            </div>
            <div className="about-us-container">
                <div className="about-us-team-image">
                  <Image
                    src="/team.jpg"
                    width="700"
                    height="440"
                  />
                </div>
              </div>
              <div className="about-us-container margin-top-lg">
                <div className="about-us-text-container">
                  <div className="our-mission-title">About Us</div>
                  <div className="our-mission-text">
                  Established in the fall of 2015, UCSD's first Solar Car Team is an entirely student-run project that aims to design, build, test, and race solar powered vehicles. Comprising over 15 students across a variety of disciplines and areas of study, we have come together to start a Solar Car program at UCSD, located in one of the sunniest cities in the world.
                  </div>
                </div>
              </div>
          </div>
        ) : (
          <div>
            <div className="about-us-background-image">
              <Image
                src="/landing-solar-car.png"
                layout="responsive"
                width="575"
                height="440"
              />
            </div>
            <div className="d-flex">
              <div className="about-us-container">
                <div className="about-us-text-container">
                  <div className="our-mission-title">About Us</div>
                  <div className="our-mission-text">
                  Established in the fall of 2015, UCSD's first Solar Car Team is an entirely student-run project that aims to design, build, test, and race solar powered vehicles. Comprising over 15 students across a variety of disciplines and areas of study, we have come together to start a Solar Car program at UCSD, located in one of the sunniest cities in the world.
                  </div>
                </div>
              </div>
              <div className="about-us-container">
                <div className="about-us-team-image">
                  <Image
                    src="/team.jpg"
                    // layout="responsive"
                    width="700"
                    height="440"
                  />
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
