import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const Logout = () => {

  const {name} = useSelector((state: any) => state.auth);

  const [modal, setModal] = useState(false)

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

            <button>LogOut</button>
          </>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Logout;
