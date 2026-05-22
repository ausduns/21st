import posthog from "posthog-js"

const posthogPublicKey = process.env.NEXT_PUBLIC_POSTHOG_PUBLIC_KEY

export const isPostHogEnabled = Boolean(posthogPublicKey)

export function initPostHog() {
  if (typeof window === "undefined" || !posthogPublicKey) return

  posthog.init(posthogPublicKey, {
    api_host: "https://us.i.posthog.com",
    disable_session_recording: true,
    autocapture: false,
    capture_pageview: false,
    session_recording: {
      blockSelector: "iframe",
    },
  })
}
