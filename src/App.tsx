import React, { useState } from 'react';
import { Todolist } from './components/Todolist';
import { v1 as uuidv1 } from 'uuid';

function App() {
    const [tasks, setTasks] = useState([
        { id: uuidv1(), title: 'Тестовое задание', isDone: true },
        { id: uuidv1(), title: 'Прекрасный код', isDone: true },
        { id: uuidv1(), title: 'Покрытие тестами', isDone: false },
    ]);

    return (
        <div className="App">
            <Todolist tasks={tasks} />
        </div>
    );
}

export default App;
