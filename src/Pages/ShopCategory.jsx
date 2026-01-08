import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
// import Item from '../Components/Item/Item'
// import all_product from '../Components/Assets/all_product'

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    

    const filter_category = all_product.filter((item)=>{
        return item.category === props.category
    })    

    // const filter_women = all_product.filter((item)=>{
    //     return item.category === props.category
    // }) 

    // console.log(filter_men);
    
  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexsort">
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>
        <div className="shopcategory-products">
          {
            filter_category.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
          }

          {/* {
            filter_women.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
          } */}
        </div>
        <div className="shopcategory-loadmore">Explore more</div>
    </div>
  )
}

export default ShopCategory;
