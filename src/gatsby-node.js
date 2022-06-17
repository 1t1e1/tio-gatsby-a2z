const path = require(`path`)



/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
    if (!alphabet.length) {
      return
    }
 
  
  
    await createIndividualPages({  alphabet, gatsbyUtilities })


}

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualPages = async ({ alphabet, gatsbyUtilities }) => {
    let template="./src/templates/page.js"
    await Promise.all(
        alphabet.map( ( letter ) => {
     console.log(letter)
        // createPage is an action passed to createPages
        // See https://www.gatsbyjs.com/docs/actions#createPage for more info
        gatsbyUtilities.actions.createPage({
          // Use the WordPress uri as the Gatsby page path
          // This is a good idea so that internal links and menus work 👍
          path: letter,

          // use the blog post template as the page component
          component: path.resolve(template),

          // `context` is available in the template as a prop and
          // as a variable in GraphQL.
          context: {
            // we need to add the post id here
            // so our blog post template knows which blog post
            // the current page is (when you open it in a browser)
            letter: letter
          },
        })
        }
      )
    )
  }


