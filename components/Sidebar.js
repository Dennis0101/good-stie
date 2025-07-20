// components/Sidebar.js
import { useState } from 'react';
import { FiHome, FiSettings, FiUser, FiMenu } from 'react-icons/fi';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menus = [
    { title: '대시보드', icon: <FiHome />, link: '/admin/dashboard' },
    { title: '유저관리', icon: <FiUser />, link: '/admin/users' },
    { title: '설정', icon: <FiSettings />, link: '/admin/settings' },
  ];

  return (
    <aside className={`h-screen bg-zinc-800 text-white p-4 transition-all ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex justify-between items-center mb-8">
        <h1 className={`text-xl font-bold ${collapsed && 'hidden'}`}>⚙️ Admin</h1>
        <button onClick={() => setCollapsed(!collapsed)} className="text-gray-400">
          <FiMenu />
        </button>
      </div>
      <ul>
        {menus.map((menu, idx) => (
          <li key={idx} className="mb-4">
            <a href={menu.link} className="flex items-center gap-4 text-sm hover:text-primary-neon transition">
              <span className="text-lg">{menu.icon}</span>
              {!collapsed && <span>{menu.title}</span>}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
