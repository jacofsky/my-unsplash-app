import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { startLogOut } from "src/actions/auth";

const Logout = () => {

  const [modal, setModal] = useState(false)

  const {name} = useSelector((state: any) => state.auth);
  const dispatch = useDispatch()

  const handleLoguot = () => {
    setModal(false)
    dispatch(startLogOut() as any)
  }

  return (
    <div>
      <button className="me-4 navSingin" onClick={() => setModal(true)}>
        <i className="bi bi-person-circle me-2"></i>
        <p className="siginOverFlow">{name}</p>
      </button>

      <Modal
        show={modal}
        onHide={() => setModal(false)}
        dialogClassName="mt-5 modalStyle"
      >
        <Modal.Body>
          <>
            <h3 className="modal-tittle">Sure you wanna leave?</h3>

            <div className="d-flex justify-content-center my-4">
              <button className="deleteButton" onClick={handleLoguot}>LogOut</button>
            </div>
          </>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Logout;
