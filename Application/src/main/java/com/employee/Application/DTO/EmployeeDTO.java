package com.employee.Application.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDTO
{
    private Long Id;
    private String Firstname;
    private String Lastname;
    private String Email;
}
