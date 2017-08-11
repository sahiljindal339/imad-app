console.log('Loaded!');
var img=document.getElementById('mdi');
var marginLeft=0;
function w(){
    marginLeft=marginLeft+10;
    img.style.marginnLeft-marginLeft+'px';
    
    
}
img.onclick=function(){
var interval=setInterval(w,100);
};