import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Menu from '../components/menu'
import Navbar from '../components/navbar'
import Term from '../components/term'

const Page = ({letter}) => {
  const termsData = useStaticQuery(graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___slug }) {
      nodes {
        frontmatter {
          ID
          createdAt
          description
          slug
          tag
          title
        }
      }
    }
  }
  `)

  const terms = termsData.allMarkdownRemark.nodes.filter((term) => {
    if(query) {
      return term.frontmatter.tag == letter;
    } else {
      return term
    }
  })
    return (
       
      <main >
      <title>{letter} | A to Z</title>
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

export default Page
