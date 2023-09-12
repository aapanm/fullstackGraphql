import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const getRentedProducts = async (_, args) => {
  const { userId } = args;
  try {
    const response = await prisma.$queryRaw`SELECT
                                          CAST(t."trxId" as varchar(20)) AS transaction_id,
                                          rt."startTime" AS rent_start_time,
                                          rt."endTime" AS rent_end_time,
                                          p."id" AS product_id,
                                          p.title AS product_title,
                                          p.description AS product_description,
                                          u.id AS owner_id,
                                          u.name AS owner_name,
                                          u.email AS owner_email
                                      FROM "Transaction" t
                                      JOIN "RentTransactions" rt on t."trxId" = rt."transactionId"
                                      JOIN "Products" p ON t."productId" = p."id"
                                      JOIN "User" u ON p."userId" = u."id"
                                      WHERE t."transactionTypeId" = 2 AND t."userId" = ${userId}`;
    return response;
  } catch (e) {
    throw new Error(
      `Something went wrong while fetching rented Products, ${e}`
    );
  }
};

const getBoughtProducts = async (_, args) => {
  const { userId } = args;
  try {
    const response = await prisma.$queryRaw`SELECT
                                                CAST(t."trxId" as varchar(20)) AS transaction_id,
                                                p."id" AS product_id,
                                                p.title AS product_title,
                                                p.description AS product_description,
                                                u.id AS owner_id,
                                                u.name AS owner_name,
                                                u.email AS owner_email
                                            FROM "Transaction" t
                                            JOIN "Products" p ON t."productId" = p."id"
                                            JOIN "User" u ON p."userId" = u."id"
                                            WHERE t."transactionTypeId" = 1 AND t."userId" = ${userId} `;
    return response;
  } catch (e) {
    throw new Error(
      `Something went wrong while fetching rented Products, ${e}`
    );
  }
};

export { getRentedProducts, getBoughtProducts };
