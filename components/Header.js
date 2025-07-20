// components/Header.js
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="w-full h-16 bg-zinc-900 text-white flex items-center justify-between px-6 shadow-md">
      <h2 className="text-lg font-semibold">관리자 대시보드</h2>
      <ThemeToggle />
    </header>
  );
};

export default Header;
