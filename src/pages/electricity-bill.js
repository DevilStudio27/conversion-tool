import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
// import box from "../components/box"

const IndexPage = () => {
    const [curInput, setCurInput] = useState();
    const [prevInput, setprevInput] = useState();
    const [totUnit, setTotUnit] = useState(0);
    const [fixedCharge, setFixedCharge] = useState(0);
    const [energyCharge, setEnergyCharge] = useState(0);
    const [wheelCharge, setWheelCharge] = useState(0);
    const [facTax, setFacTax] = useState(0);
    const [edTax, setEDTax] = useState(0);
    const [totResult, setResult] = useState(0);

    const convertCallback = () => {
        let units = Number(curInput) - Number(prevInput);
        let fxchg = 100;
        let wc = Number(units) * 1.45;
        let fac = Number(units) * 1.61;
        let etax = Number(units) + ((Number(units) * 16) / 100);
        let eCharge;
        let totalEsBill;
        let baseRate = 3.46;
        let midRate = 7.43;
        let lgRate = 10.32;
        let maxRate = 11.71;

        setTotUnit(Number(units));
        setFixedCharge(Number(fxchg));
        setWheelCharge(Number(wc));
        setFacTax(Number(fac).toFixed(0));
        setEDTax(Number(etax));

        if (units <= 100) {
            eCharge = units * baseRate;
            setEnergyCharge(Number(eCharge));
            totalEsBill = Number(eCharge + fxchg + wc + fac + etax);
            setResult(Number(totalEsBill))
        }
        else if (units >= 100 && units <= 300) {
            eCharge = (100 * baseRate) + (units - 200) * midRate;
            setEnergyCharge(Number(eCharge));
            totalEsBill = Number(eCharge + fxchg + wc + fac + etax);
            setResult(Number(totalEsBill))
        }
        else if (units >= 300 && units <= 500) {
            eCharge = (100 * baseRate) + (100 * midRate) + (units - 300) * lgRate;
            setEnergyCharge(Number(eCharge));
            totalEsBill = Number(eCharge + fxchg + wc + fac + etax);
            setResult(Number(totalEsBill))
        }
        else if (units > 500) {
            eCharge = (100 * baseRate) + (100 * midRate) + (100 * lgRate) + (units - 400) * maxRate;
            setEnergyCharge(Number(eCharge));
            totalEsBill = Number(eCharge + fxchg + wc + fac + etax);
            setResult(Number(totalEsBill))
        }

    }
    const clearValues = () => {
        setCurInput('');
        setprevInput('');
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />

            <div className="row no-gutters">
                <div className="col-md-9 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1> Electricity Bill</h1>
                            <p className="lead">Conversion Tools By Premium Tools</p>
                        </div>
                        <div className="container">
                            <div className="container my-3 row justify-content-center card-container card shadow card-body" >
                                <form id="converterForm" >
                                    <div className="halfdiv">
                                        <label htmlFor="tabin">Current Unit </label>
                                        <textarea name="tabin" id="tabin" rows="1" required value={curInput} onChange={e => setCurInput(e.target.value)}></textarea>
                                    </div>
                                    <div className="halfdiv">
                                        <label htmlFor="tabin">Previous Unit </label>
                                        <textarea name="tabin" id="tabin" rows="1" required value={prevInput} onChange={e => setprevInput(e.target.value)}></textarea>
                                    </div>
                                    <div className="halfdiv">
                                        <button type="button" className="btn btn-primary mr-2" onClick={() => convertCallback()}>Convert</button>
                                        <button type="button" className="btn btn-secondary " onClick={() => clearValues()}>Clear</button>
                                        <hr className="line" />
                                        <span className="">Your total unit consumption: {totUnit}</span><br />
                                        <span className="">Fixed Charge (FC): {"Rs. " + fixedCharge + " (INR)"}</span><br />
                                        <span className="">Energy Charge: {"Rs. " + energyCharge + " (INR)"}</span><br />
                                        <span className="">Wheel Charge: {"Rs. " + wheelCharge + " (INR)"}</span><br />
                                        <span className="">Fuel Adjustment Charge (FAC): {"Rs. " + facTax + " (INR)"}</span><br />
                                        <span className="">Electricity Duty @ 16%: {"Rs. " + edTax + " (INR)"}</span><br />
                                        <span className="">Total Estimated Bill: {"Rs. " + totResult + " (INR)"}</span>
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
