import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import deepMerge from "ts-deepmerge";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// uri: "https://graphql.org/swapi-graphql/",
// uri: "https://api.spacex.land/graphql/",

const client = new ApolloClient({
uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
cache: new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allPeople: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,

          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing = {}, incoming) {
            return deepMerge(existing, incoming);
          },
          
        }
      }
    }
  }
})
});
root.render(
  <React.StrictMode>
   <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
