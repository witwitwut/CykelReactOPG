import React from "react"
import "./CategoryItem.css"

const CategoryItem = ({categori}) => {
    const { count, name  } = categori

    return (
        // <Link>
        <div className={"placeholderCategoryItem"}>
            <img alt={name}/>
            <h3>{name}</h3>
            <p>{count}</p>
        </div>
        // </Link>
    )
}

export default CategoryItem