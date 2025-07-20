import { FiUser, FiLogIn, FiCreditCard, FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] text-gray-200 p-5 flex flex-col justify-between min-h-screen shadow-lg border-r border-gray-700">
      <div>
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 mb-2 rounded-full shadow" />
          <h2 className="text-lg font-semibold">비회원님</h2>
          <p className="text-sm text-gray-400">보유금액 없음 ⭮</p>
          <Link href="/login">
            <button className="mt-4 bg-gradient-to-r from-teal-500 to-cyan-500 w-full py-2 rounded-md font-medium hover:opacity-90 transition">로그인</button>
          </Link>
          <div className="flex gap-2 mt-3 w-full">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 rounded">구매내역</button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 rounded">충전내역</button>
          </div>
        </div>

        <nav className="space-y-2 text-sm">
          {[
            '서든어택',
            '오버워치',
            '배틀그라운드',
            '발로란트',
            '리그오브레전드',
            '에이펙스',
            '하드스푸퍼',
            '팀뷰기'
          ].map((game, idx) => (
            <button
              key={idx}
              className="w-full flex items-center justify-between px-4 py-2 bg-[#1f2937] hover:bg-[#374151] rounded-md transition"
            >
              <span>{game}</span>
              <FiChevronRight />
            </button>
          ))}
        </nav>
      </div>

      <div className="text-xs text-center text-gray-500 mt-8">
        &copy; 2025 GameSite. All rights reserved.
      </div>
    </aside>
  )
}
