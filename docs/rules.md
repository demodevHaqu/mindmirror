## **주요 기술 스택 (수정본)**

### **🚀 프레임워크 & 언어**

- **Next.js 15.1.0** - React 기반 풀스택 프레임워크 (App Router 사용) ✅
- **TypeScript 5.6.2** - 정적 타입 검사 ✅
- **React 19.0.0** - UI 라이브러리 ✅
- **Supabase** - 백엔드 서비스 (설정 완료, 미사용) ⏳

### **🎨 스타일링 & UI**

- **Tailwind CSS 3.4.1** - 유틸리티 퍼스트 CSS 프레임워크 ✅
- **shadcn-ui** - Radix UI 기반 컴포넌트 라이브러리 ✅
- **@radix-ui** - 접근성 중심 헤드리스 UI 컴포넌트들 ✅
- **Lucide React** - 아이콘 라이브러리 ✅
- **next-themes** - 다크/라이트 테마 지원 ✅
- **Framer Motion** - 애니메이션 라이브러리 ⏳

### **📊 상태관리 & 데이터 페칭**

- **@tanstack/react-query** - 서버 상태 관리 (Provider 설정됨) ⏳
- **Zustand** - 클라이언트 상태 관리 ⏳
- **Axios** - HTTP 클라이언트 ⏳

### **📝 폼 관리 & 유효성 검사**

- **React Hook Form** - 폼 상태 관리 ⏳
- **Zod** - 스키마 유효성 검사 ⏳

### **🛠️ 유틸리티 라이브러리**

- **date-fns** - 날짜/시간 처리 ⏳
- **es-toolkit** - 유틸리티 함수 모음 ⏳
- **ts-pattern** - 패턴 매칭 ⏳
- **react-use** - React 훅 모음 ⏳
- **clsx** + **class-variance-authority** - 조건부 클래스명 관리 ✅
- **tailwind-merge** - Tailwind 클래스 병합 ✅

### **🔧 개발 도구**

- **ESLint** - 코드 품질 검사 ✅
- **PostCSS** - CSS 후처리 ✅
- **Webpack** - 번들러 (Next.js 기본) ✅
- *Turbopack은 next dev --turbo로 실험적 사용 가능*

### **🏗️ 아키텍쳐 특징**

- **App Router 사용** - Next.js 13+의 새로운 라우팅 시스템 ✅
- **Server Components와 Client Components 혼용** ✅
- **TypeScript 기반 타입 안정성** ✅
- **Feature-based 디렉토리 구조** ❌ (현재는 기본 구조)
- **shadcn-ui 기반 디자인 시스템** ✅

**📁 현재 프로젝트 구조textApply to mcp.jsonsrc/├── app/              # 페이지 라우팅├── components/       # 재사용 컴포넌트│   └── ui/          # shadcn-ui 컴포넌트└── lib/             # 유틸리티 및 설정    └── supabase/    # Supabase 클라이언트**

지금 메인페이지에서 있는 강의들이 있는데 이 강의들을 눌렀을때 나오는 상세페이지가 필요해

선호기술스택에 맞게 우리의 프로젝트를 좀 더 확장시켜줘

한 다음에 작업내용을 docs 에 정리해서 작성해줘