import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.employee.create({
    data: {
      name: 'Rodolfo Páez',
      email: 'fito@factored.ai',
      password: 'mypassword',
      avatar: 'placeholder.jpg',
      position: 'Tech Lead ',
      skills: {
        create: [
          {
            skillName: 'Python',
            skillGrade: '10',
          },
          {
            skillName: 'Cobol',
            skillGrade: '100',
          },
          {
            skillName: 'Docker',
            skillGrade: '40',
          },
          {
            skillName: 'Java',
            skillGrade: '60',
          },
          {
            skillName: 'Haskell',
            skillGrade: '100',
          },
        ],
      },
    },
  })

  const asdd = await prisma.employee.create({
    data: {
      name: 'Andrés Calamaro',
      email: 'calamaro@factored.ai',
      password: 'mypassword',
      avatar: 'placeholder.jpg',
      position: 'Software Architect',
      skills: {
        create: [
          {
            skillName: 'Rust',
            skillGrade: '100',
          },
          {
            skillName: 'Python',
            skillGrade: '90',
          },
          {
            skillName: 'Spark',
            skillGrade: '60',
          },
          {
            skillName: 'Java',
            skillGrade: '30',
          },
          {
            skillName: 'TypeScript',
            skillGrade: '100',
          },
        ],
      },
    },
  })

  const resuhhhlt = await prisma.employee.create({
    data: {
      name: 'Denise Gutiérrez',
      email: 'denise@factored.ai',
      password: 'mypassword',
      avatar: 'placeholder.jpg',
      position: 'UX Designer',
      skills: {
        create: [
          {
            skillName: 'Python',
            skillGrade: '40',
          },
          {
            skillName: 'Cobol',
            skillGrade: '70',
          },
          {
            skillName: 'CSS',
            skillGrade: '100',
          },
          {
            skillName: 'React',
            skillGrade: '100',
          },
          {
            skillName: 'TypeScript',
            skillGrade: '100',
          },
        ],
      },
    },
  })

  /* const ccc = await prisma.employee.create({
    data: {
      name: 'Homero Cae',
      email: 'myusssdfcser@factored.ai',
      password: 'mypassword',
      avatar: 'placeholder.jpg',
      position: 'developer',
      skills: {
        create: [
          {
            skillName: 'Python',
            skillGrade: '80',
          },
          {
            skillName: 'Cobol',
            skillGrade: '100',
          },
          {
            skillName: 'Spark',
            skillGrade: '60',
          },
          {
            skillName: 'Java',
            skillGrade: '30',
          },
          {
            skillName: 'TypeScript',
            skillGrade: '100',
          },
        ],
      },
    },
  })

  const ssddcccc = await prisma.employee.create({
    data: {
      name: 'Anam Aria',
      email: 'myuserera@factored.ai',
      password: 'mypassword',
      avatar: 'placeholder.jpg',
      position: 'developer',
      skills: {
        create: [
          {
            skillName: 'Python',
            skillGrade: '80',
          },
          {
            skillName: 'Cobol',
            skillGrade: '100',
          },
          {
            skillName: 'Spark',
            skillGrade: '60',
          },
          {
            skillName: 'Java',
            skillGrade: '30',
          },
          {
            skillName: 'TypeScript',
            skillGrade: '100',
          },
        ],
      },
    },
  })

  const clisdd = await prisma.employee.create({
    data: {
      name: 'Marco Aurelio',
      email: 'myuseliooor@factored.ai',
      password: 'mypassword',
      avatar: 'placeholder.jpg',
      position: 'developer',
      skills: {
        create: [
          {
            skillName: 'Python',
            skillGrade: '80',
          },
          {
            skillName: 'Cobol',
            skillGrade: '100',
          },
          {
            skillName: 'Spark',
            skillGrade: '60',
          },
          {
            skillName: 'Java',
            skillGrade: '30',
          },
          {
            skillName: 'TypeScript',
            skillGrade: '100',
          },
        ],
      },
    },
  })

  const mmnm = await prisma.employee.create({
    data: {
      name: 'Jules Alcachofa',
      email: 'myuseulesr@factored.ai',
      password: 'mypassword',
      avatar: 'placeholder.jpg',
      position: 'developer',
      skills: {
        create: [
          {
            skillName: 'Python',
            skillGrade: '80',
          },
          {
            skillName: 'Cobol',
            skillGrade: '100',
          },
          {
            skillName: 'Spark',
            skillGrade: '60',
          },
          {
            skillName: 'Java',
            skillGrade: '30',
          },
          {
            skillName: 'TypeScript',
            skillGrade: '100',
          },
        ],
      },
    },
  })

  const dsddcc = await prisma.employee.create({
    data: {
      name: 'Critsl Hern',
      email: 'mbn@factored.ai',
      password: 'mypassword',
      avatar: 'placeholder.jpg',
      position: 'developer',
      skills: {
        create: [
          {
            skillName: 'Python',
            skillGrade: '80',
          },
          {
            skillName: 'Cobol',
            skillGrade: '100',
          },
          {
            skillName: 'Spark',
            skillGrade: '60',
          },
          {
            skillName: 'Java',
            skillGrade: '30',
          },
          {
            skillName: 'TypeScript',
            skillGrade: '100',
          },
        ],
      },
    },
  })

  const ressdult = await prisma.employee.create({
    data: {
      name: 'Betty Alcachofa',
      email: 'myusemmmmmmmmr@factored.ai',
      password: 'mypassword',
      avatar: 'placeholder.jpg',
      position: 'developer',
      skills: {
        create: [
          {
            skillName: 'Python',
            skillGrade: '80',
          },
          {
            skillName: 'Cobol',
            skillGrade: '100',
          },
          {
            skillName: 'Spark',
            skillGrade: '60',
          },
          {
            skillName: 'Java',
            skillGrade: '30',
          },
          {
            skillName: 'TypeScript',
            skillGrade: '100',
          },
        ],
      },
    },
  })
  const sd = await prisma.employee.create({
    data: {
      name: 'Juan Alcachofa',
      email: 'myuserbvbv@factored.ai',
      password: 'mypassword',
      avatar: 'placeholder.jpg',
      position: 'developer',
      skills: {
        create: [
          {
            skillName: 'Python',
            skillGrade: '80',
          },
          {
            skillName: 'Cobol',
            skillGrade: '100',
          },
          {
            skillName: 'Spark',
            skillGrade: '60',
          },
          {
            skillName: 'Java',
            skillGrade: '30',
          },
          {
            skillName: 'TypeScript',
            skillGrade: '100',
          },
        ],
      },
    },
  }) */

/* const users = await prisma.employee.findMany()
const habilidades = await prisma.skill.findMany()

console.log(users)
console.log(habilidades)  */

/* const deletePosts = prisma.employee.deleteMany()
const deleteUsers = prisma.skill.deleteMany()

 await prisma.$transaction([deletePosts, deleteUsers]) */
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })



