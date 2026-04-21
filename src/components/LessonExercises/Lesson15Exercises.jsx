import Card from '../shared/Card'
import Button from '../shared/Button'

function Greeting({ name = 'Guest' }) {
  return <p>Hello, {name}!</p>
}

function Lesson15Exercises() {
  const today = new Date().toLocaleDateString()
  const hour = new Date().getHours()
  const timeMessage =
    hour < 12 ? 'Good morning!' : hour < 18 ? 'Good afternoon!' : 'Good evening!'

  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn components and JSX step by step.',
      author: 'Alice',
      date: 'Apr 21, 2026',
    },
    {
      id: 2,
      title: 'Props in Practice',
      excerpt: 'Passing data makes components reusable.',
      author: 'Bob',
      date: 'Apr 20, 2026',
    },
  ]

  return (
    <section id="lessons">
      <h2>Lesson 15 Exercises</h2>
      <div className="exercise-grid">
        <Card title="15.1 JSX Practice">
          <h4>Daniel Wahome</h4>
          <p>I am learning React to build modern interfaces.</p>
          <p>I enjoy turning ideas into usable products.</p>
          <p>I am practicing component-based architecture this week.</p>
          <p>Today: {today}</p>
          <p>{timeMessage}</p>
        </Card>

        <Card title="15.2 Components + 15.3 Props">
          <Greeting name="Alice" />
          <Greeting name="Bob" />
          <Greeting name="Charlie" />
          {posts.map((post) => (
            <article key={post.id} className="mini-post">
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
              <small>
                By {post.author} on {post.date}
              </small>
            </article>
          ))}
        </Card>

        <Card title="15.4 Composition and Reusable Button">
          <p>This section demonstrates children-based composition with Card.</p>
          <div className="btn-row">
            <Button text="Submit" />
            <Button text="Cancel" variant="secondary" />
            <Button text="Delete" variant="danger" />
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Lesson15Exercises
