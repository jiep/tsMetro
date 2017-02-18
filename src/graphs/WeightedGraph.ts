import Graph from './Graph';
import GraphClass from './GraphClass';

export default class WeightedGraph extends Graph {
  private weighted_matrix : number[][] = [[]];

  constructor(c : GraphClass, vertices_number : number){
    super(c, vertices_number);

    for(let i = 0; i < vertices_number; i++){
        this.weighted_matrix[i] = [];
      for(let j = 0; j < vertices_number; j++){
        this.weighted_matrix[i][j] = Number.POSITIVE_INFINITY;
      }
    }
  }

  public connect(i : number, j : number, weight? : number){
    super.connect(i,j);
    this.weighted_matrix[i][j] = weight;
    if(super.getClass == GraphClass.UNDIRECTED){
      this.weighted_matrix[j][i] = weight;
    }
  }

  public getWeight(i : number, j : number) : number {
    return this.areConnected(i, j) ? this.weighted_matrix[i][j] : Number.POSITIVE_INFINITY;
  }

  get getWeightedMatrix() : number[][] {
    return this.weighted_matrix;
  }

  private floyd() : Array<number[][]> {
    let n : number = this.vertices();
    let ans : number[][] = this.getWeightedMatrix;
    let p : number[][] = WeightedGraph.calculePath(this.getWeightedMatrix);

    for (let k = 0; k < n; k++){
      for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
          if (ans[i][k]+ans[k][j] < ans[i][j]) {
            ans[i][j] = ans[i][k]+ans[k][j];
            p[i][j] = p[k][j];
          }
        }
      }
    }
    let out = [];
    out.push(ans)
    out.push(p);
    return out;
  }

  private static rPath(i : number, j : number, path : number[][]) : Array<number> {
    let r : Array<number> = [];

    r.unshift(j);

    while (path[i][j] != i) {
      r.unshift(path[i][j]);
      j = path[i][j];
    }

    r.unshift(i);

    return r;
  }


  private static calculePath(ady : number[][]) : number[][] {
    let path : number[][] = [[]];

    for (let i = 0; i < ady.length; i++){
      path[i] = [];
      for (let j = 0; j < ady.length; j++){
        if(ady[i][j] == Number.POSITIVE_INFINITY){
          path[i][j] = -1;
        }else{
          path[i][j] = i;
        }
      }
    }

    for (let i = 0; i < ady.length; i++){
      path[i][i] = i;
    }

    return path;

  }

  public shortestPath(i : number, j: number) : Array<any>{
    let floyd = this.floyd();
    let distance = floyd[0];
    let path = floyd[1];
    let shortestPath = WeightedGraph.rPath(i,j,path);
    let d = distance[i][j];
    let out = [];
    out.push(shortestPath);
    out.push(d);

    return out;
  }

}
