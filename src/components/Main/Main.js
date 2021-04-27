import React, { Fragment, useState } from 'react';
import "./Main.scss";
import { BiSearchAlt } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import Calendar from "../Calendar/Calendar";
import Modal from 'react-awesome-modal'

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
                    <div className="editModal">
                        
                        <button className="searchBar"><BiSearchAlt /></button>
                        <div className="modalBody">test</div>
                        <div className="modalFooter">
                            <button className="editBtn">등록</button>
                            <button className="closeBtn" onClick={closeModal}>닫기</button>    
                        </div>
                    </div>
                </Modal>

            </div>
            <div className="mainBody">
                <Calendar></Calendar>
            </div>
        </Fragment>
    );
}

export default Main