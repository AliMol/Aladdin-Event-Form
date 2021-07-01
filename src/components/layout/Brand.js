import React from 'react'
import PropTypes from 'prop-types'
import Logo from './logo.svg'

const Brand = () => {
    return (
        <img
            alt=""
            src={Logo}

            className="d-inline-block align-top"
        />
    )
}

Brand.propTypes = {

}

export default Brand
