
class Arreglo{
    constructor(){
        this.length=0;
        this.data={};
    }

    get(index){
        return  this.data[index]
    }

    push(value){
        this.data[this.length]=value
        this.length++
    }

    pop(){
        const value = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return value
    }

    delete(index){
        const value = this.data[index]
        this.shiftIndex(index)
        return value

        //if(index < this.length-1){
        //    //const value = this.data[index]
        //    delete this.data[index]
        //    this.length--
        //    return
        //}        
        //return "The index is incorrect"
    }
    shiftIndex(index){
        for(let i=index; i<this.length-1; i++){
            this.data[i] = this.data[i+1]
        }
        //delete this.data[this.length-1]
        this.length--
        //return tdata
        //counter = 0
    }

}


let arr  = new Arreglo()
arr.push(3)
arr.push(5)
arr.push(6)
arr.push(8)
//[3,5,6,8]
console.log(arr)
arr.shiftIndex(2)
console.log(arr)
//[3, 6, 8]

