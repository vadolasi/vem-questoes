/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Alternative = {
  __typename?: 'Alternative';
  id: Scalars['ID'];
  isCorrect: Scalars['Boolean'];
  text: Scalars['String'];
};

export type Ano = {
  __typename?: 'Ano';
  ano: Scalars['Float'];
  id: Scalars['ID'];
};

export type Area = {
  __typename?: 'Area';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Banca = {
  __typename?: 'Banca';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Estado = {
  __typename?: 'Estado';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Local = {
  __typename?: 'Local';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAnswer: Scalars['Boolean'];
  login: Scalars['Boolean'];
  refreshToken: Scalars['Boolean'];
};


export type MutationAddAnswerArgs = {
  alternativeId: Scalars['String'];
  questionId: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Perfil = {
  __typename?: 'Perfil';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ProcessoSeletivo = {
  __typename?: 'ProcessoSeletivo';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  anos: Array<Ano>;
  areas: Array<Area>;
  bancas: Array<Banca>;
  estados: Array<Estado>;
  locais: Array<Local>;
  me?: Maybe<User>;
  perfis: Array<Perfil>;
  processosSeletivos: Array<ProcessoSeletivo>;
  questions: Array<Question>;
  subareas: Array<Subarea>;
};


export type QueryQuestionsArgs = {
  anoId?: InputMaybe<Scalars['String']>;
  areaId?: InputMaybe<Scalars['String']>;
  bancaId?: InputMaybe<Scalars['String']>;
  estadoId?: InputMaybe<Scalars['String']>;
  localId?: InputMaybe<Scalars['String']>;
  perfilId?: InputMaybe<Scalars['String']>;
  processoSeletivoId?: InputMaybe<Scalars['String']>;
  subareaId?: InputMaybe<Scalars['String']>;
};

export type Question = {
  __typename?: 'Question';
  alternatives?: Maybe<Array<Alternative>>;
  ano?: Maybe<Ano>;
  area?: Maybe<Area>;
  banca?: Maybe<Banca>;
  enunciado: Scalars['String'];
  estado?: Maybe<Estado>;
  id: Scalars['ID'];
  local?: Maybe<Local>;
  perfil?: Maybe<Perfil>;
  subarea?: Maybe<Subarea>;
};

export type Subarea = {
  __typename?: 'Subarea';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: boolean };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;