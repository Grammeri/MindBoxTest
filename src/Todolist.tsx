import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const addTask = () => {
        if (newTaskTitle.trim() === '') return;

        const newTask = {
            id: uuidv4(),
            title: newTaskTitle,
            isDone: false,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
        setNewTaskTitle('');
    };

    return (
        <div>
            <h2>Todolist</h2>

            <div>
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
}
