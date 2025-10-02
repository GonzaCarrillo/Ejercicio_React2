import { useState } from 'react'

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Agregar nueva tarea
  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  // Marcar como completada/no completada
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Manejar Enter en el input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Calcular totales
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="todo-list">
      <h2>Lista de Tareas</h2>
      
      <div className="add-todo">
        <input
          type="text"
          placeholder="Agregar nueva tarea..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>
          Agregar
        </button>
      </div>

      <div>
        <p>
          <strong>Total de tareas:</strong> {totalTasks}
        </p>
        <p>
          <strong>Completadas:</strong> {completedTasks} / {totalTasks}
        </p>
      </div>

      {tasks.length === 0 ? (
        <p>No hay tareas. Agrega una nueva</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                className="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              
              <span 
                className={`todo-text ${task.completed ? 'completed' : ''}`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.text}
              </span>
              
              <button 
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;