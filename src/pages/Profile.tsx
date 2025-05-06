
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { users, posts } from "@/data/mockData";
import NavBar from "@/components/NavBar";
import PostCard from "@/components/PostCard";
import ProfileHeader from "@/components/ProfileHeader";

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState(users.find(u => u.id === id));
  const [userPosts, setUserPosts] = useState(posts.filter(p => p.authorId === id));
  
  useEffect(() => {
    // In a real app, this would fetch data from an API
    window.scrollTo(0, 0);
    
    if (!user && id) {
      const foundUser = users.find(u => u.id === id);
      setUser(foundUser);
    }
    
    setUserPosts(posts.filter(p => p.authorId === id));
  }, [id, user]);
  
  if (!user) {
    return (
      <div className="min-h-screen bg-mintcream">
        <NavBar />
        <div className="max-w-4xl mx-auto p-6 text-center">
          <p>User not found</p>
          <Link to="/" className="text-palejade hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mintcream">
      <NavBar />
      
      <main className="max-w-6xl mx-auto p-4 md:p-6">
        <Button 
          onClick={() => window.history.back()}
          variant="ghost" 
          className="mb-4 hover:bg-highlight"
        >
          ← Back
        </Button>
        
        <ProfileHeader user={user} postCount={userPosts.length} />
        
        <h2 className="text-xl font-semibold mb-4">{user.name}'s Travel Posts</h2>
        
        {userPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userPosts.map(post => (
              <PostCard 
                key={post.id} 
                post={post} 
                author={user}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-palejade/20">
            <p className="text-gray-500">This user hasn't posted any travel experiences yet.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Profile;
