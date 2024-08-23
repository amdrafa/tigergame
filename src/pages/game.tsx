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
import coroa from "../assets/coroa.png"
import { HeaderApp } from "../components/header-app";


export function Game() {

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


    return (
        <div className="px-6">
            <HeaderApp />
            <div className="flex flex-col justify-between items-center">
                <span className="text-yellow-500 border-yellow-500 border-2 p-2 rounded-md w-52 flex justify-center font-bold text-xl mb-4">
                    Saldo: <span className="text-green-600 ml-2"> R$4.000,00</span>
                </span>
                <div className="mb-3">
                    <h2 className="text-white ">Modo: <span className="bg-green-600 font-bold p-1">Normal</span></h2>
                </div>
                {isCalculatingAnswer ? (
                    <Loading />
                ) : (
                    <HackPanel
                        rounds="Manual"
                    />
                )}
            </div>

            <div className="flex justify-center px-4 mt-4 mb-6">
                <button onClick={() => setIsOpen(true)} className="p-4 justify-center gap-1 flex items-center text-xl font-bold text-white bg-green-600 rounded-xl w-full">
                    MODO AUTOMÁTICO <img width={50} src={coroa} />
                </button>
            </div>

            <div className="p-4 mb-6">
                <iframe
                    id="plataform"
                    src={"https://jonbet.cxclick.com/visit/?bta=57073&brand=jonbet"}
                    className="w-full h-screen rounded-lg"
                ></iframe>
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
                <h2 className="text-gray-100 text-3xl font-bold mb-4 text-center">Modo <span className="text-yellow-400">automático</span> indisponível.</h2>


                <div className="text-center text-gray-200 text-lg mb-2">
                    Pra ativar o modo <span className="text-green-600 font-bold">automático</span>, é necessário que você movimente pelo menos <span className="text-green-600 font-bold">R$35</span> na plataforma.
                </div>

                <div className="text-center text-gray-200 text-lg mb-8">
                    Você pode jogar no modo <span className="text-yellow-500 font-bold">normal</span> até atingir a <span className="text-red-600 font-bold">movimentação mínima</span>.
                </div>

                <div className="flex flex-col space-y-3 mb-8">
                    <button className="p-4 bg-green-600 rounded-2xl w-full text-white text-xl font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        ENTENDI, VOU JOGAR NO MODO NORMAL
                    </button>

                </div>

                <div className="flex justify-center items-center space-x-4">
                    <img width={80} src={logo} alt="Logo Pequena Tiger GPT" />
                    <span className="text-yellow-500 border-yellow-500 border-2 p-2 rounded-md w-44 flex justify-center font-bold text-xl">
                        Saldo: <span className="text-green-600 ml-2"> R$4.000,00</span>
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
                <h1 className="text-yellow-400 text-xl font-bold mb-4 text-center">ATENÇÃO!</h1>
                <h2 className="text-gray-100 text-3xl font-bold mb-4 text-center">Seja bem vindo ao <span className="text-yellow-500">TigerGPT</span></h2>

                <div className="text-center text-gray-200 text-lg mb-6">
                    Ao ativar o modo <span className="text-green-600 font-bold">AUTOMÁTICO</span> a inteligência artificial jogará de forma<span className="text-green-600 font-bold">100%</span> independente pra você. <br />  Ou seja, só apertar um botão e esperar os ganhos.
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
                        SIM, EU ENTENDI
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