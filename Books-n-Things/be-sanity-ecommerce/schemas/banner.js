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
        
    ]
}