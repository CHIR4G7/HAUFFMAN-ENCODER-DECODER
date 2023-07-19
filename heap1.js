
export {BinaryHeap}

class BinaryHeap{

    constructor()
    {
        this.heap = [];
    }

    print()
    {
        this.heap.forEach((e)=>
        {
            console.log(e);
        })
    }
    size()
    {
        return this.heap.length;
    }
    empty()
    {
        return this.heap.length===0;
    }

    upheapify()
    {
        var index = this.heap.length-1;

        while(index>0)
        {
            var element = this.heap[index];
            var parentIndex = Math.floor((index-1)/2);
            var parentElement = this.heap[parentIndex];

            if(element<parentElement)
            {
                this.heap[index] = parentElement;
                this.heap[parentIndex] = element;
                
            }else{
                break;
            }
            index = parentIndex;
        }
    }

    insert(value)
    {
        this.heap.push(value);
        this.upheapify();
    }

    downheapify()
    {
        var parentIndex = 0;
        var leftChild = 2*(parentIndex)+1;
        var rightChild = 2*(parentIndex)+2;

        while(leftChild<this.heap.length)
        {
            var minindex = parentIndex;
            if(this.heap[minindex]>this.heap[leftChild])
            {
                minindex = leftChild;
            }
            if(rightChild<this.heap.length && this.heap[rightChild]<this.heap[minindex])
            {
                minindex = rightChild;
            }

            if(minindex===parentIndex)
            {
                break;
            }

            var temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[minindex];
            this.heap[minindex] = temp;

            parentIndex = minindex;
            leftChild = 2*parentIndex+1;
            rightChild = 2*parentIndex+2;
        }
    }

    extractMin()
    {
        var minimum = this.heap[0];//first element
        var temp = this.heap[this.heap.length-1];
        this.heap[0] = temp;
        this.heap.pop();
        this.downheapify();
        return minimum;
    }

    top()
    {
        return this.heap[this.heap.length-1];
    }
};

// const heap = new BinaryHeap();

// heap.insert(8);
// // console.log(heap.top());
// heap.insert(7);
// // console.log(heap.top());
// heap.insert(10);
// // console.log(heap.top());
// heap.insert(15);
// // console.log(heap.top());
// console.log(" ");
// heap.print();
// console.log(" ");
// console.log(heap.extractMin());
// console.log(" ");
// heap.print();
// console.log(" ");
// console.log(heap.extractMin());
// console.log(" ");
// heap.print();
// console.log(" ");
// console.log(heap.extractMin());
// console.log(" ");
// heap.print();
// // heap.print();
// // console.log(heap.extractMin());
// // console.log(heap.extractMin());


