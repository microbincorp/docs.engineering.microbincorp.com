
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const AppHeader = () => {
  return (
    <header className="border-b bg-white dark:bg-slate-900 sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-semibold text-2xl text-blue-800 dark:text-blue-400">
              MicroBin<span className="text-teal-600 dark:text-teal-400">Docs</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Hardware</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <Link to="/hardware/sbc" className={navigationMenuTriggerStyle()}>
                      Single Board Computers
                    </Link>
                    <Link to="/hardware/som" className={navigationMenuTriggerStyle()}>
                      System on Modules
                    </Link>
                    <Link to="/hardware/io" className={navigationMenuTriggerStyle()}>
                      I/O Boards
                    </Link>
                    <Link to="/hardware/devkit" className={navigationMenuTriggerStyle()}>
                      Development Kits
                    </Link>
                    <Link to="/hardware/ibc" className={navigationMenuTriggerStyle()}>
                      Infinite Board Computers
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>IoT Dashboard</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <Link to="/iot-dashboard/getting-started" className={navigationMenuTriggerStyle()}>
                      Getting Started
                    </Link>
                    <Link to="/iot-dashboard/api" className={navigationMenuTriggerStyle()}>
                      API Documentation
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>PlatformQ</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <Link to="/platformq/account-creation" className={navigationMenuTriggerStyle()}>
                      Account Creation
                    </Link>
                    <Link to="/platformq/user-guide" className={navigationMenuTriggerStyle()}>
                      User Guide
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/manage-docs" className={navigationMenuTriggerStyle()}>
                  Contribute
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/search">
              Search
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://microbin.io" target="_blank" rel="noreferrer">
              MicroBin Home
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
