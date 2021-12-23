import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import converter from "../utility/converter"
// import box from "../components/box"

const IndexPage = () => {
    const [hexValue, sethexValue] = useState()
    const [binaryValue, setbinaryValue] = useState()

    const convertCallback = () => {
        console.log(hexValue)
        if (!hexValue) return;
        let value = converter.hex2bin(hexValue);
        console.log(value)
        setbinaryValue(value);
    }
    const clearValues = () => {
        sethexValue('')
        setbinaryValue('')
    }

    return (<Layout>
        <SEO title="Premium Tools" />

        <div className="row no-gutters">
            <div className="col-md-9 leftside">
                <div className="left-heading">
                    <div className="container text-center">
                        <h1> Hex to Binary</h1>
                        <p className="lead">Conversion Tools By Premium Tools</p>
                    </div>
                    <div className="container">
                        <div className="container my-3 row justify-content-center card-container card shadow card-body" >
                            <form id="converterForm" >
                                <div className="halfdiv">
                                    <label htmlFor="tabin">Hex Value (max. 7fffffffffffffff)</label>
                                    <textarea name="tabin" id="tabin" rows="2" required value={hexValue} onChange={e => sethexValue(e.target.value)}></textarea>
                                    <button type="button" className="btn btn-primary mr-2" onClick={() => convertCallback()}>Convert</button>
                                    <button type="button" className="btn btn-secondary " onClick={() => clearValues()}>Clear</button>
                                </div>
                                <div className="halfdiv">
                                    <label htmlFor="resulttxt">Binary Value</label>
                                    <textarea name="resulttxt" cols="38" rows="2" id="resulttxt" title="Binary value converted from hex" value={binaryValue}></textarea>
                                    <span>swap conversion:</span>
                                </div>

                                <div className="clear"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar />

        </div>


    </Layout>
    )


}
export default IndexPage
