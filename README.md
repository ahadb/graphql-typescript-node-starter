# GraphQL TypeScript Server 

A starter GraphQL Apollo Server & API in Node / Express with TypeScript. If you're new to GraphQL then clone the repo and start playing around with it instead of reading countless blog posts or books.

This should be all you need to get started on creating your GraphQL API or port your existing REST API over to GraphQL - it is agnostic of a persistence layer, you can choose what technology serves you best and factor it in, but right now we're serving from memory (you never want to do this in production and will need a DB).

## Installation

```
clone the repo
npm install
npm run start:ql
```

`npm run build` for prod when you've added in your peresistenc, etc.

## Getting Started 

Fundamentally you have one query and one mutation, the first is to get a listing and second to delete a listing - you can go from there in whichever direction you choose. Note the TypeScript types in your interfaces and `gql` template strings.

Start the server and head over to http://localhost:9000/v1/graph/api and start querying via the graphical GUI:

```bash
query {
  people {
    id
    name
    height
  }
}
```

```bash
mutation {
  deletePerson(id: "001") {
    id
    name
    height
  }
}
```

Make sure to check your docs and schemas tab for type details etc.

### Packages

We use just these packages for Node, TypeScript Types, Apollo, GraphQL (GraphQL schemas are part of graphQL package):

```json
"apollo-server-express": "^2.19.0",
"express": "^4.17.1",
"graphql": "^15.4.0"
"@types/body-parser": "^1.19.0",
"@types/express": "^4.17.9",
"@types/graphql": "^14.5.0",
"@types/node": "^14.14.14",
"@typescript-eslint/eslint-plugin": "^4.10.0",
"@typescript-eslint/parser": "^4.10.0",
"eslint": "^7.15.0",
"nodemon": "^2.0.6",
"ts-node": "^9.1.1",
"typescript": "^4.1.3"
```

### Schema

GraphQL schema is roughly modelled via the Star Wars API (SWAPI) so thanks to them. You can easily create your own 
data model, extend or adjust it.

## Road Map

Perhaps in the future I can add:

At a boilerplate level:

- [ ] More extenisble and configurable tooling, settings and data model
- [ ] Full fake server dependent on schema of your choice
- [ ] Generate build setup for types and schemas 
- [ ] Simple REST API (diff branch) so you can compare

At a GraphQL server / API level:

- [ ] Authentication / Authorization
- [ ] Cookies, Logger
- [ ] Registration
- [ ] Login, Logout
- [ ] Persistence: DB, Mongo, SQL, choice



