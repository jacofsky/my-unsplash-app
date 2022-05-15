import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup'

interface formValues {
    label: string;
    link: string;
}

const AddPhoto = () => {

    const [modalIsOpen, setIsOpen] = useState(false);


    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        formik.resetForm();
        setIsOpen(false);
    }

    const formik = useFormik<formValues>({
        initialValues: {
            label: '',
            link: ''
        },
        validationSchema: Yup.object({
            label: Yup.string().required(),
            link: Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!').required()
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
        <div className='col-12 col-md-6 d-flex justify-content-center justify-content-md-end'>
            <button onClick={openModal} className='navAddPhoto px-3'>Add a photo</button>

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