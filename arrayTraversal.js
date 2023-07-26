const nums = [3, 7, 5, 1, 9, 33];

for(let i=0; i<nums.length; i++){
    console.log(nums[i] ** 2 );
}

console.log('------------------');
// for of loop

for(let i of nums){
    console.log(i ** 2);
}

for(let i of 'hello world'){
    console.log(i);
}

for(let i of nums.slice(0, 3)){
    console.log(i ** 2);
}