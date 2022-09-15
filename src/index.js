import React from "react";
import ReactDom from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ContextProvider from "./ContextProvider.js"; 
import App from "./App.js";

const apolloClient = new ApolloClient({
  uri: "https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql" /* Servidor con graphql playground */,
  cache: new InMemoryCache(),
});

/* Context.Provider value es un objeto con valores a los que puedo acceder desde sus children components  */

ReactDom.render(
  <ContextProvider.Provider>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </ContextProvider.Provider>,
  document.getElementById("app")
);
