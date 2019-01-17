import React, { Component } from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";
import { ListBlogsQuery } from "./API";
import { Form } from './Form';
import { createBlog } from './graphql/mutations';
import { Blogs } from './Blogs';
import { CreatePostMutation, CreatePostMutationVariables } from './API';
import { listBlogs } from './graphql/queries';

/* Without using react-apollo and graphql-tag
class App extends Component {
  render() {
    return (
      <div className="App">
        <Connect mutation={graphqlOperation(createBlog)}>
          {(mutationObject: any) => (
            <Form onSubmit={async (values) => {
              console.log(mutationObject);
              const response = await mutationObject.mutation({ input: values });
              console.log(response);
            }} />
          )}
        </Connect>
        <Blogs />
      </div>
    );
  }
}
*/

class App extends Component {
  render() {
    return (
      <div>
        <Mutation<CreatePostMutation, CreatePostMutationVariables>
          mutation={gql(createBlog)}>
          {(mutate: any) => (
            <Form onSubmit={async (values) => {
              const response = await mutate({
                variables: {input: values},
                refetchQueries: [
                  {query: gql(listBlogs)}
                ]
              });
              console.log(response);
            }} />
          )}
        </Mutation>
        <Blogs />
      </div>
    );
  }
}

export default App;
