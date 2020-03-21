function add(){
    var sum = 0;
    for(i=0; i <arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum
}
add(10, 20, 30);