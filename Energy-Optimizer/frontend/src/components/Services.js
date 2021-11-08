import React from "react"
import {Carousel, Container, Row, Col} from 'react-bootstrap';
import "../style/Services.css"

function Services(){
    return (
      <div className="App" Style="margin-top:100px">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
   <Container>
      <Row>
         <Col>
         <h1 class="mb-2" Style="color:darkgreen; font-weight: bold;">About Us</h1>
         </Col>
      </Row>
      <Row Style="margin-top:25px">
      <Row>
         <div class="container about">
           <Row>
            <Col>
               <h2 Style="color:darkgreen"> The Energy Optimizer </h2><br></br>
               <p Style="margin-left:15px;font-size: 20px;color:darkgreen;text-align: justify;text-justify: inter-word;">The Energy Optimizer analyzes state and regional electrical consumption and production metrics,
                  along with weather and other metrics, using IBM’s Database and Machine Learning tools to predict
                  the most efficient ramping procedures for power plants.  Efficient ramping procedures optimize 
                  the production of power, eliminating excess and avoiding brown outs.  In addition, given enough
                  data exists on the efficiencies, costs, resource requirements of various renewable energy sources,
                  the Energy Optimizer can suggest where to locate new energy facilities or replace old ones
               </p>
               <Container>
                  <a class="btn btn-success" href="https://floridahackswithibm.bemyapp.com/" target="_blank"> Learn More
                  </a>
               </Container>
            </Col>
            <Col>
              <div class="container-img" Style="height:400px;widht:400px">
               <img
                  src="https://cse-net.org/wp-content/uploads/2021/03/clean-energy-4.jpg"
                  alt="about us"
                  />
                </div>
            </Col>
            </Row>
         </div>
         </Row>
         <Col Style="margin-top:25px;margin-bottom:25px;">
         <h1 class="mb-2" Style="color:darkgreen;font-weight: bold;">Our Services</h1>
         </Col>
         <Row id="slides">
         <Carousel>
            <Carousel.Item>
               <div class="container-img"  Style=" background:rgba(127, 210, 255, 0.666)"  Style="height:400px;widht:400px" >
               <img
                  src="https://www.csgpro.com/wp-content/uploads/2019/05/csg-data-analytics.png"
                  alt="First slide"
                  />
               </div>
               <div class="caption">
                  <h3>Data Analytics</h3>
                  <p>Add Description</p>
               </div>
            </Carousel.Item>
            <Carousel.Item >
                <div class="container-img" Style="height:400px;widht:400px">
                  <img
                  src="https://pngimage.net/wp-content/uploads/2019/05/logo-lokasi-vektor-png-.png"
                  alt="Third slide"
                  />
                  </div>
               <div class="caption">
                  <h3>Interactive Graphs</h3>
                  <p>Add Description</p>
               </div>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  Style="height:400px;widht:400px"
                  src="https://previews.123rf.com/images/netsign33/netsign331905/netsign33190500656/125505377-empty-vector-map-of-gainesville-florida-usa-printable-road-map-created-in-classic-web-colors-for-inf.jpg"
                  alt="Third slide"
                  />
               <div class="caption">
                  <h3>Maps</h3>
                  <p>Add Description</p>
               </div>
            </Carousel.Item>
         </Carousel>
        
         </Row>
      </Row>
   </Container>
   <div class="container" Style="height: 500px" id="team">
      <h1 Style="color:darkgreen; font-weight: bold;margin-top:25px">Meet the Team</h1>
      <div class="container" Style="margin-top:25px">
         <div class="row">
         <div class="col-lg-3">
               <div class="card p-0">
                  <div class="card-image"> <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFGLRlPy72Jww/profile-displayphoto-shrink_400_400/0/1600702620273?e=1640822400&v=beta&t=mzwKiJ6MhAJFBVHG9NenFs5AVHlYh8To_s6yxQF7vKU" alt=""/> </div>
                  <div class="card-content d-flex flex-column align-items-center">
                     <h4 class="pt-2">Thomas Pena</h4>
                     <ul class="social-icons d-flex justify-content-center">
                        <li>
                           <a href="https://github.com/thomaspr1205" class="fa fa-github"/>
                        </li>
                        <li> <a href="https://www.linkedin.com/in/thomaspenar" class="fa fa-linkedin"/> </li>
                     </ul>
                  </div>
               </div>
            </div>
               <div class="col-lg-3">
                  <div class="card p-0">
                     <div class="card-image"> <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGXYVy4vPPidA/profile-displayphoto-shrink_400_400/0/1611460148228?e=1640822400&v=beta&t=etUW9woVyCUxYZuD2LCypAvL_qZzVgwMsZrKHDewCGw" alt=""/> </div>
                     <div class="card-content d-flex flex-column align-items-center">
                        <h4 class="pt-2">Justin Rossiter</h4>
                        <ul class="social-icons d-flex justify-content-center">
                           <li> <a href="https://github.com/Jumiro1" class="fa fa-github"/> </li>
                           <li> <a href="https://www.linkedin.com/in/justin-r-591775196/" class="fa fa-linkedin"/> </li>
                        </ul>
                     </div>
                  </div>
               </div>
            <div class="col-lg-3">
               <div class="card p-0">
                  <div class="card-image"> <img src="https://media-exp1.licdn.com/dms/image/C5603AQGRzRr37zb-Hw/profile-displayphoto-shrink_400_400/0/1628397254887?e=1640822400&v=beta&t=3lWQdzGWd3-8OHbti6mg0DFECiKXOMHEzEIn35l3xcw" alt=""/> </div>
                  <div class="card-content d-flex flex-column align-items-center">
                     <h4 class="pt-2">Mitchell Thanath</h4>
                     <ul class="social-icons d-flex justify-content-center">
                        <li>
                           <a href="https://github.com/Mstriker64" class="fa fa-github"/>
                        </li>
                        <li> <a href="https://www.linkedin.com/in/mitchell-thanath-0853a51a7/" class="fa fa-linkedin"/> </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-lg-3">
               <div class="card p-0">
                  <div class="card-image"> <img src="https://media-exp1.licdn.com/dms/image/C5603AQHcm4QZfopIKg/profile-displayphoto-shrink_400_400/0/1604324945017?e=1640822400&v=beta&t=vb63rHLJ55kpGG4PFTlP1ixQucDcZa76kWA3JKyPo5Q" alt=""/> </div>
                  <div class="card-content d-flex flex-column align-items-center">
                     <h4 class="pt-2">Quinton Wiebe</h4>
                     <ul class="social-icons d-flex justify-content-center">
                        <li>
                           <a href="https://github.com/qwiebe100" class="fa fa-github"/>
                        </li>
                        <li> <a href="https://www.linkedin.com/in/quinton-wiebe/" class="fa fa-linkedin"/> </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
    );
}

export default Services;