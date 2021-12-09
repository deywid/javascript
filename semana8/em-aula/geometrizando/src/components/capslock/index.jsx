function CapsLock({ children }) {
  const textoEmCaps = children.toUpperCase();
  return (
    <span>{textoEmCaps}</span>
  )
}

export default CapsLock