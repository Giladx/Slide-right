import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <div className={`header-header ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="header-navbar-interactive">
          <Link href="/">
            <a className="header-link">
              <img
                alt={props.Logo_alt}
                src="/playground_assets/logo-1500h.png"
                className="header-logo"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="header-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="header-nav"
            >
              <Link href="/about">
                <a className="header-link1">{props.text}</a>
              </Link>
              <Link href="/contact">
                <a className="header-link2">{props.text1}</a>
              </Link>
              <Link href="/data">
                <a className="header-link3">{props.text11}</a>
              </Link>
              <Link href="/privacy-policy">
                <a className="header-link4">{props.text2}</a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="header-btn-group">
            <a href="tel:+17862514754" className="header-call-now1 button">
              {props.Callnow1}
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="header-burger-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="header-nav1"
            >
              <div className="header-container">
                <img
                  alt={props.image_alt}
                  src="/playground_assets/logo-1500h.png"
                  className="header-image"
                />
                <div data-thq="thq-close-menu" className="header-menu-close">
                  <svg viewBox="0 0 1024 1024" className="header-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="header-nav2"
              >
                <span className="header-text">{props.text5}</span>
                <span className="header-text1">{props.text6}</span>
                <span className="header-text2">{props.text7}</span>
              </nav>
              <div className="header-container1">
                <button className="header-call-now button">
                  {props.Call12}
                </button>
              </div>
            </div>
            <div className="header-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="header-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="header-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="header-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .header-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .header-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .header-link {
            display: contents;
          }
          .header-logo {
            height: 4rem;
            align-self: flex-start;
            text-decoration: none;
          }
          .header-desktop-menu {
            display: flex;
          }
          .header-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .header-link1 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-link2 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-left: var(--dl-space-space-twounits);
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-link3 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-left: var(--dl-space-space-twounits);
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-link4 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-left: var(--dl-space-space-twounits);
            text-transform: uppercase;
            text-decoration: none;
          }
          .header-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-call-now1 {
            color: var(--dl-color-primary-darkblue);
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            border-color: var(--dl-color-primary-darkblue);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: var(--dl-color-primary-yellow);
          }
          .header-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .header-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .header-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .header-image {
            height: 2rem;
          }
          .header-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .header-call-now {
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon-group {
            display: flex;
          }
          .header-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 1200px) {
            .header-link1 {
              color: var(--dl-color-primary-darkblue);
            }
            .header-link2 {
              color: var(--dl-color-primary-darkblue);
            }
            .header-link3 {
              color: var(--dl-color-primary-darkblue);
            }
            .header-link4 {
              color: var(--dl-color-primary-darkblue);
            }
            .header-call-now1 {
              color: var(--dl-color-primary-darkblue);
              border-color: var(--dl-color-primary-darkblue);
              border-width: 2px;
              border-radius: var(--dl-radius-radius-radius8);
              background-color: var(--dl-color-primary-yellow);
            }
          }
          @media (max-width: 991px) {
            .header-logo {
              height: 3rem;
            }
            .header-desktop-menu {
              display: none;
            }
            .header-btn-group {
              display: none;
            }
            .header-burger-menu {
              display: flex;
            }
            .header-icon {
              fill: var(--dl-color-primary-darkblue);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .header-image {
              height: 3rem;
            }
            .header-icon02 {
              fill: var(--dl-color-primary-darkblue);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .header-text {
              color: var(--dl-color-primary-darkblue);
            }
            .header-text1 {
              color: var(--dl-color-primary-darkblue);
            }
            .header-text2 {
              color: var(--dl-color-primary-darkblue);
            }
            .header-call-now {
              color: var(--dl-color-primary-darkblue);
              font-size: 25px;
              font-style: normal;
              font-weight: 700;
              border-color: var(--dl-color-primary-darkblue);
              border-width: 2px;
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-primary-yellow);
            }
            .header-icon04 {
              fill: var(--dl-color-primary-darkblue);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .header-icon06 {
              fill: var(--dl-color-primary-darkblue);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .header-icon08 {
              fill: var(--dl-color-primary-darkblue);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
          }
          @media (max-width: 767px) {
            .header-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-link2 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-link3 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-link4 {
              margin-left: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .header-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .header-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  text1: 'contact',
  text: 'About',
  text11: 'data',
  rootClassName: '',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text6: 'Contact',
  Callnow1: '786-2514-754',
  image_alt: 'image',
  Logo_alt: 'logo',
  text5: 'About',
  Call12: '786-2514-754',
  text7: 'Privacy Policy',
  text2: 'Privacy Policy',
  Logo_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
}

Header.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text6: PropTypes.string,
  Callnow1: PropTypes.string,
  image_alt: PropTypes.string,
  Logo_alt: PropTypes.string,
  text5: PropTypes.string,
  Call12: PropTypes.string,
  text7: PropTypes.string,
  text2: PropTypes.string,
  Logo_src: PropTypes.string,
}

export default Header
