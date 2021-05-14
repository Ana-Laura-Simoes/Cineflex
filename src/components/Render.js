
export default function SeatsList({seat,toggleSelected}){

    return(
        <div
        className={`seat ${seat.selected ? "selected" : "avaible"} ${
          seat.isAvailable ? "available" : "unavailable"
        } `} id={seat.name}
      onClick={()=>toggleSelected(seat)}>
        <div>{seat.name}</div>
      </div>
    );
}