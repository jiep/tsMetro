import Graph from '../../src/graphs/Graph';
import GraphClass from '../../src/graphs/GraphClass';

import * as mocha from 'mocha';
import { expect } from 'chai';

describe('Graph', () => {

    var graph : Graph;
    var directed_graph : Graph;
    var adjacency_matrix : number[][] = [[0,1,1],[1,0,1],[1,1,0]];


    describe('Constructor', () => {

      it('should create a new UNDIRECTED `Graph`', () => {
          graph = new Graph(GraphClass.UNDIRECTED, 3);
          expect(graph.getAdjMatrix).to.eql([[1,1,1],[1,1,1],[1,1,1]]);
          expect(graph.getClass).to.equal(GraphClass.UNDIRECTED);
      });

      it('should create a new DIRECTED `Graph`', () => {
          directed_graph = new Graph(GraphClass.DIRECTED, 3);
          expect(directed_graph.getAdjMatrix).to.eql([[1,1,1],[1,1,1],[1,1,1]]);
          expect(directed_graph.getClass).to.equal(GraphClass.DIRECTED);
      });
    });

    describe('Connect', () => {

      before(()=>{
          directed_graph = new Graph(GraphClass.DIRECTED, 3);
      });

      it('should create a new edge between the two given nodes in a directed graph', () => {
          directed_graph.connect(1,2);
          expect(directed_graph.getAdjMatrix).to.eql([[1,1,1],[1,1,1],[1,1,1]]);
      });

      before(()=>{
          graph = new Graph(GraphClass.UNDIRECTED, 3);
      });

      it('should create a new edge between the two given nodes in an undirected graph', () => {
          graph.connect(1,2);
          expect(graph.getAdjMatrix).to.eql([[1,1,1],[1,1,1],[1,1,1]]);
      });

    });

    describe('Disconnect', () => {

      before(()=>{
          directed_graph = new Graph(GraphClass.DIRECTED, 3);
      });

      it('should remove the edge between the two given nodes in a directed graph', () => {
          directed_graph.disconnect(1,2);
          expect(directed_graph.getAdjMatrix).to.eql([[1,1,1],[1,1,0],[1,1,1]]);
      });

      before(()=>{
          graph = new Graph(GraphClass.UNDIRECTED, 3);
      });

      it('should remove the edge between the two given nodes in an undirected graph', () => {
          graph.disconnect(1,2);
          expect(graph.getAdjMatrix).to.eql([[1,1,1],[1,1,0],[1,0,1]]);
      });

    });

    describe('Number of vertices', () => {
      it('should return the number of nodes of the graph', () => {
        expect(graph.vertices()).to.equal(3);
      });
    });

    describe('Is connected', () => {
      it('should return if the nodes are connected', () => {
        expect(graph.areConnected(1,2)).to.equal(false);
      });
    });



});
