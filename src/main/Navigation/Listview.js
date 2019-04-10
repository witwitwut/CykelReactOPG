import BicycleItem from "../bicycle/BicycleItem"
import React from "react"
import CategoryItem from "./CategoryItem"
import "./ListView.css"


class Listview extends React.Component {

    // componentDidMount(){
    //     fetch(this.props.url)
    //     .then(response => response.json())
    //     .then(data => this.props.setCategories(data.categories))
    //     .catch(error => console.log(error))
    // }


    render() {
        return(
            //<Link>
                <section className={"placeholderObjects"}>
                    <div className={"bicycleObjects"}>
                        {
                            this.props.bicycles.map( bicycle => (
                                <BicycleItem key={bicycle.id} bicycle={bicycle} />
                            ))
                        }
                    </div>
                    <div className={"categoriObjects"}>
                        {
                            this.props.categories.map( categori => (
                                <CategoryItem key={categori.id} categori={categori} />
                            ))
                           
                        }
                    </div>
                </section>
            //</Link>
        )
    }
}

export default Listview