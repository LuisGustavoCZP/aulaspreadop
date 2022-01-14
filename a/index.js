function ExecuteIt (...args) 
{
    let n = 1;
    args.forEach(x => {n *= x;});
    console.log(n);
    return n;
}

PrintLog(ExecuteIt(1, 2, 3, 4));