import './App.css'
import Modal from './components/Modal'

function App() {
	return (
		<div className='App'>
			<h1>click to open</h1>
			<button className='open-modal-btn'>Open</button>
			<Modal />
		</div>
	)
}

export default App
