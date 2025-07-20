export default function Card({ title, children }) {
  return (
    <div className="bg-[#1f2633] rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <button className="text-sm text-blue-400 hover:underline">더보기</button>
      </div>
      <div className="text-sm text-gray-300 space-y-1">
        {children || '콘텐츠를 준비 중입니다.'}
      </div>
    </div>
  )
}
