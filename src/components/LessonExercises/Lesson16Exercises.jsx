import { useMemo, useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'

function Lesson16Exercises() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn useState', completed: false },
    { id: 2, text: 'Practice event handling', completed: false },
  ])

  const addTodo = () => {
    if (!newTodo.trim()) return
    setTodos((prev) => [...prev, { id: Date.now(), text: newTodo, completed: false }])
    setNewTodo('')
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    alert(`Form submitted: ${name} | ${email} | ${message}`)
    setName('')
    setEmail('')
    setMessage('')
  }

  const [likedPosts, setLikedPosts] = useState([
    { id: 1, title: 'First Post', likes: 0 },
    { id: 2, title: 'Second Post', likes: 0 },
  ])

  const totalLikes = useMemo(
    () => likedPosts.reduce((sum, post) => sum + post.likes, 0),
    [likedPosts],
  )

  const handleLike = (id) => {
    setLikedPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post,
      ),
    )
  }

  return (
    <section>
      <h2>Lesson 16 Exercises</h2>
      <div className="exercise-grid">
        <Card title="16.1 useState + 16.2 Events">
          <p>Count: {count}</p>
          <div className="btn-row">
            <Button text="Increment" onClick={() => setCount((prev) => prev + 1)} />
            <Button
              text="Decrement"
              variant="secondary"
              onClick={() => setCount((prev) => prev - 1)}
            />
            <Button text="Reset" variant="danger" onClick={() => setCount(0)} />
          </div>
          <p>Toggle is {isOn ? 'ON' : 'OFF'}</p>
          <Button text="Toggle" onClick={() => setIsOn((prev) => !prev)} />
        </Card>

        <Card title="Controlled Form">
          <form onSubmit={handleFormSubmit} className="stack-form">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
            <input
              value={email}
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
            />
            <Button text="Send" type="submit" />
          </form>
        </Card>

        <Card title="16.3 Arrays and Objects in State">
          <div className="todo-entry">
            <input
              value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}
              placeholder="Add todo"
            />
            <Button text="Add" onClick={addTodo} />
          </div>
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id}>
                <span
                  className={todo.completed ? 'todo-done' : ''}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
                <Button
                  text="Delete"
                  size="small"
                  variant="danger"
                  onClick={() => deleteTodo(todo.id)}
                />
              </li>
            ))}
          </ul>
        </Card>

        <Card title="16.4 Lifting State Up">
          <p>{likedPosts.length} posts, {totalLikes} total likes</p>
          {likedPosts.map((post) => (
            <div key={post.id} className="lifted-row">
              <span>{post.title}</span>
              <Button
                text={`Like (${post.likes})`}
                size="small"
                onClick={() => handleLike(post.id)}
              />
            </div>
          ))}
        </Card>
      </div>
    </section>
  )
}

export default Lesson16Exercises
