"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { WaitlistModal } from "./waitlist-modal"

export function WaitlistSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-accent via-primary to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            AI 요약 혁명, 가장 먼저 만나보세요.
          </h2>

          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto"
            onClick={() => setIsModalOpen(true)}
          >
            웨이팅 리스트 등록하기
          </Button>
        </div>
      </section>

      <WaitlistModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
