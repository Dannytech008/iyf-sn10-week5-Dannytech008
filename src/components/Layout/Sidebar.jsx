function Sidebar({ popularPosts, tags }) {
  return (
    <aside className="sidebar">
      <section>
        <h3>About CommunityHub</h3>
        <p>
          CommunityHub is a learning-first social space where developers share
          practical tips and projects.
        </p>
      </section>

      <section>
        <h3>Popular Posts</h3>
        <ul>
          {popularPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Tags</h3>
        <div className="tag-list">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </aside>
  )
}

export default Sidebar
