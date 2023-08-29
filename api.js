import createClient from './sanity';
// let sanityQuery = (query, params)=> createClient.fetch(query, params);
let sanityQuery = async (query, params) => {
    try {
      const response = await createClient.fetch(query, params);
      return response;
    } catch (error) {
      console.error('Sanity query error:', error);
      throw error;
    }
  };

export const getDepartment = ()=>{
    return sanityQuery(`
        *[_type == "department"] {
            _id,
            title,
            departmentImage {
                ...,
            }
        }
    `);
}
// export const getDepartment = async () => {
//     try {
//         const departments = await sanityQuery(`
//             *[_type == "department"] {
//             _id,
//             title,
//             departmentImage,
//             }
//         `);
//         departments.forEach(department => {
//             console.log('Department ID:', department._id);
//             console.log('Title:', department.title);
//             console.log('Department Image:', department.departmentImage);
//         });
//         return departments;
//         } catch (error) {
//         console.error('Error fetching departments:', error);
//         throw error;
//         }
//   };

export const getDirectors = ()=>{
    return sanityQuery(`
        *[_type == "department"] {
            ...,
        },
        director[] -> {
            ...,
        },
    `);
}

export const getEmployeeList = ()=>{
    return sanityQuery(`
        *[_type == "employees" ]{
            ...,
        }
    `);
}

export const getEmployeeById = id=>{
    return sanityQuery(`
        *[_type == "department" && _id == $id]  {
            ...,
            employees[] -> {
                ...,
            },
        }[0]
    `, {id})
}

export const getActiveProject = ()=>{
    return sanityQuery(`
    *[_type == "project" ] {
        ...,
        teamMembers[] -> {
            ...,
        },
        projectLead -> {
            ...,  
        },
    }
    `);
}

export const getActiveProjectById = id=>{
    return sanityQuery(`
        *[_type == "department" && _id == $id] {
            ...,
            activeProjects[] -> {
                ...,
                teamMembers[] -> {
                    ...,
                }
            }
        }[0]
    `, {id})
}

export const getCategories = ()=>{
    return sanityQuery(`
        *[_type == 'category']
    `);
}

export const getFeaturedRestaurantById = id=>{
    return sanityQuery(`
        *[_type == 'featured' && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }
            }
        }[0]
    `, {id})
}

export const getFeaturedRestaurants = ()=>{
    return sanityQuery(`
        *[_type == 'featured'] {
            ...,
            restaurants[]->{
            ...,
            type->{
                name
            },
            dishes[]->
            }
        }
    `);
}