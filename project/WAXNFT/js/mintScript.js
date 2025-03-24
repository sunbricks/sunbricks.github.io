// async function connect() {
//     const accounts = await klaytn.enable();
//     if (klaytn.networkVersion === 8217) {
//         console.log("메인넷");
//     } else if (klaytn.networkVersion === 1001) {
//         console.log("테스트넷");
//     } else {
//         alert("ERROR: 클레이튼 네트워크로 연결되지 않았습니다!");
//         return;
//     }
//     account = accounts[0];
//     caver.klay.getBalance(account)
//         .then(function (balance) {
//             document.getElementById("myWallet").innerHTML = '연결완료'
//             // document.getElementById("myKlay").innerHTML = `잔액: ${caver.utils.fromPeb(balance, "KLAY")} KLAY`
//         });
//     await check_status();
// }