import { useEffect } from "react";
import Header from "../Cabecalho";

function Login() {
    useEffect(() => {
        // titulo da aba
        document.title = 'Rendler - Login';

        //folha de estilo
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './src/sass/Index.scss';
        document.head.appendChild(link);

        //removendo folha de estilo ao mudar de pagina
        return () => {
            const link = document.querySelector('link[href="./src/sass/Index.scss"]');
            if (link) {
                link.remove();
            }
        };
    }, []);

    return(
        <>
        <Header/>
        </>
    );
}

export default Login;
