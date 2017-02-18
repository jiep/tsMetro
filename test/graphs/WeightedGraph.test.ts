import WeightedGraph from '../../src/graphs/WeightedGraph';
import GraphClass from '../../src/graphs/GraphClass';

import * as mocha from 'mocha';
import { expect } from 'chai';

describe('WeightedGraph', () => {

    var graph : WeightedGraph;
    var directed_graph : WeightedGraph;
    var g : WeightedGraph = new WeightedGraph(GraphClass.UNDIRECTED, 5);



    describe('Constructor', () => {

      it('should create a new `WeightedGraph`', () => {
          graph = new WeightedGraph(GraphClass.DIRECTED, 3);
          expect(graph.getWeightedMatrix).to.eql([[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]]);
      });
    });

    describe('Connect', () => {

      before(()=>{
          directed_graph = new WeightedGraph(GraphClass.DIRECTED, 3);
      });

      it('should create a new edge between the two given nodes in a directed graph with some weight', () => {
          directed_graph.connect(1, 2, 5);
          expect(directed_graph.getWeightedMatrix[1][2]).to.equal(5);
      });

      before(()=>{
          graph = new WeightedGraph(GraphClass.UNDIRECTED, 3);
      });

      it('should create a new edge between the two given nodes in an undirected graph with some weight', () => {
          graph.connect(1,2,6);
          expect(graph.getWeightedMatrix[1][2]).to.equal(6);
          expect(graph.getWeightedMatrix[2][1]).to.equal(6);
      });
    });


    describe('Get weight', () => {
      it('should return the weight between two nodes of the graph', () => {
        expect(graph.getWeight(1,1)).to.equal(Number.POSITIVE_INFINITY);
      });
    });

    describe('Get shortest path', () => {

      beforeEach(() => {
        g.connect(1,2,2);
        g.connect(0,1,1);
        g.connect(2,3,2);
        g.connect(0,3,5);
        g.connect(3,4,1);
        g.connect(2,4,4);
        g.connect(1,4,6);
        g.connect(2,0,2);
      });

      it('show return the shortest path', ()=>{
        let weighted_matrix : number[][] = g.getWeightedMatrix;
        let infinity = Number.POSITIVE_INFINITY;
        console.log("W", weighted_matrix);
        let expected_matrix : number[][] = [
          [infinity, 1, 2, 5, infinity],
          [1, infinity, 2, infinity, 6],
          [2, 2, infinity, 2, 4],
          [5, infinity, 2, infinity, 1],
          [infinity, 6, 4, 1, infinity]
        ];
        console.log("E", expected_matrix);
        expect(weighted_matrix).to.eql(expected_matrix);
        let out = g.shortestPath(0,4);
        expect(out[0]).to.eql([0,2,3,4]);
        expect(out[1]).to.equal(5);

        let out2 = g.shortestPath(2,1);
        expect(out2[0]).to.eql([2,1]);
        expect(out2[1]).to.equal(2);
      });
    });



});
