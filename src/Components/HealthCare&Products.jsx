import React,{useEffect,useState} from 'react'
import HealthPageslider from '../Pages/Healthpagecrousel';


const HealthCareProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/healthcare')
    .then((responce)=> responce.json())
    .then((data)=> setProduct(data));
  },[])
  return (
    <div> 
     <HealthPageslider />

    <div style={{display:'grid', gridTemplateColumns:"1fr 1fr 1fr " , columnGap:'20px', rowGap:"20px", paddingLeft:"200px", paddingRight:"200px", marginTop:'50px'}}>
    {
      product.map((item,index)=>
      (
        <div  onClick={()=> window.open("/products", "_blank")} key={index} style={{display:'flex', flexDirection:'row', border:"1px solid rgb(201, 201, 201)", height:"120px" , width:"300px", alignItems:'center', justifyContent:"center"}}>
        <img src={item.img} style={{width:'60px', height:"60px"}}/>
        <p style={{marginLeft:"20px",textAlign:"left" }}>{item.title}</p>
        <p style={{marginLeft:"50px"}}>{item.discount}</p>
         
      </div>
        ))
    }
    </div>

    <div style={{paddingLeft:"200px", paddingRight:"200px", marginTop:"50px"}}>    

             <p style={{textAlign:"left"}}> Shop Safely And Worry-Free On PharmEasy</p>   
             <p>PharmEasy is a renowned name in the online shopping of Over The Counter or healthcare products and other daily essentials. Ordering online on PharmEasy is convenient, fast and hassle-free; you can avoid the annoyance of queuing up at your local pharmacy and also avail of huge discounts of up to 80% OFF. Purchasing the healthcare requirements such as medical devices and nutritional supplements that you need will no longer burn a hole in your pocket. At PharmEasy, you are sure to find everything that you need because we have products across all healthcare categories.</p>  
    
    </div>
    
    </div>
  )
}

export default HealthCareProducts