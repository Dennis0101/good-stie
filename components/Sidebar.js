import Link from 'next/link'
import { FiUser, FiLogIn, FiCreditCard } from 'react-icons/fi'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#181c27] text-white p-4 flex flex-col justify-between min-h-screen">
      <div>
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 mb-2" />
          <h2 className="text-xl font-bold">비회원님</h2>
          <p className="text-sm text-gray-400">보유금액 없음 ⭮</p>

          {/* ✅ 로그인 버튼 링크 */}
          <Link href="/login" className="mt-2 bg-teal-500 w-full py-2 rounded text-center">
            로그인
          </Link>

          <div className="flex justify-between w-full mt-2 gap-2">
            <button className="flex-1 bg-blue-500 py-1 rounded text-sm">구매내역</button>
            <button className="flex-1 bg-blue-500 py-1 rounded text-sm">충전내역</button>
          </div>
        </div>

        <ul className="space-y-2 text-sm">
          {[
            '서든어택',
            '오버워치',
            '배틀그라운드',
            '발로란트',
            '리그오브레전드',
            '에이펙스',
            '하드스푸퍼',
            '팀뷰기',
          ].map((item) => (
            <li key={item} className="px-2 py-2 hover:bg-[#2a2f3c] rounded">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
