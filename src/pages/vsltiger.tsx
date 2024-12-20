import { Header } from "../components/header";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import google from "../assets/goog.png";
import chat from "../assets/chat.png";


export function VslTiger() {

    const [selectedHour] = useState(dayjs().add(2.8, 'hour').format('h:mm'))

    const [viewers, setViewers] = useState(800);

    useEffect(() => {
        const interval = setInterval(() => {
            // Incrementando o número de espectadores de forma gradual entre 800 e 1200
            setViewers((prevViewers) => {
                const targetViewers = Math.floor(Math.random() * 401) + 1200; // Número aleatório entre 800 e 1200
                const step = (targetViewers - prevViewers) / 10; // Incremento gradual ao longo de 10 atualizações
                const nextViewers = prevViewers + step;
                return Math.round(nextViewers); // Arredondando para o número inteiro mais próximo
            });
        }, 3000); // Atualizar a cada 1 segundo (1000 ms)

        return () => clearInterval(interval); // Limpando o intervalo quando o componente é desmontado
    }, []);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        /* ALTERE O VALOR 10 PARA OS SEGUNDOS EM QUE AS SEÇÕES VÃO APARECER */
        const SECONDS_TO_DISPLAY = 5;

        /* DAQUI PARA BAIXO NAO PRECISA ALTERAR */
        let attempts = 0;
        let elsDisplayed = false;
        const alreadyDisplayedKey = `alreadyElsDisplayed${SECONDS_TO_DISPLAY}`
        const alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

        const showHiddenElements = function () {
            elsDisplayed = true;
            setIsVisible(true);
            localStorage.setItem(alreadyDisplayedKey, true)
        }

        const startWatchVideoProgress = function () {
            if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
                if (attempts >= 10) return;
                attempts += 1;
                return setTimeout(function () { startWatchVideoProgress() }, 1000);
            }

            smartplayer.instances[0].on('timeupdate', () => {
                if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
                if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY) return;
                showHiddenElements();
            })
        }


        if (alreadyElsDisplayed === 'true') {
            setTimeout(function () { showHiddenElements(); }, 100);
        } else {
            startWatchVideoProgress()
        }
    }, [])

    return (
        <div className="px-2">
            <Header />
            <div className="flex justify-center">
                <span className="text-yellow-500 border-yellow-500 border-2 p-2 rounded-md w-52 flex justify-center font-bold text-2xl mb-4">
                    Saldo: <span className="text-green-600 ml-2"> R$250,00</span>
                </span>
            </div>
            <div className="text-center text-white font-bold text-2xl mt-2 mb-8">
                SAQUE SEU <span className="text-yellow-500 font-extrabold">DINHEIRO</span>, GANHE <span className="bg-green-600 p-0.2">ACESSO AO APP</span> E FAÇA MAIS DE <span className="text-yellow-500 font-extrabold">R$759,00 </span>ATÉ HOJE ÀS <span className="bg-green-600 p-0.2"> {selectedHour} HORAS</span>
            </div>

            <div className="p-4 text-white text-2xl justify-center flex">
                <h3>Vagas disponíveis:</h3>
            </div>

            <div className="grid grid-cols-6 gap-3 p-4">
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-red-700 rounded-lg" />
                <div className="w-10 h-10 bg-green-600 rounded-lg" />
                <div className="w-10 h-10 bg-green-600 rounded-lg" />
            </div>

            <div className="p-4 text-green-400 opacity-80 text-2xl justify-center flex">
                <h3>Apenas 2 Vagas disponíveis.</h3>
            </div>

            <div className="flex justify-center mb-8 mt-4">
                <a href="https://typebot.co/tema-whats-app-93u8by9">
                    <button
                        className="bg-green-600 animate-bounce w-full p-4 rounded-2xl text-white text-2xl font-bold">
                        QUERO GARANTIR MINHA VAGA!
                    </button>
                </a>
            </div>

            <div className="flex justify-center mb-6">
                <p className="text-white font-bold px-10 text-center">
                    <span className="text-green-600">{`${viewers} `}</span>{`pessoas já adquiriram o TigetGPT hoje, dia ${dayjs().format('DD/MM/YYYY')}.`}
                </p>
            </div>

            {/* {isVisible ? (
                <div className="flex justify-center mb-8">
                    <button className="bg-green-600 p-4 rounded-2xl text-white font-bold">
                        QUERO APROVEITAR ESSA CHANCE
                    </button>
                </div>
            ) : (
                <div className="flex justify-center mb-6">
                    <p className="text-white font-bold px-10 text-center">
                        <span className="text-green-600">{`${viewers} `}</span>{`pessoas já adquiriram o TigetGPT`}
                    </p>
                </div>
            )} */}


            <footer>
                <div className="flex justify-center space-x-4 items-center mb-6">
                    <img width={120} src={google} alt="Logo Pequena Tiger GPT" />
                    <img width={120} src={chat} alt="Logo Pequena Tiger GPT" />
                </div>
                <div className="flex flex-col items-center justify-center text-gray-200 mb-10">
                    <div className="text-xl font-bold text-white">
                        Copyright 2023 - (TigerGPT)
                    </div>
                    <div className="mb-2">
                        Todos os direitos reservados.
                    </div>
                    <div>
                        Termos de uso
                    </div>
                    <div>
                        Privacidade
                    </div>
                </div>
            </footer>

        </div>
    )
}