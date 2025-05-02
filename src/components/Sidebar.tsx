
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarItem {
  title: string;
  link?: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
}

interface SidebarProps {
  items: SidebarItem[];
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, className }) => {
  return (
    <div className={cn("w-full md:w-64 lg:w-72 flex-shrink-0", className)}>
      <div className="h-full overflow-y-auto py-6 px-3 bg-slate-50 dark:bg-slate-900 border-r">
        <nav className="space-y-1">
          {items.map((item, i) => <SidebarNavItem key={i} item={item} depth={0} />)}
        </nav>
      </div>
    </div>
  );
};

const SidebarNavItem = ({ 
  item, 
  depth = 0 
}: { 
  item: SidebarItem;
  depth: number;
}) => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const isActive = item.link && location.pathname === item.link;
  const hasChildren = !!item.children?.length;
  
  const toggle = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div>
      {item.link ? (
        <Link
          to={item.link}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium",
            isActive 
              ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100" 
              : "text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800",
            depth > 0 && "ml-4"
          )}
        >
          {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
          <span className="flex-grow">{item.title}</span>
          {hasChildren && (
            <button onClick={toggle} className="flex-shrink-0">
              {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>
          )}
        </Link>
      ) : (
        <button
          onClick={toggle}
          className={cn(
            "flex w-full items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800",
            depth > 0 && "ml-4"
          )}
        >
          {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
          <span className="flex-grow text-left">{item.title}</span>
          {hasChildren && (
            <span className="flex-shrink-0">
              {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </span>
          )}
        </button>
      )}
      
      {hasChildren && expanded && (
        <div className="mt-1 space-y-1">
          {item.children?.map((child, i) => (
            <SidebarNavItem key={i} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
