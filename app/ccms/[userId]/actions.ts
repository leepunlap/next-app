'use server'

import { updateUser } from "@/app/data-access/user";
import { revalidatePath } from "next/cache";

export async function updateNameAction(prevState: {
  userId: string;
}, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const userId = prevState.userId;
  const newName = formData.get("name") as string;
  await updateUser(user.id, newName);
  revalidatePath('/users/${user.id}');
  return {
    userId: userId,
    name: "",
    message: 'success'
  }
}