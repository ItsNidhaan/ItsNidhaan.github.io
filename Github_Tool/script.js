// SEACRCH
 const btn = document.getElementById('btn1');
 const img1 = document.getElementById('uImg');
 const uName = document.getElementById('uName');
 const uRep = document.getElementById('uRep');
 const uFw = document.getElementById('uFw');
 const uFg = document.getElementById('uFg');
 
 btn.addEventListener("click", getData);

 function getData()
 {
    let user = document.getElementById('search').value;
     console.log(user);

     fetch("http://ropani.herokuapp.com/api/iteminfo")
      .then(function (response) {
        if(!response.ok)
        {
          throw Error(response.status.Text);
        }
          //return response.json(); 
          console.log(response.data);
          console.log("hello")
        })
        
 };