import "./styles-3.css";

export default function Certicard(props){

    return(
        <div className="certicard">
            <img src={props.img} alt="cerificateimg" />
        </div>
    );
}