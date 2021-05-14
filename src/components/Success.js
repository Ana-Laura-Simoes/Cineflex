
import { Link } from "react-router-dom";
export default function Success({movieInfo}){
//const seats=tickets.seats;
   /* */
//console.log(seats);
//console.log(tickets.seats);
    return(
<>
<div className="titleSuccess">Pedido feito<br /> com sucesso!</div>

<div className="ticketSuccess">
<div className="ticketInfo">
    <span className="title">Filme e sessão</span>
    <span className="infoText">{movieInfo.movie}<br />{movieInfo.date} {movieInfo.time}</span>
</div>

<div className="ticketInfo">
    <span className="title">Ingressos</span>
    <div className="infoText">{movieInfo.ids.map((s)=> {return (<span>Assento {s}<br/ ></span>)})}</div>
</div>

<div className="ticketInfo">
    <span className="title">Comprador</span>
    <span className="infoText">Nome: {movieInfo.name}<br />CPF: {movieInfo.cpf}</span>
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
