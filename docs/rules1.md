좋아요 ✅
너가 제공한 **“Mindmirror 웹 MVP (MVP1 - Supabase 기반, 멘토 시연용)”** 기획서를 기반으로, 내가 학습한 **인프런 클론 프로젝트용 개발 가이드라인**의 구조와 원칙을 그대로 적용해 — **Mindmirror MVP 전용 개발 가이드라인 (고도화 버전)**으로 재작성했어.
즉, 기존의 설계 원칙·코딩 규칙·Next.js 15 설정·Spacing 정책 등을 유지하면서, 이번 프로젝트의 **패턴 기반 아트 전환 시스템과 Supabase 연동** 중심으로 완전히 맞춰진 개발 기준이야.

---

# 🧠 Mindmirror 웹 MVP (MVP1 - Supabase 기반)

### **멘토 시연용 고도화 개발 가이드라인**

---

## 🚀 1. 프로젝트 개요

### 🎯 목적

Mindmirror의 핵심 컨셉(5가지 인지 패턴, 불안/안정 아트, 아트 모드, 변환 메시지, 사유 확장형 질문)을
**웹 기술로 시각적으로 재현**하고, **Supabase 연동 흐름 전체(A→Z)**를 멘토에게 시연하기 위한 **웹 MVP 버전**입니다.

### ⚙️ 기술 스택

| 구분               | 기술                                                                      |
| ---------------- | ----------------------------------------------------------------------- |
| **Frontend**     | Next.js 15.1, TypeScript 5.6, Tailwind CSS 3.4, shadcn/ui, Lucide React |
| **Backend / DB** | Supabase (PostgreSQL, REST API)                                         |
| **추가 라이브러리**     | React Query, next-themes, clsx + tailwind-merge                         |

---

## 🧩 2. 핵심 기능 요약

### 사용자 플로우

1. **시작 화면**

   * 슬로건: *“당신의 불안, 다음 단계 지능의 설계도.”*
   * 5가지 패턴 선택 버튼 표시 (DB에서 name_ko 불러오기)

2. **패턴 선택 → 결과 표시**

   * 선택된 패턴의 설명(description_ko)
   * **불안 아트 영역**

     * anxiety_image_url 표시
     * art_mode / cog_axis / symbols 정보 표시
   * **‘변환’ 버튼 클릭 시**

     * stable_image_url 표시
     * stable_art_mode / cog_axis / symbols 표시
     * transformation_message_ko 표시
     * inventor_questions_ko (3개 질문) 표시

### 핵심 구현

* Supabase `patterns_demo` 테이블에서 정적 데이터 조회
* 실시간 생성/분석 기능 제외
* focus: **DB 연동 + 동적 화면 표시 + 시각적 구조**

---

## 🏗 3. 컴포넌트 설계 원칙

### ❌ 불필요한 추상화 금지

* 단순 스타일 래퍼 금지
* 의미 없는 컨테이너(`div + className`) 금지
* 배럴 익스포트 금지 (단일 도메인 2~3개 이하일 경우 직접 import)

### ✅ 추상화 허용 기준

1. Supabase fetch 로직, 데이터 변환 로직 포함 시
2. 3곳 이상 재사용 시
3. 복잡한 조건부 렌더링 (10줄 이상) 시

```tsx
// ✅ 허용된 추상화 예시: Supabase 데이터 조회
export function usePatternData(id: string) {
  return useQuery({
    queryKey: ['pattern', id],
    queryFn: async () => {
      const { data } = await supabase.from('patterns_demo').select('*').eq('id', id).single();
      return data;
    },
  });
}
```

---

## 🎨 4. 컴포넌트 네이밍 규칙

### 도메인별 네이밍 패턴

| 도메인        | 컴포넌트 예시                                           | 훅               | 타입                |
| ---------- | ------------------------------------------------- | --------------- | ----------------- |
| **패턴**     | PatternSelector, PatternResult, PatternCard       | usePatternData  | Pattern           |
| **아트**     | ArtAnxietyView, ArtStableView, ArtTransformButton | useArtTransform | ArtData           |
| **질문/메시지** | TransformationMessage, InventorQuestions          | useQuestions    | Message, Question |
| **UI**     | LayoutContainer, Header, Footer                   | -               | -                 |

### 네이밍 규칙

* 컴포넌트: **PascalCase**
* 훅: **camelCase**, `use` 접두사
* 타입: **PascalCase**
* 상수: **UPPER_SNAKE_CASE**

---

## 📤 5. Export 규칙

| 구분       | 규칙               | 예시                                        |
| -------- | ---------------- | ----------------------------------------- |
| 단일 컴포넌트  | `export default` | `export default function PatternResult()` |
| 다중 유틸/훅  | `named export`   | `export function usePatternData()`        |
| UI 라이브러리 | shadcn 패턴 유지     | `export { Button, Card }`                 |

---

## 🎨 6. Tailwind CSS / 디자인 시스템

### 컬러

* 배경: `bg-white`, `bg-gray-50`, `bg-gray-100`
* 텍스트: `text-gray-900`, `text-gray-700`
* 상태 컬러:

  * 불안 아트: `bg-red-100 text-red-800`
  * 안정 아트: `bg-blue-100 text-blue-800`

### 타이포그래피

* 제목: `text-2xl font-semibold`
* 본문: `text-base text-gray-700`
* 질문 텍스트: `text-sm italic text-gray-600`

### 레이아웃

```tsx
// 불안 / 안정 아트 구역
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <ArtAnxietyView />
  <ArtStableView />
</div>
```

---

## 📏 7. Spacing-First 정책

* **내부 여백:** `p-6 md:p-8`
* **형제 간격:** `gap-4 md:gap-6`
* **섹션 간격:** `py-8 md:py-12`
* **margin 사용 금지**, gap/padding만 사용

```tsx
// ✅ 좋은 예
<div className="p-6">
  <div className="flex flex-col gap-4">
    <PatternCard />
    <TransformationMessage />
    <InventorQuestions />
  </div>
</div>
```

---

## ⚙️ 8. Supabase 연동 구조

### 테이블: `patterns_demo`

| 컬럼                                                    | 설명             |
| ----------------------------------------------------- | -------------- |
| id                                                    | 1~5            |
| name_ko / name_en                                     | 패턴 이름          |
| description_ko                                        | 인지공학적 설명       |
| trigger_question_ko                                   | 패턴 유도 질문       |
| anxiety_image_url                                     | 불안 아트 이미지 URL  |
| anxiety_art_mode / anxiety_cog_axis / anxiety_symbols | 불안 아트 메타 정보    |
| stable_image_url                                      | 안정 아트 이미지 URL  |
| stable_art_mode / stable_cog_axis / stable_symbols    | 안정 아트 메타 정보    |
| transformation_message_ko                             | 변환 메시지         |
| inventor_questions_ko                                 | 사유 확장형 질문 (3개) |

### 데이터 접근 구조

```tsx
// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

```tsx
// hooks/usePatternData.ts
import { supabase } from '@/lib/supabase/client';

export async function fetchPatternById(id: number) {
  const { data, error } = await supabase.from('patterns_demo').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}
```

---

## 📁 9. 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # 시작 화면 (패턴 선택)
│   └── pattern/[id]/page.tsx       # 선택된 패턴 상세
├── components/
│   ├── PatternSelector.tsx
│   ├── PatternResult.tsx
│   ├── ArtAnxietyView.tsx
│   ├── ArtStableView.tsx
│   ├── TransformationMessage.tsx
│   └── InventorQuestions.tsx
├── hooks/
│   └── usePatternData.ts
├── lib/
│   └── supabase/client.ts
└── public/
    └── images/
```

---

## ✅ 10. 최종 체크리스트

### 데이터 / 로직

* [ ] Supabase 연결 정상 작동
* [ ] DB에서 5개 패턴 데이터 조회 가능
* [ ] 각 이미지 및 텍스트 정상 표시

### 코드 품질

* [ ] 불필요한 추상화 없음
* [ ] Tailwind spacing 정책 준수
* [ ] Next.js 15 `await params` 사용
* [ ] ESLint / TypeScript 에러 없음

### 시각적 완성도

* [ ] 불안/안정 아트 명확 구분
* [ ] 변환 메시지 및 질문 영역 시각적으로 강조
* [ ] 반응형 (모바일 → 1단, PC → 2단) 적용

---

## 💡 11. 멘토 시연 시 포인트

1. Supabase에서 데이터 직접 조회 → 브라우저 표시 시연
2. 패턴 버튼 클릭 → 아트 및 텍스트 변환 로직 실행
3. 구조적 UI 설계(Tailwind 기반 Spacing / Layout 일관성) 강조
4. Next.js App Router 구조 및 DB 연동 흐름 설명

---

## 🚫 금지 사항 요약

* 인라인 style / margin 기반 spacing
* 불필요한 wrapper / 배럴 export
* 직접적인 fetch() → 반드시 Supabase SDK 사용
* 하드코딩된 색상값(hex)
* Common/Base 네이밍

---

이 버전은 **"인프런 가이드라인의 코드 품질 체계" + "Mindmirror 기획서의 기능 요구사항"**을 통합한
**MVP 시연용 개발 기준서**입니다.

원하면 이 문서를 기반으로:

* **Supabase 테이블 생성 스크립트**
* **Next.js 페이지/컴포넌트 초기 코드 템플릿**
  도 바로 만들어드릴 수 있습니다.

👉 다음 단계로 어떤 걸 원해?
예:

> “이 기준으로 초기 코드 템플릿 만들어줘 (Next.js + Supabase)”
> 혹은
> “Supabase 테이블 생성 SQL도 포함해서 구성해줘.”
