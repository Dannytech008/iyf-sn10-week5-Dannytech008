import Card from '../shared/Card'

function UserCard({ user }) {
  return (
    <Card title="User Card">
      <div className="user-card">
        <h4>{user.name}</h4>
        <p>{user.bio}</p>
      </div>
    </Card>
  )
}

export default UserCard
