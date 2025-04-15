const validateForm = (id: string, value: string): string => {
    switch (id) {
        case 'name':
            if (!value.trim()) return "Name is required.";
            if (value.trim().length < 3) return "Name must be at least 3 characters.";
            break;
        case 'email':
            if (!value.trim()) return "Email is required.";
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email.";
            break;
        case 'phone':
            if (!value.trim()) return "Phone number is required.";
            if (!/^\d{10}$/.test(value)) return "Invalid phone number.";
            break;
        case 'message':
            if (!value.trim()) return "Message is required.";
            break;
        default:
            return "";
    }
    return "";
};

export { validateForm };
