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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
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
  user: User;
};

export type CreateQuestionResponse = {
  __typename?: 'CreateQuestionResponse';
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
  addQuestionToNotebook: NotebookModel;
  addTicket: Ticket;
  createNotification: Notification;
  createSimulado: Simulado;
  deleteNotebook: Scalars['Boolean'];
  deleteSimulado: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  inviteUser: User;
  login: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  readNotifications: Scalars['Boolean'];
  refreshToken: Scalars['Boolean'];
  removeQuestionFromNotebook: NotebookModel;
  resolveTicket: Scalars['Boolean'];
  updateNotebook: Scalars['Boolean'];
  updatePassword: Scalars['Boolean'];
  updateProfile: Scalars['Boolean'];
};


export type MutationAddAnswerArgs = {
  alternativeId: Scalars['String'];
  notebookId?: InputMaybe<Scalars['String']>;
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


export type MutationAddQuestionToNotebookArgs = {
  id: Scalars['String'];
  questionId: Scalars['String'];
};


export type MutationAddTicketArgs = {
  content: Scalars['String'];
  question?: InputMaybe<Scalars['String']>;
  type: TicketType;
};


export type MutationCreateNotificationArgs = {
  body: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateSimuladoArgs = {
  areas: Array<AreaToSimuladoInput>;
  name: Scalars['String'];
  type: SimuladoType;
};


export type MutationDeleteNotebookArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSimuladoArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationInviteUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  role: Role;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationReadNotificationsArgs = {
  notificationIds: Array<Scalars['String']>;
};


export type MutationRemoveQuestionFromNotebookArgs = {
  id: Scalars['String'];
  questionId: Scalars['String'];
};


export type MutationResolveTicketArgs = {
  id: Scalars['String'];
};


export type MutationUpdateNotebookArgs = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notebookId: Scalars['String'];
  questions?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationUpdateProfileArgs = {
  name?: InputMaybe<Scalars['String']>;
  photoUrl?: InputMaybe<Scalars['String']>;
};

export type NotebookModel = {
  __typename?: 'NotebookModel';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  questions: Array<Question>;
};

export type Notification = {
  __typename?: 'Notification';
  body: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
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
  createQuestion: CreateQuestionResponse;
  estados: Array<Estado>;
  leaderBoard?: Maybe<Array<User>>;
  locais: Array<Local>;
  me?: Maybe<User>;
  notebook: NotebookModel;
  notebooks: Array<NotebookModel>;
  notifications: Array<Notification>;
  openedRickets?: Maybe<Array<Ticket>>;
  perfis: Array<Perfil>;
  processosSeletivos: Array<ProcessoSeletivo>;
  question: Array<Question>;
  questions: QuestionsResponse;
  relatorio: Array<RelatorioResponse>;
  simulado: Simulado;
  simulados: SimuladosResponse;
  subareas: Array<Subarea>;
  users: Array<User>;
};


export type QueryCreateQuestionArgs = {
  alternatives: Array<Scalars['String']>;
  anoId?: InputMaybe<Scalars['String']>;
  areaId?: InputMaybe<Scalars['String']>;
  bancaId?: InputMaybe<Scalars['String']>;
  correct: Scalars['Float'];
  enunciado: Scalars['String'];
  estadoId?: InputMaybe<Scalars['String']>;
  localId?: InputMaybe<Scalars['String']>;
  newAno?: InputMaybe<Scalars['Float']>;
  newArea?: InputMaybe<Scalars['String']>;
  newBanca?: InputMaybe<Scalars['String']>;
  newEstado?: InputMaybe<Scalars['String']>;
  newLocal?: InputMaybe<Scalars['String']>;
  newPerfil?: InputMaybe<Scalars['String']>;
  newProcessoSeletivo?: InputMaybe<Scalars['String']>;
  newSubArea?: InputMaybe<Scalars['String']>;
  perfilId?: InputMaybe<Scalars['String']>;
  processoSeletivoId?: InputMaybe<Scalars['String']>;
  subAreaId?: InputMaybe<Scalars['String']>;
};


export type QueryNotebookArgs = {
  notebookId: Scalars['String'];
};


export type QueryQuestionArgs = {
  id: Scalars['String'];
};


export type QueryQuestionsArgs = {
  anoIds?: InputMaybe<Array<Scalars['String']>>;
  apenasNaoRespondidas?: InputMaybe<Scalars['Boolean']>;
  apenasRespondidas?: InputMaybe<Scalars['Boolean']>;
  apenasRespondidasCertas?: InputMaybe<Scalars['Boolean']>;
  apenasRespondidasErradas?: InputMaybe<Scalars['Boolean']>;
  areaIds?: InputMaybe<Array<Scalars['String']>>;
  bancaIds?: InputMaybe<Array<Scalars['String']>>;
  estadoIds?: InputMaybe<Array<Scalars['String']>>;
  itemsPerPage?: InputMaybe<Scalars['Float']>;
  localIds?: InputMaybe<Array<Scalars['String']>>;
  page?: InputMaybe<Scalars['Float']>;
  perfilIds?: InputMaybe<Array<Scalars['String']>>;
  processoSeletivoIds?: InputMaybe<Array<Scalars['String']>>;
  subareaIds?: InputMaybe<Array<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
};


export type QuerySimuladoArgs = {
  id: Scalars['String'];
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

export type RelatorioResponse = {
  __typename?: 'RelatorioResponse';
  date: Scalars['String'];
  total: Scalars['Float'];
  totalCorrect: Scalars['Float'];
};

export enum Role {
  Admin = 'ADMIN',
  Developer = 'DEVELOPER',
  User = 'USER'
}

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

export type Ticket = {
  __typename?: 'Ticket';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: User;
  question: Question;
  role: TicketType;
  title: Scalars['String'];
};

export enum TicketType {
  Bug = 'BUG',
  Feature = 'FEATURE',
  Other = 'OTHER',
  Question = 'QUESTION'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  photoUrl: Scalars['String'];
  role: Role;
  totalCorrect: Scalars['Float'];
  totalQuestions: Scalars['Float'];
};

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: boolean };

export type QuestionsFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type QuestionsFiltersQuery = { __typename?: 'Query', processosSeletivos: Array<{ __typename?: 'ProcessoSeletivo', id: string, name: string }>, anos: Array<{ __typename?: 'Ano', id: string, ano: number }>, locais: Array<{ __typename?: 'Local', id: string, name: string }>, perfis: Array<{ __typename?: 'Perfil', id: string, name: string }>, areas: Array<{ __typename?: 'Area', id: string, name: string }>, subareas: Array<{ __typename?: 'Subarea', id: string, name: string }>, estados: Array<{ __typename?: 'Estado', id: string, name: string }>, bancas: Array<{ __typename?: 'Banca', id: string, name: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', name: string, photoUrl: string } | null, notifications: Array<{ __typename?: 'Notification', id: string, title: string, body: string }> };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type GetAreasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAreasQuery = { __typename?: 'Query', areas: Array<{ __typename?: 'Area', id: string, name: string }> };

export type CreateSimuladoMutationVariables = Exact<{
  name: Scalars['String'];
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

export type CreateReportMutationVariables = Exact<{
  content: Scalars['String'];
  type: TicketType;
}>;


export type CreateReportMutation = { __typename?: 'Mutation', addTicket: { __typename?: 'Ticket', id: string } };

export type InviteUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  role: Role;
}>;


export type InviteUserMutation = { __typename?: 'Mutation', inviteUser: { __typename?: 'User', id: string } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, photoUrl: string, name: string, email: string, role: Role }> };

export type CreateNotificationMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
}>;


export type CreateNotificationMutation = { __typename?: 'Mutation', createNotification: { __typename?: 'Notification', id: string } };

export type ResolveQuestionMutationVariables = Exact<{
  questionId: Scalars['String'];
  alternativeId: Scalars['String'];
}>;


export type ResolveQuestionMutation = { __typename?: 'Mutation', addAnswer: { __typename?: 'AddAnswerResponse', correct: boolean, correctAlternative: string } };

export type Me2QueryVariables = Exact<{ [key: string]: never; }>;


export type Me2Query = { __typename?: 'Query', me?: { __typename?: 'User', name: string, photoUrl: string } | null };

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

export type AddQuestionToNotebookMutationVariables = Exact<{
  id: Scalars['String'];
  questionId: Scalars['String'];
}>;


export type AddQuestionToNotebookMutation = { __typename?: 'Mutation', addQuestionToNotebook: { __typename?: 'NotebookModel', id: string } };

export type RemoveQuestionFromNotebookMutationVariables = Exact<{
  id: Scalars['String'];
  questionId: Scalars['String'];
}>;


export type RemoveQuestionFromNotebookMutation = { __typename?: 'Mutation', removeQuestionFromNotebook: { __typename?: 'NotebookModel', id: string } };

export type GetQuestionsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Float']>;
  itemsPerPage?: InputMaybe<Scalars['Float']>;
  text?: InputMaybe<Scalars['String']>;
  processoSeletivoIds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  anoIds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  localIds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  perilIds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  areaIds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  subareaIds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  estadoIds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  bancaIds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  apenasRespondidas?: InputMaybe<Scalars['Boolean']>;
  apenasNaoRespondidas?: InputMaybe<Scalars['Boolean']>;
  apenasRespondidasCertas?: InputMaybe<Scalars['Boolean']>;
  apenasRespondidasErradas?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetQuestionsQuery = { __typename?: 'Query', questions: { __typename?: 'QuestionsResponse', pagesQuantity: number, quantity: number, questions: Array<{ __typename?: 'Question', id: string, enunciado: string, processoSeletivo?: { __typename?: 'ProcessoSeletivo', name: string } | null, ano?: { __typename?: 'Ano', ano: number } | null, local?: { __typename?: 'Local', name: string } | null, perfil?: { __typename?: 'Perfil', name: string } | null, area?: { __typename?: 'Area', name: string } | null, subarea?: { __typename?: 'Subarea', name: string } | null, estado?: { __typename?: 'Estado', name: string } | null, banca?: { __typename?: 'Banca', name: string } | null, alternatives?: Array<{ __typename?: 'Alternative', id: string, text: string, letter: string }> | null, comments?: Array<{ __typename?: 'Comment', id: string, content: string, user: { __typename?: 'User', id: string, name: string, photoUrl: string } }> | null }> } };

export type GetNotebookQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetNotebookQuery = { __typename?: 'Query', notebook: { __typename?: 'NotebookModel', questions: Array<{ __typename?: 'Question', id: string, enunciado: string, alternatives?: Array<{ __typename?: 'Alternative', id: string, letter: string, text: string }> | null, ano?: { __typename?: 'Ano', ano: number } | null, banca?: { __typename?: 'Banca', name: string } | null, processoSeletivo?: { __typename?: 'ProcessoSeletivo', name: string } | null }> } };

export type ResolveQuestionOnNotebookMutationVariables = Exact<{
  questionId: Scalars['String'];
  alternativeId: Scalars['String'];
  simuladoId: Scalars['String'];
}>;


export type ResolveQuestionOnNotebookMutation = { __typename?: 'Mutation', addAnswer: { __typename?: 'AddAnswerResponse', correct: boolean, correctAlternative: string } };

export type ChartQueryVariables = Exact<{ [key: string]: never; }>;


export type ChartQuery = { __typename?: 'Query', relatorio: Array<{ __typename?: 'RelatorioResponse', date: string, total: number, totalCorrect: number }>, me?: { __typename?: 'User', totalQuestions: number, totalCorrect: number } | null };

export type InitialPageQueryVariables = Exact<{ [key: string]: never; }>;


export type InitialPageQuery = { __typename?: 'Query', me?: { __typename?: 'User', totalQuestions: number, totalCorrect: number } | null, leaderBoard?: Array<{ __typename?: 'User', id: string, name: string, totalQuestions: number, totalCorrect: number }> | null, simulados: { __typename?: 'SimuladosResponse', simulados: Array<{ __typename?: 'Simulado', id: string, name: string, totalQuestions: number }> } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: boolean };

export type Me3QueryVariables = Exact<{ [key: string]: never; }>;


export type Me3Query = { __typename?: 'Query', me?: { __typename?: 'User', name: string, email: string, photoUrl: string } | null };

export type UpdateProfileMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  photoUrl?: InputMaybe<Scalars['String']>;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: boolean };

export type UpdatePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: boolean };

export type GetSimulado2QueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetSimulado2Query = { __typename?: 'Query', simulado: { __typename?: 'Simulado', totalMinutes: number, totalQuestions: number, questions: Array<{ __typename?: 'Question', id: string, enunciado: string, alternatives?: Array<{ __typename?: 'Alternative', id: string, letter: string, text: string }> | null, ano?: { __typename?: 'Ano', ano: number } | null, banca?: { __typename?: 'Banca', name: string } | null, processoSeletivo?: { __typename?: 'ProcessoSeletivo', name: string } | null }> } };

export type ResolveQuestionOdSimulado2MutationVariables = Exact<{
  questionId: Scalars['String'];
  alternativeId: Scalars['String'];
  simuladoId: Scalars['String'];
}>;


export type ResolveQuestionOdSimulado2Mutation = { __typename?: 'Mutation', addAnswer: { __typename?: 'AddAnswerResponse', correct: boolean, correctAlternative: string } };

export type MeusSimuladosQueryVariables = Exact<{ [key: string]: never; }>;


export type MeusSimuladosQuery = { __typename?: 'Query', simulados: { __typename?: 'SimuladosResponse', simulados: Array<{ __typename?: 'Simulado', id: string, totalQuestions: number, name: string }> } };

export type CreateRandomSimualdoMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateRandomSimualdoMutation = { __typename?: 'Mutation', createSimulado: { __typename?: 'Simulado', id: string } };

export type DeleteSimuladoMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteSimuladoMutation = { __typename?: 'Mutation', deleteSimulado: boolean };


export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const QuestionsFiltersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuestionsFilters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processosSeletivos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"anos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ano"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locais"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"perfis"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subareas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"estados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bancas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<QuestionsFiltersQuery, QuestionsFiltersQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"notifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetAreasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAreas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAreasQuery, GetAreasQueryVariables>;
export const CreateSimuladoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSimulado"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"areas"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AreaToSimuladoInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSimulado"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"Custom"}},{"kind":"Argument","name":{"kind":"Name","value":"areas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"areas"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSimuladoMutation, CreateSimuladoMutationVariables>;
export const UpdateNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questions"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNotebook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"notebookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"questions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questions"}}}]}]}}]} as unknown as DocumentNode<UpdateNotebookMutation, UpdateNotebookMutationVariables>;
export const CreateReportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateReport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TicketType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTicket"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateReportMutation, CreateReportMutationVariables>;
export const InviteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InviteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Role"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InviteUserMutation, InviteUserMutationVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const CreateNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNotification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateNotificationMutation, CreateNotificationMutationVariables>;
export const ResolveQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResolveQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alternativeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"alternativeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alternativeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"correctAlternative"}}]}}]}}]} as unknown as DocumentNode<ResolveQuestionMutation, ResolveQuestionMutationVariables>;
export const Me2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}}]}}]}}]} as unknown as DocumentNode<Me2Query, Me2QueryVariables>;
export const NotebooksQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NotebooksQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notebooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NotebooksQueryQuery, NotebooksQueryQueryVariables>;
export const CreateNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questions"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNotebook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"questions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateNotebookMutation, CreateNotebookMutationVariables>;
export const DeleteNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNotebook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteNotebookMutation, DeleteNotebookMutationVariables>;
export const AddQuestionToNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddQuestionToNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addQuestionToNotebook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"questionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddQuestionToNotebookMutation, AddQuestionToNotebookMutationVariables>;
export const RemoveQuestionFromNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveQuestionFromNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeQuestionFromNotebook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"questionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RemoveQuestionFromNotebookMutation, RemoveQuestionFromNotebookMutationVariables>;
export const GetQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemsPerPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processoSeletivoIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"anoIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"localIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perilIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"areaIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subareaIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"estadoIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bancaIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidas"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"apenasNaoRespondidas"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidasCertas"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidasErradas"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"itemsPerPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemsPerPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}},{"kind":"Argument","name":{"kind":"Name","value":"processoSeletivoIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processoSeletivoIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"anoIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"anoIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"localIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"localIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"perfilIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perilIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"areaIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"areaIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"subareaIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subareaIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"estadoIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"estadoIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"bancaIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bancaIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"apenasRespondidas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidas"}}},{"kind":"Argument","name":{"kind":"Name","value":"apenasNaoRespondidas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"apenasNaoRespondidas"}}},{"kind":"Argument","name":{"kind":"Name","value":"apenasRespondidasCertas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidasCertas"}}},{"kind":"Argument","name":{"kind":"Name","value":"apenasRespondidasErradas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"apenasRespondidasErradas"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"enunciado"}},{"kind":"Field","name":{"kind":"Name","value":"processoSeletivo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ano"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ano"}}]}},{"kind":"Field","name":{"kind":"Name","value":"local"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"perfil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"area"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subarea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"estado"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banca"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alternatives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"letter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagesQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]} as unknown as DocumentNode<GetQuestionsQuery, GetQuestionsQueryVariables>;
export const GetNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notebook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"notebookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"enunciado"}},{"kind":"Field","name":{"kind":"Name","value":"alternatives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"letter"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ano"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ano"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banca"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"processoSeletivo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNotebookQuery, GetNotebookQueryVariables>;
export const ResolveQuestionOnNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResolveQuestionOnNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alternativeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simuladoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"alternativeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alternativeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"simuladoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simuladoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"correctAlternative"}}]}}]}}]} as unknown as DocumentNode<ResolveQuestionOnNotebookMutation, ResolveQuestionOnNotebookMutationVariables>;
export const ChartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Chart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relatorio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalCorrect"}}]}},{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"totalCorrect"}}]}}]}}]} as unknown as DocumentNode<ChartQuery, ChartQueryVariables>;
export const InitialPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InitialPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"totalCorrect"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leaderBoard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"totalCorrect"}}]}},{"kind":"Field","name":{"kind":"Name","value":"simulados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simulados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}}]}}]}}]}}]} as unknown as DocumentNode<InitialPageQuery, InitialPageQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const Me3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}}]}}]}}]} as unknown as DocumentNode<Me3Query, Me3QueryVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"photoUrl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"photoUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"photoUrl"}}}]}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdatePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}]}}]} as unknown as DocumentNode<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const GetSimulado2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSimulado2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simulado"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"enunciado"}},{"kind":"Field","name":{"kind":"Name","value":"alternatives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"letter"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ano"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ano"}}]}},{"kind":"Field","name":{"kind":"Name","value":"banca"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"processoSeletivo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSimulado2Query, GetSimulado2QueryVariables>;
export const ResolveQuestionOdSimulado2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResolveQuestionOdSimulado2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alternativeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simuladoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"questionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"alternativeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alternativeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"simuladoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simuladoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correct"}},{"kind":"Field","name":{"kind":"Name","value":"correctAlternative"}}]}}]}}]} as unknown as DocumentNode<ResolveQuestionOdSimulado2Mutation, ResolveQuestionOdSimulado2MutationVariables>;
export const MeusSimuladosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeusSimulados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simulados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simulados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<MeusSimuladosQuery, MeusSimuladosQueryVariables>;
export const CreateRandomSimualdoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRandomSimualdo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSimulado"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"Random"}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"areas"},"value":{"kind":"ListValue","values":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRandomSimualdoMutation, CreateRandomSimualdoMutationVariables>;
export const DeleteSimuladoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSimulado"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSimulado"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteSimuladoMutation, DeleteSimuladoMutationVariables>;