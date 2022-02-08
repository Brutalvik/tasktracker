const Button = ({ className, text, onClick }) => {
  return (
    <div>
      {/* Global modular button */}
      <button className={className} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
