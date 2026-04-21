import { useState } from 'react'
import Button from '../shared/Button'

function UserProfile({ user }) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <section className="user-profile" id="profile">
      <h2>User Profile</h2>
      <Button
        text={isVisible ? 'Hide Profile' : 'Show Profile'}
        variant="secondary"
        onClick={() => setIsVisible((prev) => !prev)}
      />
      {isVisible ? (
        <div className="profile-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.bio}</p>
        </div>
      ) : (
        <p>Profile is hidden.</p>
      )}
    </section>
  )
}

export default UserProfile
