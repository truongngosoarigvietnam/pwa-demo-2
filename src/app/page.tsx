"use client";

import { useState } from "react";

export default function Home() {
    const [todos, setTodos] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (!input.trim()) return;
        setTodos((prev) => [...prev, input.trim()]);
        setInput("");
    };

    const removeTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <main className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Todo App</h1>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    className="border px-2 py-1 flex-1"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTodo()}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-1"
                    onClick={addTodo}
                >
                    Add
                </button>
            </div>
            <ul className="space-y-2">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center border p-2 rounded"
                    >
                        <span>{todo}</span>
                        <button
                            className="text-red-500"
                            onClick={() => removeTodo(index)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
