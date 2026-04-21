function Header() {
  return (
    <header className="header">
      <div>
        <h1>CommunityHub</h1>
        <p>Connect, learn, and share.</p>
      </div>
      <nav>
        <a href="#lessons">Lessons</a>
        <a href="#community">Community Feed</a>
        <a href="#profile">Profile</a>
      </nav>
      <button className="btn btn-secondary btn-small">Login</button>
    </header>
  )
}

export default Header
