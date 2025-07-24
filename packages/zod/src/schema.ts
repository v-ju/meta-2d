import z, { email } from 'zod'


export const signinSchema = z.object({
    email: z.email(),
    name: z.string()
})

export const updateMetadataSchema = z.object({
    avatarId: z.string()
})


export const createSpaceSchema = z.object({
    name: z.string(),
    mapId: z.string(),
    dimensions: z.string().regex(/^[0-9]{1,4}x[0-9]{1,4}$/)
})

export const addElementSchema = z.object({
    spaceId : z.string(),
    elementId: z.string(),
    x: z.number(),
    y: z.number()
})

export const createElementSchema = z.object({
    imageUrl : z.string(),
    static: z.boolean(),
    width: z.number(),
    height: z.number()
})

export const updateElementSchema = z.object({
    imageUrl: z.string()
})

export const createAvatarSchema = z.object({
    name: z.string(),
    imageUrl: z.string(),
})

export const createMApSchema = z.object({
    thumbnail: z.string(),
    dimensions: z.string().regex(/^[0-9]{1,4}x[0-9]{1,4}$/),
    defaultElements: z.array(z.object({
        element: z.string(),
        x: z.number(),
        y: z.number()
    }))
})