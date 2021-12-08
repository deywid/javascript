function CapsLock({texto}){
  const textoEmCaps = texto.toUpperCase();
  return (
    <span>{textoEmCaps}</span>
  )
}

export default CapsLock