import sanityClient from '@sanity/Client';
import imageUrlBuilder from '@sanity/image-url';

//sanityClient is a fun which takes object as a parameter
const client = sanityClient({
    projectId : 'r58g95hz',
    dataset:'production',
    apiVersion:'2023-04-24', //current date
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN //for security concerns using Macros
})

//We are using builder to use images from sanity
const builder = imageUrlBuilder(client);

//sanity give us the access to image urls where our images are stored
export const urlFor = (source) => builder.image(source);
