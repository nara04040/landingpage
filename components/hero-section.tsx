"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { WaitlistModal } from "./waitlist-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent min-h-[90vh] flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
              복잡한 정보, 단 1초 만에 요약된다.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 text-balance">
              링크, 문서, 영상까지 한 번에 정리해주는 AI 요약 도우미 <span className="font-bold">인포드롭</span>
            </p>

            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto"
              onClick={() => setIsModalOpen(true)}
            >
              지금 웨이팅 리스트 등록하기
            </Button>

            {/* Demo UI Preview */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-card/95 backdrop-blur rounded-2xl shadow-2xl p-8 border border-primary-foreground/20">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-chart-4"></div>
                  <div className="w-3 h-3 rounded-full bg-chart-2"></div>
                </div>

                <div className="bg-muted rounded-lg p-4 mb-6">
                  <input
                    type="text"
                    placeholder="링크나 텍스트를 붙여넣으세요..."
                    className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                    disabled
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {["초압축 요약", "핵심 내용", "상세 분석"].map((title, i) => (
                    <div key={i} className="bg-secondary rounded-lg p-4">
                      <div className="h-2 bg-accent/30 rounded mb-2"></div>
                      <div className="h-2 bg-accent/20 rounded mb-2"></div>
                      <div className="h-2 bg-accent/20 rounded w-2/3"></div>
                      <p className="text-xs text-muted-foreground mt-3">{title}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mt-6 text-center">
                  ※ 본 데모는 실제 동작하지 않습니다. 예시 화면입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaitlistModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
