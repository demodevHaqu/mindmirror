import { Pattern } from "@/lib/types";
import { AlertCircle } from "lucide-react";

interface ArtAnxietyViewProps {
  pattern: Pattern;
}

export function ArtAnxietyView({ pattern }: ArtAnxietyViewProps) {
  return (
    <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-red-200">
          <AlertCircle className="h-5 w-5 text-red-700" />
        </div>
        <h2 className="text-xl font-semibold text-red-800">불안 아트</h2>
      </div>

      {/* 이미지 영역 */}
      <div className="mb-6 rounded-lg overflow-hidden bg-white">
        <img
          src={pattern.anxiety_image_url}
          alt={`${pattern.name_ko} 불안 아트`}
          className="w-full h-auto"
        />
      </div>

      {/* 메타 정보 */}
      <div className="space-y-3">
        <div>
          <span className="text-sm font-semibold text-red-700">아트 모드:</span>
          <p className="text-sm text-gray-700">{pattern.anxiety_art_mode}</p>
        </div>
        <div>
          <span className="text-sm font-semibold text-red-700">인지 축:</span>
          <p className="text-sm text-gray-700">{pattern.anxiety_cog_axis}</p>
        </div>
        <div>
          <span className="text-sm font-semibold text-red-700">핵심 심볼:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {pattern.anxiety_symbols.map((symbol, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-red-200 text-red-800 text-xs font-medium"
              >
                {symbol}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

