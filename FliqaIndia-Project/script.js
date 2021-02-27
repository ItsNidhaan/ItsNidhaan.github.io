let like=document.getElementById('numLike');
let dislike=document.getElementById('numDislike');
let reset=document.getElementById('set');
var myModal = document.getElementById('exampleModal')

like.addEventListener("click", incrementLike);
dislike.addEventListener("click",incrementDislike);
reset.addEventListener("click",getReset)
var num=0;
var nom=0;


//FUNCTION TO OPEN LOGIN POPUP WINDOW
function getReset()
{
    if(nom==0)
    {
        if(num==1)
        {
            var likeValue= document.getElementById('likeValue');
            likeValue.innerHTML++;
            num=3;
            nom=-1;
            myModal.remove();
        }
        else if(num==2)
        {
            var dislikeValue= document.getElementById('dislikeValue');
            dislikeValue.innerHTML++;
            num=4;
            nom=-1;
            myModal.remove();
        } 
    }  
};


//FUNCTION TO INCREMENT  LIKE
function incrementLike()
{
    num++;
};


//FUNCTION TO DECREMENT DISLIKE
function incrementDislike()
{
    if(num==0)
    {
        num=num+2;
    }
    //TO UPDATE LIKE VALUE IF IT IS PRESSED ONCE
    if(num==3)
    {
        var likeValue= document.getElementById('likeValue');
        likeValue.innerHTML--;
        num++;
    }
};