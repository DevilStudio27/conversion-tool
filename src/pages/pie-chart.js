import React, { useState } from "react"
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x + 2.5} y={y + 1.5} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const IndexPage = () => {
    const [loader, setLoad] = useState(true);
    const [mTitle, setTitle] = useState('');
    const [mLabel, setLabel] = useState('');
    const [mValue, setValue] = useState('');
    const [pie_data, setPieData] = useState([null]);

    const formatCallback = () => {
        setPieData([null]);
        setLoad(false);
        let temp = String(mLabel).split(" ");
        let temp1 = String(mValue).split(" ");
        for (var i = 0; i < temp.length && i < temp1.length; i++) {
            let name = temp[i];
            let score = temp1[i];
            let query = { "name": String(name), "value": Number(score) }
            setPieData(pie_data => [...pie_data, query]);
        };

    }
    const clearValues = () => {
        setLoad(true)
        setTitle('')
        setLabel('')
        setValue('')
        setPieData([null]);
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />

            <div className="row no-gutters">
                <div className="col-md-9 leftside">
                    <div className="left-heading">
                        <div className="container text-center">
                            <h1>Pie Chart Maker</h1>
                            <p className="lead">Conversion Tools By Premium Tools</p>
                        </div>
                        <div className="container">
                            <div className="container my-2 row justify-content-center card-container card shadow card-body" >
                                <form id="converterForm" >
                                    <div className="pretifier-container">
                                        <div className="field-content">
                                            <div className="input-controls">
                                                <label htmlFor="tabin">Enter Title</label>
                                                <input type="text" name="tabin" id="tabin" required value={mTitle} onChange={e => setTitle(e.target.value)}></input>
                                            </div>
                                            <div className="input-controls">
                                                <label htmlFor="tabin">Enter Data Labels</label>
                                                <input type="text" name="tabin" id="tabin" required value={mLabel} multiple={true} onChange={e => setLabel(e.target.value)}></input>
                                            </div>
                                            <div className="input-controls">
                                                <label htmlFor="tabin">Enter Data Values</label>
                                                <input type="text" name="tabin" id="tabin" required value={mValue} multiple={true} onChange={e => setValue(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <div className="btn-container">
                                            <button type="button" title="Show Pie Chart" className="btn btn-primary mr-2" onClick={() => formatCallback()}>Show Pie Chart</button>
                                            <button type="button" title="Clear" name="clear" aria-label="Clear" className="btn btn-secondary" onClick={() => clearValues()}>Clear</button>
                                        </div>

                                        <div className="chart-container">
                                            {
                                                !loader ?
                                                    <div className="chart-content">
                                                        <h3 className="chart_title">{mTitle}</h3>
                                                        <PieChart width={400} height={400} key={`p_c${pie_data.length}`}>
                                                            <Pie
                                                                data={pie_data}
                                                                key={`p_${pie_data.length}`}
                                                                cx="50%"
                                                                cy="50%"
                                                                labelLine={false}
                                                                label={renderCustomizedLabel}
                                                                outerRadius={100}
                                                                fill="#8884d8"
                                                                dataKey="value"
                                                            >
                                                                {pie_data.map((entry, index) => (
                                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                                ))}
                                                            </Pie>
                                                            <Tooltip wrapperStyle={{ fontSize: '14px', padding: 0 }} />
                                                            <Legend />
                                                        </PieChart>
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
