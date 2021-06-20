import React from 'react'

const Modal = ({ closeModal }) => {
	return (
		<div className='modal-overlay'>
			<div className='modal-container'>
				<button onClick={() => closeModal(false)}>X</button>
				<div className='title'>
					<h2>Sure, You want to continue?</h2>
				</div>
				<div className='body'>
					<p>the next page is awesome! let's go there!</p>
				</div>
				<div className='footer'>
					<button>Cancel</button>
					<button>Continue</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
