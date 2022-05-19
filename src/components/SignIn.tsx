import React, {useState} from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { authCleanError, startLogin, startRegister } from '../actions/auth';
import { openLoginModal, openRegisterModal, closeLoginModal, closeRegisterModal } from '../actions/uiActions';

interface formSignIn {
    email: string;
    password: string;
}

interface formRegister {
    name: string;
    email: string;
    password: string;
    password2: string;
}


const SignIn = () => {

    const openModalSingIn = () => dispatch(openLoginModal())
    const closeModalSingIn = () => {
        dispatch(authCleanError())
        formikSingIn.resetForm();
        dispatch(closeLoginModal())
    }

    const openModalRegister = () => dispatch(openRegisterModal())  
    const closeModalRegister = () => {
        dispatch(authCleanError())
        formikRegister.resetForm();
        dispatch(closeRegisterModal())  
    } 

    const dispatch = useDispatch()
    const { loadingInModal, registerModal, loginModal } = useSelector((state:any) => state.ui)
    const { error, msg, locationError } = useSelector((state:any) => state.auth)


    const formikSingIn = useFormik<formSignIn>({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required().email(),
            password: Yup.string().required().min(6)
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: async(formValues) => {
            await dispatch(startLogin(formValues) as any)
            console.log(error)
        }
    })

    const formikRegister = useFormik<formRegister>({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password2: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            email: Yup.string().required().email(),
            password: Yup.string().required().min(6).oneOf([Yup.ref('password2')]),
            password2: Yup.string().required().min(6).oneOf([Yup.ref('password')]),
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: async(formValues) => {
            await dispatch(startRegister({name: formValues.name, email: formValues.email, password: formValues.password}) as any)
        }
    })

    return (
        <div>
        <button className='me-4 navSingin' onClick={openModalSingIn}>
            <i className="bi bi-person-circle me-2"></i>
            <p className='siginOverFlow'>SignIn</p>
        </button> 
        
        <Modal
            show={loginModal}
            onHide={closeModalSingIn}
            dialogClassName='mt-5 modalStyle'

        >
            

            <Modal.Body>

                {
                    loadingInModal
                        ?
                            <div className='spinnerSignIn'>
                                <Spinner animation='border' variant='success' />
                            </div> 
                        :
                            <>
                                <h3 className='modal-tittle'>Sign in your account</h3>

                                {(error && locationError === 'signIn' ) && <p className='infoError'>{msg}</p>}

                                <form onSubmit={formikSingIn.handleSubmit} className='signInModalContainer mt-3'>
                                    <label>Email</label>
                                    <input onChange={formikSingIn.handleChange} value={formikSingIn.values.email} className={ (formikSingIn.errors.email) ?`defaultInput errorInput` : `defaultInput` } type="email" placeholder='youremail@example.com' name='email' />
                                    <label>Password</label>
                                    <input onChange={formikSingIn.handleChange} value={formikSingIn.values.password} className={ (formikSingIn.errors.password) ?`defaultInput errorInput` : `defaultInput` } type="password" placeholder='Your password here!' name='password' />
                                    
                                    <div className="buttonGroups my-3">
                                        <button className='negativeButton' 
                                        type='button'
                                        onClick={() => {
                                            closeModalSingIn()
                                            openModalRegister()
                                        }}>
                                            Create account
                                        </button>

                                        <div>
                                            <button type='button' className='negativeButton' onClick={closeModalSingIn}>Cancel</button>
                                            <button type='submit' className='afirmativeButton'>Sign In</button>
                                        </div>

                                    </div>

                                </form>
                            </>
                }

            </Modal.Body>

        </Modal>

        <Modal
            show={registerModal}
            onHide={closeModalRegister}
            dialogClassName='mt-5 modalStyle '

        >
            

            <Modal.Body>

            {
                    loadingInModal
                        ?
                            <div className='modalCenter'>
                                <Spinner animation='border' variant='success' />
                            </div> 
                        :
                            <>
                                
                                <h3 className='modal-tittle'>Create an account</h3>
                                
                                {(error && locationError === 'register' ) && <p className='infoError'>{msg}</p>}

                                <form onSubmit={formikRegister.handleSubmit} className='signInModalContainer mt-3'>
                                    <label>Name</label>
                                    <input onChange={formikRegister.handleChange} value={formikRegister.values.name} className={ (formikRegister.errors.name) ?`defaultInput errorInput` : `defaultInput` } type="text" placeholder='Your name :)' name='name' />
                                    <label>Email</label>
                                    <input onChange={formikRegister.handleChange} value={formikRegister.values.email} className={ (formikRegister.errors.email) ?`defaultInput errorInput` : `defaultInput` } type="email" placeholder='youremail@example.com' name='email' />
                                    <label>Password</label>
                                    <input onChange={formikRegister.handleChange} value={formikRegister.values.password} className={ (formikRegister.errors.password) ?`defaultInput errorInput` : `defaultInput` } type="text" placeholder='Password' name='password' />
                                    <label>Confirm password</label>
                                    <input onChange={formikRegister.handleChange} value={formikRegister.values.password2} className={ (formikRegister.errors.password2) ?`defaultInput errorInput` : `defaultInput` } type="text" placeholder='Repeat password' name='password2' />
                                    
                                    <div className="buttonGroups my-3">
                                        <button type='button' className='negativeButton' onClick={() => {
                                            closeModalRegister()
                                            openModalSingIn()
                                        }}>Sign in</button>

                                        <div>
                                            <button type='button' className='negativeButton' onClick={closeModalRegister}>Cancel</button>
                                            <button type='submit' className='afirmativeButton'>Register</button>
                                        </div>

                                    </div>

                                </form>
                            </>

            }

            </Modal.Body>

        </Modal>

        </div>

    )
}

export default SignIn