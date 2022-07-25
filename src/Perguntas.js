import { useState } from 'react';
import './assets/Reset.css';
import './assets/Style_3.css';

function PerguntasItens({question, resposta, index }) {
   
    const [ estado, setEstado ] = useState(1);
    const [icone, setIcone] = useState();
    const [cor, setCor] = useState();

    if (estado === 1) {
        return (
            <div className='pergunta' onClick={() => setEstado(2)}>
                <p>Pergunta {index + 1}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        );
    }
    if (estado === 2) {
        return (
            <div className='frente' onClick={() => setEstado(3)}>
                <h2>{question}</h2>
                <ion-icon name="return-down-forward-outline"></ion-icon>
            </div>
        );
    }
    if (estado === 3) {
        return (
            <div className='verso'>
                <p>{resposta}</p>
                <div>
                    <div onClick={() => setIcone('close-circle')}>
                        <div onClick={() => setCor('cor-vermelha')}>
                            <div className='box1' onClick={() => setEstado(4)}>Não lembrei</div>
                        </div>
                    </div>
                    <div onClick={() => setIcone('help-circle')}>
                        <div onClick={() => setCor('cor-mostarda')}>
                            <div className='box2' onClick={() => setEstado(4)}>Quase não lembrei</div>
                        </div>
                    </div>
                    <div onClick={() => setIcone('checkmark-circle')}>
                        <div onClick={() => setCor('cor-verde')}>
                            <div className='box3' onClick={() => setEstado(4)}>Zap!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (estado === 4) {
        return (
            <div className={`pergunta ${cor}`}>
                <p><s>Pergunta {index + 1}</s></p>
                <ion-icon name={icone}></ion-icon>
            </div>
        );
    }
}

export default function Perguntas() {

    const Pergs = [
        { question: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript' },
        { question: 'O React é __', resposta: 'uma biblioteca JavaScript para construção de interfaces' },
        { question: ' Componentes devem iniciar com __ ', resposta: 'letra maiúscula' },
        { question: 'Podemos colocar __dentro do JSX', resposta: 'expressões' },
        { question: 'O ReactDOM nos ajuda __ ', resposta: 'interagindo com a DOM para colocar componentes React na mesma' },
        { question: 'Usamos o npm para __ ', resposta: 'gerenciar os pacotes necessários e suas dependências' },
        { question: 'Usamos props para __ ', resposta: 'passar diferentes informações para componentes ' },
        { question: 'Usamos estado (state) para __', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }
    ];

    Pergs.sort(() => Math.random() - 0.5);

    return (

        <div className='flash'>
            {Pergs.map((item, index) => {
                const { question, resposta } = item;
                return <PerguntasItens
                    key={index}
                    question={question}
                    resposta={resposta}
                    index={index} />
            })}
        </div>
    );
}