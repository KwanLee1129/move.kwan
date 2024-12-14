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
        "UX Researcher specializing in enterprise solutions and complex workflow optimization. Strong foundation in research framework development and data-driven improvements, complemented by hands-on experience in UX design and business process optimization.",
      projects: [
        {
          title: "[Bootcamp Project] Financial Service UX Enhancement",
          role: "Lead UX Researcher",
          period: "2024.03 - Present",
          highlights: [
            "Led UX research team and established research framework",
            "Conducted user interviews and developed improvement strategies",
            "Created interactive prototypes using Figma",
            "Improved team efficiency through strategic task distribution",
          ],
          methods:
            "In-depth Interviews, Journey Mapping, A/B Testing, Interactive Prototyping",
          outputs: {
            designSystem:
              "https://www.figma.com/community/file/1436259399310562994/sinhansol-v1-0-0",
            prototype: "https://bit.ly/4gfm44y",
          },
          impact:
            "Leading systematic research process and prototype validation",
        },
        {
          title: "[Personal Project] Notion Enterprise FTUX Research",
          role: "UX Researcher",
          period: "2024.02 - Present",
          highlights: [
            "Designed comprehensive user screening process",
            "Analyzed competitive platforms (Asana, Trello)",
            "Developed onboarding optimization strategies",
            "Established data-driven research framework",
          ],
          methods: "Competitive Analysis, User Screening, Flow Analysis",
          impact:
            "Improving first-time user experience for enterprise platform",
        },
        {
          title:
            "Education Service Optimization at Openknowl (Korean EdTech Startup)",
          role: "Education Planning Manager",
          period: "2022.02 - 2024.03",
          highlights: [
            "Managed 1,000+ annual education programs",
            "Achieved 75% improvement in operational efficiency",
            "Led successful B2B SaaS implementation",
            "Conducted stakeholder interviews and needs analysis",
          ],
          methods:
            "Process Optimization, Stakeholder Interviews, Data Analysis",
          impact:
            "Transformed operations through process improvement and SaaS implementation",
        },
      ],
      skills: [
        {
          category: "UX Research",
          items: [
            "Qualitative & Quantitative Research Design",
            "User Behavior Analysis & Insights",
            "Research Framework Development",
            "Usability Testing",
          ],
        },
        {
          category: "UX Design",
          items: [
            "Figma Interactive Prototyping",
            "Design System Development",
            "Information Architecture",
            "User Flow Optimization",
          ],
        },
        {
          category: "Business & Leadership",
          items: [
            "Process Optimization",
            "Stakeholder Management",
            "Project Leadership",
            "Data-Driven Decision Making",
          ],
        },
      ],
      education: [
        {
          degree: "Advanced UX/UI Design Program",
          period: "2024 - Present",
          focus: "Enterprise UX Research & Design Systems",
        },
        {
          degree: "Business Administration",
          period: "2017 - 2023",
          focus: "Business Process Design, Data Analytics",
        },
      ],
    },
    ko: {
      name: "이동관",
      title: "UX 리서처",
      contact: {
        email: "edonggwan@email.com",
        linkedin: "linkedin.com/in/dkwanlee",
      },
      summary:
        "엔터프라이즈 솔루션과 복잡한 워크플로우 최적화에 특화된 UX 리서처입니다. 리서치 프레임워크 개발과 데이터 기반 개선에 대한 탄탄한 기반을 보유하고 있으며, UX 디자인과 비즈니스 프로세스 최적화 실무 경험을 겸비하고 있습니다.",
      projects: [
        {
          title: "[부트캠프 프로젝트] 금융 서비스 UX 개선",
          role: "UX 리서치 리드",
          period: "2024.03 - 현재",
          highlights: [
            "UX 리서치 팀 리드 및 리서치 프레임워크 수립",
            "사용자 인터뷰 진행 및 개선 전략 수립",
            "Figma를 활용한 인터랙티브 프로토타입 제작",
            "전략적 업무 분배를 통한 팀 효율성 향상",
          ],
          methods:
            "심층 인터뷰, 여정 맵핑, A/B 테스트, 인터랙티브 프로토타이핑",
          outputs: {
            designSystem:
              "https://www.figma.com/community/file/1436259399310562994/sinhansol-v1-0-0",
            prototype: "https://bit.ly/4gfm44y",
          },
          impact: "체계적 리서치 프로세스 및 프로토타입 검증 주도",
        },
        {
          title: "[개인 프로젝트] 노션 엔터프라이즈 FTUX 리서치",
          role: "UX 리서처",
          period: "2024.02 - 현재",
          highlights: [
            "포괄적인 사용자 스크리닝 프로세스 설계",
            "경쟁 플랫폼(Asana, Trello) 분석",
            "온보딩 최적화 전략 수립",
            "데이터 기반 리서치 프레임워크 구축",
          ],
          methods: "경쟁사 분석, 사용자 스크리닝, 플로우 분석",
          impact: "엔터프라이즈 플랫폼의 최초 사용자 경험 개선",
        },
        {
          title: "오픈놀(교육 스타트업)의 교육 서비스 최적화",
          role: "교육사업기획 주임",
          period: "2022.02 - 2024.03",
          highlights: [
            "연간 1,000개 이상의 교육 프로그램 관리",
            "운영 효율성 75% 향상 달성",
            "B2B SaaS 도입 성공적 주도",
            "이해관계자 인터뷰 및 니즈 분석 수행",
          ],
          methods: "프로세스 최적화, 이해관계자 인터뷰, 데이터 분석",
          impact: "프로세스 개선과 SaaS 도입을 통한 운영 혁신",
        },
      ],
      skills: [
        {
          category: "UX 리서치",
          items: [
            "정성적/정량적 리서치 설계",
            "사용자 행동 분석 및 인사이트 도출",
            "리서치 프레임워크 개발",
            "사용성 테스트",
          ],
        },
        {
          category: "UX 디자인",
          items: [
            "Figma 인터랙티브 프로토타이핑",
            "디자인 시스템 개발",
            "정보 구조 설계",
            "사용자 플로우 최적화",
          ],
        },
        {
          category: "비즈니스 & 리더십",
          items: [
            "프로세스 최적화",
            "이해관계자 관리",
            "프로젝트 리더십",
            "데이터 기반 의사결정",
          ],
        },
      ],
      education: [
        {
          degree: "UX/UI 디자인 심화 프로그램",
          period: "2024 - 현재",
          focus: "엔터프라이즈 UX 리서치 & 디자인 시스템",
        },
        {
          degree: "경영학과",
          period: "2017 - 2023",
          focus: "비즈니스 프로세스 설계, 데이터 분석",
        },
      ],
    },
  };
  return (
    <div className="w-full min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded">
        {/* Language Toggle */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setLanguage((prev) => (prev === "en" ? "ko" : "en"))}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            {language === "en" ? "한국어" : "English"}
          </button>
        </div>

        {/* Header */}
        <div className="p-8 border-b bg-slate-50">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {content[language].name}
              </h1>
              <h2 className="text-xl font-medium text-red-600 mt-1">
                {content[language].title}
              </h2>
            </div>
            <div className="text-right text-gray-600">
              <div>{content[language].contact.email}</div>
              <div>{content[language].contact.linkedin}</div>
            </div>
          </div>
          <p className="mt-4 text-gray-700">{content[language].summary}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8 p-8">
          {/* Projects - Left Side */}
          <div className="col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Projects
            </h2>
            {content[language].projects.map((project, index) => (
              <div key={index} className="border-l-4 border-red-500 pl-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-600">
                    {project.period}
                  </span>
                </div>
                <div className="text-red-600 mb-2">{project.role}</div>
                <ul className="space-y-1 mb-3">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-gray-600">
                  <p>
                    <span className="font-medium">Methods:</span>{" "}
                    {project.methods}
                  </p>
                  {project.outputs && (
                    <div className="mt-1">
                      <p>
                        <span className="font-medium">Outputs:</span>
                      </p>
                      <a
                        href={project.outputs.designSystem}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:underline"
                      >
                        Design System
                      </a>
                      <span className="mx-2">|</span>
                      <a
                        href={project.outputs.prototype}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:underline"
                      >
                        Interactive Prototype
                      </a>
                    </div>
                  )}
                  <p className="mt-1">
                    <span className="font-medium">Impact:</span>{" "}
                    {project.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Right Side Column */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Core Competencies
              </h2>
              {content[language].skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-red-600 font-semibold mb-2">
                    {skill.category}
                  </h3>
                  <ul className="space-y-1">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Education
              </h2>
              {content[language].education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-md font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-gray-600">{edu.period}</span>
                  </div>
                  <p className="text-sm text-gray-700">{edu.focus}</p>
                </div>
              ))}
            </div>
          </div>
          // 마지막 부분 수정
        </div>
      </div>
    </div>
  );
};

export default Portfolio; // export 추가
