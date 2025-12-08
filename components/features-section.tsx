import { FileText, Video, Settings } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "링크·문서 요약",
    description: "URL 또는 파일 업로드로 핵심만 쏙 추출합니다",
  },
  {
    icon: Video,
    title: "영상 요약",
    description: "자동 전사와 핵심 요약으로 긴 영상도 빠르게",
  },
  {
    icon: Settings,
    title: "요약 옵션 선택",
    description: "초압축 / 간단 / 상세 중 원하는 방식 선택",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">모든 포맷, 한 번에 요약</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:border-accent/50"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground mt-12 max-w-2xl mx-auto text-balance">
          복잡한 리서치도 단 몇 초면 끝. 당신의 정보 소비를 자동화하세요.
        </p>
      </div>
    </section>
  )
}
