package com.first.studentsystem.service;

import com.first.studentsystem.model.Student;
import java.util.List;
public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
