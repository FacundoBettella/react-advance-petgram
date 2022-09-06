import React from "react";
import ReactDom from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App.js";

const apolloClient = new ApolloClient({
  uri: "https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql", // Servidor con graphql playground
  cache: new InMemoryCache(),
});

ReactDom.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
