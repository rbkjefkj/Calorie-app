import React from 'react';
import './App.css';
import './yarrow.png';

function App() {
    return (
        <div id="wrapper">
            <main>
                //<img src={require('./yarrow.png')} alt="arrow" useMap="#arrowmap"/>
                <div id="img"></div>
                <map name="arrowmap">
                    <area shape="poly" coords="-1,277,276,1,290,1,301,14,299,101,586,103,596,109,599,117,598,459,590,465,580,467,302,468,298,561,286,568,273,566,3,295,-1,288" href="graph.htm" alt="arrow"/>
                </map>
            </main>    
            
        </div>
    );
}

export default App;
