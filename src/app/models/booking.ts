export default class Booking {
    custid: number | null;
    tableid: number | null;
     noperson: number | null;
     occasion:String="";
     datetime:Date |null;
     restid:number|null;

    constructor(datetime:Date|null,noperson: number | null,restid: number | null, custid: number|null, tableid: number | null) {
      this.restid = restid;
      this.custid = custid;
      this.tableid = tableid;
      this.noperson=noperson;
      this.datetime=datetime;
    }
  }
  