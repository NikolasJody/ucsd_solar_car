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
            src="/oldTeam.jpg"
            layout="responsive"
            width="100"
            height="50"
          />
        </div>
      </div>
      <div className="our-mission">
        <div className="our-mission-container">
          <div className="our-mission-text">
          The project is currently recruiting! If you are interested in learning more about the team, about what we do, and how to join the team, feel free to contact us via any of the channels below!
          <br/><br/>
          If you would like to be added to the mailing list to be notified of events, and when the applications open, fill out this form: https://forms.gle/tyBKYYqABdbP7GTF8
          <br/><br/>
          Website: ucsdsolarcar.org<br/>
          Facebook: UCSD Solar Car<br/>
          Instagram: @ucsdsolarcar<br/>
          Email: ucsdsolarcar@gmail.com<br/>
          Phone: (541) 300-7986<br/>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
