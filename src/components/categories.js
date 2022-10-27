import React from "react";

const Categories = ({fillterItems}) => {
    return(
     <div className="btn-container">
        <button onClick={() => {
            fillterItems('all')
        }}>All</button>
        <button onClick={() => {
            fillterItems('breakfast')
        }}>Breacfast</button>

        <button onClick={() => {
            fillterItems('lunch')
        }}>lunch</button>
        <button onClick={() => {
            fillterItems('shakes')
        }}>shakes</button>
     </div>
    )
}
export default Categories;