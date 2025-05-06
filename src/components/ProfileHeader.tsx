
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/data/mockData";

interface ProfileHeaderProps {
  user: User;
  postCount: number;
}

const ProfileHeader = ({ user, postCount }: ProfileHeaderProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-palejade/20 mb-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Avatar className="h-24 w-24 border-2 border-palejade">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500 mb-2">@{user.username}</p>
          
          <p className="text-gray-700 mb-4">{user.bio}</p>
          
          <div className="flex justify-center md:justify-start items-center space-x-4 text-sm">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-semibold">{postCount}</span>
              <span className="text-gray-500">Posts</span>
            </div>
            <div className="h-10 border-l border-gray-200"></div>
            <div className="flex flex-col items-center md:items-start">
              <span className="font-semibold">127</span>
              <span className="text-gray-500">Upvotes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
