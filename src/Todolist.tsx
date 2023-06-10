import React, { ChangeEvent } from 'react';
import { FilterValuesType } from './App';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';
import IconButton from '@mui/material/IconButton/IconButton';
import { Delete } from '@mui/icons-material';
import { Button, Checkbox } from '@mui/material';
import '../src/App.css';

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
};

type PropsType = {
    tasks: Array<TaskType>;
    removeTask: (taskId: string) => void;
    changeFilter: (value: FilterValuesType) => void;
    addTask: (title: string) => void;
    changeTaskStatus: (id: string, isDone: boolean) => void;
    filter: FilterValuesType;
    changeTaskTitle: (taskId: string, newTitle: string) => void;
    clearCompletedTasks: () => void;
};

export function Todolist(props: PropsType) {
    const activeTasksCount = props.tasks.filter(t => !t.isDone).length;
    const addTask = (title: string) => {
        props.addTask(title);
    };

    const onAllClickHandler = () => props.changeFilter('all');
    const onActiveClickHandler = () => props.changeFilter('active');
    const onCompletedClickHandler = () => props.changeFilter('completed');
    const onClearCompletedClickHandler = () => props.clearCompletedTasks();

    return (
        <div data-testid={'Todolist'}>
            <AddItemForm addItem={addTask} />
            <div>
                {props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id);
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue);
                    };
                    const onTitleChangeHandler = (newValue: string) => {
                        props.changeTaskTitle(t.id, newValue);
                    };

                    const taskClassName = t.isDone ? 'task-item is-done' : 'task-item';

                    return (
                        <div key={t.id} className={taskClassName}>
                            <Checkbox
                                checked={t.isDone}
                                color="primary"
                                onChange={onChangeHandler}
                            />

                            <EditableSpan value={t.title} onChange={onTitleChangeHandler} />
                            <IconButton onClick={onClickHandler}>
                                <Delete />
                            </IconButton>
                        </div>
                    );
                })}
            </div>
            <div>
        <span style={{ marginRight: '20px' }}>
          Active tasks: {activeTasksCount}
        </span>
                <Button
                    variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'inherit'}
                >
                    All
                </Button>
                <Button
                    variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}
                >
                    Active
                </Button>
                <Button
                    variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}
                >
                    Completed
                </Button>
                <Button color={'secondary'} onClick={onClearCompletedClickHandler}>
                    Clear Completed
                </Button>
            </div>
        </div>
    );
}
