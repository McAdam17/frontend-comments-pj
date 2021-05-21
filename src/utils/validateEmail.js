export default function (email) {
    const validator = /^[a-zA-Z][a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(validator);
}