import { cn } from "@/lib/utils";
import { useGithub } from "@/api/github";
import { Loader2, Star } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { setRepos } from "@/redux/actions/github.actions";
import React, { useState, useMemo, useCallback } from "react";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";

// Interface & Type
import type { AppDispatch } from "@/redux/store";
import type { RootState } from "@/redux/reducers";
import type { Repository } from "@/interfaces/github.interfaces";

interface UserProps {
  username?: string;
}

const UserRepositories: React.FC<UserProps> = (props) => {
  const { username = '' } = props;
  const { getUsersRepos } = useGithub();
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const userRepos = useSelector((state: RootState) => state.githubReducer.repos);

  /**
   * @description handle fetch user repository
   */
  const fetchUserRepos = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getUsersRepos(username, 0);
      const responseData = response.data;
      dispatch(setRepos({ key: username, value: responseData }));
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, getUsersRepos, username]);

  /**
   * @description handle click open repository by username
   */
  const openRepository = useCallback(() => {
    if (!userRepos[username]) fetchUserRepos();
  }, [fetchUserRepos, userRepos, username]);

  const userRepoItems = useMemo(() => {
    if (userRepos[username]) {
      const repos = userRepos[username];
      if (repos.length > 0) {
        return (
          <ul className="flex flex-col gap-2">
            {repos.map(
              ({ name, description, stargazers_count }: Repository, index: number) => (
                <div className="w-full bg-white border border-primary p-4 rounded-xl flex justify-between min-h-[100px]" key={index}>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-lg">{name}</h2>
                    {description && (
                      <p className="text-base">{description }</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Star className="text-yellow-500" />
                    <p className="font-semibold text-yellow-500">{stargazers_count}</p>
                  </div>
                </div>
              )
            )}
          </ul>
        );
      } 

      return <p className="text-lg text-red-500 w-full flex items-center justify-center">No Repos in this user</p>;
      
    }
    return null;
  }, [userRepos, username]);

  return (
    <Accordion type="single" collapsible className="w-full bg-transparent" onClick={openRepository}>
      <AccordionItem value={username} className="w-full text-left">
        <AccordionTrigger className="w-full text-left bg-white p-5 rounded-xl border border-primary text-xl font-semibold">{username}</AccordionTrigger>
        <AccordionContent className={cn("pl-10 py-5 flex flex-col !gap-5", (isLoading || userRepos?.[username]?.length <= 0) && '!pl-0')}>
        {isLoading ? (
          <div className="!w-full h-[100px] flex items-center justify-center">
            <Loader2 className="animate-spin text-primary" />
          </div>
        ) : userRepoItems}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default UserRepositories;
