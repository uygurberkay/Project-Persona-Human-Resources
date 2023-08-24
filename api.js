import createClient from './sanity';
let sanityQuery = (query, params)=> createClient.fetch(query, params);


export const getDepartment = ()=>{
    return sanityQuery(`
        *[_type == "department"] {
            _id,
            title,
            departmentImage,
        }
    `);
}

export const getEmployeeList = ()=>{
    return sanityQuery(`
        *[_type == "department"] {
            _id,
            title,
            departmentImage,
            employees[] -> {
                _id,
                name,
                jobTitle,
                phone,
                email,
                cv,
            },
        }
    `);
}

export const getEmployeeById = id=>{
    return sanityQuery(`
        *[_type == "department"] {
            ...,
            employees[] -> {
                _id,
                name,
                jobTitle,
                phone,
                email,
                cv,
            },
        }[0]
    `, {id})
}

export const getActiveProject = ()=>{
    return sanityQuery(`
        *[_type == "department"] {
            _id,
            title,
            departmentImage,
            activeProjects[] -> {
                _id,
                title,
                dueDate,
                startDate,
                teamMembers[] -> {
                    _id,
                    name,
                    jobTitle,
                    email,
                }
            }
        }
    `);
}

export const getActiveProjectById = id=>{
    return sanityQuery(`
        *[_type == "department"] {
            ...,
            activeProjects[] -> {
                _id,
                title,
                dueDate,
                startDate,
                teamMembers[] -> {
                    _id,
                    name,
                    jobTitle,
                    email,
                }
            }
        }[0]
    `, {id})
}

// export const getFeaturedRestaurants = ()=>{
//     return sanityQuery(`
//         *[_type == "department"] {
//             _id,
//             title,
//             departmentImage,
//             employees[] -> {
//                 _id,
//                 name,
//                 jobTitle,
//                 phone,
//                 email,
//                 cv,
//             },
//         }
//     `);
// }

// export const getCategories = ()=>{
//     return sanityQuery(`
//     *[_type == "department"] {
//         _id,
//         title,
//         departmentImage,
//     }

//         *[_type == 'category']
//     `);
// }

// export const getFeaturedRestaurantById = id=>{
//     return sanityQuery(`
//         *[_type == 'featured' && _id == $id] {
//             ...,
//             restaurants[]->{
//                 ...,
//                 dishes[]->,
//                 type->{
//                     name
//                 }
//             }
//         }[0]
//     `, {id})
// }