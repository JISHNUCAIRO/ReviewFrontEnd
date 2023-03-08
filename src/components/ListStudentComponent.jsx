import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then( res => {
            this.setState({students: this.state.students.filter(Students => Students.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/view/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/edit/${id}`);
    }

    componentDidMount(){
        StudentService.getStudent().then((res) => {
            this.setState({students: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add/_add');
    }

    render() {
        return (
            <div>
                 <br></br>
                 <div className = "card p-5 row cardshadow3 " id='t'>
                        <table className = "table table-bordered o" id='t1'>

                            <thead>
                                <tr>
                                    <th className='text-center'> Name</th>
                                    <th className='text-center'> Department</th>
                                    <th className='text-center'> Email Id</th>
                                    <th className='text-center'> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        Student => 
                                        <tr key = {Student.id}>
                                             <td> {Student.name}</td>
                                             <td> {Student.department}</td>
                                             <td> {Student.emailId}</td>
                                             <td className='text-center'>
                                                 <button onClick={ () => this.viewStudent(Student.id)} className="b1">View</button>
                                                 <button onClick={ () => this.editStudent(Student.id)} className="b2">Edit</button>
                                                 <button onClick={ () => this.deleteStudent(Student.id)} className="b3">Delete</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 <div className = "row mt-4">
                    <button className="b4" onClick={this.addStudent}>  Add </button>
                 </div>

            </div>
        )
    }
}

export default ListStudentComponent
