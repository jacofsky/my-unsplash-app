import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik';

import { Modal } from 'react-bootstrap'


interface formValues {
    password: string;
}


const DeleteButton = () => {

    const [modalIsOpen, setIsOpen] = useState(false);


    const openModal = () => setIsOpen(true);  
    const closeModal = () => {
        formik.resetForm();
        setIsOpen(false);
    }


    const formik = useFormik<formValues>({
        initialValues: {
            password: ''
        },
        validationSchema: Yup.object({
            password: Yup.string().required().min(6),
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: formValues => {
            console.log(formValues)
            formik.resetForm();
            setIsOpen(false);
        }
    })


    return (
        <>

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

                    <form onSubmit={formik.handleSubmit} className='signInModalContainer mt-3'>
                        <label>Password</label>
                        <input onChange={formik.handleChange} value={formik.values.password} className={ (formik.errors.password) ?`defaultInput errorInput` : `defaultInput` } type="password" placeholder='Password' name='password' />
                            
                            
                        <div className='d-flex justify-content-end my-3'>
                            <button type='button' className='negativeButton' onClick={closeModal}>Cancel</button>
                            <button type='submit' className='deleteButton'>Delete</button>
                        </div>

                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default DeleteButton