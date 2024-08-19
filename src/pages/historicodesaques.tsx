import { Header } from "../components/header";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { FiXCircle } from "react-icons/fi";

import logo from "../assets/tigergpt.png";
import google from "../assets/goog.png";
import chat from "../assets/chat.png";

export function HistoricoSaques() {
    const saques = [
        { id: 1, data: "19/08/2024", valor: "R$ 6.370,41", metodo: "PIX", status: "Concluído" },
        { id: 2, data: "17/08/2024", valor: "R$ 642,00", metodo: "Transferência Bancária", status: "Concluído" },
        { id: 3, data: "15/08/2024", valor: "R$ 350,00", metodo: "PIX", status: "Concluído" },
        { id: 4, data: "15/08/2024", valor: "R$ 692,90", metodo: "PIX", status: "Concluído" },
        { id: 5, data: "14/08/2024", valor: "R$ 300,00", metodo: "PIX", status: "Concluído" },
        // Adicione mais entradas de saques conforme necessário
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "Concluído":
                return <AiOutlineCheckCircle className="text-green-500" />;
            case "Pendente":
                return <AiOutlineClockCircle className="text-yellow-500" />;
            case "Falhou":
                return <FiXCircle className="text-red-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="px-6">
            <div className="flex justify-center my-5">
                <img width={150} src={logo} alt="Logo Tiger GPT" />
            </div>

            <div className="p-4">
                <h2 className="text-white text-3xl font-bold mb-4 flex items-center">
                    <FaMoneyCheckAlt className="mr-2" />
                    Histórico de Saques
                </h2>

                <div className="bg-red-950 p-4 rounded-lg shadow-md">
                    {saques.map((saque) => (
                        <div key={saque.id} className="flex items-center justify-between mb-4 p-2 bg-red-900 rounded-md">
                            <div className="text-white">
                                <div className="font-bold text-lg">{saque.valor}</div>
                                <div className="text-sm">{saque.data} - {saque.metodo}</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                {getStatusIcon(saque.status)}
                                <div className="text-white font-semibold">{saque.status}</div>
                            </div>
                        </div>
                    ))}
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
    );
}
