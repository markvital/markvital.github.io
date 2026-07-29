import { createServer } from "node:http"
import { randomUUID } from "node:crypto"

const messages = []

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url ?? "/", "http://127.0.0.1:8788")

  if (request.method === "GET" && requestUrl.pathname === "/emails") {
    response.writeHead(200, { "Content-Type": "application/json" })
    response.end(JSON.stringify({ data: messages }))
    return
  }

  if (request.method !== "POST" || requestUrl.pathname !== "/emails") {
    response.writeHead(404, { "Content-Type": "application/json" })
    response.end(JSON.stringify({ message: "Not found." }))
    return
  }

  let body = ""
  for await (const chunk of request) body += chunk

  try {
    const email = JSON.parse(body)
    const id = randomUUID()
    messages.push({ id, receivedAt: new Date().toISOString(), ...email })
    console.log(
      `[mock-resend] accepted ${email.subject ?? "untitled message"} (${id})`,
    )
    response.writeHead(200, { "Content-Type": "application/json" })
    response.end(JSON.stringify({ id }))
  } catch {
    response.writeHead(400, { "Content-Type": "application/json" })
    response.end(JSON.stringify({ message: "Expected JSON." }))
  }
})

server.listen(8788, "127.0.0.1", () => {
  console.log("Mock Resend inbox listening on http://127.0.0.1:8788/emails")
})
