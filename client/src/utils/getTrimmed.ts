export const getTrimmed =(str:string) => {
    if (str.length > 150) {
        return str.substring(0, 150) + '...';
    }
    return str;
}