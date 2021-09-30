export default function SelectedItem ({elt}){

    return(
        <>
        <ul>
            <li>{elt.code}</li>
            <li>{elt.name}</li>
            <li>{elt.description}</li>
            <li>{elt.price}</li>
            <li>{elt.discount}</li>
        </ul>
        </>
    )
}