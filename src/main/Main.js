import React from "react"
import "./Main.css"
import Listview from "./Navigation/Listview";

class Main extends React.Component{
 
    state = {
        bicycles: [],
        categories: [],
        url: `http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/`,
        bikeurl: `http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/product?_embed`,
        categoriurl: `http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/categories`,
        categoriimgurl: `http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/posts?categories=`,
    }
    
    componentDidMount(){
        this.fetchBicycles(this.state.bikeurl)
        this.fetchCategories(this.state.categoriurl)
    }

    setCategories = categories => {
        this.setState({categories})
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

    async fetchBicycles(url){
        
        const response = await fetch(url)
        const data = await response.json()
        return this.storeBicycles(data)
    }

    // fetchCategoryImage(url, id) {
    //     console.log("fetchCategoryImage", id)
    //     return fetch(url+id)
    //     .then(response => response.json())
    //     .then(data =>  this.returnCategoryImage(data))
    //     .catch(error => console.log(error))        
    // }
    
   async fetchCategoryImage(url, id) {
        console.log("fetchCategoryImage", id)
        const response = await fetch(url+id);
        const data = await response.json()
        return this.returnCategoryImage(data);
        /*return fetch(url+id)
        .then(response => response.json())
        .then(data =>  this.returnCategoryImage(data))
        .catch(error => console.log(error))        */
    }
    
    returnCategoryImage = categoryObj => {
        console.log("returnCategoryImage",categoryObj);
        
        return categoryObj.map(result => {
            const imageurl = result.featured_image_urls.full[0]
            return imageurl
        })

    
    }

    storeCategories = (data) => {

        console.log("storeCategories", data)
        
        const categories = data.map(async result => {
            const { id, count, link, name, _links } = result
            const categoriImg = await this.fetchCategoryImage(this.state.categoriimgurl, id)

            return { id, count, link, name, _links, categoriImg  }
            
        } )
        Promise.all(categories).then(result =>  
            {
                this.setState({ categories : result })
                console.log("categories!!!!!!!",result)
        })

       
    }

    storeBicycles = data => {
        const bicycles = data.map( result => {
            const { id, title, _embedded, excerpt, content } = result
            return { id, title, _embedded, excerpt, content}            
           
        })
        this.setState({ bicycles })
             
    }



    render(){
        return (
        <section className="main">
            <h2>To Be Made</h2>
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