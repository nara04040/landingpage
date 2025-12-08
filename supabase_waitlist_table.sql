-- 웨이팅 리스트 테이블 생성
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 이메일 인덱스 추가 (조회 성능 향상)
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- 생성일자 인덱스 추가 (최신순 조회 성능 향상)
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

