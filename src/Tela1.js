import './assets/Reset.css';
import './assets/Style_1.css';
import Tela2 from './Tela2';
import logo from './assets/logo.png';
import { useState } from 'react';

export default function Tela1(){

    const [show, setShow] = useState(true);

    return(
        <>
            {show?<div className='tela1'>
                <div className='logo1'><img src={logo} alt='Logo do ZapRecall'/></div>
                <div className='appName1'><h1>ZapRecall</h1></div>
                <div className='button1' onClick={() => setShow(false)}><p>Iniciar Recall!</p></div>
            </div>:<Tela2/>}
        </>
    );
}