import React, { Component } from 'react'
import {connect} from 'react-redux'
class EditComponent extends Component{
    handleSubmit = (e) =>{
        e.preventDefault()  //ไม่ต้องรีหน้า
        const newName = this.getName.value //ดึงค่าตากตัวแปร getName
        const newMessage = this.getMessage.value //ดึงค่าตากตัวแปร getMessage
        //Object
        const data = {
            newName,
            newMessage
        }
        // console.log(data);
        //Edit data Object Complete
        this.props.dispatch({
            type:"UPDATE_COMMENT",
            id:this.props.comment.id,
            data
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input)=>this.getName = input} defaultValue={this.props.comment.name}/><br /><br />
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input)=>this.getMessage = input} defaultValue={this.props.comment.name} /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        )
    }
}
export default connect() (EditComponent)