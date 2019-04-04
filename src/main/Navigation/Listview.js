import BicycleItem from "../bicycle/BicycleItem"
import React from "react"
import CategoryItem from "./CategoryItem"


class Listview extends React.Component {




    render() {
        const { id, count, link, name, _links } = this.props
        return(
            <section>
                {
                    this.props.categories.map( categori => (
                        <CategoryItem key={categori.id} categori={categori} />
                    ))
                }
            </section>
        )
    }
}

export default Listview