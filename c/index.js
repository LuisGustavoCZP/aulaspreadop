function ExecuteIt (n) 
{
    const list = [];
    for (let i = 0; i < n; i++) 
    {
        list.push(sortear());
    }
    let g = greater(...list);
    console.log(g);
    return g;
}

function sortear () {
    return parseInt(Math.random()*100);
}

function greater (...args) 
{
    return args.reduce((great, n) => 
    {
        if(great < n) great = n;
        return great;
    }, 0);
}

PrintLog(ExecuteIt(10));