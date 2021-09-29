export default function SelectedItem ({code,name,desc,price,disc}){

    return(
        <>
        <ul>
            <li>{code}</li>
            <li>{name}</li>
            <li>{desc}</li>
            <li>{price}</li>
            <li>{disc}</li>
        </ul>
        </>
    )
}