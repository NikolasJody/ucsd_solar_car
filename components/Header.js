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
              <Link href="/mecheng">
                <a href="" className="nav-item">
                  Mechanical
              </a>
              </Link>

              <Link href="/electrical">
                <a href="" className="nav-item">
                  Electrical
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
        transitionAppear={true}
      >
        <div className="expanded-header z-index">
          <CSSTransition
            in={expandHamburger}
            unmountOnExit
            timeout={300}
            classNames="expand-image"
            transitionAppear={true}
          >
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
                <Link href="/mecheng" >
                  <div className="expanded-menu-item">
                    <Image
                      className="expanded-menu-img"
                      src="/mechanical.jpg"
                      layout="responsive"
                      width="100"
                      height="35"
                    />
                    <div className="expanded-nav-item">Mechanical</div>
                  </div>
                </Link>
                <div className="expanded-menu-item">
                  <Image
                    className="expanded-menu-img"
                    src="/mechanical.jpg"
                    layout="responsive"
                    width="100"
                    height="35"
                  />
                  <div className="expanded-nav-item">Electrical</div>
                </div>
                <div className="expanded-menu-item">
                  <Image
                    className="expanded-menu-img"
                    src="/mechanical.jpg"
                    layout="responsive"
                    width="100"
                    height="35"
                  />
                  <div className="expanded-nav-item">Contact</div>
                </div>
                <div className="expanded-menu-item">
                  <Image
                    className="expanded-menu-img"
                    src="/mechanical.jpg"
                    layout="responsive"
                    width="100"
                    height="35"
                  />
                  <Link href="/donate">
                    <a className="expanded-nav-item">Donate</a>
                  </Link>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Header;
