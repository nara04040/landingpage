export async function submitToNotion(name: string, email: string) {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  })

  if (!response.ok) {
    throw new Error("Failed to submit to waitlist")
  }

  return response.json()
}
