document.write('<script src="js/config.js"></script>');

function init_DB(){
  init_DB();
}

function del(){
  let database = firebase.database();

  const DB = database.ref('Event/');

  DB.on('child_added', function(data){
    console.log(data.val())
    alert(JSON.stringify(data.val(),null,3)
    )
  })

}