document.write('<script src="js/config.js"></script>');

function init_DB(){
  init();
}

function del(id){
  let database = firebase.database();

  
  
  const DB = database.ref('Event/');
  
  database.ref('Event/'+id).remove()

  DB.on('child_added', function(data){
    console.log(data.val().who)
    alert(JSON.stringify(data.val(), null, 3)
    )
  })
}

