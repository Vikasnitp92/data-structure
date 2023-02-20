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
    }

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
li.printlist();