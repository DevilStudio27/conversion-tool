import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Box from "../components/box"
import { homeList } from "../data/home_page_data"

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Premium Tools" />
            <div className="row no-gutters">
                <div className="col-md-8 leftside">
                    <div className="left-heading">
                        <h2><span className="text">Premium Conversion </span> Tools</h2>
                        <p>A complete set of Conversion tools is now at your fingertips. Convert One type of string to another. </p>
                        <div className="container">
                            <div className="row">
                                {
                                    homeList.map((e, id) =>
                                        <Box key={id} imageurl={e.imageurl} title={e.title} pageurl={e.pageurl} alt={e.title} />
                                    )
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </Layout>)
}

export default IndexPage
