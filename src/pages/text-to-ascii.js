import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
// import box from "../components/box"

const IndexPage = () => {
    const [txtInput, setTxtInput] = useState();
    const [ascResult, setAscResult] = useState();

    const convertCallback = () => {
        console.log(txtInput)
        let res = [];
        for (let n = 0, l = txtInput.length; n < l; n++) {
            var hex = Number(txtInput.charCodeAt(n)).toString(16);
            res.push(hex);
        }
        // res.join(' ');
        setAscResult(res.join(' '))
    }
    const clearValues = () => {
        setTxtInput('')
        setAscResult('')
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />

            <div className="row no-gutters">
                <div className="col-md-8 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1>Text To Ascii</h1>
                            <p className="lead">Conversion Tools By Premium Tools</p>
                        </div>
                        <div className="container">
                            <div className="container my-3 row justify-content-center card-container card shadow card-body" >
                                <form id="converterForm" >
                                    <div className="halfdiv">
                                        <label htmlFor="tabin">Text Input</label>
                                        <textarea name="tabin" id="tabin" rows="2" required value={txtInput} onChange={e => setTxtInput(e.target.value)}></textarea>
                                        <button type="button" className="btn btn-primary mr-2" onClick={() => convertCallback()}>Convert</button>
                                        <button type="button" className="btn btn-secondary " onClick={() => clearValues()}>Clear</button>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="resulttxt">ASCII Value</label>
                                        <textarea name="resulttxt" cols="38" rows="2" id="resulttxt" title="ASCII value converted from text" value={ascResult}></textarea>
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
