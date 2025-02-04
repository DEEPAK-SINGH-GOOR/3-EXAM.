import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import './validation.css';

const courseSchema = z.object({
    courseName: z.string().min(3, 'Min 3 chars').max(100, 'Too long'),
    description: z.string().min(10, 'Min 10 chars').max(500, 'Too long'),
    price: z.number().min(1, 'Min 1').max(10000, 'Too high'),
});

const CourseForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(courseSchema),
    });
    
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("http://localhost:8090/course/all");
                setCourses(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };
        fetchCourses();
    }, []);

    const addCourse = async (data) => {
        try {
            const response = await axios.post("http://localhost:8090/course/create", data);
            console.log("Course added:", response.data);
            setCourses([...courses, response.data]);
        } catch (error) {
            console.error("Error adding course:", error);
        }
    };

    return (
        <div>
            <h2>Add New Course</h2>
            <form onSubmit={handleSubmit(addCourse)}>
                <input type="text" placeholder="Course Name" {...register('courseName')} />
                {errors.courseName && <p>{errors.courseName.message}</p>}

                <textarea placeholder="Course Description" {...register('description')} />
                {errors.description && <p>{errors.description.message}</p>}

                <input type="number" placeholder="Price" {...register('price', { valueAsNumber: true })} />
                {errors.price && <p>{errors.price.message}</p>}

                <button type="submit">Add Course</button>
            </form>

            <h2>Available Courses</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <h3>{course.courseName}</h3>
                        <p>{course.description}</p>
                        <p>Price: ${course.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseForm;
