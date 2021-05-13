import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SessionSeats() {
  const { idSession } = useParams();
  const [sessionSeats, setSessionSeats] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`
    );

    promise.then((r) => {
      setSessionSeats(r.data.seats);
      console.log(r.data.seats);
    });
  }, []);

  return (
    <>
      <div className="titlePage">Selecione o(s) assento(s)</div>
      <div className="seats">
        {sessionSeats.map((seat) => (
          <div
            className={`seat ${isSelected ? "selected" : "avaible"} ${
              seat.isAvailable ? "available" : "unavailable"
            } `} 
          >
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
      <div className="user-data">
        <div className="title">Nome do comprador:</div>
        <input type="text" className="name" placeholder="Digite seu nome" />
        <div className="title">CPF do comprador:</div>
        <input type="text" className="cpf" placeholder="Digite seu CPF" />
        <Link to="/sucesso">
          <button className="reserve-seat">Reservar assento(s)</button>
        </Link>
      </div>
    </>
  );
}