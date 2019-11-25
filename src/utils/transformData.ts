interface Data {
    label: string;
    name: string;
}

export const transformData = (data: Data) => {
    const arr = [];
    for (let [key, value] of Object.entries(data)) {
        const obj = { label: key, unit: value };
        arr.push(obj);
    }
    return arr;
};
