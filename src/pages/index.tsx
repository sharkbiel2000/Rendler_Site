import { useEffect } from "react";
import Header from "../components/Cabecalho";

function Index() {
    useEffect(() => {
        document.title = 'gygyg';
    });

    return(
        <>
        <Header/>
        </>
    );
}

export default Index;
