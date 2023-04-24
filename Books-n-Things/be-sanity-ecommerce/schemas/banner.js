export default{
    name: 'banner',
    title: 'Banner',
    type: 'document', 
    fields : [
        //fields are going to be object based
        //field-1 image
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: string,
        },
        {
            name: 'product',
            title: 'Product',
            type: string,
        },
        {
            name: 'desc',
            title: 'Desc',
            type: string,
        },
        {
            name: 'smallText',
            title: 'smallText',
            type: string,
        },
        {
            name: 'midText',
            title: 'midText',
            type: string,
        },
    ]
}