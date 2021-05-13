export default function FooterSeats({movieImg,movieTitle,movieSession}){
    console.log(movieSession)
    return(
<div className="footer">
<div className="footerImg">
    <img src={movieImg}></img>
</div>
<div className="footerTitle"><span>{movieTitle}</span><span>{movieSession.weekday} - {movieSession.time}</span></div>
</div>
    );
}