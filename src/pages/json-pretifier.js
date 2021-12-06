import React, { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"


const IndexPage = () => {
    const myRef = useRef();
    const [jsonInput, setJsonInput] = useState('');
    const [isCopied, setIsCopied] = useState('');
    const [jTemplate, setTemplate] = useState('');
    const [jsonResult, setJsonResult] = useState(null);

    function isValidFn(str) {
        try {
            JSON.parse(str);
        }
        catch (err) {
            return false;
        }
        return true;
    }

    const formatCallback = () => {
        if (isValidFn(jsonInput)) {
            let data = JSON.stringify(JSON.parse(jsonInput), null, Number(jTemplate));
            setJsonResult(data);
        }
        else {
            setJsonResult("Check Json string");
        }
    }
    const clearValues = () => {
        setJsonInput('')
        setJsonResult(null)
    }
    const uploadJson = (uploadedFile) => {
        const fReader = new FileReader();

        fReader.onloadend = () => {
            try {
                setJsonInput(fReader.result);
            }
            catch (e) {
                setJsonResult("Check Json File");
            }
        }
        if (uploadedFile !== undefined) {
            fReader.readAsText(uploadedFile);
        }
    }

    const handleCopy = () => {
        let copyText = document.getElementById("resultTxt");
        navigator.clipboard.writeText(copyText.innerHTML);
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
                            <h1> Json Pretifier</h1>
                            <p className="lead">Conversion Tools By Premium Tools</p>
                        </div>
                        <div className="container">
                            <div className="container my-2 row justify-content-center card-container card shadow card-body" >
                                <form id="converterForm" >
                                    <div className="pretifier-container">
                                        <div className="field-content">
                                            <div className="field-view">
                                                <h5 className="res-title">JSON Data / String</h5>
                                                <div className="controls">
                                                    <input type="file" className="hidden"
                                                        multiple={false}
                                                        accept=".json,application/json"
                                                        onChange={(et) => uploadJson(et.target.files[0])}
                                                        ref={myRef}
                                                    />
                                                    <textarea name="field" id="field" data-gramm_editor="false" spellCheck="false" placeholder="{}" rows="5" required value={jsonInput} onChange={(e) => setJsonInput(e.target.value)}></textarea>
                                                    <div className="control-btns">
                                                        <button type="button" title="Load Json" name="browse" aria-label="Load Json" className="btn" onClick={(evt) => {
                                                            evt.preventDefault();
                                                            myRef.current.click();
                                                        }}><FontAwesomeIcon className="icon" icon={["fas", "folder-open"]} /></button>
                                                        <button type="button" title="Clear" name="clear" aria-label="Clear" className="btn" onClick={() => clearValues()}><FontAwesomeIcon className="icon" icon={["fas", "trash-alt"]} /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="temp-content">
                                                <label htmlFor="temp"><h5 className="res-title">Json Template</h5></label>
                                                <select className="temp-select" required name="temp" id="temp" value={jTemplate} onChange={(e) => setTemplate(e.target.value)}>
                                                    <option value="4">4 Space Tab</option>
                                                    <option value="3">3 Space Tab</option>
                                                    <option value="2">2 Space Tab</option>
                                                    <option value="1">1 Space Tab</option>
                                                    <option value="0">Compact</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="btn-container">
                                            <button type="button" className="btn btn-primary mr-2" onClick={() => formatCallback()}>Format</button>
                                            <button type="button" className="btn btn-primary mr-2" name="copy" aria-label="Copy Json to Clipboard" onClick={() => handleCopy()}><FontAwesomeIcon icon={["fas", "copy"]} /> {isCopied === "copied" ? " Copied" : " Copy"}</button>
                                        </div>
                                        {
                                            jsonResult === null || jsonResult === "" || jsonResult === undefined ? " " :
                                                <div className="result-container">
                                                    <h5 className="res-title">Json Pretified Data</h5>
                                                    <pre className="result-view" id="resultTxt">
                                                        {jsonResult}
                                                    </pre>
                                                </div>
                                        }
                                    </div>
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
