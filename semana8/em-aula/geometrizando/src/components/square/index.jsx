export default function Square(props) {
  const titulo = props.title
  return (
    <>
    <span>{titulo}</span>
    <div style={
      {background: props.background}
    } className="square"></div>
    </>
  )
}