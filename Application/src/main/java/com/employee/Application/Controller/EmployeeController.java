package com.employee.Application.Controller;

import com.employee.Application.DTO.EmployeeDTO;
import com.employee.Application.Service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
@AllArgsConstructor
public class EmployeeController
{
    @Autowired
    private EmployeeService EmpSer;
    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getEmployees()
    {
        List<EmployeeDTO> EmpDto=EmpSer.getAllEmployees();
        return ResponseEntity.ok(EmpDto);
    }

    @PostMapping("/createEmployee")
    public ResponseEntity<EmployeeDTO> CreateEmp(@RequestBody EmployeeDTO EmpBody)
    {
        EmployeeDTO EmpDto=EmpSer.createEmployee(EmpBody);
        return ResponseEntity.ok(EmpDto);
    }
    @PutMapping("/UpdateEmployee/{id}")
    public ResponseEntity<EmployeeDTO> UpdateEmp(@RequestBody EmployeeDTO EmpBody,@PathVariable Long id)
    {
        EmployeeDTO EmpDto=EmpSer.updateEmployee(EmpBody,id);
        return ResponseEntity.ok(EmpDto);
    }
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDTO> getEmpById(@PathVariable Long id)
    {
        EmployeeDTO EmpDto=EmpSer.getEmpById(id);
        return ResponseEntity.ok(EmpDto);
    }

    @DeleteMapping("/deleteEmployee/{id}")
    public ResponseEntity<String> DeleteEmp(@PathVariable Long id)
    {
        EmpSer.DeleteEmployee(id);
        return ResponseEntity.ok("Employee Got Deleted");
    }
}
