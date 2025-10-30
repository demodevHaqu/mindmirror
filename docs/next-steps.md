# 🚀 다음 단계: Mindmirror MVP 실행 가이드

## 1️⃣ Supabase 설정

### Step 1: Supabase 프로젝트 생성
1. [supabase.com](https://supabase.com) 접속
2. 새 프로젝트 생성
3. 프로젝트 이름: `mindmirror-mvp`
4. 비밀번호 설정 후 저장

### Step 2: 데이터베이스 테이블 생성
1. Supabase Dashboard → SQL Editor 열기
2. `docs/supabase-setup.sql` 파일 내용 복사
3. SQL Editor에 붙여넣기 후 실행
4. 5가지 패턴 데이터가 생성되었는지 확인

### Step 3: 환경 변수 설정
1. Supabase Dashboard → Settings → API
2. 다음 정보 복사:
   - Project URL
   - anon/public key
3. `.env.local` 파일 생성:
```bash
cp .env.local.example .env.local
```
4. `.env.local` 파일 편집하여 실제 값 입력:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

## 2️⃣ 개발 서버 실행

```bash
# 의존성 설치 (이미 완료)
pnpm install

# 개발 서버 실행
pnpm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 3️⃣ 테스트 체크리스트

- [ ] 홈페이지가 정상적으로 로드됨
- [ ] 5가지 패턴 버튼이 모두 표시됨
- [ ] 각 패턴 클릭 시 상세 페이지로 이동
- [ ] 불안 아트 이미지 표시
- [ ] "변환하기" 버튼 클릭 시 안정 아트 표시
- [ ] 변환 메시지 및 질문 표시
- [ ] 뒤로가기 버튼 동작 확인
- [ ] 반응형 디자인 확인 (모바일/PC)

## 4️⃣ 실제 아트 이미지로 교체

현재는 placeholder 이미지(`via.placeholder.com`)를 사용하고 있습니다.

### Step 1: 아트 이미지 생성
1. Midjourney 또는 다른 AI 도구로 아트 생성
2. 또는 디자이너에게 의뢰

### Step 2: 이미지 호스팅
- Supabase Storage 사용 권장
- 또는 Cloudinary, AWS S3 등 다른 호스팅 서비스

### Step 3: URL 업데이트
Supabase SQL Editor에서:
```sql
UPDATE patterns_demo 
SET anxiety_image_url = 'https://your-new-image-url.com/anxiety-art-1.png'
WHERE id = 1;

UPDATE patterns_demo 
SET stable_image_url = 'https://your-new-image-url.com/stable-art-1.png'
WHERE id = 1;

-- 각 패턴(id 1-5)마다 반복
```

## 5️⃣ GitHub에 업로드 (선택사항)

```bash
# GitHub에서 새 저장소 생성 후:
git remote add origin https://github.com/your-username/mindmirror.git
git branch -M main
git push -u origin main
```

**주의**: `.env.local` 파일은 절대 GitHub에 업로드하지 마세요!

## 6️⃣ Vercel 배포 (선택사항)

1. [vercel.com](https://vercel.com) 접속
2. GitHub 저장소 연결
3. 환경 변수 추가:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy 버튼 클릭

## 7️⃣ 멘토 시연 준비

### 시연 플로우
1. **홈페이지**: 슬로건 및 5가지 패턴 설명
2. **패턴 선택**: 버튼 클릭 시 즉시 상세 페이지로 이동
3. **불안 아트**: 첫 화면에 표시 (빨간색 테마)
4. **변환 버튼 클릭**: 안정 아트 표시 (파란색 테마)
5. **메시지 & 질문**: 각 패턴의 고유한 인사이트 제공

### 시연 포인트
- ✅ Supabase 연동 (DB에서 데이터 조회)
- ✅ Next.js 15 App Router 활용
- ✅ Server Components 활용
- ✅ 반응형 디자인
- ✅ Spacing-First 정책
- ✅ 타입 안정성 (TypeScript)

## 8️⃣ 문제 해결

### Supabase 연결 안 됨
- `.env.local` 파일이 프로젝트 루트에 있는지 확인
- 환경 변수 값이 정확한지 확인
- Supabase 프로젝트가 활성화되어 있는지 확인

### 이미지가 표시 안 됨
- `next.config.ts`에서 이미지 도메인 설정 확인
- 브라우저 콘솔에서 이미지 로드 에러 확인

### 패턴 데이터가 안 불러와짐
- Supabase SQL Editor에서 테이블 데이터 확인
- 브라우저 DevTools Network 탭에서 API 호출 확인
- `hooks/usePatternData.ts`의 로그 확인

## 9️⃣ 추가 개선 아이디어

### UI/UX
- [ ] 로딩 스피너 추가
- [ ] 에러 메시지 표시
- [ ] 다크모드 지원
- [ ] 애니메이션 효과 (Framer Motion)

### 기능
- [ ] 패턴 검색 기능
- [ ] 즐겨찾기 기능
- [ ] 이전/다음 패턴 네비게이션
- [ ] SNS 공유 기능

### 기술
- [ ] 이미지 최적화 (Next.js Image)
- [ ] SEO 최적화
- [ ] 성능 모니터링
- [ ] 접근성 개선 (ARIA)

---

**질문이 있으면 언제든지 물어보세요!** 💬

