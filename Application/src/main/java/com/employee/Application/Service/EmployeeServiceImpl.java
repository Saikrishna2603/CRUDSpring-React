package com.employee.Application.Service;

import com.employee.Application.DTO.EmployeeDTO;
import com.employee.Application.Entity.Employee;
import com.employee.Application.Exception.ResourceNotFound;
import com.employee.Application.Mapper.EmployeeMapper;
import com.employee.Application.Repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository empRepo;


    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> emp=empRepo.findAll();
        List<EmployeeDTO> EmpDto=emp.stream()
                .map((Emp)-> EmployeeMapper.MaptoEmployeeDto(Emp))
                .toList();

        return EmpDto;
    }

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO EmpDto) {
        Employee emp=EmployeeMapper.MaptoEmployee(EmpDto);
        Employee SavedEmp=empRepo.save(emp);

        return EmployeeMapper.MaptoEmployeeDto(SavedEmp);
    }

    @Override
    public EmployeeDTO updateEmployee(EmployeeDTO EmpDto,Long id) {
        Employee ExistingEmp=empRepo.findById(id).orElseThrow(()-> new ResourceNotFound("Employee Not Found"));
        ExistingEmp.setFirstname(EmpDto.getFirstname());
        ExistingEmp.setLastname(EmpDto.getLastname());
        ExistingEmp.setEmail(EmpDto.getEmail());

        empRepo.save(ExistingEmp);
        return EmployeeMapper.MaptoEmployeeDto(ExistingEmp);
    }

    @Override
    public void DeleteEmployee(Long id) {
            Employee emp=empRepo.findById(id).orElseThrow(()->new ResourceNotFound("Employee Not Found"));
                    empRepo.deleteById(id);

    }

    @Override
    public EmployeeDTO getEmpById(Long id) {
        Employee emp=empRepo.findById(id).orElseThrow(()->new ResourceNotFound("Employee Not found"));
        EmployeeDTO empDto=EmployeeMapper.MaptoEmployeeDto(emp);
        return  empDto;
    }
}
