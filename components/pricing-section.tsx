import { Check } from "lucide-react"

const plans = [
  {
    name: "프리 플랜",
    description: "무료로 시작하기",
    features: ["월 20회 요약", "기본 텍스트 요약", "웹 브라우저 접근"],
  },
  {
    name: "베이직",
    price: "₩4,900",
    description: "개인 사용자",
    features: ["무제한 텍스트 요약", "문서 업로드", "요약 히스토리", "우선 지원"],
  },
  {
    name: "프로",
    price: "₩13,900",
    description: "전문가 & 팀",
    features: ["영상 포함 무제한", "팀 협업 기능", "API 접근", "고급 분석", "전용 지원"],
  },
  {
    name: "엔터프라이즈",
    description: "대규모 조직",
    features: ["커스텀 AI 모델", "전용 서버", "보안 강화", "맞춤형 통합", "전담 매니저"],
  },
]

export function PricingSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">무료로 시작하고, 필요에 맞게 확장하세요.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent/50"
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              {plan.price && <div className="text-3xl font-bold text-accent mb-2">{plan.price}</div>}
              {!plan.price && plan.name === "엔터프라이즈" && (
                <div className="text-lg font-semibold text-accent/80 mb-2">직접 문의 필요</div>
              )}
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 italic">
          * 출시 후 플랜 선택 가능, 지금은 웨이팅 리스트만 등록하세요.
        </p>
      </div>
    </section>
  )
}
