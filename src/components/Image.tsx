import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Image as ImageTS } from '../typescript/interfaces'

interface IProps {
    data: ImageTS
}

const Image = ({data}:IProps) => {
    
    const [modalIsOpen, setIsOpen] = useState(false);


    const openModal = () => setIsOpen(true);  
    const closeModal = () => setIsOpen(false); 



    return (
        <div className='imageCard d-flex my-3 justify-content-center col-4' >

            <img className="imageHorizontal" src={data.link} alt={data.label} />

            <p>{data.label}</p>

            <button onClick={openModal}>
                delete
            </button>
            
            <Modal
                show={modalIsOpen}
                onHide={closeModal}
                dialogClassName='mt-5 modalStyle'

            >
                

                <Modal.Body>
                    <h3 className='modal-tittle'>Are you sure?</h3>

                    <div className='signInModalContainer mt-3'>
                        <label>Password</label>
                        <input className='defaultInput' type="password" placeholder='Password' />
                        
                        
                        <div className='d-flex justify-content-end my-3'>
                            <button className='negativeButton' onClick={closeModal}>Cancel</button>
                            <button className='deleteButton'>Delete</button>
                        </div>


                    </div>

                </Modal.Body>

            </Modal>

        </div>
    )
}

export default Image