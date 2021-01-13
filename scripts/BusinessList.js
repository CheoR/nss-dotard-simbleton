import { useBusinesses } from "./BusinessProvider.js";
import { Business } from "./Business.js";

const contentTarget = document.getElementsByClassName("customerList")[0];

export const BusinessList = () => {
    const businessArray = useBusinesses();

    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach( (business) => {
        contentTarget.innerHTML += Business(business);
    });
}