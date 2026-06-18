import CustomLogger from "./logger"
import { prisma } from "./prisma"

export  async function checkDatabaseConnection(){
  try {
    await prisma.$queryRaw`SELECT 1`
    const jsonLog = {
        message: 'Database connection successfully',
        timestamp: new Date().toISOString(),
        level: 'info',

    }
    CustomLogger(JSON.stringify(jsonLog))
    }
   catch (error) {
    throw new Error(`Database connection failed: ${(error as Error).message}`);
  }
}
