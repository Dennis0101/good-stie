import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="bg-black/60 backdrop-blur p-8 rounded-lg max-w-md w-full text-white">
        <h1 className="text-center text-3xl font-bold mb-6 text-pink-400">박찬벽</h1>
        <h2 className="text-xl font-semibold mb-4 text-center">로그인</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="아이디 (6자 이상)"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="비밀번호 입력"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 transition py-2 rounded text-white font-semibold"
          >
            로그인
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          아직 계정이 없으신가요?{' '}
          <Link href="/register" className="text-pink-400 underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  )
}
