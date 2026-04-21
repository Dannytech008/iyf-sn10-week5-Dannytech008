import Button from '../shared/Button'
import Card from '../shared/Card'

function PostCard({ post, onLike, onDelete }) {
  return (
    <Card variant="highlight">
      <article className="post-card">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="post-meta">
          <span>By {post.author}</span>
          <span>{post.date}</span>
        </div>
        <div className="post-actions">
          <Button text={`Like (${post.likes})`} size="small" onClick={onLike} />
          <Button
            text="Delete"
            variant="danger"
            size="small"
            onClick={onDelete}
          />
        </div>
      </article>
    </Card>
  )
}

export default PostCard
