export const Agent = ( { fullName, company, phoneNumber }) => {
    return `
    <section class="agent">
        <h2 class="agent__name">${fullName}<h2>
        <div class="agent__info">
            <p class="info">Company: ${company}</p>
            <p class="info">Phone: ${phoneNumber}</p>
        </div>
    </section>
    `
};
