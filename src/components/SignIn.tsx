import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
  

const SignIn = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenRegister, setIsOpenRegister] = useState(false);


    const openModalSingIn = () => setIsOpen(true);  
    const closeModalSingIn = () => setIsOpen(false); 

    const openModalRegister = () => setIsOpenRegister(true);  
    const closeModalRegister = () => setIsOpenRegister(false);   

    return (
        <div>
        <button className='me-4 navSingin' onClick={openModalSingIn}>
            <i className="bi bi-person-circle me-2"></i>
            SignIn
        </button> 
        
        <Modal
            show={modalIsOpen}
            onHide={closeModalSingIn}
            dialogClassName='mt-5 modalStyle'

        >
            

            <Modal.Body>
                <h3 className='modal-tittle'>Sign in your account</h3>

                <div className='signInModalContainer mt-3'>
                    <label>Email</label>
                    <input className='defaultInput' type="email" placeholder='youremail@example.com' />
                    <label>Password</label>
                    <input className='defaultInput' type="Password" placeholder='password' />
                    
                    <div className="buttonGroups my-3">
                        <button className='negativeButton' 
                        onClick={() => {
                            closeModalSingIn()
                            openModalRegister()
                        }}>
                            Create account
                        </button>

                        <div>
                            <button className='negativeButton' onClick={closeModalSingIn}>Cancel</button>
                            <button className='afirmativeButton'>Sign In</button>
                        </div>

                    </div>

                </div>

            </Modal.Body>

        </Modal>

        <Modal
            show={modalIsOpenRegister}
            onHide={closeModalRegister}
            dialogClassName='mt-5 modalStyle'

        >
            

            <Modal.Body>
                <h3 className='modal-tittle'>Create an account</h3>

                <div className='signInModalContainer mt-3'>
                    <label>Name</label>
                    <input className='defaultInput' type="email" placeholder='Your name :)' />
                    <label>Email</label>
                    <input className='defaultInput' type="email" placeholder='youremail@example.com' />
                    <label>Password</label>
                    <input className='defaultInput' type="text" placeholder='Password' />
                    <label>Confirm password</label>
                    <input className='defaultInput' type="text" placeholder='Repeat password' />
                    
                    <div className="buttonGroups my-3">
                        <button className='negativeButton' onClick={() => {
                            closeModalRegister()
                            openModalSingIn()
                        }}>Sign in</button>

                        <div>
                            <button className='negativeButton' onClick={closeModalRegister}>Cancel</button>
                            <button className='afirmativeButton'>Register</button>
                        </div>

                    </div>

                </div>

            </Modal.Body>

        </Modal>

        </div>

    )
}

export default SignIn