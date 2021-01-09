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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et elit
                et mauris, mattis dolor praesent nisi,
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et elit
                et mauris, mattis dolor praesent nisi,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et elit et
            mauris, mattis dolor praesent nisi, varius orci. Eget pretium,
            pellentesque nunc montes, pulvinar. A maecenas commodo egestas
            cursus. Dolor est magna dignissim diam amet, purus suspendisse.
            Risus pellentesque enim nec sed. Viverra orci habitasse id risus
            libero faucibus elit metus, morbi. Nunc nulla facilisis nascetur
            fringilla ipsum condimentum.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                    elit et mauris, mattis dolor praesent nisi, varius orci.
                    Eget pretium, pellentesque nunc montes, pulvinar. A maecenas
                    commodo egestas cursus. Dolor est magna dignissim diam amet,
                    purus suspendisse. Risus pellentesque enim nec sed. Viverra
                    orci habitasse id risus libero faucibus elit metus, morbi.
                    Nunc nulla facilisis nascetur fringilla ipsum condimentum.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                    elit et mauris, mattis dolor praesent nisi, varius orci.
                    Eget pretium, pellentesque nunc montes, pulvinar. A maecenas
                    commodo egestas cursus. Dolor est magna dignissim diam amet,
                    purus suspendisse. Risus pellentesque enim nec sed. Viverra
                    orci habitasse id risus libero faucibus elit metus, morbi.
                    Nunc nulla facilisis nascetur fringilla ipsum condimentum.
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
