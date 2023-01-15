import React from 'react'

import PropTypes from 'prop-types'

const Contact = (props) => {
  return (
    <>
      <div className={`contact-contact ${props.rootClassName} `}>
        <span className="contact-text">
          <span>Contact Us</span>
          <br></br>
        </span>
        <span className="contact-text3">{props.text}</span>
        <a href="tel:+17862514754" className="contact-link">
          {props.text1}
        </a>
      </div>
      <style jsx>
        {`
          .contact-contact {
            width: 214px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-text {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .contact-text3 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .contact-link {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .contact-root-class-name {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Contact.defaultProps = {
  rootClassName: '',
  text1: '+1-786-2514-754',
  text: '2157 Village ViewDrive, Old Fort Myers Florida 33901',
}

Contact.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Contact
