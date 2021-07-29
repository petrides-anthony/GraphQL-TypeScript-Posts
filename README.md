# GraphQL-TypeScript-Posts

## About
A GraphQL server written with the following technology in order to act as a template and living example:
- Apollo Client
- Node
- TypeScript
- Axios

The data used in this project comes from the free jsonplaceholder api available at https://jsonplaceholder.typicode.com/


## Run Project
- `yarn`
- `yarn build`
- `yarn start`

## Sample Playground Queries
### Users Query
```
query Users {
  users {
    id
    name
    username
    email
    address {
      street
      suite
      city
      zipcode
      geo {
        lat
        lng
      }
    }
    phone
    website
    company {
      name
      catchPhrase
      bs
    }
  }
}
```

### Posts query
```
query Posts {
  posts {
    userId
    id
    title
    body
  }
}
```
