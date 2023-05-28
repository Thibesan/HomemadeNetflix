import { PrismaClient } from "@prisma/client";

//NextJS compiles per any changes, thus overloads Clients. 
//Save to global to avoid duping too many clients in development from hot-reloading
const client = global.prismadb || new PrismaClient();
if(process.env.NODE_ENV == 'production')
    global.prismadb = client;
    
export default client;