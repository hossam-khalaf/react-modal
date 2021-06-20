import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
	const [openModal, setOpenModal] = useState(false)

	return (
		<div className='App'>
			<h1>click to open</h1>
			<button
				className='open-modal-btn'
				onClick={() => {
					setOpenModal(true)
				}}>
				Open
			</button>
			{openModal && <Modal closeModal={setOpenModal} />}
		</div>
	)
}

export default App
