document.write('<script src="../js/config.js"></script>');

function init_DB(){
  init()
}

function pushDB(name) {
  let database = firebase.database();
  let type
  
  document.getElementsByName('gridRadios').forEach((node) => {
    if(node.checked)  {
      type = node.value
    }
  })

  const storage = firebase.storage();
                    
  setTimeout(()=>{

  storage.ref(`images/`+name).getDownloadURL()
      .then((Img_Url) => {
        alert("신청 완료")
        database.ref('Event').push({
          InputOrganizer: document.getElementById("inputOrganizer").value,
          InputEvent: document.getElementById("inputEvent").value,
          EventType: type,
          Start_date: document.getElementById("st_date").value,
          End_date: document.getElementById("ed_date").value,
          InputAddress: document.getElementById("inputAddress").value,
          InputName: document.getElementById("inputName").value,
          InputPhone: document.getElementById("inputPhone").value,
          InputEmail: document.getElementById("inputEmail").value,
          ImgUrl: Img_Url
        });
  })
},4000);
}

function ImgListener(){
  
    const storageRef = firebase.storage().ref();
    let selectedFile;
    let name;
  
    // File 선택
    document.getElementById('fileup').addEventListener('change', e => {
        selectedFile = e.target.files[0];
        name = selectedFile.name
    });
  
    // File 업로드
    document.getElementById('submit').addEventListener('click', () => {
        
        storageRef
                .child(`images/${selectedFile.name}`)
                .put(selectedFile)
                .on('state_changed', snapshot => {
                                            
                                        }, error => {
                                            
                                        }, () => {
                                            
                                        }
                );
        pushDB(name)
    });
}
