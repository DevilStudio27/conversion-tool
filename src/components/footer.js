import * as React from "react"
// import { Link } from "gatsby"

const footer = () => (
    <footer className="custom-background" >
        <div className="container">
            <p className="m-0 text-center text-light" >
                Copyright © Premium Tools, {new Date().getFullYear()} <br />
                <a className="custom" href="/privacy-policy"> Privacy Policy </a> |
                <a className="custom" href="/terms"> Terms and Conditions </a>
            </p>
        </div>
    </footer>
)


export default footer
