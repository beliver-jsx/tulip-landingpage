
export interface project {
    name: string,
    index: string,
    slug: string,
    story: string,
    image: string,
    gallary: string[],
    overview: string,
    development: string,
    previous?: {
        name: string,
        href: string
    },
    next?: {
        name: string,
        href: string
    }
}