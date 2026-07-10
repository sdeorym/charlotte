function Button({content, isOpen, onClick}) {
  return (
    <>
        <button onClick={onClick}>{content}</button>
    </>
  )
}

export default Button