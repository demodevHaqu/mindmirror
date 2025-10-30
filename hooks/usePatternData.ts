import { supabase } from "@/lib/supabase/client";
import { Pattern } from "@/lib/types";

export async function fetchPatternById(id: number): Promise<Pattern | null> {
  console.log(`[usePatternData] 패턴 조회 시작: ID ${id}`);
  
  const { data, error } = await supabase
    .from("patterns_demo")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(`[usePatternData] 패턴 조회 실패:`, error);
    return null;
  }

  console.log(`[usePatternData] 패턴 조회 성공:`, data?.name_ko);
  return data as Pattern;
}

