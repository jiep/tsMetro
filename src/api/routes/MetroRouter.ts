import {Router, Request, Response, NextFunction} from 'express';
import {MetroMadridService} from "../services/MetroMadridService";

export class MetroRouter {
  router: Router;

  constructor() {
    this.router = Router({mergeParams: true});
    this.init();
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(MetroMadridService.getAll());
  }

  public getOne(req: Request, res: Response, next: NextFunction) {
    let query = parseInt(req.params.id);
    let station = MetroMadridService.findById(query);
    if (station) {
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          station
        });
    }
    else {
      res.status(404)
        .send({
          message: 'No station found with the given id.',
          status: res.status
        });
    }
  }

  public getShortestPath(req: Request, res: Response, next: NextFunction){

    let source_id = parseInt(req.params.source);
    let destination_id = parseInt(req.params.destination);
    if(Number(source_id) && Number(destination_id)){
      let source = MetroMadridService.findById(source_id);
      let destination = MetroMadridService.findById(destination_id);

      let path = MetroMadridService.getShortestPath(source, destination);

      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          path
        });
    }else{
      res.status(200)
        .send({
          message: 'One of the specified parameters is not a valid id.',
          status: res.status
        });
    }


  }

  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.getOne);
    this.router.get('/:source/:destination', this.getShortestPath);
  }

}

const metroRoutes = new MetroRouter();
metroRoutes.init();

export default metroRoutes.router;
