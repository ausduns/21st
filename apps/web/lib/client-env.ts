/** True when a NEXT_PUBLIC_* value is set and not a template placeholder. */
export function isConfiguredPublicEnvValue(value: string | undefined): boolean {
  if (!value?.trim()) return false
  const normalized = value.trim().toLowerCase()
  if (normalized === "placeholder") return false
  if (normalized.includes("*****")) return false
  return true
}
