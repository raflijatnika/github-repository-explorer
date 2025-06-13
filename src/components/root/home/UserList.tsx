
import { cn } from "@/lib/utils";
import React, { useMemo } from "react";
import UserRepositories from "./UserRepositories";
import { Skeleton } from "@/components/ui/skeleton";

interface Data {
  username: string;
  id?: string | number;
}

interface UsersProps {
  data: Data[];
  isLoading?: boolean;
};

const UserList: React.FC<UsersProps> = ({ data, isLoading = false }) => {
  const userList = useMemo(() => {
    if (isLoading) {
      return Array.from({ length: 5 }).map((_, index) => (
        <Skeleton className={cn("h-[70px] w-full !rounded-xl !bg-primary", index !== 0 && 'mt-5')} key={index} />
      ));
    }
    return data.map((user, index) => (
      <div className="flex flex-col gap-1">
        <UserRepositories key={user.id || index} username={user.username} />
      </div>
    ));
    
  }, [data, isLoading]);

  return userList;
};

export default UserList;