//Deck of cards
var Deck = ["Cards/rz5ojxtoakhu2ft.png1865","Cards/t7zhvddch4nqbvv.png726","Cards/pub80kivfhyy2my.png730","Cards/cvqpc2hswj0p4f8.png1773","Cards/5hhk92dk0y3a58w.png1089","Cards/2okjy7jm4jyfqcd.png1872","Cards/c0jei2n4ub2dl85.png1485","Cards/c5dv4cai8mnnizy.png1254","Cards/3cx8vs6v5ul29z6.png1261","Cards/9afydvaf4na3854.png157","Cards/8t5z2ky7tzns67u.png1803","Cards/4vnfjyqto2qbpmx.png1149","Cards/3d5u840q24jjdpv.png690", 
            "Cards/3imo0te0xel0w8k.png1865","Cards/fc6le4ueaybp37h.png726","Cards/qa8iksszesvmf2j.png730","Cards/mewffdhyfrlb12u.png1773","Cards/t7f4hvt61len90n.png1089","Cards/pkk6o4sl5xsyfwv.png1872","Cards/uyvxrjt082a4yo5.png1485","Cards/nklonrek9njkcpo.png1254","Cards/rzqrskjr6b5iatt.png1261","Cards/su8j3of1wsfo8mh.png157","Cards/pxcxtqj2yo8uyo7.png1803","Cards/5v23nk53qm1qn8d.png1149","Cards/neey4dyouoqnnk5.png690",
            "Cards/p8uqe087aeouwy2.png1865","Cards/keyf8pcelprejqy.png726","Cards/upi0n11enckc7ky.png730","Cards/xs5yx9cnujlrsma.png1773","Cards/wzk4ib1y7of67uu.png1089","Cards/rul8rzt82l4ckyi.png1872","Cards/uc31plr5p360e3u.png1485","Cards/30vdw6woyxhst1.png1254","Cards/qfbdmp4p1d48u7o.png1261","Cards/szv6mu4ftxok85i.png157","Cards/o7ombx70yfdvukx.png1803","Cards/ks52yyjcvzk05jh.png1149","Cards/wv09vn1f8ivnf0a.png690",
            "Cards/v7zk0jynjdtdmjm.png1865","Cards/1356u17a4ay0u7z.png726","Cards/0xlbfx6ekn5nse6.png730","Cards/ilokmffhy6vr5xc.png1773","Cards/cmw0yhjybj3bjn7.png1089","Cards/1jv51xi5xk4ciri.png1872","Cards/mc5bly0qhienxtp.png1485","Cards/abfft195hq0qayi.png1254","Cards/cjoyuea9ljhvj2s.png1261","Cards/1r230fb554lc3rs.png157","Cards/lo1n8xk4ohqljpd.png1803","Cards/khmn5m0ccb7ilty.png1149","Cards/x1pv3etrh0dzwzw.png690",];
// shuffle cards function
var DeckClone = Deck;
var DeckClone2 = ['Cards/2S.png2', 'Cards/3S.png3', 'Cards/4S.png4', 'Cards/5S.png5', 'Cards/6S.png6', 'Cards/7S.png7', 'Cards/8S.png8', 'Cards/9S.png9', 'Cards/10S.png10', 'Cards/JS.png11', 'Cards/QS.png12', 'Cards/KS.png13', 'Cards/AS.png1',
    'Cards/2H.png2', 'Cards/3H.png3', 'Cards/4H.png4', 'Cards/5H.png5', 'Cards/6H.png6', 'Cards/7H.png7', 'Cards/8H.png8', 'Cards/9H.png9', 'Cards/10H.png10', 'Cards/JH.png11', 'Cards/QH.png12', 'Cards/KH.png13', 'Cards/AH.png1',
    'Cards/2C.png2', 'Cards/3C.png3', 'Cards/4C.png4', 'Cards/5C.png5', 'Cards/6C.png6', 'Cards/7C.png7', 'Cards/8C.png8', 'Cards/9C.png9', 'Cards/10C.png10', 'Cards/JC.png11', 'Cards/QC.png12', 'Cards/KC.png13', 'Cards/AC.png1',
    'Cards/2D.png2', 'Cards/3D.png3', 'Cards/4D.png4', 'Cards/5D.png5', 'Cards/6D.png6', 'Cards/7D.png7', 'Cards/8D.png8', 'Cards/9D.png9', 'Cards/10D.png10', 'Cards/JD.png11', 'Cards/QD.png12', 'Cards/KD.png13', 'Cards/AD.png1',
    'Cards/2S.png2', 'Cards/3S.png3', 'Cards/4S.png4', 'Cards/5S.png5', 'Cards/6S.png6', 'Cards/7S.png7', 'Cards/8S.png8', 'Cards/9S.png9', 'Cards/10S.png10', 'Cards/JS.png11', 'Cards/QS.png12', 'Cards/KS.png13', 'Cards/AS.png1',
    'Cards/2H.png2', 'Cards/3H.png3', 'Cards/4H.png4', 'Cards/5H.png5', 'Cards/6H.png6', 'Cards/7H.png7', 'Cards/8H.png8', 'Cards/9H.png9', 'Cards/10H.png10', 'Cards/JH.png11', 'Cards/QH.png12', 'Cards/KH.png13', 'Cards/AH.png1',
    'Cards/2C.png2', 'Cards/3C.png3', 'Cards/4C.png4', 'Cards/5C.png5', 'Cards/6C.png6', 'Cards/7C.png7', 'Cards/8C.png8', 'Cards/9C.png9', 'Cards/10C.png10', 'Cards/JC.png11', 'Cards/QC.png12', 'Cards/KC.png13', 'Cards/AC.png1',
    'Cards/2D.png2', 'Cards/3D.png3', 'Cards/4D.png4', 'Cards/5D.png5', 'Cards/6D.png6', 'Cards/7D.png7', 'Cards/8D.png8', 'Cards/9D.png9', 'Cards/10D.png10', 'Cards/JD.png11', 'Cards/QD.png12', 'Cards/KD.png13', 'Cards/AD.png1'];
var difficulty;
var cardCount = 0;
var grabCard = false;
var NameofCard = '';
var cardValue = null;
var score = 0;
var firstId;
var scoreMultiplier = 1;
var timer = 11;
function shuffle(Deck) {
    var j, x, i;
    for (i = Deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = Deck[i];
        Deck[i] = Deck[j];
        Deck[j] = x;
    }
    return Deck;
}
//first function called by the only button on the home screan takes
//difficulty value from the table and logically picks the coresponding game.
function createNewGame() {
    score = 0;
   
    difficulty = document.getElementById('fDifficulty').value;
    var body = document.getElementById('clear');
    body.innerHTML = '';
    if (difficulty == 1) { //Value 1 plays one full deck of cards any suit of the same value matches
        Hard();
        cardCount = 0;
    }
    if (difficulty == 2) { //value 2 plays two full decks of cards any suit of the same value matches
        Medium();
        cardCount = 0;
    }
    gameMenue();
    
    var resettimmer=setInterval(tyme, 1000);
    if(timer<0){clearInterval(resettimmer)}
    timer = 11
   
}
    

function gameMenue() {
    var body = document.getElementById('clear');
    body.innerHTML += "<div id=\"resetTable\"><table style=\"border:2px solid blue\"><thead><th>Match by Larry Shimmell</th></thead><tr><td>Select Difficulty</td><td><select hidden name=\"Difficulty\" id=\"fDifficulty\"><option type=\"number\" value=\"1\">Hard</option><option type=\"number\" value=\"1\">Easy</option></select></td></tr><tr><td><button class=\"button\" onclick=\"createNewGame()\">New Game</button></td></tr><tr><td><img src=\"Cards/aces.png\" id=\"menucard\" alt=\"guess\" width=\"100px\"></td></tr></table></div>";
}
function Hard() {
    shuffle(Deck);
    var body = document.getElementById('clear');
    var row = '<div class="container-top"><span>Time:</span><input id="timer" type="number" readonly><span>Multiplier:</span><input id=\"multiplier\" type=\"number\" readonly>Score:<input id=\"score\" type=\"number\" readonly></div><div class ="container"><div>';
    var last = '';
    var i = Deck.length;
    for (var j = 0; Deck.length > j; j++) {
        --i;
        cardCount++;
        var idx = Deck[j].lastIndexOf('g') + 1; // seperates the img string from the value string
        var img = Deck[j].slice(0, idx); // becomes the value
        var valueofCard = Deck[j].substring(idx, Deck[j].length);
        if (i % 13 != 0) {
            row += "<img src='" + img + "' name=\"" + img + "\" alt=\"guess\" width=\"80px\" class=\"" + valueofCard + "\" type=\"number\" id=\"" + cardCount + "\" onclick=\"flip(" + cardCount + ")\"></img>";
        }
        if (i % 13 == 0) {
            row += "<img src='" + img + "' name=\"" + img + "\" alt=\"guess\" width=\"80px\" class=\"" + valueofCard + "\" type=\"number\" id=\"" + cardCount + "\" onclick=\"flip(" + cardCount + ")\"></img></div><div>";
        }
    }
    body.innerHTML += row+ '</div></div>';
}
function Medium() {
    shuffle(DeckClone2);
    console.log('shuffled success');
    var body = document.getElementById('clear');
    var row = '<div>';
    var i = DeckClone2.length;
    for (var j = 0; DeckClone2.length > j; j++) {
        --i;
        cardCount++;
        var idx = DeckClone2[j].lastIndexOf('g') + 1;
        var img = DeckClone2[j].slice(0, idx);
        //var valueofCard = Deck[j].substring(idx,Deck[j].length)    
        if (i % 26 != 0) {
            row += "<img src='" + img + "' name=\"" + img + "\" alt=\"guess\" width=\"50px\"  type=\"string\" id=\"" + cardCount + "\" onclick=\"flip(" + cardCount + ")\"></img>";
        }
        if (i % 26 == 0) {
            row += "<img src=\"" + img + "\" name=\"" + img + "\"  alt=\"guess\" width=\"50px\"  type=\"string\" id=\"" + cardCount + " onclick=\"flip(" + cardCount + ")\"></img></div><div>";
        }
    }
    body.innerHTML += row;
}
function hide() {
    var lookHere = document.getElementById('clear').outerHTML;
    var replace = document.getElementById('clear');
    replace.innerHTML = '';
    score = 0;
    if (difficulty == 1) {
    
        for (var card = 0; DeckClone.length > card; card++) { //finds all the images and changes them to back of card
            var idx = DeckClone[card].lastIndexOf('g') + 1;
            var img = DeckClone[card].slice(0, idx);
            var newbody = lookHere.replace("src=\"" + img + "\"", 'src="Cards/backofcard.png"');
            replace.innerHTML = newbody;
            lookHere = newbody;
        }
    }
    
    if (difficulty == 2) {
        for (var card = 0; DeckClone2.length > card; card++) { //finds all the images and changes them to back of card
            var idx = DeckClone2[card].lastIndexOf('g') + 1;
            var img = DeckClone2[card].slice(0, idx);
            var newbody = lookHere.replace("src=\"" + img + "\"", 'src="Cards/backofcard.png"');
            replace.innerHTML = newbody;
            lookHere = newbody;
        }
    }
}
function flip(id) {
    var cardtochange = document.getElementById(id).outerHTML;
    var replace = document.getElementById(id).name;
    var final = document.getElementById(id);
    var replaceEasy = document.getElementById(id).className;
    var multiplierId = document.getElementById('multiplier')
    /*if (difficulty != 1) {
        if (cardtochange.includes('Cards/backofcard.png')) {
            var idx = cardtochange.replace('Cards/backofcard.png', replace);
            var xcard = document.getElementById(id).name;
            final.outerHTML = idx;
            if (NameofCard == xcard) {
                score += 10;
                var highscore = document.getElementById('score');
                highscore.value = score;
            }
            grabCard = !grabCard;
            NameofCard = replace;
            if(grabCard == false){
                checkNameofCard(replace)
            }
        }
        if (!(cardtochange.includes('Cards/backofcard.png'))) {
            var idx = cardtochange.replace("src=\"" + replace + "\"", 'src="Cards/backofcard.png"');
            final.outerHTML = idx;
        }
    }*/
    if (cardtochange.includes('Cards/backofcard.png')) {
        var idx = cardtochange.replace('Cards/backofcard.png', replace);
        var xcard = document.getElementById(id).className;
        final.outerHTML = idx;
        grabCard = !grabCard; console.log(grabCard);
        
        if (grabCard == false && cardValue == xcard) {
            var highscore = document.getElementById('score');
            var lastid = document.getElementById(firstId);
            score += 10 * scoreMultiplier;
            scoreMultiplier++;
            multiplierId.value = scoreMultiplier;
            
            
            var toGray = document.getElementById(id);
            var toGray2 = document.getElementById(firstId);
            setTimeout(function(){
                toGray.outerHTML = "<img src='Cards/gray.png' alt=\"guess\" width=\"80px\" class=\"clear-img\" id=\"" + id + "\"></img>";
                toGray2.outerHTML = "<img src='Cards/gray.png'alt=\"guess\" width=\"80px\" class=\"clear-img\"  id=\"" + firstId + "\" ></img>";
                highscore.value = score;
            }, 1000); 
            
            cardValue = null;
            return;
        }
        if(grabCard == false && cardValue != xcard){
            var backtoblue1 = document.getElementById(id);
            var replaceImg = document.getElementById(id).name;
            var changit = document.getElementById(id).outerHTML;
            var backtoblue2 = document.getElementById(firstId);
            var replaceImg2 = document.getElementById(firstId).name;
            var changit2 = document.getElementById(firstId).outerHTML;
            scoreMultiplier = 1;
            multiplierId.value = scoreMultiplier;
            setTimeout(function(){
                backtoblue1.outerHTML = changit.replace(replaceImg,'Cards/backofcard.png');
                backtoblue2.outerHTML = changit2.replace( replaceImg2, 'Cards/backofcard.png')
                var highscore = document.getElementById('score');
                if(score>0){
                    score-=1;
                    highscore.value = score;
                }   
            }, 1000); 
        }
        firstId = id;
        cardValue = replaceEasy;
        /*if(grabCard == false){
            checkNameofCard(replace)
        }*/
    }
    /*if (!(cardtochange.includes('Cards/backofcard.png'))) {
        var idx = cardtochange.replace("src=\"" + replace + "\"", 'src="Cards/backofcard.png"');
        final.outerHTML = idx;
        cardValue = null;
        firstId = null;
    }*/
    return;
}

function tyme(){
    if(timer>0){
    timer--;
    var timeout = document.getElementById('timer');
    timeout.value = timer; 
    }
    if(timer==0){
        timer--;
        hide();
        return;
    
    }
    
}
