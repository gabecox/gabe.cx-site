import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginCredentials = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  contactGabe: Scalars['Boolean'];
  createPost: Post;
  createSample: Sample;
  deletePost: Scalars['Boolean'];
  deleteSample: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updatePost?: Maybe<Post>;
  updateSample?: Maybe<Sample>;
};


export type MutationContactGabeArgs = {
  content: Scalars['String'];
  replyTo: Scalars['String'];
  subject: Scalars['String'];
};


export type MutationCreatePostArgs = {
  options: PostInput;
};


export type MutationCreateSampleArgs = {
  options: SampleType;
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteSampleArgs = {
  id: Scalars['Float'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  options: LoginCredentials;
};


export type MutationRegisterArgs = {
  options: UserCredentials;
};


export type MutationUpdatePostArgs = {
  id: Scalars['Float'];
  options: PostInput;
};


export type MutationUpdateSampleArgs = {
  id: Scalars['Float'];
  options: SampleType;
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  ownerId: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PostInput = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  samples: Array<Sample>;
};


export type QueryPostArgs = {
  id: Scalars['Float'];
};


export type QueryPostsArgs = {
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};

export type Sample = {
  __typename?: 'Sample';
  createdAt: Scalars['String'];
  desc: Scalars['String'];
  id: Scalars['Float'];
  imagesrc: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type SampleType = {
  desc: Scalars['String'];
  imagesrc: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  posts: Array<Post>;
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserCredentials = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type RegularPostFragment = { __typename?: 'Post', id: number, createdAt: string, updatedAt: string, title: string, body: string, ownerId: number };

export type RegularSampleFragment = { __typename?: 'Sample', id: number, createdAt: string, updatedAt: string, title: string, desc: string, imagesrc: string, url: string };

export type RegularUserFragment = { __typename?: 'User', id: number, username: string };

export type ContactGabeMutationVariables = Exact<{
  replyTo: Scalars['String'];
  content: Scalars['String'];
  subject: Scalars['String'];
}>;


export type ContactGabeMutation = { __typename?: 'Mutation', contactGabe: boolean };

export type CreatePostMutationVariables = Exact<{
  options: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: number, createdAt: string, updatedAt: string, title: string, body: string, ownerId: number } };

export type CreateSampleMutationVariables = Exact<{
  options: SampleType;
}>;


export type CreateSampleMutation = { __typename?: 'Mutation', createSample: { __typename?: 'Sample', id: number, createdAt: string, updatedAt: string, title: string, desc: string, imagesrc: string, url: string } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  options: LoginCredentials;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: UserCredentials;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string } | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string } | null };

export type PostsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  limit: Scalars['Int'];
}>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: number, createdAt: string, updatedAt: string, title: string, body: string, ownerId: number }> };

export type SamplesQueryVariables = Exact<{ [key: string]: never; }>;


export type SamplesQuery = { __typename?: 'Query', samples: Array<{ __typename?: 'Sample', id: number, createdAt: string, updatedAt: string, title: string, desc: string, imagesrc: string, url: string }> };

export const RegularPostFragmentDoc = gql`
    fragment RegularPost on Post {
  id
  createdAt
  updatedAt
  title
  body
  ownerId
}
    `;
export const RegularSampleFragmentDoc = gql`
    fragment RegularSample on Sample {
  id
  createdAt
  updatedAt
  title
  desc
  imagesrc
  url
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const ContactGabeDocument = gql`
    mutation ContactGabe($replyTo: String!, $content: String!, $subject: String!) {
  contactGabe(replyTo: $replyTo, subject: $subject, content: $content)
}
    `;

export function useContactGabeMutation() {
  return Urql.useMutation<ContactGabeMutation, ContactGabeMutationVariables>(ContactGabeDocument);
};
export const CreatePostDocument = gql`
    mutation CreatePost($options: PostInput!) {
  createPost(options: $options) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const CreateSampleDocument = gql`
    mutation CreateSample($options: SampleType!) {
  createSample(options: $options) {
    ...RegularSample
  }
}
    ${RegularSampleFragmentDoc}`;

export function useCreateSampleMutation() {
  return Urql.useMutation<CreateSampleMutation, CreateSampleMutationVariables>(CreateSampleDocument);
};
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($options: LoginCredentials!) {
  login(options: $options) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UserCredentials!) {
  register(options: $options) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const PostsDocument = gql`
    query Posts($page: Int, $limit: Int!) {
  posts(page: $page, limit: $limit) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'>) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};
export const SamplesDocument = gql`
    query Samples {
  samples {
    ...RegularSample
  }
}
    ${RegularSampleFragmentDoc}`;

export function useSamplesQuery(options?: Omit<Urql.UseQueryArgs<SamplesQueryVariables>, 'query'>) {
  return Urql.useQuery<SamplesQuery>({ query: SamplesDocument, ...options });
};