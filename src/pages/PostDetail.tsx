
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, MapPin, ThumbsDown, ThumbsUp } from "lucide-react";
import { posts, users } from "@/data/mockData";
import NavBar from "@/components/NavBar";
import MapComponent from "@/components/MapComponent";
import { cn } from "@/lib/utils";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState(posts.find(p => p.id === id));
  const [author, setAuthor] = useState(users.find(u => post && u.id === post.authorId));
  const [votes, setVotes] = useState({
    upvotes: post?.upvotes || 0,
    downvotes: post?.downvotes || 0,
    userVote: null as "up" | "down" | null
  });
  
  useEffect(() => {
    // In a real app, this would fetch data from an API
    // For now, we'll just use the mock data
    window.scrollTo(0, 0);
    
    if (!post && id) {
      const foundPost = posts.find(p => p.id === id);
      setPost(foundPost);
      
      if (foundPost) {
        const foundAuthor = users.find(u => u.id === foundPost.authorId);
        setAuthor(foundAuthor);
      }
    }
  }, [id, post]);
  
  const handleVote = (type: "up" | "down") => {
    setVotes(prev => {
      // If clicking the same button, remove the vote
      if (prev.userVote === type) {
        return {
          upvotes: type === "up" ? prev.upvotes - 1 : prev.upvotes,
          downvotes: type === "down" ? prev.downvotes - 1 : prev.downvotes,
          userVote: null
        };
      }
      
      // If changing vote from one to another
      if (prev.userVote !== null) {
        return {
          upvotes: type === "up" ? prev.upvotes + 1 : prev.upvotes - 1,
          downvotes: type === "down" ? prev.downvotes + 1 : prev.downvotes - 1,
          userVote: type
        };
      }
      
      // If voting for the first time
      return {
        upvotes: type === "up" ? prev.upvotes + 1 : prev.upvotes,
        downvotes: type === "down" ? prev.downvotes + 1 : prev.downvotes,
        userVote: type
      };
    });
  };
  
  if (!post || !author) {
    return (
      <div className="min-h-screen bg-mintcream">
        <NavBar />
        <div className="max-w-4xl mx-auto p-6 text-center">
          <p>Post not found</p>
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
      
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        <Button 
          onClick={() => window.history.back()}
          variant="ghost" 
          className="mb-4 hover:bg-highlight"
        >
          ← Back
        </Button>
        
        <Card className="overflow-hidden border-palejade/20 mb-6">
          <div className="h-64 md:h-96 relative">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{post.title}</h1>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{post.destination}</span>
              </div>
            </div>
          </div>
          
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Link to={`/profile/${author.id}`} className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{author.name}</p>
                  <p className="text-sm text-gray-500">@{author.username}</p>
                </div>
              </Link>
              
              <div className="flex items-center bg-highlight px-3 py-1 rounded-full">
                <Heart className="h-4 w-4 text-palejade mr-1" />
                <span className="font-medium">{post.rating.toFixed(1)}</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {post.description}
            </p>
            
            <Separator className="my-6 bg-palejade/20" />
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleVote("up")}
                  className="flex items-center space-x-2 group"
                >
                  <ThumbsUp 
                    className={cn(
                      "h-5 w-5 group-hover:text-palejade transition-colors", 
                      votes.userVote === "up" ? "text-palejade" : "text-gray-400"
                    )} 
                  />
                  <span className={cn(
                    "font-medium", 
                    votes.userVote === "up" ? "text-palejade" : "text-gray-500"
                  )}>{votes.upvotes}</span>
                </button>
                
                <button 
                  onClick={() => handleVote("down")}
                  className="flex items-center space-x-2 group"
                >
                  <ThumbsDown 
                    className={cn(
                      "h-5 w-5 group-hover:text-red-400 transition-colors", 
                      votes.userVote === "down" ? "text-red-400" : "text-gray-400"
                    )} 
                  />
                  <span className={cn(
                    "font-medium", 
                    votes.userVote === "down" ? "text-red-400" : "text-gray-500"
                  )}>{votes.downvotes}</span>
                </button>
              </div>
              
              <span className="text-sm text-gray-500">
                Posted on {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
          </CardContent>
        </Card>
        
        <h2 className="text-xl font-semibold mb-4">Location</h2>
        <MapComponent coordinates={post.coordinates} title={post.destination} />
      </main>
    </div>
  );
};

export default PostDetail;
