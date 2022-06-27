export default function Card(props) {
    return (
        <div className="card">
            Name:{props.card.name}
            <br />
            Age:{props.card.age}
            <br />
            Gender:{props.card.gender}
            <br />
            Id:{props.card.id}
        </div>

    );
}
