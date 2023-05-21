var elYoqilgiButton = document.querySelector('#yoqilgiButton')
var elTexnikButton = document.querySelector('#texnikButton')
var elKontreylerButton = document.querySelector('#kontreylerButton')
var elTaqqoslashButton = document.querySelector('#taqqoslashButton')

var dict = {}

var elId1 = document.querySelector("#one")
var elId2 = document.querySelector("#two")
var elId3 = document.querySelector("#three")
var elId4 = document.querySelector("#four")
var elId5 = document.querySelector("#five")
var elId6 = document.querySelector("#six")
var elId7 = document.querySelector("#seven")
var elId8 = document.querySelector("#eight")
var elId9 = document.querySelector("#nine")
var elId10 = document.querySelector("#ten")
var elId11 = document.querySelector("#eleven")
var elId12 = document.querySelector("#twelve")

var elId13 = document.querySelector("#thirteen")
var elId14 = document.querySelector("#fourteen")
var elId15 = document.querySelector("#fifteen")
var elId16 = document.querySelector("#sixteen")
var elId17 = document.querySelector("#seventeen")
var elId18 = document.querySelector("#eighteen")
var elId19 = document.querySelector("#nineteen")
var elId20 = document.querySelector("#twenty")
var elId21 = document.querySelector("#twenty__one")
var elId22 = document.querySelector("#twenty__two")
var elId23 = document.querySelector("#twenty__three")
var elId24 = document.querySelector("#twenty__four")
var elId25 = document.querySelector("#twenty__five")
var elId26 = document.querySelector("#twenty__six")
var elId27 = document.querySelector("#twenty__seven")
var elId28 = document.querySelector("#twenty__eight")
var elId29 = document.querySelector("#twenty__nine")

var elId102 = document.querySelector("#ikki")
var elId101 = document.querySelector("#bir")
var elId103 = document.querySelector("#uch")
var elId104 = document.querySelector("#tort")
var elId105 = document.querySelector("#besh")
var elId106 = document.querySelector("#olti")
var elId107 = document.querySelector("#yetti")
var elId108 = document.querySelector("#sakkiz")
var elId109 = document.querySelector("#toqqiz")
var elId110 = document.querySelector("#on")
var elId111 = document.querySelector("#onbir")
var elId112 = document.querySelector("#onikki")
var elId113 = document.querySelector("#onuch")
var elId114 = document.querySelector("#ontort")
var elId115 = document.querySelector("#onbesh")
var elId117 = document.querySelector("#onyetti")
var elId118 = document.querySelector("#onsakkiz")
var elId119 = document.querySelector("#ontoqqiz")

var elId121 = document.querySelector("#yigirmabir")
var elId120 = document.querySelector("#yigirma")
var elId122 = document.querySelector("#yigirmaikki")
var elId123 = document.querySelector("#yigirmauch")
var elId124 = document.querySelector("#yigirmatort")





function checkInp(input)
{
  if (isNaN(Number(input))) 
  {
    alert("Faqat son kiriting. Kiritilgan qiymat: " + input);
    return false;
  }
  else{
    return Number(input)
  }
}
    

elYoqilgiButton.addEventListener('click', function(evt){
    evt.preventDefault();
    var inputValue1=checkInp(elId1.value)
    var inputValue2=checkInp(elId2.value)
    var inputValue3=checkInp(elId3.value)
    var inputValue4=checkInp(elId4.value)
    var inputValue5=checkInp(elId5.value)
    var inputValue7=checkInp(elId7.value)
    var inputValue10=checkInp(elId10.value)
    var inputValue11=checkInp(elId11.value)

    dict['s'] = inputValue1

    dict['hsap'] = Number((inputValue2+inputValue3*inputValue4).toFixed(2))
    elId6.placeholder = dict['hsap'] + ' litr/100km'

    dict['w'] = Number((inputValue1*(inputValue3+inputValue5)).toFixed(2))
    elId8.placeholder = dict['w'] + ' t*km'

    dict['qnb'] = Number((inputValue2*0.1*inputValue7).toFixed(2))
    elId9.placeholder = dict['qnb'] + ' litr'

    dict['qn'] = dict['qnb'] + 0.01*(dict['hsap']*inputValue1+inputValue10*dict['w'])*(1+0.01*inputValue11)
    elId12.placeholder = dict['qn'] + ' litr'
});


elTexnikButton.addEventListener('click', function(evt){
    evt.preventDefault();
    
    var inputValue13=checkInp(elId13.value)
    var inputValue14=checkInp(elId14.value)
    var inputValue16=checkInp(elId16.value)
    var inputValue17=checkInp(elId17.value)
    var inputValue18=checkInp(elId18.value)
    var inputValue20=checkInp(elId20.value)
    var inputValue24=checkInp(elId24.value)
    var inputValue25=checkInp(elId25.value)
    var inputValue26=checkInp(elId26.value)
    var inputValue27=checkInp(elId27.value)

    dict['ctx'] = Number((dict['s']*inputValue13/inputValue14).toFixed(2))
    elId15.placeholder = dict['ctx'] + " so'm"

    dict['csh'] = Number(((2*inputValue17 + 10*inputValue18)*1.1*dict['s']/inputValue16).toFixed(2))
    elId19.placeholder = dict['csh'] + " so'm"

    dict['cih'] = Number((inputValue20*1.4*1.228*1.269*dict['s']).toFixed(2))
    elId21.placeholder = dict['cih'] + " so'm"

    dict['cqosh'] = Number(dict['ctx'])+dict['csh']+dict['cih']+352*dict['s']+ dict['qn']*12500
    elId22.placeholder = dict['cqosh'] + " so'm"

    dict['cqosh1km'] = Number((dict['cqosh']/dict['s']).toFixed(2))
    elId23.placeholder = dict['cqosh1km'] + " so'm"

    dict['ca'] = Number((inputValue24/inputValue26 + inputValue25/inputValue27).toFixed(2))
    elId28.placeholder = dict['ca'] + " so'm"

    dict['avto_narxi'] = Number((1.1*(dict['ca']+7381500+262500)/172900).toFixed(2))
    elId29.placeholder = dict['avto_narxi'] + " so'm"

});

elKontreylerButton.addEventListener('click', function(evt){
    evt.preventDefault();

    var inputValue101 = checkInp(elId101.value)
    var inputValue103 = checkInp(elId103.value)
    var inputValue104 = checkInp(elId104.value)
    var inputValue106 = checkInp(elId106.value)
    var inputValue107 = checkInp(elId107.value)
    var inputValue109 = checkInp(elId109.value)
    var inputValue113 = checkInp(elId113.value)
    var inputValue114 = checkInp(elId114.value)

    dict['cns'] = Number((inputValue101*1*58).toFixed(2))
    elId102.placeholder = dict['cns'] + " so'm"

    dict['cnt'] = Number((inputValue101/inputValue103*479).toFixed(2))
    elId105.placeholder = dict['cnt'] + " so'm"

    dict['cnh'] = Number((inputValue104/inputValue106*inputValue107*4870).toFixed(2))
    elId108.placeholder = dict['cnh'] + " so'm"

    dict['cms'] = Number(((1+inputValue109)*731).toFixed(2))
    elId110.placeholder = dict['cms'] + " so'm"

    dict['cmt'] = Number(((1/inputValue103+inputValue109)*15740).toFixed(2))
    elId111.placeholder = dict['cmt'] + " so'm"

    dict['cmh'] = Number((1/inputValue103*1.6*18256).toFixed(2))
    elId112.placeholder = dict['cmh'] + " so'm"

    dict['cpi'] = Number(((inputValue113+inputValue114)*0.865).toFixed(2))
    elId115.placeholder = dict['cpi'] + " so'm"

    dict['ce'] = Number(((inputValue113*73.84/10000+152.35*inputValue109*0.5)*1.2*71).toFixed(2))
    elId117.placeholder = dict['ce'] + " so'm"

    dict['jami_vagon'] = Number((dict['cns']+dict['cnt']+dict['cnh']+dict['cms']+dict['cmt']+dict['cmh']+dict['cpi']+dict['ce']).toFixed(2))
    elId118.placeholder = dict['jami_vagon'] + " so'm"

    dict['vagon_tirkama'] = Number((dict['jami_vagon']/inputValue101).toFixed(2))
    elId119.placeholder = dict['vagon_tirkama'] + " so'm"
});

elTaqqoslashButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    var inputValue120 = checkInp(elId120.value)

    dict['s'] = checkInp(elId1.value)

    avto_tirkama_narxi = Number((dict['avto_narxi']+dict['cqosh1km']).toFixed(2))
    kont_tirkama_narxi = Number((dict['vagon_tirkama']+dict['cqosh1km']).toFixed(2))
            
    avto_jami = Number((inputValue120*dict['s']*avto_tirkama_narxi).toFixed(2))
    kont_jami = Number((inputValue120*dict['s']*kont_tirkama_narxi+32288639.04).toFixed(2))

    elId121.placeholder = avto_tirkama_narxi + " so'm"
    elId122.placeholder = kont_tirkama_narxi + " so'm"
    elId123.placeholder = avto_jami + " so'm"
    elId124.placeholder = kont_jami + " so'm"
 
});