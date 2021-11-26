import * as React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"

const box = ({imageurl, title,pageurl,alt}) => (
            <div className="col-3">
                <a href={pageurl}>
                    <div className="card-border">
                        <img className=" main-icon" src={imageurl} alt={alt} />
                            <div className="card-body">
                                <h6 className="cards-img-name">{title}</h6>
                            </div>
                    </div>
                </a>
            </div>
)

export default box
