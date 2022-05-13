import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'


const AddPhoto = () => {

    const [modalIsOpen, setIsOpen] = useState(false);


    const openModal = () => setIsOpen(true);  
    const closeModal = () => setIsOpen(false); 

    return (
        <div>
            <button onClick={openModal} className='navAddPhoto px-3'>Add a photo</button>

            <Modal
                show={modalIsOpen}
                onHide={closeModal}
                dialogClassName='mt-5 modalStyle'

            >
                

                <Modal.Body>
                    <h3 className='modal-tittle'>Add a new photo</h3>

                    <div className='signInModalContainer mt-3'>
                        <label>Label</label>
                        <input className='defaultInput' type="text" placeholder='Describe your image' />
                        <label>Link</label>
                        <input className='defaultInput' type="Password" placeholder='Your image!' />
                        
                        <div className='d-flex justify-content-end my-3'>
                            <button className='negativeButton' onClick={closeModal}>Cancel</button>
                            <button className='afirmativeButton'>Submit</button>
                        </div>


                    </div>

                </Modal.Body>

            </Modal>
        </div>
    )
}

export default AddPhoto