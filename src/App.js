import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <img src="./yellow-arrow.png" alt="arrow" usemap="#arrowmap">
            <map name="arrowmap">
                <area shape="poly" coords="-1,277,276,1,290,1,301,14,299,101,586,103,596,109,599,117,598,459,590,465,580,467,302,468,298,561,286,568,273,566,3,295,-1,288" href="graph.htm" alt="arrow">
            </map>
            <div id="main" style={{margin: "0 auto", width: "500px", height: "700px", backgroundColor: "red"}}></div>    
            
        </div>
    );
}

export default App;
