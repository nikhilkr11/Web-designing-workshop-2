package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @GetMapping("/")
    public String welcome() {
        return "Welcome to Student API";
    }

    @GetMapping("/student")
    public Student getStudent() {
        return new Student(101, "Nitish", "BTech");
    }

    @PostMapping("/addstudent")
    public String addStudent(@RequestBody Student student) {
        return "Student Added: " + student.getName();
    }
}