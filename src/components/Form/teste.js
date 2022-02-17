import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios'

export function Teste(){

    const [meme, setMeme] = useState({
        logo:"",
        name:"",
        local:"",
        description:"",
        comments: [],
        coment: "Adicionar comentário",
        heart: 0,
        bg:"",
        category:"",
        likes: 0,
        userImg: [],
    })


const [currentTime, setCurrentTime] = useState(""); 

async function createTime() {
    return setCurrentTime({currentTime: new Date()});
}

let printDate = "";
async function formatDate(dateStr) {
    
    const monthPtBr = [
        "JANEIRO",
        "FEVEREIRO",
        "MARÇO",
        "ABRIL",
        "MAIO",
        "JUNHO",
        "JULHO",
        "AGOSTO",
        "SETEMBRO",
        "NOVEMBRO",
        "DEZEMBRO",
    ];

    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    
        printDate = `${day} DE ${monthPtBr[month]} DE ${
            year}`;
        return printDate;
    } 

    useEffect(() => {
        createTime();
        formatDate(currentTime.currentTime)
    }, [])
    
    async function invoke(){
    await createTime()
    await console.log(currentTime)
    await formatDate(currentTime.currentTime)
    await console.log(printDate)
    }


return(
    <form onClick={invoke}>
        <button type="button">testando</button>
    </form>
)
}


    