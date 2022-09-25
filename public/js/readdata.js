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

function milliesToDate(millies) {
  return Math.floor(millies / (24 * 60 * 60 * 1000)) + 1;
}

function isOngoing(start_date, end_date) {
  const today_millies = new Date().getTime();
  start_millies = new Date(start_date).getTime();
  end_millies = new Date(end_date).getTime();
  if (milliesToDate(today_millies - start_millies) >= 0 && milliesToDate(end_millies - today_millies) >= 0) {
    return 1;
  } else if (milliesToDate(today_millies - start_millies) < 0) {
    return 2;
  }
  return 0;
}

function calculateDDay(start_date) {
  const today_millies = new Date().getTime();
  start_millies = new Date(start_date).getTime();
  const d_day = milliesToDate(start_millies - today_millies);

  return d_day;
}

function status(start_date, end_date) {
  switch (isOngoing(start_date,end_date)) {
    case 0:
      return "마감";
    case 1:
      return "진행중";
    case 2:
      return "D-"+calculateDDay(start_date);
  }
}

function filterStatus(start_date, end_date) {
  switch (isOngoing(start_date,end_date)) {
    case 0:
      return "마감";
    case 1:
      return "진행중";
    case 2:
      return "예정";
  }
}

function setdata() {

  //alert("전송 완료");

  const item_count = document.getElementById("item-count");
  let database = firebase.database();
  const DB = database.ref('Event/').orderByChild("End_date");

  let count = 0;
  DB.on('child_added', function(data){
    //console.log(data.val())
    //alert(JSON.stringify(data.val(), null, 3))

    count++;
      var templete = `
      <li class="item event-block status-block ${data.val().EventType} ${filterStatus(data.val().Start_date, data.val().End_date)} col pb-3">
              <a href=../html/page.html id = '${data.key}'>
                <div class="card shadow-sm zoom">
                  <img class="bd-placeholder-img card-img-top" src="${data.val().ImgUrl}" width="100%">
                  <div class="card-body p-6">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="status btn-group btn-group-sm btn-border-radius-sm" role="group" aria-label="status">
                        <button type="button" class="btn btn-light btn-gray" style="--bs-btn-border-radius: .7rem;">${data.val().EventType}</button>
                        <button type="button" class="btn btn-warning" style="--bs-btn-border-radius: .7rem;">${status(data.val().Start_date, data.val().End_date)}</button>
                      </div>
                    </div>
                    <div class="card-text">
                      <div class="fs-6 text-muted pt-3">${data.val().InputOrganizer}</div>
                      <div class="fs-5 pb-2 fw-bold">${data.val().InputName}</div>
                      <div class="small text-muted">
                        <date class="start-date">${data.val().Start_date}</date>
                        ~&nbsp;<date class="end-date">${data.val().End_date}</date>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <script>
              document.getElementById('${data.key}').addEventListener('click', () => {

                localStorage.setItem("key", "${data.key}");

              });
            </script>
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
