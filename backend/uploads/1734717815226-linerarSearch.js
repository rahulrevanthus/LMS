//declare the array
let a=[2,4,5,8,10,25,38,34];
let data=10;// target value
let n=a.length; //storing length in 'n'
for(let i=0;i<n;i++){
    if(a[i]==data){
        console.log("found at index",+ i);
    }
}