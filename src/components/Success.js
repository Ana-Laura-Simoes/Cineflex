
import { Link } from "react-router-dom";
export default function Success({movieTitle,movieSession,tickets}){
//const seats=tickets.seats;
   /* */
//console.log(seats);
console.log(tickets.seats);
    return(
<>
<div className="titleSuccess">Pedido feito<br /> com sucesso!</div>

<div className="ticketSuccess">
<div className="ticketInfo">
    <span className="title">Filme e sessão</span>
    <span className="infoText">{movieTitle}<br />{movieSession.date} {movieSession.time}</span>
</div>

<div className="ticketInfo">
    <span className="title">Ingressos</span>
    <div className="infoText">{tickets.seats.map((s)=> {return (<span>Assento {s}<br/ ></span>)})}</div>
</div>

<div className="ticketInfo">
    <span className="title">Comprador</span>
    <span className="infoText">Nome: {tickets.buyerName}<br />CPF: {tickets.buyerCpf}</span>
</div>
</div>


<div className="reserveSeat">
      <Link to="/">
          <button>Voltar pra Home</button>
        </Link>
        </div>


</>
    );
}
