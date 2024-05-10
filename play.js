const fetchData = callback => {
    setTimeout(()=> {
        callback('Done!');
    }, 1500);
};

setTimeout(() => {
    console.log('The Timer is ');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

console.log('Start!');