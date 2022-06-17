import React from 'react'
import Term from '../components/term'




const Page = ({letter}) => {
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
       
            <div className="row post">
                <div className="container">                    
                    <h1>{letter}</h1>
                    {terms.map((term, index) => ( 
                      <Term index={index} term={term} />
                    ))}
                </div>
            </div>
       
    )
}

export default Page
