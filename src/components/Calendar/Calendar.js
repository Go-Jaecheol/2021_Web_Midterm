import React, { useState } from 'react';
import './Calendar.scss';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import moment from 'moment';
import Modal from 'react-awesome-modal';
import ViewModal from '../Modal/ViewModal';

function Calendar() {
        const [getDate, setDate] = useState(moment());
        const today = getDate;

        const [clickDate, setClickDate] = useState();
        const [isOpenModal, setOpenModal] = useState(false);
        const openModal = (date) => {
            setClickDate(date);
            setOpenModal(true);
        }
        const closeModal = () => {
            setOpenModal(false);
        }

        function createCalendar() {
            const startWeek = today.clone().startOf('month').week();
            const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
            let arr = [];
            for (let week = startWeek; week <= lastWeek; week++) {
                arr.push(
                    <div className="row" key={week}>
                        {
                            Array(7).fill(0).map((data, index) => {
                                let cur = today.clone().week(week).startOf('week').add(data+index, 'day');
                                let isSelected = today.format('YYYYMMDD') === cur.format('YYYYMMDD') ? 'selected' : '';
                                let isGray = cur.format('MM') === today.format('MM') ? '' : 'gray';
                                let isSaved = window.localStorage.getItem(cur.format('YYMMDD')) === null ? '' : 'saved';
                                return(
                                    <div className={`box ${isSelected} ${isGray} ${isSaved}`} key={index} onClick={ isSaved ? () => {openModal(cur.format('YYMMDD'));} : undefined }>
                                        <span className={`text`}>{cur.format('D')}</span>
                                    </div>
                                
                                )
                                
                            })
                        }
                    </div>
                )
            }
            return arr;
        }
        
        return (
            
            <div className="Calendar">
                <div className="calendarHead">
                    <button onClick={()=>{ setDate(getDate.clone().subtract(1, 'month'))}}><MdChevronLeft /></button>
                    <span className="title">{ today.format('YYYY MMMM') }</span>
                    <button onClick={()=>{ setDate(getDate.clone().add(1, 'month'))}}><MdChevronRight /></button>
                </div>
                <div className="calendarBody">
                    {createCalendar()}
                    <Modal visible={isOpenModal} width="400" height="250" effect="fadeInDown" onClickAway={closeModal} >
                        <ViewModal close={closeModal} date={clickDate} ></ViewModal>
                    </Modal>
                </div>
                
            </div>
        );
    }

export default Calendar;
