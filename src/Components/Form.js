import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            year: '',
            posterImg: ''
        }
        this.changeHandle = this.changeHandle.bind(this)
    }

    changeHandle(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        const {title,year,posterImg} = this.state

        return<form className="Form">
            <input 
            name = "title" 
            value = {title} 
            placeholder = 'Title'
            onChange = {this.changeHandle}/>
            <input 
            name = "year" 
            value = {year} 
            placeholder = 'Year'
            onChange = {this.changeHandle}/>
            <input
            name = "posterImg" 
            value = {posterImg} 
            placeholder = 'Poster url'
            onChange = {this.changeHandle}/>
            <button type = 'submit' >Add Movie</button>

        </form>
    }
}


export default Form