import { Briefcase, GraduationCap, Brain, PlayCircle } from "lucide-react"

const useCases = [
  {
    icon: Briefcase,
    title: "기획자·마케터",
    description: "링크 수십 개, 요약으로 한눈에 정리",
  },
  {
    icon: GraduationCap,
    title: "학생·연구자",
    description: "논문·자료 요약으로 학습 효율 상승",
  },
  {
    icon: Brain,
    title: "지식 노동자",
    description: "회의록·보고서 핵심만 빠르게 파악",
  },
  {
    icon: PlayCircle,
    title: "영상 소비자",
    description: "긴 영상도 요약으로 5분 컷",
  },
]

export function UseCasesSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">이런 분들에게 꼭 필요해요</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <useCase.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground mt-12 max-w-2xl mx-auto text-balance">
          지금 '인포드롭'으로 당신의 정보 루틴을 업그레이드하세요.
        </p>
      </div>
    </section>
  )
}
