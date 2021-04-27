import React, { useState } from 'react';
import "./Modal.scss";
import moment from 'moment';


const EditModal = (props) => {
    const{close, date} = props;
    const [tilData, setTilData] = useState('');
    const loadData = window.localStorage.getItem(date) === null ? '' : JSON.parse(window.localStorage.getItem(date)).tilData;
    const saveData = () => {
        const tilObj = { tilData };
        window.localStorage.setItem(date , JSON.stringify(tilObj));
        close();
    };
    const onChange = (e) => {
        setTilData(e.target.value);
    };

    return (
        <div className="editModal">
            <div className="modalHead">
                <input className="labelBar"></input>
            </div>
            <div className="modalBody">
                
                <input className="editBar" value={tilData} onChange={onChange}></input>
            </div>
            <div className="modalFooter">
                <button className="editBtn" onClick={saveData}>등록</button>
                <button className="closeBtn" onClick={close}>닫기</button>    
            </div>
        </div>
                        
    );
}

export default EditModal;