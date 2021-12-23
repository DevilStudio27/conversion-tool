import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
// import box from "../components/box"

const IndexPage = () => {
    const [ascInput, setAscInput] = useState();
    const [txtResult, setTxtResult] = useState();

    const convertCallback = () => {
        console.log(ascInput)
        let hex = ascInput.toString();
        let str = '';
        for (let n = 0; n < hex.length; n += 2) {
            str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        }
        setTxtResult(str)
    }
    const clearValues = () => {
        setAscInput('')
        setTxtResult('')
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />

            <div className="row no-gutters">
                <div className="col-md-9 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1>Ascii To Text</h1>
                            <p className="lead">Conversion Tools By Premium Tools</p>
                        </div>
                        <div className="container">
                            <div className="container my-3 row justify-content-center card-container card shadow card-body" >
                                <form id="converterForm" >
                                    <div className="halfdiv">
                                        <label htmlFor="tabin">Ascii Value</label>
                                        <textarea name="tabin" id="tabin" rows="2" required value={ascInput} onChange={e => setAscInput(e.target.value)}></textarea>
                                        <button type="button" className="btn btn-primary mr-2" onClick={() => convertCallback()}>Convert</button>
                                        <button type="button" className="btn btn-secondary " onClick={() => clearValues()}>Clear</button>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="resulttxt">Text Value</label>
                                        <textarea name="resulttxt" cols="38" rows="2" id="resulttxt" title="Text value converted from Ascii" value={txtResult}></textarea>
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
