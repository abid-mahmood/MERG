"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var count = 20;
var name = "Abid Mahmood Butt";
var age = 25;

var schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      id: {
        type: _graphql.GraphQLID,
        description: "This is the identifier",
        resolve: function resolve() {
          return parseInt(Math.random() * 10);
        }
      },
      count: {
        type: _graphql.GraphQLInt,
        description: "The count",
        resolve: function resolve() {
          return count;
        }
      },
      name: {
        type: _graphql.GraphQLString,
        description: "A name must",
        resolve: function resolve() {
          return name;
        }
      },
      age: {
        type: _graphql.GraphQLInt,
        description: "Age of a student",
        resolve: function resolve() {
          return age;
        }
      }
    }
  })
});

exports["default"] = schema;
module.exports = exports["default"];