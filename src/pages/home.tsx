import { Header } from "../components/header";
import Modal from 'react-modal'
import { Helmet } from "react-helmet"
import { useState, useEffect } from 'react';
import { customStyles } from "../styles/modal";
import logo from "../assets/tigergpt.png";
import google from "../assets/goog.png";
import chat from "../assets/chat.png";
import { useNavigate } from "react-router-dom";
import { HackPanel } from "../components/hack-panel";
import Loading from "../components/loading";


export function Home() {

    const navigate = useNavigate();

    const [modalIsOpen, setIsOpen] = useState(false)

    const [isCalculatingAnswer, setIsCalculatingAnswer] = useState(true)

    const [isFirstModalOpen, setIsFirstModalOpen] = useState(true)



    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        setTimeout(function () {
            // Função que será executada após 4 segundos
            console.log('depois de 4 segundos dentro da funcao do modal');
        }, 4000);
    }

    function closeModal() {
        setIsOpen(false);
    }


    function closFirstModal() {
        setIsFirstModalOpen(false);
    }

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setTimeout(function () {
                // Função que será executada após 3 segundos
                console.log('Ação disparada após 3 segundos!');
                openModal()
            }, 3000);
        }
    }, [isVisible])

    useEffect(() => {
        /* ALTERE O VALOR 10 PARA OS SEGUNDOS EM QUE AS SEÇÕES VÃO APARECER */
        const SECONDS_TO_DISPLAY = 20;

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
        <div className="px-6">
            <Header />
            <div className="flex flex-col justify-between items-center">
                {isVisible ? (
                    <span className="text-yellow-500 border-yellow-500 border-2 p-2 rounded-md w-52 flex justify-center font-bold text-2xl mb-4">
                        Saldo: <span className="text-green-600 ml-2"> R$250,00</span>
                    </span>
                ) : (
                    <span className="text-white border-2 p-2 rounded-md w-40 flex justify-center font-bold text-xl mb-4">
                        Saldo: R$0,00
                    </span>
                )}
                {isCalculatingAnswer ? (
                    <Loading />
                ) : (
                    <HackPanel
                        rounds="Automático"
                    />
                )}
            </div>

            <div className="text-center text-white text-md py-4 text-2xl">
                Basta <span className="font-bold text-green-400">clicar uma vez</span> que a inleligência artificial joga <span className="font-bold text-yellow-400">automaticamente</span> por você.
            </div>

            <div className="p-4">
                <div className={`border-[8px] rounded-lg border-red-950 mb-6 ${isFirstModalOpen ? 'hidden' : ''}`}>
                    <div dangerouslySetInnerHTML={{ __html: '<div id="vid_674b4501c13d82038b38f35f" style="position: relative; width: 100%; padding: 178.05555555555554% 0 0;"> <img id="thumb_674b4501c13d82038b38f35f" src="https://images.converteai.net/19e779a9-9bff-4dff-b541-9918122b88f8/players/674b4501c13d82038b38f35f/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> <div id="backdrop_674b4501c13d82038b38f35f" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div> </div>  ' }} />
                    <Helmet>
                        <script type="text/javascript" id="scr_674b4501c13d82038b38f35f"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/19e779a9-9bff-4dff-b541-9918122b88f8/players/674b4501c13d82038b38f35f/player.js", s.async=!0,document.head.appendChild(s); </script>
                    </Helmet>
                </div>
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



            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnEsc={false}
                shouldCloseOnOverlayClick={false}
            >
                <h2 className="text-gray-100 text-3xl font-bold mb-4 text-center">Parabéns! Você ganhou <span className="text-yellow-400">R$250,00</span></h2>

                <div className="text-center text-gray-200 text-lg mb-6">
                    A <span className="text-green-600 font-bold">inteligência artificial</span> do TigetGPT jogou 100% automático pra você.
                </div>


                <div className="flex flex-col space-y-3 mb-8">
                    <button className="p-4 bg-green-600 rounded-2xl w-full text-white text-xl font-bold"
                        onClick={() => {
                            localStorage.removeItem("alreadyElsDisplayed17");
                            navigate("/register");
                            window.location.reload()
                        }}
                    >
                        RESGATAR DINHEIRO
                    </button>
                    {/* <span className="w-full flex justify-center text-gray-100">
                        ou
                    </span>
                    <button disabled className="p-4 bg-green-600 rounded-2xl w-full text-white text-xl font-bold"
                        onClick={() => {
                            localStorage.removeItem("alreadyElsDisplayed17");
                            navigate("/register");
                            window.location.reload()
                        }}
                    >
                        Resgatar dinheiro
                    </button> */}
                </div>

                <div className="flex justify-center items-center space-x-4">
                    <img width={80} src={logo} alt="Logo Pequena Tiger GPT" />
                    <span className="text-yellow-500 border-yellow-500 border-2 p-2 rounded-md w-44 flex justify-center font-bold text-xl">
                        Saldo: <span className="text-green-600 ml-2"> R$250,00</span>
                    </span>
                </div>
            </Modal>

            <Modal
                isOpen={isFirstModalOpen}
                onRequestClose={closFirstModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
            >
                <div className="w-full flex justify-center text-6xl mb-4">
                    🎁
                </div>
                <h2 className="text-gray-100 text-3xl font-bold mb-4 text-center">Você ganhou 1 rodada <span className="text-yellow-500">grátis</span> e um <span className="text-yellow-500">bônus</span> pra jogar</h2>

                <div className="text-center text-gray-200 text-2xl mb-6">
                    Clique no <span className="text-green-600 font-bold">botão verde</span> que a inteligência artificial te dará <span className="text-green-600 font-bold">99,98%</span> de assertividade.
                </div>


                <div className="flex flex-col space-y-3 mb-8">
                    <button className="p-4 bg-green-600 rounded-2xl w-full text-white text-xl font-bold"
                        onClick={() => {
                            setIsFirstModalOpen(false)
                            setTimeout(() => {
                                setIsCalculatingAnswer(false)
                            }, 1000);
                        }}
                    >
                        SIM, QUERO JOGAR DE GRAÇA
                    </button>


                </div>

                <div className="flex justify-between items-center space-x-4 items-center">
                    <img width={120} src={google} alt="Logo Pequena Tiger GPT" />
                    <img width={120} src={chat} alt="Logo Pequena Tiger GPT" />
                </div>
            </Modal>
        </div>
    )
}