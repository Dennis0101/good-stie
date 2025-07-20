// pages/admin/dashboard.js
import AdminLayout from '../../components/AdminLayout';
import RealTimeChart from '../../components/RealTimeChart';

const Dashboard = () => {
  return (
    <AdminLayout>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-zinc-800 p-6 rounded-lg shadow text-center">🧾 오늘 주문: <strong>102건</strong></div>
        <div className="bg-zinc-800 p-6 rounded-lg shadow text-center">💸 수익: <strong>₩1,020,000</strong></div>
        <div className="bg-zinc-800 p-6 rounded-lg shadow text-center">📈 유저 증가: <strong>+24명</strong></div>
        <div className="bg-zinc-800 p-6 rounded-lg shadow text-center">📦 상품 수: <strong>87개</strong></div>
      </section>

      <section className="bg-zinc-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">실시간 트래픽 차트</h3>
        {/* 여기에 차트 컴포넌트 들어갈 예정 */}
        <div className="h-64 bg-zinc-700 rounded-lg flex items-center justify-center text-gray-400">
          차트 준비중...
        </div>
      </section>
    </AdminLayout>
  );
};

export default Dashboard;
