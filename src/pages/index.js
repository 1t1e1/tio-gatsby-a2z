import * as React from "react"
import Menu from '../components/menu'
import Navbar from '../components/navbar'
import Term from '../components/term'
// markup
const IndexPage = () => {
  const terms = [
    {
      'title':'Agile',
      'description':'Agile is a software development methodology that focuses on communication and feedback throughout the development process. It also emphasizes working software over comprehensive documentation, and each iteration that a team makes to its product is seen as an opportunity to perfect it. Agile continues to grow in popularity, and its focus on communication with users directly benefits digital products.'
    },
    {
      'title':'Agile',
      'description':'Agile is a software development methodology that focuses on communication and feedback throughout the development process. It also emphasizes working software over comprehensive documentation, and each iteration that a team makes to its product is seen as an opportunity to perfect it. Agile continues to grow in popularity, and its focus on communication with users directly benefits digital products.'
    },
    {
      'title':'Agile',
      'description':'Agile is a software development methodology that focuses on communication and feedback throughout the development process. It also emphasizes working software over comprehensive documentation, and each iteration that a team makes to its product is seen as an opportunity to perfect it. Agile continues to grow in popularity, and its focus on communication with users directly benefits digital products.'
    }
    ]
  return (
    <main >
      <title>A to Z</title>
      <div className="flex bg-light min-h-screen">
        <div className="fixed h-full">
          <Menu/>
        </div>
        <div className="flex flex-col lg:pl-80 pr-20">
        <Navbar/>
        <h1 className="text-xl  md:text-2xl lg:text-5xl max-w-2xl text-blue pt-10 pb-40 font-bold">We've listed all the 
        <span className="font-serif"> terms </span> 
        and <span className="font-serif"> definitions </span> that you'll want to know
        about digital products.</h1>
        <div className="">
        {terms.map((term, index) => ( 
          <Term index={index} term={term} />
          ))}
        </div>
        </div>
       
      </div>
      
      
      
    </main>
  )
}

export default IndexPage
