function Node(data){
    
    this.data= data;
    this.next=null;

}

function LinkedList(){
this.head = null;
}


LinkedList.prototype.add= function(val){
const  node = new Node(val);
if(!this.head){
    this.head = node;
}else{
    let curNode= this.head;
    while(curNode.next){
    curNode = curNode.next;
    }
    curNode.next = node;
}

}

LinkedList.prototype.delete=function(val){
if(this.head){
    let curNode = this.head;
    while(  curNode.next && curNode.next.data!==val ){
        curNode=curNode.next;
    }
    curNode.next = curNode.next.next;
}
}

LinkedList.prototype.print = function(){
let curNode = this.head;
const array = [];
while(curNode){
    array.push(curNode.data);
    curNode=curNode.next;
}
console.log(`LinkedList {${array.join(',')}}`);
}



let linkedlist = new LinkedList();

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.delete(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};