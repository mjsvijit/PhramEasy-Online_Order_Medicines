import React, {useEffect,useState} from 'react'

const Cart = () => {
   const [printCart, setPrintCart] = useState([]);
   


   const deleteData=(id)=>{
     console.log(id)
        fetch(`http://localhost:3000/cart/${id}`,{
          method: 'DELETE',
            headers: {
                "Content-Type": 'application/json ;  charset=UTF-8',
            }})
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => console.log(err));
   }

   useEffect(()=>{
    fetch('http://localhost:3000/cart')
    .then((res)=> res.json())
    .then((data)=>setPrintCart(data))
},[deleteData])

const stylesa={
      display:"grid",
      gridTemplateColumns:"1fr 1fr",
      marginTop:"50px"
}
  return (
    <div style={stylesa}>
    {
        printCart.map((task,index)=>( 
            <div key={task.id}>
             
              <img src={task.image}  style={{width:"100px"}}/>
                     <h3>Product Name:-{task.title}</h3>
                     <h3>MRP:-{task.MRP}</h3>  
                     <button onClick={()=> deleteData(task.id)}>Remove </button>       
            </div>
        ))
    }
    
    </div>
  )
}

export default Cart