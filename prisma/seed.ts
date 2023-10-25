import { PrismaClient } from "@prisma/client";

const  prisma  =  new  PrismaClient();

async  function  main() {
    await  prisma.user.upsert({
        where: { email: 'tammy.batubo@gmail.com' },
        update: {},
        create: {
            email: 'tammy.batubo@gmail.com',
            name: 'Tammy Batubo',
            password: 'password'
        }
    });
    await  prisma.feedback.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            title: 'Feedback 1',
            description: 'Description 1',
            authorId: 1
        }
    });
    await prisma.upvote.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            feedbackId: 1,
            authorId: 1
        }
    });  
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async  ()  =>  {
    await  prisma.$disconnect();
});