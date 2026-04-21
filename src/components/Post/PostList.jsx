import PostCard from './PostCard'

function PostList({ posts, onLike, onDelete }) {
  if (posts.length === 0) {
    return <p>No posts found. Try creating one.</p>
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() => onLike(post.id)}
          onDelete={() => onDelete(post.id)}
        />
      ))}
    </div>
  )
}

export default PostList
