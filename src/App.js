import React from 'react';
import './App.css';
import './yarrow.png';

function makePrettyDate() {
	const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
	const fullDate = new Date();
	const date = fullDate.getDate().toString();
	
	let th;
	switch(date[date.length-1]) {
		case "1":
			th = 'st';
			break;
		case "2":
			th = "nd";
			break;
		case "3":
			th = "rd";
			break;
		default: 
			th = "th";		
	}

	let final = "Today, the " + date + th + " of " + monthNames[fullDate.getMonth()];
	return final;	
}

function App() {
    return (
        <div id="wrapper">
            <main>
                <img id="arrow" src={require('./yarrow-transparent.png')} alt="arrow" useMap="#arrowmap"/>
                <h1>{ makePrettyDate() }</h1>
               	<map name="arrowmap">
                   	<area shape="poly" coords="-1,277,276,1,290,1,301,14,299,101,586,103,596,109,599,117,598,459,590,465,580,467,302,468,298,561,286,568,273,566,3,295,-1,288" href="graph.htm" alt="arrow"/>
               	</map>
               	<div class="box" id="add-new-item">
               		<img id="plus" src={require('./plus.png')}/> {/*does this need alt text?!*/}
               		<p>I HAD...</p>
               	</div>
               	<div class="food-container">
               		<img id="puffle" src={require('./puffle.png')} alt="puffle"/>
               		<p>You haven't eaten anything today...</p>
               	</div>
               	<div class="box" id="total">
                    <p>TOTAL: <span>0</span> kcal</p>
                </div>
            </main>
            <script>

            </script>             
        </div>
    );
}

export default App;
