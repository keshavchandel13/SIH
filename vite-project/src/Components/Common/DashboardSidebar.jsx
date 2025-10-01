import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DashboardSidebar({ isOpen, onClose, mainNav, bottomNav }) {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userName = user.name || "User";
  const userRole = user.role || "Role";

  return (
    <div 
      className={`fixed top-0 pb-safe-bottom left-0 flex flex-col w-64 h-screen bg-gradient-to-b from-emerald-700 via-emerald-600 to-emerald-500 text-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <button 
        onClick={onClose} 
        className="absolute top-3 right-3 text-emerald-200 hover:text-white"
      >
        <FaTimes className="w-6 h-6" />
      </button>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto mt-10">
        <ul className="space-y-2">
          {mainNav.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300
                    ${item.current 
                      ? "bg-white/20 border-l-4 border-yellow-300 text-yellow-200 shadow-md" 
                      : "text-white/80 hover:bg-white/10 hover:text-yellow-100"
                    }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer / Profile */}
      <div className="p-4 border-t border-emerald-500/40">
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/150?u=${userName}`}
            alt={userName}
            className="w-10 h-10 rounded-full border-2 border-yellow-300"
          />
          <div>
            <p className="text-sm font-semibold">{userName}</p>
            <p className="text-xs text-white/70">{userRole}</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-0 mb-5 pl-1.5 border-emerald-500/40">
        <div className="space-y-1">
          {bottomNav.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="w-full flex items-center justify-start h-10 px-3 rounded-md hover:bg-white/10 transition text-white/80 hover:text-yellow-100"
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

