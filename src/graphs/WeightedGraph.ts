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

}
