import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4os2g830yun01xkcflj0azi/master",
  cache: new InMemoryCache(),
});
