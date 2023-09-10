import { error } from '@sveltejs/kit';
import { data } from '$components/organisms/Showcase/data';

let contents = "";
let contentTitle = "";

export async function load({ request }) {
    const currentURL = request.url;

    let words = currentURL.split("/showcase");

    let found = false;
    let validURL = [];
    
    for (let content in data) {
        for (let item of data[content]) {
            if(words[1] === `/${content + "-" + item.title}`.toLowerCase().replace(/ /g, "-")){
                found = true;
            } 
            validURL.push(`/${content + "-" + item.title}`.toLowerCase().replace(/ /g, "-"));
        }
    }

    console.log("Your URL: " + currentURL);
    console.log("Valid URLS: ");
    console.log(validURL);
    console.log("ACCESSED: " + found);

    if (!found) {
        throw error(404, 'Not Found');
    }
}





