import React from "react"
import "./CategoryItem.css"

const CategoryItem = (categori) => {
    const {  id, count, link, name  } = categori
    console.log("categori fra categoryItem",categori)

    return (
        // <Link>
        <div className={"placeholderCategoryItem"}>
            <img />
            <h3>{name}</h3>
            <p>{count}</p>
        </div>
        // </Link>
    )
}

export default CategoryItem