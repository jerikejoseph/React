import Section from './components/Section'
import  './App.css'

function App() {
const data=[
  {
    title:"songs",
    para:"ksks sks kskskk",
    isActive:false
  },
  {
    title:"novels",
    para:"ksks sks kskskk",
    isActive:true
  },
  {
    title:"drams",
    para:"ksks sks kskskk",
    isActive:false
  },
  {
    title:"movies",
    para:"ksks sks kskskk",
    isActive:true
  },

]


return(
  <div>
{
  data.map((dt,index)=><Section key={index} title={dt.title} para={dt.para} isActive={dt.isActive}/>)
}
  </div>
)
}
export default App
