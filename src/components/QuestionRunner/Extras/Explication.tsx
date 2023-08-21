import React from "react"

const Explication: React.FC = () => {
  return (
    <h1>Essa questão ainda não possui gabarito comentando</h1>
  )
}

export default Explication
/*
{explicationBox && (
  <DefaultBoxQuestion
    questionId={currentQuestion?.id || ""}
    h1="Essa questão ainda não possui gabarito comentando"
    strong="Estamos trabalhando nisso!"
    picture={professor}
    alt="Professor dando aula"
  />
)}

{commentBox && (
  <DefaultBoxQuestion
    questionId={currentQuestion?.id || ""}
    className={commentBox ? "show" : "hidden"}
    h1="Essa questão ainda não possui comentários"
    strong="Seja o primeiro(a)!"
    picture={typing}
    alt="Rapaz digitando"
    content={(currentQuestion?.comments?.length || 0) > 0}
    comment={true}
  >
    <>
      {currentQuestion?.comments?.map((comment) => (
        <CommentCard
          key={comment.id}
          image={comment.user.photoUrl}
          name={comment.user.name}
          hora={"11:00"}
          data="21/05/2023"
          comment={comment.content}
        />
      ))}
    </>
  </DefaultBoxQuestion>
)}

{notebookBox && (
  <>
    <DefaultBoxQuestion
      questionId={currentQuestion?.id || ""}
      content={true}
      comment={false}
    >
      <Search>
        <SearchInput onChange={() => {}} />
        <Button onClick={addNotebook}>+ Criar Caderno</Button>
      </Search>
      <DefaultSearchPage
        loading={fetchingNotebook}
        text="Crie um caderno para você!"
        picture={notebook}
        alt="Mulher escreven informações em um carderno"
        content={
          notebookData?.notebooks &&
          notebookData?.notebooks.length > 0
        }
      >
        {notebookData?.notebooks &&
          notebookData.notebooks.map(
            ({ id, name, questions, description }) => (
              <NotebookCard
                id={id}
                key={id}
                title={name}
                description={description || ""}
                questions={questions}
                currentQuestion={currentQuestion?.id}
                addFunction={() => addQuestionToNotebook(id)}
                removeFunction={() =>
                  removeQuestionFromNotebook(id)
                }
                add
              />
            )
          )}
      </DefaultSearchPage>
    </DefaultBoxQuestion>
  </>
)}

{xrayBox && (
  <DefaultBoxQuestion
    questionId={currentQuestion?.id || ""}
    h1="Esta questão ainda não tem Raio-X"
    strong="Estamos trabalhando nisso!"
    picture={raiox}
    alt="mulher com uma maquina de dados"
  />
)}
*/
