import { useState } from "react"
import "./card.css"

const Card = () => {
    const [img, setImg] = useState("https://www.pickfu.com/blog/wp-content/uploads/2019/09/test3.jpeg")
    const handleSelectChange = (e) =>{
        setImg(e.target.value)
    }
  return (
    <div>
        <select onChange={(e)=>handleSelectChange(e)} name="" id="">
            <option value="https://www.pickfu.com/blog/wp-content/uploads/2019/09/test3.jpeg">--Select--</option>
            <option value="https://www.pickfu.com/blog/wp-content/uploads/2019/09/test3.jpeg">Jea Sree</option>
            <option value="https://www.mockupdaddy.com/wp-content/uploads/edd/2020/08/Premium-Cosmetic-Psd-Products-Mockup.png">Cosmetic</option>
            <option value="https://images.wondershare.com/pixcut/assets/blog/product-images-for-ecommerce-sitse-3.jpg">Rudys</option>
            <option value="https://ekit.co.uk/GalleryEntries/ecommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123">Robix Cube</option>
            <option value="">Product</option>
        </select>
    <div className="card">
        <div className="card-image">
            <img src={img} alt="" />       
        </div>

        <div className="card_text">
            <h2>Product</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi magnam voluptates laborum quidem maxime aliquid temporibus quam excepturi itaque vel?</p>

            <input type="text" /> 
            <button>Add</button>
           <button> Remove</button>
        </div>
    </div>
    </div>
  )
}

export default Card