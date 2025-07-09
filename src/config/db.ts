import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();


export const connectDb=async()=>{
    try{
        await prisma.$connect();
        console.log(`Database connected successfully`)
    }catch(err){
        console.log(`Database connection error ${err}`)
        process.exit();
    }

}

export const disconnectDB=async()=>{
    await prisma.$disconnect()
}

export default prisma;