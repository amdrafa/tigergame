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




export function Login() {

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

    const [isVisible, setIsVisible] = useState(false);



    return (
        <div className="px-6">

            <div className="p-4 flex flex-col">

                <div className="flex justify-center my-5">
                    <img width={150} src={logo} alt="" />
                    
                </div>

                <div className="flex flex-col mb-4">
                    <span className="text-white text-xl mb-1">Email</span>
                    <input min={1} className="rounded-md h-8 p-2" />
                </div>

                <div className="flex flex-col mb-4">
                    <span className="text-white text-xl mb-1">Senha</span>
                    <input type="password" className="rounded-md h-8 p-2" />
                </div>

                <button className="p-4 bg-green-600 rounded-2xl mb-4 w-full text-white text-xl font-bold"
                    onClick={() => {
                        navigate("/tiger-game");
                    }}
                >
                    Entrar
                </button>

                <div className="text-white opacity-80 flex flex-col items-center">
                    <span>Sou um novo usuário</span>
                    <span>Esqueci minha senha</span>
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
        </div>
    )
}