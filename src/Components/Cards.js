import Card from "./Card";
export default function Cards(props) {
    const { details, onEdit, onDelete } = props;



    function handleEdit(id) {
        onEdit(id);
    }

    function handleDelete(id) {
        onDelete(id);
    }

    return (
        <div className="cards">
            {details.map(d => {
                return (
                    <Card card={d} key={d.id} handleEdit={handleEdit} handleDelete={handleDelete} />
                );
            })}
        </div>
    )
}