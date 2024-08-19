import { Header } from "../components/header";
import Modal from 'react-modal';
import { Helmet } from "react-helmet";
import { useState } from 'react';
import { customStyles } from "../styles/modal";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import logo from "../assets/tigergpt.png";
import google from "../assets/goog.png";
import chat from "../assets/chat.png";
import { useNavigate } from "react-router-dom";
import { HackPanel } from "../components/hack-panel";
import Loading from "../components/loading";
import { toast } from "react-toastify";


export function Saque() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaque = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            toast.success("Saque requisitado com sucesso!");
        }, 3000); // 3 segundos de carregamento
    };

    return (
        <div className="px-6">
            <div className="flex justify-center my-5">
                <img width={150} src={logo} alt="Logo Tiger GPT" />
            </div>

            <div className="p-4">
                <h2 className="text-white text-3xl font-bold  flex items-center">
                    <FaMoneyCheckAlt className="mr-2" />
                    Saque
                </h2>

                <div onClick={() => {
                    navigate("/historico");
                }} className="mb-4 text-yellow-400 underline ">Histórico de saques</div>

                <div className="flex flex-col mb-4">
                    <span className="text-white text-xl mb-1">Método de Pagamento</span>
                    <select className="rounded-md h-8 p-2">
                        <option>PIX</option>
                        <option>Transferência Bancária</option>
                    </select>
                </div>

                <div className="flex flex-col mb-4">
                    <span className="text-white text-xl mb-1">Saque Mínimo</span>
                    <input className="rounded-md h-8 p-2" value="R$ 10,00" disabled />
                </div>

                <div className="flex flex-col mb-4">
                    <span className="text-white text-xl mb-1">Disponível para Saque</span>
                    <input className="rounded-md h-8 p-2" value="R$ 6.370,41" disabled />
                </div>

                <div className="flex flex-col mb-4">
                    <span className="text-white text-xl mb-1">Tipo da Chave Pix</span>
                    <select className="rounded-md h-8 p-2">
                        <option>CPF</option>
                        <option>E-mail</option>
                        <option>Telefone</option>
                        <option>Chave Aleatória</option>
                    </select>
                </div>

                <div className="flex flex-col mb-10">
                    <span className="text-white text-xl mb-1">Valor do Saque</span>
                    <input className="rounded-md h-8 p-2" placeholder="Insira o valor do saque" />
                </div>

                <button
                    className="p-4 bg-green-600 rounded-2xl mb-4 w-full text-white text-xl font-bold flex items-center justify-center"
                    onClick={handleSaque}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center space-x-2">
                            <span>Carregando</span>
                            <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                        </div>
                    ) : (
                        "Sacar"
                    )}
                </button>
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
    );
}
