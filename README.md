# GraphQL-TypeScript-Posts

## About
A GraphQL server written with the following technology in order to act as a template and living example:
- Apollo Client
- Node
- TypeScript
- Axios

The data used in this project comes from the free jsonplaceholder api available at https://jsonplaceholder.typicode.com/


## Run Project
- Clone
- `yarn build`
- `yarn start`

## Sample Playground Query
```
query Users {
  users {
    id
    name
    posts {
      title
      author {
        name
      }
    }
  }
}
```
