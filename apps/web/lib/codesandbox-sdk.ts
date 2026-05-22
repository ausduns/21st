import { CodeSandbox } from "@codesandbox/sdk"

let sdkInstance: CodeSandbox | null = null

function getSdk(): CodeSandbox {
  const apiKey = process.env.CSB_API_KEY
  if (!apiKey) {
    throw new Error("CSB_API_KEY is not set")
  }
  if (!sdkInstance) {
    sdkInstance = new CodeSandbox(apiKey)
  }
  return sdkInstance
}

export const codesandboxSdk: CodeSandbox = new Proxy({} as CodeSandbox, {
  get(_target, prop) {
    const sdk = getSdk()
    const value = Reflect.get(sdk, prop, sdk)
    return typeof value === "function" ? value.bind(sdk) : value
  },
})

export const DEFAULT_TEMPLATE = "21st-vite"

export const TEMPLATES = {
  "21st-vite": "kwk42j", // "d5t2cg",
}

export const DEFAULT_HIBERNATION_TIMEOUT = 60
