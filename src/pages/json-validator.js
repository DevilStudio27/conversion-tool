import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"


const IndexPage = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [isvalid, setIsValid] = useState('');
    const [isCopied, setIsCopied] = useState('');
    const [jsonResult, setJsonResult] = useState([]);

    function isValidFn(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }

    const convertCallback = () => {
        if (isValidFn(jsonInput)) {
            setIsValid("valid");
            let data = JSON.stringify(JSON.parse(jsonInput), null, 4);
            setJsonResult(data);
        }
        else {
            setIsValid("invalid");
            setJsonResult("Check Json string");
        }
    }
    const clearValues = () => {
        setJsonInput('')
        setJsonResult('')
    }

    const handleCopy = () => {
        let copyText = document.getElementById("resultTxt");
        navigator.clipboard.writeText(copyText.value);
        setIsCopied('copied');
        setInterval(() => {
            setIsCopied('copy')
        }, 10000);
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />

            <div className="row no-gutters">
                <div className="col-md-8 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1> Json Validator</h1>
                            <p className="lead">Conversion Tools By Premium Tools</p>
                        </div>
                        <div className="container">
                            <div className="container my-3 row justify-content-center card-container card shadow card-body" >
                                <form id="converterForm" >
                                    <div className="sub-container">
                                        <label htmlFor="tabin">Json Data / String</label>
                                        <textarea name="tabin" id="tabin" rows="4" required spellCheck="false" value={jsonInput} placeholder="{}" onChange={(e) => setJsonInput(e.target.value)}></textarea>
                                        <button type="button" className="btn btn-primary mr-2" onClick={() => convertCallback()}>Convert</button>
                                        <button type="button" className="btn btn-secondary " onClick={() => clearValues()}>Clear</button>
                                    </div>
                                    <div className="msg-container">
                                        {
                                            isvalid === '' ?
                                                <p className="msg none">Please provide json input</p>
                                                : isvalid === "valid" ?
                                                    <p className="msg valid">Valid</p>
                                                    :
                                                    <p className="msg invalid">Invalid</p>
                                        }
                                    </div>
                                    <div className="res-container">
                                        <label htmlFor="resulttxt">Json Formatted Data</label>
                                        <textarea name="resulttxt" id="resultTxt" rows="8" spellCheck="false" title="Json Data Result" value={jsonResult} placeholder="Json data"></textarea>
                                        <button type="button" className="btn btn-primary mr-2" onClick={() => handleCopy()}>{isCopied === "copied" ? "Copied" : "Copy"}</button>
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
