declare module 'aos' {
    const AOS: {
        init: (options?: any) => void;
        refresh: () => void;
        refreshHard: () => void;
        // add more methods as needed
    };

    export default AOS;
}