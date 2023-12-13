import { type SchemaTypeDefinition } from 'sanity'

import project from './project-schema'
import projectImage from "./projectImage"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, projectImage],
}
