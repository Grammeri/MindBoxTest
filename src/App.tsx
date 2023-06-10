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
    {id: v1(), title: "Тестовое задание", isDone: true},
    {id: v1(), title: "Прекрасный код", isDone: true},
    {id: v1(), title: "Покрытие тестами", isDone: false},
  ]);

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

                />
              </Paper>
            </Paper>
          </Grid>
        </Container>
      </div>
  );
}

export default App;
