export default function FooterSeats({movieImg,movieTitle,movieSession,movieInfo,setMovieInfo}){
    console.log("lele"+movieInfo.movie)
    return(
<div className="footer">
<div className="footerImg">
    <img src={movieInfo.img}></img>
</div>
<div className="footerTitle"><span>{movieInfo.movie}</span><span>{movieInfo.weekday} - {movieInfo.time}</span></div>
</div>
    );
}