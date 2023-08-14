let res = 0;
for (num of process.argv.slice(2)) {
    res += parseInt(num);
}

console.log(res);