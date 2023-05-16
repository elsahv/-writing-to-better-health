import Image from 'next/image'
import {getProjects} from "@/sanity/sanity-utils"
import Link from 'next/link' 

export default async function Home() {

  const projects = await getProjects()
  return (
    <div className="2xl:mt-[75px] 2xl:my-[55px] 2xl:px-[150px] md:px-[50px] md:mt-5 sm:px-5">
    <div className="grid 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2xl:gap-14 lg:gap-5 md:gap-4">
     {projects.map((project) => (
        <div key={project._id}>
          <h2 className="capitalize pl-1 pt-5">{project.name}</h2> 
          <Link href={`/projects/${project.slug}`}>
            <div className="mb-5">
          {project.image && ( 
            <Image
             src={project.image}
             alt={project.name}
             width={850}
             height={800}
             className="border border-black"
             />
            
          )}
           </div>
           </Link>
          </div>
     ))}
    </div>
    </div>
  )
}
