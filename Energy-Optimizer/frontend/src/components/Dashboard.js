import React from "react";
import {Container, Row, Col,Nav, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "./Sidebar.js";
import Map from "./Map.js"
import '../style/Dashboard.css'

const Dash = props => {
    return (
        <>
        <div class="dashboard">
        <div class="col-1">
            <Sidebar/>  
        </div>
         <Container fluid class="ms-5" Style="height:2300px">
                <Row>
                <Col id="page-content-wrapper">
                    <Row>
                        <div class="col-2"></div>
                        <Col>
                        <h2 Style="color:darkgreen;text-align:center">General</h2>
                        <div id="general" class="row dashCard">
                            content
                        </div>
                        <h2 Style="color:darkgreen;text-align:center">Graphs</h2>
                        <div id="graphs" class="row dashCard">
                            content
                        </div>
                        <div id="map" class="row ">
                            <div class="map-container">
                                <h2 Style="color:darkgreen;text-align:center">Map</h2>
                                <Map/>
                            </div>
                        </div>
                        <h2 Style="color:darkgreen;text-align:center;margin-top:65px">Data Analytics</h2>
                        <div id="dataAnalytics" class="row dashCard">    
                            content                    
                        </div>
                        </Col>
                    </Row>
                </Col>
                <div class="col-2 mt-5">
                <div class="row dashMenus ms-1">
                    menu 1
                </div>
                <div class="row dashMenus ms-1">
                    menu 2
                </div>
                <div class="row dashMenus ms-1">
                    menu 3
                </div>
                <div class="row dashMenus ms-1">
                    menu 4
                </div>
                </div>
                </Row>
            </Container>
            </div>
        </>
        );
  };
  const Dashboard = withRouter(Dash);
  export default Dashboard
  