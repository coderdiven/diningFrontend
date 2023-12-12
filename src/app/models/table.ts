export default class Table {
    tableid: number | null;
    tablenumber: number | null;
    capacity: number | null;
    status: number | null;
    restid: number | null;
    
    constructor(tableid: number | null,tablenumber: number | null,capacity: number | null,status: number | null,restid: number | null) {
      this.tableid = tableid;
      this.tablenumber = tablenumber;
      this.capacity = capacity;
      this.status = status;
      this.restid = restid;

    }
  }
  