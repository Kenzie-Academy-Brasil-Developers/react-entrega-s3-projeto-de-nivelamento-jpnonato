
export default function Display({code,name,desc,price,disc,func}){

    return(
        <>
        <ul>
            <li>{code}</li>
            <li>{name}</li>
            <li>{desc}</li>
            <li>{price}</li>
            <li>{disc}</li>
        </ul>
        <button onClick={() => func(code)}> Adicionar </button>
        </>
    )
}