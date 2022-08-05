import React, {useState, useEffect} from 'react'
import { Dispatch } from 'redux';
import { getTodoItems } from '../redux/action';
import { useDispatch, useSelector } from "react-redux";
import { addCount } from '../redux/action';
import { store } from '../redux/store';


const Products = () => {
   
    const dispatch=useDispatch;
    const [productDeatails, setProductDeatails] = useState([]);
   useEffect(()=>{
       fetch('http://localhost:3000/personalcare')
       .then((res)=>res.json())
       .then((data)=>setProductDeatails(data));
   })
    const styles ={
              display:"grid",
              gridTemplateColumns:"1fr 1fr",
              marginTop:"100px",
              paddingLeft:"200px",
              paddingRight:"200px",
              rowGap:"50px",
              columnGap:"50px",
              
    }

    const handleAddToCart =(item)=>{
        store.dispatch(
            addCount()
        )
        fetch(`http://localhost:3000/cart`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(
                {
                    ...item
                }
            )
        }).then(() => {
            dispatch(getTodoItems());
        });
    }
const styles1={
        border:"1px solid grey",
        
       
}
  return (
    <div style={styles}>
         {
             productDeatails.map((item,index)=>(
                 <div key={item.id} style={styles1}>
                     <img src={item.image}  style={{width:"100px"}}/>
                     <h3>{item.title}</h3>
                     <h3>{item.MRP}</h3>
                     <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
                 </div>
             ))
         }
    
    </div>
  )
}

export default Products