
export default function SeatsList({seat,toggleSelected}){

    return(
        <div
        className={`seat ${seat.selected ? "selected" : "avaible"} ${
          seat.isAvailable ? "available" : "unavailable"
        } `} 
      onClick={()=>toggleSelected(seat)}>
        <div>{seat.name}</div>
      </div>
    );
}