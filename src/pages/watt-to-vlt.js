import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"

const IndexPage = () => {
    const [ampInput, setAmpInput] = useState();
    const [watInput, setWatInput] = useState();
    const [vltResult, setVltResult] = useState(0);

    const convertCallback = () => {
        let atv = watInput / ampInput;

        setVltResult(atv === 0 ? "0 V" : atv.toFixed(2) + " V")

    }
    const clearValues = () => {
        setAmpInput('')
        setWatInput('')
        setVltResult("0 V")
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />

            <div className="row no-gutters">
                <div className="col-md-9 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1> Watt To Volts(V)</h1>
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
                                        <label htmlFor="tabin">Watts Value </label>
                                        <textarea name="tabin" id="tabin" rows="1" required value={watInput} onChange={e => setWatInput(e.target.value)}></textarea>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="resulttxt">In Volts(V)</label>
                                        <textarea name="resulttxt" rows="1" id="resulttxt" title="Watt to Volt Result" value={vltResult}></textarea>
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
