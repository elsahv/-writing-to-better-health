import Image from 'next/image'
import {getProjects} from "@/sanity/sanity-utils"
import Link from 'next/link' 

export default async function Home() {

  const projects = await getProjects()
  return (
    <div className="2xl:mt-[75px] lg:m-[60px] md:m-[60px] mb-[100px] sm:px-1 mx-[10px] my-[20px]">
    <div className="2xl:my-[55px] py-1 px-[150px]">
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 2xl:gap-14 lg:gap-5 md:gap-4">
     {projects.map((project) => (
        <div key={project._id}>
          <h2 className="capitalize pl-1">{project.name}</h2> 
          <Link href={`/projects/${project.slug}`}>
            <div className="">
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
    </div>
  )
}
