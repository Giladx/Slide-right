import React from 'react'

import PropTypes from 'prop-types'

import Info from './info'
import Data from './data'
import Contact from './contact'
import Newsletter from './newsletter'
import Copywrite from './copywrite'

const FooterLight = (props) => {
  return (
    <>
      <footer className={`footer-light-footer-light ${props.rootClassName} `}>
        <div className="footer-light-seperator">
          <div className="footer-light-border"></div>
        </div>
        <div className="footer-light-links">
          <Info></Info>
          <Data></Data>
          <Contact rootClassName="contact-root-class-name"></Contact>
          <div className="footer-light-div"></div>
          <Newsletter></Newsletter>
        </div>
        <div className="footer-light-seperator1">
          <div className="footer-light-border1"></div>
          <Copywrite rootClassName="copywrite-root-class-name"></Copywrite>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-light-footer-light {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .footer-light-seperator {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-light-border {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dotted;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .footer-light-links {
            flex: 0 0 auto;
            width: 46%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            padding-bottom: 1px;
            justify-content: flex-start;
          }
          .footer-light-div {
            flex: 0 0 auto;
            width: auto;
            height: var(--dl-size-size-xlarge);
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dotted;
            border-width: 1px;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .footer-light-seperator1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-light-border1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dotted;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }

          @media (max-width: 1600px) {
            .footer-light-links {
              width: 60%;
            }
            .footer-light-div {
              margin-right: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 1200px) {
            .footer-light-links {
              width: 80%;
            }
          }
          @media (max-width: 991px) {
            .footer-light-links {
              width: 90%;
            }
          }
          @media (max-width: 767px) {
            .footer-light-links {
              flex-direction: column;
            }
            .footer-light-div {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .footer-light-seperator1 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FooterLight.defaultProps = {
  rootClassName: '',
}

FooterLight.propTypes = {
  rootClassName: PropTypes.string,
}

export default FooterLight
