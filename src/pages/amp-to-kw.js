import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
// import box from "../components/box"

const IndexPage = () => {
    const [ampInput, setAmpInput] = useState();
    const [pfInput, setPFInput] = useState(0.8);
    const [vltInput, setVltInput] = useState();
    const [aResult, setAResult] = useState(0);

    const convertCallback = () => {
        let amp = (ampInput * pfInput * Math.sqrt(3) * vltInput) / 1000;

        setAResult(amp.toFixed(2))
    }
    const clearValues = () => {
        setAmpInput('')
        setPFInput(0.8)
        setVltInput('')
        setAResult(0)
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />

            <div className="row no-gutters">
                <div className="col-md-8 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1> Ampere To Kilo-Watt(kW)</h1>
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
                                        <label htmlFor="tabin">Power Factor Value </label>
                                        <textarea name="tabin" id="tabin" rows="1" required value={pfInput} onChange={e => setPFInput(0.8)}></textarea>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="tabin">Volts Value </label>
                                        <textarea name="tabin" id="tabin" rows="1" required value={vltInput} onChange={e => setVltInput(e.target.value)}></textarea>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="resulttxt">In Kilo-Watt(kW)</label>
                                        <textarea name="resulttxt" cols="38" rows="1" id="resulttxt" title="Ampere to kW Result" value={aResult === 0 ? "0 kW" : aResult + " kW"}></textarea>
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
