import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userReducer } from '../../reducers/user'
import './add.scss'
import axios from 'axios'
import { url, headers } from '../../config'
class AddCategory extends Component{
    state = {
        name : '',
        message : ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }
    handleSubmit = (e) => {
        const { name } = this.state        
        e.preventDefault()
        axios.post( url + '/category' , { name } , headers(this.props.user.token)  )
        .then(res=>{
            this.props.update()
            this.setState({ name: '', message: 'Success add category' })
        })
        .catch(res=>{
            this.setState({ message: 'Failed add category' })
        })
    }
    render(){
        const { name, } = this.state
        return(
            <div>
                <div className="add-category">
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Add category" onChange={this.handleChange} value={name} name="name" type="text"/>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return({
        user:userReducer
    })
}
export default connect(mapStateToProps)(AddCategory)