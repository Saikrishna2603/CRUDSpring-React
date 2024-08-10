import React,{useEffect,useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { updateEmployee,CreateEmp,getElementById } from '../services/EmployeeService'

const EmplCmp=()=>{

    //We used useState() hook to create state variables in our functional components:
    const[firstname,setFirstName]=useState('')
    const[lastname,setLastName]=useState('')
    const[email,setEmail]=useState('')

    const navigate=useNavigate();

    //We retrieved the employee id from the route using the following line of code:
    const {id}=useParams();


    // /We created a JavaScript Function to handle the onClick Event (Form submit):
    const saveOrUpdateEmployee=(e)=>{
        e.preventDefault();

        const employee={firstname,lastname,email}

        console.log(employee);
        if(id){

            console.log("updae emp")
            updateEmployee(id,employee).then(response=>{
               // Navigated to list employees page import useNavigate() hook from the react-router-dom
                navigate('/employees');
            }).catch(error=>{
                console.log(error);
            });
            
        }
        else
        {
            console.log("create emp")
            CreateEmp(employee).then(response=>{
                console.log("------>"+response.data);
                navigate('/employees');
            }).catch(error=>{
                console.log(error);
            })
        }

    }
    useEffect(()=>{
        if(id){
            getElementById(id).then(response=>{
                setFirstName(response.data.firstname);
                setLastName(response.data.lastname);
                setEmail(response.data.email);
            }).catch(error=>{
                console.log(error);
            })
        }
    },[id])

    const pageTitle=()=>{
        if(id){
            return <h2 className="text-center">Update Employee</h2>
        }else{
            return <h2 className="text-center">Add Employee</h2>
        }
    }
    return(
        <div>
            <br></br>
            <div className="container">
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-ms-3'>
                        {
                            pageTitle()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name:</label>
                                    <input type="text" placeholder = "Enter first name" className="form-control" value={firstname} onChange={(e)=>setFirstName(e.target.value)}></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className="form-label">Last Name:</label>
                                    <input type="text" placeholder = "Enter last name" className="form-control" value={lastname
                                        } onChange={(e)=>setLastName(e.target.value)}></input>
                                    
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email:</label>
                                    <input type="email" placeholder = "Enter email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                                </div>
                                <button className="btn btn-success" onClick={(e)=>saveOrUpdateEmployee(e)}>submit</button>
                                {/*<Link to="/employees" className="btn btn-danger>Cancel</Link>*/}
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmplCmp