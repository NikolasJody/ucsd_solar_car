import React, { useRef, useState, useEffect } from "react";
import PaymentComponent from "../components/Payment";
import { isCompositeComponent } from "react-dom/test-utils";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

const scrollToRef = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

const PaymentScreen = (props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    setIsSmallScreen(screen.width <= 600);
  }, []);
  const [amount, setAmount] = useState();
  const bottomContainerRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Donate</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div>
        <div className="donate-background">
          <div className="donate-background-text-container">
            <div className="donate-header-text-container">
              <div className="donate-background-text-title">DONATE</div>
              <div className="donate-background-text">
                To support our programs
              </div>
            </div>
          </div>
        </div>

        <div className="donation_list">
          <div
            className="donation_card"
            onClick={() => {
              scrollToRef(bottomContainerRef);
              setAmount(100);
            }}
          >
            <div className="perks-logo-container">
            <div className="perks-logo">
              <Image  src="/bronze.jpg" width="298" relative height="255.73" />
            </div>
            </div>
            <div className="donation-card-title">$100</div>
            <div className="donation-card-perks">Perks</div>
            <div className="donation-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et elit
              et mauris, mattis dolor praesent nisi, varius orci.{" "}
            </div>
          </div>
          <div
            className="donation_card"
            onClick={() => {
              scrollToRef(bottomContainerRef);
              setAmount(100);
            }}
          >
            <div className="perks-logo-container">
            <div className="perks-logo">
              <Image  src="/silver.jpg" width="228" relative height="255" />
            </div>
            </div>
            <div className="donation-card-title">$100</div>
            <div className="donation-card-perks">Perks</div>
            <div className="donation-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et elit
              et mauris, mattis dolor praesent nisi, varius orci.{" "}
            </div>
          </div>
          <div
            className="donation_card"
            onClick={() => {
              scrollToRef(bottomContainerRef);
              setAmount(100);
            }}
          >
            <div className="perks-logo-container">
            <div className="perks-logo">
              <Image  src="/gold.jpg" width="185" relative height="254" />
            </div>
            </div>
            <div className="donation-card-title">$100</div>
            <div className="donation-card-perks">Perks</div>
            <div className="donation-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et elit
              et mauris, mattis dolor praesent nisi, varius orci.{" "}
            </div>
          </div>
        </div>

        <div ref={bottomContainerRef} className="bottom_container">
          <div className="donation_left_image_container">
            <Image src="/humans.jpg" width="295.32" height="441.08" />
          </div>

          <div className="donation_box">
            <div className="donation-container">
            <PaymentComponent
              amount={amount}
              onSuccess={(data) => {
                console.log(data);
              }}
            />
          </div>
          </div>

          <div className="donation_right_image_container">
            <Image src="/abstract.jpg" width="700" height="440" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentScreen;
