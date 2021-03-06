import * as React from "react"
// import { Link } from "gatsby"

const sidebar = () => (
    <div className="col-md-3 rightside">
        <div className="container">
            <div className="card card1" style={{ width: '100%', }}>
                <div >
                    <div className="card-inner-heading">
                        <h6 style={{ color: 'white', }}>Special Tools</h6>
                    </div>
                    <div className="card-inner-body">
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/electricity-bill"><h6>Electricity Bill</h6></a>
                        </div>
                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/notepad-tool"><h6>Notepad</h6></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="card card1" style={{ width: '100%', }}>
                <div >
                    <div className="card-inner-heading">
                        <h6 style={{ color: 'white', }}> Watt Tools </h6>
                    </div>
                    <div className="card-inner-body">
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/watt-to-amp"><h6>Watt To Ampere</h6></a>
                        </div>
                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/watt-to-vlt"><h6>Watt To Volt</h6></a>
                        </div>
                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/watt-to-va"><h6>Watt To VA</h6></a>
                        </div>
                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/watt-to-kva"><h6>Watt To kVA</h6></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="card card1" style={{ width: '100%', }}>
                <div >
                    <div className="card-inner-heading">
                        <h6 style={{ color: 'white', }}>Ampere Tools</h6>
                    </div>
                    <div className="card-inner-body">
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/amp-to-kw"><h6>Ampere To kW</h6></a>
                        </div>
                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/amp-to-kva"><h6>Ampere To kVA</h6></a>
                        </div>

                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/amp-to-va"><h6>Ampere To VA</h6></a>
                        </div>

                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/amp-to-vlt"><h6>Ampere To Volt</h6></a>
                        </div>
                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/amp-to-watt"><h6>Ampere To Watt</h6></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="card card1" style={{ width: '100%', }}>
                <div >
                    <div className="card-inner-heading">
                        <h6 style={{ color: 'white', }}>JSON Tools</h6>
                    </div>
                    <div className="card-inner-body">
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/json-validator"><h6>Json Validator</h6></a>
                        </div>
                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/json-pretifier"><h6>Json Pretifier</h6></a>
                        </div>
                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/json-to-xml"><h6>JSON To XML</h6></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="card card1" style={{ width: '100%', }}>
                <div >
                    <div className="card-inner-heading">
                        <h6 style={{ color: 'white', }}>Chart Tools</h6>
                    </div>
                    <div className="card-inner-body">
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/pie-chart"><h6>Pie Chart</h6></a>
                        </div>
                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/line-chart"><h6>Line Chart</h6></a>
                        </div>
                        <hr className="line" />
                        <div className="card-inner-body-1">
                            <i className="fa fa-check side-item" aria-hidden="true"></i>
                            <a href="/scatter-plot"><h6>Scatter PLot Graph</h6></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default sidebar
