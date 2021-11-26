import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import Layout from "./layout";

const header = ({ siteTitle }) => (
    <>

        <nav className="navbar navbar-expand-md navbar-dark fixed-top top-margin" >
            <a className="navbar-logo" href="#"></a>
            <Link className="navbar-brand" to="/">{siteTitle}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active mr-4">
                        <a className="nav-link" href="/contact-us">Contact us</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="top-margin"></div>
    </>
)

header.propTypes = {
    siteTitle: PropTypes.string,
}

header.defaultProps = {
    siteTitle: ``,
}

export default header
