function update()
{
var c=1;
var btn=document.getElementById("btn");
var disp=document.getElementById("disp");
disp.innerHTML=c;
btn.onclick=function()    
{
    c++;
    disp.innerHTML=c;
}
}
function confirm()
{
    alert("Hola")
//   let ans= confirm("Are u sure?");
//   if(ans)
//   {
//       alert("Done");
//   }
//   else
//   {
//       alert("transaction cancelled");
//   }
}