"use client";

import { useRouter } from "next/navigation";
import { Brain } from "lucide-react";

const patterns = [
  { id: 1, name: "경계 소멸과 생존 위협" },
  { id: 2, name: "시간 압박과 완벽주의" },
  { id: 3, name: "검증 실패와 배제 현상" },
  { id: 4, name: "제어권 상실과 무력감" },
  { id: 5, name: "단절된 공감과 낯설음" },
];

export function PatternSelector() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {patterns.map((pattern) => (
        <button
          key={pattern.id}
          onClick={() => router.push(`/pattern/${pattern.id}`)}
          className="group relative p-8 rounded-xl bg-white hover:bg-red-50 border-2 border-gray-200 hover:border-red-300 transition-all duration-200 hover:shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors">
              <Brain className="h-6 w-6 text-red-700" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-800 transition-colors">
                {pattern.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                패턴 #{pattern.id}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

