
class Node {

    constructor(data){
    this.data = data;
    this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head=null;
        this.size= 0;
    }
//Inserting the node at the end 
    addAtEnd(data){
    let node = new Node(data);
    if(this.head == null){
        this.head = node;
       
        return;
    }
    let temp_node= this.head;
    while(temp_node.next != null){
      temp_node= temp_node.next;
    }
    temp_node.next = node;
    this.size++;
    }
    sizeOflist(){

        return this.size;
    }
    insertAt(data, index){
     if(this.sizeOflist() > (index+1)){
        return ;
     }
     let node = new Node(data);

     if(index == 0){
        node.next = this.head;
        this.head = node;
        return;
     }
     let prevNode,currentNode,i;
     currentNode = this.head;
      i=0;
     while (currentNode.next != null ){
        if(i<index){
            prevNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }
        if(i== index){
            node.next=currentNode;
            prevNode.next = node;
        }
     }
     this.size++;
    }
//Prinit the list 
    printlist(){
        let node =this.head;

        while(node){
              
            console.log(node.data);
            node = node.next;
        }

    }
}

let li = new LinkedList();

li.addAtEnd(10);
li.addAtEnd(20);
li.insertAt(5, 0);
li.insertAt(30,2)
li.printlist();