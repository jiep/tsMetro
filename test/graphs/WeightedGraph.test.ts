import WeightedGraph from '../../src/graphs/WeightedGraph';
import GraphClass from '../../src/graphs/GraphClass';

import * as mocha from 'mocha';
import { expect } from 'chai';

describe('WeightedGraph', () => {

    var graph : WeightedGraph;
    var directed_graph : WeightedGraph;


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



});
