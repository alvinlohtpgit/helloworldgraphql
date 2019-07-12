const {prisma} = require('./generated/prisma-client')

async function main() {
    const postsByUser = await prisma.user({email:'bob@prisma.io'}).posts()
    console.log(`All posts by user ${JSON.stringify(postsByUser)}`)
}

main().catch(err => console.error(err))
