
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Compass, Home, Search, User } from "lucide-react";

const NavBar = () => {
  const [currentUser] = useState({ id: "1", name: "Emma Wilson", username: "travelemma" });

  return (
    <nav className="sticky top-0 z-10 bg-mintcream border-b border-palejade/30 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Compass className="h-6 w-6 text-palejade" />
          <span className="font-bold text-lg">WanderView</span>
        </Link>
        
        <div className="relative rounded-full bg-highlight flex items-center px-3 py-2 md:w-64">
          <Search className="h-4 w-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search destinations..." 
            className="bg-transparent border-none focus:outline-none text-sm pl-2 w-full"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-highlight">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <Link to={`/profile/${currentUser.id}`}>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-highlight">
              <Avatar className="h-8 w-8 border border-palejade/30">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3" />
                <AvatarFallback>EW</AvatarFallback>
              </Avatar>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
