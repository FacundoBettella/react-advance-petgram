import React from "react";
import ReactDom from "react-dom";
import ContextProvider from "./ContextProvider.js";
import App from "./App.js";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("jwt");
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    window.sessionStorage.removeItem("jwt");
    window.location = "/";
  }
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorMiddleware, authMiddleware, new HttpLink({
      uri: "https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql" /* Servidor con graphql playground */,
    })
  ])
});

ReactDom.render(
  <ContextProvider.Provider>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </ContextProvider.Provider>,
  document.getElementById("app")
);
