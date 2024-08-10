package com.employee.Application.Mapper;

import com.employee.Application.DTO.EmployeeDTO;
import com.employee.Application.Entity.Employee;
import com.employee.Application.Service.EmployeeServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class EmployeeMapper
{


    private static final Logger logger = LoggerFactory.getLogger(EmployeeMapper.class);
    public static EmployeeDTO MaptoEmployeeDto(Employee emp)
    {
        logger.debug("in MaptoEmployeeDto");
        EmployeeDTO empDto=new EmployeeDTO();
        empDto.setEmail(emp.getEmail());
        empDto.setId(emp.getId());
        empDto.setFirstname(emp.getFirstname());
        empDto.setLastname(emp.getLastname());

        return empDto;

    }
    public static Employee MaptoEmployee(EmployeeDTO EmpDto)
    {
        logger.debug("in MaptoEmployee");
        Employee emp=new Employee();
        emp.setEmail(EmpDto.getEmail());
        emp.setFirstname(EmpDto.getFirstname());
        emp.setLastname(EmpDto.getLastname());
       // emp.setId(EmpDto.getId());
        if (EmpDto.getId() != null) {
            emp.setId(EmpDto.getId());
        }
        return emp;
    }
}
