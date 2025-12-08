import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const supabase = createServerClient()

    // Supabase에 데이터 저장
    const { error } = await supabase.from("waitlist").insert({
      name,
      email,
    })

    if (error) {
      // 중복 이메일 에러 처리
      if (error.code === "23505") {
        return NextResponse.json({ error: "이미 등록된 이메일입니다." }, { status: 409 })
      }
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to submit to waitlist" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Waitlist submission error:", error)
    return NextResponse.json({ error: "Failed to submit to waitlist" }, { status: 500 })
  }
}
