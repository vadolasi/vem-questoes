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

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateNotebook = {
  __typename?: 'AggregateNotebook';
  _count?: Maybe<NotebookCountAggregate>;
  _max?: Maybe<NotebookMaxAggregate>;
  _min?: Maybe<NotebookMinAggregate>;
};

export type Alternative = {
  __typename?: 'Alternative';
  correct: Scalars['Boolean'];
  id: Scalars['ID'];
  letter: Scalars['String'];
  text: Scalars['String'];
};

export type AlternativeCreateManyQuestionInput = {
  correct: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  letter: Scalars['String'];
  text: Scalars['String'];
};

export type AlternativeCreateManyQuestionInputEnvelope = {
  data: Array<AlternativeCreateManyQuestionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AlternativeCreateNestedManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<AlternativeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlternativeCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<AlternativeCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<AlternativeCreateManyQuestionInputEnvelope>;
};

export type AlternativeCreateNestedOneWithoutResponsesInput = {
  connect?: InputMaybe<AlternativeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AlternativeCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<AlternativeCreateWithoutResponsesInput>;
};

export type AlternativeCreateOrConnectWithoutQuestionInput = {
  create: AlternativeCreateWithoutQuestionInput;
  where: AlternativeWhereUniqueInput;
};

export type AlternativeCreateOrConnectWithoutResponsesInput = {
  create: AlternativeCreateWithoutResponsesInput;
  where: AlternativeWhereUniqueInput;
};

export type AlternativeCreateWithoutQuestionInput = {
  correct: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  letter: Scalars['String'];
  responses?: InputMaybe<ResponseCreateNestedManyWithoutAlternativeInput>;
  text: Scalars['String'];
};

export type AlternativeCreateWithoutResponsesInput = {
  correct: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  letter: Scalars['String'];
  question: QuestionCreateNestedOneWithoutAlternativesInput;
  text: Scalars['String'];
};

export type AlternativeListRelationFilter = {
  every?: InputMaybe<AlternativeWhereInput>;
  none?: InputMaybe<AlternativeWhereInput>;
  some?: InputMaybe<AlternativeWhereInput>;
};

export type AlternativeRelationFilter = {
  is?: InputMaybe<AlternativeWhereInput>;
  isNot?: InputMaybe<AlternativeWhereInput>;
};

export type AlternativeScalarWhereInput = {
  AND?: InputMaybe<Array<AlternativeScalarWhereInput>>;
  NOT?: InputMaybe<Array<AlternativeScalarWhereInput>>;
  OR?: InputMaybe<Array<AlternativeScalarWhereInput>>;
  correct?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  letter?: InputMaybe<StringFilter>;
  questionId?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
};

export type AlternativeUpdateManyMutationInput = {
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  letter?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AlternativeUpdateManyWithWhereWithoutQuestionInput = {
  data: AlternativeUpdateManyMutationInput;
  where: AlternativeScalarWhereInput;
};

export type AlternativeUpdateManyWithoutQuestionNestedInput = {
  connect?: InputMaybe<Array<AlternativeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlternativeCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<AlternativeCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<AlternativeCreateManyQuestionInputEnvelope>;
  delete?: InputMaybe<Array<AlternativeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AlternativeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AlternativeWhereUniqueInput>>;
  set?: InputMaybe<Array<AlternativeWhereUniqueInput>>;
  update?: InputMaybe<Array<AlternativeUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: InputMaybe<Array<AlternativeUpdateManyWithWhereWithoutQuestionInput>>;
  upsert?: InputMaybe<Array<AlternativeUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type AlternativeUpdateOneRequiredWithoutResponsesNestedInput = {
  connect?: InputMaybe<AlternativeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AlternativeCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<AlternativeCreateWithoutResponsesInput>;
  update?: InputMaybe<AlternativeUpdateWithoutResponsesInput>;
  upsert?: InputMaybe<AlternativeUpsertWithoutResponsesInput>;
};

export type AlternativeUpdateWithWhereUniqueWithoutQuestionInput = {
  data: AlternativeUpdateWithoutQuestionInput;
  where: AlternativeWhereUniqueInput;
};

export type AlternativeUpdateWithoutQuestionInput = {
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  letter?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutAlternativeNestedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AlternativeUpdateWithoutResponsesInput = {
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  letter?: InputMaybe<StringFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneRequiredWithoutAlternativesNestedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AlternativeUpsertWithWhereUniqueWithoutQuestionInput = {
  create: AlternativeCreateWithoutQuestionInput;
  update: AlternativeUpdateWithoutQuestionInput;
  where: AlternativeWhereUniqueInput;
};

export type AlternativeUpsertWithoutResponsesInput = {
  create: AlternativeCreateWithoutResponsesInput;
  update: AlternativeUpdateWithoutResponsesInput;
};

export type AlternativeWhereInput = {
  AND?: InputMaybe<Array<AlternativeWhereInput>>;
  NOT?: InputMaybe<Array<AlternativeWhereInput>>;
  OR?: InputMaybe<Array<AlternativeWhereInput>>;
  correct?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  letter?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
  responses?: InputMaybe<ResponseListRelationFilter>;
  text?: InputMaybe<StringFilter>;
};

export type AlternativeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Ano = {
  __typename?: 'Ano';
  ano: Scalars['Float'];
  id: Scalars['ID'];
};

export type AnoCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<AnoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AnoCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<AnoCreateWithoutQuestionsInput>;
};

export type AnoCreateOrConnectWithoutQuestionsInput = {
  create: AnoCreateWithoutQuestionsInput;
  where: AnoWhereUniqueInput;
};

export type AnoCreateWithoutQuestionsInput = {
  ano: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
};

export type AnoRelationFilter = {
  is?: InputMaybe<AnoWhereInput>;
  isNot?: InputMaybe<AnoWhereInput>;
};

export type AnoUpdateOneWithoutQuestionsNestedInput = {
  connect?: InputMaybe<AnoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AnoCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<AnoCreateWithoutQuestionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AnoUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<AnoUpsertWithoutQuestionsInput>;
};

export type AnoUpdateWithoutQuestionsInput = {
  ano?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AnoUpsertWithoutQuestionsInput = {
  create: AnoCreateWithoutQuestionsInput;
  update: AnoUpdateWithoutQuestionsInput;
};

export type AnoWhereInput = {
  AND?: InputMaybe<Array<AnoWhereInput>>;
  NOT?: InputMaybe<Array<AnoWhereInput>>;
  OR?: InputMaybe<Array<AnoWhereInput>>;
  ano?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
};

export type AnoWhereUniqueInput = {
  ano?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
};

export type Area = {
  __typename?: 'Area';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type AreaCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<AreaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AreaCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<AreaCreateWithoutQuestionsInput>;
};

export type AreaCreateOrConnectWithoutQuestionsInput = {
  create: AreaCreateWithoutQuestionsInput;
  where: AreaWhereUniqueInput;
};

export type AreaCreateWithoutQuestionsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type AreaRelationFilter = {
  is?: InputMaybe<AreaWhereInput>;
  isNot?: InputMaybe<AreaWhereInput>;
};

export type AreaToSimuladoInput = {
  areaId: Scalars['ID'];
  quantity: Scalars['Float'];
};

export type AreaUpdateOneWithoutQuestionsNestedInput = {
  connect?: InputMaybe<AreaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AreaCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<AreaCreateWithoutQuestionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AreaUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<AreaUpsertWithoutQuestionsInput>;
};

export type AreaUpdateWithoutQuestionsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AreaUpsertWithoutQuestionsInput = {
  create: AreaCreateWithoutQuestionsInput;
  update: AreaUpdateWithoutQuestionsInput;
};

export type AreaWhereInput = {
  AND?: InputMaybe<Array<AreaWhereInput>>;
  NOT?: InputMaybe<Array<AreaWhereInput>>;
  OR?: InputMaybe<Array<AreaWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
};

export type AreaWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Banca = {
  __typename?: 'Banca';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type BancaCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<BancaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BancaCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<BancaCreateWithoutQuestionsInput>;
};

export type BancaCreateOrConnectWithoutQuestionsInput = {
  create: BancaCreateWithoutQuestionsInput;
  where: BancaWhereUniqueInput;
};

export type BancaCreateWithoutQuestionsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type BancaRelationFilter = {
  is?: InputMaybe<BancaWhereInput>;
  isNot?: InputMaybe<BancaWhereInput>;
};

export type BancaUpdateOneWithoutQuestionsNestedInput = {
  connect?: InputMaybe<BancaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BancaCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<BancaCreateWithoutQuestionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<BancaUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<BancaUpsertWithoutQuestionsInput>;
};

export type BancaUpdateWithoutQuestionsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BancaUpsertWithoutQuestionsInput = {
  create: BancaCreateWithoutQuestionsInput;
  update: BancaUpdateWithoutQuestionsInput;
};

export type BancaWhereInput = {
  AND?: InputMaybe<Array<BancaWhereInput>>;
  NOT?: InputMaybe<Array<BancaWhereInput>>;
  OR?: InputMaybe<Array<BancaWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
};

export type BancaWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  id: Scalars['ID'];
};

export type CommentCreateManyQuestionInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type CommentCreateManyQuestionInputEnvelope = {
  data: Array<CommentCreateManyQuestionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateManyUserInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  questionId: Scalars['String'];
};

export type CommentCreateManyUserInputEnvelope = {
  data: Array<CommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<CommentCreateManyQuestionInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentCreateOrConnectWithoutQuestionInput = {
  create: CommentCreateWithoutQuestionInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutQuestionInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateWithoutUserInput = {
  content: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  question: QuestionCreateNestedOneWithoutCommentsInput;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  questionId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutQuestionInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutQuestionNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<CommentCreateManyQuestionInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutQuestionInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type CommentUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutQuestionInput = {
  data: CommentUpdateWithoutQuestionInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutQuestionInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
};

export type CommentUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneRequiredWithoutCommentsNestedInput>;
};

export type CommentUpsertWithWhereUniqueWithoutQuestionInput = {
  create: CommentCreateWithoutQuestionInput;
  update: CommentUpdateWithoutQuestionInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  update: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumTicketStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<TicketStatus>;
};

export type EnumTicketStatusFilter = {
  equals?: InputMaybe<TicketStatus>;
  in?: InputMaybe<Array<TicketStatus>>;
  not?: InputMaybe<NestedEnumTicketStatusFilter>;
  notIn?: InputMaybe<Array<TicketStatus>>;
};

export type EnumTicketTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<TicketType>;
};

export type EnumTicketTypeFilter = {
  equals?: InputMaybe<TicketType>;
  in?: InputMaybe<Array<TicketType>>;
  not?: InputMaybe<NestedEnumTicketTypeFilter>;
  notIn?: InputMaybe<Array<TicketType>>;
};

export type Estado = {
  __typename?: 'Estado';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type EstadoCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<EstadoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EstadoCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<EstadoCreateWithoutQuestionsInput>;
};

export type EstadoCreateOrConnectWithoutQuestionsInput = {
  create: EstadoCreateWithoutQuestionsInput;
  where: EstadoWhereUniqueInput;
};

export type EstadoCreateWithoutQuestionsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type EstadoRelationFilter = {
  is?: InputMaybe<EstadoWhereInput>;
  isNot?: InputMaybe<EstadoWhereInput>;
};

export type EstadoUpdateOneWithoutQuestionsNestedInput = {
  connect?: InputMaybe<EstadoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EstadoCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<EstadoCreateWithoutQuestionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<EstadoUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<EstadoUpsertWithoutQuestionsInput>;
};

export type EstadoUpdateWithoutQuestionsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EstadoUpsertWithoutQuestionsInput = {
  create: EstadoCreateWithoutQuestionsInput;
  update: EstadoUpdateWithoutQuestionsInput;
};

export type EstadoWhereInput = {
  AND?: InputMaybe<Array<EstadoWhereInput>>;
  NOT?: InputMaybe<Array<EstadoWhereInput>>;
  OR?: InputMaybe<Array<EstadoWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
};

export type EstadoWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Local = {
  __typename?: 'Local';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LocalCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<LocalWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocalCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<LocalCreateWithoutQuestionsInput>;
};

export type LocalCreateOrConnectWithoutQuestionsInput = {
  create: LocalCreateWithoutQuestionsInput;
  where: LocalWhereUniqueInput;
};

export type LocalCreateWithoutQuestionsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type LocalRelationFilter = {
  is?: InputMaybe<LocalWhereInput>;
  isNot?: InputMaybe<LocalWhereInput>;
};

export type LocalUpdateOneWithoutQuestionsNestedInput = {
  connect?: InputMaybe<LocalWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocalCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<LocalCreateWithoutQuestionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LocalUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<LocalUpsertWithoutQuestionsInput>;
};

export type LocalUpdateWithoutQuestionsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LocalUpsertWithoutQuestionsInput = {
  create: LocalCreateWithoutQuestionsInput;
  update: LocalUpdateWithoutQuestionsInput;
};

export type LocalWhereInput = {
  AND?: InputMaybe<Array<LocalWhereInput>>;
  NOT?: InputMaybe<Array<LocalWhereInput>>;
  OR?: InputMaybe<Array<LocalWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
};

export type LocalWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAnswer: Scalars['Boolean'];
  addComment: Scalars['Boolean'];
  addNotebook: Scalars['Boolean'];
  createManyNotebook: AffectedRowsOutput;
  createOneNotebook: Notebook;
  createSimulado: Simulado;
  deleteManyNotebook: AffectedRowsOutput;
  deleteOneNotebook?: Maybe<Notebook>;
  login: Scalars['Boolean'];
  refreshToken: Scalars['Boolean'];
  updateManyNotebook: AffectedRowsOutput;
  updateNotebook: Scalars['Boolean'];
  updateOneNotebook?: Maybe<Notebook>;
  upsertOneNotebook: Notebook;
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
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  questions: Array<Scalars['String']>;
};


export type MutationCreateManyNotebookArgs = {
  data: Array<NotebookCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneNotebookArgs = {
  data: NotebookCreateInput;
};


export type MutationCreateSimuladoArgs = {
  areas: Array<AreaToSimuladoInput>;
  name: Scalars['String'];
  type: SimuladoType;
};


export type MutationDeleteManyNotebookArgs = {
  where?: InputMaybe<NotebookWhereInput>;
};


export type MutationDeleteOneNotebookArgs = {
  where: NotebookWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateManyNotebookArgs = {
  data: NotebookUpdateManyMutationInput;
  where?: InputMaybe<NotebookWhereInput>;
};


export type MutationUpdateNotebookArgs = {
  name?: InputMaybe<Scalars['String']>;
  notebookId: Scalars['String'];
  questions?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationUpdateOneNotebookArgs = {
  data: NotebookUpdateInput;
  where: NotebookWhereUniqueInput;
};


export type MutationUpsertOneNotebookArgs = {
  create: NotebookCreateInput;
  update: NotebookUpdateInput;
  where: NotebookWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumTicketStatusFilter = {
  equals?: InputMaybe<TicketStatus>;
  in?: InputMaybe<Array<TicketStatus>>;
  not?: InputMaybe<NestedEnumTicketStatusFilter>;
  notIn?: InputMaybe<Array<TicketStatus>>;
};

export type NestedEnumTicketTypeFilter = {
  equals?: InputMaybe<TicketType>;
  in?: InputMaybe<Array<TicketType>>;
  not?: InputMaybe<NestedEnumTicketTypeFilter>;
  notIn?: InputMaybe<Array<TicketType>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Notebook = {
  __typename?: 'Notebook';
  _count?: Maybe<NotebookCount>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type NotebookCount = {
  __typename?: 'NotebookCount';
  questions: Scalars['Int'];
};

export type NotebookCountAggregate = {
  __typename?: 'NotebookCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  userId: Scalars['Int'];
};

export type NotebookCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotebookCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  questions?: InputMaybe<QuestionCreateNestedManyWithoutNotebooksInput>;
  user: UserCreateNestedOneWithoutNotebooksInput;
};

export type NotebookCreateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type NotebookCreateManyUserInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type NotebookCreateManyUserInputEnvelope = {
  data: Array<NotebookCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NotebookCreateNestedManyWithoutQuestionsInput = {
  connect?: InputMaybe<Array<NotebookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotebookCreateOrConnectWithoutQuestionsInput>>;
  create?: InputMaybe<Array<NotebookCreateWithoutQuestionsInput>>;
};

export type NotebookCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<NotebookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotebookCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NotebookCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotebookCreateManyUserInputEnvelope>;
};

export type NotebookCreateOrConnectWithoutQuestionsInput = {
  create: NotebookCreateWithoutQuestionsInput;
  where: NotebookWhereUniqueInput;
};

export type NotebookCreateOrConnectWithoutUserInput = {
  create: NotebookCreateWithoutUserInput;
  where: NotebookWhereUniqueInput;
};

export type NotebookCreateWithoutQuestionsInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  user: UserCreateNestedOneWithoutNotebooksInput;
};

export type NotebookCreateWithoutUserInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  questions?: InputMaybe<QuestionCreateNestedManyWithoutNotebooksInput>;
};

export type NotebookGroupBy = {
  __typename?: 'NotebookGroupBy';
  _count?: Maybe<NotebookCountAggregate>;
  _max?: Maybe<NotebookMaxAggregate>;
  _min?: Maybe<NotebookMinAggregate>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type NotebookListRelationFilter = {
  every?: InputMaybe<NotebookWhereInput>;
  none?: InputMaybe<NotebookWhereInput>;
  some?: InputMaybe<NotebookWhereInput>;
};

export type NotebookMaxAggregate = {
  __typename?: 'NotebookMaxAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type NotebookMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotebookMinAggregate = {
  __typename?: 'NotebookMinAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type NotebookMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotebookModel = {
  __typename?: 'NotebookModel';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  questions: Array<Question>;
};

export type NotebookOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum NotebookOrderByRelevanceFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UserId = 'userId'
}

export type NotebookOrderByRelevanceInput = {
  fields: Array<NotebookOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type NotebookOrderByWithAggregationInput = {
  _count?: InputMaybe<NotebookCountOrderByAggregateInput>;
  _max?: InputMaybe<NotebookMaxOrderByAggregateInput>;
  _min?: InputMaybe<NotebookMinOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotebookOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<NotebookOrderByRelevanceInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  questions?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum NotebookScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UserId = 'userId'
}

export type NotebookScalarWhereInput = {
  AND?: InputMaybe<Array<NotebookScalarWhereInput>>;
  NOT?: InputMaybe<Array<NotebookScalarWhereInput>>;
  OR?: InputMaybe<Array<NotebookScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type NotebookScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NotebookScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NotebookScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NotebookScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type NotebookUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutNotebooksNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotebooksNestedInput>;
};

export type NotebookUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NotebookUpdateManyWithWhereWithoutQuestionsInput = {
  data: NotebookUpdateManyMutationInput;
  where: NotebookScalarWhereInput;
};

export type NotebookUpdateManyWithWhereWithoutUserInput = {
  data: NotebookUpdateManyMutationInput;
  where: NotebookScalarWhereInput;
};

export type NotebookUpdateManyWithoutQuestionsNestedInput = {
  connect?: InputMaybe<Array<NotebookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotebookCreateOrConnectWithoutQuestionsInput>>;
  create?: InputMaybe<Array<NotebookCreateWithoutQuestionsInput>>;
  delete?: InputMaybe<Array<NotebookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotebookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotebookWhereUniqueInput>>;
  set?: InputMaybe<Array<NotebookWhereUniqueInput>>;
  update?: InputMaybe<Array<NotebookUpdateWithWhereUniqueWithoutQuestionsInput>>;
  updateMany?: InputMaybe<Array<NotebookUpdateManyWithWhereWithoutQuestionsInput>>;
  upsert?: InputMaybe<Array<NotebookUpsertWithWhereUniqueWithoutQuestionsInput>>;
};

export type NotebookUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<NotebookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotebookCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NotebookCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotebookCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<NotebookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotebookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotebookWhereUniqueInput>>;
  set?: InputMaybe<Array<NotebookWhereUniqueInput>>;
  update?: InputMaybe<Array<NotebookUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<NotebookUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<NotebookUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NotebookUpdateWithWhereUniqueWithoutQuestionsInput = {
  data: NotebookUpdateWithoutQuestionsInput;
  where: NotebookWhereUniqueInput;
};

export type NotebookUpdateWithWhereUniqueWithoutUserInput = {
  data: NotebookUpdateWithoutUserInput;
  where: NotebookWhereUniqueInput;
};

export type NotebookUpdateWithoutQuestionsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotebooksNestedInput>;
};

export type NotebookUpdateWithoutUserInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutNotebooksNestedInput>;
};

export type NotebookUpsertWithWhereUniqueWithoutQuestionsInput = {
  create: NotebookCreateWithoutQuestionsInput;
  update: NotebookUpdateWithoutQuestionsInput;
  where: NotebookWhereUniqueInput;
};

export type NotebookUpsertWithWhereUniqueWithoutUserInput = {
  create: NotebookCreateWithoutUserInput;
  update: NotebookUpdateWithoutUserInput;
  where: NotebookWhereUniqueInput;
};

export type NotebookWhereInput = {
  AND?: InputMaybe<Array<NotebookWhereInput>>;
  NOT?: InputMaybe<Array<NotebookWhereInput>>;
  OR?: InputMaybe<Array<NotebookWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type NotebookWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Perfil = {
  __typename?: 'Perfil';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PerfilCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<PerfilWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PerfilCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<PerfilCreateWithoutQuestionsInput>;
};

export type PerfilCreateOrConnectWithoutQuestionsInput = {
  create: PerfilCreateWithoutQuestionsInput;
  where: PerfilWhereUniqueInput;
};

export type PerfilCreateWithoutQuestionsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type PerfilRelationFilter = {
  is?: InputMaybe<PerfilWhereInput>;
  isNot?: InputMaybe<PerfilWhereInput>;
};

export type PerfilUpdateOneWithoutQuestionsNestedInput = {
  connect?: InputMaybe<PerfilWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PerfilCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<PerfilCreateWithoutQuestionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PerfilUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<PerfilUpsertWithoutQuestionsInput>;
};

export type PerfilUpdateWithoutQuestionsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PerfilUpsertWithoutQuestionsInput = {
  create: PerfilCreateWithoutQuestionsInput;
  update: PerfilUpdateWithoutQuestionsInput;
};

export type PerfilWhereInput = {
  AND?: InputMaybe<Array<PerfilWhereInput>>;
  NOT?: InputMaybe<Array<PerfilWhereInput>>;
  OR?: InputMaybe<Array<PerfilWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
};

export type PerfilWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProcessoSeletivo = {
  __typename?: 'ProcessoSeletivo';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ProcessoSeletivoCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<ProcessoSeletivoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProcessoSeletivoCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<ProcessoSeletivoCreateWithoutQuestionsInput>;
};

export type ProcessoSeletivoCreateOrConnectWithoutQuestionsInput = {
  create: ProcessoSeletivoCreateWithoutQuestionsInput;
  where: ProcessoSeletivoWhereUniqueInput;
};

export type ProcessoSeletivoCreateWithoutQuestionsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProcessoSeletivoRelationFilter = {
  is?: InputMaybe<ProcessoSeletivoWhereInput>;
  isNot?: InputMaybe<ProcessoSeletivoWhereInput>;
};

export type ProcessoSeletivoUpdateOneRequiredWithoutQuestionsNestedInput = {
  connect?: InputMaybe<ProcessoSeletivoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProcessoSeletivoCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<ProcessoSeletivoCreateWithoutQuestionsInput>;
  update?: InputMaybe<ProcessoSeletivoUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<ProcessoSeletivoUpsertWithoutQuestionsInput>;
};

export type ProcessoSeletivoUpdateWithoutQuestionsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProcessoSeletivoUpsertWithoutQuestionsInput = {
  create: ProcessoSeletivoCreateWithoutQuestionsInput;
  update: ProcessoSeletivoUpdateWithoutQuestionsInput;
};

export type ProcessoSeletivoWhereInput = {
  AND?: InputMaybe<Array<ProcessoSeletivoWhereInput>>;
  NOT?: InputMaybe<Array<ProcessoSeletivoWhereInput>>;
  OR?: InputMaybe<Array<ProcessoSeletivoWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
};

export type ProcessoSeletivoWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateNotebook: AggregateNotebook;
  anos: Array<Ano>;
  areas: Array<Area>;
  bancas: Array<Banca>;
  estados: Array<Estado>;
  findFirstNotebook?: Maybe<Notebook>;
  findFirstNotebookOrThrow?: Maybe<Notebook>;
  getNotebook?: Maybe<Notebook>;
  groupByNotebook: Array<NotebookGroupBy>;
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


export type QueryAggregateNotebookArgs = {
  cursor?: InputMaybe<NotebookWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NotebookOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotebookWhereInput>;
};


export type QueryFindFirstNotebookArgs = {
  cursor?: InputMaybe<NotebookWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotebookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotebookOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotebookWhereInput>;
};


export type QueryFindFirstNotebookOrThrowArgs = {
  cursor?: InputMaybe<NotebookWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotebookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotebookOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotebookWhereInput>;
};


export type QueryGetNotebookArgs = {
  where: NotebookWhereUniqueInput;
};


export type QueryGroupByNotebookArgs = {
  by: Array<NotebookScalarFieldEnum>;
  having?: InputMaybe<NotebookScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NotebookOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotebookWhereInput>;
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


export type QuerySimuladosArgs = {
  itemsPerPage?: InputMaybe<Scalars['Float']>;
  page?: InputMaybe<Scalars['Float']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

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

export type QuestionCreateNestedManyWithoutNotebooksInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutNotebooksInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutNotebooksInput>>;
};

export type QuestionCreateNestedManyWithoutSimuladosInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutSimuladosInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutSimuladosInput>>;
};

export type QuestionCreateNestedOneWithoutAlternativesInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutAlternativesInput>;
  create?: InputMaybe<QuestionCreateWithoutAlternativesInput>;
};

export type QuestionCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<QuestionCreateWithoutCommentsInput>;
};

export type QuestionCreateNestedOneWithoutResponsesInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<QuestionCreateWithoutResponsesInput>;
};

export type QuestionCreateOrConnectWithoutAlternativesInput = {
  create: QuestionCreateWithoutAlternativesInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutCommentsInput = {
  create: QuestionCreateWithoutCommentsInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutNotebooksInput = {
  create: QuestionCreateWithoutNotebooksInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutResponsesInput = {
  create: QuestionCreateWithoutResponsesInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutSimuladosInput = {
  create: QuestionCreateWithoutSimuladosInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateWithoutAlternativesInput = {
  ano?: InputMaybe<AnoCreateNestedOneWithoutQuestionsInput>;
  area?: InputMaybe<AreaCreateNestedOneWithoutQuestionsInput>;
  banca?: InputMaybe<BancaCreateNestedOneWithoutQuestionsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutQuestionInput>;
  enunciado: Scalars['String'];
  estado?: InputMaybe<EstadoCreateNestedOneWithoutQuestionsInput>;
  id?: InputMaybe<Scalars['String']>;
  local?: InputMaybe<LocalCreateNestedOneWithoutQuestionsInput>;
  notebooks?: InputMaybe<NotebookCreateNestedManyWithoutQuestionsInput>;
  perfil?: InputMaybe<PerfilCreateNestedOneWithoutQuestionsInput>;
  processoSeletivo: ProcessoSeletivoCreateNestedOneWithoutQuestionsInput;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutQuestionInput>;
  simulados?: InputMaybe<SimuladoCreateNestedManyWithoutQuestionsInput>;
  subarea?: InputMaybe<SubareaCreateNestedOneWithoutQuestionsInput>;
};

export type QuestionCreateWithoutCommentsInput = {
  alternatives?: InputMaybe<AlternativeCreateNestedManyWithoutQuestionInput>;
  ano?: InputMaybe<AnoCreateNestedOneWithoutQuestionsInput>;
  area?: InputMaybe<AreaCreateNestedOneWithoutQuestionsInput>;
  banca?: InputMaybe<BancaCreateNestedOneWithoutQuestionsInput>;
  enunciado: Scalars['String'];
  estado?: InputMaybe<EstadoCreateNestedOneWithoutQuestionsInput>;
  id?: InputMaybe<Scalars['String']>;
  local?: InputMaybe<LocalCreateNestedOneWithoutQuestionsInput>;
  notebooks?: InputMaybe<NotebookCreateNestedManyWithoutQuestionsInput>;
  perfil?: InputMaybe<PerfilCreateNestedOneWithoutQuestionsInput>;
  processoSeletivo: ProcessoSeletivoCreateNestedOneWithoutQuestionsInput;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutQuestionInput>;
  simulados?: InputMaybe<SimuladoCreateNestedManyWithoutQuestionsInput>;
  subarea?: InputMaybe<SubareaCreateNestedOneWithoutQuestionsInput>;
};

export type QuestionCreateWithoutNotebooksInput = {
  alternatives?: InputMaybe<AlternativeCreateNestedManyWithoutQuestionInput>;
  ano?: InputMaybe<AnoCreateNestedOneWithoutQuestionsInput>;
  area?: InputMaybe<AreaCreateNestedOneWithoutQuestionsInput>;
  banca?: InputMaybe<BancaCreateNestedOneWithoutQuestionsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutQuestionInput>;
  enunciado: Scalars['String'];
  estado?: InputMaybe<EstadoCreateNestedOneWithoutQuestionsInput>;
  id?: InputMaybe<Scalars['String']>;
  local?: InputMaybe<LocalCreateNestedOneWithoutQuestionsInput>;
  perfil?: InputMaybe<PerfilCreateNestedOneWithoutQuestionsInput>;
  processoSeletivo: ProcessoSeletivoCreateNestedOneWithoutQuestionsInput;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutQuestionInput>;
  simulados?: InputMaybe<SimuladoCreateNestedManyWithoutQuestionsInput>;
  subarea?: InputMaybe<SubareaCreateNestedOneWithoutQuestionsInput>;
};

export type QuestionCreateWithoutResponsesInput = {
  alternatives?: InputMaybe<AlternativeCreateNestedManyWithoutQuestionInput>;
  ano?: InputMaybe<AnoCreateNestedOneWithoutQuestionsInput>;
  area?: InputMaybe<AreaCreateNestedOneWithoutQuestionsInput>;
  banca?: InputMaybe<BancaCreateNestedOneWithoutQuestionsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutQuestionInput>;
  enunciado: Scalars['String'];
  estado?: InputMaybe<EstadoCreateNestedOneWithoutQuestionsInput>;
  id?: InputMaybe<Scalars['String']>;
  local?: InputMaybe<LocalCreateNestedOneWithoutQuestionsInput>;
  notebooks?: InputMaybe<NotebookCreateNestedManyWithoutQuestionsInput>;
  perfil?: InputMaybe<PerfilCreateNestedOneWithoutQuestionsInput>;
  processoSeletivo: ProcessoSeletivoCreateNestedOneWithoutQuestionsInput;
  simulados?: InputMaybe<SimuladoCreateNestedManyWithoutQuestionsInput>;
  subarea?: InputMaybe<SubareaCreateNestedOneWithoutQuestionsInput>;
};

export type QuestionCreateWithoutSimuladosInput = {
  alternatives?: InputMaybe<AlternativeCreateNestedManyWithoutQuestionInput>;
  ano?: InputMaybe<AnoCreateNestedOneWithoutQuestionsInput>;
  area?: InputMaybe<AreaCreateNestedOneWithoutQuestionsInput>;
  banca?: InputMaybe<BancaCreateNestedOneWithoutQuestionsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutQuestionInput>;
  enunciado: Scalars['String'];
  estado?: InputMaybe<EstadoCreateNestedOneWithoutQuestionsInput>;
  id?: InputMaybe<Scalars['String']>;
  local?: InputMaybe<LocalCreateNestedOneWithoutQuestionsInput>;
  notebooks?: InputMaybe<NotebookCreateNestedManyWithoutQuestionsInput>;
  perfil?: InputMaybe<PerfilCreateNestedOneWithoutQuestionsInput>;
  processoSeletivo: ProcessoSeletivoCreateNestedOneWithoutQuestionsInput;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutQuestionInput>;
  subarea?: InputMaybe<SubareaCreateNestedOneWithoutQuestionsInput>;
};

export type QuestionListRelationFilter = {
  every?: InputMaybe<QuestionWhereInput>;
  none?: InputMaybe<QuestionWhereInput>;
  some?: InputMaybe<QuestionWhereInput>;
};

export type QuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionRelationFilter = {
  is?: InputMaybe<QuestionWhereInput>;
  isNot?: InputMaybe<QuestionWhereInput>;
};

export type QuestionScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionScalarWhereInput>>;
  anoId?: InputMaybe<StringNullableFilter>;
  areaId?: InputMaybe<StringNullableFilter>;
  bancaId?: InputMaybe<StringNullableFilter>;
  enunciado?: InputMaybe<StringFilter>;
  estadoId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  localId?: InputMaybe<StringNullableFilter>;
  perfilId?: InputMaybe<StringNullableFilter>;
  processoSeletivoId?: InputMaybe<StringFilter>;
  subareaId?: InputMaybe<StringNullableFilter>;
};

export type QuestionUpdateManyMutationInput = {
  enunciado?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyWithWhereWithoutNotebooksInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithWhereWithoutSimuladosInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithoutNotebooksNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutNotebooksInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutNotebooksInput>>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutNotebooksInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutNotebooksInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutNotebooksInput>>;
};

export type QuestionUpdateManyWithoutSimuladosNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutSimuladosInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutSimuladosInput>>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutSimuladosInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutSimuladosInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutSimuladosInput>>;
};

export type QuestionUpdateOneRequiredWithoutAlternativesNestedInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutAlternativesInput>;
  create?: InputMaybe<QuestionCreateWithoutAlternativesInput>;
  update?: InputMaybe<QuestionUpdateWithoutAlternativesInput>;
  upsert?: InputMaybe<QuestionUpsertWithoutAlternativesInput>;
};

export type QuestionUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<QuestionCreateWithoutCommentsInput>;
  update?: InputMaybe<QuestionUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<QuestionUpsertWithoutCommentsInput>;
};

export type QuestionUpdateOneRequiredWithoutResponsesNestedInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<QuestionCreateWithoutResponsesInput>;
  update?: InputMaybe<QuestionUpdateWithoutResponsesInput>;
  upsert?: InputMaybe<QuestionUpsertWithoutResponsesInput>;
};

export type QuestionUpdateWithWhereUniqueWithoutNotebooksInput = {
  data: QuestionUpdateWithoutNotebooksInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithWhereUniqueWithoutSimuladosInput = {
  data: QuestionUpdateWithoutSimuladosInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithoutAlternativesInput = {
  ano?: InputMaybe<AnoUpdateOneWithoutQuestionsNestedInput>;
  area?: InputMaybe<AreaUpdateOneWithoutQuestionsNestedInput>;
  banca?: InputMaybe<BancaUpdateOneWithoutQuestionsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutQuestionNestedInput>;
  enunciado?: InputMaybe<StringFieldUpdateOperationsInput>;
  estado?: InputMaybe<EstadoUpdateOneWithoutQuestionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local?: InputMaybe<LocalUpdateOneWithoutQuestionsNestedInput>;
  notebooks?: InputMaybe<NotebookUpdateManyWithoutQuestionsNestedInput>;
  perfil?: InputMaybe<PerfilUpdateOneWithoutQuestionsNestedInput>;
  processoSeletivo?: InputMaybe<ProcessoSeletivoUpdateOneRequiredWithoutQuestionsNestedInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutQuestionNestedInput>;
  simulados?: InputMaybe<SimuladoUpdateManyWithoutQuestionsNestedInput>;
  subarea?: InputMaybe<SubareaUpdateOneWithoutQuestionsNestedInput>;
};

export type QuestionUpdateWithoutCommentsInput = {
  alternatives?: InputMaybe<AlternativeUpdateManyWithoutQuestionNestedInput>;
  ano?: InputMaybe<AnoUpdateOneWithoutQuestionsNestedInput>;
  area?: InputMaybe<AreaUpdateOneWithoutQuestionsNestedInput>;
  banca?: InputMaybe<BancaUpdateOneWithoutQuestionsNestedInput>;
  enunciado?: InputMaybe<StringFieldUpdateOperationsInput>;
  estado?: InputMaybe<EstadoUpdateOneWithoutQuestionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local?: InputMaybe<LocalUpdateOneWithoutQuestionsNestedInput>;
  notebooks?: InputMaybe<NotebookUpdateManyWithoutQuestionsNestedInput>;
  perfil?: InputMaybe<PerfilUpdateOneWithoutQuestionsNestedInput>;
  processoSeletivo?: InputMaybe<ProcessoSeletivoUpdateOneRequiredWithoutQuestionsNestedInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutQuestionNestedInput>;
  simulados?: InputMaybe<SimuladoUpdateManyWithoutQuestionsNestedInput>;
  subarea?: InputMaybe<SubareaUpdateOneWithoutQuestionsNestedInput>;
};

export type QuestionUpdateWithoutNotebooksInput = {
  alternatives?: InputMaybe<AlternativeUpdateManyWithoutQuestionNestedInput>;
  ano?: InputMaybe<AnoUpdateOneWithoutQuestionsNestedInput>;
  area?: InputMaybe<AreaUpdateOneWithoutQuestionsNestedInput>;
  banca?: InputMaybe<BancaUpdateOneWithoutQuestionsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutQuestionNestedInput>;
  enunciado?: InputMaybe<StringFieldUpdateOperationsInput>;
  estado?: InputMaybe<EstadoUpdateOneWithoutQuestionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local?: InputMaybe<LocalUpdateOneWithoutQuestionsNestedInput>;
  perfil?: InputMaybe<PerfilUpdateOneWithoutQuestionsNestedInput>;
  processoSeletivo?: InputMaybe<ProcessoSeletivoUpdateOneRequiredWithoutQuestionsNestedInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutQuestionNestedInput>;
  simulados?: InputMaybe<SimuladoUpdateManyWithoutQuestionsNestedInput>;
  subarea?: InputMaybe<SubareaUpdateOneWithoutQuestionsNestedInput>;
};

export type QuestionUpdateWithoutResponsesInput = {
  alternatives?: InputMaybe<AlternativeUpdateManyWithoutQuestionNestedInput>;
  ano?: InputMaybe<AnoUpdateOneWithoutQuestionsNestedInput>;
  area?: InputMaybe<AreaUpdateOneWithoutQuestionsNestedInput>;
  banca?: InputMaybe<BancaUpdateOneWithoutQuestionsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutQuestionNestedInput>;
  enunciado?: InputMaybe<StringFieldUpdateOperationsInput>;
  estado?: InputMaybe<EstadoUpdateOneWithoutQuestionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local?: InputMaybe<LocalUpdateOneWithoutQuestionsNestedInput>;
  notebooks?: InputMaybe<NotebookUpdateManyWithoutQuestionsNestedInput>;
  perfil?: InputMaybe<PerfilUpdateOneWithoutQuestionsNestedInput>;
  processoSeletivo?: InputMaybe<ProcessoSeletivoUpdateOneRequiredWithoutQuestionsNestedInput>;
  simulados?: InputMaybe<SimuladoUpdateManyWithoutQuestionsNestedInput>;
  subarea?: InputMaybe<SubareaUpdateOneWithoutQuestionsNestedInput>;
};

export type QuestionUpdateWithoutSimuladosInput = {
  alternatives?: InputMaybe<AlternativeUpdateManyWithoutQuestionNestedInput>;
  ano?: InputMaybe<AnoUpdateOneWithoutQuestionsNestedInput>;
  area?: InputMaybe<AreaUpdateOneWithoutQuestionsNestedInput>;
  banca?: InputMaybe<BancaUpdateOneWithoutQuestionsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutQuestionNestedInput>;
  enunciado?: InputMaybe<StringFieldUpdateOperationsInput>;
  estado?: InputMaybe<EstadoUpdateOneWithoutQuestionsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  local?: InputMaybe<LocalUpdateOneWithoutQuestionsNestedInput>;
  notebooks?: InputMaybe<NotebookUpdateManyWithoutQuestionsNestedInput>;
  perfil?: InputMaybe<PerfilUpdateOneWithoutQuestionsNestedInput>;
  processoSeletivo?: InputMaybe<ProcessoSeletivoUpdateOneRequiredWithoutQuestionsNestedInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutQuestionNestedInput>;
  subarea?: InputMaybe<SubareaUpdateOneWithoutQuestionsNestedInput>;
};

export type QuestionUpsertWithWhereUniqueWithoutNotebooksInput = {
  create: QuestionCreateWithoutNotebooksInput;
  update: QuestionUpdateWithoutNotebooksInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutSimuladosInput = {
  create: QuestionCreateWithoutSimuladosInput;
  update: QuestionUpdateWithoutSimuladosInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithoutAlternativesInput = {
  create: QuestionCreateWithoutAlternativesInput;
  update: QuestionUpdateWithoutAlternativesInput;
};

export type QuestionUpsertWithoutCommentsInput = {
  create: QuestionCreateWithoutCommentsInput;
  update: QuestionUpdateWithoutCommentsInput;
};

export type QuestionUpsertWithoutResponsesInput = {
  create: QuestionCreateWithoutResponsesInput;
  update: QuestionUpdateWithoutResponsesInput;
};

export type QuestionWhereInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>;
  NOT?: InputMaybe<Array<QuestionWhereInput>>;
  OR?: InputMaybe<Array<QuestionWhereInput>>;
  alternatives?: InputMaybe<AlternativeListRelationFilter>;
  ano?: InputMaybe<AnoRelationFilter>;
  anoId?: InputMaybe<StringNullableFilter>;
  area?: InputMaybe<AreaRelationFilter>;
  areaId?: InputMaybe<StringNullableFilter>;
  banca?: InputMaybe<BancaRelationFilter>;
  bancaId?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  enunciado?: InputMaybe<StringFilter>;
  estado?: InputMaybe<EstadoRelationFilter>;
  estadoId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  local?: InputMaybe<LocalRelationFilter>;
  localId?: InputMaybe<StringNullableFilter>;
  notebooks?: InputMaybe<NotebookListRelationFilter>;
  perfil?: InputMaybe<PerfilRelationFilter>;
  perfilId?: InputMaybe<StringNullableFilter>;
  processoSeletivo?: InputMaybe<ProcessoSeletivoRelationFilter>;
  processoSeletivoId?: InputMaybe<StringFilter>;
  responses?: InputMaybe<ResponseListRelationFilter>;
  simulados?: InputMaybe<SimuladoListRelationFilter>;
  subarea?: InputMaybe<SubareaRelationFilter>;
  subareaId?: InputMaybe<StringNullableFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type QuestionsResponse = {
  __typename?: 'QuestionsResponse';
  pagesQuantity: Scalars['Float'];
  questions: Array<Question>;
};

export type RefreshTokenCreateManyUserInput = {
  createdAt: Scalars['DateTime'];
  expiresAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
};

export type RefreshTokenCreateManyUserInputEnvelope = {
  data: Array<RefreshTokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RefreshTokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RefreshTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
};

export type RefreshTokenCreateOrConnectWithoutUserInput = {
  create: RefreshTokenCreateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenCreateWithoutUserInput = {
  createdAt: Scalars['DateTime'];
  expiresAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
};

export type RefreshTokenListRelationFilter = {
  every?: InputMaybe<RefreshTokenWhereInput>;
  none?: InputMaybe<RefreshTokenWhereInput>;
  some?: InputMaybe<RefreshTokenWhereInput>;
};

export type RefreshTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RefreshTokenScalarWhereInput = {
  AND?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  revoked?: InputMaybe<BoolFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RefreshTokenUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  revoked?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
  data: RefreshTokenUpdateManyMutationInput;
  where: RefreshTokenScalarWhereInput;
};

export type RefreshTokenUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RefreshTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  update?: InputMaybe<Array<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RefreshTokenUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
  data: RefreshTokenUpdateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  revoked?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
  create: RefreshTokenCreateWithoutUserInput;
  update: RefreshTokenUpdateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenWhereInput = {
  AND?: InputMaybe<Array<RefreshTokenWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  revoked?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RefreshTokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ResponseCreateManyAlternativeInput = {
  correct: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  questionId: Scalars['String'];
  simuladoId?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type ResponseCreateManyAlternativeInputEnvelope = {
  data: Array<ResponseCreateManyAlternativeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseCreateManyQuestionInput = {
  alternativeId: Scalars['String'];
  correct: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  simuladoId?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type ResponseCreateManyQuestionInputEnvelope = {
  data: Array<ResponseCreateManyQuestionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseCreateManySimuladoInput = {
  alternativeId: Scalars['String'];
  correct: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  questionId: Scalars['String'];
  userId: Scalars['String'];
};

export type ResponseCreateManySimuladoInputEnvelope = {
  data: Array<ResponseCreateManySimuladoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseCreateManyUserInput = {
  alternativeId: Scalars['String'];
  correct: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  questionId: Scalars['String'];
  simuladoId?: InputMaybe<Scalars['String']>;
};

export type ResponseCreateManyUserInputEnvelope = {
  data: Array<ResponseCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseCreateNestedManyWithoutAlternativeInput = {
  connect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseCreateOrConnectWithoutAlternativeInput>>;
  create?: InputMaybe<Array<ResponseCreateWithoutAlternativeInput>>;
  createMany?: InputMaybe<ResponseCreateManyAlternativeInputEnvelope>;
};

export type ResponseCreateNestedManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<ResponseCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<ResponseCreateManyQuestionInputEnvelope>;
};

export type ResponseCreateNestedManyWithoutSimuladoInput = {
  connect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseCreateOrConnectWithoutSimuladoInput>>;
  create?: InputMaybe<Array<ResponseCreateWithoutSimuladoInput>>;
  createMany?: InputMaybe<ResponseCreateManySimuladoInputEnvelope>;
};

export type ResponseCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ResponseCreateWithoutUserInput>>;
  createMany?: InputMaybe<ResponseCreateManyUserInputEnvelope>;
};

export type ResponseCreateOrConnectWithoutAlternativeInput = {
  create: ResponseCreateWithoutAlternativeInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseCreateOrConnectWithoutQuestionInput = {
  create: ResponseCreateWithoutQuestionInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseCreateOrConnectWithoutSimuladoInput = {
  create: ResponseCreateWithoutSimuladoInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseCreateOrConnectWithoutUserInput = {
  create: ResponseCreateWithoutUserInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseCreateWithoutAlternativeInput = {
  correct: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  question: QuestionCreateNestedOneWithoutResponsesInput;
  simulado?: InputMaybe<SimuladoCreateNestedOneWithoutResponsesInput>;
  user: UserCreateNestedOneWithoutResponsesInput;
};

export type ResponseCreateWithoutQuestionInput = {
  alternative: AlternativeCreateNestedOneWithoutResponsesInput;
  correct: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  simulado?: InputMaybe<SimuladoCreateNestedOneWithoutResponsesInput>;
  user: UserCreateNestedOneWithoutResponsesInput;
};

export type ResponseCreateWithoutSimuladoInput = {
  alternative: AlternativeCreateNestedOneWithoutResponsesInput;
  correct: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  question: QuestionCreateNestedOneWithoutResponsesInput;
  user: UserCreateNestedOneWithoutResponsesInput;
};

export type ResponseCreateWithoutUserInput = {
  alternative: AlternativeCreateNestedOneWithoutResponsesInput;
  correct: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  question: QuestionCreateNestedOneWithoutResponsesInput;
  simulado?: InputMaybe<SimuladoCreateNestedOneWithoutResponsesInput>;
};

export type ResponseListRelationFilter = {
  every?: InputMaybe<ResponseWhereInput>;
  none?: InputMaybe<ResponseWhereInput>;
  some?: InputMaybe<ResponseWhereInput>;
};

export type ResponseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ResponseScalarWhereInput = {
  AND?: InputMaybe<Array<ResponseScalarWhereInput>>;
  NOT?: InputMaybe<Array<ResponseScalarWhereInput>>;
  OR?: InputMaybe<Array<ResponseScalarWhereInput>>;
  alternativeId?: InputMaybe<StringFilter>;
  correct?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  questionId?: InputMaybe<StringFilter>;
  simuladoId?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ResponseUpdateManyMutationInput = {
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ResponseUpdateManyWithWhereWithoutAlternativeInput = {
  data: ResponseUpdateManyMutationInput;
  where: ResponseScalarWhereInput;
};

export type ResponseUpdateManyWithWhereWithoutQuestionInput = {
  data: ResponseUpdateManyMutationInput;
  where: ResponseScalarWhereInput;
};

export type ResponseUpdateManyWithWhereWithoutSimuladoInput = {
  data: ResponseUpdateManyMutationInput;
  where: ResponseScalarWhereInput;
};

export type ResponseUpdateManyWithWhereWithoutUserInput = {
  data: ResponseUpdateManyMutationInput;
  where: ResponseScalarWhereInput;
};

export type ResponseUpdateManyWithoutAlternativeNestedInput = {
  connect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseCreateOrConnectWithoutAlternativeInput>>;
  create?: InputMaybe<Array<ResponseCreateWithoutAlternativeInput>>;
  createMany?: InputMaybe<ResponseCreateManyAlternativeInputEnvelope>;
  delete?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ResponseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  set?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  update?: InputMaybe<Array<ResponseUpdateWithWhereUniqueWithoutAlternativeInput>>;
  updateMany?: InputMaybe<Array<ResponseUpdateManyWithWhereWithoutAlternativeInput>>;
  upsert?: InputMaybe<Array<ResponseUpsertWithWhereUniqueWithoutAlternativeInput>>;
};

export type ResponseUpdateManyWithoutQuestionNestedInput = {
  connect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<ResponseCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<ResponseCreateManyQuestionInputEnvelope>;
  delete?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ResponseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  set?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  update?: InputMaybe<Array<ResponseUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: InputMaybe<Array<ResponseUpdateManyWithWhereWithoutQuestionInput>>;
  upsert?: InputMaybe<Array<ResponseUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type ResponseUpdateManyWithoutSimuladoNestedInput = {
  connect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseCreateOrConnectWithoutSimuladoInput>>;
  create?: InputMaybe<Array<ResponseCreateWithoutSimuladoInput>>;
  createMany?: InputMaybe<ResponseCreateManySimuladoInputEnvelope>;
  delete?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ResponseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  set?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  update?: InputMaybe<Array<ResponseUpdateWithWhereUniqueWithoutSimuladoInput>>;
  updateMany?: InputMaybe<Array<ResponseUpdateManyWithWhereWithoutSimuladoInput>>;
  upsert?: InputMaybe<Array<ResponseUpsertWithWhereUniqueWithoutSimuladoInput>>;
};

export type ResponseUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ResponseCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ResponseCreateWithoutUserInput>>;
  createMany?: InputMaybe<ResponseCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ResponseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  set?: InputMaybe<Array<ResponseWhereUniqueInput>>;
  update?: InputMaybe<Array<ResponseUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ResponseUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ResponseUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ResponseUpdateWithWhereUniqueWithoutAlternativeInput = {
  data: ResponseUpdateWithoutAlternativeInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpdateWithWhereUniqueWithoutQuestionInput = {
  data: ResponseUpdateWithoutQuestionInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpdateWithWhereUniqueWithoutSimuladoInput = {
  data: ResponseUpdateWithoutSimuladoInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpdateWithWhereUniqueWithoutUserInput = {
  data: ResponseUpdateWithoutUserInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpdateWithoutAlternativeInput = {
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneRequiredWithoutResponsesNestedInput>;
  simulado?: InputMaybe<SimuladoUpdateOneWithoutResponsesNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutResponsesNestedInput>;
};

export type ResponseUpdateWithoutQuestionInput = {
  alternative?: InputMaybe<AlternativeUpdateOneRequiredWithoutResponsesNestedInput>;
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  simulado?: InputMaybe<SimuladoUpdateOneWithoutResponsesNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutResponsesNestedInput>;
};

export type ResponseUpdateWithoutSimuladoInput = {
  alternative?: InputMaybe<AlternativeUpdateOneRequiredWithoutResponsesNestedInput>;
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneRequiredWithoutResponsesNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutResponsesNestedInput>;
};

export type ResponseUpdateWithoutUserInput = {
  alternative?: InputMaybe<AlternativeUpdateOneRequiredWithoutResponsesNestedInput>;
  correct?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneRequiredWithoutResponsesNestedInput>;
  simulado?: InputMaybe<SimuladoUpdateOneWithoutResponsesNestedInput>;
};

export type ResponseUpsertWithWhereUniqueWithoutAlternativeInput = {
  create: ResponseCreateWithoutAlternativeInput;
  update: ResponseUpdateWithoutAlternativeInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpsertWithWhereUniqueWithoutQuestionInput = {
  create: ResponseCreateWithoutQuestionInput;
  update: ResponseUpdateWithoutQuestionInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpsertWithWhereUniqueWithoutSimuladoInput = {
  create: ResponseCreateWithoutSimuladoInput;
  update: ResponseUpdateWithoutSimuladoInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpsertWithWhereUniqueWithoutUserInput = {
  create: ResponseCreateWithoutUserInput;
  update: ResponseUpdateWithoutUserInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseWhereInput = {
  AND?: InputMaybe<Array<ResponseWhereInput>>;
  NOT?: InputMaybe<Array<ResponseWhereInput>>;
  OR?: InputMaybe<Array<ResponseWhereInput>>;
  alternative?: InputMaybe<AlternativeRelationFilter>;
  alternativeId?: InputMaybe<StringFilter>;
  correct?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
  simulado?: InputMaybe<SimuladoRelationFilter>;
  simuladoId?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ResponseWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
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

export type SimuladoCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  totalMinutes: Scalars['Int'];
  totalQuestions: Scalars['Int'];
};

export type SimuladoCreateManyUserInputEnvelope = {
  data: Array<SimuladoCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SimuladoCreateNestedManyWithoutQuestionsInput = {
  connect?: InputMaybe<Array<SimuladoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SimuladoCreateOrConnectWithoutQuestionsInput>>;
  create?: InputMaybe<Array<SimuladoCreateWithoutQuestionsInput>>;
};

export type SimuladoCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SimuladoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SimuladoCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SimuladoCreateWithoutUserInput>>;
  createMany?: InputMaybe<SimuladoCreateManyUserInputEnvelope>;
};

export type SimuladoCreateNestedOneWithoutResponsesInput = {
  connect?: InputMaybe<SimuladoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SimuladoCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<SimuladoCreateWithoutResponsesInput>;
};

export type SimuladoCreateOrConnectWithoutQuestionsInput = {
  create: SimuladoCreateWithoutQuestionsInput;
  where: SimuladoWhereUniqueInput;
};

export type SimuladoCreateOrConnectWithoutResponsesInput = {
  create: SimuladoCreateWithoutResponsesInput;
  where: SimuladoWhereUniqueInput;
};

export type SimuladoCreateOrConnectWithoutUserInput = {
  create: SimuladoCreateWithoutUserInput;
  where: SimuladoWhereUniqueInput;
};

export type SimuladoCreateWithoutQuestionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  responses?: InputMaybe<ResponseCreateNestedManyWithoutSimuladoInput>;
  totalMinutes: Scalars['Int'];
  totalQuestions: Scalars['Int'];
  user: UserCreateNestedOneWithoutSimuladosInput;
};

export type SimuladoCreateWithoutResponsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  questions?: InputMaybe<QuestionCreateNestedManyWithoutSimuladosInput>;
  totalMinutes: Scalars['Int'];
  totalQuestions: Scalars['Int'];
  user: UserCreateNestedOneWithoutSimuladosInput;
};

export type SimuladoCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  questions?: InputMaybe<QuestionCreateNestedManyWithoutSimuladosInput>;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutSimuladoInput>;
  totalMinutes: Scalars['Int'];
  totalQuestions: Scalars['Int'];
};

export type SimuladoListRelationFilter = {
  every?: InputMaybe<SimuladoWhereInput>;
  none?: InputMaybe<SimuladoWhereInput>;
  some?: InputMaybe<SimuladoWhereInput>;
};

export type SimuladoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SimuladoRelationFilter = {
  is?: InputMaybe<SimuladoWhereInput>;
  isNot?: InputMaybe<SimuladoWhereInput>;
};

export type SimuladoScalarWhereInput = {
  AND?: InputMaybe<Array<SimuladoScalarWhereInput>>;
  NOT?: InputMaybe<Array<SimuladoScalarWhereInput>>;
  OR?: InputMaybe<Array<SimuladoScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  totalMinutes?: InputMaybe<IntFilter>;
  totalQuestions?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum SimuladoType {
  Custom = 'Custom',
  Random = 'Random'
}

export type SimuladoUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  totalMinutes?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalQuestions?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SimuladoUpdateManyWithWhereWithoutQuestionsInput = {
  data: SimuladoUpdateManyMutationInput;
  where: SimuladoScalarWhereInput;
};

export type SimuladoUpdateManyWithWhereWithoutUserInput = {
  data: SimuladoUpdateManyMutationInput;
  where: SimuladoScalarWhereInput;
};

export type SimuladoUpdateManyWithoutQuestionsNestedInput = {
  connect?: InputMaybe<Array<SimuladoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SimuladoCreateOrConnectWithoutQuestionsInput>>;
  create?: InputMaybe<Array<SimuladoCreateWithoutQuestionsInput>>;
  delete?: InputMaybe<Array<SimuladoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SimuladoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SimuladoWhereUniqueInput>>;
  set?: InputMaybe<Array<SimuladoWhereUniqueInput>>;
  update?: InputMaybe<Array<SimuladoUpdateWithWhereUniqueWithoutQuestionsInput>>;
  updateMany?: InputMaybe<Array<SimuladoUpdateManyWithWhereWithoutQuestionsInput>>;
  upsert?: InputMaybe<Array<SimuladoUpsertWithWhereUniqueWithoutQuestionsInput>>;
};

export type SimuladoUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SimuladoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SimuladoCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SimuladoCreateWithoutUserInput>>;
  createMany?: InputMaybe<SimuladoCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SimuladoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SimuladoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SimuladoWhereUniqueInput>>;
  set?: InputMaybe<Array<SimuladoWhereUniqueInput>>;
  update?: InputMaybe<Array<SimuladoUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SimuladoUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SimuladoUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SimuladoUpdateOneWithoutResponsesNestedInput = {
  connect?: InputMaybe<SimuladoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SimuladoCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<SimuladoCreateWithoutResponsesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SimuladoUpdateWithoutResponsesInput>;
  upsert?: InputMaybe<SimuladoUpsertWithoutResponsesInput>;
};

export type SimuladoUpdateWithWhereUniqueWithoutQuestionsInput = {
  data: SimuladoUpdateWithoutQuestionsInput;
  where: SimuladoWhereUniqueInput;
};

export type SimuladoUpdateWithWhereUniqueWithoutUserInput = {
  data: SimuladoUpdateWithoutUserInput;
  where: SimuladoWhereUniqueInput;
};

export type SimuladoUpdateWithoutQuestionsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutSimuladoNestedInput>;
  totalMinutes?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalQuestions?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSimuladosNestedInput>;
};

export type SimuladoUpdateWithoutResponsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutSimuladosNestedInput>;
  totalMinutes?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalQuestions?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSimuladosNestedInput>;
};

export type SimuladoUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutSimuladosNestedInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutSimuladoNestedInput>;
  totalMinutes?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalQuestions?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SimuladoUpsertWithWhereUniqueWithoutQuestionsInput = {
  create: SimuladoCreateWithoutQuestionsInput;
  update: SimuladoUpdateWithoutQuestionsInput;
  where: SimuladoWhereUniqueInput;
};

export type SimuladoUpsertWithWhereUniqueWithoutUserInput = {
  create: SimuladoCreateWithoutUserInput;
  update: SimuladoUpdateWithoutUserInput;
  where: SimuladoWhereUniqueInput;
};

export type SimuladoUpsertWithoutResponsesInput = {
  create: SimuladoCreateWithoutResponsesInput;
  update: SimuladoUpdateWithoutResponsesInput;
};

export type SimuladoWhereInput = {
  AND?: InputMaybe<Array<SimuladoWhereInput>>;
  NOT?: InputMaybe<Array<SimuladoWhereInput>>;
  OR?: InputMaybe<Array<SimuladoWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
  responses?: InputMaybe<ResponseListRelationFilter>;
  totalMinutes?: InputMaybe<IntFilter>;
  totalQuestions?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SimuladoWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type SimuladosResponse = {
  __typename?: 'SimuladosResponse';
  pagesQuantity: Scalars['Float'];
  simulados: Array<Simulado>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subarea = {
  __typename?: 'Subarea';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SubareaCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<SubareaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubareaCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<SubareaCreateWithoutQuestionsInput>;
};

export type SubareaCreateOrConnectWithoutQuestionsInput = {
  create: SubareaCreateWithoutQuestionsInput;
  where: SubareaWhereUniqueInput;
};

export type SubareaCreateWithoutQuestionsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type SubareaRelationFilter = {
  is?: InputMaybe<SubareaWhereInput>;
  isNot?: InputMaybe<SubareaWhereInput>;
};

export type SubareaUpdateOneWithoutQuestionsNestedInput = {
  connect?: InputMaybe<SubareaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubareaCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<SubareaCreateWithoutQuestionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SubareaUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<SubareaUpsertWithoutQuestionsInput>;
};

export type SubareaUpdateWithoutQuestionsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SubareaUpsertWithoutQuestionsInput = {
  create: SubareaCreateWithoutQuestionsInput;
  update: SubareaUpdateWithoutQuestionsInput;
};

export type SubareaWhereInput = {
  AND?: InputMaybe<Array<SubareaWhereInput>>;
  NOT?: InputMaybe<Array<SubareaWhereInput>>;
  OR?: InputMaybe<Array<SubareaWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
};

export type SubareaWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TicketCreateManyUserInput = {
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TicketStatus>;
  title: Scalars['String'];
  type: TicketType;
};

export type TicketCreateManyUserInputEnvelope = {
  data: Array<TicketCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TicketCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutUserInput>>;
  createMany?: InputMaybe<TicketCreateManyUserInputEnvelope>;
};

export type TicketCreateOrConnectWithoutUserInput = {
  create: TicketCreateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketCreateWithoutUserInput = {
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TicketStatus>;
  title: Scalars['String'];
  type: TicketType;
};

export type TicketListRelationFilter = {
  every?: InputMaybe<TicketWhereInput>;
  none?: InputMaybe<TicketWhereInput>;
  some?: InputMaybe<TicketWhereInput>;
};

export type TicketOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TicketScalarWhereInput = {
  AND?: InputMaybe<Array<TicketScalarWhereInput>>;
  NOT?: InputMaybe<Array<TicketScalarWhereInput>>;
  OR?: InputMaybe<Array<TicketScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumTicketStatusFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumTicketTypeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum TicketStatus {
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN'
}

export enum TicketType {
  Bug = 'BUG',
  Feature = 'FEATURE',
  Other = 'OTHER',
  Question = 'QUESTION'
}

export type TicketUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumTicketStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTicketTypeFieldUpdateOperationsInput>;
};

export type TicketUpdateManyWithWhereWithoutUserInput = {
  data: TicketUpdateManyMutationInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutUserInput>>;
  createMany?: InputMaybe<TicketCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TicketWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TicketScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  set?: InputMaybe<Array<TicketWhereUniqueInput>>;
  update?: InputMaybe<Array<TicketUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TicketUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TicketUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TicketUpdateWithWhereUniqueWithoutUserInput = {
  data: TicketUpdateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumTicketStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTicketTypeFieldUpdateOperationsInput>;
};

export type TicketUpsertWithWhereUniqueWithoutUserInput = {
  create: TicketCreateWithoutUserInput;
  update: TicketUpdateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketWhereInput = {
  AND?: InputMaybe<Array<TicketWhereInput>>;
  NOT?: InputMaybe<Array<TicketWhereInput>>;
  OR?: InputMaybe<Array<TicketWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumTicketStatusFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumTicketTypeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TicketWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
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

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutNotebooksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotebooksInput>;
  create?: InputMaybe<UserCreateWithoutNotebooksInput>;
};

export type UserCreateNestedOneWithoutResponsesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<UserCreateWithoutResponsesInput>;
};

export type UserCreateNestedOneWithoutSimuladosInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSimuladosInput>;
  create?: InputMaybe<UserCreateWithoutSimuladosInput>;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotebooksInput = {
  create: UserCreateWithoutNotebooksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutResponsesInput = {
  create: UserCreateWithoutResponsesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSimuladosInput = {
  create: UserCreateWithoutSimuladosInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentsInput = {
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notebooks?: InputMaybe<NotebookCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  photoUrl?: InputMaybe<Scalars['String']>;
  refreshTokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  simulados?: InputMaybe<SimuladoCreateNestedManyWithoutUserInput>;
  tickets?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  totalCorrect: Scalars['Int'];
  totalQuestions: Scalars['Int'];
};

export type UserCreateWithoutNotebooksInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  photoUrl?: InputMaybe<Scalars['String']>;
  refreshTokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  simulados?: InputMaybe<SimuladoCreateNestedManyWithoutUserInput>;
  tickets?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  totalCorrect: Scalars['Int'];
  totalQuestions: Scalars['Int'];
};

export type UserCreateWithoutResponsesInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notebooks?: InputMaybe<NotebookCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  photoUrl?: InputMaybe<Scalars['String']>;
  refreshTokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  simulados?: InputMaybe<SimuladoCreateNestedManyWithoutUserInput>;
  tickets?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  totalCorrect: Scalars['Int'];
  totalQuestions: Scalars['Int'];
};

export type UserCreateWithoutSimuladosInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notebooks?: InputMaybe<NotebookCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  photoUrl?: InputMaybe<Scalars['String']>;
  refreshTokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  tickets?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  totalCorrect: Scalars['Int'];
  totalQuestions: Scalars['Int'];
};

export enum UserOrderByRelevanceFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  PhotoUrl = 'photoUrl'
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type UserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  notebooks?: InputMaybe<NotebookOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrder>;
  photoUrl?: InputMaybe<SortOrder>;
  refreshTokens?: InputMaybe<RefreshTokenOrderByRelationAggregateInput>;
  responses?: InputMaybe<ResponseOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  simulados?: InputMaybe<SimuladoOrderByRelationAggregateInput>;
  tickets?: InputMaybe<TicketOrderByRelationAggregateInput>;
  totalCorrect?: InputMaybe<SortOrder>;
  totalQuestions?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
  update?: InputMaybe<UserUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutNotebooksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotebooksInput>;
  create?: InputMaybe<UserCreateWithoutNotebooksInput>;
  update?: InputMaybe<UserUpdateWithoutNotebooksInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotebooksInput>;
};

export type UserUpdateOneRequiredWithoutResponsesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<UserCreateWithoutResponsesInput>;
  update?: InputMaybe<UserUpdateWithoutResponsesInput>;
  upsert?: InputMaybe<UserUpsertWithoutResponsesInput>;
};

export type UserUpdateOneRequiredWithoutSimuladosNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSimuladosInput>;
  create?: InputMaybe<UserCreateWithoutSimuladosInput>;
  update?: InputMaybe<UserUpdateWithoutSimuladosInput>;
  upsert?: InputMaybe<UserUpsertWithoutSimuladosInput>;
};

export type UserUpdateWithoutCommentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notebooks?: InputMaybe<NotebookUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  photoUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  refreshTokens?: InputMaybe<RefreshTokenUpdateManyWithoutUserNestedInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  simulados?: InputMaybe<SimuladoUpdateManyWithoutUserNestedInput>;
  tickets?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  totalCorrect?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalQuestions?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotebooksInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  photoUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  refreshTokens?: InputMaybe<RefreshTokenUpdateManyWithoutUserNestedInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  simulados?: InputMaybe<SimuladoUpdateManyWithoutUserNestedInput>;
  tickets?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  totalCorrect?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalQuestions?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutResponsesInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notebooks?: InputMaybe<NotebookUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  photoUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  refreshTokens?: InputMaybe<RefreshTokenUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  simulados?: InputMaybe<SimuladoUpdateManyWithoutUserNestedInput>;
  tickets?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  totalCorrect?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalQuestions?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSimuladosInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notebooks?: InputMaybe<NotebookUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  photoUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  refreshTokens?: InputMaybe<RefreshTokenUpdateManyWithoutUserNestedInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  tickets?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  totalCorrect?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalQuestions?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
};

export type UserUpsertWithoutNotebooksInput = {
  create: UserCreateWithoutNotebooksInput;
  update: UserUpdateWithoutNotebooksInput;
};

export type UserUpsertWithoutResponsesInput = {
  create: UserCreateWithoutResponsesInput;
  update: UserUpdateWithoutResponsesInput;
};

export type UserUpsertWithoutSimuladosInput = {
  create: UserCreateWithoutSimuladosInput;
  update: UserUpdateWithoutSimuladosInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  notebooks?: InputMaybe<NotebookListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  photoUrl?: InputMaybe<StringFilter>;
  refreshTokens?: InputMaybe<RefreshTokenListRelationFilter>;
  responses?: InputMaybe<ResponseListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  simulados?: InputMaybe<SimuladoListRelationFilter>;
  tickets?: InputMaybe<TicketListRelationFilter>;
  totalCorrect?: InputMaybe<IntFilter>;
  totalQuestions?: InputMaybe<IntFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

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

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: boolean };

export type NotebooksQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NotebooksQueryQuery = { __typename?: 'Query', notebooks: Array<{ __typename?: 'NotebookModel', id: string, name: string, description?: string | null, questions: Array<{ __typename?: 'Question', id: string }> }> };

export type CreateNotebookMutationVariables = Exact<{
  questions: Array<Scalars['String']> | Scalars['String'];
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type CreateNotebookMutation = { __typename?: 'Mutation', addNotebook: boolean };

export type DeleteNotebookMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteNotebookMutation = { __typename?: 'Mutation', deleteOneNotebook?: { __typename?: 'Notebook', id: string } | null };

export type InitialPageQueryVariables = Exact<{ [key: string]: never; }>;


export type InitialPageQuery = { __typename?: 'Query', leaderBoard?: Array<{ __typename?: 'User', id: string, name: string, totalQuestions: number, totalCorrect: number }> | null, simulados: { __typename?: 'SimuladosResponse', simulados: Array<{ __typename?: 'Simulado', name: string, totalQuestions: number }> } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: boolean };


export const QuestionsFiltersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuestionsFilters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processosSeletivos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"anos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"ano"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locais"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"perfis"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subareas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"estados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bancas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<QuestionsFiltersQuery, QuestionsFiltersQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetAreasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAreas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAreasQuery, GetAreasQueryVariables>;
export const CreateSimuladoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSimulado"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SimuladoType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"areas"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AreaToSimuladoInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSimulado"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"areas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"areas"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSimuladoMutation, CreateSimuladoMutationVariables>;
export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const NotebooksQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NotebooksQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notebooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NotebooksQueryQuery, NotebooksQueryQueryVariables>;
export const CreateNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questions"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNotebook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"questions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questions"}}}]}]}}]} as unknown as DocumentNode<CreateNotebookMutation, CreateNotebookMutationVariables>;
export const DeleteNotebookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNotebook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneNotebook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteNotebookMutation, DeleteNotebookMutationVariables>;
export const InitialPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InitialPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaderBoard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"totalCorrect"}}]}},{"kind":"Field","name":{"kind":"Name","value":"simulados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simulados"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuestions"}}]}}]}}]}}]} as unknown as DocumentNode<InitialPageQuery, InitialPageQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;