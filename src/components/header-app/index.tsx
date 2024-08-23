import { toast } from "react-toastify";
import logo from "../../assets/tigergpt.png";
import { useNavigate } from "react-router-dom";


export function HeaderApp() {

    function notify() { toast.error("Você precisa estar em MODO AUTOMÁTICO pra sacar seu dinheiro."); }
    const navigate = useNavigate();



    return (
        <>
            <header className="flex justify-between items-center py-4 px-4 w-full">
                <img width={90} src={logo} alt="Logo Tiger GPT" />
                <div className="flex gap-4 text-zinc-300">
                    <p className=" text-xl text-yellow-400 cursor-pointer">Home</p>
                    <button className="cursor-pointer text-xl" onClick={notify}>Meus Saques</button>
                </div>

            </header>
        </>
    );
}
