document.write('<script src="https://www.gstatic.com/firebasejs/8.6.5/firebase.js"></script>');

function init_DB(){


  const firebaseConfig = {
    apiKey: "AIzaSyANW9B69OXwB3MuMysbppB6we8uI4l-2XI",
    authDomain: "runners-5383d.firebaseapp.com",
    databaseURL: "https://runners-5383d-default-rtdb.firebaseio.com",
    projectId: "runners-5383d",
    storageBucket: "runners-5383d.appspot.com",
    messagingSenderId: "61987349638",
    appId: "1:61987349638:web:41d7cb172782c2662fdd07",
    measurementId: "G-DC3RLVG1K6"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

}



function setdata() {

  //alert("전송 완료");

  const item_count = document.getElementById("item-count");
  let database = firebase.database();
  const DB = database.ref('Event/').orderByChild("End_date");

  let count = 0;
  DB.on('child_added', function(data){
    console.log(data.val())
    //alert(JSON.stringify(data.val(), null, 3))

    count++;
      var templete = `
      <li class="item ${data.val().EventType} col pb-3">
              <a href="https://exco.co.kr/schedule/schedule_view.html?code=P_AGPV56306&ex_cate=1">
                <div class="card shadow-sm zoom">
                  <img class="bd-placeholder-img card-img-top" src="${data.val().ImgUrl}" width="100%">
                  <div class="card-body p-6">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="condition btn-group btn-group-sm btn-border-radius-sm" role="group" aria-label="condition">
                        <button type="button" class="btn btn-danger" style="--bs-btn-border-radius: .7rem;">진행중</button>
                      </div>
                      <div class="small text-muted text-end">
                        <date>${data.val().Start_date}</date>
                        ~&nbsp;<date>${data.val().End_date}</date>
                      </div>
                    </div>
                    <div class="fs-6 text-muted pt-3">${data.val().InputOrganizer}</div>
                    <p class="card-text fs-5 fw-bold">${data.val().InputName}</p>
                  </div>
                </div>
              </a>
            </li>
            `;
    $('.col1').before(templete)

  item_count.textContent = count;

})





  /*
  var dbTestRef = firebase.database().ref('Event/')
  dbTestRef.on('child_added', function(data){
	console.log(data.val())
  var templete = `
  <li class="col pb-1">
            <a href="https://exco.co.kr/schedule/schedule_view.html?code=P_AGPV56306&ex_cate=1">
              <div class="card shadow-sm zoom">
                <img class="bd-placeholder-img card-img-top" src="assets/images/aaaaa.jpg" alt="더골프쇼 in Autumn" width="100%">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group btn-group-sm btn-border-radius-sm" role="group" aria-label="status">
                      <button type="button" class="btn btn-danger" style="--bs-btn-border-radius: .7rem;">진행중</button>
                    </div>
                    <date class="text-muted">2022. 09. 22 ~ 25</date>
                  </div>
                  <div class="fs-6 text-muted pt-3">(주)이엑스스포테인먼트</div>
                  <p class="card-text fs-5 fw-bold">더골프쇼 in Autumn</p>
                </div>
              </div>
            </a>
          </li>
  `;
  $('.container').append(templete)
})*/

}
