import './button.css'

function MyButton({ children, primaryColor, secondaryColor }) {

  const btn = document.querySelector(':root')

  return (
    <>
      <button className="my-button"
        {...btn.style.setProperty('--primary-color', primaryColor)}
        {...btn.style.setProperty('--secondary-color', secondaryColor)}>
        {children}
      </button>
    </>
  )
}

export default MyButton