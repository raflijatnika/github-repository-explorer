import Joi from 'joi';
import { Loader2 } from "lucide-react";
import { useGithub } from "@/api/github";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { joiResolver } from '@hookform/resolvers/joi';
import { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "@/components/root/home/UserList";
import { setUsers, clearAll } from "@/redux/actions/github.actions";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";

// Interface & Type
import type { Dispatch } from "redux";
import type { RootState } from "@/redux/reducers";
import type { ReduxAction } from "@/interfaces/redux.interfaces";
import type { UserRepositoryForm, UsersTypes } from "@/interfaces/github.interfaces";

export default function Home() {
  // Hooks
  const dispatch: Dispatch<ReduxAction> = useDispatch();
  const { getUsersSearch } = useGithub();
  const users = useSelector((state: RootState) => state.githubReducer.users);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submittedUsername, setSubmittedUsername] = useState<string>("");

  // Form Validation
  const schema = Joi.object({
    username: Joi.string().max(65).label('Username')
  });

  // Form Handler
  const form = useForm<UserRepositoryForm>({
    resolver: joiResolver(schema),
    defaultValues: {
      username: '',
    },
  });

  /**
   * @description handle submit form
   */
  const onSubmit = useCallback(
    async (formData: UserRepositoryForm) => {
      setIsLoading(true);
      try {
        const { username } = formData;

        const response = await getUsersSearch(username, 5);
        const responseData = response.data;
        dispatch(setUsers(responseData.items));
        setSubmittedUsername(username);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, getUsersSearch]
  );

  /**
   * @description memorize data from api
   */
  const data = useMemo(() => users.map((user: UsersTypes) => ({
    id: user.id,
    username: user.login,
  })), [users]);

  /**
   * @description handle clear input
   * 
   * @return {any}
   */
  const onClearInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      dispatch(clearAll());
      setSubmittedUsername("");
    }
  }, [dispatch])

  return (
    <main className="h-screen w-screen">
      <div className="flex justify-center flex-col items-center gap-10 p-5 lg:p-16">
        <h1 className="text-primary font-bold text-2xl lg:text-5xl">Github Repository Explorer</h1>
        <section className="flex flex-col w-full lg:min-w-xl max-w-xl gap-10">
          <Form {...form}>
            <form className="flex flex-col gap-3" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem className='grid items-center gap-1 col-span-2'>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter username"
                        className="w-full h-[45px] bg-white border border-primary focus:!border-primary rounded-md p-5"
                        type="search"
                        disabled={isLoading}
                        onChange={(e) => {
                          field.onChange(e);
                          onClearInput(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant='default' className="bg-primary" size='sm' type="submit">
                {isLoading && (
                  <Loader2 className="text-white animate-spin" />
                )}
                Search
              </Button>
            </form>
          </Form>
          <div className="flex flex-col gap-5">
            {users.length === 0 && submittedUsername && !isLoading && (
              <h2 className="text-center text-red-500">NO USER FOUND</h2>
            )}
            {users.length !== 0 && submittedUsername && !isLoading && (
              <h3>Showing result for "{ submittedUsername }" </h3>
            )}
            <UserList
              data={data}
              isLoading={isLoading}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
