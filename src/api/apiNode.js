import axios from "axios";

export class apiNodeJS {
  static async postUploadToNode(url, data) {
    var config = {
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };
    return await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
