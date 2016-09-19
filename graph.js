// Chapter 11 - Graphs and Graph Algorithms

class Vertex {
  constructor(label){
    this.label = label
  }
}
class Graph {
  constructor(vlen = (()=>Math.floor(Math.random()*10)+1)()) {
    this.vertices = vlen
    this.edges = 0
    this.adj =  (() => {
      let arr = new Array(vlen)
      for(let [i,_] of arr.entries()){arr[i] = []}
      return arr
    })()
  }
  addEdge(v1=0,v2=0){
    if(this.adj[v1].indexOf(v2) < 0 && (v1 <= this.vertices-1 && v2 <= this.vertices-1) && v1 != v2){
      this.adj[v1].push(v2)
      this.adj[v2].push(v1)
      this.edges++
    } else {throw new Error('not possibul')}
  }
  display(){
    for(let [i,el] of this.adj.entries()){console.log(`${i} -> ${el.join(' ')}`)}
  }
  dfs(start){
    let marked = []
    return dfsFun.call(this,start)
    
    function dfsFun(start){
      console.log(`I just visited ${start}`)
      marked[start] = true
      for(let i of this.adj[start]){
        if(!marked[i]){dfsFun.call(this,i)}
      }
    }
  }
}

// TP
a = new Graph(5)
a.addEdge(0,1)
a.addEdge(0,2)
a.addEdge(1,3)
a.addEdge(2,4)
a.display()
a.dfs(0)
debugger
