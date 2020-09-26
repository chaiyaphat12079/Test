import React, { Component } from 'react'
import {connect} from 'react-redux'
class CommentForm extends Component{
    handleSubmit = (e) =>{
        e.preventDefault()  //ไม่ต้องรีหน้า
        const name = this.getName.value //ดึงค่าตากตัวแปร getName
        const message = this.getMessage.value //ดึงค่าตากตัวแปร getMessage

        //Object
        const data = {
            id: new Date(),
            name,
            message,
            editing:false
        }
        this.props.dispatch({
            type:"ADD_COMMENT",
            data
        })
        this.getMessage.value = ""
        this.getName.value = ""
        console.log(data);
    }

    render(){
        return(
            <div>
                <h1>Add Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input)=>this.getName = input}/><br /><br />
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input)=>this.getMessage = input} /><br /><br />
                    <button>Comment</button>
                </form>
            </div>
        )
    }
}
export default connect() (CommentForm)