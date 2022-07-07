import { NavLink } from "react-router-dom";
const active={
color:"aqua",
textDecoration:"none"
}
const basestyle={
  color:"black",
  textDecoration:"none"
}
export default function Navbar() {
  return <div style={{display:"flex",gap:"3rem",background:"red",justifyContent:"center"}}>
    <NavLink style={({isActive})=>(isActive ? active:basestyle)} to="/">Home</NavLink>
    <NavLink  style={({isActive})=>(isActive ? active:basestyle)} to="/product">Product page</NavLink>
  </div>;
}
