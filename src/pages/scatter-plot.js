import React, { useState } from "react"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"

// const data1 = [
//     { x: 100, y: 200 },
//     { x: 120, y: 100 },
//     { x: 170, y: 300 },
//     { x: 140, y: 250 },
//     { x: 150, y: 400 },
//     { x: 110, y: 280 },
// ];
// const data2 = [
//     { x: 500, y: 800 },
//     { x: 620, y: 500 },
//     { x: 870, y: 400 },
//     { x: 940, y: 850 },
//     { x: 350, y: 700 },
//     { x: 610, y: 580 },
// ];


const IndexPage = () => {
    const [loader, setLoad] = useState(true);
    const [mTitle, setTitle] = useState('');
    const [xLabel, setXLabel] = useState('');
    const [yLabel, setYLabel] = useState('');
    const [xUnit, setXUnit] = useState('');
    const [yUnit, setYUnit] = useState('');
    const [s1Color, setS1Color] = useState('');
    const [s2Color, setS2Color] = useState('');
    const [s1Label, setS1Label] = useState('');
    const [s2Label, setS2Label] = useState('');
    const [x1Val, setX1Val] = useState('');
    const [y1Val, setY1Val] = useState('');
    const [x2Val, setX2Val] = useState('');
    const [y2Val, setY2Val] = useState('');
    const [s1Data, setS1Data] = useState([null]);
    const [s2Data, setS2Data] = useState([null]);

    const formatCallback = () => {
        setS1Data([null]);
        setS2Data([null]);
        setLoad(false);
        let tempX1 = String(x1Val).split(" ");
        let tempY1 = String(y1Val).split(" ");
        let tempX2 = String(x2Val).split(" ");
        let tempY2 = String(y2Val).split(" ");
        for (var i = 0; i < tempX1.length && i < tempY1.length && i < tempX2.length && i < tempY2.length; i++) {
            let scoreX1 = tempX1[i];
            let scoreY1 = tempY1[i];
            let scoreX2 = tempX2[i];
            let scoreY2 = tempY2[i];
            let query1 = { "x": Number(scoreX1), "y": Number(scoreY1) }
            let query2 = { "x": Number(scoreX2), "y": Number(scoreY2) }
            //     // setScatterData(scatter_data => scatter_data.push(query));
            setS1Data(s1Data => [...s1Data, query1]);
            setS2Data(s2Data => [...s2Data, query2]);
        };
        console.log(s1Data);
        console.log(s2Data);

    }
    const clearValues = () => {
        setLoad(true)
        setTitle('')
        setXLabel('')
        setYLabel('')
        setXUnit('')
        setYUnit('')
        setS1Color('')
        setS2Color('')
        setS1Label('')
        setS2Label('')
        setX1Val('')
        setY1Val('')
        setX2Val('')
        setY2Val('')
        setS1Data([null]);
        setS2Data([null]);
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />
            <div className="row no-gutters">
                <div className="col-md-9 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1>Scatter Plot Graph</h1>
                            <p className="lead">Conversion Tools By Premium Tools</p>
                        </div>
                        <div className="container">
                            <div className="container my-2 row justify-content-center card-container card shadow card-body" >
                                <form id="converterForm" >
                                    <div className="pretifier-container">
                                        <div className="field-content">
                                            <div className="input-controls">
                                                <label htmlFor="tabin">Enter Title</label>
                                                <input type="text" name="tabin" placeholder="Scatter Plot Title" id="tabin" required value={mTitle} onChange={e => setTitle(e.target.value)}></input>
                                            </div>
                                            <div className="input-controls">
                                                <label htmlFor="tabin">X Axis Label:</label>
                                                <input type="text" name="tabin" placeholder="X Axis Label" id="tabin" required value={xLabel} onChange={e => setXLabel(e.target.value)}></input>
                                            </div>
                                            <div className="input-controls">
                                                <label htmlFor="tabin">Y Axis Label:</label>
                                                <input type="text" name="tabin" placeholder="Y Axis Label" id="tabin" required value={yLabel} onChange={e => setYLabel(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <hr className="line" />
                                        <div className="field-content">
                                            <div className="series-input-controls">
                                                <div className="input-controls">
                                                    <h5 className="title">Series 1:</h5>
                                                    <input type="text" name="tabin" placeholder="Series Label" id="tabin" required value={s1Label} onChange={e => setS1Label(e.target.value)}></input>
                                                    <input type="color" name="tabin" className="input-color" title="Series Color" required id="tabin" value={s1Color} onChange={e => setS1Color(e.target.value)} />
                                                </div>
                                                <div className="input-controls">
                                                    <label htmlFor="tabin">X Axis Data:</label>
                                                    <input type="text" name="tabin" id="tabin" placeholder="eg: 2 3 6 5" required value={x1Val} multiple={true} onChange={e => setX1Val(e.target.value)}></input>
                                                    <input type="text" name="tabin" placeholder="X Axis Units" id="tabin" required value={xUnit} onChange={e => setXUnit(e.target.value)}></input>
                                                </div>
                                                <div className="input-controls">
                                                    <label htmlFor="tabin">Y Axis Data:</label>
                                                    <input type="text" name="tabin" id="tabin" placeholder="eg: 2 3 6 5" required value={y1Val} multiple={true} onChange={e => setY1Val(e.target.value)}></input>
                                                    <input type="text" name="tabin" placeholder="Y Axis Units" id="tabin" required value={yUnit} onChange={e => setYUnit(e.target.value)}></input>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="line" />
                                        <div className="field-content">
                                            <div className="series-input-controls">
                                                <div className="input-controls">
                                                    <h5 className="title">Series 2:</h5>
                                                    <input type="text" name="tabin" placeholder="Series Label" id="tabin" required value={s2Label} onChange={e => setS2Label(e.target.value)}></input>
                                                    <input type="color" name="tabin" className="input-color" title="Series Color" required id="tabin" value={s2Color} onChange={e => setS2Color(e.target.value)} />
                                                </div>
                                                <div className="input-controls">
                                                    <label htmlFor="tabin">X Axis Data:</label>
                                                    <input type="text" name="tabin" id="tabin" placeholder="eg: 2 3 6 5" required value={x2Val} multiple={true} onChange={e => setX2Val(e.target.value)}></input>
                                                    <input type="text" name="tabin" placeholder="X Axis Units" id="tabin" required defaultValue={xUnit} ></input>
                                                </div>
                                                <div className="input-controls">
                                                    <label htmlFor="tabin">Y Axis Data:</label>
                                                    <input type="text" name="tabin" id="tabin" placeholder="eg: 2 3 6 5" required value={y2Val} multiple={true} onChange={e => setY2Val(e.target.value)}></input>
                                                    <input type="text" name="tabin" placeholder="Y Axis Units" id="tabin" required defaultValue={yUnit} ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-container">
                                            <button type="button" title="Show Scatter Chart" className="btn btn-primary mr-2" onClick={() => formatCallback()}>Show Scatter Chart</button>
                                            <button type="button" title="Clear" name="clear" aria-label="Clear" className="btn btn-secondary" onClick={() => clearValues()}>Clear</button>
                                        </div>
                                        <div className="chart-container">
                                            {
                                                !loader ?
                                                    <div className="chart-content">
                                                        <h3 className="chart_title">{mTitle}</h3>
                                                        <ScatterChart
                                                            width={550}
                                                            height={400}
                                                            margin={{
                                                                top: 15, bottom: 8,
                                                            }}
                                                        >
                                                            <CartesianGrid />
                                                            <XAxis type="number" dataKey="x" name={xLabel} unit={xUnit} />
                                                            <YAxis type="number" dataKey="y" name={yLabel} unit={yUnit} />
                                                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                                            <Scatter name={s1Label === " " ? "Series 1" : s1Label} data={s1Data} fill={s1Color === "" ? "#05bffc" : s1Color} />
                                                            <Scatter name={s2Label === " " ? "Series 2" : s2Label} data={s2Data} fill={s2Color === "" ? "#5f27cd" : s2Color} />
                                                            <Legend />
                                                        </ScatterChart>
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
