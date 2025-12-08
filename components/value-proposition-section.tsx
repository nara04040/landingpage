import { Clock, BookOpen, Zap } from "lucide-react"

const values = [
  {
    icon: Clock,
    title: "정보 소비 시간 단축",
    description: "수십 분 걸리던 리서치를 30초로",
  },
  {
    icon: BookOpen,
    title: "학습 효율 향상",
    description: "자료 흐름을 자동으로 정리",
  },
  {
    icon: Zap,
    title: "생산성 향상",
    description: "요약의 정확도와 일관성으로 빠른 판단",
  },
]

export function ValuePropositionSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">시간을 아끼는 가장 똑똑한 방법</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-balance max-w-2xl mx-auto">
            반복적인 '읽기'에서 벗어나, 더 중요한 일에 집중하세요.
          </p>
        </div>
      </div>
    </section>
  )
}
