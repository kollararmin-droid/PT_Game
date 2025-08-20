
    /* ==== DATA (1–36) ==== */
    const elements=[
      {Z:1,sym:"H",name:"هیدروژن",grp:1,per:1},{Z:2,sym:"He",name:"هلیوم",grp:18,per:1},
      {Z:3,sym:"Li",name:"لیتیم",grp:1,per:2},{Z:4,sym:"Be",name:"بریلیم",grp:2,per:2},{Z:5,sym:"B",name:"بور",grp:13,per:2},{Z:6,sym:"C",name:"کربن",grp:14,per:2},{Z:7,sym:"N",name:"نیتروژن",grp:15,per:2},{Z:8,sym:"O",name:"اکسیژن",grp:16,per:2},{Z:9,sym:"F",name:"فلوئور",grp:17,per:2},{Z:10,sym:"Ne",name:"نئون",grp:18,per:2},
      {Z:11,sym:"Na",name:"سدیم",grp:1,per:3},{Z:12,sym:"Mg",name:"منیزیم",grp:2,per:3},{Z:13,sym:"Al",name:"آلومینیوم",grp:13,per:3},{Z:14,sym:"Si",name:"سیلیسیم",grp:14,per:3},{Z:15,sym:"P",name:"فسفر",grp:15,per:3},{Z:16,sym:"S",name:"گوگرد",grp:16,per:3},{Z:17,sym:"Cl",name:"کلر",grp:17,per:3},{Z:18,sym:"Ar",name:"آرگون",grp:18,per:3},
      {Z:19,sym:"K",name:"پتاسیم",grp:1,per:4},{Z:20,sym:"Ca",name:"کلسیم",grp:2,per:4},
      {Z:21,sym:"Sc",name:"اسکاندیم",grp:3,per:4},{Z:22,sym:"Ti",name:"تیتانیم",grp:4,per:4},{Z:23,sym:"V",name:"وانادیم",grp:5,per:4},{Z:24,sym:"Cr",name:"کروم",grp:6,per:4},{Z:25,sym:"Mn",name:"منگنز",grp:7,per:4},{Z:26,sym:"Fe",name:"آهن",grp:8,per:4},{Z:27,sym:"Co",name:"کبالت",grp:9,per:4},{Z:28,sym:"Ni",name:"نیکل",grp:10,per:4},
      {Z:29,sym:"Cu",name:"مس",grp:11,per:4},{Z:30,sym:"Zn",name:"روی",grp:12,per:4},
      {Z:31,sym:"Ga",name:"گالیوم",grp:13,per:4},{Z:32,sym:"Ge",name:"ژرمانیم",grp:14,per:4},{Z:33,sym:"As",name:"آرسنیک",grp:15,per:4},{Z:34,sym:"Se",name:"سلنیوم",grp:16,per:4},{Z:35,sym:"Br",name:"برم",grp:17,per:4},{Z:36,sym:"Kr",name:"کریپتون",grp:18,per:4},
    ];
    /* ==== Helpers for learning ==== */
    function familyOf(e){
      if(e.Z===1) return 'نافلز';
      if(e.grp===1) return 'فلز قلیایی';
      if(e.grp===2) return 'فلز قلیایی خاکی';
      if(e.grp>=3 && e.grp<=12) return 'فلز واسطه';
      if(e.grp===17) return 'هالوژن';
      if(e.grp===18) return 'گاز نجیب';
      const metalloid = [5,14,32,33].includes(e.Z);
      if(metalloid) return 'شبه‌فلز';
      if([13,31].includes(e.Z)) return 'فلز پس‌واسطه';
      return 'نافلز';
    }
    function blockOf(e){
      if(e.grp===1 || e.grp===2 || e.Z===1 || e.Z===2) return 's';
      if(e.grp>=13 && e.grp<=18) return 'p';
      return 'd';
    }
    function stateSTP(e){
      if([1,7,8,9,10,17,18,36,2].includes(e.Z)) return 'گاز';
      if(e.Z===35) return 'مایع';
      return 'جامد';
    }
    function groupClass(e){
      if(e.grp===1) return 'g1'; if(e.grp===2) return 'g2'; if(e.grp>=3&&e.grp<=12) return 'g3to12';
      if(e.grp===17) return 'g17'; if(e.grp===18) return 'g18'; return 'gOther';
    }

    const notes = {
      1:"سبک‌ترین عنصر؛ سوخت ستاره‌ها.",2:"گاز نجیب پایدار؛ بالن/MRI.",3:"باتری‌های لیتیمی.",4:"آلیاژهای سبک و سخت.",5:"شبه‌فلز؛ بوراکس در شوینده.",6:"پایهٔ شیمی آلی و زندگی.",
      7:"۷۸٪ هوای زمین.",8:"تنفس/سوختن.",9:"بسیار واکنش‌پذیر.",10:"روشنایی نئون.",11:"نمک خوراکی (NaCl).",12:"آلیاژهای سبک.",13:"بدنه‌ها/قوطی‌ها.",14:"نیمه‌هادی‌ها.",15:"DNA/ATP.",16:"کود/مواد شیمیایی.",17:"گندزدایی آب.",18:"حفاظ گازی/روشنایی.",
      19:"کود/سلول‌های زنده.",20:"استخوان/پوست.",21:"آلیاژها.",22:"تیتانیوم: سبک/مقاوم.",23:"ابزار/فولاد.",24:"پوشش/آلیاژ.",25:"فولادها.",26:"سازه‌ها.",27:"آلیاژهای مغناطیسی.",28:"آلیاژ/ضدزنگ.",29:"سیم/رسانا.",30:"گالوانیزه.",31:"الکترونیک.",32:"نیمه‌هادی.",33:"نیمه‌هادی/متالویید.",34:"شیشه/الکترونیک.",35:"ضدعفونی/عکاسی قدیمی.",36:"روشنایی/لیزر."
    };
    const safety = {17:"گاز کلر تحریک‌کنندهٔ تنفسی—در حد استاندارد استفاده شود.",35:"بخار برم سمی است—از تماس مستقیم پرهیز شود.",9:"فلوئور بسیار خورنده—صرفاً در صنعت."};
    const uses = {
      'H':"سوخت موشک/سوخت‌های آینده", 'He':"بالن/سرمایش MRI", 'Li':"باتری لیتیوم-یون", 'Be':"آلیاژهای هوافضا",
      'B':"بوراکس در شوینده/شیشه", 'C':"گرافیت/الماس/پلاستیک‌ها", 'N':"کود شیمیایی/حفاظ کرایو", 'O':"پزشکی/جوشکاری", 'F':"تفلون/خمیر دندان (F⁻)",
      'Ne':"تابلو نئونی", 'Na':"نمک خوراکی/چراغ سدیمی", 'Mg':"آلیاژ سبک", 'Al':"بدنه هواپیما/قوطی", 'Si':"تراشه‌ها/پنل خورشیدی", 'P':"کود/مواد غذایی",
      'S':"لاستیک/اسید سولفوریک", 'Cl':"ضدعفونی آب/PVC", 'Ar':"جوشکاری/لامپ‌ها", 'K':"کود/سلول", 'Ca':"سیمان/استخوان",
      'Sc':"آلیاژ/چراغ‌های بخار جیوه", 'Ti':"پزشکی/هوافضا", 'V':"فولادهای پرقدرت", 'Cr':"آبکاری/ضدزنگ", 'Mn':"فولاد", 'Fe':"سازه‌ها",
      'Co':"باتری/آلیاژ مغناطیسی", 'Ni':"سکه/ضدزنگ", 'Cu':"سیم‌کشی/لوله", 'Zn':"گالوانیزه", 'Ga':"LED/الکترونیک", 'Ge':"فیبر نوری/نیمه‌هادی",
      'As':"نیمه‌هادی/آلایش", 'Se':"فتوسل/شیشه", 'Br':"مواد عکس/بازدارنده شعله", 'Kr':"لامپ/لیزر"
    };

    /* ==== Learn wiring ==== */
    const tabLearn=document.getElementById('tabLearn'), tabQuiz=document.getElementById('tabQuiz');
    const learnPanel=document.getElementById('learnPanel'), quizPanel=document.getElementById('quizPanel'), gridPanel=document.getElementById('gridPanel');
    tabLearn.addEventListener('click',()=>{ tabLearn.classList.add('active'); tabQuiz.classList.remove('active'); learnPanel.style.display='block'; quizPanel.style.display='none'; gridPanel.style.display='none'; });
    tabQuiz.addEventListener('click',()=>{ tabQuiz.classList.add('active'); tabLearn.classList.remove('active'); learnPanel.style.display='none'; quizPanel.style.display='block'; gridPanel.style.display='block'; });

    const learnSearch=document.getElementById('learnSearch');
    const blockFilter=document.getElementById('blockFilter');
    const toggleGroups=document.getElementById('toggleGroups');

    const subFlash=document.getElementById('subFlash'),
          subElement=document.getElementById('subElement'),
          subFamilies=document.getElementById('subFamilies'),
          subLife=document.getElementById('subLife'),
          subGloss=document.getElementById('subGloss'),
          subTrends=document.getElementById('subTrends'),
          subCompare=document.getElementById('subCompare');

    const viewFlashGrid=document.getElementById('viewFlashGrid'),
          viewElementology=document.getElementById('viewElementology'),
          viewFamilies=document.getElementById('viewFamilies'),
          viewLife=document.getElementById('viewLife'),
          viewGlossary=document.getElementById('viewGlossary'),
          viewTrends=document.getElementById('viewTrends'),
          viewCompare=document.getElementById('viewCompare');

    const views=[viewFlashGrid,viewElementology,viewFamilies,viewLife,viewGlossary,viewTrends,viewCompare];
    const tabs=[subFlash,subElement,subFamilies,subLife,subGloss,subTrends,subCompare];
    function setSub(v){ tabs.forEach(t=>t.classList.remove('active')); views.forEach(vw=>vw.classList.remove('active')); v.tab.classList.add('active'); v.view.classList.add('active'); }
    subFlash.addEventListener('click',()=>setSub({tab:subFlash,view:viewFlashGrid}));
    subElement.addEventListener('click',()=>setSub({tab:subElement,view:viewElementology}));
    subFamilies.addEventListener('click',()=>setSub({tab:subFamilies,view:viewFamilies}));
    subLife.addEventListener('click',()=>setSub({tab:subLife,view:viewLife}));
    subGloss.addEventListener('click',()=>setSub({tab:subGloss,view:viewGlossary}));
    subTrends.addEventListener('click',()=>setSub({tab:subTrends,view:viewTrends}));
    subCompare.addEventListener('click',()=>setSub({tab:subCompare,view:viewCompare}));

    const ptable=document.getElementById('ptable');
    const familyTable=document.getElementById('familyTable');

    function inFilter(el){
      const q=(learnSearch.value||'').trim().toLowerCase();
      const blk=blockFilter.value;
      const hit = el.name.toLowerCase().includes(q)||el.sym.toLowerCase().includes(q)||(''+el.Z).includes(q);
      if(!hit) return false;
      if(blk==='all') return true;
      return blockOf(el)===blk;
    }
    function renderPeriodicGrid(target, withActions=false){
      target.innerHTML='';
      const frag=document.createDocumentFragment();
      elements.forEach(el=>{
        if(!inFilter(el)) return;
        const cell=document.createElement('div');
        const cls=groupClass(el);
        cell.className=`pt-cell ${cls}`;
        cell.style.gridColumn=el.grp; cell.style.gridRow=el.per; /* column 1 will be left due to direction:ltr */
        cell.innerHTML = `<span class="mini">Z=${el.Z}</span><b>${el.sym}</b><span>${el.name}</span>`;
        if(withActions){
          const actFav=document.createElement('button'); actFav.className='fav'; actFav.textContent='★';
          const actMark=document.createElement('button'); actMark.className='mark'; actMark.textContent='نشانه';
          actFav.addEventListener('click',()=>toggleFav(el.Z,actFav));
          actMark.addEventListener('click',()=>toggleMark(el.Z,actMark));
          cell.appendChild(actFav); cell.appendChild(actMark);
        }
        frag.appendChild(cell);
      });
      target.appendChild(frag);
      const on = toggleGroups.checked;
      [ptable,familyTable].forEach(t=>{ if(t) t.classList.toggle('show-groups', on); });
    }

    /* Elementology list */
    const elist=document.getElementById('elist');
    const KEY_FAV='ptg_fav', KEY_MARK='ptg_mark';
    function getLS(k){ try{return JSON.parse(localStorage.getItem(k)||'[]')}catch(e){return[]} }
    function setLS(k,v){ try{localStorage.setItem(k,JSON.stringify(v))}catch(e){} }
    function toggleFav(z,btn){ const a=getLS(KEY_FAV); const i=a.indexOf(z); if(i>=0) a.splice(i,1); else a.push(z); setLS(KEY_FAV,a); btn.style.opacity=a.includes(z)?'1':'0.6'; }
    function toggleMark(z,btn){ const a=getLS(KEY_MARK); const i=a.indexOf(z); if(i>=0) a.splice(i,1); else a.push(z); setLS(KEY_MARK,a); btn.style.opacity=a.includes(z)?'1':'0.6'; }
    function renderElementology(){
      elist.innerHTML='';
      const favs=getLS(KEY_FAV), marks=getLS(KEY_MARK);
      const frag=document.createDocumentFragment();
      elements.filter(inFilter).forEach(el=>{
        const b=blockOf(el), fam=familyOf(el), st=stateSTP(el);
        const card=document.createElement('div'); card.className='ecard';
        card.innerHTML = `<div class="act">
            <button class="fav" title="افزودن به برگزیده‌ها">★</button>
            <button class="mark" title="نشانه‌گذاری برای مرور">نشانه</button>
          </div>
          <h4>${el.sym} — ${el.name}</h4>
          <div class="meta">Z=${el.Z} • گروه ${el.grp} • دوره ${el.per} • بلوک ${b}</div>
          <div class="tags">
            <span class="tag">خانواده: ${fam}</span>
            <span class="tag">حالت: ${st}</span>
          </div>
          <div style="margin-top:8px;font-size:12px;color:#cbd5e1">
            <b>کاربرد روزمره:</b> ${uses[el.sym]||'—'}<br/>
            <b>نکتهٔ ایمنی:</b> ${safety[el.Z]||'—'}<br/>
            <b>اشتباه رایج:</b> ${commonMistake(el)}
          </div>`;
        const fb=card.querySelector('.fav'), mb=card.querySelector('.mark');
        fb.style.opacity=favs.includes(el.Z)?'1':'0.6'; mb.style.opacity=marks.includes(el.Z)?'1':'0.6';
        fb.addEventListener('click',()=>toggleFav(el.Z,fb));
        mb.addEventListener('click',()=>toggleMark(el.Z,mb));
        frag.appendChild(card);
      });
      elist.appendChild(frag);
    }
    function commonMistake(el){
      if(el.Z===6) return 'کربن فقط «سیاه/دوده» نیست؛ الماس هم کربن خالص است.';
      if(el.Z===11) return 'سدیم فلز نرم است؛ «نمک خوراکی» NaCl است نه خود سدیم.';
      if(el.Z===17) return 'کلر همیشه خطرناک نیست؛ دوز و شرایط مهم است.';
      if(el.Z===14) return 'سیلیسیم را با سیلیکون (پلیمر) اشتباه می‌گیرند.';
      if(el.grp>=3&&el.grp<=12) return 'فلزات واسطه فقط «آهن» نیستند؛ مس/نیکل/روی هم همین خانواده‌اند.';
      return '—';
    }

    /* Families map */
    function renderFamilies(){ renderPeriodicGrid(familyTable,false); }

    /* Life uses */
    const usesGrid=document.getElementById('usesGrid');
    function renderUses(){
      usesGrid.innerHTML='';
      const frag=document.createDocumentFragment();
      elements.filter(inFilter).forEach(el=>{
        const u=uses[el.sym]; if(!u) return;
        const warn = safety[el.Z] ? `<span class="label-warn">احتیاط</span>` : '';
        const d=document.createElement('div'); d.className='use-card';
        d.innerHTML = `<h4>${el.sym} — ${el.name} ${warn}</h4>
                       <div class="meta" style="font-size:12px;color:#cbd5e1">خانواده: ${familyOf(el)} • حالت: ${stateSTP(el)}</div>
                       <div style="margin-top:6px">${u}</div>`;
        frag.appendChild(d);
      });
      usesGrid.appendChild(frag);
    }

    /* Glossary */
    const glossList=document.getElementById('glossList');
    const GLOSS=[
      {k:'اتم',v:'کوچک‌ترین ذرهٔ سازندهٔ ماده که ویژگی‌های عنصر را دارد.'},
      {k:'عنصر',v:'ماده‌ای که از یک نوع اتم ساخته شده است (مثل O، Fe).'},
      {k:'ترکیب',v:'ماده‌ای با چند نوع اتم به نسبت معین (مثل H₂O).'},
      {k:'ایزوتوپ',v:'اتم‌های یک عنصر با تعداد نوترون متفاوت (مثلاً C-12، C-14).'},
      {k:'پروتون',v:'ذرهٔ مثبت در هسته؛ تعدادش = Z.'},
      {k:'نوترون',v:'ذرهٔ خنثی در هسته.'},
      {k:'الکترون',v:'ذرهٔ منفی پیرامون هسته.'},
      {k:'گروه',v:'ستون عمودی جدول؛ خواص مشابه.'},
      {k:'دوره',v:'ردیف افقی جدول؛ افزایش تدریجی Z.'}
    ];
    function renderGloss(){
      glossList.innerHTML='';
      const frag=document.createDocumentFragment();
      GLOSS.forEach(g=>{
        const d=document.createElement('div'); d.className='use-card';
        d.innerHTML=`<h4>📘 ${g.k}</h4><div style="font-size:13px;color:#cbd5e1">${g.v}</div>`;
        frag.appendChild(d);
      });
      glossList.appendChild(frag);
    }

    /* Compare */
    const cmpA=document.getElementById('cmpA'), cmpB=document.getElementById('cmpB'), cmpBtn=document.getElementById('cmpBtn'), cmpOut=document.getElementById('cmpOut');
    function fillCmp(){
      [cmpA,cmpB].forEach(sel=>{ sel.innerHTML=''; elements.forEach(el=>{ const o=document.createElement('option'); o.value=el.Z; o.textContent=`${el.sym} – ${el.name}`; sel.appendChild(o); }); });
    }
    function doCompare(){
      const aZ=Number(cmpA.value), bZ=Number(cmpB.value);
      if(!aZ||!bZ||aZ===bZ){ cmpOut.innerHTML='<div class="report">دو عنصر متفاوت انتخاب کن.</div>'; return; }
      const a=elements.find(e=>e.Z===aZ), b=elements.find(e=>e.Z===bZ);
      const rows = [
        ['نماد', a.sym, b.sym],
        ['نام', a.name, b.name],
        ['عدد اتمی (Z)', a.Z, b.Z],
        ['گروه/دوره', `گروه ${a.grp} • دوره ${a.per}`, `گروه ${b.grp} • دوره ${b.per}`],
        ['بلوک', blockOf(a), blockOf(b)],
        ['خانواده', familyOf(a), familyOf(b)],
        ['حالت استاندارد', stateSTP(a), stateSTP(b)],
      ].map(r=>`<tr><th class="k">${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('');
      cmpOut.innerHTML = `<div class="report"><table><thead><tr><th>ویژگی</th><th>${a.sym}</th><th>${b.sym}</th></tr></thead><tbody>${rows}</tbody></table></div>`;
    }

    /* ==== Build learn on load & on filters ==== */
    function buildAll(){
      renderPeriodicGrid(ptable,true);
      renderFamilies();
      renderElementology();
      renderUses();
      renderGloss();
      fillCmp();
      doCompare();
    }
    learnSearch.addEventListener('input',()=>{ buildAll(); });
    blockFilter.addEventListener('change',()=>{ buildAll(); });
    toggleGroups.addEventListener('change',()=>{
      [ptable,familyTable].forEach(t=>{ if(t) t.classList.toggle('show-groups', toggleGroups.checked); });
    });

    /* ==== QUIZ (نسخه قبلی – با Badges تازه) ==== */
    let audioCtx;let muted=false;const KEY_MUTE='ptg_mute';
    function loadMute(){try{muted=localStorage.getItem(KEY_MUTE)==='1'}catch(e){muted=false}updateMuteBtn()}
    function saveMute(){try{localStorage.setItem(KEY_MUTE,muted?'1':'0')}catch(e){}}
    function updateMuteBtn(){document.getElementById('muteBtn').textContent=muted?'🔇 صدا خاموش':'🔊 صدا روشن'}
    function ensureAudio(){if(muted)return;if(!audioCtx){audioCtx=new(window.AudioContext||window.webkitAudioContext)()}if(audioCtx.state==='suspended')audioCtx.resume()}
    function beep(f=880,d=120,t='sine',v=.15){if(muted)return;ensureAudio();const o=audioCtx.createOscillator();const g=audioCtx.createGain();o.type=t;o.frequency.value=f;o.connect(g);g.connect(audioCtx.destination);g.gain.setValueAtTime(v,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+d/1e3);o.start();o.stop(audioCtx.currentTime+d/1e3)}
    function vibr(ms){try{if(navigator.vibrate)navigator.vibrate(ms)}catch(e){}}
    function playCorrect(){vibr(25);beep(740,100,'triangle',.12);setTimeout(()=>beep(880,110,'sine',.14),100);setTimeout(()=>beep(1046,140,'sine',.16),210)}
    function playWrong(){vibr(60);beep(220,140,'sawtooth',.12);setTimeout(()=>beep(180,160,'square',.10),140)}
    function playTimeout(){vibr(80);beep(180,180,'square',.12)}

    const grid=document.getElementById('table'),
          qText=document.getElementById('question'),
          qIndexEl=document.getElementById('qIndex'),
          qTotalEl=document.getElementById('qTotal'),
          scoreEl=document.getElementById('score'),
          modeSel=document.getElementById('mode'),
          startBtn=document.getElementById('startBtn'),
          restartBtn=document.getElementById('restart'),
          helpBtn=document.getElementById('helpBtn'),
          fiftyBtn=document.getElementById('fiftyBtn');

    const overlay=document.getElementById('overlay'),
          modalIcon=document.getElementById('modalIcon'),
          modalTitle=document.getElementById('modalTitle'),
          modalMsg=document.getElementById('modalMsg'),
          modalPts=document.getElementById('modalPts'),
          badgesRow=document.getElementById('badgesRow'),
          correctInfo=document.getElementById('correctInfo'),
          reportEl=document.getElementById('report'),
          nextBtn=document.getElementById('nextBtn'),
          showHistoryBtn=document.getElementById('showHistoryBtn'),
          pdfBtn=document.getElementById('pdfBtn');

    const toggleHistoryBtn=document.getElementById('toggleHistory'),
          historyPanel=document.getElementById('historyPanel'),
          historyBody=document.getElementById('historyBody'),
          clearHistoryBtn=document.getElementById('clearHistory');

    const timeStat=document.getElementById('timeStat'),
          diffLabel=document.getElementById('diffLabel');

    const diffOverlay=document.getElementById('diffOverlay'),
          chooseEasy=document.getElementById('chooseEasy'),
          chooseMedium=document.getElementById('chooseMedium'),
          chooseHard=document.getElementById('chooseHard'),
          cancelDiff=document.getElementById('cancelDiff');

    const progBar=document.getElementById('progBar'),
          progTxt=document.getElementById('progTxt'),
          muteBtn=document.getElementById('muteBtn');

    const nameInput=document.getElementById('playerName'),
          nameLabel=document.getElementById('playerNameLabel');

    let score=0,pointer=0,totalQuestions=7,questions=[],started=false,timeLeft=10,tick=null,perQuestionSeconds=14;
    let stats={correct:0,wrong:0,totalTime:0,per:[]},finalMode=false,difficulty=null,highlightLE18=false,streak=0,usedFifty=false;

    function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
    function renderGrid(){
      grid.innerHTML='';
      const rand=shuffle([...elements]);
      const frag=document.createDocumentFragment();
      rand.forEach(el=>{
        const d=document.createElement('div');
        d.className='el'+((highlightLE18 && el.Z<=18)?' easy-hl':'');
        d.dataset.z=el.Z;
        const b=document.createElement('b'); b.textContent=el.sym;
        const s=document.createElement('span'); s.textContent=el.name;
        d.appendChild(b); d.appendChild(s);
        d.addEventListener('click',()=>onPick(el.Z),{passive:true});
        frag.appendChild(d);
      });
      grid.appendChild(frag);
    }
    function startTimer(){
      stopTimer(); timeLeft=perQuestionSeconds; document.getElementById('timer').textContent=timeLeft;
      timeStat.classList.toggle('panic',timeLeft<=3);
      tick=setInterval(()=>{
        timeLeft--; document.getElementById('timer').textContent=timeLeft; timeStat.classList.toggle('panic',timeLeft<=3);
        if(timeLeft<=0){
          clearInterval(tick); tick=null;
          const rt=perQuestionSeconds; stats.wrong++; streak=0; stats.totalTime+=rt;
          stats.per.push({q:pointer+1,z:questions[pointer],correct:false,time:rt}); score-=5; updateScore(); showModal(false,-5,true);
        }
      },1000);
    }
    function stopTimer(){ if(tick){ clearInterval(tick); tick=null; } }
    function updateScore(){ scoreEl.textContent=score; }
    function setProgress(){ const done=Math.min(pointer,totalQuestions); const pct=Math.round((done/totalQuestions)*100); progBar.style.inset=`0 ${100-pct}% 0 0`; progTxt.textContent=`${done}/${totalQuestions}`; }
    function ask(){ const z=questions[pointer]; qText.innerHTML=`عنصر دارای <b>${z} پروتون</b> را انتخاب کن.`; qIndexEl.textContent=pointer+1; qTotalEl.textContent=totalQuestions; setProgress(); startTimer(); }
    function showModal(correct,delta,isTimeout=false){
      stopTimer(); overlay.classList.add('open'); reportEl.innerHTML=''; nextBtn.textContent='ادامه'; correctInfo.style.display='none'; correctInfo.textContent='';
      badgesRow.style.display='none'; badgesRow.innerHTML='';
      if(correct){ modalIcon.textContent='✅'; modalTitle.textContent='آفرین! پاسخ درست بود'; modalTitle.className='ok'; modalMsg.textContent='👏 عالی!'; playCorrect(); }
      else { modalIcon.textContent='❌'; modalTitle.textContent=isTimeout?'وقت تموم شد!':'اشتباه شد!'; modalTitle.className='bad'; modalMsg.textContent='💪 ناامید نشو، دوباره تلاش کن!';
        const cz=questions[pointer]; const el=elements.find(e=>e.Z===cz); correctInfo.style.display='block'; correctInfo.textContent=`پاسخ درست: ${el.sym} – ${el.name} • گروه ${el.grp} • دوره ${el.per}`; isTimeout?playTimeout():playWrong(); }
      modalPts.textContent=`${delta>0?'+':''}${delta} امتیاز • امتیاز فعلی: ${score}`;
    }
    function hideModal(){ overlay.classList.remove('open'); }
    function onPick(Z){
      if(!started||overlay.classList.contains('open'))return;
      const correctZ=questions[pointer]; let delta=0,correct=false,speedBonus=0,streakBonus=0;
      let rt=Math.max(0,Math.min(perQuestionSeconds,perQuestionSeconds-timeLeft));
      if(Z===correctZ){ correct=true; streak++; delta=10; if(rt<3){speedBonus=3} if(streak>0 && streak%3===0){ streakBonus=2 } score += (delta+speedBonus+streakBonus); stats.correct++; }
      else { streak=0; delta=-5; score+=delta; stats.wrong++; }
      stats.totalTime+=rt; stats.per.push({q:pointer+1,z:questions[pointer],correct,time:rt}); updateScore();
      const totalDelta=correct?(delta+speedBonus+streakBonus):delta; showModal(correct,totalDelta,false);
    }

    function useFifty(){
      if(usedFifty)return; usedFifty=true;
      const correctZ=questions[pointer];
      const cards=Array.from(document.querySelectorAll('.grid .el'));
      const active=cards.filter(c=>!c.classList.contains('disabled'));
      const wrong=active.filter(c=>Number(c.dataset.z)!==correctZ);
      let k=Math.floor(active.length/2), minLeft=6;
      if(active.length-k<minLeft) k=Math.max(2,active.length-minLeft);
      if(k<2) k=2;
      wrong.sort(()=>Math.random()-0.5).slice(0,k).forEach(c=>c.classList.add('disabled'));
      document.getElementById('hint').textContent=`۵۰–۵۰ فعال شد: ${k} گزینه حذف شد.`;
      const fb=document.getElementById('fiftyBtn'); fb.disabled=true; fb.textContent=`۵۰–۵۰ انجام شد (${k} حذف شد)`;
    }

    const KEY='ptg_history_v1', KEY_NAME='ptg_name';
    function loadHistory(){ try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){return[]} }
    function saveHistory(h){ try{localStorage.setItem(KEY,JSON.stringify(h))}catch(e){} }
    function pushRun(s){ const h=loadHistory(); h.push(s); saveHistory(h); }
    function renderHistory(){
      const h=loadHistory(); if(!h.length){ historyBody.innerHTML='<div class="report">هنوز رکوردی ثبت نشده است.</div>'; return; }
      let rows='';
      for(let i=0;i<h.length;i++){
        const cur=h[i], prev=h[i-1];
        const dScore=i>0?(cur.score-prev.score):null;
        const dBadge=dScore==null?'':(dScore>0?`<span style="color:#22c55e">+${dScore}</span>`:(dScore<0?`<span style="color:#ef4444">${dScore}</span>`:'<span style="color:#94a3b8">0</span>'));
        const badgeText=(cur.badges&&cur.badges.length)?cur.badges.join('، '):'—';
        const player=cur.player&&cur.player.trim()?cur.player:'بی‌نام';
        rows += `<tr><td>${i+1}</td><td>${player}</td><td>${new Date(cur.ts).toLocaleString('fa-IR')}</td><td>${cur.correct}</td><td>${cur.wrong}</td><td>${cur.score} ${dBadge}</td><td>${cur.totalTime}</td><td>${cur.avg}</td><td>${cur.fastest}</td><td>${cur.slowest}</td><td>${cur.mode==='random'?'تصادفی':'ترتیبی'}</td><td>${badgeText}</td></tr>`;
      }
      historyBody.innerHTML = `<div class="report"><table><thead><tr><th>#</th><th>بازیکن</th><th>تاریخ</th><th>درست</th><th>غلط</th><th>امتیاز (Δ)</th><th>زمان کل</th><th>میانگین</th><th>سریع‌ترین</th><th>کندترین</th><th>حالت</th><th>نشان‌ها</th></tr></thead><tbody>${rows}</tbody></table></div>`;
    }
    function clearHistory(){ if(confirm('کل تاریخچه حذف شود؟')){ saveHistory([]); renderHistory(); } }
    function computeBadges(){
      const total=stats.per.length;
      const under3=stats.per.filter(o=>o.correct&&o.time<3).length;
      const flawless=stats.wrong===0;
      const corrElems = stats.per.filter(o=>o.correct).map(o=>elements.find(e=>e.Z===o.z));
      const fam = new Set();
      corrElems.forEach(e=>{ if(!e) return; if(e.grp===1) fam.add('g1'); else if(e.grp===2) fam.add('g2'); else if(e.grp===17) fam.add('g17'); else if(e.grp===18) fam.add('g18'); });
      const mainGroups = (fam.has('g1') && fam.has('g2') && fam.has('g17') && fam.has('g18'));
      const badges=[];
      if(under3>=Math.max(3,Math.ceil(total*0.4))) badges.push('🏎️ دانشمند سریع');
      if(flawless) badges.push('🛡️ بدون خطا');
      if(mainGroups) badges.push('👑 سلطان گروه‌های اصلی');
      return badges;
    }
    function renderBadgesChips(badges){
      if(!badges || !badges.length){ badgesRow.style.display='none'; badgesRow.innerHTML=''; return; }
      const chips = badges.map(b=>{
        let cls='chip';
        if(b.includes('🏎️')) cls+=' fast'; else if(b.includes('🛡️')) cls+=' shield'; else if(b.includes('👑')) cls+=' crown';
        return `<span class="${cls}" title="${b}">${b}</span>`;
      }).join('');
      badgesRow.innerHTML = chips;
      badgesRow.style.display='flex';
    }
    function saveCurrentRun(){
      const total=stats.totalTime; const count=stats.per.length||1; const avg=Number((total/count).toFixed(1));
      const times=stats.per.map(o=>o.time); const fastest=times.length?Math.min(...times):0; const slowest=times.length?Math.max(...times):0;
      const badges=computeBadges(); const player=(localStorage.getItem(KEY_NAME)||'').trim();
      const summary={ts:Date.now(),player,correct:stats.correct,wrong:stats.wrong,score:score,totalTime:total,avg,fastest,slowest,mode:modeSel.value,diff:difficulty,badges};
      pushRun(summary); return {badges,summary};
    }
    function showFinalReport(){
      timeStat.classList.remove('panic');
      const {badges,summary}=saveCurrentRun(); renderHistory();
      const total=stats.totalTime; const count=stats.per.length||1; const avg=(total/count).toFixed(1);
      const times=stats.per.map(o=>o.time); const fastest=times.length?Math.min(...times):0; const slowest=times.length?Math.max(...times):0;
      modalIcon.textContent='📊'; modalTitle.textContent='گزارش پایانی بازی'; modalTitle.className='';
      modalMsg.textContent=`درست: ${stats.correct} • غلط: ${stats.wrong} • امتیاز نهایی: ${score}`;
      const badgeLine=(badges.length?' • نشان‌ها: '+badges.join('، '):'');
      modalPts.textContent=`⏱️ زمان کل: ${total} ثانیه • میانگین: ${avg} • سریع‌ترین: ${fastest} • کندترین: ${slowest}${badgeLine}`;
      renderBadgesChips(badges);
      let rows=stats.per.map(o=>{ const el=elements.find(e=>e.Z===o.z);
        return `<tr><td>${o.q}</td><td>Z=${o.z} (${el.sym})</td><td>${o.correct?'✅ درست':'❌ غلط'}</td><td>${o.time} ثانیه</td></tr>`; }).join('');
      reportEl.innerHTML=`<table><thead><tr><th>سؤال</th><th>عنصر</th><th>نتیجه</th><th>زمان</th></tr></thead><tbody>${rows}</tbody></table>`;
      pdfBtn.onclick=()=>downloadPDF(summary,stats.per);
      nextBtn.textContent='شروع دوباره'; overlay.classList.add('open'); finalMode=true;
    }
    function next(){ if(finalMode){ hideModal(); finalMode=false; restart(); return; } hideModal(); pointer++; if(pointer>=totalQuestions){ showFinalReport(); return; } renderGrid(); ask(); }

    function openDiff(){ diffOverlay.classList.add('open'); }
    function closeDiff(){ diffOverlay.classList.remove('open'); }
    const DIFFS={
      easy:{name:'آسان',total:5,pool:(e)=>e.Z<=18,timeM:16,timeD:12,help:true,highlightLE18:true,fifty:true},
      medium:{name:'متوسط',total:7,pool:(e)=>e.Z<=36,timeM:14,timeD:10,help:false,highlightLE18:false,fifty:false},
      hard:{name:'پیشرفته',total:10,pool:(e)=>e.Z<=36,timeM:12,timeD:9,help:false,highlightLE18:false,fifty:false}
    };
    function isMobile(){return (window.matchMedia&&matchMedia('(pointer:coarse)').matches)||'ontouchstart'in window||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)}
    function chooseDiff(key){
      difficulty=key;
      const cfg=DIFFS[key];
      totalQuestions=cfg.total;
      perQuestionSeconds=isMobile()?cfg.timeM:cfg.timeD;
      highlightLE18=!!cfg.highlightLE18;
      helpBtn.style.display=cfg.help?'inline-block':'none';
      fiftyBtn.style.display=cfg.fifty?'inline-block':'none';
      fiftyBtn.disabled=false; fiftyBtn.textContent='۵۰–۵۰'; usedFifty=false;
      diffLabel.textContent=cfg.name;
      score=0; updateScore();
      pointer=0;
      questions=elements.filter(cfg.pool).map(e=>e.Z); shuffle(questions); questions=questions.slice(0,totalQuestions);
      stats={correct:0,wrong:0,totalTime:0,per:[]}; finalMode=false;
      closeDiff();
    }
    function restart(){
      stopTimer(); score=0; updateScore(); pointer=0; started=false; streak=0; usedFifty=false;
      timeStat.classList.remove('danger'); timeStat.classList.remove('panic');
      stats={correct:0,wrong:0,totalTime:0,per:[]}; finalMode=false; reportEl.innerHTML='';
      qIndexEl.textContent='0'; document.getElementById('timer').textContent='—';
      renderGrid();
      qText.innerHTML='برای شروع، روی «شروع بازی» بزن؛ بعد سطح دشواری رو انتخاب کن.';
      restartBtn.style.display='none'; startBtn.style.display='inline-block'; helpBtn.style.display='none'; fiftyBtn.style.display='none';
      diffLabel.textContent='—'; highlightLE18=false;
      document.getElementById('hint').textContent='پیشنهاد: روی موبایل زمان بیشتری داری تا با خیال راحت لمس کنی.';
      setProgress();
    }
    function startRealGame(){
      started=true; timeStat.classList.add('danger'); restartBtn.style.display='inline-block'; startBtn.style.display='none'; pointer=0;
      setProgress(); renderGrid(); ask();
      const cfg=DIFFS[difficulty];
      const name=(nameInput.value||'').trim(); try{ localStorage.setItem('ptg_name',name) }catch(e){}
      nameLabel.textContent=name||'بی‌نام';
      document.getElementById('hint').innerHTML =
        `برای هر سؤال <b>${perQuestionSeconds} ثانیه</b> فرصت داری. پاسخ درست = ۱۰ امتیاز | پاسخ غلط/اتمام زمان = ۵ امتیاز منفی.` +
        (cfg.help?' • دکمه «راهنما» فعال است.':'') +
        (cfg.fifty?' • یک‌بار ۵۰–۵۰ داری (نیمی از گزینه‌ها حذف می‌شود).':'') +
        (cfg.highlightLE18?' • <b>عناصر ۱–۱۸ با حاشیه‌ی آبی مشخص‌اند.</b>':'');
    }
    function startGame(){ openDiff(); }

    function showHistoryAndScroll(){ historyPanel.style.display='block'; renderHistory(); historyPanel.scrollIntoView({behavior:'smooth',block:'start'}); }
    document.getElementById('showHistoryBtn').addEventListener('click',()=>{ hideModal(); showHistoryAndScroll(); });
    toggleHistoryBtn.addEventListener('click',showHistoryAndScroll);
    clearHistoryBtn.addEventListener('click',clearHistory);

    startBtn.addEventListener('click',()=>{ openDiff(); });
    restartBtn.addEventListener('click',restart);
    helpBtn.addEventListener('click',()=>{ if(!started) return; const z=questions[pointer]; const el=elements.find(e=>e.Z===z); document.getElementById('hint').textContent = `راهنما: اولین حرف نماد این عنصر «${el.sym[0]}» است.`; });
    fiftyBtn.addEventListener('click',useFifty);

    document.getElementById('chooseEasy').addEventListener('click',()=>{ chooseDiff('easy'); startRealGame(); });
    document.getElementById('chooseMedium').addEventListener('click',()=>{ chooseDiff('medium'); startRealGame(); });
    document.getElementById('chooseHard').addEventListener('click',()=>{ chooseDiff('hard'); startRealGame(); });
    document.getElementById('cancelDiff').addEventListener('click',()=>{ diffOverlay.classList.remove('open'); });
    nextBtn.addEventListener('click',next);
    overlay.addEventListener('click',(e)=>{ if(e.target===overlay) next(); });

    muteBtn.addEventListener('click',()=>{ muted=!muted; saveMute(); updateMuteBtn(); });

    nameInput.addEventListener('change',()=>{ const n=nameInput.value.trim(); try{ localStorage.setItem('ptg_name', n); }catch(e){} nameLabel.textContent = n||'بی‌نام'; });

    /* ===== PDF ===== */
    async function downloadPDF(summary, perRows){
      const player = summary.player && summary.player.trim() ? summary.player : 'بی‌نام';
      const diff = ({easy:'آسان',medium:'متوسط',hard:'پیشرفته'})[summary.diff] || '—';
      const modeText = summary.mode==='random'?'تصادفی':'ترتیبی';
      const dateStr = new Date(summary.ts).toLocaleString('fa-IR');
      const el = document.getElementById('pdfDom');
      const badges = summary.badges || [];
      const badgesHTML = badges.length ? `<div style="margin-top:6px"><b>نشان‌ها:</b> ${badges.join(' • ')}</div>` : '';
      const rowsHtml = perRows.map(o=>{
        const ele = elements.find(e=>e.Z===o.z);
        return `<tr><td style="border:1px solid #d1d5db;padding:6px">${o.q}</td>
                    <td style="border:1px solid #d1d5db;padding:6px">Z=${o.z} (${ele.sym} – ${ele.name})</td>
                    <td style="border:1px solid #d1d5db;padding:6px">${o.correct?'✅ درست':'❌ غلط'}</td>
                    <td style="border:1px solid #d1d5db;padding:6px">${o.time} ثانیه</td></tr>`;
      }).join('');
      el.innerHTML = `
        <div style="text-align:center;margin-bottom:8px;font-weight:900;font-size:20px">گزارش بازی جدول تناوبی – آرمین کل‌لر</div>
        <div style="text-align:center;margin-bottom:12px;color:#475569">برای یادگیری علوم با بازی‌های تعاملی، در کلاس‌های علوم آرمین کل‌لر شرکت کن 🌟</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:8px">
          <div><b>بازیکن:</b> ${player}</div>
          <div><b>تاریخ:</b> ${dateStr}</div>
          <div><b>سطح:</b> ${diff}</div>
          <div><b>حالت:</b> ${modeText}</div>
        </div>
        ${badgesHTML}
        <div style="margin-top:8px">
          <b>نتایج کلی:</b>
          <span>درست: ${summary.correct}</span> •
          <span>غلط: ${summary.wrong}</span> •
          <span>امتیاز نهایی: ${summary.score}</span> •
          <span>زمان کل: ${summary.totalTime} ثانیه</span> •
          <span>میانگین: ${summary.avg}</span> •
          <span>سریع‌ترین: ${summary.fastest}</span> •
          <span>کندترین: ${summary.slowest}</span>
        </div>
        <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:12px">
          <thead>
            <tr>
              <th style="border:1px solid #d1d5db;padding:6px">سؤال</th>
              <th style="border:1px solid #d1d5db;padding:6px">عنصر</th>
              <th style="border:1px solid #d1d5db;padding:6px">نتیجه</th>
              <th style="border:1px solid #d1d5db;padding:6px">زمان</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
        <div style="margin-top:14px;font-size:12px;color:#475569">
          تماس با من: t.me/Alchemist_Amozeshe_Oloum • instagram.com/arminkollar.kimiagar
        </div>
      `;
      const canvas = await html2canvas(el, {scale: 2, useCORS: true});
      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('p','mm','a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = pageWidth;
      const imgHeight = canvas.height * (imgWidth / canvas.width);
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      const safeName = (player||'بازیکن').replace(/[\\/:*?"<>|]+/g,'-');
      pdf.save(`گزارش-بازی-جدول-تناوبی-${safeName}.pdf`);
    }

    /* ==== Compare button event ==== */
    document.getElementById('cmpBtn').addEventListener('click', doCompare);

    /* ==== Init ==== */
    function initQuizUI(){
      qTotalEl.textContent=7;
      try{ const n=localStorage.getItem('ptg_name')||''; nameInput.value=n; nameLabel.textContent=n||'بی‌نام'; }catch(e){}
      loadMute(); renderGrid(); setProgress();
    }
    buildAll();
    initQuizUI();
  