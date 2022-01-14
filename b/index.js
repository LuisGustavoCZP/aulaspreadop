function ExecuteIt (...args) 
{
    const ns = args.reduce((acc, val) => [...acc, ...val], []);
    console.log(ns);
    return ns;
}

PrintLog(ExecuteIt([1, 2, 5, 7], [3, 4, 6, 8]));