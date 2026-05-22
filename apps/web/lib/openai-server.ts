import OpenAI from "openai"

let client: OpenAI | null = null

export function getOpenAI(): OpenAI {
  if (!client) {
    const apiKey =
      process.env.OPENAI_API_KEY ?? "sk-placeholder-for-local-dev-only"
    client = new OpenAI({ apiKey })
  }
  return client
}
