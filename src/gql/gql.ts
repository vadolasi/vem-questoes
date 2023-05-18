/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query QuestionsFilters {\n    processosSeletivos {\n      id\n      name\n    }\n    anos {\n      id\n      ano\n    }\n    locais {\n      id\n      name\n    }\n    perfis {\n      id\n      name\n    }\n    areas {\n      id\n      name\n    }\n    subareas {\n      id\n      name\n    }\n    estados {\n      id\n      name\n    }\n    bancas {\n      id\n      name\n    }\n  }\n": types.QuestionsFiltersDocument,
    "\n  query Me {\n    me {\n      name\n      photoUrl\n    }\n  }\n": types.MeDocument,
    "\n  query GetAreas {\n    areas {\n      id\n      name\n    }\n  }\n": types.GetAreasDocument,
    "\n  mutation CreateSimulado($name: String!, $type: SimuladoType!, $areas: [AreaToSimuladoInput!]!) {\n    createSimulado(\n      name: $name\n      type: $type\n      areas: $areas\n    ) {\n      id\n      questions {\n        id\n      }\n    }\n  }\n": types.CreateSimuladoDocument,
    "\n  mutation UpdateNotebook($id: String!, $name: String, $description: String, $questions: [String!]) {\n    updateNotebook(\n      notebookId: $id\n      name: $name\n      description: $description\n      questions: $questions\n    )\n  }\n": types.UpdateNotebookDocument,
    "\n  mutation RefreshToken {\n    refreshToken\n  }\n": types.RefreshTokenDocument,
    "\n  query GetQuestions($page: Float) {\n    questions(\n      page: $page\n    ) {\n      questions {\n        id\n        area {\n          name\n        }\n        ano {\n          ano\n        }\n        processoSeletivo {\n          name\n        }\n      }\n      pagesQuantity\n      quantity\n    }\n  }\n": types.GetQuestionsDocument,
    "\n  query NotebooksQuery {\n    notebooks {\n      id\n      name\n      description\n      questions {\n        id\n      }\n    }\n  }\n": types.NotebooksQueryDocument,
    "\n  mutation CreateNotebook($questions: [String!]!, $name: String!, $description: String) {\n    addNotebook(\n      name: $name\n      description: $description\n      questions: $questions\n    ) {\n      id\n      name\n      description\n    }\n  }\n": types.CreateNotebookDocument,
    "\n  mutation DeleteNotebook($id: String!) {\n    deleteNotebook(id: $id)\n  }\n": types.DeleteNotebookDocument,
    "\n  query InitialPage {\n    leaderBoard {\n      id\n      name\n      totalQuestions\n      totalCorrect\n    }\n    simulados {\n      simulados {\n        name\n        totalQuestions\n      }\n    }\n  }\n": types.InitialPageDocument,
    "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n  }\n": types.LoginDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query QuestionsFilters {\n    processosSeletivos {\n      id\n      name\n    }\n    anos {\n      id\n      ano\n    }\n    locais {\n      id\n      name\n    }\n    perfis {\n      id\n      name\n    }\n    areas {\n      id\n      name\n    }\n    subareas {\n      id\n      name\n    }\n    estados {\n      id\n      name\n    }\n    bancas {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query QuestionsFilters {\n    processosSeletivos {\n      id\n      name\n    }\n    anos {\n      id\n      ano\n    }\n    locais {\n      id\n      name\n    }\n    perfis {\n      id\n      name\n    }\n    areas {\n      id\n      name\n    }\n    subareas {\n      id\n      name\n    }\n    estados {\n      id\n      name\n    }\n    bancas {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      name\n      photoUrl\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      name\n      photoUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAreas {\n    areas {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetAreas {\n    areas {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSimulado($name: String!, $type: SimuladoType!, $areas: [AreaToSimuladoInput!]!) {\n    createSimulado(\n      name: $name\n      type: $type\n      areas: $areas\n    ) {\n      id\n      questions {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSimulado($name: String!, $type: SimuladoType!, $areas: [AreaToSimuladoInput!]!) {\n    createSimulado(\n      name: $name\n      type: $type\n      areas: $areas\n    ) {\n      id\n      questions {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateNotebook($id: String!, $name: String, $description: String, $questions: [String!]) {\n    updateNotebook(\n      notebookId: $id\n      name: $name\n      description: $description\n      questions: $questions\n    )\n  }\n"): (typeof documents)["\n  mutation UpdateNotebook($id: String!, $name: String, $description: String, $questions: [String!]) {\n    updateNotebook(\n      notebookId: $id\n      name: $name\n      description: $description\n      questions: $questions\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RefreshToken {\n    refreshToken\n  }\n"): (typeof documents)["\n  mutation RefreshToken {\n    refreshToken\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetQuestions($page: Float) {\n    questions(\n      page: $page\n    ) {\n      questions {\n        id\n        area {\n          name\n        }\n        ano {\n          ano\n        }\n        processoSeletivo {\n          name\n        }\n      }\n      pagesQuantity\n      quantity\n    }\n  }\n"): (typeof documents)["\n  query GetQuestions($page: Float) {\n    questions(\n      page: $page\n    ) {\n      questions {\n        id\n        area {\n          name\n        }\n        ano {\n          ano\n        }\n        processoSeletivo {\n          name\n        }\n      }\n      pagesQuantity\n      quantity\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query NotebooksQuery {\n    notebooks {\n      id\n      name\n      description\n      questions {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query NotebooksQuery {\n    notebooks {\n      id\n      name\n      description\n      questions {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateNotebook($questions: [String!]!, $name: String!, $description: String) {\n    addNotebook(\n      name: $name\n      description: $description\n      questions: $questions\n    ) {\n      id\n      name\n      description\n    }\n  }\n"): (typeof documents)["\n  mutation CreateNotebook($questions: [String!]!, $name: String!, $description: String) {\n    addNotebook(\n      name: $name\n      description: $description\n      questions: $questions\n    ) {\n      id\n      name\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteNotebook($id: String!) {\n    deleteNotebook(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteNotebook($id: String!) {\n    deleteNotebook(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query InitialPage {\n    leaderBoard {\n      id\n      name\n      totalQuestions\n      totalCorrect\n    }\n    simulados {\n      simulados {\n        name\n        totalQuestions\n      }\n    }\n  }\n"): (typeof documents)["\n  query InitialPage {\n    leaderBoard {\n      id\n      name\n      totalQuestions\n      totalCorrect\n    }\n    simulados {\n      simulados {\n        name\n        totalQuestions\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;