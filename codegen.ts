import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "./src/backend/schema.graphql",
  documents: ["./src/**/*.tsx", "./src/client.ts"],
  generates: {
    "./src/gql/": {
      preset: "client"
    }
  }
}

export default config
