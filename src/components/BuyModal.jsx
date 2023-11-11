import React from 'react'
import '../styles/buymodal.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


const BuyModal = ({ name, value, sector, date, location, closeModal }) => {
    const rate = value.slice(1);
    const [amt, setamt] = useState('0.0');
    return (
        <>

            <div className='buycanvas'>
                <div className='buymodal'>
                    <div className='closemodal'>

                        <button onClick={closeModal} className='closebtn'>
                            <CloseIcon fontSize="large" />
                        </button>

                    </div>
                    <div className='modaldata'>
                        <div className='modalhead'>{name}</div>
                        <div className='mhd'>
                            <div className='mqt'>
                                <div className='mqth'>
                                    Available Volume
                                </div>
                                <div className='mqtv'>
                                    1000 units
                                </div>
                            </div>
                            <div className='mqt'>
                                <div className='mqth'>
                                    Conversion Rate
                                </div>
                                <div className='mqtv'>
                                    {rate}
                                </div>
                            </div>
                        </div>

                        <div className='moddes'>
                            <div className='buyamt'>
                                <label htmlFor="buyamt">Amount (Units)</label>
                                <input type="text" onChange={(e) => { setamt(e.target.value) }} placeholder="0.0" name="amount needed" id="buyamt" />

                            </div>
                            <div className='getamt'>
                                <div className='ghead'>PRK Token <span className='ginfo'>( $1 = 0.015 PKRT )</span></div>
                                <div className='gdes'><span className='gdesinfo'>{(amt * rate * 0.015).toFixed(2)}</span></div>
                            </div>
                            <div className='getamt'>
                                <div className='ghead'>Total Value <span className='ginfo'>( 1Unit = ${rate} )</span></div>
                                <div className='gdes'><span className='gdesinfo'>{(amt * rate).toFixed(2)}</span></div>
                            </div>
                            <div className='tkn'>Connect Wallet</div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    );

}

export default BuyModal