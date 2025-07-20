import Link from "next/link"

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-sm w-full border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">👤 회원가입</h2>

        <input
          type="text"
          placeholder="아이디"
          className="w-full px-4 py-2 mb-4 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input
          type="email"
          placeholder="이메일"
          className="w-full px-4 py-2 mb-4 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input
          type="password"
          placeholder="비밀번호"
          className="w-full px-4 py-2 mb-6 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded text-white font-semibold">
          회원가입
        </button>

        <div className="text-sm text-center mt-4 text-gray-300">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="text-cyan-400 hover:underline">
            로그인
          </Link>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-xs text-gray-400 hover:text-white underline">
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}
