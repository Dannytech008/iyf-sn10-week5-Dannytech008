function Card({ children, title, variant = 'default' }) {
  return (
    <section className={`card card-${variant}`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </section>
  )
}

export default Card
