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

export type AddAnswerResponse = {
  __typename?: 'AddAnswerResponse';
  correct: Scalars['Boolean'];
  correctAlternative: Scalars['String'];
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
  addAnswer: AddAnswerResponse;
  addComment: Scalars['Boolean'];
  addNotebook: NotebookModel;
  createSimulado: Simulado;
  deleteNotebook: Scalars['Boolean'];
  login: Scalars['Boolean'];
  refreshToken: Scalars['Boolean'];
  updateNotebook: Scalars['Boolean'];
};


export type MutationAddAnswerArgs = {
  alternativeId: Scalars['String'];
  questionId: Scalars['String'];
  simuladoId?: InputMaybe<Scalars['String']>;
};


export type MutationAddCommentArgs = {
  content: Scalars['String'];
  questionId: Scalars['String'];
};


export type MutationAddNotebookArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  questions: Array<Scalars['String']>;
};


export type MutationCreateSimuladoArgs = {
  areas: Array<AreaToSimuladoInput>;
  name: Scalars['String'];
  type: SimuladoType;
};


export type MutationDeleteNotebookArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateNotebookArgs = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notebookId: Scalars['String'];
  questions?: InputMaybe<Array<Scalars['String']>>;
};

export type NotebookModel = {
  __typename?: 'NotebookModel';
  description?: Maybe<Scalars['String']>;
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
  leaderBoard?: Maybe<Array<User>>;
  locais: Array<Local>;
  me?: Maybe<User>;
  notebook: NotebookModel;
  notebooks: Array<NotebookModel>;
  perfis: Array<Perfil>;
  processosSeletivos: Array<ProcessoSeletivo>;
  question: Array<Question>;
  questions: QuestionsResponse;
  simulados: SimuladosResponse;
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
  apenasNaoRespondidas?: InputMaybe<Scalars['Boolean']>;
  apenasRespondidas?: InputMaybe<Scalars['Boolean']>;
  apenasRespondidasCertas?: InputMaybe<Scalars['Boolean']>;
  apenasRespondidasErradas?: InputMaybe<Scalars['Boolean']>;
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


export type QuerySimuladosArgs = {
  itemsPerPage?: InputMaybe<Scalars['Float']>;
  page?: InputMaybe<Scalars['Float']>;
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
  quantity: Scalars['Float'];
  questions: Array<Question>;
};

export type Simulado = {
  __typename?: 'Simulado';
  id: Scalars['ID'];
  name: Scalars['String'];
  questions: Array<Question>;
  totalMinutes: Scalars['Float'];
  totalQuestions: Scalars['Float'];
  type: SimuladoType;
};

export enum SimuladoType {
  Custom = 'Custom',
  Random = 'Random'
}

export type SimuladosResponse = {
  __typename?: 'SimuladosResponse';
  pagesQuantity: Scalars['Float'];
  simulados: Array<Simulado>;
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
  photoUrl: Scalars['String'];
  totalCorrect: Scalars['Float'];
  totalQuestions: Scalars['Float'];
};

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: boolean };

export type QuestionsFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type QuestionsFiltersQuery = { __typename?: 'Query', processosSeletivos: Array<{ __typename?: 'ProcessoSeletivo', id: string, name: string }>, anos: Array<{ __typename?: 'Ano', id: string, ano: number }>, locais: Array<{ __typename?: 'Local', id: string, name: string }>, perfis: Array<{ __typename?: 'Perfil', id: string, name: string }>, areas: Array<{ __typename?: 'Area', id: string, name: string }>, subareas: Array<{ __typename?: 'Subarea', id: string, name: string }>, estados: Array<{ __typename?: 'Estado', id: string, name: string }>, bancas: Array<{ __typename?: 'Banca', id: string, name: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', name: string, photoUrl: string } | null };

export type GetAreasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAreasQuery = { __typename?: 'Query', areas: Array<{ __typename?: 'Area', id: string, name: string }> };

export type CreateSimuladoMutationVariables = Exact<{
  name: Scalars['String'];
  type: SimuladoType;
  areas: Array<AreaToSimuladoInput> | AreaToSimuladoInput;
}>;


export type CreateSimuladoMutation = { __typename?: 'Mutation', createSimulado: { __typename?: 'Simulado', id: string, questions: Array<{ __typename?: 'Question', id: string }> } };

export type UpdateNotebookMutationVariables = Exact<{
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  questions?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type UpdateNotebookMutation = { __typename?: 'Mutation', updateNotebook: boolean };

export type ResolveQuestionMutationVariables = Exact<{
  questionId: Scalars['String'];
  alternativeId: Scalars['String'];
}>;


export type ResolveQuestionMutation = { __typename?: 'Mutation', addAnswer: { __typename?: 'AddAnswerResponse', correct: boolean, correctAlternative: string } };

export type NotebooksQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NotebooksQueryQuery = { __typename?: 'Query', notebooks: Array<{ __typename?: 'NotebookModel', id: string, name: string, description?: string | null, questions: Array<{ __typename?: 'Question', id: string }> }> };

export type CreateNotebookMutationVariables = Exact<{
  questions: Array<Scalars['String']> | Scalars['String'];
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type CreateNotebookMutation = { __typename?: 'Mutation', addNotebook: { __typename?: 'NotebookModel', id: string, name: string, description?: string | null } };

export type DeleteNotebookMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteNotebookMutation = { __typename?: 'Mutation', deleteNotebook: boolean };

export type GetQuestionsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Float']>;
  itemsPerPage?: InputMaybe<Scalars['Float']>;
  text?: InputMaybe<Scalars['String']>;
  processoSeletivoId?: InputMaybe<Scalars['String']>;
  anoId?: InputMaybe<Scalars['String']>;
  localId?: InputMaybe<Scalars['String']>;
  perilId?: InputMaybe<Scalars['String']>;
  areaId?: InputMaybe<Scalars['String']>;
  subareaId?: InputMaybe<Scalars['String']>;
  estadoId?: InputMaybe<Scalars['String']>;
  bancaId?: InputMaybe<Scalars['String']>;
  apenasRespondidas?: InputMaybe<Scalars['Boolean']>;
  apenasNaoRespondidas?: InputMaybe<Scalars['Boolean']>;
  apenasRespondidasCertas?: InputMaybe<Scalars['Boolean']>;
  apenasRespondidasErradas?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetQuestionsQuery = { __typename?: 'Query', questions: { __typename?: 'QuestionsResponse', pagesQuantity: number, quantity: number, questions: Array<{ __typename?: 'Question', id: string, enunciado: string, processoSeletivo?: { __typename?: 'ProcessoSeletivo', name: string } | null, ano?: { __typename?: 'Ano', ano: number } | null, local?: { __typename?: 'Local', name: string } | null, perfil?: { __typename?: 'Perfil', name: string } | null, area?: { __typename?: 'Area', name: string } | null, subarea?: { __typename?: 'Subarea', name: string } | null, estado?: { __typename?: 'Estado', name: string } | null, banca?: { __typename?: 'Banca', name: string } | null, alternatives?: Array<{ __typename?: 'Alternative', id: string, text: string, letter: string }> | null, comments?: Array<{ __typename?: 'Comment', id: string, content: string }> | null }> } };

export type InitialPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type InitialPagesQuery = { __typename?: 'Query', me?: { __typename?: 'User', totalQuestions: number, totalCorrect: number } | null };

export type InitialPageQueryVariables = Exact<{ [key: string]: never; }>;


export type InitialPageQuery = { __typename?: 'Query', me?: { __typename?: 'User', totalQuestions: number, totalCorrect: number } | null, leaderBoard?: Array<{ __typename?: 'User', id: string, name: string, totalQuestions: number, totalCorrect: number }> | null, simulados: { __typename?: 'SimuladosResponse', simulados: Array<{ __typename?: 'Simulado', name: string, totalQuestions: number }> } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: boolean };


export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const QuestionsFiltersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuestionsFilters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processosSeletivos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"anos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ano"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locais"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"perfis"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subareas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"estados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bancas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<QuestionsFiltersQuery, QuestionsFiltersQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetAreasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAreas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAreasQuery, GetAreasQueryVariables>;
export const CreateSimuladoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSimulado"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SimuladoType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"areas"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AreaToSimuladoInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSimulado"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"areas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"areas"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSimuladoMutation, CreateSimuladoMutationVariables>;
export const UpdateNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questions"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNotebook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"notebookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"questions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questions"}}}]}]}}]} as unknown as DocumentNode<UpdateNotebookMutation, UpdateNotebookMutationVariables>;
export const ResolveQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResolveQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alternativeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"alternativeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alternativeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"correctAlternative"}}]}}]}}]} as unknown as DocumentNode<ResolveQuestionMutation, ResolveQuestionMutationVariables>;
export const NotebooksQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NotebooksQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notebooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NotebooksQueryQuery, NotebooksQueryQueryVariables>;
export const CreateNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questions"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNotebook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"questions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateNotebookMutation, CreateNotebookMutationVariables>;
export const DeleteNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNotebook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteNotebookMutation, DeleteNotebookMutationVariables>;
export const GetQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemsPerPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processoSeletivoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"anoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"localId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perilId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"areaId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subareaId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"estadoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bancaId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidas"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"apenasNaoRespondidas"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidasCertas"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidasErradas"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemsPerPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemsPerPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}},{"kind":"Argument","name":{"kind":"Name","value":"processoSeletivoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processoSeletivoId"}}},{"kind":"Argument","name":{"kind":"Name","value":"anoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"anoId"}}},{"kind":"Argument","name":{"kind":"Name","value":"localId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"localId"}}},{"kind":"Argument","name":{"kind":"Name","value":"perfilId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perilId"}}},{"kind":"Argument","name":{"kind":"Name","value":"areaId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"areaId"}}},{"kind":"Argument","name":{"kind":"Name","value":"subareaId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subareaId"}}},{"kind":"Argument","name":{"kind":"Name","value":"estadoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"estadoId"}}},{"kind":"Argument","name":{"kind":"Name","value":"bancaId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bancaId"}}},{"kind":"Argument","name":{"kind":"Name","value":"apenasRespondidas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidas"}}},{"kind":"Argument","name":{"kind":"Name","value":"apenasNaoRespondidas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"apenasNaoRespondidas"}}},{"kind":"Argument","name":{"kind":"Name","value":"apenasRespondidasCertas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidasCertas"}}},{"kind":"Argument","name":{"kind":"Name","value":"apenasRespondidasErradas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidasErradas"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"enunciado"}},{"kind":"Field","name":{"kind":"Name","value":"processoSeletivo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ano"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ano"}}]}},{"kind":"Field","name":{"kind":"Name","value":"local"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"perfil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"area"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subarea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"estado"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banca"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alternatives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"letter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagesQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]} as unknown as DocumentNode<GetQuestionsQuery, GetQuestionsQueryVariables>;
export const InitialPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InitialPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"totalCorrect"}}]}}]}}]} as unknown as DocumentNode<InitialPagesQuery, InitialPagesQueryVariables>;
export const InitialPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InitialPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"totalCorrect"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leaderBoard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"totalCorrect"}}]}},{"kind":"Field","name":{"kind":"Name","value":"simulados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simulados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}}]}}]}}]}}]} as unknown as DocumentNode<InitialPageQuery, InitialPageQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;