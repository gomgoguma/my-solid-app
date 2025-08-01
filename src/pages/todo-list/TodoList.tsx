import { createStore } from "solid-js/store";
import {For} from "solid-js";

type Todo = { id: number; text: string; done: boolean };

const TodoList = () => {
    // 배열 상태 생성
    const [todos, setTodos] = createStore<Todo[]>([
        { id: 1, text: "할 일 1", done: false },
        { id: 2, text: "할 일 2", done: false },
    ]);

    // 새 todolist 추가
    const addTodo = () => {
        const nextId = todos.length ? todos[todos.length - 1].id + 1 : 1;
        setTodos([...todos, { id: nextId, text: `할 일 ${nextId}`, done: false }]);
    };

    // 완료 상태 토글
    const toggleDone = (id: number) => {
        setTodos(
            todo => todo.id === id,
            "done",
            done => !done
        );
    };

    return (
        <div>
            <h3>할 일 목록</h3>
            <ul>
                <For each={todos}>
                    {(todo) => (
                        <li key={todo.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={() => toggleDone(todo.id)}
                                />
                                <span style={{ "text-decoration": todo.done ? "line-through" : "none" }}>
          {todo.text}
        </span>
                            </label>
                        </li>
                    )}
                </For>
            </ul>
            <button onClick={addTodo}>새로운 할 일 추가</button>
        </div>
    );
};

export default TodoList;
