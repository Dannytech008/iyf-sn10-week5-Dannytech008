import { useState } from 'react'
import Button from '../shared/Button'
import Input from '../shared/Input'

function CreatePost({ onCreatePost }) {
  const [formData, setFormData] = useState({ title: '', content: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.title.trim() || !formData.content.trim()) {
      return
    }

    onCreatePost(formData)
    setFormData({ title: '', content: '' })
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <h3>Create a New Post</h3>
      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Post title"
        required
      />
      <label className="input-group">
        <span>Content</span>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your post..."
          required
        />
      </label>
      <Button text="Publish" type="submit" />
    </form>
  )
}

export default CreatePost
