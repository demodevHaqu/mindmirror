import { PatternSelector } from "@/components/PatternSelector";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12 md:px-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mindmirror
            </h1>
            <p className="text-lg md:text-xl text-gray-700 italic">
              당신의 불안, 다음 단계 지능의 설계도.
            </p>
          </div>
          <PatternSelector />
        </div>
      </div>
    </main>
  );
}

