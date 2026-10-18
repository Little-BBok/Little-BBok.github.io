export const MESSAGE_LIMIT = 500;
export const NAME_LIMIT = 40;

export function validateGuestbook(input: unknown): { name: string; message: string } | null {
  if (!input || typeof input !== "object") return null;
  const value = input as Record<string, unknown>;
  if (typeof value.message !== "string" || (value.name !== undefined && typeof value.name !== "string")) return null;
  if (value.website !== undefined && value.website !== "") return null;
  const name = typeof value.name === "string" ? value.name.trim() : "";
  const message = value.message.trim();
  if (name.length > NAME_LIMIT || !message || message.length > MESSAGE_LIMIT) return null;
  return { name, message };
}
