import React,{useState,useEffect} from 'react'
import {ListEmp, DeleteEmployee} from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
//USESTATE Hook

/* The useState is a Hook 
(function) that allows you to define state variables 
in functional components. You pass the initial 
state to this function and it returns a variable with 
the current state value (not necessarily the initial state) and 
another function to update this value.*/

/*The useEffect Hook allows us to perform side effects (an action) in the function components. It does not use component lifecycle methods that are available in class components. Side effects have common features which most web applications need to perform, such as: 
Updating the DOM,
Fetching and consuming data from a server API,
Setting up a subscription, etc.*/




const ListEmpsComponent=()=>{
    const [employee,setEmployess] = useState([[]])
    const navigate = useNavigate()
    useEffect(()=>{
        getAllEmployees();
    },[])


const getAllEmployees=()=>{
    ListEmp().then((response)=>{
        setEmployess(response.data)
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
}
const removeEmployee = (employeeId) => {
    DeleteEmployee(employeeId).then((response) =>{
     getAllEmployees();

    }).catch(error =>{
        console.log(error);
    })
     
 }
 
 function addNewEmployee() {
    navigate('/add-employee')
}

const updateEmployee = (id) => {
    navigate(`/edit-employee/${id}`)
}

return(
    <div className='container'>
        <h2 className='text-center'>List Employees</h2>
        <button className = "btn btn-primary mb-2" onClick={addNewEmployee }>Add Employee</button>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Employee Id</th>
                <th>Employee Frist Name</th>
                <th>Employee Last Name</th>
                <th> Employee Email Id</th>
                <th> Actions </th>
            </thead>
            <tbody>
                {
                    employee.map(
                        emp=><tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstname}</td>
                        <td>{emp.lastname}</td>
                        <td>{emp.email}</td>
                        <td>
                                    <button className="btn btn-info" onClick={() => updateEmployee(emp.id)} >Update</button>
                                    <button className = "btn btn-danger" onClick = {() => removeEmployee(emp.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                         </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
)}
export default ListEmpsComponent;