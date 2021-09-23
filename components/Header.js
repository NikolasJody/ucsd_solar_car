import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CSSTransition, Transition } from "react-transition-group";
import Link from "next/link";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [expandHamburger, setExpandHamburger] = useState(false);

  useEffect(() => {
    setIsSmallScreen(screen.width <= 500);
  }, []);

  const onHamburgerClick = (b) => {
    setExpandHamburger(b);
  };

  return (
    <div className="header">
      <div className="header-container">
        <Link href="/">
          <Image
            src="/favicon.png"
            alt="UCSD Solar Car Logo"
            width="70"
            height="50"
          />
        </Link>
        {isSmallScreen ? (
          <a
            href="#expand"
            className="hamburger-container"
            onClick={() => onHamburgerClick(true)}
          >
            <Image
              src="/hamburger.png"
              alt="hamburger menu logo"
              width="33"
              height="28"
            />
          </a>
        ) : (
            <div className="navbar">
              <Link href="/aboutUs">
                <a href="" className="nav-item">
                  About Us
              </a>
              </Link>

              <Link href="/theTeam">
                <a href="" className="nav-item">
                  The Team
              </a>
              </Link>
              <a href="/contact" className="nav-item">
                Contact
            </a>
              <Link href="/donate">
                <a className="nav-button">Donate</a>
              </Link>
            </div>
          )}
      </div>
      <CSSTransition
        in={expandHamburger}
        unmountOnExit
        timeout={300}
        classNames="expand"
        // transitionAppear={true}
      >
        <div className="expanded-header z-index">
            <div>
              <div className="expanded-header-container">
                <a
                  href="#"
                  className="expanded-hamburger-container"
                  onClick={() => onHamburgerClick(false)}
                >
                  <Image
                    src="/hamburger-expanded.png"
                    alt="hamburger menu expanded logo"
                    width="33"
                    height="28"
                  />
                </a>
              </div>
              <div className="expanded-menu-container">
                <Link href="/aboutUs" >
                  <div className="expanded-menu-item">
                    <div className="expanded-nav-item">About Us</div>
                  </div>
                </Link>
                <Link href="/electrical" >
                <div className="expanded-menu-item">
                  <div className="expanded-nav-item">Electrical</div>
                </div>
                </Link>
                <Link href="/contact" >
                <div className="expanded-menu-item">
                  <div className="expanded-nav-item">Contact</div>
                </div>

                </Link>
                <Link href="/donate" >
                <div className="expanded-menu-item">
                    <div className="expanded-nav-item">Donate</div>
                </div>
                </Link>
              </div>
            </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Header;
