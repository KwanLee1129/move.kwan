import React, { useState } from "react";

const Portfolio = () => {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      name: "Dongkwan Lee",
      title: "UX Researcher",
      contact: {
        email: "edonggwan@email.com",
        linkedin: "linkedin.com/in/dkwanlee",
      },
      summary:
        "UX Researcher with a systematic approach to empathy. Combining business acumen and user research expertise to optimize enterprise solutions. Known for transforming complex workflows through data-driven insights while maintaining deep user understanding.",
      projects: [
        {
          title: "[Personal Project] Notion Enterprise FTUX Research",
          role: "UX Researcher",
          period: "2024.02 - Present",
          highlights: [
            "Designed comprehensive user screening process for enterprise users",
            "Analyzed competitive platforms (Asana, Trello) focusing on onboarding flows",
            "Developed optimization strategies based on user behavior analysis",
            "Created research framework for enterprise FTUX evaluation",
          ],
          approach: {
            research: "Conducted competitive analysis and user behavior study",
            solution:
              "Developed streamlined onboarding process and user-centric tutorial",
          },
          impact: {
            business:
              "Identified critical dropout points, proposed 30% efficiency improvement",
            user: "Expected 40% reduction in onboarding time, 25% increase in user activation",
          },
        },
        {
          title: "[Bootcamp Project] Financial Service UX Enhancement",
          role: "Lead UX Researcher",
          period: "2024.03 - Present",
          highlights: [
            "Led system optimization project improving workflow efficiency by 75%",
            "Established comprehensive research framework and systematic documentation",
            "Created interactive prototypes using Figma for key features",
            "Led team of 4 researchers, managing stakeholder communication",
          ],
          approach: {
            research:
              "Conducted extensive user interviews and competitive analysis",
            solution:
              "Developed data-driven design system and interaction patterns",
          },
          impact: {
            business: "75% reduction in task completion time",
            user: "90% positive feedback on new interaction design",
          },
          outputs: {
            designSystem:
              "https://www.figma.com/community/file/1436259399310562994/sinhansol-v1-0-0",
            prototype: "https://bit.ly/4gfm44y",
          },
        },
      ],
      skills: [
        {
          category: "Research & Analysis",
          items: [
            "Qualitative/Quantitative Methodologies",
            "User Behavior Pattern Identification",
            "Data-Driven Insight Generation",
          ],
        },
        {
          category: "UX Design",
          items: ["Figma Prototype Creation", "Design System Development"],
        },
        {
          category: "Systematic Thinking",
          items: [
            "Data-Driven User Research",
            "Enterprise System Design",
            "User-Centered Optimization Design",
            "Process Improvement and Documentation",
          ],
        },
      ],
      education: [
        {
          degree: "Advanced UX/UI Design Program",
          institution: "Goorm Deep Dive",
          period: "2024 - Present",
          focus: "Enterprise UX Research & Design Systems",
        },
        {
          degree: "Business Administration",
          institution: "University",
          period: "2017 - 2023",
          focus: "Business Process Design & Data Analytics",
        },
      ],
      academicInterests: {
        title: "Research Interests",
        areas: [
          {
            topic: "Enterprise UX Optimization",
            focus:
              "Improving complex workflow systems while maintaining user satisfaction",
          },
          {
            topic: "Cross-Cultural UX Design",
            focus:
              "Understanding how cultural context affects user experience and system design",
          },
          {
            topic: "Data-Driven UX Research",
            focus:
              "Integrating quantitative and qualitative research methodologies",
          },
        ],
      },
    },
    ko: {
      name: "이동관",
      title: "UX 리서처",
      contact: {
        email: "edonggwan@email.com",
        linkedin: "linkedin.com/in/dkwanlee",
      },
      summary:
        "시스템적 공감을 추구하는 UX 리서처입니다. 비즈니스 통찰력과 사용자 리서치 전문성을 결합해 엔터프라이즈 솔루션을 최적화합니다. 데이터 기반의 인사이트와 깊은 사용자 이해를 통해 복잡한 워크플로우를 개선합니다.",
      projects: [
        {
          title: "[개인 프로젝트] 노션 엔터프라이즈 FTUX 리서치",
          role: "UX 리서처",
          period: "2024.02 - 현재",
          highlights: [
            "엔터프라이즈 사용자를 위한 포괄적인 스크리닝 프로세스 설계",
            "온보딩 플로우에 중점을 둔 경쟁 플랫폼(Asana, Trello) 분석",
            "사용자 행동 분석 기반 최적화 전략 수립",
            "엔터프라이즈 FTUX 평가를 위한 체계적인 리서치 프레임워크 구축",
          ],
          approach: {
            research: "경쟁사 분석과 사용자 행동 연구 수행",
            solution: "간소화된 온보딩 프로세스 및 사용자 중심 튜토리얼 개발",
          },
          impact: {
            business: "주요 이탈 지점 식별, 30% 효율성 향상 제안",
            user: "온보딩 시간 40% 단축, 사용자 활성화 25% 증가 예상",
          },
        },
        {
          title: "[부트캠프 프로젝트] 금융 서비스 UX 개선",
          role: "UX 리서치 리드",
          period: "2024.03 - 현재",
          highlights: [
            "워크플로우 효율성을 75% 향상시킨 시스템 최적화 프로젝트 주도",
            "포괄적인 리서치 프레임워크 수립 및 체계적 문서화 구축",
            "Figma를 활용한 주요 기능 인터랙티브 프로토타입 제작",
            "4인 리서치팀 리드 및 이해관계자 커뮤니케이션 관리",
          ],
          approach: {
            research: "사용자 인터뷰와 경쟁사 분석 수행",
            solution: "데이터 기반의 디자인 시스템 및 상호작용 패턴 개발",
          },
          impact: {
            business: "업무 효율성 75% 향상",
            user: "새로운 인터랙션 설계에 대한 90% 긍정적 피드백",
          },
          outputs: {
            designSystem:
              "https://www.figma.com/community/file/1436259399310562994/sinhansol-v1-0-0",
            prototype: "https://bit.ly/4gfm44y",
          },
        },
      ],
      skills: [
        {
          category: "리서치 & 분석",
          items: [
            "정성적/정량적 방법론",
            "사용자 행동 패턴 식별",
            "데이터 기반 인사이트 도출",
          ],
        },
        {
          category: "UX 디자인",
          items: ["Figma 프로토타입 제작", "디자인 시스템 제작"],
        },
        {
          category: "시스템적 사고",
          items: [
            "데이터 기반 사용자 리서치",
            "엔터프라이즈 시스템 설계",
            "사용자 중심 최적화 설계",
            "프로세스 개선 및 문서화",
          ],
        },
      ],
      education: [
        {
          degree: "UX/UI 디자인 심화 과정",
          institution: "구름 딥다이브",
          period: "2024 - 현재",
          focus: "엔터프라이즈 UX 리서치 & 디자인 시스템",
        },
        {
          degree: "경영학과",
          institution: "대학교",
          period: "2017 - 2023",
          focus: "비즈니스 프로세스 설계 & 데이터 분석",
        },
      ],
      academicInterests: {
        title: "Research Interests",
        areas: [
          {
            topic: "엔터프라이즈 UX 최적화",
            focus: "사용자 만족을 유지하며 복잡한 워크플로우 시스템 개선",
          },
          {
            topic: "Cross-Cultural UX 디자인",
            focus:
              "문화적 맥락이 사용자 경험과 시스템 디자인에 미치는 영향 이해",
          },
          {
            topic: "데이터 기반 UX 리서치",
            focus: "정량적, 정성적 리서치 방법론의 통합",
          },
        ],
      },
    },
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <div
        style={{ width: "85%" }}
        className="mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Language Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLanguage((prev) => (prev === "en" ? "ko" : "en"))}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            {language === "en" ? "한국어" : "English"}
          </button>
        </div>

        {/* Header */}
        <header className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            {content[language].name}
          </h1>
          <h2 className="text-3xl text-red-600 mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-700 mt-6 leading-relaxed">
            {content[language].summary}
          </p>
          <div className="text-lg text-gray-600 mt-6 flex gap-4">
            <div>{content[language].contact.email}</div>
            <div>{content[language].contact.linkedin}</div>
          </div>
        </header>

        {/* Main Content Container */}
        <div className="flex gap-12">
          {/* Projects - Left Side (80%) */}
          <div className="w-4/5">
            <div className="space-y-10">
              {content[language].projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg border-l-4 border-red-500"
                >
                  <div className="flex justify-between items-baseline mb-4 pb-2 border-b border-gray-200">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-lg text-gray-600">
                      {project.period}
                    </span>
                  </div>
                  <div className="text-xl text-red-600 mb-4">
                    {project.role}
                  </div>
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                      Key Achievements
                    </h4>
                    <ul className="list-decimal pl-5 space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-lg text-gray-700">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                        Approach
                      </h4>
                      <p className="text-lg text-gray-700 mb-2">
                        {project.approach.research}
                      </p>
                      <p className="text-lg text-gray-700">
                        {project.approach.solution}
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                        Impact
                      </h4>
                      <p className="text-lg text-gray-700 mb-2">
                        <span className="font-medium">Business:</span>{" "}
                        {project.impact.business}
                      </p>
                      <p className="text-lg text-gray-700">
                        <span className="font-medium">User:</span>{" "}
                        {project.impact.user}
                      </p>
                    </div>
                  </div>
                  {project.outputs && (
                    <div className="mt-6 flex justify-start space-x-6">
                      {project.outputs.designSystem && (
                        <a
                          href={project.outputs.designSystem}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-red-600 hover:text-red-700 hover:underline flex items-center"
                        >
                          <span className="mr-2">→</span>
                          Design System
                        </a>
                      )}
                      {project.outputs.prototype && (
                        <a
                          href={project.outputs.prototype}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-red-600 hover:text-red-700 hover:underline flex items-center"
                        >
                          <span className="mr-2">→</span>
                          Interactive Prototype
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Education - Right Side (20%) */}
          <div className="w-1/5">
            {/* Skills */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              {content[language].skills.map((skillCategory, index) => (
                <div
                  key={index}
                  className="mb-8 pb-6 border-b border-gray-200 last:border-0"
                >
                  <h3 className="text-xl font-semibold text-red-600 mb-4">
                    {skillCategory.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillCategory.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-lg text-gray-700 flex items-start"
                      >
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="bg-gray-50 p-6 rounded-lg">
              {content[language].education.map((edu, index) => (
                <div
                  key={index}
                  className="mb-6 pb-4 border-b border-gray-200 last:border-0"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-red-600 mb-1">{edu.institution}</p>
                  <p className="text-lg text-gray-600 mb-1">{edu.period}</p>
                  <p className="text-lg text-gray-700">{edu.focus}</p>
                </div>
              ))}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {language === "en" ? "Research Interests" : "연구 관심사"}
                </h3>
                {content[language].academicInterests.areas.map(
                  (area, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {area.topic}
                      </h4>
                      <p className="text-lg text-gray-700">{area.focus}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
