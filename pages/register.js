import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="bg-black/60 backdrop-blur p-8 rounded-lg max-w-md w-full text-white">
        <h1 className="text-center text-3xl font-bold mb-6 text-pink-400">박찬벽</h1>
        <h2 className="text-xl font-semibold mb-4 text-center">회원가입</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="아이디 (6자 이상)"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="비밀번호 (6자 이상)"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
            required
          />

          {/* 캡차 영역 - 실제로 연동하려면 라이브러리 설치 */}
          <div className="bg-gray-900 p-4 rounded text-center">
            <input type="checkbox" className="mr-2" required /> 사람입니다 (캡차)
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 transition py-2 rounded text-white font-semibold"
          >
            회원가입
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          이미 계정이 있으신가요?{' '}
          <Link href="/login" className="text-pink-400 underline">
            로그인
          </Link>
        </p>
      </div>
    </div>
  )
}
