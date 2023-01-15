import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Header from '../components/header'
import Card from '../components/card'
import FooterLight from '../components/footer-light'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Slide Right</title>
          <meta
            name="description"
            content="A full-service sliding glass\ndoor repair company"
          />
          <meta property="og:title" content="Slide Right" />
          <meta
            property="og:description"
            content="A full-service sliding glass\ndoor repair company"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7f5c1ac9-3363-4b83-a9f4-e49e32493f11/172d04ad-cc77-433d-bf17-c45927f084b9?org_if_sml=1"
          />
        </Head>
        <Header></Header>
        <div>
          <DangerousHTML
            html={`<style>
::-webkit-scrollbar{
        height: 4px;
        width: 4px;
        background: #000E4A;
    }
    ::-webkit-scrollbar-thumb:horizontal{
        background: #000E4A;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0;
        background: #FAFF00;
    }
</style>`}
          ></DangerousHTML>
        </div>
        <div className="home-hero">
          <div className="home-max-width">
            <h1 className="home-text">
              <span>We are a full-service sliding glass</span>
              <br></br>
              <span> door repair company</span>
              <br></br>
            </h1>
            <span className="home-text05">
              installing, replacing and repairing
            </span>
            <h1 className="home-text06">with years of experience</h1>
            <button className="home-button button">
              <span>
                <span>Get Free Estimate</span>
                <br></br>
              </span>
            </button>
            <div className="home-gallery">
              <div className="home-container01">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1616860744588-fcc95e7cc721?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3MzY1NTQ2Mw&amp;ixlib=rb-4.0.3&amp;w=300"
                  className="home-image"
                />
              </div>
              <div className="home-container02">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1623189615085-11a59bd4fbd2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzM2NTU0NjM&amp;ixlib=rb-4.0.3&amp;w=300"
                  className="home-image1"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1601084213767-04a4dba01dbb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzM2NTU0NjM&amp;ixlib=rb-4.0.3&amp;w=300"
                  className="home-image2"
                />
              </div>
              <div className="home-container03">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1620641621506-5e8cc7cb5656?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3MzY1NTQ2Mw&amp;ixlib=rb-4.0.3&amp;w=500"
                  className="home-image3"
                />
                <div className="home-container04">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1519999933293-fb5e79c3e9b3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxzbGlkaW5nJTIwZG9vcnxlbnwwfHx8fDE2NzM2NTU0NjM&amp;ixlib=rb-4.0.3&amp;w=300"
                    className="home-image4"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1525570665650-76bb26af503d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHNsaWRpbmclMjBkb29yfGVufDB8fHx8MTY3MzY1NTQ2Mw&amp;ixlib=rb-4.0.3&amp;w=300"
                    className="home-image5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-services">
          <h1 className="home-text10">
            <span>OUR SERVICES</span>
            <br></br>
          </h1>
          <div className="home-corosel items">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="home-corosel1 items">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
        <div className="home-portofolio">
          <h1 className="home-text13">
            <span>OUR work</span>
            <br></br>
          </h1>
          <span className="home-text16">
            <span>
              Slide Right, Door Repair Services also ensure that in the event
              that your sliding glass door breaks or fails to open and close
              properly, we will provide a fast repair service with our decades
              of experience. For more information about our sliding glass door
              installation and repair services
            </span>
            <br></br>
            <br></br>
          </span>
          <span className="home-text20">
            Our expert glass technicians have the experience and knowledge to
            install quality glass and extend the life of your new sliding glass
            patio doors. Our glass experts can also design and install custom
            glass sliding dog doors. Sliding Door Express technicians are
            professionally trained, licensed, and insured, so you can rest
            assured that the installation of your new sliding door or any other
            replacement parts you may need has been handled properly.
          </span>
          <button className="home-button1 button">
            <a href="tel:+17862514754" className="home-link">
              <span className="home-text21">CALL NOW!</span>
              <br className="home-text22"></br>
              <span className="home-text23">786-251-4754</span>
              <br></br>
            </a>
          </button>
        </div>
        <div className="home-about">
          <div className="home-max-width1">
            <div className="home-text-block">
              <span className="home-text25">about us</span>
              <h1 className="home-text26">Why choose us?</h1>
              <span className="home-text27">
                We are a full-service glass sliding doors professionals with
                organized office and plenty of in-house talent.
              </span>
              <div className="home-checklist">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="home-text28">FREE Estimate</span>
              </div>
              <div className="home-checklist1">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="home-text29">
                  <span>Certified Technicians</span>
                  <br></br>
                </span>
              </div>
              <div className="home-checklist2">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="home-text32">
                  Quality services and support all time
                </span>
              </div>
              <div className="home-checklist3">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="home-text33">
                  Over 10 years in the business
                </span>
              </div>
              <div className="home-checklist4">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="home-text34">Future-Proofing Projects</span>
              </div>
              <div className="home-checklist5">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="home-text35">
                  Support in any implementation
                </span>
              </div>
            </div>
            <div className="home-container05">
              <img
                alt="image"
                src="/playground_assets/rectangle%20109-900w.png"
                className="home-image6"
              />
            </div>
          </div>
        </div>
        <div className="home-process">
          <div className="home-max-width2">
            <div className="home-text-block1">
              <span className="home-text36">Our process</span>
              <h1 className="home-text37">
                We use a simple three step process.
              </h1>
              <div className="home-container06">
                <span className="home-text38">01</span>
                <div className="home-container07">
                  <span className="home-text39">
                    <span>FREE ESTIMATE</span>
                    <br></br>
                  </span>
                  <span className="home-text42">
                    We will estimate work price for free
                  </span>
                </div>
              </div>
              <div className="home-container08">
                <span className="home-text43">02</span>
                <div className="home-container09">
                  <span className="home-text44">FIX/INSTALL YOUR DOOR</span>
                  <span className="home-text45">
                    We will fix or install your doors the best way there is
                  </span>
                </div>
              </div>
              <div className="home-container10">
                <span className="home-text46">03</span>
                <div className="home-container11">
                  <span className="home-text47">ENJOY</span>
                  <span className="home-text48">
                    Enjoy your fixed/new doors sliding smooth and quit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-max-width3">
            <span className="home-text49">what are you waiting for?</span>
            <h1 className="home-text50">Let’s Start &amp; Contact Us Now!</h1>
            <div className="home-container12">
              <span className="home-text51">CALL NOW</span>
              <span className="home-text52">786-251-4754</span>
            </div>
          </div>
        </div>
        <FooterLight></FooterLight>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-max-width {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 3.5em;
            font-style: normal;
            text-align: center;
            font-family: Fira Sans;
            font-weight: 900;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .home-text05 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 25px;
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text06 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 3.5em;
            font-style: normal;
            text-align: center;
            font-family: Fira Sans;
            font-weight: 900;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .home-button {
            color: var(--dl-color-primary-darkblue);
            font-size: 35px;
            align-self: center;
            border-color: var(--dl-color-primary-darkblue);
            border-width: 2px;
            background-color: var(--dl-color-primary-yellow);
          }
          .home-gallery {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-image3 {
            width: 100%;
            height: 338px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-image4 {
            width: 50%;
            height: auto;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: 10px;
          }
          .home-image5 {
            width: 208px;
            height: auto;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-radius: 10px;
          }
          .home-services {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-primary-yellow);
          }
          .home-text10 {
            color: var(--dl-color-primary-darkblue);
            font-size: 3em;
            font-family: Fira Sans;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-corosel {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-corosel1 {
            flex: 0 0 auto;
            width: 80%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .home-portofolio {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .home-text13 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 3em;
            text-align: center;
            font-family: Fira Sans;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-text16 {
            color: var(--dl-color-primary-darkblue);
            font-size: 25px;
            max-width: 900px;
            align-self: center;
          }
          .home-text20 {
            color: var(--dl-color-primary-darkblue);
            font-size: 25px;
            max-width: 900px;
            align-self: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-button1 {
            color: var(--dl-color-primary-darkblue);
            font-size: 35px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            border-color: var(--dl-color-primary-darkblue);
            text-transform: uppercase;
            background-color: var(--dl-color-primary-yellow);
          }
          .home-link {
            font-size: 75px;
            text-align: center;
            text-decoration: none;
          }
          .home-about {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-primary-deepblue);
          }
          .home-max-width1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 46%;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-text-block {
            flex: 0 0 auto;
            width: 40%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text25 {
            color: var(--dl-color-primary-yellow);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .home-text26 {
            color: var(--dl-color-primary-yellow);
            font-size: 2.5em;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text27 {
            color: var(--dl-color-primary-yellow);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-checklist {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon {
            fill: var(--dl-color-primary-yellow);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-text28 {
            color: var(--dl-color-primary-yellow);
            font-size: 18px;
          }
          .home-checklist1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon02 {
            fill: var(--dl-color-primary-yellow);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-text29 {
            color: var(--dl-color-primary-yellow);
            font-size: 18px;
          }
          .home-checklist2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon04 {
            fill: var(--dl-color-primary-yellow);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-text32 {
            color: var(--dl-color-primary-yellow);
            font-size: 18px;
          }
          .home-checklist3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon06 {
            fill: var(--dl-color-primary-yellow);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-text33 {
            color: var(--dl-color-primary-yellow);
            font-size: 18px;
          }
          .home-checklist4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon08 {
            fill: var(--dl-color-primary-yellow);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-text34 {
            color: var(--dl-color-primary-yellow);
            font-size: 18px;
          }
          .home-checklist5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon10 {
            fill: var(--dl-color-primary-yellow);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-text35 {
            color: var(--dl-color-primary-yellow);
            font-size: 18px;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 60%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image6 {
            width: 100%;
            height: 380px;
            object-fit: cover;
            border-radius: 10px;
          }
          .home-process {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-primary-darkblue);
          }
          .home-max-width2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 46%;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text-block1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text36 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .home-text37 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            border-width: 1px;
            margin-bottom: 53px;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text38 {
            color: var(--dl-color-gray-900);
            font-size: 75px;
            margin-right: 180px;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text39 {
            color: var(--dl-color-gray-900);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text42 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-bottom: 53px;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text43 {
            color: var(--dl-color-gray-900);
            font-size: 75px;
            margin-right: 180px;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text44 {
            color: var(--dl-color-gray-900);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text45 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-bottom: 53px;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text46 {
            color: var(--dl-color-gray-900);
            font-size: 75px;
            margin-right: 180px;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text47 {
            color: var(--dl-color-gray-900);
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text48 {
            color: var(--dl-color-gray-white);
            font-size: 22px;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-primary-yellow);
          }
          .home-max-width3 {
            flex: 0 0 auto;
            width: 46%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text49 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .home-text50 {
            color: var(--dl-color-primary-darkblue);
            font-size: 3em;
            font-style: normal;
            font-weight: 400;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text51 {
            color: var(--dl-color-primary-darkblue);
            font-size: 4em;
            font-style: normal;
            font-weight: 900;
          }
          .home-text52 {
            color: var(--dl-color-primary-darkblue);
            font-size: 4em;
            font-style: normal;
            font-weight: 900;
          }
          @media (max-width: 1600px) {
            .home-image4 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-text26 {
              font-size: 2em;
            }
            .home-text27 {
              font-size: 14px;
            }
            .home-text28 {
              font-size: 16px;
            }
            .home-text29 {
              font-size: 16px;
            }
            .home-text32 {
              font-size: 16px;
            }
            .home-text33 {
              font-size: 16px;
            }
            .home-text34 {
              font-size: 16px;
            }
            .home-text35 {
              font-size: 16px;
            }
            .home-image6 {
              height: 360px;
            }
            .home-max-width2 {
              max-width: 60%;
            }
          }
          @media (max-width: 1200px) {
            .home-image4 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-max-width1 {
              max-width: 55%;
            }
            .home-text25 {
              font-size: 16px;
            }
            .home-text26 {
              font-size: 1.5em;
            }
            .home-text27 {
              font-size: 12px;
            }
            .home-max-width2 {
              max-width: 80%;
            }
          }
          @media (max-width: 991px) {
            .home-image4 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-button1 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .home-about {
              flex-direction: column;
            }
            .home-max-width1 {
              max-width: 65%;
            }
            .home-max-width3 {
              width: 60%;
            }
            .home-text50 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .home-gallery {
              width: 90%;
              align-self: center;
            }
            .home-image3 {
              width: 100%;
              height: 280px;
            }
            .home-image4 {
              width: 149px;
              height: 281px;
              margin-right: var(--dl-space-space-unit);
            }
            .home-image5 {
              width: 180px;
            }
            .home-button1 {
              text-align: center;
            }
            .home-link {
              font-size: 75px;
              text-decoration: none;
            }
            .home-about {
              flex-direction: column;
            }
            .home-max-width1 {
              max-width: 90%;
            }
            .home-max-width2 {
              max-width: 100%;
            }
            .home-text38 {
              margin-right: 120px;
            }
            .home-text43 {
              margin-right: 120px;
            }
            .home-text46 {
              margin-right: 120px;
            }
            .home-max-width3 {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .home-image3 {
              height: 281px;
            }
            .home-image4 {
              width: 50%;
            }
            .home-image5 {
              width: 92px;
              margin-left: 0px;
            }
            .home-portofolio {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-button1 {
              text-align: center;
            }
            .home-link {
              font-size: 75px;
              text-align: center;
              text-decoration: none;
            }
            .home-text21 {
              font-size: 65px;
            }
            .home-text22 {
              font-size: 65px;
            }
            .home-text23 {
              font-size: 65px;
            }
            .home-about {
              flex-direction: column;
              background-color: var(--dl-color-primary-deepblue);
            }
            .home-max-width1 {
              width: 100%;
              height: 345px;
              max-width: var(--dl-size-size-maxwidth);
            }
            .home-text26 {
              font-size: 1em;
            }
            .home-text27 {
              font-size: 10px;
            }
            .home-icon {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text28 {
              font-size: 12px;
            }
            .home-icon02 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text29 {
              font-size: 12px;
            }
            .home-icon04 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text32 {
              font-size: 12px;
            }
            .home-icon06 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text33 {
              font-size: 12px;
            }
            .home-icon08 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text34 {
              font-size: 12px;
            }
            .home-icon10 {
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text35 {
              font-size: 12px;
            }
            .home-text38 {
              margin-right: 10px;
            }
            .home-text43 {
              margin-right: 10px;
            }
            .home-text46 {
              margin-right: 10px;
            }
            .home-max-width3 {
              width: 100%;
            }
            .home-text52 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
