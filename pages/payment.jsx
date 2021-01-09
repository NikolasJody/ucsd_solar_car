import React, { useRef, useState } from 'react';
import PaymentComponent from '../components/Payment';
import { isCompositeComponent } from 'react-dom/test-utils';
import headerImage from '../images/donation_header.jpg';
import bronzeIcon from '../images/bronze_icon.jpg';
import humanImage from '../images/humans.jpg';
import abstractImage from '../images/abstract.jpg';


const scrollToRef = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth"})
}

const PaymentScreen = (props) => {
    const [amount, setAmount] = useState();
    const bottomContainerRef = useRef(null);

    return (
        <div class="body">
            <div class="header">
                <div class="text_container">
                    <strong class="header_text" >DONATE</strong>
                    <strong class="subheader_text" >To support our programs</strong>
                </div>
                <img src={headerImage} />
            </div>

            <div class="donation_list" >
                <div class="donation_card"
                    onClick={() => {
                        scrollToRef(bottomContainerRef);
                        setAmount(100);
                    }}>
                    <img class="donation_icon" src={bronzeIcon} />
                    <strong class="header_text bronze">Bronze</strong>
                    <strong class="subheader_text" >$100</strong>
                    <strong class="perks_header" >Perks</strong>
                    <strong class="perks_text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et elit et mauris, mattis dolor praesent nisi, varius orci. </strong>
                </div>
                <div class="donation_card"
                    onClick={() => {
                        scrollToRef(bottomContainerRef);
                        setAmount(200);
                    }}>
                    <img class="donation_icon" src={bronzeIcon} />
                    <strong class="header_text silver">Silver</strong>
                    <strong class="subheader_text" >$100</strong>
                    <strong class="perks_header" >Perks</strong>
                    <strong class="perks_text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et elit et mauris, mattis dolor praesent nisi, varius orci. </strong>
                </div>
                <div class="donation_card"
                    onClick={() => {
                        scrollToRef(bottomContainerRef);
                        setAmount(300);
                    }}>
                    <img class="donation_icon" src={bronzeIcon} />
                    <strong class="header_text gold">Gold</strong>
                    <strong class="subheader_text" >$100</strong>
                    <strong class="perks_header" >Perks</strong>
                    <strong class="perks_text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et elit et mauris, mattis dolor praesent nisi, varius orci. </strong>
                </div>
            </div>

            <div 
                ref={bottomContainerRef}
                class="bottom_container">
                <div class="donation_left_image_container">
                    <img src={humanImage} />
                </div>

                <div class="donation_box">
                    <PaymentComponent
                        amount={amount}
                        onSuccess={data => { console.log(data); }} />
                </div>

                <div class="donation_right_image_container">
                    <img src={abstractImage} />
                </div>

            </div>
        </div>
    );
}


export default PaymentScreen;