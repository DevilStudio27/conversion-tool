import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
// import box from "../components/box"

const IndexPage = () => {
    const [watInput, setWatInput] = useState();
    const [vltInput, setVltInput] = useState();
    const [awtResult, setAWTResult] = useState("0 W");

    const convertCallback = () => {
        let atw = watInput / vltInput;

        setAWTResult(atw === 0 ? "0 A" : atw.toFixed(2) + " A")

    }
    const clearValues = () => {
        setWatInput('')
        setVltInput('')
        setAWTResult("0 A")
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />

            <div className="row no-gutters">
                <div className="col-md-8 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1> Watts To Ampere(A)</h1>
                            <p className="lead">Conversion Tools By Premium Tools</p>
                        </div>
                        <div className="container">
                            <div className="container my-3 row justify-content-center card-container card shadow card-body" >
                                <form id="converterForm" >
                                    <div className="halfdiv">
                                        <label htmlFor="tabin">Watts Value </label>
                                        <textarea name="tabin" id="tabin" rows="1" required value={watInput} onChange={e => setWatInput(e.target.value)}></textarea>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="tabin">Volts Value </label>
                                        <textarea name="tabin" id="tabin" rows="1" required value={vltInput} onChange={e => setVltInput(e.target.value)}></textarea>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="resulttxt">In Ampere(A)</label>
                                        <textarea name="resulttxt" rows="1" id="resulttxt" title="Watts To Ampere Result" value={awtResult}></textarea>
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
