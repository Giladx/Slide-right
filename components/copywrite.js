import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Copywrite = (props) => {
  return (
    <>
      <div className={`copywrite-copywrite ${props.rootClassName} `}>
        <Link href="/">
          <a className="copywrite-link">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="copywrite-image"
            />
          </a>
        </Link>
        <a
          href={props.link_text}
          target="_blank"
          rel="noreferrer noopener"
          className="copywrite-link1"
        >
          {props.text}
        </a>
      </div>
      <style jsx>
        {`
          .copywrite-copywrite {
            flex: 0 0 auto;
            width: 46%;
            height: 100px;
            display: flex;
            position: relative;
            align-self: center;
            flex-direction: row;
          }
          .copywrite-link {
            display: contents;
          }
          .copywrite-image {
            width: auto;
            height: 4em;
            align-self: center;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .copywrite-link1 {
            top: 41px;
            color: var(--dl-color-primary-darkblue);
            right: 0px;
            position: absolute;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            text-decoration: none;
          }

          @media (max-width: 1600px) {
            .copywrite-root-class-name {
              width: 60%;
            }
          }
          @media (max-width: 1200px) {
            .copywrite-copywrite {
              width: 80%;
            }
            .copywrite-root-class-name {
              width: 80%;
            }
          }
          @media (max-width: 991px) {
            .copywrite-copywrite {
              width: 60%;
            }
            .copywrite-image {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .copywrite-link1 {
              position: static;
            }
            .copywrite-root-class-name {
              width: 90%;
            }
          }
          @media (max-width: 767px) {
            .copywrite-copywrite {
              width: 60%;
              height: 153px;
            }
            .copywrite-image {
              margin-left: 0px;
            }
            .copywrite-link1 {
              position: static;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .copywrite-copywrite {
              width: 100%;
              height: 200px;
              padding-bottom: 0px;
            }
            .copywrite-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .copywrite-link1 {
              top: 42px;
              right: 1px;
              position: static;
            }
            .copywrite-root-class-name {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Copywrite.defaultProps = {
  rootClassName: '',
  link_text: 'https://011.ninja',
  image_alt: 'image',
  text: 'All rights received @ Slide Right  | </un> Coded by 011.ninja ',
  image_src: '/playground_assets/logo-1500h.png',
}

Copywrite.propTypes = {
  rootClassName: PropTypes.string,
  link_text: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default Copywrite
