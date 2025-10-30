"use client";

import { useState } from "react";
import { Pattern } from "@/lib/types";
import { ArtAnxietyView } from "./ArtAnxietyView";
import { ArtStableView } from "./ArtStableView";
import { TransformationMessage } from "./TransformationMessage";
import { InventorQuestions } from "./InventorQuestions";

interface PatternResultProps {
  pattern: Pattern;
}

export function PatternResult({ pattern }: PatternResultProps) {
  const [showTransform, setShowTransform] = useState(false);

  return (
    <div className="space-y-12">
      {/* 패턴 정보 */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {pattern.name_ko}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {pattern.description_ko}
        </p>
      </div>

      {/* 불안/안정 아트 영역 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ArtAnxietyView pattern={pattern} />
        {showTransform ? (
          <ArtStableView pattern={pattern} />
        ) : (
          <div className="flex items-center justify-center bg-white rounded-xl border-2 border-dashed border-gray-300">
            <button
              onClick={() => setShowTransform(true)}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              변환하기
            </button>
          </div>
        )}
      </div>

      {/* 변환 메시지 & 질문 */}
      {showTransform && (
        <div className="space-y-8">
          <TransformationMessage message={pattern.transformation_message_ko} />
          <InventorQuestions questions={pattern.inventor_questions_ko} />
        </div>
      )}
    </div>
  );
}

