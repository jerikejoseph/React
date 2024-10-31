import Labels from "./Labels";
function Section({title,para,isActive}) {
return(
    <div>
    <h1>{title}</h1>
    <p>{para}</p>
    <Labels isActive={isActive}/>
  
    <hr />
    <br />
    <hr />
</div>
)
}
export default Section;

