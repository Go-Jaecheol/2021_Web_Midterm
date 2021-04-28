import React, { useState } from 'react';
import "./EditModal.scss";
import SearchMusic from '../SearchMusic/SearchMusic';

const EditModal = (props) => {
    const{close, date} = props;

    return (
        <div className="editModal">
            <div className="modalHead">
                <SearchMusic date={date}/>
            </div>
            <div className="modalBody">
            </div>
            <div className="modalFooter">
                <button className="editBtn" onClick={close}>등록</button>
                <button className="closeBtn" onClick={close}>닫기</button>    
            </div>
        </div>
                        
    );
}

export default EditModal;