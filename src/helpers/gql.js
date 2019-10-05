import { GraphQLClient } from 'graphql-request'

export default function gql() {
    let gql = localStorage.authToken ?
        new GraphQLClient("/graphql", { headers: { Authorization: "Bearer " + localStorage.authToken } }) :
        new GraphQLClient("/graphql", {})
    return gql
}