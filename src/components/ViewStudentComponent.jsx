import React, { Component } from 'react'
import StudentService from '../services/StudentService'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    render() {
        return (
            <div id='vb'>
                <br></br>
                <div className = "card col-md-6 offset-md-3 cardshadow3 mt-5" id='v'>
                    <h3 className = "text-center mt-5 text-secondary"> Student Details</h3>
                    <div className = "card-body">
                        <div className="row">
                                <div className="col-7">

                                        <div className = "row">
                                            <label className='co'> Name : </label>
                                            <div className='ml-4'> { this.state.student.name }</div>
                                        </div>
                                        <div className = "row">
                                            <label className='co'> Department : </label>
                                            <div className='ml-4'> { this.state.student.department }</div>
                                        </div>
                                        <div className = "row">
                                            <label className='co'> Email ID : </label>
                                            <div className='ml-4'> { this.state.student.emailId }</div>
                                        </div>
                                </div>
                        </div>
 
                    </div>
                    
                    <Link to='/' className='btn btn-secondary mt-3 mb-4' id='bv'><BsFillArrowLeftCircleFill/> Back</Link>

                </div>
            </div>
        )
    }
}

export default ViewStudentComponent
