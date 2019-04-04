import React from "react"
import "./Main.css"
import Bicycles from "./bicycle/Bicycles";
import BicycleItem from "./bicycle/BicycleItem"
import CategoryItem from "./Navigation/CategoryItem";
import Listview from "./Navigation/Listview";
import { Object } from "core-js";

class Main extends React.Component{
 
    state = {
        bicycles: [],
        categories: [],
        url: `http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/`,
        bikeurl: `http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/product?_embed`,
        categoriurl: `http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/categories`,
    }
    
    componentDidMount(){
        this.fetchBicycles(this.state.bikeurl)
        this.fetchCategories(this.state.categoriurl)
    }

    onChange = data => {
        this.setState({
            [data.type]:{
                ...this.state[data.type],
                value: data.value
            }
        })
    }

    fetchCategories = url => {
        fetch(url)
        .then(response => response.json())
        .then(data => this.storeCategories(data))
        .catch(error => console.log(error))
    }

    fetchBicycles = url =>{
        fetch(url)
        .then(response => response.json())
        .then(data => this.storeData(this.state.bicycles ,data ))
        .catch(error => console.log(error))
    }

    storeData(arrName, data){
            arrName = data.map( bicycle => {
            //      [ id, count, link, name, _links ]

            //     const { id, count, link, name, _links } = { id: 20, count: 4, link: "", name: "nameString", _links: "httpString" }
                
                Object.assign( bicycle, { ...this.para })
                console.log(bicycle)
                return { bicycle }
             } )
             this.setState({arrName})
             console.log("Test",arrName)
         }

    storeCategories = data => {
        
        const categories = data.map(result => {
            const { id, count, link, name, _links } = result
            return { id, count, link, name, _links }
        } )
        this.setState({ categories })
        console.log("mit categori array", categories)
    }

    storeBicycles = data => {
        console.log("arrayet før jeg har deconstrutet det",data)
        const bicycles = data.map( result => {
            const { id, title, _embedded, excerpt, content } = result
            return { id, title, _embedded, excerpt, content}            
           
        })
        this.setState({ bicycles })
        console.log("mit array",bicycles)
             
    }



    render(){
        return (
        <section className="main">
            <h2>To Be Made</h2>
            <div className={"Placeholder"}>
                {this.state.bicycles.map( bicycle => (
                    <BicycleItem key={bicycle.id} bicycle={bicycle} />
                    ))
                }
            </div>
            <div className={"placeholder"}>

            <Listview  
            {...this.state}

            />
                
            </div>
        </section>
        )
    }
}

export default Main