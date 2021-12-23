import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
// import box from "../components/box"

const IndexPage = () => {
    const [watInput, setWatInput] = useState();
    const [pfInput, setPFInput] = useState(0.8);
    const [kvaResult, setKVAResult] = useState(0);

    const convertCallback = () => {
        let kva = watInput / (1000 * pfInput);

        setKVAResult(kva === 0 ? "0 kVA" : kva.toFixed(2) + " kVA")

    }
    const clearValues = () => {
        setWatInput('')
        setPFInput(0.8)
        setKVAResult("0 kVA")
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />

            <div className="row no-gutters">
                <div className="col-md-9 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1> Watt To Kilovolt-Ampere(kVA)</h1>
                            <p className="lead">Conversion Tools By Premium Tools</p>
                        </div>
                        <div className="container">
                            <div className="container my-3 row justify-content-center card-container card shadow card-body" >
                                <form id="converterForm" >
                                    <div className="halfdiv">
                                        <label htmlFor="tabin">Watt Value </label>
                                        <textarea name="tabin" id="tabin" rows="1" required value={watInput} onChange={e => setWatInput(e.target.value)}></textarea>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="tabin">Power Factor Value </label>
                                        <textarea name="tabin" id="tabin" rows="1" required value={pfInput} onChange={e => setPFInput(e.target.value || 0.8)}></textarea>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="resulttxt">In Kilovolt-Ampere(kVA)</label>
                                        <textarea name="resulttxt" rows="1" id="resulttxt" title="Watt to kVA Result" value={kvaResult}></textarea>
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
