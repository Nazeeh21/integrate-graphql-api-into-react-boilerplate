import { createClient } from "urql";

export const createUrqlClient = createClient({
  url: 'https://graphql-dummy-api.herokuapp.com/graphql'
})