export default class Category {
    catid?: number | null;
    catname: string = "";
    restid: number | null;
  
    constructor(catname: string, restid: number | null) {
      this.catname = catname;
      this.restid = restid;
    }
  }
  