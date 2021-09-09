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
        <div>
          <Image
            src="/engineerLanding.jpg"
            layout="responsive"
            width="100"
            height="50"
          />
        </div>
      </div>
      <div className="our-mission">
        <div className="our-mission-container">
          <div className="our-mission-title">Want to reach out to us?</div>
          <div className="our-mission-text">
              For any questions, requests and donations. please contact us through <a href="mailto:someone@yoursite.com">jody@solarcar.id</a>  
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
