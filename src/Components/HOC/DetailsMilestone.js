import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CourseDetail extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Milestone details</h2>
                            <div>
                                <hr />
                                <dl className="dl-horizontal">
                                    <dt>
                                        Name
            </dt>
                                    <dd>
                                        Database
            </dd>
                                    <dt>
                                        CreditHrs
            </dt>
                                    <dd>
                                        3
            </dd>
                                    <dt>
                                        Code
            </dt>
                                    <dd>
                                        CSC21
            </dd>
                                </dl>
                            </div>
                            <p>
                                <Link to="/HOC/EditMilestone">Edit</Link> |
                                <Link to="/HOC/ViewMilestone">Back to List</Link>
                            </p>
                            <div id="spinner" className="spinner" style={{ display: 'none' }}>
                                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', margin: '0 auto', backgroundColor: '#000', opacity: '.4', zIndex: 999999 }}>
                                    <img id="img-spinner" src={`${process.env.PUBLIC_URL}/Assets/spinner.gif`} alt="Loading" style={{ position: 'absolute', height: 'auto!important', width: 'auto!important', left: '47%', top: '47%' }} /><br />
                                    <p style={{ position: 'absolute', height: 'auto !important', width: 'auto !important', left: '51%', top: '51%', fontSize: 20, color: 'white' }}>Please Wait</p>
                                </div>
                            </div>
                        </div>
                        {/* /.col-lg-12 */}
                    </div>
                    {/* /.row */}
                </div>
                <hr />
            </div>

        )
    }
}
