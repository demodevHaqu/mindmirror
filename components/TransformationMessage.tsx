import { Sparkles } from "lucide-react";

interface TransformationMessageProps {
  message: string;
}

export function TransformationMessage({ message }: TransformationMessageProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-300">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-blue-200">
          <Sparkles className="h-6 w-6 text-blue-700" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            변환 메시지
          </h3>
          <p className="text-base text-gray-800 leading-relaxed italic">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

