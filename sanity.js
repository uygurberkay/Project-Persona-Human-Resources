import { createClient } from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
    projectId: '1tu4qybn',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
})

const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export const getDepartment = async () => {
    const items = await client.fetch('*[_type == "department"] {_id, title,departmentImage}').then((data) => {
        return data
    }).catch((err) => {
        throw console.error(err);
    });
    return items
}

export const getDepartment2 = async () => {
    const items = await fetch('https://1tu4qybn.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22department%22%5D+%7B%0A++_id%2C%0A++title%2C%0A++departmentImage%2C%0A++++%2F%2F+Employee+query%0A++++employees%5B%5D+-%3E+%7B%0A++++++_id%2C%0A++++++name%2C%0A++++++jobTitle%2C%0A++++++phone%2C%0A++++++email%2C%0A++++++cv%2C%0A++++%7D%2C%0A+++++%2F%2F+Director+query%0A++++director%5B%5D+-%3E+%7B%0A++++++_id%2C%0A++++++name%2C%0A++++++image%2C%0A++++++jobTitle%2C%0A++++++phone%2C%0A++++%7D%2C%0A++++%2F%2F+Project+query%0A++++activeProjects%5B%5D+-%3E+%7B%0A++++++_id%2C%0A++++++title%2C%0A++++++dueDate%2C%0A++++++startDate%2C%0A++++++teamMembers%5B%5D+-%3E+%7B%0A++++++++_id%2C%0A++++++++name%2C%0A++++++++jobTitle%2C%0A++++++++email%2C%0A++++++%7D%0A++++%7D%0A%7D').then((data) => {
        return data
    }).catch((err) => {
        throw console.error(err);
    });
    return items
}

export default client;