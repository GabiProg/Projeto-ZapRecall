import './assets/Reset.css';
import './assets/Style_2.css';
import Perguntas from './Perguntas';
import Footer from './Footer';
import logoPP from './assets/logo-pequeno.png';

export default function Tela2(show, setShow){

    return(
        <div className='tela2'>

            <div className='logo2'>
                <img src={logoPP} alt='Logo do ZapRecall'/>
                <h1>ZapRecall</h1>
            </div>

            <div className='cards'>

                <Perguntas/>
                    
            </div>
               
            <Footer/>
        
        </div>
    );
}
