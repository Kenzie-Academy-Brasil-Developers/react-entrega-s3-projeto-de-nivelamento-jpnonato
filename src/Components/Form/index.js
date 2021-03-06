import {useState} from 'react'
import Display from '../Display'
import SelectedItem from '../SelectedItem'

export default function Form({products}){
    
    
    const [cod, setCod] = useState('')
    const [nome, setNome] = useState('')
    const [descr, setDescr] = useState('')
    const [prec, setPrec] = useState('')
    const [descont, setDescont] = useState('')
    const [ list, SetList] = useState(products)
    const [ select, setSelect] = useState([])
    


    function handleClick(){
       const it = {
            code: cod,
            name: nome,
            description: descr,
            price: prec,
            discount: descont
        }
        console.log(it)
        
        SetList([...list, it]) 
        console.log(list)
    }

    function add(id){
     const item = list.filter((elt) => elt.code === id)[0]
     console.log(item)

     setSelect([...select,item])
     
    }


    return(
        <div>
         <section>
            <h2>
                Preço total:
                {
                    select.reduce((s,a) => parseFloat(a.price) + parseFloat(s), 0) - select.reduce((s,a) => parseFloat(a.discount) + parseFloat(s), 0)
                }
            </h2>

            <h2>
                Desconto Total:
               {
                    select.reduce((s,a) => parseFloat(a.discount) + parseFloat(s), 0)
                }
            </h2>
         </section>
         <section>
            <input type='text' placeHolder='código' onChange={(e) => setCod(e.target.value)}></input>
            <input type='text' placeHolder='Nome' onChange={(e) => setNome(e.target.value)}></input>
            <input type='text' placeHolder='descrição' onChange={(e) => setDescr(e.target.value)}></input>
            <input type='text' placeHolder='preço' onChange={(e) => setPrec(e.target.value)}></input>
            <input type='text' placeHolder='desconto' onChange={(e) => setDescont(e.target.value)}></input>
            <button onClick={handleClick}> Cadastrar </button>
         </section>
         <section>
            {
               list.map((elt) =>  <Display elt={elt} func={add} />)
            }
            
         </section>
         <section>
             <h3>Cart</h3>
             {
                select.map((elt) => <SelectedItem  elt={elt}  />)
             }

         </section>
       
        </div>
    )
}