export default class City {
    cityid: number | null;
    cityname: string = "";
    stateid: number | null;
  
    constructor(cityid: number | null, cityname: string, stateid: number | null) {
      this.cityid = cityid;
      this.cityname = cityname;
      this.stateid = stateid;
    }
  }
  