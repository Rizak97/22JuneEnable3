const Prop = props => {
    return (
        <>
            <h1>{props.header}</h1>
            <p>{props.content}</p>
            <p>{props.number} {props.text}</p>
            <p>{props.nonextistant}</p>
        
        </>
    );
}
const Player = () => {
    return (
        <div className="club">
            <Prop header="Player Profile" content= "Marcus Rashford" />
            <Prop header= "Goals" content= "All competitions" number= "30" />
            <Prop nonextistant="⚽ ⚽" />
        
        
        
        
        </div>
    );
}
export default Player