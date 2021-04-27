import React, { Fragment, useState } from 'react';
import "./Modal.scss";
import { FiEdit } from 'react-icons/fi';

const EditModal = (props) => {
    const{close} = props;
    return (
        <div className="editModal">
                        
                        <button className="searchBar"><FiEdit /></button>
                        <div className="modalBody">test</div>
                        <div className="modalFooter">
                            <button className="editBtn">등록</button>
                            <button className="closeBtn" onClick={close}>닫기</button>    
                        </div>
                    </div>
    );
}

export default EditModal;