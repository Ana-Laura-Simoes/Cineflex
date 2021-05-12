export default function Footer(props){
    const {img,title}=props;
    return(
<div className="footer">
<div className="footerImg">
    <img src={img}></img>
</div>
<div className="footerTitle">{title}</div>
</div>
    );
}