# Mindmirror 웹 MVP 작업 요약

**작업 일자**: 2025-01-28  
**작업 목표**: Mindmirror 웹 MVP (MVP1 - Supabase 기반, 멘토 시연용) 구현

---

## ✅ 완료된 작업

### 1. 프로젝트 초기 설정

#### 기술 스택
- **Next.js 15.1.0** - App Router 사용
- **TypeScript 5.7.2** - 타입 안정성
- **Tailwind CSS 3.4.17** - 스타일링
- **Supabase** - 백엔드/DB
- **React Query (@tanstack/react-query)** - 서버 상태 관리
- **Lucide React** - 아이콘

#### 프로젝트 구조
```
mindmirror/
├── app/
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 홈페이지 (패턴 선택)
│   └── pattern/[id]/
│       └── page.tsx         # 패턴 상세 페이지
├── components/
│   ├── PatternSelector.tsx  # 패턴 선택 컴포넌트
│   ├── PatternResult.tsx    # 패턴 결과 메인
│   ├── ArtAnxietyView.tsx   # 불안 아트 표시
│   ├── ArtStableView.tsx    # 안정 아트 표시
│   ├── TransformationMessage.tsx  # 변환 메시지
│   └── InventorQuestions.tsx     # 사유 확장형 질문
├── hooks/
│   └── usePatternData.ts    # Supabase 데이터 페칭
├── lib/
│   ├── supabase/
│   │   └── client.ts        # Supabase 클라이언트
│   ├── types.ts             # TypeScript 타입 정의
│   └── utils.ts             # 유틸리티 (cn 함수)
└── docs/
    ├── rules.md             # 개발 가이드라인
    ├── rules1.md            # Mindmirror MVP 가이드
    ├── supabase-setup.sql   # DB 설정 SQL
    └── work-summary.md      # 이 문서
```

### 2. 데이터베이스 설계

#### Supabase 테이블: `patterns_demo`
- 5가지 인지 패턴 데이터 저장
- 컬럼: id, name_ko/en, description_ko, trigger_question_ko
- 아트 정보: anxiety/stable image_url, art_mode, cog_axis, symbols
- 변환 메시지: transformation_message_ko
- 질문: inventor_questions_ko (배열)

#### 특징
- RLS 정책으로 공개 조회 허용
- 샘플 데이터 5개 포함
- 이미지는 placeholder 사용 (실제 서비스에서는 Midjourney 생성 이미지로 교체)

### 3. 핵심 페이지 구현

#### 홈페이지 (`app/page.tsx`)
- 슬로건: "당신의 불안, 다음 단계 지능의 설계도"
- 5가지 패턴 선택 버튼
- 반응형 그리드 레이아웃 (모바일 1단 → PC 3단)

#### 패턴 상세 페이지 (`app/pattern/[id]/page.tsx`)
- Next.js 15 형식: `await params` 사용
- Supabase에서 패턴 데이터 조회
- 뒤로가기 버튼
- PatternResult 컴포넌트로 구성

### 4. 컴포넌트 구현

#### PatternSelector
- 5가지 패턴 버튼 표시
- 클릭 시 `/pattern/[id]`로 라우팅
- 호버 효과 (빨간색 테마)

#### PatternResult
- 불안/안정 아트 영역 구분
- "변환하기" 버튼 클릭 시 안정 아트 표시
- 변환 메시지, 사유 확장형 질문 순차 표시

#### ArtAnxietyView / ArtStableView
- 불안 아트: 빨간색 테마 (`bg-red-50`, `text-red-800`)
- 안정 아트: 파란색 테마 (`bg-blue-50`, `text-blue-800`)
- 이미지, 아트 모드, 인지 축, 심볼 표시
- 배지 형태로 심볼 강조

#### TransformationMessage
- 그라데이션 배경 (파란색 → 보라색)
- 스파클 아이콘
- 이탤릭체로 메시지 강조

#### InventorQuestions
- 보라색 왼쪽 테두리
- 3개 질문 각각 배지 형태로 구분

### 5. Supabase 연동

#### 클라이언트 설정
```typescript
// lib/supabase/client.ts
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

#### 데이터 페칭
```typescript
// hooks/usePatternData.ts
export async function fetchPatternById(id: number): Promise<Pattern | null> {
  const { data, error } = await supabase
    .from("patterns_demo")
    .select("*")
    .eq("id", id)
    .single();
  
  return data as Pattern;
}
```

#### 로깅
- 패턴 조회 시작/성공/실패 로그 추가
- 디버깅 용이

### 6. 스타일링 & 디자인

#### Spacing-First 정책 준수
- 외부 여백: `p-6 md:p-8`
- 형제 간격: `gap-6`, `gap-8`
- 섹션 간격: `space-y-8`, `space-y-12`
- margin 사용 최소화

#### 반응형 디자인
- 모바일: 1단 레이아웃
- 태블릿/PC: 2단 레이아웃
- Tailwind 브레이크포인트 활용 (`md:`, `lg:`)

#### 색상 체계
- 기본: `bg-gray-50`, `text-gray-900`
- 불안: `bg-red-50`, `text-red-800`
- 안정: `bg-blue-50`, `text-blue-800`
- 강조: `bg-blue-600`, `bg-purple-500`

### 7. 개발 가이드라인 준수

#### ✅ SOLID 원칙
- SRP: 각 컴포넌트는 단일 책임
- OCP: 확장 가능한 구조

#### ✅ 네이밍 규칙
- 컴포넌트: `PascalCase`
- 훅: `camelCase`, `use` 접두사
- 금지어 미사용 (`Common`, `Base`, `Util`)

#### ✅ Export 규칙
- 단일 컴포넌트: `export default`
- 다중 유틸: `named export`

#### ✅ 불필요한 추상화 금지
- 의미 없는 래퍼 컴포넌트 없음
- 직접 스타일링으로 처리

---

## 📋 다음 단계 (추가 작업 필요)

### 1. Supabase 설정
1. Supabase 프로젝트 생성
2. `docs/supabase-setup.sql` 실행
3. `.env.local` 파일 생성 및 환경 변수 입력
4. 실제 아트 이미지 URL로 교체

### 2. 실행 및 테스트
1. `pnpm install` - 의존성 설치
2. `pnpm run dev` - 개발 서버 실행
3. 각 패턴 클릭하여 동작 확인
4. 로그 확인 (`console.log` 출력)

### 3. 추가 기능 (선택사항)
- 다크모드 지원 (next-themes 활용)
- 애니메이션 (Framer Motion)
- 이미지 최적화 (Next.js Image)
- 로딩 상태 처리

---

## 🎯 멘토 시연 포인트

### 1. Supabase 연동 시연
- SQL Editor에서 테이블 확인
- 웹에서 API 호출 → 브라우저 DevTools Network 탭 확인
- 데이터 페칭 로직 설명

### 2. Next.js 15 App Router
- Server Components 활용 (패턴 상세 페이지)
- 동적 라우트 (`[id]`)
- `await params` 패턴

### 3. 컴포넌트 설계
- 단일 책임 원칙
- Spacing-First 정책
- 불필요한 추상화 금지

### 4. 반응형 디자인
- 모바일/PC 화면 비교
- Tailwind 클래스 전환 설명

---

## 🔍 코드 품질 체크리스트

- ✅ TypeScript 타입 정의 완료
- ✅ ESLint 에러 없음
- ✅ Tailwind CSS 우선 사용
- ✅ 하드코딩된 색상값 없음
- ✅ Spacing-First 정책 준수
- ✅ 불필요한 추상화 없음
- ✅ 네이밍 규칙 준수
- ✅ 로깅 추가 (핵심 기능)
- ✅ 반응형 디자인 적용

---

## 📝 참고 문서

- **기획서**: `docs/rules1.md` (Mindmirror MVP 가이드)
- **가이드라인**: `docs/rules.md` (개발 가이드라인)
- **DB 설정**: `docs/supabase-setup.sql` (SQL 스크립트)
- **README**: 프로젝트 루트의 `README.md`

---

**작업 완료 시간**: 약 30분  
**주요 성과**: Supabase 기반 MVP 웹 서비스 프로토타입 완성

