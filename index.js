const nftName = "XPass NFT";
const description = "뮤지컬 공연 관람을 위한 티켓 : X-PASS and more...";
const hiddenImgUrl = "https://gametok.co.kr/metadata/images/sample/before-xpass.png";
const totalNum = 1000;

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "XPass","value": "발행전"}]}`;
        let fs = require("fs");
        fs.writeFile(`json/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}