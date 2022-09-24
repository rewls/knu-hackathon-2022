document.write('<script src="js/config.js"></script>');

function initDB(){
  init_DB();
}

function push() {
  let database = firebase.database();


  alert("전송 완료");
  
  //firebase에 쓰기
  database.ref('Event').push({
      Name: document.getElementById("name").value,
      Where: document.getElementById("where").value,
      start_date: document.getElementById("stdate").value,
      end_date: document.getElementById("eddate").value,
      who: document.getElementById("who").value
  });
}

