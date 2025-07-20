import Link from 'next/link'

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-purple-900">
      <div className="bg-glass backdrop-blur-md p-10 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">회원가입</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="아이디 (6자 이상)"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="비밀번호 (6자 이상)"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="text-sm text-gray-300 text-center">[인증] 사람입니다</div>

          <button
            type="submit"
            className="w-full py-2 mt-2 rounded bg-primary hover:bg-pink-600 text-white font-bold"
          >
            회원가입
          </button>

          <Link
            href="/login"
            className="block text-center mt-2 text-sm text-gray-400 hover:text-primary"
          >
            로그인
          </Link>

          <Link
            href="/admin/dashboard"
            className="block text-center mt-4 text-sm text-gray-300 hover:text-primary underline"
          >
            메인으로 이동
          </Link>
        </form>
      </div>
    </div>
  )
}
