(this["webpackJsonpbeef-bot"]=this["webpackJsonpbeef-bot"]||[]).push([[0],{144:function(e,n,t){},174:function(e,n,t){},175:function(e,n,t){},176:function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"typingSet",(function(){return B})),t.d(a,"messageAdd",(function(){return V}));var o=t(0),i=t.n(o),r=t(27),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=t(28),g=t(52),c=t.n(g),k=t(61),m=t(53),u=t.n(m),h=t(54),j=t.n(h),b=t(55),v=t.n(b),p=(t(144),function(e){var n=e.value,t=e.onChange,a=e.onSubmit,o=!n;return i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a()},className:"message-input"},i.a.createElement("input",{value:n,onChange:function(e){return t(e.currentTarget.value)},placeholder:"Type een bericht..."}),i.a.createElement("button",{type:"submit",disabled:o},i.a.createElement("img",{src:o?j.a:v.a,alt:"send"})))}),f=t(56),w=t.n(f),z=t(57),E=t.n(z),y=t(2),I=t.n(y),A=t(26),S=t.n(A),D=t(58),O=new w.a,W=function(e){var n=E()(e),t=O.pickone(["filthy","life-lessons","quotes"]);return(I()(n,"vunzig")||I()(n,"vies")||I()(n,"goor"))&&(t="filthy"),(I()(n,"uitspraak")||I()(n,"quote")||I()(n,"citaat"))&&(t="quotes"),(I()(n,"advies")||I()(n,"les")||I()(n,"raad"))&&(t="life-lessons"),O.pickone(S()(D,t))},H=t(59),N=t.n(H),T=t(9),J=t(60),M=t.n(J),Z=function(e,n){switch(n.type){case"TYPING_SET":return Object(T.a)(Object(T.a)({},e),{},{typing:n.payload});case"MESSAGE_ADD":return Object(T.a)(Object(T.a)({},e),{},{messages:M()(e.messages,[n.payload])});default:return e}},B=function(e){return{type:"TYPING_SET",payload:e}},V=function(e){return{type:"MESSAGE_ADD",payload:e}},C={messages:[{body:"Hee Dikbil!",bot:!0,createdAt:new Date}],typing:!1},x=Z,P=function(){var e=Object(o.useReducer)(x,C),n=Object(d.a)(e,2),t=n[0],r=n[1],s=Object(o.useState)(""),l=Object(d.a)(s,2),g=l[0],m=l[1];Object(o.useLayoutEffect)((function(){r(a.typingSet(!0)),setTimeout((function(){r(a.messageAdd({body:"Wat wil je van me horen? Een uitspraak, wat goed advies of iets vunzigs?",bot:!0,createdAt:new Date})),r(a.typingSet(!1))}),1e3)}),[r]);return i.a.createElement("main",null,i.a.createElement("section",{className:"app"},i.a.createElement("header",null,i.a.createElement("img",{src:N.a,alt:"BeefBot"}),i.a.createElement("section",null,i.a.createElement("h1",null,"BeefBot"),i.a.createElement("h2",null,t.typing?"aan het typen...":"online"))),i.a.createElement("section",{className:"messages"},i.a.createElement("section",null,c()(t.messages,(function(e,n){return i.a.createElement("section",{className:u()("message",{right:!e.bot}),key:n},i.a.createElement("p",null,i.a.createElement("span",null,e.body),i.a.createElement("span",null,Object(k.a)(e.createdAt,"HH:mm"))))})))),i.a.createElement(p,{value:g,onChange:m,onSubmit:function(){m(""),r(a.messageAdd({body:g,createdAt:new Date}));var e=W(g);setTimeout((function(){r(a.typingSet(!0)),setTimeout((function(){r(a.typingSet(!1)),r(a.messageAdd({body:e,bot:!0,createdAt:new Date}))}),25*e.length)}),500)}})))},R=(t(174),t(175),document.getElementById("root")),q=i.a.createElement(i.a.StrictMode,null,i.a.createElement(P,null));R&&R.hasChildNodes()?Object(r.hydrate)(q,R):Object(r.render)(q,R),function(e){if("serviceWorker"in navigator){if(new URL("/beef-bot",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/beef-bot","/service-worker.js");s?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(n,e)}))}}()},54:function(e,n,t){e.exports=t.p+"static/media/send.56bc1a62.svg"},55:function(e,n,t){e.exports=t.p+"static/media/send-accent.5a1593c0.svg"},58:function(e){e.exports=JSON.parse('{"filthy":["Liefde gaat door de maag. De tafel staat een beetje scheef nu.","Vrouwen zijn als erwtensoep. Zodra het gaat pruttelen, moet de worst erin.","Je mag alles van me lenen behalve me piemel want die is van Koen.","Windows is net als aids. Het wordt in leven gehouden door aids remmers.","Een prima doos, ik zou zeggen een prima appetijtelijk broodje.","Het zijn maar tieten en een poes, heb er meer gezien dan chocolade gegeten.","Ik ga altijd voor het zingen de kerk uit.","Zelfs de winter schilder heeft meer scheuren gedicht dan jij poezen.","Ik vraag ook altijd aan de dames of ik even mag proeven.","Ik heb wel goordere dingen gedaan voor minder geld.","Ik voel me net een stripper.","Ik heb meer zaad te verbranden dan geld.","Ik heb m\'n handen wel eens in viezere dingen gestoken.","Vandaag zijn we een hoer want vandaag het is uitverkoop.","Het is net als een condoom, zonder mag, maar er kleven risico\u2019s aan.","Soa\u2019s zijn zo overrated, statistisch gezien win je 10x eerder de jackpot bij de Staatsloterij dan je aids krijgt. Nou heb ik nog nooit de jackpot gewonnen.","Ik ben beertje kolakol, neuken doe ik voor de lol, met mijn grote berenpik neuk ik alle wijven dik.","Ik ga naar de HOERENNN","Ik ben een hoeren loperrrr.. en mijn hoer loopt over mij heen.","Ik ben een prostituee en mijn ouders zitten er niet mee, en Bob zit er niet mee.","Denk je dat je klaar bent, zie je dat je \'m er scheef heb in gestopt.","Sommige vrouwen zijn als McDonalds, soms heb je er gewoon trek in en daarna heb je er spijt van.","Ik heb liever een slet dan een hoer. Een slet kan nog kiezen, een hoer niet.","My girlfriend thinks browserstack is a stack of whores","Een blondje moet je af en toe afstoffen, mee pronken en volblaffen.","Een hoer moet je ook van te voren betalen. Dan ben jij nog geil. Maar wij zijn al volop aan het neuken, maar er is nog geen cent betaald.","Vrouwen zijn als houtrot; de kieren moeten gevuld worden.","Het is net zoals met een meisje je mag tot het randje en niet in het gaatje.","Een vrouw is als een oliebol, in het begin is ze lekker en daarna kots je d\'r uit.","Het is het zelfde als een hoer: Zij vraagt normaal \u20ac100,- en als ze \u20ac20,- gaat vragen krijgt ze het tijdelijk druk maar moet ze wel 5 keer zo hard neuken.","Ik dacht dat je Spiderman moest bellen. Ik dacht dat ze spinnenrag tussen d\'r benen had.","No flyzone, daar hoef ik nooit op de landingsbaan te landen, Zij is van de mount everest afgevallen zo in de grotten van toorabora.","Zij is van de mount everest afgevallen zo in de grotten van toorabora.","Je moet goed kijken waar je je zaad in kwijt kan.","Jezus, die heeft een vlaggetje nodig om aan te geven wat de voor- en achterkant is.","Ik begrijp dat hij ook een stukje penis enlargement nodig heeft.","Als je geen hoer bent, ben je een bitch.","Als ik met een wijf een drankje drink denk ik ook dat we gaan neuken. Dan wordt ik afgewezen en dan moet ik ook niet kinderachtig doen. Ik heb dan blauwe ballen.","Als je een kut had gehad...","Oooh Menno wat ben ik toch een hoerenloper.","Wij zijn het mooiste meisje van de klas, iedereen wil met ons neuken! Maar wij bepalen met wie!","Ik ben amuzikaal, ik kan geen noot herkennen behalve mijn eigen.","Ik heb liever een soa dan gevoelens.","Ik voelde me gister net als Sinterklaas op pakjesavond, het strooigoed was op en m\'n zak leeg.","Ik heb geen glijmiddel nodig. Ik ben een slangenbezweerder maar dan voor poezen.","Als de sluis toch open moet kan je er net zo goed geld voor vragen.","Als je dat nog een keer doet wordt je morgen wakker met je pik in je bek."],"life-lessons":["Beter moe van het werk dat je hebt dan moe van het denken aan het werk dat je niet hebt.","Beter met een big bang eruit, dan kwijnend aan een ernstige ziekte.","Een percentage van het personeel is vleeswaren, als het verrot is gooi je het weg.","Een reiziger houd je nooit tegen.","Je bent pas goed bezig als je priv\xe9 leven naar de klote gaat.","Als je geschoren wordt moet je stil zitten.","Je moet delen om te kunnen vermenigvuldigen.","We zijn zo kort op aarde dat je jezelf snel financieel moet verrijken.","Als je weet dat het gaat vriezen in november moet je in de zomer nootjes verzamelen.","Voor ik ergens mee begin\u2026 Ik wil eerst weten of ze alleen willen neuken, maar niet willen koken.","Je moet niet de brandweer bellen voor je in de fik staat.","Je weet pas dat je goed bent als andere mensen over je lullen.","Ze kunnen alles van je afpakken, behalve je talent.","If it flies, floats, rides or fucks, don\'t buy it; rent it.","Je kan geen tomatensoep maken van komkommers.","Een BV is net als trouwen. Eerst aan elkaar snuffelen en als het bevalt duik je in bed.","In elke relatie heb je toch wel eens een discussie. Dat is toch ook geen vreemdgaan?","Verdeel en heers!","Ze is net als een gaatje in je kies. Als het verholpen is, denk je waarom heb ik er zolang mee doorgelopen.","Vroege vogels hebben dikke wormen.","De enige manier waarop waardevol personeel de zaak verlaat is in een bodybag.","Ik ga toch niet met de ober vechten, dat los ik wel op met de directeur.","Soms is de liefde voorbij. Tijd voor een nieuw meisje.","Tijdens een vlucht heb je liever dat de stewardess overlijdt dan de piloot."],"quotes":["Ik heb gewoon zin om iemand eens op zijn kop te schijten.","Moet ik wat liefs zeggen dan? Rust zacht.","Ik ben echt een vieze vuile verwende klootzak.","Ze lachen zich nu een krul in hun lul.","Wat zit je haar lem.","Heb je je matras opgegeten?","Zij is McDonalds en jij bent een 4 sterren diner!","Dagobeef Duck","Ik heb liever poen dan dat ik intern weer met mijn benen wijd moet","Zeiken aan mijn bureau; dan krijg je van mij je vliegbrevet. Dan vlieg je zo de deur uit.","Het bewijs is weer geleverd dat ik altijd gelijk heb.","Ik heb al zoveel draken verslagen. Dat ik in Mario al bij de prinses ben uitgekomen. Mijn leven is het spel zoals Mario. Elke keer kom ik weer zo\'n draak tegen. Je moet genoeg draken verslaan om bij de prinses uit te komen. Je weet het toch anders niet.","We zijn geen Sinterklaas!","Ik wil dat we een oorlogskas hebben!","Het is godverdomme deze week Circus-Renz-Tijd! Ik dacht dat dat nu wel eens afgelopen was.","Vind je het goed als ik me pepernoot aan je promoot?","Oho Peter, oho Peter, geef me nog een halve meter","Oooh Menno, ik wil op je kop schijten!","We grossieren in vreugde en niet in verdriet.","Zo en zo!","Wat betreft jullie 4 wensen kan ik er 3 in vervulling laten komen en 1 niet.","De tropen dagen die er waren zullen zwoele zomerdagen worden","TAPE is nog een puber.. Die heeft begeleiding nodig.","Het is een aal die je net niet kan pakken.","Ik ben op oorlogspad!","Het is een aal die je net niet kan pakken.","9 van de 10 keer krijg ik gelijk\u2026 Wen er maar aan.","Van een brandweerladder naar een keukentrapje","Als zilverzand door je handen heen glippen. Ja echt: zilverzand.","Het is net als met je vriendin, de eerste keer betaal je wat, dan nog wat en dan hebben ze je paypal en credit card.","Ik ben net zo blij als een koe op de eerste lente dag.","Die gast is zo traag als dikke stront door een theezeef."]}')},59:function(e,n,t){e.exports=t.p+"static/media/beef-bot.f58e467b.jpg"},62:function(e,n,t){e.exports=t(176)}},[[62,1,2]]]);
//# sourceMappingURL=main.0d53d3ad.chunk.js.map