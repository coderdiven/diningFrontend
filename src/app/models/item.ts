export default class Item{
    restid: number | null;
    catid: number | null;
     itemname:String="";
     description:String="";
     price:number|null;
     status:number|null;

    constructor(restid: number | null,catid: number | null,itemname:string="",description: string="",price: number | null,status: number | null) {
      this.restid = restid;
      this.catid = catid;
      this.itemname=itemname;
      this.description=description;
      this.price=price;
      this.status=status;
    }
  }
  