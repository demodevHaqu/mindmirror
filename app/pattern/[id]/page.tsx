import { notFound } from "next/navigation";
import { fetchPatternById } from "@/hooks/usePatternData";
import { PatternResult } from "@/components/PatternResult";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PatternPage({ params }: PageProps) {
  const { id } = await params;
  const patternId = parseInt(id);

  if (isNaN(patternId)) {
    notFound();
  }

  const pattern = await fetchPatternById(patternId);

  if (!pattern) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12 md:px-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* 뒤로가기 버튼 */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">패턴 선택으로 돌아가기</span>
          </Link>

          {/* 패턴 상세 정보 */}
          <PatternResult pattern={pattern} />
        </div>
      </div>
    </main>
  );
}

