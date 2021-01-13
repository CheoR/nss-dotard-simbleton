// export const Business = ( businessObj ) {

export const Business = ( { companyName, purchasingAgent, phoneWork, orders, companyIndustry, addressZipCode, 
    addressStateCode, addressFullStreet, addressCity} ) => {
    return `
    <section class="business">
        <h2 class="business__name">${companyName}<h2>
        <div class="business__info">
            <p class="info">Zip Code: ${addressZipCode}</p>
            <p class="info">State: ${addressStateCode}</p>
            <p class="info">Address: ${addressFullStreet}</p>
            <p class="info">City: ${addressCity}</p>
        </div>
    </section>
    `
}

/*
<p class="info">Purchasing Agent: ${purchasingAgent.nameFirst} ${purchasingAgent.nameLast}</p>
            <p class="info">Work Phone: ${phoneWork}</p>
            <p class="info">Orders: ${orders}</p>
            <p class="info">Industry: ${companyIndustry}</p>
*/
