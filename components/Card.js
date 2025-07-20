export default function Card({ title, children }) {
  return (
    <div className="bg-[#1f2633] rounded-xl shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <button className="text-sm text-blue-400 hover:underline">더보기</button>
      </div>
      <div className="text-sm text-gray-300 space-y-1">
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-md p-5 transition-transform hover:scale-105 duration-300">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
     </div>
        {children || '콘텐츠를 준비 중입니다.'}
      </div>
    </div>
  )
}
