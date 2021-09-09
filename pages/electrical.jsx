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
          <div className="our-mission-title">Electrical Team Goal</div>
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

      <div className="about-us">

      <div className="display-flex">
          <div className={"flex-1"}> 
            <div className="center">
                <img
                  src="/nerijaJanovskyte.jpg"
                  style={{width: "50%", height: "50%", borderRadius: 100}} 
                />
              </div>
            <div className="margin-sm">
              <div className="roboto-bold">Nerija Janovskyte</div>
              <div className="engineer-text">B.S. Mechanical Engineering, 2022</div>
              <div className="engineer-text">Warren, 2nd year</div>
          
            </div>
          </div>
          <div className={"flex-1"}> 
            <div className="center">
              <img
                src="/yanglinLiu.jpg"
                // layout="responsive"
                style={{width: "50%", height: "50%", borderRadius: 100}} 
              />
            </div>
            <div className="margin-sm">
              <div className="roboto-bold">Yanglin Liu</div>
              <div className="engineer-text">B.S. Mechanical Engineering, 2022</div>
              <div className="engineer-text">7th college, 1st year</div>
            </div>
          </div>
          <div className={"flex-1"}> 
            <div className="center">
              <img
                src="/kanishkaRoy.jpg"
                // layout="responsive"
                style={{width: "50%", height: "50%", borderRadius: 100}} 
              />
            </div>
            <div className="margin-sm">
              <div className="roboto-bold">Yanglin Liu</div>
              <div className="engineer-text">B.S. Mechanical Engineering, 2022</div>
              <div className="engineer-text">7th college, 1st year</div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-mission">
        <div className="our-mission-container">
            <div className="our-mission-title">Progress</div>
          <div className="padding-top-md">
            <div className="display-flex">
              <div className={"our-mission-text", "flex-1"}>
                <div className="margin-sm">
                  <Image
                    src="/progress.jpg"
                    layout="responsive"
                    width="87.6%"
                    height="100%"
                  />
                </div>


              </div>
              <div className={"our-mission-text", "flex-1"}>
                <div className="margin-sm">
                  <div className="progress-title">
                    Bumper
                  </div>
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
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
