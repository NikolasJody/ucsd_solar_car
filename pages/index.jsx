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
        <title>UCSD SolarCar</title>
        <meta charset="UTF-8"/>
        <meta name="description" content="The Solar Car Project is the first of its kind in that it attracts a large variety of students from various engineering as well as non-engineering backgrounds. Participating in this project gives students the opportunity to gain hands-­on experience with different fields of engineering (mechanical, engineering, aerospace, design) as well as experience in business, operations, and project management. Students in Triton Solar Car can stand out from the crowd by gaining important real-world experience and operating in an environment that prepares them for their careers by getting involved in setting deadlines, budgets, designs, reviews while doing their best to control all the unforeseen variables that may arise."/>
        <meta name="keywords" content="ucsd, solarcar, club"/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div>
        {isSmallScreen ? (
          <div className="back">
            <Image
              src="/SolarCarHome.png"
              layout="responsive"
              width="100"
              height="50"
              
            />
            <div className="landing-text-container">
              <div className="landing-text-title">
                Join UCSD's Solar Car Team
              </div>
              {/* <div className="landing-text">
              The Solar Car Project is the first of its kind in that it attracts a large variety of students from various engineering as well as non-engineering backgrounds. Participating in this project gives students the opportunity to gain hands-­on experience with different fields of engineering (mechanical, engineering, aerospace, design) as well as experience in business, operations, and project management. Students in Triton Solar Car can stand out from the crowd by gaining important real-world experience and operating in an environment that prepares them for their careers by getting involved in setting deadlines, budgets, designs, reviews while doing their best to control all the unforeseen variables that may arise.
              </div> */}
              <a href="https://forms.gle/tyBKYYqABdbP7GTF8" className="landing-button">
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
              <a href="" className="landing-button">
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="our-mission">
        <div className="our-mission-container">
          <div className="our-mission-title">Beginning a tradition of excellence</div>
          <div className="our-mission-text">
          The Solar Car Project is the first of its kind in that it attracts a large variety of students from various engineering as well as non-engineering backgrounds. Participating in this project gives students the opportunity to gain hands-­on experience with different fields of engineering (mechanical, engineering, aerospace, design) as well as experience in business, operations, and project management. Students in Triton Solar Car can stand out from the crowd by gaining important real-world experience and operating in an environment that prepares them for their careers by getting involved in setting deadlines, budgets, designs, reviews while doing their best to control all the unforeseen variables that may arise.
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
                  <div className="our-mission-title">Our Mission</div>
                  <div className="our-mission-text">
                  The Solar Car Team is committed to exploring the potential of solar energy, by building UCSD’s first ever Solar Car to participate in national and international competitions. We hope to not only create long-lasting education to portray the power of solar energy, but also inspire both team members and peers to get involved in sustainable projects both at school and in their future careers, to come up with innovative solutions for the energy crisis. Being part of the solar car team will give each team member useful skills needed to be successful in any field they choose to pursue, whether it be engineering, business, operations, or project management.
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
                  <div className="our-mission-title">Our Mission</div>
                  <div className="our-mission-text">
                  The Solar Car Team is committed to exploring the potential of solar energy, by building UCSD’s first ever Solar Car to participate in national and international competitions. We hope to not only create long-lasting education to portray the power of solar energy, but also inspire both team members and peers to get involved in sustainable projects both at school and in their future careers, to come up with innovative solutions for the energy crisis. Being part of the solar car team will give each team member useful skills needed to be successful in any field they choose to pursue, whether it be engineering, business, operations, or project management.
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
