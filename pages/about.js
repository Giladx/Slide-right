import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import FooterLight from '../components/footer-light'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Slide Right</title>
          <meta
            name="description"
            content="A full-service sliding glass\ndoor repair company"
          />
          <meta property="og:title" content="About - Slide Right" />
          <meta
            property="og:description"
            content="A full-service sliding glass\ndoor repair company"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7f5c1ac9-3363-4b83-a9f4-e49e32493f11/172d04ad-cc77-433d-bf17-c45927f084b9?org_if_sml=1"
          />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="about-main">
          <div className="about-hero">
            <div className="about-title">
              <h1 className="about-text">About</h1>
            </div>
          </div>
          <div className="about-content">
            <span className="about-text1">
              We do custom installations and work on all types of doors,
              windows, glass, screens, bathrooms and more. At Slide Right, Slide
              Right prides itself on providing durable Home Guard patio doors
              and reliable workmanship from licensed Cincinnati patio door
              contractors. With our customer satisfaction guarantee and friendly
              service, you know you&apos;ll only get the best door replacement
              services in Miami, Florida.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHNsaWRpbmclMjBkb29yc3xlbnwwfHx8fDE2NjM1Mzc2OTg&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="about-image"
          />
          <div className="about-content1">
            <span className="about-text2">
              Call now to learn more about our high quality products, or fill
              out our convenient online form to request a free, no-obligation
              door installation quote. We will not only provide you with a free
              quote before the installation process begins, but we will also
              provide a guide to help you select the sliding door that suits
              your vision and budget. We provide free quotes for replacement and
              installation of doors and windows in Miami . In addition to being
              a reliable choice for Cincinnati door replacements, Slide Right
              also offers window replacements and bathroom renovations.
            </span>
          </div>
        </div>
        <FooterLight rootClassName="footer-light-root-class-name"></FooterLight>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-main {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-hero {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .about-title {
            flex: 0 0 auto;
            width: 46%;
            height: 100px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-yellow);
          }
          .about-text {
            color: var(--dl-color-primary-darkblue);
            font-size: 3em;
            align-self: center;
            text-transform: uppercase;
          }
          .about-content {
            flex: 0 0 auto;
            width: 46%;
            height: auto;
            display: flex;
            align-self: center;
            flex-direction: column;
          }
          .about-text1 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .about-image {
            width: 46%;
            height: 100%;
            align-self: center;
            object-fit: cover;
          }
          .about-content1 {
            flex: 0 0 auto;
            width: 46%;
            height: auto;
            display: flex;
            align-self: center;
            flex-direction: column;
          }
          .about-text2 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            margin-top: var(--dl-space-space-fiveunits);
          }
          @media (max-width: 991px) {
            .about-title {
              width: 100%;
            }
            .about-content {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-image {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-content1 {
              width: 100%;
            }
            .about-text2 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .about-title {
              width: 100%;
            }
            .about-content {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-text1 {
              width: 100%;
            }
            .about-image {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-content1 {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-text2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .about-title {
              width: 100%;
            }
            .about-content {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-image {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-content1 {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
