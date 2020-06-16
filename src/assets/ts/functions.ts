// Global function for truncating large amounts of text(paragraphs).
export const truncateString = (string:string, num:number):string => {
    if (string.length <= (num)) {
        return string;
    }
    return string.slice(0, num) + '...';
};
