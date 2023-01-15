import React from 'react'

import PropTypes from 'prop-types'

const Data = (props) => {
  return (
    <>
      <div className="data-data">
        <span className="data-text">
          <span>Data</span>
          <br></br>
        </span>
        <span className="data-text3">{props.text}</span>
        <span className="data-text4">{props.text1}</span>
        <span className="data-text5">{props.text2}</span>
      </div>
      <style jsx>
        {`
          .data-data {
            width: 168px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .data-text {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            font-style: normal;
            font-weight: 900;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .data-text3 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .data-text4 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .data-text5 {
            color: var(--dl-color-primary-darkblue);
            font-size: 22px;
            margin-bottom: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

Data.defaultProps = {
  text1: 'Sitemap',
  text: 'Copyrights',
  text2: 'Privacy Policy',
}

Data.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default Data
