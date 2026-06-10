package com.example.demo.service;
import java.util.ArrayList;
import java.util.List;
import com.example.demo.model.Student;
import org.springframework.stereotype.Service;
@Service
public class StudentService {
    private List<Student> studentList = new ArrayList<>();
    public String addStudent(Student student) {
        studentList.add(student);
        return "Student added successfully";
    }
    public List<Student> getAllStudents() {
        return studentList; }
    public Student getStudentById(int id) {
        for (Student s : studentList) {
            if (s.getId() == id) {
                return s;
            }
        }
        return null; }
    public String updateStudent(int id, Student updatedStudent) {
        for (Student s : studentList) {
            if (s.getId() == id) {
                s.setName(updatedStudent.getName());
                s.setCourse(updatedStudent.getCourse());
                s.setGrade(updatedStudent.getGrade());
                return "Student updated successfully";
            }
        }
        return "Student not found";
    }
    public String deleteStudent(int id) {
        for (Student s : studentList) {
            if (s.getId() == id) {
                studentList.remove(s);
                return "Student deleted successfully";
            }
        }
        return "Student not found";
    }
}