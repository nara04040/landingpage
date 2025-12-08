import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    // Notion API integration
    const notionApiKey = process.env.NOTION_API_KEY
    const notionDatabaseId = process.env.NOTION_DATABASE_ID

    if (!notionApiKey || !notionDatabaseId) {
      console.error("Notion credentials not configured")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const notionResponse = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionApiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: notionDatabaseId },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: name,
                },
              },
            ],
          },
          Email: {
            email: email,
          },
          Status: {
            select: {
              name: "Waiting",
            },
          },
          Created: {
            date: {
              start: new Date().toISOString(),
            },
          },
        },
      }),
    })

    if (!notionResponse.ok) {
      const errorData = await notionResponse.json()
      console.error("Notion API error:", errorData)
      throw new Error("Failed to add to Notion database")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Waitlist submission error:", error)
    return NextResponse.json({ error: "Failed to submit to waitlist" }, { status: 500 })
  }
}
