import React from "react"

const CategoryItem = (ListItem) => {
    const { id, title, img, listLength } = ListItem

    return (
        // <Link>
        <div>
            <img src={img} />
            <h3>{title}</h3>
            <span>{listLength}</span>
        </div>
        // </Link>
    )
}

export default CategoryItem