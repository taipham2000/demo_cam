import axios from "axios";

export class apiOdoo {
  static async postDetect(url, data) {
    var config = {
      method: "POST",
      url: url,
      headers: {
        Authorization: "4|xGXadAAiwx1Zo0kuGNPluXS03hVPttaTu2URBaZO",
      },
      data: data,
      timeout: 90000,
    };
    return await axios(config)
      .then(function (response) {
        return JSON.stringify(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  static async postData(url, data, headers) {
    var config = {
      method: "POST",
      url: "http://ec2-13-250-133-136.ap-southeast-1.compute.amazonaws.com/api/ocr/scan?sm=auto&p=0",
      headers: {
        Authorization: "4|xGXadAAiwx1Zo0kuGNPluXS03hVPttaTu2URBaZO",
      },
      data: data,
      timeout: 90000,
    };
    return await axios(config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  static async getData(url) {
    return await axios.get(url);
  }
}
