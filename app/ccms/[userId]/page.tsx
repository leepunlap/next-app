import { getUser } from "../../data-access/user";
import Form from "./form";

export default async function CCMSPage({
  params,
}: {
  params: {
    userId: string
  }
}) {
  const user = await getUser(params.userId);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Users {user.name}
        <Form userId={user.id} />
      </div>
    </main>
  );
}
