import React from "react"
import "./BicycleItem.css" 


const BicycleItem = ({bicycle}) => {
    const { title, _embedded, excerpt } = bicycle

    //dette er til at fjerne html tags fra WordPress 
    const { rendered } = excerpt
    const regex = /(<([^>]+)>)/ig
    let result = rendered.replace(regex, "")
   
    return (
        // <Link>
        
            <article className={"placeholder"}>
                    <img src={_embedded[`wp:featuredmedia`][0].source_url} />
                    <h3>{title.rendered}</h3>
                    <p>{result}</p>
            </article>
        // </Link>
    )
}

export default BicycleItem