type User = {
  id: string;
  name: string;
}

declare global {
  var user: User;
}

global.user = {
  id: "50",
  name: "Bernard Lee",
} as User;

export async function getUser(userId: string) {
  return global.user as User;
}

export async function updateUser(userId: string, name: string) {
  global.user.name = name;
}