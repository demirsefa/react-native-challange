export default function errorTextHandler(name: string, errors: any): string {
    if (!errors) return "Please fill the form correctly";
    const error = errors[name];
    switch (error.type) {
        case "required":
            return "required";
        case "minLength":
            return "min length should be at least " + error.message
        case "maxLength":
            return "maxLength length should be smaller than " + error.message
        case "private_key_not_valid":
            return error.message;
        default:
            return "Please fill the form correctly";
    }
}
