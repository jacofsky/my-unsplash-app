import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik';

import { Modal, Spinner } from 'react-bootstrap'
import { validPassword } from '../helpers/validatePassword';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteImage } from '../helpers/fetch';
import { reloadImages, startLaodingSignin, finishLaodingSignin } from '../actions/uiActions';


interface formValues {
    password: string;
}

interface Props {
    imageId: string;
}


const DeleteButton = ({imageId}:Props) => {

    const [modalIsOpen, setIsOpen] = useState(false);


    const openModal = () => setIsOpen(true);  
    const closeModal = () => {
        formik.resetForm();
        setIsOpen(false);
    }

    const userPassword = useSelector((state:any) => state.auth.password)
    const token = useSelector((state:any) => state.auth.token)
    const {loadingInModal} = useSelector((state:any) => state.ui)


    const dispatch = useDispatch()


    const formik = useFormik<formValues>({
        initialValues: {
            password: ''
        },
        validationSchema: Yup.object({
            password: Yup.string().required().min(6),
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: ({password}) => {
            dispatch(startLaodingSignin())
            deleteImage(password)
            dispatch(finishLaodingSignin())
        }
    })

    const deleteImage = async(inputPassword:string) => {

        const isValid = await validPassword(inputPassword, userPassword)
        if (!isValid) {
            formik.setFieldError("password", "Wrong password")
        } else {
            const resp = await fetchDeleteImage(imageId, token, inputPassword)
            console.log(resp)
            const date = new Date()
            dispatch(reloadImages(date.getMilliseconds()))
            formik.resetForm()
            setIsOpen(false)
        }
        
    }


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

                    {
                        loadingInModal
                        ?  <div className='spinnerDelete'><Spinner animation='border' variant='danger'/></div>
                        :
                        <>
                            <h3 className='modal-tittle'>Are you sure?</h3>

                            <form onSubmit={formik.handleSubmit} className='signInModalContainer mt-3'>
                                <label>Password</label>
                                <input onChange={formik.handleChange} value={formik.values.password} className={ (formik.errors.password) ?`defaultInput errorInput` : `defaultInput` } type="password" placeholder='Password' name='password' />
                                    
                                    
                                <div className='d-flex justify-content-end my-3'>
                                    <button type='button' className='negativeButton' onClick={closeModal}>Cancel</button>
                                    <button type='submit' className='deleteButton'>Delete</button>
                                </div>

                            </form>
                        </>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default DeleteButton