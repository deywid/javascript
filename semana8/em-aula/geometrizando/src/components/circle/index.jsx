function Circle({background, title}){
  return (
    <>
    <span>{title}</span>
    <div style={
      {background: background}
      } className="circle"></div>
    </>
  )
}

export default Circle;