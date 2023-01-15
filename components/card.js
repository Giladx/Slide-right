import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <div className="card-card item">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="card-image"
        />
        <button className="card-button button">{props.button}</button>
        <button className="card-button1 button">{props.button1}</button>
      </div>
      <style jsx>
        {`
          .card-card {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            box-shadow: 5px 5px 20px 0px #d4d4d4;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .card-image {
            width: 100%;
            height: auto;
            min-width: var(--dl-size-size-xxlarge);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            max-height: 300px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .card-button {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 35px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            border-color: var(--dl-color-primary-darkblue);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            background-color: var(--dl-color-primary-yellow);
          }
          .card-button1 {
            color: var(--dl-color-primary-darkblue);
            width: 100%;
            font-size: 35px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            font-style: normal;
            text-align: center;
            font-weight: 900;
            border-color: var(--dl-color-primary-darkblue);
            border-radius: var(--dl-radius-radius-radius8);
            text-transform: uppercase;
            background-color: var(--dl-color-primary-yellow);
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  image_alt: 'image',
  button1: 'Button',
  button: 'Button',
  image_src:
    'https://images.unsplash.com/photo-1517984922331-8dbaa8ffa9c1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI4fHxmcmVlfGVufDB8fHx8MTY3MzczMzkyMQ&ixlib=rb-4.0.3&w=300',
}

Card.propTypes = {
  image_alt: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
  image_src: PropTypes.string,
}

export default Card
