import Card from "./Card";
export default function Cards(props) {
    // var id = nextId();
    // console.log(id);
    return (
        <div className="cards">
            {props.details.map(d => {
                return (
                    <Card card={d} />
                );
            })}
        </div>
    )
}