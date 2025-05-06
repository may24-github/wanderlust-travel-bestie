
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MapPin, MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import { Post, User } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  author: User;
}

const PostCard = ({ post, author }: PostCardProps) => {
  const [votes, setVotes] = useState({
    upvotes: post.upvotes,
    downvotes: post.downvotes,
    userVote: null as "up" | "down" | null
  });

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

  return (
    <Card className="overflow-hidden border-palejade/20 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      <Link to={`/post/${post.id}`}>
        <div className="relative h-56 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="font-semibold text-white text-lg">{post.title}</h3>
            <div className="flex items-center space-x-1">
              <MapPin className="h-3.5 w-3.5 text-white/90" />
              <p className="text-sm text-white/90">{post.destination}</p>
            </div>
          </div>
        </div>
      </Link>

      <CardContent className="p-3 pt-4">
        <div className="flex items-center justify-between mb-3">
          <Link to={`/profile/${author.id}`} className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">@{author.username}</span>
          </Link>
          <div className="flex items-center">
            <Heart className="h-4 w-4 text-palejade mr-1" />
            <span className="text-xs">{post.rating.toFixed(1)}</span>
          </div>
        </div>

        <p className="text-sm line-clamp-2 text-gray-600 mb-3">
          {post.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex space-x-4">
            <button 
              onClick={(e) => {
                e.preventDefault();
                handleVote("up");
              }}
              className="flex items-center space-x-1 group"
            >
              <ThumbsUp 
                className={cn(
                  "h-4 w-4 group-hover:text-palejade transition-colors", 
                  votes.userVote === "up" ? "text-palejade" : "text-gray-400"
                )} 
              />
              <span className="text-xs">{votes.upvotes}</span>
            </button>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                handleVote("down");
              }}
              className="flex items-center space-x-1 group"
            >
              <ThumbsDown 
                className={cn(
                  "h-4 w-4 group-hover:text-red-400 transition-colors", 
                  votes.userVote === "down" ? "text-red-400" : "text-gray-400"
                )} 
              />
              <span className="text-xs">{votes.downvotes}</span>
            </button>
            
            <Link to={`/post/${post.id}`} className="flex items-center space-x-1 group">
              <MessageSquare className="h-4 w-4 text-gray-400 group-hover:text-palejade transition-colors" />
              <span className="text-xs">Comment</span>
            </Link>
          </div>
          
          <span className="text-xs">{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
