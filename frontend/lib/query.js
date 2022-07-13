export const PRODUCT_QUERY = `
query{
    products{
      data{
        attributes{
          title
          description
          price
          slug
          image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
    
  }

`;

//Now we can just export it and then import it wherever we want the data to be
