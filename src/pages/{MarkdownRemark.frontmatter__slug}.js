import React from "react";
import { graphql } from "gatsby";
import Menu from "../components/menu";
import Navbar from "../components/navbar";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <main>
      <title>A to Z</title>
      <div className="flex bg-light min-h-screen">
        <div className="fixed h-full">
         <Menu />
        </div>
        <div className="flex flex-col lg:pl-80 pr-20 w-full">
          <Navbar />
          <article className="cms-content max-w-2xl">
            <h1 className="pb-5 text-3xl text-blue font-bold">{frontmatter.title}</h1>
            <div
              className="py-2 "
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </div>
      </div>
    </main>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        createdAt
        slug
        title
      }
    }
  }
`;
