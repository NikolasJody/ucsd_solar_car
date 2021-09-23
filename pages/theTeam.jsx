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
            src="/theTeam.jpg"
            layout="responsive"
            width="100"
            height="70"
          />
        </div>
      </div>
      <div className="our-mission">
        <div className="our-mission-container">
          {/* <div className="our-mission-title">Electrical Team Goal</div> */}
          <div className="our-mission-text">
            The UCSD Solar Car Team has its roots firmly planted by a spirit of excellence through diversity. With a variety of students from contrasting educational as well as cultural backgrounds, every member is equally responsible for the team's success. Supervising them are the team leads, who go the extra step to bring out the best in every one of them.
          </div>
        </div>
      </div>

      <div className="white-section">
        <div className="member-card-container">
          <div className="member-card-flex">
            <div className={"flex-1"}>
              <div className="center">
                <img
                  src="/tsz-waiKwok.jpg"
                  style={{ width: "50%", height: "50%", borderRadius: 100 }}
                />
              </div>
              <br />
              <div className="roboto-bold">Tsz-Wai Kwok</div>
              <div className="engineer-text">B.S. Mechanical Engineering, 2022</div>

            </div>
            <div className={"flex-2"}>
              <div className="margin-sm, border-card">
                <br />
                <div className="engineer-text">
                  As the Project Lead, my role is to make sure that the team is on track on reaching our end goal - to build UCSD’s first ever Solar Car! I support the subleads and team members in completing their tasks, by providing resources, guidance, and helping identify and unblock any roadblocks along the way. I am also leading the operations team, to identify and outreach to sponsors and the community, managing logistics of the team and the workspace, and managing finances.
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="member-card-container">
          <div className="member-card-flex">
            <div className={"flex-1"}>
              <div className="center">
                <img
                  src="/nerijaJanovskyte.jpg"
                  style={{ width: "50%", height: "50%", borderRadius: 100 }}
                />
              </div>
              <br />
              <div className="roboto-bold">Jesse Sanchez-Villegas</div>
              <div className="engineer-text">B.S. Cognitive Science, 2022</div>

            </div>
            <div className={"flex-2"}>
              <div className="margin-sm, border-card">
                <br />
                <div className="engineer-text">
                  As the Mechanical Lead, I am in charge of assigning mechanical tasks and assigning roles to members. I make sure the team is on track and staying within the timeline goals. I will be creating an order sheet of mechanical parts, tools, and material we will need to continue. Finally, I will help outreach for potential sponsors, training and resources that the team will need.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="member-card-container">
          <div className="member-card-flex">
            <div className={"flex-1"}>
              <div className="center">
                <img
                  src="/KathrynOleksak.jpg"
                  style={{ width: "50%", height: "50%", borderRadius: 100 }}
                />
              </div>
              <br />
              <div className="roboto-bold">Kathryn Oleksak</div>
              <div className="engineer-text">B.S. Mechanical Engineering, 2022</div>

            </div>
            <div className={"flex-2"}>
              <div className="margin-sm, border-card">
                <br />
                <div className="engineer-text">
                  Hi there!  My name’s Kathryn and I’m a fourth-year Electrical Engineering major originally from Los Angeles.  As Electrical Lead, I lead the training process for our new members by introducing them to the car’s electrical systems, hardware topics, and software tools.  I organize the team’s structure and task delegation so everyone has a system to work on.  In addition, I communicate with the Team Lead to manage team logistics, such as getting materials ordered and coordinating cross-subteam work.
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
