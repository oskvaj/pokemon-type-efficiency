import React, { useState, useEffect } from 'react';
import DataTable from '../DataTable';
import data from '../../data';
import pokemon_logo from '../../assets/image/pokemon-logo.png'

import './style.css';

function App() {
  	const [ gen, setGen ] = useState("0")
	const [ jsonData, setJsonData ] = useState([])
	const [ currentHover, setCurrentHover ] = useState("")
	
	const getEfficiencyBackground = (data) => {
		switch (data) {
		  case "0":
			return "black"
		  case "1/2":
			return "red"
		  case "2x":
			return "springgreen"
		}
	}

	const getEfficiencyText = (data) => {
		switch (data) {
			case "0":
				return "It does not effect"
			case "1/2":
				return "It's not very effective"
			case "2x":
				return "It's super effective"
			case null:
				return "It has regular efficiency"
		}
	}
		
	useEffect(() => {
		setJsonData(JSON.parse(data))
	}, [])

	return (
		<div className="App">
			
			<header>
				<h1>Pokemon type efficiency chart</h1>
			</header>

			<div className="under-rubrik">
				<p>Horizontally is the types in offence</p>
				<p>Vertically is the types in defence</p>
			</div>

			<a className="link" href="https://www.smogon.com/dex/sm/formats/ou/" target="_blank"><img className="logo" src={pokemon_logo}></img></a>

			<select onChange={
				(e) => setGen(e.target.value)
			}>
				<option value="0">Generation 1</option>
				<option value="1">Generation 2</option>
				<option value="2">Generation 3</option>
				<option value="3">Generation 4</option>
				<option value="4">Generation 5</option>
				<option value="5">Generation 6</option>
				<option value="6">Generation 7</option>
			</select>
		 
			<div className="current-efficiency">
				<div className="circle" style={{
					backgroundColor: getEfficiencyBackground(currentHover),
				}}/>
				<h1>{getEfficiencyText(currentHover)}</h1>
			</div>
				
			<DataTable 
				data={jsonData[parseInt(gen)]} 
				mouseEnter={
					(data) => {
						setCurrentHover(data)
					}
				}
				mouseLeave={
					() => {
						setCurrentHover("")
					}
				}
				/>
		</div>
	);
}

export default App;