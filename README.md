# 🧠 Mindmirror 웹 MVP

> 당신의 불안, 다음 단계 지능의 설계도

**GitHub**: [https://github.com/demodevHaqu/mindmirror](https://github.com/demodevHaqu/mindmirror)

## 프로젝트 개요

Mindmirror의 핵심 컨셉(5가지 인지 패턴, 불안/안정 아트, 변환 메시지, 사유 확장형 질문)을 웹으로 구현한 MVP입니다.

## 기술 스택

- **Frontend**: Next.js 15.1, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL, REST API)
- **상태관리**: React Query

## 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. Supabase 설정

1. `.env.local.example` 파일을 `.env.local`로 복사
2. Supabase 프로젝트에서 URL과 Anon Key를 가져와 입력
3. `docs/supabase-setup.sql` 파일의 SQL을 Supabase SQL Editor에서 실행

### 3. 개발 서버 실행

```bash
pnpm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
mindmirror/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 홈페이지 (패턴 선택)
│   └── pattern/[id]/      # 패턴 상세 페이지
├── components/            # 컴포넌트
│   ├── PatternSelector.tsx
│   ├── PatternResult.tsx
│   ├── ArtAnxietyView.tsx
│   ├── ArtStableView.tsx
│   ├── TransformationMessage.tsx
│   └── InventorQuestions.tsx
├── hooks/                 # 커스텀 훅
│   └── usePatternData.ts
├── lib/                   # 유틸리티
│   ├── supabase/         # Supabase 클라이언트
│   ├── types.ts          # TypeScript 타입
│   └── utils.ts          # 유틸리티 함수
└── docs/                  # 문서
    ├── rules.md          # 개발 가이드라인
    ├── rules1.md         # Mindmirror MVP 가이드
    └── supabase-setup.sql # DB 설정 SQL
```

## 주요 기능

- ✅ 5가지 패턴 선택 화면
- ✅ 패턴별 불안/안정 아트 표시
- ✅ 변환 메시지 및 사유 확장형 질문
- ✅ Supabase 연동
- ✅ 반응형 디자인

## 개발 가이드라인

상세한 개발 가이드라인은 `docs/rules1.md`를 참고하세요.

- Spacing-First 정책 (padding/gap 우선, margin 최소화)
- 불필요한 추상화 금지
- Tailwind CSS 우선 사용
- Next.js 15 App Router 사용

## 빌드 및 배포

```bash
# 프로덕션 빌드
pnpm run build

# 프로덕션 서버 실행
pnpm run start
```

## 라이선스

MIT

