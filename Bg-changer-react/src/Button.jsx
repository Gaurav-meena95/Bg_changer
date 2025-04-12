function Button({butnText,btnColor,btnText_color,setColor}){
  function handelClick(){
    setColor(btnColor)

  }
  return(
    <button onClick={handelClick} style={{backgroundColor:btnColor, color:btnText_color}}>{butnText}</button>
  )
}
export default Button;