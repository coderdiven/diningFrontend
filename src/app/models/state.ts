export default class State {
    stateid: number | null;
    statename: string = "";
  
    constructor(stateid: number | null, statename: string) {
      this.stateid = stateid;
      this.statename = statename;
    }
  }
  