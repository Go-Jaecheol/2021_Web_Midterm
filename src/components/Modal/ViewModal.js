import React, { useState } from 'react';
import "./EditModal.scss";

const ViewModal = (props) => {
    const{close, date} = props;
    
    return (
        <div className="editModal">
            <div className="modalHead">
                <input className="labelBar"></input>
            </div>
            <div className="modalBody">
                <input className="editBar" value={window.localStorage.getItem(date) === null ? '' : JSON.parse(window.localStorage.getItem(date)).tilData}></input>
            </div>
            <div className="modalFooter">
                <button className="editBtn">등록</button>
                <button className="closeBtn" onClick={close}>닫기</button>    
            </div>
        </div>
                         
    );
}

export default ViewModal;