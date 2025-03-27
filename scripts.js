function cal()
{
    var cbr=document.getElementById('cbr').value;
    var mbr=document.getElementById('mbr').value;
    var brg=document.getElementById('brg').value;
    var mfr=document.getElementById('mfr').value;
    var cc=document.getElementById('cc').value;
    var fcs=document.getElementById('fcs').value;
    var fls=document.getElementById('fls').value;
    var snd=document.getElementById('snd').value;
    var pss=document.getElementById('pss').value;
    var swp=document.getElementById('swp').value;
    var total=(189*cbr)+(229*mbr)+(99*brg)+(219*mfr)+(199*cc)+(149*fcs)+(79*fls)+(159*snd)+(159*pss)+(119*swp);
    var dis=0;
    var grs=0;
    document.getElementById('total').innerText=total;
    if(total<500){
        dis=0;
    }
    else if(total>=500 && total<1000){
        dis=0.1*total;
    }
    else
    {
        dis=Math.min(0.25*total,250);
    }
    grs=total-dis;
    document.getElementById('dis').innerText=dis;
    document.getElementById('bill').innerText=grs;
}
function rese()
{
   document.getElementById('cbr').value=0;
   document.getElementById('mbr').value=0;
    document.getElementById('brg').value=0;
    document.getElementById('mfr').value=0;
    document.getElementById('cc').value=0;
    document.getElementById('fcs').value=0;
    document.getElementById('fls').value=0;
    document.getElementById('snd').value=0;
    document.getElementById('pss').value=0;
    document.getElementById('swp').value=0;
    document.getElementById('dis').innerText=0;
    document.getElementById('bill').innerText=0;
    document.getElementById('total').innerText=0;
}