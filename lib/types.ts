export interface Pattern {
  id: number;
  name_ko: string;
  name_en: string;
  description_ko: string;
  trigger_question_ko: string;
  anxiety_image_url: string;
  anxiety_art_mode: string;
  anxiety_cog_axis: string;
  anxiety_symbols: string[];
  stable_image_url: string;
  stable_art_mode: string;
  stable_cog_axis: string;
  stable_symbols: string[];
  transformation_message_ko: string;
  inventor_questions_ko: string[];
}

