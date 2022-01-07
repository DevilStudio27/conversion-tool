import React, { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"

const IndexPage = () => {
    const [loader, setLoad] = useState(true);
    const [mTitle, setTitle] = useState('');
    const [mLabel, setLabel] = useState('');
    const [l1Color, setL1Color] = useState('');
    const [l2Color, setL2Color] = useState('');
    const [l1Value, setL1Value] = useState('');
    const [l2alue, setL2Value] = useState('');
    const [point, setPoint] = useState('');
    const [line_data, setLineData] = useState([null]);

    const formatCallback = () => {
        setLineData([null]);
        setLoad(false);
        let temp = String(mLabel).split(" ");
        let temp1 = String(l1Value).split(" ");
        let temp2 = String(l2alue).split(" ");
        for (var i = 0; i < temp.length && i < temp1.length && i < temp2.length; i++) {
            let name = temp[i];
            let score1 = temp1[i];
            let score2 = temp2[i];
            let query = { "name": String(name), "l1": Number(score1), "l2": Number(score2) };
            setLineData(line_data => [...line_data, query]);
        };

    }
    const clearValues = () => {
        setLoad(true)
        setTitle('')
        setLabel('')
        setL1Color('')
        setL1Value('')
        setL2Color('')
        setL2Value('')
        setPoint('')
        setLineData([null]);
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />

            <div className="row no-gutters">
                <div className="col-md-9 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1>Line Chart Maker</h1>
                            <p className="lead">Conversion Tools By Premium Tools</p>
                        </div>
                        <div className="container">
                            <div className="container my-2 row justify-content-center card-container card shadow card-body" >
                                <form id="converterForm" >
                                    <div className="pretifier-container">
                                        <div className="field-content">
                                            <div className="input-controls">
                                                <label htmlFor="tabin">Enter Title</label>
                                                <input type="text" name="tabin" placeholder="Graph Title" id="tabin" required value={mTitle} onChange={e => setTitle(e.target.value)}></input>
                                            </div>
                                            <div className="input-controls">
                                                <label htmlFor="tabin">Enter Data Labels</label>
                                                <input type="text" name="tabin" id="tabin" placeholder="eg: name1 name2 name3 ..." required value={mLabel} multiple={true} onChange={e => setLabel(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <div className="field-content">
                                            <div className="input-controls">
                                                <label htmlFor="tabin">Enter Line 1 Data Values</label>
                                                <input type="text" name="tabin" id="tabin" placeholder="eg: 2 3 6 5" required value={l1Value} multiple={true} onChange={e => setL1Value(e.target.value)}></input>
                                                <input type="color" name="tabin" className="input-color" id="tabin" value={l1Color} onChange={e => setL1Color(e.target.value)} />
                                            </div>
                                            <div className="input-controls">
                                                <label htmlFor="tabin">Enter Line 2 Data Values</label>
                                                <input type="text" name="tabin" id="tabin" placeholder="eg: 2 3 6 5" required value={l2alue} multiple={true} onChange={e => setL2Value(e.target.value)}></input>
                                                <input type="color" name="tabin" className="input-color" id="tabin" value={l2Color} onChange={e => setL2Color(e.target.value)} />
                                            </div>
                                            <div className="input-controls">
                                                <label htmlFor="tabin">Enter Point Size</label>
                                                <input type="number" name="tabin" id="tabin" placeholder="5-10" required value={point} multiple={true} onChange={e => setPoint(Number(e.target.value))}></input>
                                            </div>
                                        </div>
                                        <div className="btn-container">
                                            <button type="button" title="Show Line Chart" className="btn btn-primary mr-2" onClick={() => formatCallback()}>Show Line Chart</button>
                                            <button type="button" title="Clear" name="clear" aria-label="Clear" className="btn btn-secondary" onClick={() => clearValues()}>Clear</button>
                                        </div>
                                        <div className="chart-container">
                                            {
                                                !loader ?
                                                    <div className="chart-content">
                                                        <h3 className="chart_title">{mTitle}</h3>
                                                        <LineChart
                                                            width={500}
                                                            height={300}
                                                            data={line_data}
                                                            margin={{
                                                                top: 5, bottom: 5,
                                                            }}
                                                        >
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="name" />
                                                            <YAxis />
                                                            <Tooltip />
                                                            <Legend />
                                                            <Line type="monotone" dataKey="l2" stroke={l2Color === " " ? "#8884d8" : l2Color} strokeWidth={point === '' ? 5 : point} />
                                                            <Line type="monotone" dataKey="l1" stroke={l1Color === " " ? "#82ca9d" : l1Color} strokeWidth={point === '' ? 5 : point} />
                                                        </LineChart>
                                                    </div> : " "

                                            }
                                        </div>
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
