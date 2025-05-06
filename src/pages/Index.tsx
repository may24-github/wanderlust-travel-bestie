
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { posts, users } from "@/data/mockData";
import { Compass } from "lucide-react";

const Index = () => {
  const [displayPosts, setDisplayPosts] = useState(posts.slice(0, 3));
  const [loading, setLoading] = useState(false);

  const loadMorePosts = () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayPosts(posts);
      setLoading(false);
    }, 500);
  };

  const findAuthor = (authorId: string) => {
    return users.find(user => user.id === authorId) || users[0];
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <Compass className="h-6 w-6 mr-2 text-palejade" />
            Discover Travel Destinations
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map(post => (
            <PostCard 
              key={post.id} 
              post={post} 
              author={findAuthor(post.authorId)}
            />
          ))}
        </div>
        
        {displayPosts.length < posts.length && (
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={loadMorePosts} 
              className="bg-palejade hover:bg-palejade/80 text-white"
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More Destinations"}
            </Button>
          </div>
        )}
      </main>
      
      <footer className="bg-white py-4 border-t border-palejade/20">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          WanderView - Share your travel experiences &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Index;
