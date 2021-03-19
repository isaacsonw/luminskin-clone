import { ApolloClient, InMemoryCache } from '@apollo/client';
const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
});
export default client;

// const stateLink = withClientState({
//   cache,
//   resolvers: {
//     Mutation: {
//       updateNetworkStatus: (_, { isConnected }, { cache }) => {
//         const data = {
//           networkStatus: {
//             __typename: 'NetworkStatus',
//             isConnected,
//           },
//         };
//         cache.writeData({ data });
//         return null;
//       },
//     },
//   },
// });
