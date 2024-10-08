import axios from "axios";

//To get All Emloyee URL
const Employee_Base_Rest_Api_URL="http://localhost:8080/api/v1/employees";


//Retriving all Employees Data in a List
export const ListEmp=()=>{
    return axios.get(Employee_Base_Rest_Api_URL);
}

//Create Employee
export const CreateEmp=(employee)=>{
    console.log(employee)
    return axios.post(Employee_Base_Rest_Api_URL+"/createEmployee",employee);
}

//Find emp by ID
export const getElementById=(employeeId)=>{
    return axios.get(Employee_Base_Rest_Api_URL+'/'+employeeId);
}

//Update Employee
export const updateEmployee=(employeeId,employee) => {
    return axios.put(Employee_Base_Rest_Api_URL+'/UpdateEmployee/'+employeeId,employee);
}

//Delete Employee
export const DeleteEmployee=(employeeId) => {
    return axios.delete(Employee_Base_Rest_Api_URL+'/deleteEmployee/'+employeeId);
}