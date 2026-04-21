import { useMemo, useState } from 'react'
import Header from './components/Layout/Header'
import Sidebar from './components/Layout/Sidebar'
import Footer from './components/Layout/Footer'
import CreatePost from './components/Post/CreatePost'
import PostList from './components/Post/PostList'
import UserProfile from './components/User/UserProfile'
import UserCard from './components/User/UserCard'
import Lesson15Exercises from './components/LessonExercises/Lesson15Exercises'
import Lesson16Exercises from './components/LessonExercises/Lesson16Exercises'
import './App.css'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'From HTML to React: My Week 8 Highlights',
      excerpt: 'JSX and reusable components made my UI code cleaner and faster to build.',
      author: 'Daniel Wahome',
      date: 'Apr 21, 2026',
      likes: 3,
    },
    {
      id: 2,
      title: 'State Management Basics That Finally Clicked',
      excerpt: 'useState, controlled forms, and lifting state up now feel practical.',
      author: 'Daniel Wahome',
      date: 'Apr 20, 2026',
      likes: 5,
    },
  ])
  const [searchQuery, setSearchQuery] = useState('')

  const user = {
    name: 'Daniel Wahome',
    email: 'danygithinji8@gmail.com',
    bio: 'Frontend learner building CommunityHub with React fundamentals.',
  }

  const tags = ['React', 'JSX', 'State', 'Props', 'Forms', 'Vite']

  const popularPosts = [
    { id: 101, title: '5 JSX patterns for cleaner components' },
    { id: 102, title: 'When to split a component into smaller pieces' },
    { id: 103, title: 'Controlled forms made simple' },
  ]

  const visiblePosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts
    }

    const normalizedQuery = searchQuery.toLowerCase()

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery),
    )
  }, [posts, searchQuery])

  const handleCreatePost = (newPost) => {
    const createdPost = {
      id: Date.now(),
      title: newPost.title,
      excerpt: newPost.content,
      author: user.name,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      likes: 0,
    }

    setPosts((prevPosts) => [createdPost, ...prevPosts])
  }

  const handleLikePost = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post,
      ),
    )
  }

  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId))
  }

  return (
    <div className="app-shell">
      <Header />

      <main className="main-layout">
        <section className="content-column" id="community">
          <div className="section-heading">
            <h2>Community Feed</h2>
            <p>Practice posts for props, state updates, and list rendering.</p>
          </div>

          <div className="search-row">
            <label htmlFor="post-search">Search posts</label>
            <input
              id="post-search"
              type="text"
              placeholder="Search by title or content"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>

          <CreatePost onCreatePost={handleCreatePost} />
          <PostList
            posts={visiblePosts}
            onLike={handleLikePost}
            onDelete={handleDeletePost}
          />
        </section>

        <Sidebar popularPosts={popularPosts} tags={tags} />
      </main>

      <section className="profile-section">
        <UserProfile user={user} />
        <UserCard user={user} />
      </section>

      <Lesson15Exercises />
      <Lesson16Exercises />

      <Footer />
    </div>
  )
}

export default App
