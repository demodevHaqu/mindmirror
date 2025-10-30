-- Mindmirror MVP1 - patterns_demo 테이블 생성

-- 테이블 생성
CREATE TABLE IF NOT EXISTS patterns_demo (
  id INTEGER PRIMARY KEY,
  name_ko TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_ko TEXT NOT NULL,
  trigger_question_ko TEXT,
  anxiety_image_url TEXT NOT NULL,
  anxiety_art_mode TEXT,
  anxiety_cog_axis TEXT,
  anxiety_symbols TEXT[],
  stable_image_url TEXT NOT NULL,
  stable_art_mode TEXT,
  stable_cog_axis TEXT,
  stable_symbols TEXT[],
  transformation_message_ko TEXT,
  inventor_questions_ko TEXT[]
);

-- RLS (Row Level Security) 정책 설정
ALTER TABLE patterns_demo ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 조회 가능하도록 설정
CREATE POLICY "Allow public read access" ON patterns_demo
  FOR SELECT
  USING (true);

-- 샘플 데이터 삽입 (5가지 패턴)
INSERT INTO patterns_demo (
  id, name_ko, name_en, description_ko, trigger_question_ko,
  anxiety_image_url, anxiety_art_mode, anxiety_cog_axis, anxiety_symbols,
  stable_image_url, stable_art_mode, stable_cog_axis, stable_symbols,
  transformation_message_ko, inventor_questions_ko
) VALUES
(
  1,
  '경계 소멸과 생존 위협',
  'Boundary Dissolution and Survival Threat',
  '개인의 경계가 사라지고 외부 위협이 생존을 위협하는 인지 패턴으로, 자아의 경계 인식 능력이 약화되어 외부 자극이 직접적으로 침투하는 경험을 나타냅니다.',
  '당신의 경계가 흔들리거나 사라지는 순간은 언제인가요?',
  'https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Anxiety+Art+1',
  'Symbolic-Mythic',
  'boundary_reassertion',
  ARRAY['torn tape', 'cracked shield'],
  'https://via.placeholder.com/600x400/4ECDC4/FFFFFF?text=Stable+Art+1',
  'Abstract-Systems',
  'order_from_noise',
  ARRAY['reinforced shield', 'quiet core'],
  '경계가 흔들려도 그 중심에서 새로운 질서가 탄생합니다. 불안의 파편들을 모아 의미 있는 구조로 재구성하는 힘이 있습니다.',
  ARRAY[
    '이 경계 침투는 어떤 본질적인 질문을 내게 던지고 있는가?',
    '사라진 경계 너머에 숨겨진 새로운 가능성은 무엇인가?',
    '이 불안의 패턴이 나를 어떤 미래로 인도하려 하는가?'
  ]
),
(
  2,
  '시간 압박과 완벽주의',
  'Time Pressure and Perfectionism',
  '시간의 압박감과 완벽주의가 결합되어 무한한 업무 부담과 자가비판의 굴레에 빠지는 인지 패턴입니다.',
  '시간이 부족하다고 느낄 때 당신의 몸과 마음은 어떻게 반응하나요?',
  'https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Anxiety+Art+2',
  'Expressionistic-Fragmentary',
  'temporal_coherence',
  ARRAY['broken clock', 'collapsed pile'],
  'https://via.placeholder.com/600x400/4ECDC4/FFFFFF?text=Stable+Art+2',
  'Fractal-Harmony',
  'rhythmic_flow',
  ARRAY['spiral time', 'balanced flow'],
  '시간의 압박은 경주가 아니라 춤입니다. 완벽은 목표가 아니라 과정의 아름다움입니다.',
  ARRAY[
    '완벽해지려는 욕구 뒤에 숨겨진 진정한 목표는 무엇인가?',
    '이 시간 압박이 가리키는 더 깊은 삶의 리듬은 무엇인가?',
    '완벽의 기준을 내가 직접 결정한다면 어떨까?'
  ]
),
(
  3,
  '검증 실패와 배제 현상',
  'Validation Failure and Exclusion',
  '타인의 인정과 검증을 필요로 하지만 지속적으로 배제되는 경험으로 인한 사회적 고립감과 자존감 저하 패턴입니다.',
  '당신이 배제되거나 무시당한다고 느낄 때 무엇이 가장 아픈가요?',
  'https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Anxiety+Art+3',
  'Symbolic-Narrative',
  'belonging_seeking',
  ARRAY['empty space', 'closed doors'],
  'https://via.placeholder.com/600x400/4ECDC4/FFFFFF?text=Stable+Art+3',
  'Geometric-Universal',
  'inherent_value',
  ARRAY['open circle', 'radiant core'],
  '검증이 필요 없다는 것이 아니라, 내 안에 이미 충분한 빛이 있다는 것을 인식하는 순간입니다.',
  ARRAY[
    '내 고유의 가치를 만드는 것은 무엇인가?',
    '외부 검증 없이 나를 지지하는 힘의 원천은 무엇인가?',
    '나를 배제하는 시스템이 놓치고 있는 것은 무엇인가?'
  ]
),
(
  4,
  '제어권 상실과 무력감',
  'Loss of Control and Helplessness',
  '상황에 대한 통제력을 잃고 무기력감에 빠지는 인지 패턴으로, 행동 능력이 마비되어 수동적인 상태에 머무는 경험입니다.',
  '통제할 수 없다고 느끼는 상황에서 당신은 어떻게 반응하나요?',
  'https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Anxiety+Art+4',
  'Abstract-Chaotic',
  'agency_reclamation',
  ARRAY['swirling void', 'locked hands'],
  'https://via.placeholder.com/600x400/4ECDC4/FFFFFF?text=Stable+Art+4',
  'Architectural-Support',
  'foundational_agency',
  ARRAY['supporting beams', 'steady ground'],
  '통제는 모든 것을 잡는 것이 아니라, 중요하게 선택하는 것입니다. 무력감의 깊은 곳에서 새로운 행동의 가능성이 자라납니다.',
  ARRAY[
    '내가 진정으로 영향력을 발휘할 수 있는 영역은 어디인가?',
    '이 무력감이 가리키는 더 큰 시스템 변화는 무엇인가?',
    '작은 선택이라도 그 의미를 인정한다면 어떻게 변할까?'
  ]
),
(
  5,
  '단절된 공감과 낯설음',
  'Disconnected Empathy and Alienation',
  '타인과의 공감 연결이 단절되어 사회적으로 고립되고 낯설게 느껴지는 인지 패턴입니다.',
  '당신이 세상과 단절되어 있다고 느낄 때, 그 느낌을 어떻게 표현하시나요?',
  'https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Anxiety+Art+5',
  'Impressionistic-Emotional',
  'connection_seeking',
  ARRAY['fading bridge', 'isolated figure'],
  'https://via.placeholder.com/600x400/4ECDC4/FFFFFF?text=Stable+Art+5',
  'Minimalist-Meditative',
  'presence_connection',
  ARRAY['gentle touch', 'shared space'],
  '공감의 연결은 멀리 떨어져 있어도 존재합니다. 낯설음은 새로운 이해의 시작점입니다.',
  ARRAY[
    '단절 뒤에 숨겨진 더 깊은 연결의 형태는 무엇인가?',
    '내가 진정으로 공감받기 위해 필요한 것은 무엇인가?',
    '이 고립감이 가르쳐주려는 새로운 공감의 방식은 무엇인가?'
  ]
);

-- 데이터 확인 쿼리
SELECT * FROM patterns_demo ORDER BY id;

