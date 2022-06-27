export default function Card(props) {
    const { card, handleEdit, handleDelete } = props;
    return (
        <div className="card">
            Name:{card.name}
            <br />
            Age:{card.age}
            <br />
            Gender:{card.gender}
            <br />
            Description:{card.description}
            <div className="btns">
                <button className="edit" onClick={() => { handleEdit(card.id) }}>Edit</button>
                <button className="delete" onClick={() => { handleDelete(card.id) }}>Delete</button>
            </div>

        </div>
    );
}
