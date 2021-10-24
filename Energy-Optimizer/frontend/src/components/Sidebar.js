 
import { withRouter } from "react-router";
import {Nav} from "react-bootstrap";
import '../style/Dashboard.css'

const Side = props => {
    return (
        <>
           <div Style="position:fixed;background-color: rgba(255, 255, 255, 0.576);margin-top:150px">
                            <Nav.Item>
                                <button type="button" class="btn">
                                <Nav.Link href="#general" Style="font-weight: bold;color:darkgreen">General</Nav.Link>
                                </button>
                            </Nav.Item>
                            <Nav.Item>
                                <button type="button" class="btn">
                                <Nav.Link href="#graphs" Style="font-weight: bold;color:darkgreen">Graphs</Nav.Link>
                                </button>
                            </Nav.Item>
                            <Nav.Item>
                                <button type="button" class="btn" >
                                <Nav.Link href="#map" Style="font-weight: bold;color:darkgreen">Map</Nav.Link>
                                </button>
                            </Nav.Item>
                            <Nav.Item>
                                <button type="button" class="btn">
                                <Nav.Link href="#dataAnalytics" Style="font-weight: bold;text-align: justify;text-justify: inter-word;color:darkgreen">Data<br></br>Analytics</Nav.Link> 
                                </button>
                            </Nav.Item>
                            </div>
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar