import { MessageCircle } from "lucide-react";

interface InventorQuestionsProps {
  questions: string[];
}

export function InventorQuestions({ questions }: InventorQuestionsProps) {
  return (
    <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gray-100">
          <MessageCircle className="h-6 w-6 text-gray-700" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">사유 확장형 질문</h3>
      </div>

      <div className="space-y-4">
        {questions.map((question, idx) => (
          <div
            key={idx}
            className="pl-6 border-l-4 border-purple-500 py-3 bg-purple-50 rounded-r-lg"
          >
            <p className="text-base text-gray-800">{question}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

