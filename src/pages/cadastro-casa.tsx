import { Header } from "../components/header";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import google from "../assets/goog.png";
import chat from "../assets/chat.png";
import { Helmet } from "react-helmet";
import cadastro from "../assets/registrar.jpeg"


export function CadastroCasa() {


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
        const SECONDS_TO_DISPLAY = 90;

        /* DAQUI PARA BAIXO NAO PRECISA ALTERAR */
        let attempts = 0;
        let elsDisplayed = false;
        const alreadyDisplayedKey = `alreadyElsDisplayedVSLlll${SECONDS_TO_DISPLAY}`
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
        <>
            <div className="text-center bg-yellow-400 font-bold font-bold text-gray-700 text-lg px-1">
                SE VOCÊ SAIR DESSA PÁGINA NÃO SERÁ POSSÍVEL SACAR O DINHEIRO
            </div>
            <div className="px-2">
                <Header />
                <div className="flex justify-center">
                    <span className="text-yellow-500 border-yellow-500 border-2 p-2 rounded-md w-52 flex justify-center font-bold text-xl mb-4">
                        Saldo: <span className="text-green-600 ml-2"> R$4.000,00</span>
                    </span>
                </div>
                {/* <div className="text-center text-white font-bold text-2xl mt-2 mb-8">
                SAQUE SEU <span className="text-yellow-500 font-extrabold">DINHEIRO</span>, GANHE <span className="bg-green-600 p-0.2">ACESSO AO APP</span> E FAÇA MAIS DE <span className="text-yellow-500 font-extrabold">R$759,00 </span>ATÉ HOJE ÀS <span className="bg-green-600 p-0.2"> {selectedHour} HORAS</span>
            </div> */}

                <div className="text-center text-zinc-200 font-extrabold text-4xl mb-4">
                    <span className="text-yellow-400">⚠️ÚLTIMA ETAPA⚠️ </span>PARA SACAR SEU <span className="text-green-600">DINHEIRO</span>
                </div>

                <div className="flex flex-col items-left text-zinc-300 text-xl  bg-red-950 p-4 rounded-xl">
                    <div className="mt-2">
                        <span className="font-bold text-yellow-400">1º PASSO:</span> Registrar na casa de aposta abaixo
                    </div>
                    <div className="mt-2">
                        <span className="font-bold text-yellow-400">2º PASSO:</span> Depositar R$35,00
                    </div>
                    <div className="mt-2">
                        <span className="font-extrabold text-green-600 ">🟢 COMO RECEBER O ACESSO: </span>Após se registrar na casa abaixo e depositar R$35,00 o acesso do TigerGPT vai chegar no seu <span className="text-yellow-400 font-bold">e-mail</span>.
                    </div>
                </div>








                {/* <div className="rounded-lg  mb-6 px-20 mt-2">
                    <div dangerouslySetInnerHTML={{ __html: '<div id="vid_66c57711c88bc6000b3c1a0d" style="position:relative;width:100%;padding: 177.77777777777777% 0 0;"> <img id="thumb_66c57711c88bc6000b3c1a0d" src="https://images.converteai.net/19e779a9-9bff-4dff-b541-9918122b88f8/players/66c57711c88bc6000b3c1a0d/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_66c57711c88bc6000b3c1a0d" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div>' }} />
                    <Helmet>
                        <script type="text/javascript" id="scr_66c57711c88bc6000b3c1a0d"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/19e779a9-9bff-4dff-b541-9918122b88f8/players/66c57711c88bc6000b3c1a0d/player.js", s.async=!0,document.head.appendChild(s); </script>
                    </Helmet>
                </div> */}


                <div className="p-4 mb-6">
                    <iframe
                        id="plataform"
                        src={"https://jonbet.cxclick.com/visit/?bta=57073&brand=jonbet"}
                        className="w-full h-screen rounded-lg"
                    ></iframe>
                </div>

                {/* <div className="text-center text-white text-2xl mt-2 mb-8">
                    Você precisa pagar a taxa de <span className="text-yellow-500 font-extrabold">criação de usuário</span> para sacar seu dinheiro.
                </div> */}

                {/* <div className="text-center text-white font-bold text-2xl mt-2 mb-8 mx-2">
                    Eu vou te passar o TigerGPT <br /> <span className=" font-extrabold bg-green-600 text-white p-0.5">DE GRAÇA</span>.
                </div>

                <div className="text-center text-white font-bold text-xl mt-2 mb-8 mx-2">
                    SÓ CHAMAR NO <span className="text-green-600">WHATSAPP</span> PRA RECEBER O ACESSO 👇🏼👇🏼 <br />
                </div>
 */}



                {/* {isVisible ? (
                    <div className="flex justify-center mb-8 mx-4">
                        <a href="https://api.whatsapp.com/send?phone=5547992479009&text=Quero%20receber%20acesso%20ao%20aplicativo!">
                            <button
                                className="bg-green-600 p-4 rounded-2xl text-white text-xl font-bold">
                                QUERO GARANTIR MEU ACESSO
                            </button>
                        </a>
                    </div>
                ) : (

                    <div className="flex justify-center mb-8 mx-4">
                        <a href="https://api.whatsapp.com/send?phone=5547992479009&text=Quero%20receber%20acesso%20ao%20aplicativo!">
                            <button
                                className="bg-red-950 opacity-80 p-4 rounded-2xl text-white text-xl font-bold">
                                🔒 CARREGANDO ACESSO...
                            </button>
                        </a>
                    </div>
                )} */}


                <div className="flex justify-center mb-6">
                    <p className="text-white font-bold px-10 text-center">
                        <span className="text-green-600">{`${viewers} `}</span>
                        {`pessoas já lucraram com o TigerGPT hoje, dia ${dayjs().format('DD/MM/YYYY')}.`}
                    </p>
                </div>



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

            </div >
        </>
    )
}