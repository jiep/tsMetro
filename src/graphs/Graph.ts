import GraphClass from "./GraphClass";

export default class Graph {
  private class : GraphClass;
  private vertices_number : number;
  private adjacency_matrix : number[][] = [[]];

  constructor(c : GraphClass, vertices_number : number){
    this.class = c;
    this.vertices_number = vertices_number;

    for(let i = 0; i < this.vertices_number; i++){
        this.adjacency_matrix[i] = [];
      for(let j = 0; j < this.vertices_number; j++){
        this.adjacency_matrix[i][j] = 1;
      }
    }
  }

  public connect(i : number, j : number){
    this.adjacency_matrix[i][j] = 1;
    if(this.class == GraphClass.UNDIRECTED){
      this.adjacency_matrix[j][i] = 1;
    }
  }

  public disconnect(i : number, j : number){
    this.adjacency_matrix[i][j] = 0;
    if(this.class == GraphClass.UNDIRECTED){
      this.adjacency_matrix[j][i] = 0;
    }
  }

  public areConnected(i : number, j : number) : boolean {
    return this.adjacency_matrix[i][j] == 1;
  }

  public vertices() : number {
    return this.vertices_number;
  }

  get getAdjMatrix() : number[][] {
    return this.adjacency_matrix;
  }

  get getClass() : GraphClass {
    return this.class;
  }

}
