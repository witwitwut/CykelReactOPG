import React from "react"
import "./Main.css"
import Bicycles from "./bicycle/Bicycles";
import BicycleItem from "./bicycle/BicycleItem"

class Main extends React.Component{
 
    state = {
        bicycles: [],
        url: `http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/`,
        bikeurl: `http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/product?_embed`,
        
        
    }
    
    componentDidMount(){
        this.fetchBicycles(this.state.bikeurl)
    }

    onChange = data => {
        this.setState({
            [data.type]:{
                ...this.state[data.type],
                value: data.value
            }
        })
    }

    fetchBicycles = url =>{
        fetch(url)
        .then(response => response.json())
        .then(data => this.storeBicycles(data))
        .catch(error => console.log(error))
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

                {/* {this.state.bicycles.forEach(bike  => (
                    console.log("cykel",bike),
                        <BicycleItem key={bike.id} bicyle={bike} />
                    ))
                } */}
            </div>
        </section>
        )
    }
}

export default Main