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
    "\n  mutation RefreshToken {\n    refreshToken\n  }\n": types.RefreshTokenDocument,
    "\n  query QuestionsFilters {\n    processosSeletivos {\n      id\n      name\n    }\n    anos {\n      id\n      ano\n    }\n    locais {\n      id\n      name\n    }\n    perfis {\n      id\n      name\n    }\n    areas {\n      id\n      name\n    }\n    subareas {\n      id\n      name\n    }\n    estados {\n      id\n      name\n    }\n    bancas {\n      id\n      name\n    }\n  }\n": types.QuestionsFiltersDocument,
    "\n  query Me {\n    me {\n      name\n      photoUrl\n    }\n    notifications {\n      id\n      title\n      body\n    }\n  }\n": types.MeDocument,
    "\n  mutation Logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  mutation DeleteUser($id: String!) {\n    deleteUser(id: $id)\n  }\n": types.DeleteUserDocument,
    "\n  query GetAreas {\n    areas {\n      id\n      name\n    }\n  }\n": types.GetAreasDocument,
    "\n  mutation CreateSimulado($name: String!, $areas: [AreaToSimuladoInput!]!) {\n    createSimulado(\n      name: $name\n      type: Custom\n      areas: $areas\n    ) {\n      id\n      questions {\n        id\n      }\n    }\n  }\n": types.CreateSimuladoDocument,
    "\n  mutation UpdateNotebook($id: String!, $name: String, $description: String, $questions: [String!]) {\n    updateNotebook(\n      notebookId: $id\n      name: $name\n      description: $description\n      questions: $questions\n    )\n  }\n": types.UpdateNotebookDocument,
    "\n  mutation CreateReport($content: String!, $type: TicketType!, $questionId: String) {\n    addTicket(\n      content: $content\n      type: $type\n      questionId: $questionId\n    ) {\n      id\n    }\n  }\n": types.CreateReportDocument,
    "\n  mutation CreateReport2($content: String!, $type: TicketType!) {\n    addTicket(\n      content: $content\n      type: $type\n    ) {\n      id\n    }\n  }\n": types.CreateReport2Document,
    "\n  mutation InviteUser(\n    $name: String!\n    $email: String!\n    $role: Role!\n  ) {\n    inviteUser(\n      name: $name\n      email: $email\n      role: $role\n    ) {\n      id\n    }\n  }\n": types.InviteUserDocument,
    "\n  query Users {\n    users {\n      id\n      photoUrl\n      name\n      email\n      role\n    }\n  }\n": types.UsersDocument,
    "\n  mutation CreateNotification($title: String!, $body: String!) {\n    createNotification(\n      title: $title\n      body: $body\n    ) {\n      id\n    }\n  }\n": types.CreateNotificationDocument,
    "\n  mutation ResolveQuestion($questionId: String!, $alternativeId: String!) {\n    addAnswer(questionId: $questionId, alternativeId: $alternativeId) {\n      correct\n      correctAlternative\n    }\n  }\n": types.ResolveQuestionDocument,
    "\n  query GetQuestions(\n    $page: Float\n    $itemsPerPage: Float\n    $text: String\n    $processoSeletivoIds: [String!]\n    $anoIds: [String!]\n    $localIds: [String!]\n    $perilIds: [String!]\n    $areaIds: [String!]\n    $subareaIds: [String!]\n    $estadoIds: [String!]\n    $bancaIds: [String!]\n    $apenasRespondidas: Boolean\n    $apenasNaoRespondidas: Boolean\n    $apenasRespondidasCertas: Boolean\n    $apenasRespondidasErradas: Boolean\n  ) {\n    questions(\n      page: $page\n      itemsPerPage: $itemsPerPage\n      text: $text\n      processoSeletivoIds: $processoSeletivoIds\n      anoIds: $anoIds\n      localIds: $localIds\n      perfilIds: $perilIds\n      areaIds: $areaIds\n      subareaIds: $subareaIds\n      estadoIds: $estadoIds\n      bancaIds: $bancaIds\n      apenasRespondidas: $apenasRespondidas\n      apenasNaoRespondidas: $apenasNaoRespondidas\n      apenasRespondidasCertas: $apenasRespondidasCertas\n      apenasRespondidasErradas: $apenasRespondidasErradas\n    ) {\n      questions {\n        id\n        enunciado\n        processoSeletivo {\n          name\n        }\n        ano {\n          ano\n        }\n        local {\n          name\n        }\n        perfil {\n          name\n        }\n        area {\n          name\n        }\n        subarea {\n          name\n        }\n        estado {\n          name\n        }\n        banca {\n          name\n        }\n        alternatives {\n          id\n          text\n          letter\n        }\n        comments {\n          id\n          user {\n            id\n            name\n            photoUrl\n          }\n          content\n        }\n      }\n      pagesQuantity\n      quantity\n    }\n  }\n": types.GetQuestionsDocument,
    "\n  query GetNotebook($id: String!) {\n    notebook(notebookId: $id) {\n      questions {\n        id\n        enunciado\n        alternatives {\n          id\n          letter\n          text\n        }\n        ano {\n          ano\n        }\n        banca {\n          name\n        }\n        processoSeletivo {\n          name\n        }\n      }\n    }\n  }\n": types.GetNotebookDocument,
    "\n  mutation ResolveQuestionOnNotebook(\n    $questionId: String!\n    $alternativeId: String!\n    $notebookId: String!\n  ) {\n    addAnswer(\n      questionId: $questionId\n      alternativeId: $alternativeId\n      notebookId: $notebookId\n    ) {\n      correct\n      correctAlternative\n    }\n  }\n": types.ResolveQuestionOnNotebookDocument,
    "\n  query NotebooksQuery {\n    notebooks {\n      id\n      name\n      description\n      questions {\n        id\n      }\n    }\n  }\n": types.NotebooksQueryDocument,
    "\n  mutation CreateNotebook($questions: [String!]!, $name: String!, $description: String) {\n    addNotebook(\n      name: $name\n      description: $description\n      questions: $questions\n    ) {\n      id\n      name\n      description\n    }\n  }\n": types.CreateNotebookDocument,
    "\n  mutation DeleteNotebook($id: String!) {\n    deleteNotebook(id: $id)\n  }\n": types.DeleteNotebookDocument,
    "\n  query Chart {\n    relatorio {\n      date\n      total\n      totalCorrect\n    }\n    me {\n      totalQuestions\n      totalCorrect\n    }\n  }\n": types.ChartDocument,
    "\n  query InitialPage {\n    me {\n      totalQuestions\n      totalCorrect\n    }\n    leaderBoard {\n      id\n      name\n      totalQuestions\n      totalCorrect\n    }\n    simulados {\n      simulados {\n        id\n        name\n        totalQuestions\n      }\n    }\n  }\n": types.InitialPageDocument,
    "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n  }\n": types.LoginDocument,
    "\n  query Me3 {\n    me {\n      name\n      email\n      photoUrl\n    }\n  }\n": types.Me3Document,
    "\n  mutation UpdateProfile($name: String, $photoUrl: String) {\n    updateProfile(\n      name: $name\n      photoUrl: $photoUrl\n    )\n  }\n": types.UpdateProfileDocument,
    "\n  mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {\n    updatePassword(\n      oldPassword: $oldPassword\n      newPassword: $newPassword\n    )\n  }\n": types.UpdatePasswordDocument,
    "\n  query GetSimulado2($id: String!) {\n    simulado(id: $id) {\n      totalMinutes\n      totalQuestions\n      questions {\n        id\n        enunciado\n        alternatives {\n          id\n          letter\n          text\n        }\n        ano {\n          ano\n        }\n        banca {\n          name\n        }\n        processoSeletivo {\n          name\n        }\n      }\n    }\n  }\n": types.GetSimulado2Document,
    "\n  mutation ResolveQuestionOdSimulado2(\n    $questionId: String!\n    $alternativeId: String!\n    $simuladoId: String!\n  ) {\n    addAnswer(\n      questionId: $questionId\n      alternativeId: $alternativeId\n      simuladoId: $simuladoId\n    ) {\n      correct\n      correctAlternative\n    }\n  }\n": types.ResolveQuestionOdSimulado2Document,
    "\n  query MeusSimulados {\n    simulados {\n      simulados {\n        id\n        totalQuestions\n        name\n      }\n    }\n  }\n": types.MeusSimuladosDocument,
    "\n  mutation CreateRandomSimualdo($name: String!) {\n    createSimulado(\n      type: Random\n      name: $name\n      areas: []\n    ) {\n      id\n    }\n  }\n": types.CreateRandomSimualdoDocument,
    "\n  mutation DeleteSimulado($id: String!) {\n    deleteSimulado(\n      id: $id\n    )\n  }\n": types.DeleteSimuladoDocument,
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
export function graphql(source: "\n  mutation RefreshToken {\n    refreshToken\n  }\n"): (typeof documents)["\n  mutation RefreshToken {\n    refreshToken\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query QuestionsFilters {\n    processosSeletivos {\n      id\n      name\n    }\n    anos {\n      id\n      ano\n    }\n    locais {\n      id\n      name\n    }\n    perfis {\n      id\n      name\n    }\n    areas {\n      id\n      name\n    }\n    subareas {\n      id\n      name\n    }\n    estados {\n      id\n      name\n    }\n    bancas {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query QuestionsFilters {\n    processosSeletivos {\n      id\n      name\n    }\n    anos {\n      id\n      ano\n    }\n    locais {\n      id\n      name\n    }\n    perfis {\n      id\n      name\n    }\n    areas {\n      id\n      name\n    }\n    subareas {\n      id\n      name\n    }\n    estados {\n      id\n      name\n    }\n    bancas {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      name\n      photoUrl\n    }\n    notifications {\n      id\n      title\n      body\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      name\n      photoUrl\n    }\n    notifications {\n      id\n      title\n      body\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUser($id: String!) {\n    deleteUser(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteUser($id: String!) {\n    deleteUser(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAreas {\n    areas {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetAreas {\n    areas {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSimulado($name: String!, $areas: [AreaToSimuladoInput!]!) {\n    createSimulado(\n      name: $name\n      type: Custom\n      areas: $areas\n    ) {\n      id\n      questions {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSimulado($name: String!, $areas: [AreaToSimuladoInput!]!) {\n    createSimulado(\n      name: $name\n      type: Custom\n      areas: $areas\n    ) {\n      id\n      questions {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateNotebook($id: String!, $name: String, $description: String, $questions: [String!]) {\n    updateNotebook(\n      notebookId: $id\n      name: $name\n      description: $description\n      questions: $questions\n    )\n  }\n"): (typeof documents)["\n  mutation UpdateNotebook($id: String!, $name: String, $description: String, $questions: [String!]) {\n    updateNotebook(\n      notebookId: $id\n      name: $name\n      description: $description\n      questions: $questions\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateReport($content: String!, $type: TicketType!, $questionId: String) {\n    addTicket(\n      content: $content\n      type: $type\n      questionId: $questionId\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateReport($content: String!, $type: TicketType!, $questionId: String) {\n    addTicket(\n      content: $content\n      type: $type\n      questionId: $questionId\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateReport2($content: String!, $type: TicketType!) {\n    addTicket(\n      content: $content\n      type: $type\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateReport2($content: String!, $type: TicketType!) {\n    addTicket(\n      content: $content\n      type: $type\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation InviteUser(\n    $name: String!\n    $email: String!\n    $role: Role!\n  ) {\n    inviteUser(\n      name: $name\n      email: $email\n      role: $role\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation InviteUser(\n    $name: String!\n    $email: String!\n    $role: Role!\n  ) {\n    inviteUser(\n      name: $name\n      email: $email\n      role: $role\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Users {\n    users {\n      id\n      photoUrl\n      name\n      email\n      role\n    }\n  }\n"): (typeof documents)["\n  query Users {\n    users {\n      id\n      photoUrl\n      name\n      email\n      role\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateNotification($title: String!, $body: String!) {\n    createNotification(\n      title: $title\n      body: $body\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateNotification($title: String!, $body: String!) {\n    createNotification(\n      title: $title\n      body: $body\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ResolveQuestion($questionId: String!, $alternativeId: String!) {\n    addAnswer(questionId: $questionId, alternativeId: $alternativeId) {\n      correct\n      correctAlternative\n    }\n  }\n"): (typeof documents)["\n  mutation ResolveQuestion($questionId: String!, $alternativeId: String!) {\n    addAnswer(questionId: $questionId, alternativeId: $alternativeId) {\n      correct\n      correctAlternative\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetQuestions(\n    $page: Float\n    $itemsPerPage: Float\n    $text: String\n    $processoSeletivoIds: [String!]\n    $anoIds: [String!]\n    $localIds: [String!]\n    $perilIds: [String!]\n    $areaIds: [String!]\n    $subareaIds: [String!]\n    $estadoIds: [String!]\n    $bancaIds: [String!]\n    $apenasRespondidas: Boolean\n    $apenasNaoRespondidas: Boolean\n    $apenasRespondidasCertas: Boolean\n    $apenasRespondidasErradas: Boolean\n  ) {\n    questions(\n      page: $page\n      itemsPerPage: $itemsPerPage\n      text: $text\n      processoSeletivoIds: $processoSeletivoIds\n      anoIds: $anoIds\n      localIds: $localIds\n      perfilIds: $perilIds\n      areaIds: $areaIds\n      subareaIds: $subareaIds\n      estadoIds: $estadoIds\n      bancaIds: $bancaIds\n      apenasRespondidas: $apenasRespondidas\n      apenasNaoRespondidas: $apenasNaoRespondidas\n      apenasRespondidasCertas: $apenasRespondidasCertas\n      apenasRespondidasErradas: $apenasRespondidasErradas\n    ) {\n      questions {\n        id\n        enunciado\n        processoSeletivo {\n          name\n        }\n        ano {\n          ano\n        }\n        local {\n          name\n        }\n        perfil {\n          name\n        }\n        area {\n          name\n        }\n        subarea {\n          name\n        }\n        estado {\n          name\n        }\n        banca {\n          name\n        }\n        alternatives {\n          id\n          text\n          letter\n        }\n        comments {\n          id\n          user {\n            id\n            name\n            photoUrl\n          }\n          content\n        }\n      }\n      pagesQuantity\n      quantity\n    }\n  }\n"): (typeof documents)["\n  query GetQuestions(\n    $page: Float\n    $itemsPerPage: Float\n    $text: String\n    $processoSeletivoIds: [String!]\n    $anoIds: [String!]\n    $localIds: [String!]\n    $perilIds: [String!]\n    $areaIds: [String!]\n    $subareaIds: [String!]\n    $estadoIds: [String!]\n    $bancaIds: [String!]\n    $apenasRespondidas: Boolean\n    $apenasNaoRespondidas: Boolean\n    $apenasRespondidasCertas: Boolean\n    $apenasRespondidasErradas: Boolean\n  ) {\n    questions(\n      page: $page\n      itemsPerPage: $itemsPerPage\n      text: $text\n      processoSeletivoIds: $processoSeletivoIds\n      anoIds: $anoIds\n      localIds: $localIds\n      perfilIds: $perilIds\n      areaIds: $areaIds\n      subareaIds: $subareaIds\n      estadoIds: $estadoIds\n      bancaIds: $bancaIds\n      apenasRespondidas: $apenasRespondidas\n      apenasNaoRespondidas: $apenasNaoRespondidas\n      apenasRespondidasCertas: $apenasRespondidasCertas\n      apenasRespondidasErradas: $apenasRespondidasErradas\n    ) {\n      questions {\n        id\n        enunciado\n        processoSeletivo {\n          name\n        }\n        ano {\n          ano\n        }\n        local {\n          name\n        }\n        perfil {\n          name\n        }\n        area {\n          name\n        }\n        subarea {\n          name\n        }\n        estado {\n          name\n        }\n        banca {\n          name\n        }\n        alternatives {\n          id\n          text\n          letter\n        }\n        comments {\n          id\n          user {\n            id\n            name\n            photoUrl\n          }\n          content\n        }\n      }\n      pagesQuantity\n      quantity\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetNotebook($id: String!) {\n    notebook(notebookId: $id) {\n      questions {\n        id\n        enunciado\n        alternatives {\n          id\n          letter\n          text\n        }\n        ano {\n          ano\n        }\n        banca {\n          name\n        }\n        processoSeletivo {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetNotebook($id: String!) {\n    notebook(notebookId: $id) {\n      questions {\n        id\n        enunciado\n        alternatives {\n          id\n          letter\n          text\n        }\n        ano {\n          ano\n        }\n        banca {\n          name\n        }\n        processoSeletivo {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ResolveQuestionOnNotebook(\n    $questionId: String!\n    $alternativeId: String!\n    $notebookId: String!\n  ) {\n    addAnswer(\n      questionId: $questionId\n      alternativeId: $alternativeId\n      notebookId: $notebookId\n    ) {\n      correct\n      correctAlternative\n    }\n  }\n"): (typeof documents)["\n  mutation ResolveQuestionOnNotebook(\n    $questionId: String!\n    $alternativeId: String!\n    $notebookId: String!\n  ) {\n    addAnswer(\n      questionId: $questionId\n      alternativeId: $alternativeId\n      notebookId: $notebookId\n    ) {\n      correct\n      correctAlternative\n    }\n  }\n"];
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
export function graphql(source: "\n  query Chart {\n    relatorio {\n      date\n      total\n      totalCorrect\n    }\n    me {\n      totalQuestions\n      totalCorrect\n    }\n  }\n"): (typeof documents)["\n  query Chart {\n    relatorio {\n      date\n      total\n      totalCorrect\n    }\n    me {\n      totalQuestions\n      totalCorrect\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query InitialPage {\n    me {\n      totalQuestions\n      totalCorrect\n    }\n    leaderBoard {\n      id\n      name\n      totalQuestions\n      totalCorrect\n    }\n    simulados {\n      simulados {\n        id\n        name\n        totalQuestions\n      }\n    }\n  }\n"): (typeof documents)["\n  query InitialPage {\n    me {\n      totalQuestions\n      totalCorrect\n    }\n    leaderBoard {\n      id\n      name\n      totalQuestions\n      totalCorrect\n    }\n    simulados {\n      simulados {\n        id\n        name\n        totalQuestions\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me3 {\n    me {\n      name\n      email\n      photoUrl\n    }\n  }\n"): (typeof documents)["\n  query Me3 {\n    me {\n      name\n      email\n      photoUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProfile($name: String, $photoUrl: String) {\n    updateProfile(\n      name: $name\n      photoUrl: $photoUrl\n    )\n  }\n"): (typeof documents)["\n  mutation UpdateProfile($name: String, $photoUrl: String) {\n    updateProfile(\n      name: $name\n      photoUrl: $photoUrl\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {\n    updatePassword(\n      oldPassword: $oldPassword\n      newPassword: $newPassword\n    )\n  }\n"): (typeof documents)["\n  mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {\n    updatePassword(\n      oldPassword: $oldPassword\n      newPassword: $newPassword\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSimulado2($id: String!) {\n    simulado(id: $id) {\n      totalMinutes\n      totalQuestions\n      questions {\n        id\n        enunciado\n        alternatives {\n          id\n          letter\n          text\n        }\n        ano {\n          ano\n        }\n        banca {\n          name\n        }\n        processoSeletivo {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSimulado2($id: String!) {\n    simulado(id: $id) {\n      totalMinutes\n      totalQuestions\n      questions {\n        id\n        enunciado\n        alternatives {\n          id\n          letter\n          text\n        }\n        ano {\n          ano\n        }\n        banca {\n          name\n        }\n        processoSeletivo {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ResolveQuestionOdSimulado2(\n    $questionId: String!\n    $alternativeId: String!\n    $simuladoId: String!\n  ) {\n    addAnswer(\n      questionId: $questionId\n      alternativeId: $alternativeId\n      simuladoId: $simuladoId\n    ) {\n      correct\n      correctAlternative\n    }\n  }\n"): (typeof documents)["\n  mutation ResolveQuestionOdSimulado2(\n    $questionId: String!\n    $alternativeId: String!\n    $simuladoId: String!\n  ) {\n    addAnswer(\n      questionId: $questionId\n      alternativeId: $alternativeId\n      simuladoId: $simuladoId\n    ) {\n      correct\n      correctAlternative\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MeusSimulados {\n    simulados {\n      simulados {\n        id\n        totalQuestions\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query MeusSimulados {\n    simulados {\n      simulados {\n        id\n        totalQuestions\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRandomSimualdo($name: String!) {\n    createSimulado(\n      type: Random\n      name: $name\n      areas: []\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRandomSimualdo($name: String!) {\n    createSimulado(\n      type: Random\n      name: $name\n      areas: []\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteSimulado($id: String!) {\n    deleteSimulado(\n      id: $id\n    )\n  }\n"): (typeof documents)["\n  mutation DeleteSimulado($id: String!) {\n    deleteSimulado(\n      id: $id\n    )\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;