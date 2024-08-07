package com.employee.Application.Mapper;

import com.employee.Application.DTO.EmployeeDTO;
import com.employee.Application.Entity.Employee;

public class EmployeeMapper
{
    public static EmployeeDTO MaptoEmployeeDto(Employee emp)
    {
        EmployeeDTO empDto=new EmployeeDTO();
        empDto.setEmail(emp.getEmail());
        empDto.setId(emp.getId());
        empDto.setFirstname(emp.getFirstname());
        empDto.setLastname(emp.getLastname());

        return empDto;

    }
    public static Employee MaptoEmployee(EmployeeDTO EmpDto)
    {
        Employee emp=new Employee();
        emp.setEmail(EmpDto.getEmail());
        emp.setFirstname(EmpDto.getFirstname());
        emp.setLastname(EmpDto.getLastname());
        emp.setId(EmpDto.getId());

        return emp;
    }
}
