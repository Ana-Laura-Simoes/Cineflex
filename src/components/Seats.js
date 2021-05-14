import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import SeatsList from "./Render";

export default function SessionSeats({movieInfo,setMovieInfo}) {
  const { idSession } = useParams();
  const [sessionSeats, setSessionSeats] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf]=useState("");


  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`
    );

    promise.then((r) => {
      setSessionSeats([...r.data.seats]);
    });
  }, []);


function toggleSelected(seat){
if(!seat.isAvailable){
    alert("Esse assento não está disponível");
    return;
}

const NewArray= sessionSeats.map((s)=>{
    if(s.id===seat.id){
        s.selected=!s.selected;
    }
    return s;
});
setSessionSeats(NewArray);
}

function SelectedTickets(){
    const ArrayId=[];
    const ArraySeat=[]
   sessionSeats.map((s)=>{
        if(s.selected) {
        ArrayId.push(s.id)
        ArraySeat.push(s.name)
        }
    });
    if(name&&cpf&&(ArrayId.length!==0))
    setUpTicket(ArrayId,ArraySeat);
    else return;
}

function setUpTicket(arrayid,arrayseat){
    const NewArray={name:name,cpf:cpf,ids:arrayid,seats:arrayseat};
    const data={name:name,cpf:cpf,ids:arrayid};
    const promise = axios.post( `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`,data);
      promise.then((res) => console.log(res));
      promise.catch(()=>alert("erro!"));
      setMovieInfo({...movieInfo,...NewArray});
    
}




  return (
    <>
      <div className="titlePage">Selecione o(s) assento(s)</div>
      <div className="seats">
        {sessionSeats.map((seat) => (
       <SeatsList
       seat={seat}
       toggleSelected={toggleSelected}
       />
        ))}
      </div>

      <div className="seats-subtitle">
        <SeatsSubtitle class={"selected"} state={"Selecionado"}/>
        <SeatsSubtitle class={""} state={"Disponível"}/>
        <SeatsSubtitle state={"Indisponível"} class={"unavailable"}/>
      </div>

      <div className="userData">
        <div className="inputInfo">Nome do comprador:
        <input type="text" className="name" placeholder="Digite seu nome"  value={name} onChange={e => setName(e.target.value)}/></div>
        <div className="inputInfo">CPF do comprador:
        <input type="text" className="cpf" placeholder="Digite seu CPF" value={cpf} onChange={e => setCpf(e.target.value)} /></div>
        </div>

     <div className="reserveSeat">
      <Link to="/sucesso">
          <button onClick={SelectedTickets}>Reservar assento(s)</button>
        </Link>
        </div>
    </>
  );
}



function SeatsSubtitle(props){
    return(
        <div>
          <div className={`circle ${props.class}`}></div>
          <div className="title">{props.state}</div>
        </div>
    );
}