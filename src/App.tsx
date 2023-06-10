import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {Box, Container, Grid, Paper, Typography} from '@mui/material';

export type FilterValuesType = "all" | "active" | "completed";
export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "Тестовое задание", isDone: false},
        {id: v1(), title: "Прекрасный код", isDone: true},
        {id: v1(), title: "Покрытие тестами", isDone: false},
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

    function changeStatus(id: string, isDone: boolean) {
        let task = tasks.find(t => t.id === id);
        if (task) {
            task.isDone = isDone;
            setTasks([...tasks]);
        }
    }

    function changeTaskTitle(id: string, newValue: string) {
        let task = tasks.find(t => t.id === id);
        if (task) {
            task.title = newValue;
            setTasks([...tasks]);
        }
    }

    function clearCompletedTasks() {
        let filteredTasks = tasks.filter(t => !t.isDone);
        setTasks(filteredTasks);
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    return (
        <div className="App">
            <Container fixed>
                <Grid container justifyContent="center" style={{padding: "20px 0px"}}>
                    <Paper style={{ padding: "20px", margin: "10px", backgroundColor: "lightgray", boxShadow: "none" }}>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100px">
                            <Typography variant="h4" component="h2" color="darkgray" gutterBottom>
                                TODOS
                            </Typography>
                            <Typography variant="body2" component="p" gutterBottom>
                                Тестовое задание Дмитрия Николаева
                            </Typography>
                        </Box>
                        <Paper style={{ padding: "10px", boxShadow: "none" }}>
                            <Todolist
                                tasks={tasksForTodolist}
                                removeTask={removeTask}
                                changeFilter={setFilter}
                                addTask={addTask}
                                changeTaskStatus={changeStatus}
                                filter={filter}
                                changeTaskTitle={changeTaskTitle}
                                clearCompletedTasks={clearCompletedTasks}
                            />
                        </Paper>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
}

export default App;

