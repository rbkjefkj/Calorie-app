import React from 'react';
import './App.css';
import './yarrow.png';

function App() {
    return (
        <div id="wrapper">
            <main>
                <img id="arrow" src={require('./yarrow.png')} alt="arrow" useMap="#arrowmap"/>
                <h1>TODAY</h1>
               	<map name="arrowmap">
                   	<area shape="poly" coords="-1,277,276,1,290,1,301,14,299,101,586,103,596,109,599,117,598,459,590,465,580,467,302,468,298,561,286,568,273,566,3,295,-1,288" href="graph.htm" alt="arrow"/>
               	</map>
               	<div class="box" id="add-new-item"></div>
               	<div class="food-container">
               		<img id="puffle" src={require('./puffle.png')} alt="puffle"/>
               		<p>You haven't eaten anything today...</p>
               	</div>
               	<div class="box" id="total"></div>
            </main>             
        </div>
    );
}

export default App;
