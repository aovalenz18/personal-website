import NavBar from "./NavBar"
const sections = ["Home, Projects, Personal Life"]

export default function Home() {
  return (
    <>
    <div> Hello, welcome to my site !</div>
    {sections.map((sections, i)=> (
      <div key={i}>{sections}</div>
    ))}
    </>
  )
}
