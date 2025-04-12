import Button from "./Button";
function Background({btnColor,setColor}){
  console.log(btnColor)
  return(
    <div className='main'style={{ backgroundColor: btnColor }}>
      <div>
        <h1>Background Changer</h1>
      </div>
      <div className="butn_container">
        <Button btnText_color ='white' butnText ="Blue" btnColor = "Blue" setColor={setColor}/>
        <Button btnText_color ='white' butnText ="Red" btnColor = "Red" setColor={setColor}/>
        <Button btnText_color ='white' butnText ="Green" btnColor = "Green" setColor={setColor}/>
        <Button btnText_color ='black' butnText ="Yellow" btnColor = "Yellow" setColor={setColor}/>
        <Button btnText_color ='black' butnText ="White" btnColor = "White" setColor={setColor}/>
        <Button btnText_color ='black' butnText ="Orange" btnColor = "Orange" setColor={setColor}/>
      </div>
    </div>
  )
}
export default Background;