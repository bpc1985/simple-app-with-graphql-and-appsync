import * as React from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';
import { listBlogs } from './graphql/queries';
import { Query } from 'react-apollo';
import gql from "graphql-tag";
import { ListBlogsQuery } from "./API";

/* Without using react-apollo and graphql-tag
export class Blogs extends React.PureComponent {
  render() {
    return (
      <Connect query={graphqlOperation(listBlogs)}>
        {({data: {listBlogs: blogs}}: any) => {
          if (!blogs) {
            return null;
          }
          return blogs.items.map((b: any, index: number) => (
            <div key={index}>{b.name}</div>
          ));
        }}
      </Connect>
    );
  }
}
*/

export class Blogs extends React.Component {
  render() {
    return (
      <Query<ListBlogsQuery> query={gql(listBlogs)}>
        {({data: {listBlogs: blogs}, loading}: any,) => {
          if (loading || !blogs || !blogs.items) {
            return null;
          }
          return blogs.items.map((b: any, index: number) => (
            <div key={index}>{b.name}</div>
          ));
        }}
      </Query>
    );
  }
}

