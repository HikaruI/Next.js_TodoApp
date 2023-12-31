import { Task } from "@/typs";
import React from 'react';
import Todo from "./Todo";

interface TosoListProps {
    todos: Task[];
}

const TodoList = ({ todos }: TosoListProps) => {
    return (
        <ul className="space-y-3">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo}/>
                

            ) )}

            
        </ul>

    );
};

export default TodoList;