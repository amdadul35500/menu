import React from 'react';
import items from "./data";

const Categories = ({filterItems}) => {

   

    return (
        <>
            <div className="btn-container">
      
        
          <button type="button" className="filter-btn" onClick={()=> filterItems("all")}>All</button>
          <button type="button" className="filter-btn" onClick={()=> filterItems("breakfast")}>Breakfast</button>
          <button type="button" className="filter-btn" onClick={()=> filterItems("lunch")}>Lunch</button>
          <button type="button" className="filter-btn" onClick={()=> filterItems("shakes")}>Shakes</button>
       
    </div>
        </>
    )
}

export default Categories
