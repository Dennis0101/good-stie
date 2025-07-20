export default function Header() {
  return (
    <div className="p-4 bg-[#1f2633] rounded shadow">
      <div className="bg-blue-800 text-white text-sm p-3 rounded mb-4">
        📢 <strong>긴급공지</strong> – 서든핵 배그핵 발로란트핵 전문 핵블리 사이트에 오신 걸 환영합니다.
      </div>

      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-lg text-center text-white">
        <h2 className="text-2xl font-bold text-blue-300 mb-2">구글광고를 통해 오신분들은 꼭 북마크를 해두세요!</h2>
        <p className="text-sm text-gray-400">
          크롬 브라우저 실행 후 Ctrl + D 북마크 설정하면 <br />
          쉽게 빠르게 사이트 접속이 가능합니다.
        </p>

        <div className="mt-4 flex justify-center gap-6 text-sm">
          <ul className="text-left space-y-1">
            <li>✔ 텔레그램 공지방 미참여 시 불이익 책임지지 않습니다.</li>
            <li>✔ 사이트 좌측 텔레그램 공지방 클릭!</li>
            <li>✔ 모든제품은 구매 이후 교환 및 환불 불가능합니다.</li>
            <li>✔ 사용법 미숙/PC 성능 문제는 책임지지 않습니다.</li>
          </ul>
          <ul className="text-left space-y-1">
            <li>① 사이트 좌측 충전하기 클릭</li>
            <li>② 입금자명과 금액 정확히 입력</li>
            <li>③ 입금 후 1분 안으로 자동충전 처리됩니다.</li>
            <li className="text-blue-400 mt-2">📩 텔레그램 고객센터: @vely08</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
