import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "./src/backend/schema.graphql",
  documents: ["src/pages/**/*.tsx"],
  generates: {
    "./src/gql/": {
      preset: "client"
    }
  }
}

export default config