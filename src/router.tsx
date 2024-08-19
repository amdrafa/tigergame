import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { SecondQuestion } from "./pages/second-question";
import { VslTiger } from "./pages/vsltiger";
import { Creative } from "./pages/creative";
import { Register } from "./pages/register";
import { BackRedirect } from "./pages/backredirect";
import { Bet } from "./pages/bet";
import { Game } from "./pages/game";
import { Login } from "./pages/login";
import { Saque } from "./pages/saque";
import { HistoricoSaques } from "./pages/historicodesaques";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secondplay" element={<SecondQuestion />} />
            <Route path="/vsltiger" element={<VslTiger />} />
            <Route path="/game" element={<Creative />} />
            <Route path="/tiger-game" element={<Game />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/saque" element={<Saque />} />
            <Route path="/historico" element={<HistoricoSaques />} />
            <Route path="/backredirect" element={<BackRedirect />} />
            <Route path="/bet" element={<Bet />} />
        </Routes>
    );
}