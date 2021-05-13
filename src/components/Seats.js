import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";


export default function SessionSeats({tickets,setTickets}) {
  const { idSession } = useParams();
  const [sessionSeats, setSessionSeats] = useState([]);


  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`
    );

    promise.then((r) => {
      setSessionSeats([...r.data.seats]);
      //console.log(r.data.seats);
    });
  }, []);


function toggleSelected(seat){
//console.log(seat);

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
    const NewArray=[];
   sessionSeats.map((s)=>{
        if(s.selected) NewArray.push(s.name);
    });
    console.log(NewArray);
    setTickets(NewArray);
}





  return (
    <>
      <div className="titlePage">Selecione o(s) assento(s)</div>
      <div className="seats">
        {sessionSeats.map((seat) => (
          <div
            className={`seat ${seat.selected ? "selected" : "avaible"} ${
              seat.isAvailable ? "available" : "unavailable"
            } `} 
          onClick={()=>toggleSelected(seat)}>
            <div>{seat.name}</div>
          </div>
        ))}
      </div>

      <div className="seats-subtitle">
        <div>
          <div className="circle selected"></div>
          <div className="title">Selecionado</div>
        </div>
        
        <div>
          <div className="circle available"></div>
          <div className="title">Disponível</div>
        </div>

        <div>
          <div className="circle unavailable"></div>
          <div className="title">Indisponível</div>
        </div>

      </div>

      <div className="userData">
        <div className="inputInfo">Nome do comprador:
        <input type="text" className="name" placeholder="Digite seu nome" /></div>
        <div className="inputInfo">CPF do comprador:
        <input type="text" className="cpf" placeholder="Digite seu CPF" /></div>
      </div>

     <div className="reserveSeat">
      <Link to="/sucesso">
          <button onClick={SelectedTickets}>Reservar assento(s)</button>
        </Link>
        </div>
    </>
  );
}