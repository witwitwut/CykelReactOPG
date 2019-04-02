import React from "react"
import "./BicycleItem.css" 


const BicycleItem = ({bicycle}) => {
    const { id, title, content, _embedded, excerpt } = bicycle

    //dette er til at fjerne html tags fra WordPress 
    const { rendered } = excerpt
    const regex = /(<([^>]+)>)/ig
    let result = rendered.replace(regex, "") 

    return (
        // <Link>
        
            <article className={"placeholder"}>
                <header>
                    <img src={_embedded[`wp:featuredmedia`][0].source_url} />
                    <h3>{title.rendered}</h3>
                    <p>{result}</p>
                </header>
            </article>
        // </Link>
    )
}

export default BicycleItem