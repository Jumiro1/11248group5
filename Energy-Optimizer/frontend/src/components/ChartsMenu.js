import React from 'react'
import {Row, Col } from "react-bootstrap";
import {Bar} from 'react-chartjs-2'

const ChartsMenu = () => {
    return (
        <div>
            {/* <canvas id="chart"></canvas> */}
            <Col>
            <h4> Filter </h4>
            <Row>
            <h6> Start Date </h6>
            <input onchange="filterdata()" type="date" id="startdate"></input>
            </Row>
            <Row>
            <h6 class="mt-4"> End Date </h6>
            <input onchange="filterdata()" type="date" id="startdate"></input>
            </Row>
            </Col>
        </div>
    )
}

export default ChartsMenu