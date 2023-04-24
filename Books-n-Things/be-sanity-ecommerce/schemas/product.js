export default {
    name: 'product',
    title:'Product',
    type:'document',
    fields:[
        //fields are going to be object based
        //field-1 image
        {
            name:'image',
            title:'Image',
            type:'array',
            of: [{type: 'image'}],
            options: {
                hotspot : true, //to get crop option
            }
        },
        //field-2 name
        {
            name:'name',
            title:'Name',
            type:'string',
        },
        //field-3 slug
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options: {
                source: 'name', //based upon the name, this will create automatic slug
                maxLength: 90,
            }
        },
        //field-4 Price
        {
            name:'price',
            title:'Price',
            type:'number',
        },
        //field-5 details
        {
            name:'details',
            title:'Details',
            type:'string',
        },
    ]
}