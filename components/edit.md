     <CSSTransition
        in={expandHamburger}
        unmountOnExit
        timeout={300}
        classNames="expand"
        // transitionAppear={true}
      >
        <div className="expanded-header z-index">
          {/* <CSSTransition
            in={expandHamburger}
            unmountOnExit
            timeout={300}
            classNames="expand-image"
            // transitionAppear={true}
          > */}
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
          {/* </CSSTransition> */}
        </div>
      </CSSTransition>