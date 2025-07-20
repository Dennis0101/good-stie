// pages/index.js
import Sidebar from '/components/Sidebar'
import Header from '/components/Header'
import Card from '/components/Card'

export default function Home() {
  return (
    <div className="flex bg-[#0e1016] min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 p-6 space-y-4">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 왼쪽 컬럼 */}
          <div className="space-y-4 md:col-span-2">
            <Card title="공지사항" />
            <Card title="구매후기" />
            <Card title="QnA" />
          </div>

          {/* 오른쪽 컬럼 */}
          <div className="space-y-4">
            <Card title="인기 순위" />
            <Card title="블로그 소식" />
            <Card title="실시간 구매로그" />
          </div>
        </div>
      </div>
    </div>
  )
}
