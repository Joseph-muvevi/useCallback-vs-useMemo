import React from 'react'
import './App.css'
import AnotherCounter from "./components/AnotherCounter"
import ParentComponent from './components/ParentComponent'

function App() {
	return (
		<div className="App">
			<AnotherCounter />
			<ParentComponent/>
		</div>
	)
}

export default App