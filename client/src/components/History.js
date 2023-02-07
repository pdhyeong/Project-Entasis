import { useEffect, useState } from 'react';
import Modal from 'react-modal';

const History =({
    order,
    price,
    amount,
    fee,
    date,
    token_name})=>{

        const [modalIsOpen, setModalIsOpen] = useState(false);
    
        const modalOpen =()=>{
            document.body.style.overflow = 'hidden';
            setModalIsOpen(true)
            }
        const modalClose =()=>{
            document.body.style.overflow = 'unset';
            setModalIsOpen(false)
            console.log(modalIsOpen)

            }

            useEffect(()=>{
            },[modalIsOpen])
        const modalStyle = {
            overlay: {
                position: "fixed",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                overflow: "hidden",
                zIndex: 10,
            },
            content: {
                display: "block",
                justifyContent: "center",
                background: "#2B2B2B",
                overflow: "scroll",
                top:'30%',
                bottom:'20%',
                left:'20%',
                right:'20%',
                border:"0",
                borderRadius: "10px",
                WebkitOverflowScrolling: "touch",
                outline: "none",
                zIndex: 20,
                opacity:'0.8'
            },
        };
// console.log(modalIsOpen)
    return(
    <div className="history" onClick={modalOpen}>
        <Modal
            appElement={document.getElementById('root') || undefined}
            onRequestClose={modalClose}
            isOpen={modalIsOpen}
            style={modalStyle}
            >   
            <div className="trading_record">
                <h1 className='trading_record_header'>Trading Record</h1>
                <div className='close' onClick={modalClose}>
                    <img src={require('../assets/images/close.png')}></img>
                    </div>
                    <div className='trading_record_data'>
                        <div className='trading_record_data_left'>
                            <div className='trading_record_data_set'><h2>Order</h2></div>
                            <div className='trading_record_data_set'><h2>Price</h2></div>
                            <div className='trading_record_data_set'><h2>Amount</h2></div>
                            <div className='trading_record_data_set'><h2>Fee</h2></div>
                            <div className='trading_record_data_set'><h2>Date</h2></div>
                            <div className='trading_record_data_set'><h2>From</h2></div>
                        </div>
                        <div className='trading_record_data_right'>
                            <div className='trading_record_data_set'><h2></h2><h3
                            style={{color:
                                order==='buy'?'#0d6097':
                                order==='sell'?'#ab1c37':
                                '#00aab3'
                                }}
                            >{order}</h3></div>
                            <div className='trading_record_data_set'><h3>{price}</h3><h5>ETH</h5></div>
                            <div className='trading_record_data_set'><h3>{amount!==null?amount:'-'}</h3></div>
                            <div className='trading_record_data_set'><h3>{fee!==null?fee:'-'}</h3></div>
                            <div className='trading_record_data_set'><h3>{date}</h3></div>
                            <div className='trading_record_data_set'><h3>{token_name}</h3></div>
                        </div>

                    </div>
                <div className='trading_record_data_logo'>
                    <img src={require('../assets/images/ENTASIS.png')}></img>
                </div>
        
            </div>
        </Modal>
        <div className="history_wrapper">
            <div 
                style= 
                    {{color:
                    order==='buy'?'#0d6097':
                    order==='sell'?'#ab1c37':
                    '#00aab3'
                    }}  
                className="history_order">
                {order}
            </div>
            <div className="history_price">
                {Number(price).toFixed(4)}
            </div>
            <div className="history_amount">
                {amount}
            </div>
            <div className="history_fee">
                {fee}
            </div>
            <div className="history_date">
                {date}
            </div>
            <div className="history_company_name">
                {token_name}
            </div>
        </div>
    </div>
    )
}
export default History