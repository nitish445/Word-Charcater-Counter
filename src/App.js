import React from "react";
import "./App.css";
import WordLetterCounter from "./WordLetterCounter";

function App() { 
	return ( 
		<div className="App"> 
			<h1 id="top"> Counter
			</h1> 
			<h1> 
			Count Number of Words and Character
			</h1> 
			<WordLetterCounter /> 
		</div> 
	); 
} 

export default App; 
