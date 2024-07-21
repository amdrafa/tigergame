import logo from "../../assets/logo2.png";


export function Header() {

    return (
        <>
            <header className="flex justify-center items-center py-4 px-20 ">
                <img width={200} src={logo} alt="Logo Tiger GPT" />
            </header>
        </>
    );
}
