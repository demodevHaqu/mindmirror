import { Pattern } from "@/lib/types";
import { Heart } from "lucide-react";

interface ArtStableViewProps {
  pattern: Pattern;
}

export function ArtStableView({ pattern }: ArtStableViewProps) {
  return (
    <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-200">
          <Heart className="h-5 w-5 text-blue-700" />
        </div>
        <h2 className="text-xl font-semibold text-blue-800">안정 아트</h2>
      </div>

      {/* 이미지 영역 */}
      <div className="mb-6 rounded-lg overflow-hidden bg-white">
        <img
          src={pattern.stable_image_url}
          alt={`${pattern.name_ko} 안정 아트`}
          className="w-full h-auto"
        />
      </div>

      {/* 메타 정보 */}
      <div className="space-y-3">
        <div>
          <span className="text-sm font-semibold text-blue-700">아트 모드:</span>
          <p className="text-sm text-gray-700">{pattern.stable_art_mode}</p>
        </div>
        <div>
          <span className="text-sm font-semibold text-blue-700">인지 축:</span>
          <p className="text-sm text-gray-700">{pattern.stable_cog_axis}</p>
        </div>
        <div>
          <span className="text-sm font-semibold text-blue-700">핵심 심볼:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {pattern.stable_symbols.map((symbol, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs font-medium"
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

