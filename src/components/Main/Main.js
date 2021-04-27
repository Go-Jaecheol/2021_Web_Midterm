import React, { Fragment, useState } from 'react';
import "./Main.scss";
import { FiEdit } from 'react-icons/fi';
import Calendar from "../Calendar/Calendar";
import Modal from 'react-awesome-modal';
import EditModal from '../Modal/Modal';

function Main() {
    const [isOpenModal, setOpenModal] = useState(false);
    const openModal = () => {
        setOpenModal(true);
    }
    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <Fragment>
            <div className="mainHead">
                <button className="inputBar" onClick={ openModal }><FiEdit /></button>

                <Modal visible={isOpenModal} width="600" height="400" effect="fadeInDown" onClickAway={closeModal} >
                    <EditModal close={closeModal}></EditModal>
                </Modal>

            </div>
            <div className="mainBody">
                <Calendar></Calendar>
            </div>
        </Fragment>
    );
}

export default Main;