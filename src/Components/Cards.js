import Card from "./Card";
export default function Cards(props) {
    const { details, setDetails, getData } = props;

    function handleEdit(id) {
        getData(id);
    }

    function handleDelete(id) {
        setDetails(prev => {
            return (prev.filter((p) => {
                return p.id !== id;
            }))
        })
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