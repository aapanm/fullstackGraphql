import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const getUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) throw new Error(`Cannot find user with given mail`);
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

const signIn = async (_, args) => {
  const { email, password } = args;
  try {
    const user = await getUserByEmail(email);
    if (user.password === password) {
      return user;
    } else {
      throw new Error(`Credentials do not match!`);
    }
  } catch (e) {
    throw new Error(e);
  }
};

export { signIn };
