/* function Fibo(n){
    let arr=[1,1];

    for(let i=2; i<n; i++){
        arr[i]=arr[i-1]+arr[i-2];
        
    }
    return arr
}
console.log(Fibo(5)) */

  /* function Fibo(n){
    let fijo=0
    let temporal=1
    let actual=0
    for(i=2; i<n; i++){

        inicial=temporal
        actual=temporal+inicial
        console.log(actual)
        }
    }
    Fibo(6)   */

    function Fibo(n){
      if(n<2) return
      return Fibo(n-1)+Fibo(n-2)
            
            }
         console.log()