import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUploadImage } from '../helpers/fetch';
import { reloadImages } from '../actions/uiActions';

interface formValues {
    label: string;
    link: string;
}

const AddPhoto = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const {logged, token} = useSelector((state:any) => state.auth)

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        formik.resetForm();
        setIsOpen(false);
    }

    const dispatch = useDispatch()

    const formik = useFormik<formValues>({
        initialValues: {
            label: '',
            link: ''
        },
        validationSchema: Yup.object({
            label: Yup.string().required(),
            link: Yup.string().matches(/\/\/(\S+?(?:jpe?g|png|gif))/ig, 'Enter correct url!').required()
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: formValues => {
            console.log(formValues)
            uploadImage(formValues)
            formik.resetForm();
            setIsOpen(false);
        }
    })

    const uploadImage = async(formValues:formValues) => {
        const resp = await fetchUploadImage(formValues.link, formValues.label, token) 
        const time = new Date()
        dispatch(reloadImages(time.getMilliseconds()))
    }



    return (
        <div className='col-12 col-md-6 d-flex justify-content-center justify-content-md-end'>

            <button onClick={openModal} disabled={(logged) ? false : true} className='navAddPhoto px-3'>Add a photo</button>
            

            <Modal
                show={modalIsOpen}
                onHide={closeModal}
                dialogClassName='mt-5 modalStyle'

            >
                

                <Modal.Body>
                    <h3 className='modal-tittle'>Add a new photo</h3>

                    <form onSubmit={formik.handleSubmit} className='signInModalContainer mt-3'>
                        <label>Label</label>
                        <input className={ (formik.errors.label) ?`defaultInput errorInput` : `defaultInput` } type="text" placeholder='Describe your image' name='label' onChange={formik.handleChange} value={formik.values.label} />
                        <label>Link</label>
                        <input className={ (formik.errors.link) ?`defaultInput errorInput` : `defaultInput` } type="text" placeholder='Your image!' name='link' onChange={formik.handleChange} value={formik.values.link} />
                        
                        <div className='d-flex justify-content-end my-3'>
                            <button type='button' className='negativeButton' onClick={closeModal}>Cancel</button>
                            <button type='submit' className='afirmativeButton'>Submit</button>
                        </div>


                    </form>

                </Modal.Body>

            </Modal>
        </div>
    )
}

export default AddPhoto