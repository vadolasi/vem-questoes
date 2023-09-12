import AdminLayout from "@/components/adminLayout"
import { graphql } from "@/gql"
import { useQuery } from "urql"
import clsx from "clsx"

const MostWrongQuery = graphql(/* GraphQL */ `
  query MostWrong {
    mostWrong {
      id
      text
      wrongQuantity
      alternatives {
        id
        text
        letter
        correct
        wrongQuantity
      }
    }
  }
`)

export default function() {
  const [{ data, fetching }] = useQuery({ query: MostWrongQuery })

  return (
    <AdminLayout page="estatisticas">
      <div>
        {!fetching && data && (
          <div className="flex flex-col gap-10">
            {data.mostWrong.map(question => (
              <div className="flex flex-col gap-5">
                <div>
                  <p>{question.text} {question.wrongQuantity > 0 && <span className="text-error">({question.wrongQuantity})</span>}</p>
                </div>
                {question.alternatives.map(alternative => (
                  <div className="flex gap-2 items-center">
                    <span className={clsx("border border-neutral text-neutral rounded-full p-3 w-8 h-8 flex items-center justify-center", alternative.correct && "border-success text-success", alternative.wrongQuantity > 0 && "border-error text-error")}>{alternative.letter}</span>
                    <p>{alternative.text} {alternative.wrongQuantity > 0 && <span className="text-error">({alternative.wrongQuantity})</span>}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
