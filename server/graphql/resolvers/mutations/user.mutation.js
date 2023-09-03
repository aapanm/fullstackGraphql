import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const createUser = async (_, args) => {
  const { name, email, address, phone, password } = args;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        address,
        phone,
        password,
      },
    });

    return user;
  } catch (error) {
    throw new Error("Failed to create user!");
  }
};

export { createUser };
