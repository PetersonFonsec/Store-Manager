const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')

const resolvers  = require('../resolvers')
const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

module.exports = server