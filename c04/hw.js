const http = require("http"); //C programskiot jazik

function convertMilesToKm(miles) {
  return miles * 1.6;
}

//JSON.parse -> ke go isparsira t.e gi zeme podatocite od JSON formatot -> ova ni vrakja objekt
//JSON.stringify -> ke go pretvori vo JSON objekt

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/convert") {
    let data = "";
    //ke slusa na portata 8080 za nadoagjacki baranja
    req.on("data", (chunk) => {
      // ni ovozmuva da gi pribirame podatocite od serverot kako sto toj gi obrabotuva
      data += chunk.toString();
    });

    //slusa koga ke zavrsi baranjeto, sto da vrati
    req.on("end", () => {
      try {
        const parsedData = JSON.parse(data);
        console.log("parsed data", parsedData);
        const convertedVal = convertMilesToKm(parsedData.miles);

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`${parsedData.miles} miles to km: ${convertedVal}`);
      } catch (err) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Invalid input");
      }
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to our conversion app");
  }
});

server.listen(8080);
