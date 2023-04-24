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