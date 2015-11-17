import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLID
} from "graphql"

let count = 20
let name = "Abid Mahmood Butt"
let age = 25

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      id: {
        type: GraphQLID,
        description: "This is the identifier",
        resolve: () => { return parseInt(Math.random()*10) }
      },
      count: {
        type: GraphQLInt,
        description: "The count",
        resolve: () => { return count } 
      },
      name: {
        type: GraphQLString,
        description: "A name must",
        resolve: () => { return name } 
      },
      age: {
        type: GraphQLInt,
        description: "Age of a student",
        resolve: () => { return age } 
      }
    }
  })
});

export default schema;