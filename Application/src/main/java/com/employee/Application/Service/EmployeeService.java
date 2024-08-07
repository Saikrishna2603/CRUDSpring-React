package com.employee.Application.Service;

import com.employee.Application.DTO.EmployeeDTO;

import java.util.*;

public interface EmployeeService
{
    List<EmployeeDTO> getAllEmployees();
    EmployeeDTO createEmployee(EmployeeDTO EmpDto);
    EmployeeDTO updateEmployee(EmployeeDTO EmpDto,Long id);
    void DeleteEmployee(Long id);
    EmployeeDTO getEmpById(Long id);
}
