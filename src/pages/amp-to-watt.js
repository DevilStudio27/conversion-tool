import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
// import box from "../components/box"

const IndexPage = () => {
    const [ampInput, setAmpInput] = useState();
    const [vltInput, setVltInput] = useState();
    const [awtResult, setAWTResult] = useState("0 W");

    const convertCallback = () => {
        let atw = ampInput * vltInput;

        setAWTResult(atw === 0 ? "0 W" : atw + " W")

    }
    const clearValues = () => {
        setAmpInput('')
        setVltInput('')
        setAWTResult("0 W")
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />

            <div className="row no-gutters">
                <div className="col-md-9 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1> Ampere To Watts(W)</h1>
                            <p className="lead">Conversion Tools By Premium Tools</p>
                        </div>
                        <div className="container">
                            <div className="container my-3 row justify-content-center card-container card shadow card-body" >
                                <form id="converterForm" >
                                    <div className="halfdiv">
                                        <label htmlFor="tabin">Ampere Value </label>
                                        <textarea name="tabin" id="tabin" rows="1" required value={ampInput} onChange={e => setAmpInput(e.target.value)}></textarea>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="tabin">Volts Value </label>
                                        <textarea name="tabin" id="tabin" rows="1" required value={vltInput} onChange={e => setVltInput(e.target.value)}></textarea>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="resulttxt">In Watts(W)</label>
                                        <textarea name="resulttxt" rows="1" id="resulttxt" title="Ampere to Watts Result" value={awtResult}></textarea>
                                        <button type="button" className="btn btn-primary mr-2" onClick={() => convertCallback()}>Convert</button>
                                        <button type="button" className="btn btn-secondary " onClick={() => clearValues()}>Clear</button>
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
