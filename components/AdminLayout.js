// components/AdminLayout.js
import Sidebar from './Sidebar';
import Header from './Header';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-zinc-900 text-white dark">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 bg-zinc-900 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
