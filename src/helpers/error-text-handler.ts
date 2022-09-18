export default function errorTextHandler(name: string, errors: any): string {
    if (!errors) return "Please fill the form correctly";
    const error = errors[name];
    switch (error.type) {
        case "required":
            return "required";
        default:
            return "Please fill the form correctly";
    }
}
