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
  correct: Scalars['Boolean'];
  id: Scalars['ID'];
  letter: Scalars['String'];
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

export type AreaToSimuladoInput = {
  areaId: Scalars['ID'];
  quantity: Scalars['Float'];
};

export type Banca = {
  __typename?: 'Banca';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  id: Scalars['ID'];
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
  addComment: Scalars['Boolean'];
  addNotebook: Scalars['Boolean'];
  createSimulado: Simulado;
  login: Scalars['Boolean'];
  refreshToken: Scalars['Boolean'];
  updateNotebook: Scalars['Boolean'];
};


export type MutationAddAnswerArgs = {
  alternativeId: Scalars['String'];
  questionId: Scalars['String'];
  simuladoId: Scalars['String'];
};


export type MutationAddCommentArgs = {
  content: Scalars['String'];
  questionId: Scalars['String'];
};


export type MutationAddNotebookArgs = {
  name: Scalars['String'];
  questions: Array<Scalars['String']>;
};


export type MutationCreateSimuladoArgs = {
  areas: Array<AreaToSimuladoInput>;
  name: Scalars['String'];
  type: SimuladoType;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateNotebookArgs = {
  name?: InputMaybe<Scalars['String']>;
  notebookId: Scalars['String'];
  questions?: InputMaybe<Array<Scalars['String']>>;
};

export type Notebook = {
  __typename?: 'Notebook';
  id: Scalars['ID'];
  name: Scalars['String'];
  questions: Array<Question>;
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
  notebook: Notebook;
  notebooks: Array<Notebook>;
  perfis: Array<Perfil>;
  processosSeletivos: Array<ProcessoSeletivo>;
  question: Array<Question>;
  questions: QuestionsResponse;
  subareas: Array<Subarea>;
};


export type QueryNotebookArgs = {
  notebookId: Scalars['String'];
};


export type QueryQuestionArgs = {
  id: Scalars['String'];
};


export type QueryQuestionsArgs = {
  anoId?: InputMaybe<Scalars['String']>;
  areaId?: InputMaybe<Scalars['String']>;
  bancaId?: InputMaybe<Scalars['String']>;
  estadoId?: InputMaybe<Scalars['String']>;
  itemsPerPage?: InputMaybe<Scalars['Float']>;
  localId?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  perfilId?: InputMaybe<Scalars['String']>;
  processoSeletivoId?: InputMaybe<Scalars['String']>;
  subareaId?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type Question = {
  __typename?: 'Question';
  alternatives?: Maybe<Array<Alternative>>;
  ano?: Maybe<Ano>;
  area?: Maybe<Area>;
  banca?: Maybe<Banca>;
  comments?: Maybe<Array<Comment>>;
  enunciado: Scalars['String'];
  estado?: Maybe<Estado>;
  id: Scalars['ID'];
  local?: Maybe<Local>;
  perfil?: Maybe<Perfil>;
  processoSeletivo?: Maybe<ProcessoSeletivo>;
  subarea?: Maybe<Subarea>;
};

export type QuestionsResponse = {
  __typename?: 'QuestionsResponse';
  pagesQuantity: Scalars['Float'];
  questions: Array<Question>;
};

export type Simulado = {
  __typename?: 'Simulado';
  id: Scalars['ID'];
  questions: Array<Question>;
  type: SimuladoType;
};

export enum SimuladoType {
  Custom = 'Custom',
  Random = 'Random'
}

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

export type QuestionsFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type QuestionsFiltersQuery = { __typename?: 'Query', processosSeletivos: Array<{ __typename?: 'ProcessoSeletivo', id: string, name: string }>, anos: Array<{ __typename?: 'Ano', id: string, ano: number }>, locais: Array<{ __typename?: 'Local', id: string, name: string }>, perfis: Array<{ __typename?: 'Perfil', id: string, name: string }>, areas: Array<{ __typename?: 'Area', id: string, name: string }>, subareas: Array<{ __typename?: 'Subarea', id: string, name: string }>, estados: Array<{ __typename?: 'Estado', id: string, name: string }>, bancas: Array<{ __typename?: 'Banca', id: string, name: string }> };

export type GetAreasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAreasQuery = { __typename?: 'Query', areas: Array<{ __typename?: 'Area', id: string, name: string }> };

export type CreateSimuladoMutationVariables = Exact<{
  name: Scalars['String'];
  type: SimuladoType;
  areas: Array<AreaToSimuladoInput> | AreaToSimuladoInput;
}>;


export type CreateSimuladoMutation = { __typename?: 'Mutation', createSimulado: { __typename?: 'Simulado', id: string, questions: Array<{ __typename?: 'Question', id: string }> } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: boolean };


export const QuestionsFiltersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuestionsFilters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processosSeletivos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"anos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ano"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locais"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"perfis"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subareas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"estados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bancas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<QuestionsFiltersQuery, QuestionsFiltersQueryVariables>;
export const GetAreasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAreas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAreasQuery, GetAreasQueryVariables>;
export const CreateSimuladoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSimulado"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SimuladoType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"areas"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AreaToSimuladoInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSimulado"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"areas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"areas"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSimuladoMutation, CreateSimuladoMutationVariables>;
export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;