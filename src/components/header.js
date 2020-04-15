import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <header>
        <div style = {{display: "flex"}}>
            <div style={{ padding: 20, marginRight: 400 }}>
                <Link to="/">
                    {siteTitle}
                </Link>
            </div>
            <div style={{ padding: 20 }}>
                <Link to="/">
                    Home
                </Link>
            </div>
            <div style={{ padding: 20 }}>
                <Link to="/services">
                    Services
                </Link>
            </div>
            <div style={{ padding: 20 }} >
                <Link to="/blogs">
                    Blogs
                </Link>
            </div>
            <div style={{ padding: 20 }} >
                <Link to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header