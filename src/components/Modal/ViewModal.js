import React, { useState } from 'react';
import "./ViewModal.scss";

const ViewModal = (props) => {
    const{close, date} = props;
    
    return (
        <div className="editModal">
            <div className="modalHead">
            </div>
            <div className="modalBody">
                <input className="viewBar" value={window.localStorage.getItem(date) === null ? '' : JSON.parse(window.localStorage.getItem(date)).tilData} readOnly></input>
            </div>
            <div className="modalFooter">
                <button className="closeViewBtn" onClick={close}>닫기</button>    
            </div>
        </div>
                         
    );
}

export default ViewModal;