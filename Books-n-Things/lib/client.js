import sanityClient from '@sanity/Client';
import imageUrlBuilder from '@sanity/image-url';

//sanityClient is a fun which takes object as a parameter
const client = sanityClient({
    projectId : 'r58g95hz',
    dataset:'production',
    apiVersion:'v2021-10-21', //current date
    useCdn: true,
    token: 'skKTmUXBx7N3hums3TAImaiCFUr8M2S53iWwFADooBD9SHQdwPQxkY7Yt8GgzQT9bmU93Xp11jxWcbRl2fb0T5BoJjBlyRDfh3P4NSJdUtjgMMAnAwXHe2bcUBDBR0JoRO9oMqKPn5uY5O69u3YvjqJl47CUoNt56KTeST8x5mAEvEK58HIU' //for security concerns using Macros
})

//We are using builder to use images from sanity
const builder = imageUrlBuilder(client);

//sanity give us the access to image urls where our images are stored
export const urlFor = (source) => builder.image(source);
