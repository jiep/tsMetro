export default class Station {

    private id: number;
    private name: string;

    constructor(id:number, name: string) {
        this.name = name;
        this.id = id;
    }

    get getName(): string {
      return this.name;
    }

    get getId(): number {
      return this.id;
    }

    set setName(name:string){
      this.name = name;
    }

    set setId(id:number){
      this.id = id;
    }

}
