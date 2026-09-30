/*! © 2026 LigeroNex. All rights reserved. Proprietary: no licence is granted to copy, modify or reuse this file. */
(function(){const c={id:"me",name:"Alex Rivera",init:"AR",role:"Platform Engineering",office:"London"},b=[{id:"sk",name:"Samira Khan",role:"Transformation Lead",office:"London",init:"SK",skills:["AI strategy","Change","Facilitation"],helps:["Change management"],mentors:!1,meet:!0,mutual:3,note:"In the London office Tue\u2013Thu"},{id:"jm",name:"James Morgan",role:"Principal Engineer, Cloud",office:"Manchester",init:"JM",skills:["AWS","Kubernetes","Terraform"],helps:["AWS","Kubernetes","Terraform"],mentors:!0,meet:!1,mutual:2,note:"Usually free Thursday afternoons"},{id:"nt",name:"Nadia Thomas",role:"Data & Analytics Manager",office:"Leeds",init:"NT",skills:["SQL","dbt","Analytics"],helps:["Data modelling","SQL"],mentors:!0,meet:!0,mutual:1,note:"Mentoring one person, room for one more"},{id:"do",name:"Daniel Obi",role:"Product Designer",office:"Remote",init:"DO",skills:["Design systems","Research"],helps:["Design critique"],mentors:!1,meet:!0,mutual:2,note:"Hosts a fortnightly virtual coffee"},{id:"pn",name:"Priya Nair",role:"Security Engineer",office:"London",init:"PN",skills:["IAM","Network policy","Threat modelling"],helps:["IAM","Security review"],mentors:!1,meet:!1,mutual:4,note:"Runs the secure-by-default clinic"},{id:"cd",name:"Chris Dale",role:"Site Reliability Engineer",office:"Manchester",init:"CD",skills:["Observability","Incident response"],helps:["Kubernetes","On-call"],mentors:!1,meet:!1,mutual:1,note:"Happy to pair on incident reviews"},{id:"ao",name:"Amara Osei",role:"Principal Engineer, AI",office:"Remote",init:"AO",skills:["Machine learning","Evaluation","Python"],helps:["Applied AI"],mentors:!0,meet:!1,mutual:2,note:"Mentors two engineers, capacity for one"},{id:"tr",name:"Tom Reyes",role:"Customer Success Manager",office:"London",init:"TR",skills:["Onboarding","Accounts"],helps:["Customer context"],mentors:!1,meet:!0,mutual:1,note:"New to the London office this month"},{id:"ep",name:"Elena Petrova",role:"VP Strategy",office:"London",init:"EP",skills:["Portfolio","Investment cases"],helps:["Business cases"],mentors:!0,meet:!1,mutual:5,note:"Sponsors two internal ventures"},{id:"mw",name:"Marcus Webb",role:"Finance Business Partner",office:"Birmingham",init:"MW",skills:["Modelling","Cost management"],helps:["Cost modelling"],mentors:!1,meet:!1,mutual:0,note:"Supports the platform cost review"},{id:"aa",name:"Aisha Rahman",role:"People Partner",office:"London",init:"AR",skills:["Onboarding","Career","Wellbeing"],helps:["Career conversations"],mentors:!0,meet:!0,mutual:3,note:"Runs the new-joiner programme"},{id:"rs",name:"Ravi Shah",role:"Engineering Manager",office:"Leeds",init:"RS",skills:["Delivery","Coaching","Hiring"],helps:["Delivery planning"],mentors:!0,meet:!1,mutual:2,note:"Coaches first-time managers"}],S=new Set(["me","sk","jm","pn","tr","aa","do"]),R=[{id:"coffee",emoji:"\u2615",name:"Cross-Team Coffee Circle",members:12,cadence:"Every two weeks",next:"Thu 15:00",blurb:"A random coffee across teams and offices.",near:3,c:["#ff6b57","#ffa94d"],people:["sk","do","tr"]},{id:"joiners",emoji:"\u{1F44B}",name:"New Joiners \xB7 London",members:23,cadence:"Weekly",next:"Mon 12:30",blurb:"For everyone in their first year.",near:6,c:["#1687ff","#45d8ff"],people:["tr","aa","sk"]},{id:"data",emoji:"\u{1F4CA}",name:"Data Guild",members:31,cadence:"Monthly",next:"Wed 16:00",blurb:"Open show-and-tell on data and analytics.",near:4,c:["#7c5cff","#b27bff"],people:["nt","ao","rs"]},{id:"green",emoji:"\u{1F331}",name:"Green Tech Network",members:18,cadence:"Monthly",next:"Fri 13:00",blurb:"Sustainability in how we build and run.",near:2,c:["#0fb99f","#46dd98"],people:["mw","ep","cd"]}],N=["Kubernetes","IAM","Terraform","Data modelling","Applied AI","Cost modelling"],B=["Platform delivery","CI/CD","Code review"],O={Home:{c1:"#0e6bff",c2:"#45d8ff",icon:"hexnet"},"Find people":{c1:"#2f6bff",c2:"#7a9bff",icon:"search"},Meet:{c1:"#ff6b57",c2:"#ffa94d",icon:"meet"},Help:{c1:"#1687ff",c2:"#45d8ff",icon:"help"},Learn:{c1:"#7c5cff",c2:"#b27bff",icon:"learn"},Belong:{c1:"#0fb99f",c2:"#46dd98",icon:"belong"},"My network":{c1:"#f2508b",c2:"#ff8fb1",icon:"teams"},Profile:{c1:"#4f46e5",c2:"#8b8cff",icon:"profile"}},I={meet:"Meet",help:"Help",mentor:"Learn"},q=["Learn","Belong"],E=s=>`<div class="hc-later-note">${l("calendar")}<span><b>Roadmap preview.</b> The first HiveConnect release covers Meet and Help. ${s} follows in a later release; this screen shows how it is intended to work.</span></div>`,v=[["#ff6b57","#ffa94d"],["#7c5cff","#b27bff"],["#1687ff","#45d8ff"],["#0fb99f","#46dd98"],["#f2508b","#ff8fb1"],["#f59e0b","#fcd34d"],["#4f46e5","#8b8cff"],["#0891b2","#5eead4"]],n={screen:"Home",query:"",intent:"all",helpTopic:"Kubernetes",requests:{},joined:new Set(["coffee"]),dismissed:new Set,opts:{Meet:!0,Help:!0,Learn:!1,Belong:!0},topics:B.slice(),drawer:null,toast:"",focus:null},d=s=>String(s).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),l=s=>`<svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#${s}"></use></svg>`,y=s=>b.find(a=>a.id===s),j=()=>Object.keys(n.requests).length,P=s=>{const a=O[s]||O.Home;return`--c1:${a.c1};--c2:${a.c2}`};function g(s){let a=7;for(const x of s)a=a*31+x.charCodeAt(0)>>>0;const h=v[a%v.length];return`linear-gradient(135deg,${h[0]},${h[1]})`}function T(s,a){return`<span class="hc-av ${a||""}" style="background:${g(s.id)}">${d(s.init)}${S.has(s.id)?'<i class="hc-online" title="Available"></i>':""}</span>`}function F(s,a){return`<span class="hc-ico ${a||""}" style="${P(s)}">${l((O[s]||O.Home).icon)}</span>`}function u(s,a){return`<span class="hc-ring ${a||""}" style="--p:${s}" title="${s}% match"><b>${s}<small>%</small></b></span>`}function m(s,a,h,x){return`<button type="button" class="hc-btn ${x||""}" style="${P(h)}" data-act="${a}">${s}</button>`}function f(s,a){let h=58+s.mutual*3;const x=(s.skills.join(" ")+" "+s.helps.join(" ")+" "+s.role).toLowerCase();return a.forEach(M=>{M&&x.includes(M)&&(h+=14)}),s.office===c.office&&(h+=6),Math.min(97,h)}function L(s,a){const h=[],x=s.helps.find(G=>a.some(J=>J&&G.toLowerCase().includes(J)));x&&h.push(`Opted in to help with <b>${d(x)}</b>`);const M=s.skills.find(G=>a.some(J=>J&&G.toLowerCase().includes(J)));return M&&!x&&h.push(`Works with <b>${d(M)}</b>`),s.office===c.office&&h.push(`Also based in ${d(s.office)}`),s.mutual&&h.push(`${s.mutual} shared connection${s.mutual>1?"s":""}`),h.push(d(s.note)),h.slice(0,4)}function p(s,a,h){const x=a.toLowerCase().split(/[\s,]+/).filter(Boolean);return s.filter(M=>!n.dismissed.has(M.id)).filter(M=>!h||h(M)).filter(M=>{if(!x.length)return!0;const G=(M.name+" "+M.role+" "+M.office+" "+M.skills.join(" ")+" "+M.helps.join(" ")+(M.mentors?" mentor":"")).toLowerCase();return x.every(J=>G.includes(J))}).map(M=>({p:M,s:f(M,x)})).sort((M,G)=>G.s-M.s)}function w(s){return s==="help"?"Help requested":s==="mentor"?"Mentoring requested":"Invite sent"}function k(s,a){return`<span class="hc-done ${a||""}" style="${P(I[s])}">${l("check")}${w(s)}</span>`}function H(s){return`
      <div class="hc-topbar">
        <label class="hc-searchbar">
          ${l("search")}
          <input id="hcSearch" type="text" value="${d(n.query)}" placeholder="${d(s||"Search people, skills, teams or offices")}" autocomplete="off" aria-label="Search people">
        </label>
        <button type="button" class="hc-bell" data-act="screen:My network" aria-label="Requests (${j()})" title="Your requests">
          ${l("bell")}${j()?`<i class="hc-badge">${j()}</i>`:""}
        </button>
        <button type="button" class="hc-me" data-act="screen:Profile" title="Your profile">
          ${T(c,"sm")}
          <span class="hc-me-txt"><b>${d(c.name)}</b><small>${d(c.role)}</small></span>
        </button>
      </div>`}function D(s,a,h,x,M){return`
      <div class="hc-head">
        <div class="hc-head-l">${F(s,"lg")}<div><small>${d(a)}</small><h4>${h}</h4><p>${x}</p></div></div>
        ${M||""}
      </div>`}function U(s,a){const{p:h,s:x}=s,M=n.requests[h.id],G=a==="help"?"Ask":a==="mentor"?"Request":"Connect";return`
      <div class="hc-row" data-act="open:${h.id}" role="button" tabindex="0">
        ${T(h)}
        <div class="hc-row-main">
          <div class="hc-row-top"><b>${d(h.name)}</b>${h.mentors?'<span class="hc-flag" style="'+P("Learn")+'">Mentor</span>':""}${h.meet?'<span class="hc-flag" style="'+P("Meet")+'">Open to meet</span>':""}</div>
          <small>${d(h.role)} \xB7 ${d(h.office)}</small>
          <div class="hc-chips">${h.skills.slice(0,3).map(J=>`<span class="hc-chip">${d(J)}</span>`).join("")}</div>
        </div>
        <div class="hc-row-end">
          ${u(x)}
          ${M?k(M):m(G,`${a}:${h.id}`,I[a],"sm")}
        </div>
      </div>`}function z(s){return`<div class="hc-empty">${l("search")}<p>${d(s)}</p></div>`}function X(s,a){return`<div class="hc-banner">${l("shield")}<span>${d(s)}</span>${a?`<button type="button" class="hc-link" data-act="screen:${a}">Open ${a} \u2192</button>`:""}</div>`}function Z(){const s=p(b,"",C=>C.meet),a={Meet:s[0],Help:p(b,n.helpTopic.toLowerCase(),C=>C.helps.length)[0],Learn:p(b,"",C=>C.mentors)[0]},h=R.find(C=>!n.joined.has(C.id))||R[0],x=R.find(C=>n.joined.has(C.id)),M=[{id:"tr",t:"<b>Tom Reyes</b> accepted your coffee invite",w:"Yesterday",i:"Meet"},{id:"pn",t:"<b>Priya Nair</b> answered in the secure-by-default clinic",w:"2 days ago",i:"Help"},{id:"nt",t:"<b>Nadia Thomas</b> shared a Data Guild show-and-tell",w:"Last week",i:"Belong"}],G=(C,oe)=>`<button type="button" class="hc-qchip" style="${P(C)}" data-act="screen:${C}">${l(O[C].icon)}<span>${oe}</span></button>`,J=(C,oe,le,ce)=>`
      <div class="hc-tile" style="${P(C)}" data-act="screen:${C}" role="button" tabindex="0">
        <div class="hc-tile-top">${F(C)}<span class="hc-tile-badge">${le}</span></div>
        <h5>${C}${q.includes(C)?'<span class="hc-later">Later release</span>':""}</h5>
        <p>${oe}</p>
        ${ce}
        <em class="hc-go">Open ${C} \u2192</em>
      </div>`,ie=C=>C?`<div class="hc-mini">${T(C.p,"xs")}<div><b>${d(C.p.name)}</b><small>${d(C.p.role)}</small></div>${u(C.s,"xs")}</div>`:"";return`
      ${H()}
      <div class="hc-head">
        <div class="hc-head-l"><div><small>PERSONAL WORKSPACE</small><h4>Good morning, Alex <span class="hc-wave">\u{1F44B}</span></h4><p>People and conversations that could be useful to you today.</p></div></div>
        <button type="button" class="hc-btn" style="${P("Find people")}" data-act="screen:Find people">${l("sparkle")}Find someone</button>
      </div>
      <div class="hc-qchips">
        ${G("Meet",`<b>${s.length}</b> new matches this week`)}
        ${G("My network",j()?`<b>${j()}</b> pending request${j()>1?"s":""}`:"No pending requests")}
        ${x?G("Belong",`${d(x.name)} \xB7 <b>${d(x.next)}</b>`):G("Belong","Find a community")}
      </div>
      <div class="hc-grid4">
        ${J("Meet","Someone worth knowing",`${s.length} matches`,ie(a.Meet))}
        ${J("Help",`Expertise in ${d(n.helpTopic)}`,"Opted-in experts",ie(a.Help))}
        ${J("Learn","A mentor with capacity",n.opts.Learn?"You mentor too":"Mentors",ie(a.Learn))}
        ${J("Belong","A circle beyond your team",`${R.length} communities`,`<div class="hc-mini"><span class="hc-av xs hc-emoji" style="background:linear-gradient(135deg,${h.c[0]},${h.c[1]})">${h.emoji}</span><div><b>${d(h.name)}</b><small>${h.members} members \xB7 ${d(h.cadence)}</small></div></div>`)}
      </div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Recent activity</b><span class="hc-tag">Illustrative</span></div>
          ${M.map(C=>`<div class="hc-feed" data-act="open:${C.id}" role="button" tabindex="0">${T(y(C.id),"sm")}<span class="hc-feed-text">${C.t}</span><small>${d(C.w)}</small></div>`).join("")}
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Your visibility</b><button type="button" class="hc-link" data-act="screen:Profile">Edit \u2192</button></div>
          ${Object.keys(n.opts).map(C=>`<div class="hc-vis" data-act="screen:Profile" role="button" tabindex="0">${F(C,"xs")}<span class="hc-vis-label">${C}</span><b class="${n.opts[C]?"on":"off"}">${n.opts[C]?"Discoverable":"Hidden"}</b></div>`).join("")}
        </div>
      </div>`}function ee(){const s={all:()=>!0,meet:x=>x.meet,help:x=>x.helps.length>0,learn:x=>x.mentors},a=p(b,n.query,s[n.intent]),h=(x,M,G)=>`<button type="button" class="hc-filter ${n.intent===x?"on":""}" style="${P(G)}" data-act="intent:${x}">${G!=="Find people"?"<i></i>":""}${M}</button>`;return`
      ${H("Try \u201Ckubernetes\u201D, \u201CLondon\u201D or \u201Cmentor\u201D")}
      ${D("Find people","FIND PEOPLE","What do you need today?","Search by skill, team or office \u2014 or filter by what you need. Every result explains itself.")}
      <div class="hc-filters">
        ${h("all","Everyone","Find people")}${h("meet","Open to meet","Meet")}${h("help","Offers help","Help")}${h("learn","Mentors","Learn")}
        <span class="hc-count">${a.length} ${a.length===1?"person":"people"}</span>
      </div>
      <div class="hc-list">
        ${a.length?a.map(x=>U(x,"meet")).join(""):z("No colleagues match that yet. Try a different skill or office.")}
      </div>`}function te(){const s=p(b,"",a=>a.meet).slice(0,4);return`
      ${H()}
      ${D("Meet","MEET","People worth knowing.","Built from interests, role and intent \u2014 never from private messages or calendars.")}
      ${n.opts.Meet?"":X("You are hidden from Meet suggestions. Others will not see you here.","Profile")}
      <div class="hc-grid2">
        ${s.map(({p:a,s:h})=>`
          <div class="hc-card" style="${P("Meet")}">
            <div class="hc-card-top">${T(a,"lg")}<div class="hc-card-id"><b>${d(a.name)}</b><small>${d(a.role)} \xB7 ${d(a.office)}</small></div>${u(h)}</div>
            <div class="hc-why-label">Why this person?</div>
            <ul class="hc-why">${L(a,[]).map(x=>`<li>${x}</li>`).join("")}</ul>
            <div class="hc-actions">
              ${n.requests[a.id]?k(n.requests[a.id],"big"):`${m("Say hello",`meet:${a.id}`,"Meet")}<button type="button" class="hc-btn ghost" data-act="skip:${a.id}">Not now</button><button type="button" class="hc-link" data-act="open:${a.id}">Profile \u2192</button>`}
            </div>
          </div>`).join("")||z("You have responded to every suggestion. New ones arrive weekly.")}
      </div>
      <p class="hc-note">A suggestion is never a connection \u2014 both sides choose.</p>`}function se(){const s=p(b,n.helpTopic.toLowerCase(),h=>h.helps.length>0).slice(0,4),a=s[0];return`
      ${H()}
      ${D("Help","HELP","Find the right expertise.","Only colleagues who opted in to help with a topic appear here.")}
      <div class="hc-filters">
        ${N.map(h=>`<button type="button" class="hc-filter ${n.helpTopic===h?"on":""}" style="${P("Help")}" data-act="topic:${d(h)}">${d(h)}</button>`).join("")}
      </div>
      ${a?`
        <div class="hc-card feature" style="${P("Help")}">
          <div class="hc-card-top">${T(a.p,"lg")}<div class="hc-card-id"><span class="hc-best">Best match</span><b>${d(a.p.name)}</b><small>${d(a.p.role)} \xB7 ${d(a.p.office)}</small></div>${u(a.s,"lg")}</div>
          <div class="hc-why-label">Why this person?</div>
          <ul class="hc-why">${L(a.p,[n.helpTopic.toLowerCase()]).map(h=>`<li>${h}</li>`).join("")}</ul>
          <div class="hc-actions">
            ${n.requests[a.p.id]?k(n.requests[a.p.id],"big"):`${m("Ask for help",`help:${a.p.id}`,"Help")}<button type="button" class="hc-btn ghost" data-act="open:${a.p.id}">View profile</button>`}
          </div>
        </div>`:z("Nobody has opted in to help with that topic yet.")}
      ${s.length>1?`<div class="hc-panel-head sep"><b>Others who can help</b><span class="hc-tag">${s.length-1}</span></div>
        <div class="hc-list">${s.slice(1).map(h=>U(h,"help")).join("")}</div>`:""}`}function ae(){const s=p(b,n.query,a=>a.mentors);return`
      ${H("Search mentors by skill")}
      ${D("Learn","LEARN","People who can teach you.","Mentors choose their topics and how much capacity they have.")}
      ${E("Learn")}
      ${n.opts.Learn?"":X("You are not discoverable as a mentor. Turn on Learn in your profile to appear here for others.","Profile")}
      <div class="hc-list">${s.length?s.map(a=>U(a,"mentor")).join(""):z("No mentors match that skill yet.")}</div>`}function t(){return`
      ${H()}
      ${D("Belong","BELONG","Find where you fit.","Communities and circles beyond your immediate team.")}
      ${E("Belong")}
      <div class="hc-grid2">
        ${R.map(s=>{const a=n.joined.has(s.id);return`<div class="hc-card hc-comm" style="--c1:${s.c[0]};--c2:${s.c[1]}">
            <div class="hc-comm-band"><span class="hc-comm-emoji">${s.emoji}</span>${a?`<span class="hc-comm-joined">${l("check")}Joined</span>`:""}</div>
            <b class="hc-comm-name">${d(s.name)}</b>
            <p class="hc-blurb">${d(s.blurb)}</p>
            <div class="hc-comm-meta">
              <span class="hc-stack">${s.people.map(h=>T(y(h),"xs")).join("")}</span>
              <small>${s.members} members \xB7 ${s.near} near you</small>
            </div>
            <div class="hc-chips"><span class="hc-chip">${l("calendar")}${d(s.cadence)}</span><span class="hc-chip">Next: ${d(s.next)}</span></div>
            <div class="hc-actions">
              ${a?`<button type="button" class="hc-btn ghost" data-act="join:${s.id}">Leave</button>`:`<button type="button" class="hc-btn" style="--c1:${s.c[0]};--c2:${s.c[1]}" data-act="join:${s.id}">Join community</button>`}
            </div>
          </div>`}).join("")}
      </div>`}function e(){const s=Object.keys(n.requests).map(a=>({p:y(a),kind:n.requests[a]}));return`
      ${H()}
      ${D("My network","MY NETWORK","Connections and requests.","Everything you start from Meet, Help or Learn lands here.")}
      ${s.length?`<div class="hc-list">${s.map(({p:a,kind:h})=>`
        <div class="hc-row" data-act="open:${a.id}" role="button" tabindex="0">
          ${T(a)}
          <div class="hc-row-main"><div class="hc-row-top"><b>${d(a.name)}</b></div><small>${d(a.role)} \xB7 ${d(a.office)}</small></div>
          <div class="hc-row-end">${k(h)}<button type="button" class="hc-btn sm ghost" data-act="cancel:${a.id}">Withdraw</button></div>
        </div>`).join("")}</div>`:`<div class="hc-empty">${l("teams")}<p>Nothing yet. Say hello in <b>Meet</b>, ask in <b>Help</b> or request a mentor in <b>Learn</b> and it shows up here.</p><button type="button" class="hc-btn sm" style="${P("Meet")}" data-act="screen:Meet">Go to Meet</button></div>`}
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Communities</b><span class="hc-tag">${n.joined.size} joined</span></div>
          ${n.joined.size?[...n.joined].map(a=>{const h=R.find(x=>x.id===a);return`<div class="hc-vis" data-act="screen:Belong" role="button" tabindex="0"><span class="hc-av xs hc-emoji" style="background:linear-gradient(135deg,${h.c[0]},${h.c[1]})">${h.emoji}</span><span class="hc-vis-label">${d(h.name)}</span><b class="on">${d(h.next)}</b></div>`}).join(""):'<p class="hc-note">You have not joined a community yet.</p>'}
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>What your employer sees</b><span class="hc-tag">Aggregate only</span></div>
          <p class="hc-note">Participation trends across the organisation \u2014 never who you connected with, or why you asked for help.</p>
        </div>
      </div>`}function i(){const s={Meet:"Coffee and introductions",Help:"Answer questions in your topics",Learn:"Be found as a mentor",Belong:"Community matching"};return`
      ${H()}
      <div class="hc-profile-hero">
        ${T(c,"xl")}
        <div><b>${d(c.name)}</b><small>${d(c.role)} \xB7 ${d(c.office)}</small><span class="hc-status"><i></i>Available this week</span></div>
      </div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Topics I can help with</b><span class="hc-tag">${n.topics.length}</span></div>
          <div class="hc-chips big">
            ${n.topics.map(a=>`<button type="button" class="hc-chip removable" data-act="untopic:${d(a)}" title="Remove ${d(a)}">${d(a)}<i>\xD7</i></button>`).join("")}
            <button type="button" class="hc-chip add" data-act="addtopic">+ Add topic</button>
          </div>
          <p class="hc-note">Colleagues only find you for topics you add here.</p>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Open to</b><span class="hc-tag">Your choice</span></div>
          ${Object.keys(n.opts).map(a=>`
            <div class="hc-toggle-row">
              ${F(a,"xs")}
              <div><b>${a}</b><small>${s[a]}</small></div>
              <button type="button" class="hc-toggle ${n.opts[a]?"on":""}" style="${P(a)}" data-act="opt:${a}" role="switch" aria-checked="${n.opts[a]}" aria-label="${a}"></button>
            </div>`).join("")}
        </div>
      </div>`}function o(){const s=y(n.drawer);if(!s)return"";const a=n.requests[s.id],h=f(s,[n.query.toLowerCase(),n.helpTopic.toLowerCase()].filter(Boolean));return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${d(s.name)}">
        <div class="hc-drawer-band" style="background:${g(s.id)}"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${T(s,"xl")}${u(h,"lg")}</div>
        <div class="hc-drawer-id"><b>${d(s.name)}</b><small>${d(s.role)} \xB7 ${d(s.office)}${S.has(s.id)?' \xB7 <span class="hc-avail">Available</span>':""}</small></div>
        <div class="hc-why-label">Why you are matched</div>
        <ul class="hc-why">${L(s,[n.query.toLowerCase(),n.helpTopic.toLowerCase()]).map(x=>`<li>${x}</li>`).join("")}</ul>
        <div class="hc-why-label">Opted in to help with</div>
        <div class="hc-chips">${s.helps.map(x=>`<span class="hc-chip strong">${d(x)}</span>`).join("")||'<span class="hc-chip">Not offering help right now</span>'}</div>
        <div class="hc-why-label">Skills</div>
        <div class="hc-chips">${s.skills.map(x=>`<span class="hc-chip">${d(x)}</span>`).join("")}</div>
        <div class="hc-drawer-actions">
          ${a?`${k(a,"big")}<button type="button" class="hc-btn ghost" data-act="cancel:${s.id}">Withdraw</button>`:`${s.meet?m("Say hello",`meet:${s.id}`,"Meet"):""}
                   ${s.helps.length?m("Ask for help",`help:${s.id}`,"Help"):""}
                   ${s.mentors?m("Request mentoring",`mentor:${s.id}`,"Learn"):""}`}
        </div>
        <p class="hc-note">${d(s.name.split(" ")[0])} chooses whether to accept. Nothing is shared until they do.</p>
      </aside>`}const r={Home:Z,"Find people":ee,Meet:te,Help:se,Learn:ae,Belong:t,"My network":e,Profile:i};let $=null;function _(){const s=$&&$.closest(".exp-window");if(!s)return;const a=s.querySelector('.exp-side-nav [data-screen="My network"] .side-badge');a&&(a.textContent=j(),a.hidden=!j())}function W(){if(!$)return;const s=r[n.screen]||Z;$.innerHTML=`<div class="hc-app">${s()}${o()}${n.toast?`<div class="hc-toast">${l("check")}${d(n.toast)}</div>`:""}</div>`;const a=$.querySelector("#hcSearch");a&&n.focus==="search"&&(a.focus(),a.setSelectionRange(a.value.length,a.value.length)),_()}function Y(s){n.toast=s,clearTimeout(Y._t),Y._t=setTimeout(()=>{n.toast="",W()},2600)}function Q(s){n.screen=s,n.drawer=null,n.focus=null,window.HiveConnect.onScreen&&window.HiveConnect.onScreen(s)}function ne(s,a){switch(s){case"screen":Q(a);break;case"open":n.drawer=a;break;case"close":n.drawer=null;break;case"intent":n.intent=a;break;case"topic":n.helpTopic=a;break;case"meet":case"help":case"mentor":{n.requests[a]=s,n.drawer=null,Y(`${w(s)} to ${y(a).name}. They choose whether to accept.`);break}case"cancel":delete n.requests[a],Y("Request withdrawn.");break;case"skip":n.dismissed.add(a);break;case"join":{n.joined.has(a)?(n.joined.delete(a),Y("You left the community.")):(n.joined.add(a),Y("You joined the community."));break}case"opt":n.opts[a]=!n.opts[a],Y(`${a} ${n.opts[a]?"on \u2014 colleagues can find you":"off \u2014 you are hidden"}.`);break;case"untopic":n.topics=n.topics.filter(h=>h!==a);break;case"addtopic":{const h=N.find(x=>!n.topics.includes(x));h?(n.topics.push(h),Y(`Added \u201C${h}\u201D. Colleagues can now find you for it.`)):Y("You have added every topic available in this demo.");break}default:return!1}return!0}function A(s){const a=s.target.closest("[data-act]");if(!a||!$.contains(a))return;const[h,...x]=a.dataset.act.split(":");s.preventDefault(),s.stopPropagation(),ne(h,x.join(":"))&&W()}function K(s){s.target.id==="hcSearch"&&(n.query=s.target.value,n.screen!=="Find people"&&n.screen!=="Learn"&&n.query.trim()&&Q("Find people"),n.focus="search",W())}function V(s){if(s.key==="Escape"&&n.drawer){n.drawer=null,W();return}if(s.key!=="Enter"&&s.key!==" ")return;const a=s.target.closest&&s.target.closest("[data-act]");!a||a.tagName==="BUTTON"||(s.preventDefault(),a.click())}window.HiveConnect={side:["Home","Find people","Meet","Help","Learn","Belong","My network","Profile"],icons:Object.fromEntries(Object.entries(O).map(([s,a])=>[s,a.icon])),colors:Object.fromEntries(Object.entries(O).map(([s,a])=>[s,a.c1])),start:"Home",later:q,badge:()=>j(),render(s,a){$=a,n.screen=s,n.drawer=null,$.dataset.bound||($.dataset.bound="1",$.addEventListener("click",A,!0),$.addEventListener("input",K),$.addEventListener("keydown",V)),W()}}})(),(function(){const c=[["#ff6b57","#ffa94d"],["#7c5cff","#b27bff"],["#1687ff","#45d8ff"],["#0fb99f","#46dd98"],["#f2508b","#ff8fb1"],["#f59e0b","#fcd34d"],["#4f46e5","#8b8cff"],["#0891b2","#5eead4"]],b=v=>String(v??"").replace(/[&<>"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[n]),S=v=>`<svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#${v}"></use></svg>`,R=(v,n)=>`--c1:${v};--c2:${n}`;function N(v){let n=7;for(const l of String(v))n=n*31+l.charCodeAt(0)>>>0;const d=c[n%c.length];return`linear-gradient(135deg,${d[0]},${d[1]})`}const B=(v,n)=>`<span class="hc-av ${n||""}" style="background:${N(v.id)}">${b(v.init)}</span>`,O=(v,n,d,l)=>`<span class="hc-ico ${l||""}" style="${R(n,d)}">${S(v)}</span>`,I=(v,n,d)=>`<span class="hc-ring ${n||""}" style="--p:${v}" title="${b(d||v+"%")}"><b>${v}<small>%</small></b></span>`,q=(v,n,d)=>`<span class="hx-bar"><i style="width:${Math.max(0,Math.min(100,v))}%;${R(n,d)}"></i></span>`;function E(v){const n=v.state;let d=null,l=null;const y={side:v.side,icons:Object.fromEntries(v.side.map(p=>[p,v.screens[p].icon])),colors:Object.fromEntries(v.side.map(p=>[p,v.screens[p].c1])),start:v.start,onScreen:null,render(p,w){d=w,n.screen=p,n.drawer=null,d.dataset.bound||(d.dataset.bound="1",d.addEventListener("click",m,!0),d.addEventListener("input",f),d.addEventListener("change",f),d.addEventListener("keydown",L)),T()}},j=p=>v.screens[p]||v.screens[v.start];function P(p){const w=v.badge?v.badge():0;return`
        <div class="hc-topbar">
          <label class="hc-searchbar">${S("search")}
            <input id="hcSearch" type="text" value="${b(n.query)}" placeholder="${b(p||v.searchPlaceholder)}" autocomplete="off" aria-label="Search">
          </label>
          <button type="button" class="hc-bell" data-act="screen:${v.bellScreen}" aria-label="${b(v.bellLabel)} (${w})" title="${b(v.bellLabel)}">
            ${S("bell")}${w?`<i class="hc-badge">${w}</i>`:""}
          </button>
          <span class="hc-me">${B(v.me,"sm")}<span class="hc-me-txt"><b>${b(v.me.name)}</b><small>${b(v.me.role)}</small></span></span>
        </div>`}function g(p,w,k,H,D){const U=j(p);return`
        <div class="hc-head">
          <div class="hc-head-l">${O(U.icon,U.c1,U.c2,"lg")}<div><small>${b(w)}</small><h4>${k}</h4><p>${H}</p></div></div>
          ${D||""}
        </div>`}function T(){if(!d)return;const p=j(n.screen);d.innerHTML=`<div class="hc-app">${p.render()}${n.drawer?v.drawer():""}${n.toast?`<div class="hc-toast">${S("check")}${b(n.toast)}</div>`:""}</div>`;const w=d.querySelector("#hcSearch");w&&n.focus==="search"&&(w.focus(),w.setSelectionRange(w.value.length,w.value.length));const k=d.closest(".exp-window");if(k&&v.sideBadge){const[H,D]=v.sideBadge(),U=k.querySelector(`.exp-side-nav [data-screen="${H}"] .side-badge`);U&&(U.textContent=D,U.hidden=!D)}}function F(p){n.toast=p,clearTimeout(l),l=setTimeout(()=>{n.toast="",T()},2600)}function u(p){n.screen=p,n.drawer=null,n.focus=null,y.onScreen&&y.onScreen(p)}function m(p){const w=p.target.closest("[data-act]");if(!w||!d.contains(w))return;const[k,...H]=w.dataset.act.split(":"),D=H.join(":");if(p.preventDefault(),p.stopPropagation(),k==="screen")u(D);else if(k==="close")n.drawer=null;else if(!v.act(k,D))return;T()}function f(p){if(p.target.id==="hcSearch"){if(p.type!=="input")return;n.query=p.target.value,!v.searchScreens.includes(n.screen)&&n.query.trim()&&u(v.searchScreens[0]),n.focus="search",T();return}p.target.dataset.field&&(n.form[p.target.dataset.field]=p.target.value)}function L(p){if(p.key==="Escape"&&n.drawer){n.drawer=null,T();return}if(p.key!=="Enter"&&p.key!==" ")return;const w=p.target.closest&&p.target.closest("[data-act]");!w||w.tagName==="BUTTON"||w.tagName==="INPUT"||w.tagName==="SELECT"||w.tagName==="TEXTAREA"||(p.preventDefault(),w.click())}return{api:y,topbar:P,head:g,go:u,toast:F,paint:T,theme:j}}window.HiveUI={esc:b,icon:S,tint:R,grad:N,avatar:B,tile:O,ring:I,bar:q,createApp:E}})(),(function(){const{esc:c,icon:b,tint:S,avatar:R,tile:N,bar:B,createApp:O}=window.HiveUI,I={id:"sc",name:"Sam Carter",init:"SC",role:"Head of Operational Resilience"},q={Critical:4,High:3,Medium:2,Low:1},E={High:2,Elevated:1,Low:0},v={Critical:"#e5484d",Urgent:"#e5484d",High:"#f76b15",Elevated:"#f59e0b",Medium:"#f5a524",Low:"#30a46c"},n={new:"New",review:"Under review",action:"Action planned",resolved:"Resolved"},d=[{id:"s1",title:"Payments service has a single owner",area:"Payments",theme:"Dependency",impact:"Critical",people:"Elevated",confidence:"High",trend:"up",fresh:"2h ago",sources:["Service catalogue","On-call rota","HRIS \xB7 team aggregate"],evidence:["One named owner and no trained backup for the card-payments service","The owner is on call three weeks in four","Team engagement trending down for two quarters (team aggregate)"],action:"Nominate and train a secondary owner for card payments",status:"new"},{id:"s2",title:"Kubernetes platform knowledge sits with two engineers",area:"Platform Engineering",theme:"Knowledge",impact:"High",people:"Low",confidence:"Medium",trend:"flat",fresh:"1d ago",sources:["Skills inventory","Incident history"],evidence:["Two of fourteen engineers resolved 80% of cluster incidents this year","The cluster runbook was last updated eleven months ago"],action:"Pair-rotate cluster on-call and refresh the runbook",status:"review"},{id:"s3",title:"Identity platform has no documented successor",area:"Security",theme:"Continuity",impact:"High",people:"Low",confidence:"High",trend:"flat",fresh:"3d ago",sources:["Succession plan","Service catalogue","Hiring data"],evidence:["The succession plan names no ready-now successor for the role","Typical replacement lead time for the role is about five months"],action:"Name a ready-later successor and start a shadowing plan",status:"new"},{id:"s4",title:"Q4 migration depends on two contractors",area:"Platform Engineering",theme:"Dependency",impact:"High",people:"Low",confidence:"Medium",trend:"up",fresh:"5h ago",sources:["Project tracker","Contract register"],evidence:["Two contractors own six of nine migration milestones","Both contracts end before the migration is due to finish"],action:"Move milestone ownership to permanent staff",status:"new"},{id:"s5",title:"Data pipeline runbook coverage at 40%",area:"Data & Analytics",theme:"Continuity",impact:"Medium",people:"Low",confidence:"High",trend:"down",fresh:"1d ago",sources:["Runbook registry","Incident history"],evidence:["Four of ten critical pipelines have a runbook","Two uncovered pipelines failed last quarter"],action:"Write runbooks for the six uncovered pipelines",status:"action"},{id:"s6",title:"Customer onboarding delivery is slipping",area:"Customer Success",theme:"Delivery",impact:"Medium",people:"Elevated",confidence:"Medium",trend:"up",fresh:"6h ago",sources:["Project tracker","HRIS \xB7 team aggregate"],evidence:["Onboarding projects are three weeks behind plan","Team turnover is above the organisation average (aggregate)"],action:"Rebalance the onboarding backlog across two teams",status:"review"},{id:"s7",title:"Month-end close relies on one spreadsheet model",area:"Finance Operations",theme:"Knowledge",impact:"Medium",people:"Low",confidence:"High",trend:"flat",fresh:"4d ago",sources:["Process inventory"],evidence:["A single model with no version control drives the close","Only one analyst has documented how it works"],action:"Move the model into the finance platform with peer review",status:"new"},{id:"s8",title:"Security review queue is growing",area:"Security",theme:"Capacity",impact:"Low",people:"Low",confidence:"Medium",trend:"up",fresh:"2d ago",sources:["Ticketing system"],evidence:["The review queue grew 35% this quarter","Median wait for a review is nine days"],action:"Add a rotating review champion in each product team",status:"resolved"}],l={Dependency:{icon:"teams",c1:"#e5484d",c2:"#ff8a8a",blurb:"Single owners and critical reliance"},Knowledge:{icon:"idea",c1:"#7c5cff",c2:"#b27bff",blurb:"Know-how held by too few people"},Continuity:{icon:"shield",c1:"#1687ff",c2:"#45d8ff",blurb:"Succession, runbooks and backups"},Delivery:{icon:"trend",c1:"#f59e0b",c2:"#fcd34d",blurb:"Projects drifting from plan"},Capacity:{icon:"layers",c1:"#0fb99f",c2:"#46dd98",blurb:"Queues and load building up"}},y=["Payments","Platform Engineering","Data & Analytics","Customer Success","Security","Finance Operations"],j=["Opened","Evidence","Mitigation","Closed"],P={planned:"Planned",progress:"In progress",done:"Done"},g={screen:"Overview",query:"",drawer:null,toast:"",focus:null,form:{},filter:"all",themeFilter:"all",signals:d.map(t=>({...t})),investigations:[{id:"i1",signal:"s2",owner:"Platform lead",opened:"2 weeks ago",step:1},{id:"i2",signal:"s6",owner:"Customer Success director",opened:"5 days ago",step:2}],actions:[{id:"a1",signal:"s5",title:"Write runbooks for the six uncovered pipelines",owner:"Data platform lead",due:"31 Oct",status:"progress"},{id:"a2",signal:"s8",title:"Add a rotating review champion in each product team",owner:"CISO office",due:"Complete",status:"done"},{id:"a3",signal:"s2",title:"Pair-rotate cluster on-call",owner:"Platform lead",due:"15 Nov",status:"planned"}],reports:[{id:"r1",title:"Quarterly resilience summary",desc:"Signals, themes and actions, ready for the board",status:"Ready",when:"Today"},{id:"r2",title:"Continuity coverage report",desc:"Critical services, owners and backups",status:"Draft",when:"Last edited Tuesday"},{id:"r3",title:"Monthly signals digest",desc:"Leadership circulation, first Monday of the month",status:"Scheduled",when:"Next: 3 Nov"}],seq:10},T=t=>g.signals.find(e=>e.id===t),F=()=>g.signals.filter(t=>t.status!=="resolved");function u(t){const e=q[t.impact]+E[t.people];return e>=5?"Urgent":e>=3?"High":e===2?"Medium":"Low"}const m=(t,e)=>`<span class="hx-lvl" style="--lc:${v[t]||"#7d8ba0"}">${c(e||t)}</span>`,f=t=>`<span class="hx-status ${t}">${n[t]}</span>`,L=t=>`<span class="hx-conf" title="Confidence: ${t}">${[1,2,3].map(e=>`<i class="${e<={Low:1,Medium:2,High:3}[t]?"on":""}"></i>`).join("")}${t}</span>`,p=t=>`<span class="hx-trend ${t}" title="Trend">${t==="up"?"\u25B2":t==="down"?"\u25BC":"\u25AC"}</span>`;function w(t){const e=u(t);return`
      <div class="hc-row hx-sig" data-act="open:${t.id}" role="button" tabindex="0" style="--lc:${v[e]}">
        <span class="hx-sev">${c(e)}</span>
        <div class="hc-row-main">
          <div class="hc-row-top"><b>${c(t.title)}</b></div>
          <small>${c(t.area)} \xB7 ${c(t.theme)} \xB7 updated ${c(t.fresh)}</small>
          <div class="hx-dims"><span>Impact ${m(t.impact)}</span><span>People-risk ${m(t.people)}</span>${L(t.confidence)}${p(t.trend)}</div>
        </div>
        <div class="hc-row-end">${f(t.status)}</div>
      </div>`}let k;const H={Overview:{icon:"shield",c1:"#1687ff",c2:"#45d8ff",render:D},Signals:{icon:"radar",c1:"#06b6d4",c2:"#67e8f9",render:U},Themes:{icon:"layers",c1:"#7c5cff",c2:"#b27bff",render:z},Investigations:{icon:"investigate",c1:"#f59e0b",c2:"#fcd34d",render:X},Actions:{icon:"actions",c1:"#0fb99f",c2:"#46dd98",render:Z},Reports:{icon:"report",c1:"#4f46e5",c2:"#8b8cff",render:ee}};function D(){const t=F(),e=t.filter(A=>["Urgent","High"].includes(u(A))).length,i=g.actions.filter(A=>A.status==="done").length,o=g.actions.filter(A=>A.status!=="planned").length,r=(A,K,V,s,a,h,x)=>`
      <div class="hx-kpi" data-act="screen:${x}" role="button" tabindex="0" style="${S(K,V)}">
        ${N(A,K,V)}<div><b>${s}</b><span>${a}</span><small>${h}</small></div>
      </div>`,$=["Critical","High","Medium","Low"],_=["Low","Elevated","High"],W=(A,K)=>{const V=q[A]+E[K];return V>=5?"#fde2e2":V>=3?"#ffedd5":V===2?"#fef6dc":"#e7f7ed"},Y=y.map(A=>[A,t.filter(K=>K.area===A).length]),Q=Math.max(1,...Y.map(A=>A[1])),ne=t.slice().sort((A,K)=>q[K.impact]+E[K.people]-(q[A.impact]+E[A.people])).slice(0,3);return`
      ${k.topbar()}
      <div class="hc-head"><div class="hc-head-l"><div><small>RISK INTELLIGENCE</small><h4>Good morning, Sam</h4><p>Where the organisation is exposed today \u2014 and what is already being done about it.</p></div></div>
        <button type="button" class="hc-btn" style="${S("#06b6d4","#1687ff")}" data-act="screen:Signals">${b("radar")}Review signals</button></div>
      <div class="hx-kpis">
        ${r("radar","#06b6d4","#67e8f9",t.length,"Open signals",`${t.filter(A=>A.status==="new").length} new this week`,"Signals")}
        ${r("shield","#e5484d","#ff8a8a",e,"Urgent or high priority","Across "+new Set(t.map(A=>A.area)).size+" areas","Signals")}
        ${r("investigate","#f59e0b","#fcd34d",g.investigations.filter(A=>A.step<3).length,"Investigations open","Each with a named owner","Investigations")}
        ${r("actions","#0fb99f","#46dd98",`${o}/${g.actions.length}`,"Actions under way",`${i} complete`,"Actions")}
      </div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Impact \xD7 people-risk</b><span class="hc-tag">Two dimensions, never merged</span></div>
          <div class="hx-matrix">
            <div class="hx-axis-y">Business impact</div>
            <div class="hx-grid">
              ${$.map(A=>`<span class="hx-rlabel">${A}</span>${_.map(K=>`<div class="hx-cell" style="background:${W(A,K)}">${t.filter(V=>V.impact===A&&V.people===K).map(V=>`<button type="button" class="hx-dot" style="--lc:${v[u(V)]}" data-act="open:${V.id}" title="${c(V.title)}">${V.id.slice(1)}</button>`).join("")}</div>`).join("")}`).join("")}
              <span></span>${_.map(A=>`<span class="hx-clabel">${A}</span>`).join("")}
            </div>
            <div class="hx-axis-x">People-risk (team aggregate)</div>
          </div>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Needs attention first</b><button type="button" class="hc-link" data-act="screen:Signals">All signals \u2192</button></div>
          ${ne.map(A=>`<div class="hc-feed" data-act="open:${A.id}" role="button" tabindex="0"><span class="hx-sev sm" style="--lc:${v[u(A)]}">${u(A)}</span><span class="hc-feed-text"><b>${c(A.title)}</b><br>${c(A.area)}</span></div>`).join("")}
          <div class="hc-panel-head sep"><b>Open signals by area</b></div>
          ${Y.map(([A,K])=>`<div class="hx-arow"><span>${c(A)}</span>${B(K/Q*100,"#1687ff","#45d8ff")}<b>${K}</b></div>`).join("")}
        </div>
      </div>
      <p class="hc-note">People-risk is only ever shown as a team aggregate. Business impact describes organisational exposure \u2014 never the value of a person.</p>`}function U(){const t=g.query.toLowerCase().trim();let e=g.signals.filter(o=>g.filter==="all"||u(o)===g.filter);g.themeFilter!=="all"&&(e=e.filter(o=>o.theme===g.themeFilter)),t&&(e=e.filter(o=>(o.title+" "+o.area+" "+o.theme).toLowerCase().includes(t))),e.sort((o,r)=>(o.status==="resolved")-(r.status==="resolved")||q[r.impact]+E[r.people]-(q[o.impact]+E[o.people]));const i=(o,r)=>`<button type="button" class="hc-filter ${g.filter===o?"on":""}" style="${S(v[o]||"#06b6d4",v[o]||"#67e8f9")}" data-act="prio:${o}">${o!=="all"?"<i></i>":""}${r}</button>`;return`
      ${k.topbar("Search signals, areas or themes")}
      ${k.head("Signals","SIGNALS","Everything worth a look.","Each signal shows its evidence, its sources and how fresh they are. No single signal is a verdict.")}
      <div class="hc-filters">${i("all","All")}${i("Urgent","Urgent")}${i("High","High")}${i("Medium","Medium")}${i("Low","Low")}
        ${g.themeFilter!=="all"?`<button type="button" class="hc-filter on" style="${S(l[g.themeFilter].c1,l[g.themeFilter].c2)}" data-act="theme:all">${c(g.themeFilter)} \u2715</button>`:""}
        <span class="hc-count">${e.length} signal${e.length===1?"":"s"}</span></div>
      <div class="hc-list">${e.length?e.map(w).join(""):`<div class="hc-empty">${b("radar")}<p>No signals match that filter.</p></div>`}</div>`}function z(){const t=F();return`
      ${k.topbar()}
      ${k.head("Themes","THEMES","Where the pressure sits.","Signals grouped into themes so leadership sees the shape, not just the noise.")}
      <div class="hx-themes">
        ${Object.entries(l).map(([e,i])=>{const o=t.filter($=>$.theme===e),r=o.map($=>$.impact).sort(($,_)=>q[_]-q[$])[0];return`<div class="hc-tile" style="${S(i.c1,i.c2)}" data-act="theme:${e}" role="button" tabindex="0">
            <div class="hc-tile-top">${N(i.icon,i.c1,i.c2)}<span class="hc-tile-badge">${o.length} open</span></div>
            <h5>${e}</h5><p>${i.blurb}</p>
            <div class="hx-theme-foot">${r?`Highest impact ${m(r)}`:'<span class="hx-clear">Nothing open</span>'}</div>
            <em class="hc-go">See signals \u2192</em>
          </div>`}).join("")}
      </div>
      <div class="hc-panel" style="margin-top:10px">
        <div class="hc-panel-head"><b>Areas \xD7 themes</b><span class="hc-tag">Open signals</span></div>
        <div class="hx-table">
          <div class="hx-tr hx-th"><span>Area</span>${Object.keys(l).map(e=>`<span title="${e}" aria-label="${e}" style="--lc:${l[e].c1}">${b(l[e].icon)}<em>${e}</em></span>`).join("")}</div>
          ${y.map(e=>`<div class="hx-tr"><span>${c(e)}</span>${Object.keys(l).map(i=>{const o=t.filter(r=>r.area===e&&r.theme===i).length;return`<span>${o?`<i class="hx-heat" style="--lc:${l[i].c1}">${o}</i>`:'<i class="hx-zero">\xB7</i>'}</span>`}).join("")}</div>`).join("")}
        </div>
      </div>`}function X(){return`
      ${k.topbar()}
      ${k.head("Investigations","INVESTIGATIONS","Open lines of enquiry.","A signal that matters becomes an investigation with an owner and an evidence trail.")}
      <div class="hc-list">
        ${g.investigations.map(t=>{const e=T(t.signal);return`<div class="hc-row hx-inv">
            <div class="hc-row-main" data-act="open:${e.id}" role="button" tabindex="0">
              <div class="hc-row-top"><b>${c(e.title)}</b>${m(u(e))}</div>
              <small>Owner: ${c(t.owner)} \xB7 opened ${c(t.opened)} \xB7 ${c(e.area)}</small>
              <div class="hx-steps">${j.map((i,o)=>`<span class="${o<t.step?"done":o===t.step?"now":""}">${o<t.step?b("check"):""}${i}</span>`).join("")}</div>
            </div>
            <div class="hc-row-end">${t.step<3?`<button type="button" class="hc-btn sm" style="${S("#f59e0b","#fcd34d")}" data-act="advance:${t.id}">Move to ${j[t.step+1]}</button>`:'<span class="hc-done" style="--c1:#30a46c">'+b("check")+"Closed</span>"}</div>
          </div>`}).join("")||`<div class="hc-empty">${b("investigate")}<p>No open investigations. Start one from any signal.</p></div>`}
      </div>
      <p class="hc-note">Every step keeps its evidence: who looked, what they saw and what was decided.</p>`}function Z(){const t=g.actions.length,e=g.actions.filter(i=>i.status==="done").length;return`
      ${k.topbar()}
      ${k.head("Actions","ACTIONS","Resilience, not blame.","Actions target the organisation\u2019s exposure \u2014 never a judgement of a person.")}
      <div class="hc-panel hx-progress">
        <div class="hc-panel-head"><b>${e} of ${t} complete</b><span class="hc-tag">${Math.round(e/Math.max(1,t)*100)}%</span></div>
        ${B(e/Math.max(1,t)*100,"#0fb99f","#46dd98")}
      </div>
      <div class="hc-list">
        ${g.actions.map(i=>`
          <div class="hc-row hx-act ${i.status}">
            <button type="button" class="hx-check" data-act="cycle:${i.id}" aria-label="Change status" title="Click to move to the next status">${i.status==="done"?b("check"):""}</button>
            <div class="hc-row-main" data-act="open:${i.signal}" role="button" tabindex="0"><div class="hc-row-top"><b>${c(i.title)}</b></div><small>Owner: ${c(i.owner)} \xB7 due ${c(i.due)} \xB7 from \u201C${c(T(i.signal).title)}\u201D</small></div>
            <div class="hc-row-end"><button type="button" class="hx-status ${i.status}" data-act="cycle:${i.id}">${P[i.status]}</button></div>
          </div>`).join("")}
      </div>
      <p class="hc-note">Actions are proposals for human review. The decision and its rationale stay with the team.</p>`}function ee(){return`
      ${k.topbar()}
      ${k.head("Reports","REPORTS","Evidence you can hand over.","Built from the same signals, investigations and actions \u2014 nothing is invented at reporting time.")}
      <div class="hc-grid2">
        ${g.reports.map(t=>`
          <div class="hc-card" style="${S("#4f46e5","#8b8cff")}">
            <div class="hc-card-top">${N("report","#4f46e5","#8b8cff")}<div class="hc-card-id"><b>${c(t.title)}</b><small>${c(t.desc)}</small></div></div>
            <div class="hc-actions"><span class="hx-status ${t.status==="Ready"?"done":t.status==="Draft"?"planned":"progress"}">${t.status}</span><small class="hx-when">${c(t.when)}</small></div>
            <div class="hc-actions">
              ${t.status==="Ready"?`<button type="button" class="hc-btn" style="${S("#4f46e5","#8b8cff")}" data-act="preview:${t.id}">Preview</button>`:`<button type="button" class="hc-btn" style="${S("#4f46e5","#8b8cff")}" data-act="generate:${t.id}">Generate now</button>`}
            </div>
          </div>`).join("")}
      </div>`}function te(){const t=g.drawer;if(t.startsWith("r"))return se(t);const e=T(t);if(!e)return"";const i=u(e),o=g.investigations.find($=>$.signal===e.id),r=g.actions.find($=>$.signal===e.id);return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${c(e.title)}">
        <div class="hc-drawer-band" style="background:linear-gradient(135deg,${v[i]},${l[e.theme].c1})"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${N(l[e.theme].icon,l[e.theme].c1,l[e.theme].c2,"lg hx-drawer-ico")}${f(e.status)}</div>
        <div class="hc-drawer-id"><b>${c(e.title)}</b><small>${c(e.area)} \xB7 ${c(e.theme)} \xB7 updated ${c(e.fresh)}</small></div>
        <div class="hx-dim3">
          <div><small>Business impact</small>${m(e.impact)}</div>
          <div><small>People-risk (team)</small>${m(e.people)}</div>
          <div><small>Confidence</small>${L(e.confidence)}</div>
        </div>
        <div class="hx-prio" style="--lc:${v[i]}"><b>${i} priority</b><span>${c(e.impact)} impact \xD7 ${c(e.people.toLowerCase())} people-risk. Used to order the queue only \u2014 both dimensions stay visible.</span></div>
        <div class="hc-why-label">Evidence</div>
        <ul class="hc-why">${e.evidence.map($=>`<li>${c($)}</li>`).join("")}</ul>
        <div class="hc-why-label">Sources</div>
        <div class="hc-chips">${e.sources.map($=>`<span class="hc-chip">${b("report")}${c($)}</span>`).join("")}</div>
        <div class="hc-why-label">Suggested resilience action</div>
        <p class="hx-suggest">${c(e.action)}</p>
        <div class="hc-drawer-actions">
          ${e.status==="resolved"?'<span class="hc-done" style="--c1:#30a46c">'+b("check")+"Resolved</span>":`
            ${o?'<button type="button" class="hc-btn ghost" data-act="screen:Investigations">View investigation</button>':`<button type="button" class="hc-btn" style="${S("#f59e0b","#fcd34d")}" data-act="investigate:${e.id}">Start investigation</button>`}
            ${r?'<button type="button" class="hc-btn ghost" data-act="screen:Actions">View action</button>':`<button type="button" class="hc-btn" style="${S("#0fb99f","#46dd98")}" data-act="plan:${e.id}">Create action</button>`}
            <button type="button" class="hc-btn ghost" data-act="accept:${e.id}">Accept risk</button>`}
        </div>
        <p class="hc-note">HiveRisk recommends; people decide. People-risk is shown for the team, never for an individual.</p>
      </aside>`}function se(t){const e=g.reports.find(r=>r.id===t),i=F(),o=g.actions.filter(r=>r.status==="done").length;return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${c(e.title)}">
        <div class="hc-drawer-band" style="background:linear-gradient(135deg,#4f46e5,#8b8cff)"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${N("report","#4f46e5","#8b8cff","lg hx-drawer-ico")}</div>
        <div class="hc-drawer-id"><b>${c(e.title)}</b><small>Preview \xB7 generated from live demo data</small></div>
        <div class="hx-dim3">
          <div><small>Open signals</small><b class="hx-big">${i.length}</b></div>
          <div><small>Urgent / high</small><b class="hx-big">${i.filter(r=>["Urgent","High"].includes(u(r))).length}</b></div>
          <div><small>Actions done</small><b class="hx-big">${o}/${g.actions.length}</b></div>
        </div>
        <div class="hc-why-label">Headlines</div>
        <ul class="hc-why">${i.slice().sort((r,$)=>q[$.impact]+E[$.people]-(q[r.impact]+E[r.people])).slice(0,3).map(r=>`<li><b>${c(r.title)}</b> \u2014 ${c(r.action.toLowerCase())}</li>`).join("")}</ul>
        <p class="hc-note">Illustrative preview. A real report cites every source and records who approved it.</p>
      </aside>`}function ae(t,e){switch(t){case"open":return g.drawer=e,!0;case"prio":return g.filter=e,!0;case"theme":return g.themeFilter=e,e!=="all"&&(g.filter="all",k.go("Signals")),!0;case"investigate":{g.investigations.unshift({id:"i"+ ++g.seq,signal:e,owner:"You",opened:"just now",step:0});const i=T(e);return i.status==="new"&&(i.status="review"),k.toast("Investigation opened with you as owner."),!0}case"plan":{const i=T(e);return g.actions.unshift({id:"a"+ ++g.seq,signal:e,title:i.action,owner:"You",due:"in 4 weeks",status:"planned"}),i.status="action",k.toast("Action created and added to the plan."),!0}case"accept":return T(e).status="resolved",g.investigations.filter(i=>i.signal===e).forEach(i=>{i.step=3}),g.drawer=null,k.toast("Risk accepted and recorded as a human decision."),!0;case"advance":{const i=g.investigations.find(o=>o.id===e);return i&&i.step<3&&(i.step++,i.step===3&&(T(i.signal).status="resolved",k.toast("Investigation closed; signal resolved."))),!0}case"cycle":{const i=g.actions.find(o=>o.id===e);return i.status=i.status==="planned"?"progress":i.status==="progress"?"done":"planned",i.status==="done"&&k.toast("Action complete."),!0}case"generate":{const i=g.reports.find(o=>o.id===e);return i.status="Ready",i.when="Just now",k.toast(`${i.title} generated.`),!0}case"preview":return g.drawer=e,!0;default:return!1}}k=O({state:g,side:Object.keys(H),screens:H,start:"Overview",me:I,act:ae,drawer:te,searchScreens:["Signals"],searchPlaceholder:"Search signals, areas or themes",bellScreen:"Signals",bellLabel:"New signals",badge:()=>g.signals.filter(t=>t.status==="new").length,sideBadge:()=>["Signals",g.signals.filter(t=>t.status==="new").length]}),window.HiveRisk=k.api})(),(function(){const{esc:c,icon:b,tint:S,avatar:R,tile:N,bar:B,createApp:O}=window.HiveUI,I={id:"je",name:"Jordan Ellis",init:"JE",role:"Product Designer"},q={je:I,mk:{id:"mk",name:"Maya Kent",init:"MK",role:"Support Operations"},lb:{id:"lb",name:"Leo Brandt",init:"LB",role:"People Experience"},th:{id:"th",name:"Tariq Hussein",init:"TH",role:"Data Science"},rk:{id:"rk",name:"Ruth Kimani",init:"RK",role:"Platform Engineering"},ow:{id:"ow",name:"Olivia Wright",init:"OW",role:"Customer Success"},dn:{id:"dn",name:"Dev Nair",init:"DN",role:"Data Engineering"},sp:{id:"sp",name:"Sofia Petrov",init:"SP",role:"Engineering"},fa:{id:"fa",name:"Felix Adeyemi",init:"FA",role:"Finance Systems"},mo:{id:"mo",name:"Marta Ortiz",init:"MO",role:"VP Operations"},gc:{id:"gc",name:"Grace Chen",init:"GC",role:"CTO"},hb:{id:"hb",name:"Hana Boateng",init:"HB",role:"Learning & Development"}},E={onb:{name:"Faster onboarding",c:["#1687ff","#45d8ff"]},auto:{name:"Automate busywork",c:["#7c5cff","#b27bff"]},cost:{name:"Cut cloud cost",c:["#f59e0b","#fcd34d"]},green:{name:"Greener operations",c:["#0fb99f","#46dd98"]},cx:{name:"Happier customers",c:["#f2508b","#ff8fb1"]}},v=["Idea","Evidence","Experiment","Outcome"],n=["#7d8ba0","#1687ff","#7c5cff","#0fb99f"],l={screen:"Home",query:"",drawer:null,toast:"",focus:null,form:{title:"",challenge:"auto",summary:""},challengeFilter:"all",sort:"top",stageFilter:"all",ideas:[{id:"v1",title:"AI assistant that drafts support-ticket replies",author:"mk",challenge:"auto",stage:2,votes:142,comments:18,days:34,dims:{"Strategic alignment":90,"Problem significance":88,"Evidence strength":82,Feasibility:74},sponsor:"mo",members:["mk","th"],roles:["Data scientist","Designer"],tags:["AI","Support","Automation"],summary:"Draft first replies to common support tickets so agents review and send instead of writing from scratch.",evidence:["Support backlog up 22% this year (internal dashboard)","31 of 42 agents polled said they would use drafts"],next:"Run a four-week experiment with one support pod"},{id:"v2",title:"Self-serve onboarding checklist",author:"lb",challenge:"onb",stage:1,votes:96,comments:11,days:21,dims:{"Strategic alignment":84,"Problem significance":72,"Evidence strength":70,Feasibility:88},sponsor:null,members:["lb"],roles:["Frontend engineer"],tags:["Onboarding","People"],summary:"One checklist a new starter owns, with every access request and first-week task in one place.",evidence:["New starters raise an average of 9 access tickets in week one","Managers report onboarding admin as a top-three time sink"],next:"Find an executive sponsor"},{id:"v3",title:"Cloud cost anomaly alerts in team chat",author:"rk",challenge:"cost",stage:2,votes:118,comments:9,days:40,dims:{"Strategic alignment":88,"Problem significance":70,"Evidence strength":86,Feasibility:80},sponsor:"gc",members:["rk","dn"],roles:[],tags:["Cloud","FinOps"],summary:"Alert the owning team the same day their cloud spend jumps, with the likely cause attached.",evidence:["Three cost spikes last quarter went unnoticed for over a week","Tagging coverage is now above 90%, so owners are known"],next:"Measure spend avoided over six weeks"},{id:"v4",title:"Weekly customer-feedback digest",author:"ow",challenge:"cx",stage:0,votes:54,comments:6,days:6,dims:{"Strategic alignment":76,"Problem significance":64,"Evidence strength":48,Feasibility:82},sponsor:null,members:["ow"],roles:["Analyst"],tags:["Customers","Insight"],summary:"A short weekly digest of what customers asked for, grouped by theme, for every product team.",evidence:["Feedback currently lives in four separate tools"],next:"Gather evidence from two product teams"},{id:"v5",title:"Carbon-aware batch scheduling",author:"dn",challenge:"green",stage:1,votes:71,comments:7,days:18,dims:{"Strategic alignment":80,"Problem significance":58,"Evidence strength":66,Feasibility:70},sponsor:null,members:["dn","rk"],roles:["Platform engineer"],tags:["Sustainability","Data"],summary:"Run flexible batch jobs when the grid is cleanest, without missing any deadline.",evidence:["About 40% of nightly batch jobs have flexible start times"],next:"Estimate emissions avoided on one pipeline"},{id:"v6",title:"Auto-drafted release notes",author:"sp",challenge:"auto",stage:3,votes:130,comments:22,days:72,dims:{"Strategic alignment":78,"Problem significance":76,"Evidence strength":90,Feasibility:92},sponsor:"gc",members:["sp","je"],roles:[],tags:["Engineering","Automation"],summary:"Draft release notes from merged changes for a human to edit and publish.",evidence:["Pilot with two teams over six releases"],next:"Roll out to all product teams",outcome:{type:"Value",text:"Pilot: about three hours saved per release across two teams (illustrative)."}},{id:"v7",title:"Supplier invoice auto-matching",author:"fa",challenge:"auto",stage:0,votes:40,comments:3,days:3,dims:{"Strategic alignment":70,"Problem significance":50,"Evidence strength":52,Feasibility:66},sponsor:null,members:["fa"],roles:["Automation engineer"],tags:["Finance","Automation"],summary:"Match supplier invoices to purchase orders automatically and flag only the exceptions.",evidence:["Finance matches about 1,200 invoices a month by hand"],next:"Size the exception rate from last quarter"},{id:"v8",title:"Onboarding video library",author:"hb",challenge:"onb",stage:3,votes:88,comments:14,days:90,dims:{"Strategic alignment":72,"Problem significance":80,"Evidence strength":74,Feasibility:90},sponsor:"mo",members:["hb"],roles:[],tags:["Learning","Onboarding"],summary:"Short videos answering the questions every new starter asks.",evidence:["Completion rate high across the pilot cohort"],next:"Pair videos with a live Q&A session",outcome:{type:"Learning",text:"Completion was high, but questions still went to managers \u2014 pairing with live Q&A next."}},{id:"v9",title:"Design-system audit bot",author:"je",challenge:"auto",stage:0,votes:12,comments:2,days:9,dims:{"Strategic alignment":62,"Problem significance":56,"Evidence strength":44,Feasibility:80},sponsor:null,members:["je"],roles:["Frontend engineer"],tags:["Design","Quality"],summary:"Flag components that drift from the design system before they ship.",evidence:["Reviewer feedback: add how many screens drift today"],next:"Add evidence: count drifting components",feedback:"Promising \u2014 add how many screens drift today to strengthen the evidence."}].map(t=>({...t,members:t.members.slice(),roles:t.roles.slice()})),voted:new Set(["v6"]),sponsorAsked:new Set,lastCheck:null,seq:20},y=t=>l.ideas.find(e=>e.id===t),j=t=>q[t]||I,P=t=>t>=80?"High":t>=60?"Medium":"Low",g=(t,e)=>Object.entries(t.dims).map(([i,o])=>`${i}: ${P(o)}`).join(e),T=t=>`<span class="hx-pips" role="img" aria-label="${c(g(t,", "))}" title="${c(g(t," \xB7 "))}">${Object.values(t.dims).map(e=>`<i style="height:${Math.max(25,e)}%"></i>`).join("")}</span>`,F=t=>{const e=E[t];return`<span class="hx-ch" style="${S(e.c[0],e.c[1])}">${c(e.name)}</span>`},u=t=>`<span class="hx-stage" style="--lc:${n[t]}">${v[t]}</span>`,m=t=>`<button type="button" class="hx-vote ${l.voted.has(t.id)?"on":""}" data-act="vote:${t.id}" aria-pressed="${l.voted.has(t.id)}" title="Upvote">\u25B2<b>${t.votes}</b></button>`,f=()=>l.ideas.filter(t=>t.author===I.id);function L(t){const e=E[t.challenge];return`
      <div class="hc-card hx-idea" style="${S(e.c[0],e.c[1])}" data-act="open:${t.id}" role="button" tabindex="0">
        <div class="hx-idea-top">${F(t.challenge)}${u(t.stage)}</div>
        <b class="hx-idea-title">${c(t.title)}</b>
        <div class="hx-idea-foot">
          ${R(j(t.author),"xs")}<small>${c(j(t.author).name)}</small>
          <span class="hx-meta">${b("chat")}${t.comments}</span>
          ${m(t)}
          ${T(t)}
        </div>
      </div>`}let p;const w={Home:{icon:"portfolio",c1:"#1687ff",c2:"#45d8ff",render:k},Ideas:{icon:"idea",c1:"#f59e0b",c2:"#fcd34d",render:D},Explore:{icon:"explore",c1:"#06b6d4",c2:"#67e8f9",render:U},"My submissions":{icon:"submit",c1:"#7c5cff",c2:"#b27bff",render:z},Teams:{icon:"teams",c1:"#0fb99f",c2:"#46dd98",render:X},Insights:{icon:"trend",c1:"#f2508b",c2:"#ff8fb1",render:Z}};function k(){const t=l.ideas.slice().sort((o,r)=>r.votes-o.votes).slice(0,3),e=v.map((o,r)=>l.ideas.filter($=>$.stage===r).length),i=(o,r)=>{const $=w[o];return`<button type="button" class="hc-qchip" style="${S($.c1,$.c2)}" data-act="screen:${o}">${b($.icon)}<span>${r}</span></button>`};return`
      ${p.topbar()}
      <div class="hc-head"><div class="hc-head-l"><div><small>INNOVATION MARKETPLACE</small><h4>What\u2019s brewing, Jordan? <span class="hc-wave">\u{1F4A1}</span></h4><p>Ideas from across the company, with a clear path from first thought to real outcome.</p></div></div>
        <button type="button" class="hc-btn" style="${S("#7c5cff","#b27bff")}" data-act="screen:My submissions">${b("sparkle")}Submit an idea</button></div>
      <div class="hc-qchips">
        ${i("Ideas",`<b>${l.ideas.length}</b> ideas this quarter`)}
        ${i("Explore",`<b>${e[2]}</b> experiments running`)}
        ${i("Insights",`<b>${e[3]}</b> outcomes recorded`)}
      </div>
      <div class="hx-pipe">
        ${v.map((o,r)=>`<button type="button" class="hx-pipe-step" style="--lc:${n[r]}" data-act="stage:${r}"><b>${e[r]}</b><span>${o}</span></button>${r<3?"<i>\u2192</i>":""}`).join("")}
      </div>
      <div class="hc-panel-head sep"><b>Trending this week</b><button type="button" class="hc-link" data-act="screen:Ideas">All ideas \u2192</button></div>
      <div class="hx-cards3">${t.map(L).join("")}</div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Open challenges</b><span class="hc-tag">Set by leadership</span></div>
          <div class="hc-chips big">${Object.keys(E).map(o=>`<button type="button" class="hx-ch big" style="${S(E[o].c[0],E[o].c[1])}" data-act="challenge:${o}">${c(E[o].name)} <b>${l.ideas.filter(r=>r.challenge===o).length}</b></button>`).join("")}</div>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Your submissions</b><button type="button" class="hc-link" data-act="screen:My submissions">Manage \u2192</button></div>
          ${f().map(o=>`<div class="hc-feed" data-act="open:${o.id}" role="button" tabindex="0">${N("idea",E[o.challenge].c[0],E[o.challenge].c[1],"xs")}<span class="hc-feed-text"><b>${c(o.title)}</b></span>${u(o.stage)}</div>`).join("")}
        </div>
      </div>`}function H(){const t=l.query.toLowerCase().trim();let e=l.ideas.filter(i=>l.challengeFilter==="all"||i.challenge===l.challengeFilter);return l.stageFilter!=="all"&&(e=e.filter(i=>i.stage===Number(l.stageFilter))),t&&(e=e.filter(i=>(i.title+" "+i.tags.join(" ")+" "+E[i.challenge].name+" "+j(i.author).name).toLowerCase().includes(t))),e.sort((i,o)=>l.sort==="top"?o.votes-i.votes:i.days-o.days)}function D(){const t=H(),e=(i,o,r)=>`<button type="button" class="hc-filter ${l.challengeFilter===i?"on":""}" style="${S(r[0],r[1])}" data-act="challenge:${i}">${i!=="all"?"<i></i>":""}${o}</button>`;return`
      ${p.topbar("Search ideas, tags or people")}
      ${p.head("Ideas","IDEAS","The open pipeline.","Every idea keeps its author, its evidence and its stage. Nothing disappears into a suggestion box.",`<div class="hx-seg"><button type="button" class="${l.sort==="top"?"on":""}" data-act="sort:top">Top</button><button type="button" class="${l.sort==="new"?"on":""}" data-act="sort:new">New</button></div>`)}
      <div class="hc-filters">${e("all","All challenges",["#f59e0b","#fcd34d"])}${Object.keys(E).map(i=>e(i,E[i].name,E[i].c)).join("")}
        ${l.stageFilter!=="all"?`<button type="button" class="hc-filter on" style="${S(n[l.stageFilter],n[l.stageFilter])}" data-act="stage:all">${v[l.stageFilter]} \u2715</button>`:""}
        <span class="hc-count">${t.length} idea${t.length===1?"":"s"}</span></div>
      ${t.length?`<div class="hc-grid2">${t.map(L).join("")}</div>`:`<div class="hc-empty">${b("idea")}<p>No ideas match yet \u2014 maybe yours is the first?</p><button type="button" class="hc-btn sm" style="${S("#7c5cff","#b27bff")}" data-act="screen:My submissions">Submit an idea</button></div>`}`}function U(){return`
      ${p.topbar()}
      ${p.head("Explore","PIPELINE","From idea to outcome.","An idea moves forward when it earns it: evidence, a sponsor, an experiment, a measured result.")}
      <div class="hx-kanban">
        ${v.map((t,e)=>{const i=l.ideas.filter(o=>o.stage===e).sort((o,r)=>r.votes-o.votes);return`<div class="hx-col" style="--lc:${n[e]}">
            <div class="hx-col-head"><b>${t}</b><span>${i.length}</span></div>
            ${i.map(o=>`<div class="hx-kcard" data-act="open:${o.id}" role="button" tabindex="0">
              ${F(o.challenge)}
              <b>${c(o.title)}</b>
              <div class="hx-kfoot">${R(j(o.author),"xs")}<span class="hx-meta">\u25B2 ${o.votes}</span>${o.sponsor?`<span class="hx-sponsored" title="Sponsored by ${c(j(o.sponsor).name)}">${b("check")}Sponsor</span>`:""}${o.outcome?`<span class="hx-out ${o.outcome.type.toLowerCase()}">${o.outcome.type}</span>`:""}</div>
            </div>`).join("")}
          </div>`}).join("")}
      </div>`}function z(){const t=l.lastCheck;return`
      ${p.topbar()}
      ${p.head("My submissions","MY SUBMISSIONS","Pitch an idea.","Say what and why in a sentence or two. HiveVentures tags it and checks for similar ideas before it goes live.")}
      <div class="hc-split">
        <div class="hc-panel hx-form">
          <div class="hc-panel-head"><b>New idea</b><span class="hc-tag">Takes a minute</span></div>
          <label><span>Idea title</span><input data-field="title" value="${c(l.form.title)}" placeholder="e.g. Automate expense receipt matching" maxlength="80"></label>
          <label><span>Challenge it answers</span><select data-field="challenge">${Object.keys(E).map(e=>`<option value="${e}" ${l.form.challenge===e?"selected":""}>${c(E[e].name)}</option>`).join("")}</select></label>
          <label><span>Why it matters</span><textarea data-field="summary" rows="3" placeholder="What problem does it solve, and for whom?">${c(l.form.summary)}</textarea></label>
          <div class="hc-actions"><button type="button" class="hc-btn" style="${S("#7c5cff","#b27bff")}" data-act="submit">${b("sparkle")}Submit idea</button></div>
          ${t?`<div class="hx-ai">${b("sparkle")}<div><b>AI check</b><span>Tagged ${t.tags.map(e=>`<i>${c(e)}</i>`).join("")}${t.similar?` \xB7 Similar to \u201C<a data-act="open:${t.similar.id}">${c(t.similar.title)}</a>\u201D \u2014 consider joining forces.`:" \xB7 No similar ideas found."}</span></div></div>`:""}
        </div>
        <div>
          ${f().map(e=>`
            <div class="hc-card hx-mine" style="${S(E[e.challenge].c[0],E[e.challenge].c[1])}">
              <div class="hx-idea-top">${F(e.challenge)}<span class="hx-meta">\u25B2 ${e.votes} \xB7 ${e.comments} comments</span></div>
              <b class="hx-idea-title" data-act="open:${e.id}" role="button" tabindex="0">${c(e.title)}</b>
              <div class="hx-steps">${v.map((i,o)=>`<span class="${o<e.stage?"done":o===e.stage?"now":""}">${o<e.stage?b("check"):""}${i}</span>`).join("")}</div>
              ${e.feedback?`<p class="hx-feedback">${b("chat")}${c(e.feedback)}</p>`:`<p class="hc-note">Next: ${c(e.next)}</p>`}
            </div>`).join("")}
        </div>
      </div>
      <p class="hc-note">Submissions, votes and comments are never turned into a hidden performance score.</p>`}function X(){const t=l.ideas.filter(e=>e.stage>=1&&e.stage<=2);return`
      ${p.topbar()}
      ${p.head("Teams","TEAMS","Who\u2019s building together.","Ideas attract teams. People join by choice \u2014 open roles are listed on every idea.")}
      <div class="hc-grid2">
        ${t.map(e=>{const i=E[e.challenge],o=e.members.includes(I.id);return`<div class="hc-card" style="${S(i.c[0],i.c[1])}">
            <div class="hx-idea-top">${F(e.challenge)}${u(e.stage)}</div>
            <b class="hx-idea-title" data-act="open:${e.id}" role="button" tabindex="0">${c(e.title)}</b>
            <div class="hc-comm-meta"><span class="hc-stack">${e.members.map(r=>R(j(r),"xs")).join("")}</span><small>${e.members.length} member${e.members.length===1?"":"s"}${e.sponsor?` \xB7 sponsor ${c(j(e.sponsor).name)}`:" \xB7 seeking a sponsor"}</small></div>
            <div class="hc-chips">${e.roles.length?e.roles.map(r=>`<span class="hc-chip strong">Open: ${c(r)}</span>`).join(""):'<span class="hc-chip">Team complete</span>'}</div>
            <div class="hc-actions">${o?`<span class="hc-done" style="${S(i.c[0],i.c[1])}">${b("check")}You\u2019re on this team</span><button type="button" class="hc-btn ghost sm" data-act="join:${e.id}">Leave</button>`:`<button type="button" class="hc-btn sm" style="${S(i.c[0],i.c[1])}" data-act="join:${e.id}">Join team</button>`}</div>
          </div>`}).join("")}
      </div>`}function Z(){const t=v.map((r,$)=>l.ideas.filter(_=>_.stage>=$).length),e=Object.keys(E).map(r=>[r,l.ideas.filter($=>$.challenge===r).length]),i=Math.max(1,...e.map(r=>r[1])),o=l.ideas.filter(r=>r.outcome);return`
      ${p.topbar()}
      ${p.head("Insights","INSIGHTS","Is innovation moving?","The pipeline end to end \u2014 ideas in, experiments run, outcomes recorded.")}
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Pipeline funnel</b><span class="hc-tag">This quarter</span></div>
          ${v.map((r,$)=>`<div class="hx-arow"><span>${$===0?"Submitted":"Reached "+r.toLowerCase()}</span>${B(t[$]/t[0]*100,n[$],n[$])}<b>${t[$]}</b></div>`).join("")}
          <div class="hc-panel-head sep"><b>Ideas by challenge</b></div>
          ${e.map(([r,$])=>`<div class="hx-arow"><span>${c(E[r].name)}</span>${B($/i*100,E[r].c[0],E[r].c[1])}<b>${$}</b></div>`).join("")}
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Outcomes recorded</b><span class="hc-tag">Value or learning</span></div>
          ${o.map(r=>`<div class="hx-outcome" data-act="open:${r.id}" role="button" tabindex="0"><span class="hx-out ${r.outcome.type.toLowerCase()}">${r.outcome.type}</span><b>${c(r.title)}</b><small>${c(r.outcome.text)}</small></div>`).join("")}
          <p class="hc-note">An experiment that teaches us something is a result too \u2014 both are recorded.</p>
        </div>
      </div>`}function ee(){const t=y(l.drawer);if(!t)return"";const e=E[t.challenge],i=t.members.includes(I.id);return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${c(t.title)}">
        <div class="hc-drawer-band" style="background:linear-gradient(135deg,${e.c[0]},${e.c[1]})"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${N("idea",e.c[0],e.c[1],"lg hx-drawer-ico")}${u(t.stage)}</div>
        <div class="hc-drawer-id"><b>${c(t.title)}</b><small>${c(j(t.author).name)} \xB7 ${c(j(t.author).role)} \xB7 ${c(e.name)}</small></div>
        <div class="hx-steps">${v.map((o,r)=>`<span class="${r<t.stage?"done":r===t.stage?"now":""}">${r<t.stage?b("check"):""}${o}</span>`).join("")}</div>
        <p class="hx-suggest">${c(t.summary)}</p>
        <div class="hc-why-label">How this idea is prioritised</div>
        ${Object.entries(t.dims).map(([o,r])=>`<div class="hx-arow"><span>${c(o)}</span>${B(r,e.c[0],e.c[1])}<b class="hx-word">${P(r)}</b></div>`).join("")}
        <div class="hc-why-label">Evidence</div>
        <ul class="hc-why" style="${S(e.c[0],e.c[1])}">${t.evidence.map(o=>`<li>${c(o)}</li>`).join("")}</ul>
        ${t.outcome?`<div class="hx-prio" style="--lc:${t.outcome.type==="Value"?"#0fb99f":"#7c5cff"}"><b>${t.outcome.type} outcome</b><span>${c(t.outcome.text)}</span></div>`:`<div class="hc-why-label">Next step</div><p class="hx-suggest">${c(t.next)}</p>`}
        <div class="hc-why-label">Team</div>
        <div class="hc-comm-meta"><span class="hc-stack">${t.members.map(o=>R(j(o),"xs")).join("")}</span><small>${t.sponsor?`Sponsored by ${c(j(t.sponsor).name)}, ${c(j(t.sponsor).role)}`:"Looking for a sponsor"}</small></div>
        <div class="hc-drawer-actions">
          ${m(t)}
          ${t.stage<3&&t.author!==I.id?i?`<button type="button" class="hc-btn ghost" data-act="join:${t.id}">Leave team</button>`:`<button type="button" class="hc-btn" style="${S(e.c[0],e.c[1])}" data-act="join:${t.id}">Join team</button>`:""}
          ${t.sponsor?"":l.sponsorAsked.has(t.id)?`<span class="hc-done" style="${S(e.c[0],e.c[1])}">${b("check")}Sponsor intro requested</span>`:`<button type="button" class="hc-btn ghost" data-act="sponsor:${t.id}">Suggest a sponsor</button>`}
        </div>
        <p class="hc-note">There is no single score: each dimension is judged on its own, AI-assisted and reviewed by people. Ideas are compared, never the people behind them.</p>
      </aside>`}const te=new Set("a an the and or for to of in on with our we is are be by that this it from at as into".split(" "));function se(t,e){const o=((t+" "+e).toLowerCase().match(/[a-z]{4,}/g)||[]).filter(W=>!te.has(W)),r=[...new Set(o)].slice(0,3).map(W=>W[0].toUpperCase()+W.slice(1));let $=null,_=0;return l.ideas.forEach(W=>{const Y=(W.title+" "+W.tags.join(" ")+" "+W.summary).toLowerCase(),Q=o.filter(ne=>Y.includes(ne)).length;Q>_&&(_=Q,$=W)}),{tags:r.length?r:["General"],similar:_>=2?$:null}}function ae(t,e){switch(t){case"open":return l.drawer=e,!0;case"vote":{const i=y(e);return l.voted.has(e)?(l.voted.delete(e),i.votes--):(l.voted.add(e),i.votes++),!0}case"challenge":return l.challengeFilter=e,l.stageFilter="all",l.screen!=="Ideas"&&p.go("Ideas"),!0;case"stage":return l.stageFilter=e,l.challengeFilter="all",e!=="all"&&l.screen!=="Ideas"&&p.go("Ideas"),!0;case"sort":return l.sort=e,!0;case"join":{const i=y(e);return i.members.includes(I.id)?(i.members=i.members.filter(o=>o!==I.id),p.toast("You left the team.")):(i.members.push(I.id),p.toast(`You joined the team for \u201C${i.title}\u201D.`)),!0}case"sponsor":return l.sponsorAsked.add(e),p.toast("Sponsor intro requested \u2014 the innovation team will follow up."),!0;case"submit":{const i=(l.form.title||"").trim();if(i.length<6)return p.toast("Give your idea a title of at least a few words."),!0;const o=se(i,l.form.summary||""),r="v"+ ++l.seq;return l.ideas.unshift({id:r,title:i,author:I.id,challenge:l.form.challenge,stage:0,votes:1,comments:0,days:0,dims:{"Strategic alignment":72,"Problem significance":60,"Evidence strength":40,Feasibility:70},sponsor:null,members:[I.id],roles:[],tags:o.tags,summary:(l.form.summary||"").trim()||"Summary to follow.",evidence:["Add evidence to move this idea forward"],next:"Gather evidence and find a sponsor"}),l.voted.add(r),l.lastCheck=o,l.form={title:"",challenge:l.form.challenge,summary:""},p.toast(o.similar?"Submitted. The AI check found a similar idea \u2014 take a look.":"Submitted. Your idea is live in the pipeline."),!0}default:return!1}}p=O({state:l,side:Object.keys(w),screens:w,start:"Home",me:I,act:ae,drawer:ee,searchScreens:["Ideas"],searchPlaceholder:"Search ideas, tags or people",bellScreen:"My submissions",bellLabel:"Updates on your ideas",badge:()=>f().filter(t=>t.feedback).length,sideBadge:()=>["My submissions",f().filter(t=>t.feedback).length]}),window.HiveVentures=p.api})(),(()=>{const c=document.querySelector(".menu"),b=document.querySelector(".nav-links");function S(){!c||!b||(b.style.display="",b.style.position="",b.style.top="",b.style.left="",b.style.right="",b.style.padding="",b.style.background="",b.style.flexDirection="",b.style.gap="",b.style.borderBottom="",c.setAttribute("aria-expanded","false"))}c&&b&&(c.addEventListener("click",()=>{if(c.getAttribute("aria-expanded")==="true"){S();return}c.setAttribute("aria-expanded","true"),b.style.display="flex",b.style.position="absolute",b.style.top="74px",b.style.left="0",b.style.right="0",b.style.padding="22px",b.style.background="rgba(247,248,250,.97)",b.style.flexDirection="column",b.style.gap="18px",b.style.borderBottom="1px solid #e2e6eb"}),window.addEventListener("resize",()=>{window.innerWidth>850&&S()}));const R=new IntersectionObserver(u=>u.forEach(m=>{m.isIntersecting&&m.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(u=>R.observe(u));const N='<div class="exp-user"><div class="exp-avatar">AR</div><div class="exp-status"><b>Available</b>Profile active</div></div>',B={connect:{code:"HC / HIVE CONNECT",brand:"HIVE CONNECT",mark:"mark-connect",app:"HiveConnect",get side(){return window.HiveConnect.side},get icons(){return window.HiveConnect.icons},get colors(){return window.HiveConnect.colors},get start(){return window.HiveConnect.start},get later(){return window.HiveConnect.later||[]},screens:{Home:`
        <div class="exp-main-head">
          <div><small>PERSONAL WORKSPACE</small><h4>Good morning, Alex.</h4><p>Here are people and conversations that could be useful to you.</p></div>
          ${N}
        </div>
        <div class="exp-search" data-screen="Find people" role="button" tabindex="0"><span>What can I help you find?</span><b>\u2315</b></div>
        <div class="exp-grid-3">
          <div class="exp-panel" data-screen="Meet"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#meet"></use></svg></span><div class="exp-panel-label">Suggested for you</div><h5>MEET</h5><p>People you may want to know based on interests, role and intent.</p><div class="exp-match"><div class="mini-avatar">SK</div><div><b>Samira Khan</b><small>Transformation \xB7 London</small></div></div><div class="exp-tagrow"><span class="exp-tag">AI strategy</span><span class="exp-tag">Change</span></div><em class="exp-go">Open Meet \u2192</em></div>
          <div class="exp-panel" data-screen="Help"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#help"></use></svg></span><div class="exp-panel-label">Need expertise?</div><h5>HELP</h5><p>Find colleagues with relevant experience when you need an answer.</p><div class="exp-match"><div class="mini-avatar">JM</div><div><b>James Morgan</b><small>Cloud \xB7 Platform engineering</small></div></div><div class="exp-tagrow"><span class="exp-tag">AWS</span><span class="exp-tag">Kubernetes</span></div><em class="exp-go">Open Help \u2192</em></div>
          <div class="exp-panel" data-screen="Learn"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#learn"></use></svg></span><div class="exp-panel-label">Keep learning</div><h5>LEARN</h5><p>Discover people who share knowledge you want to build.</p><div class="exp-match"><div class="mini-avatar">NT</div><div><b>Nadia Thomas</b><small>Data \xB7 Analytics</small></div></div><div class="exp-tagrow"><span class="exp-tag">Data</span><span class="exp-tag">Mentoring</span></div><em class="exp-go">Open Learn \u2192</em></div>
        </div>
        <div class="exp-panel" style="margin-top:14px"><div class="exp-panel-label">Your profile signals</div><div class="exp-table"><div class="exp-table-row"><strong>What I can help with</strong><span>Platform delivery</span><b class="exp-pill">Visible</b></div><div class="exp-table-row"><strong>What I want to learn</strong><span>Applied AI</span><b class="exp-pill">Visible</b></div><div class="exp-table-row"><strong>How I want to connect</strong><span>Meet \xB7 Help</span><b class="exp-pill">Private controls</b></div></div></div>
      `,"Find people":`
        <div class="exp-main-head">
          <div><small>FIND PEOPLE</small><h4>What do you need today?</h4><p>Pick an intent, or describe what you need \u2014 HiveConnect finds the right colleague and explains why.</p></div>
          ${N}
        </div>
        <div class="exp-search"><span>Describe what you need\u2026</span><b>\u2315</b></div>
        <div class="exp-grid-2">
          <div class="exp-panel" data-screen="Meet"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#meet"></use></svg></span><div class="exp-panel-label">Social connection</div><h5>MEET</h5><p>Coffee, lunch, a conversation with someone new.</p><em class="exp-go">Open \u2192</em></div>
          <div class="exp-panel" data-screen="Help"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#help"></use></svg></span><div class="exp-panel-label">Expertise</div><h5>HELP</h5><p>Find a colleague who has opted in to help with this.</p><em class="exp-go">Open \u2192</em></div>
          <div class="exp-panel" data-screen="Learn"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#learn"></use></svg></span><div class="exp-panel-label">Growth</div><h5>LEARN</h5><p>Mentors and specialists who can teach you something.</p><em class="exp-go">Open \u2192</em></div>
          <div class="exp-panel" data-screen="Belong"><span class="hex-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#belong"></use></svg></span><div class="exp-panel-label">Community</div><h5>BELONG</h5><p>Meet people outside your usual team or office.</p><em class="exp-go">Open \u2192</em></div>
        </div>
        <div class="exp-footnote">Every recommendation carries a visible reason. The employee always chooses.</div>
      `,Meet:`
        <div class="exp-main-head">
          <div><small>MEET</small><h4>People worth knowing.</h4><p>Suggestions built from interests, role and intent \u2014 never from private content.</p></div>
          ${N}
        </div>
        <div class="exp-grid-2">
          <div class="exp-panel">
            <div class="exp-matchrow"><div class="exp-match" style="margin-top:0"><div class="mini-avatar">SK</div><div><b>Samira Khan</b><small>Transformation \xB7 London</small></div></div><b class="exp-pill">88% match</b></div>
            <div class="exp-panel-label" style="margin-top:14px">Why this person?</div>
            <ul class="exp-why"><li>Shared interest in AI strategy and change</li><li>Both opted in to Meet this week</li><li>In the London office on the same days</li></ul>
            <div class="exp-actions"><button type="button" class="exp-btn">Say hello</button><button type="button" class="exp-btn ghost">Not now</button></div>
          </div>
          <div class="exp-panel">
            <div class="exp-matchrow"><div class="exp-match" style="margin-top:0"><div class="mini-avatar">DO</div><div><b>Daniel Obi</b><small>Design \xB7 Remote</small></div></div><b class="exp-pill">81% match</b></div>
            <div class="exp-panel-label" style="margin-top:14px">Why this person?</div>
            <ul class="exp-why"><li>You both joined in the last six months</li><li>Daniel hosts a fortnightly virtual coffee</li><li>Overlapping interest in facilitation</li></ul>
            <div class="exp-actions"><button type="button" class="exp-btn">Say hello</button><button type="button" class="exp-btn ghost">Not now</button></div>
          </div>
        </div>
        <div class="exp-footnote">Illustrative people and matches. A suggestion is never a connection \u2014 both sides choose.</div>
      `,Help:`
        <div class="exp-main-head">
          <div><small>HELP</small><h4>Find the right expertise.</h4><p>Colleagues who have opted in to help \u2014 matched to what you asked for.</p></div>
          ${N}
        </div>
        <div class="exp-search filled"><span>Kubernetes networking on AWS</span><b>\u2315</b></div>
        <div class="exp-panel">
          <div class="exp-matchrow"><div class="exp-match" style="margin-top:0"><div class="mini-avatar">JM</div><div><b>James Morgan</b><small>Cloud \xB7 Platform engineering</small></div></div><b class="exp-pill">91% match</b></div>
          <div class="exp-panel-label" style="margin-top:14px">Why this person?</div>
          <ul class="exp-why"><li>You asked for help with Kubernetes networking</li><li>James opted in to help with AWS and Kubernetes</li><li>Same working hours \u2014 available this week</li><li>Two shared connections in Platform engineering</li></ul>
          <div class="exp-tagrow"><span class="exp-tag">AWS</span><span class="exp-tag">Kubernetes</span><span class="exp-tag">Networking</span></div>
          <div class="exp-actions"><button type="button" class="exp-btn">Ask for help</button><button type="button" class="exp-btn ghost">Not this time</button></div>
        </div>
        <div class="exp-panel-label" style="margin:16px 0 8px">More people who can help</div>
        <div class="exp-ideas">
          <div class="exp-idea"><div class="exp-idea-icon">PN</div><div><b>Priya Nair</b><small>Security engineering \xB7 opted in: network policy, security groups</small></div><em>84% match</em></div>
          <div class="exp-idea"><div class="exp-idea-icon">CD</div><div><b>Chris Dale</b><small>SRE \xB7 opted in: EKS operations, incident response</small></div><em>79% match</em></div>
        </div>
        <div class="exp-footnote">Recommendations respect organisational boundaries and consent \u2014 only colleagues who opted in appear.</div>
      `,Learn:`
        <div class="exp-main-head">
          <div><small>LEARN</small><h4>People who can teach you.</h4><p>Mentors and specialists who chose to share what they know.</p></div>
          ${N}
        </div>
        <div class="exp-panel">
          <div class="exp-matchrow"><div class="exp-match" style="margin-top:0"><div class="mini-avatar">NT</div><div><b>Nadia Thomas</b><small>Data \xB7 Analytics</small></div></div><b class="exp-pill">95% match</b></div>
          <div class="exp-panel-label" style="margin-top:14px">Why this person?</div>
          <ul class="exp-why"><li>You want to build applied data skills</li><li>Nadia opted in to mentor on data and analytics</li><li>Mentoring one person now \u2014 has capacity for one more</li></ul>
          <div class="exp-tagrow"><span class="exp-tag">Data</span><span class="exp-tag">Analytics</span><span class="exp-tag">Mentoring</span></div>
          <div class="exp-actions"><button type="button" class="exp-btn">Request mentoring</button><button type="button" class="exp-btn ghost">Not now</button></div>
        </div>
        <div class="exp-ideas" style="margin-top:12px">
          <div class="exp-idea" data-screen="Belong"><div class="exp-idea-icon">DG</div><div><b>Prefer learning in a group?</b><small>The Data Guild runs a monthly open show-and-tell</small></div><em>See Belong \u2192</em></div>
        </div>
        <div class="exp-footnote">Learning connections start small: one conversation, then both sides decide whether to continue.</div>
      `,Belong:`
        <div class="exp-main-head">
          <div><small>BELONG</small><h4>Find where you fit.</h4><p>Communities and circles beyond your immediate team.</p></div>
          ${N}
        </div>
        <div class="exp-ideas">
          <div class="exp-idea"><div class="exp-idea-icon">CC</div><div><b>Cross-Team Coffee Circle</b><small>12 members \xB7 meets biweekly \xB7 3 members in your building</small></div><em>Join \u2192</em></div>
          <div class="exp-idea"><div class="exp-idea-icon">NJ</div><div><b>New Joiners \xB7 London</b><small>23 members \xB7 weekly \xB7 for everyone in their first year</small></div><em>Join \u2192</em></div>
          <div class="exp-idea"><div class="exp-idea-icon">DG</div><div><b>Data Guild</b><small>31 members \xB7 monthly \xB7 open show-and-tell sessions</small></div><em>Join \u2192</em></div>
        </div>
        <div class="exp-footnote">Communities are open by invitation of the organisation \u2014 membership is always the employee's choice.</div>
      `}},risk:{code:"HR / HIVE RISK",brand:"HIVE RISK",mark:"mark-risk",app:"HiveRisk",get side(){return window.HiveRisk.side},get icons(){return window.HiveRisk.icons},get colors(){return window.HiveRisk.colors},get start(){return window.HiveRisk.start}},ventures:{code:"HV / HIVE VENTURES",brand:"HIVE VENTURES",mark:"mark-ventures",app:"HiveVentures",get side(){return window.HiveVentures.side},get icons(){return window.HiveVentures.icons},get colors(){return window.HiveVentures.colors},get start(){return window.HiveVentures.start}}};let O=null;function I(u){const m=B[O],f=document.querySelector(".exp-main");if(!m||!f)return;const L=m.app&&window[m.app];if(L)L.onScreen=q,L.render(u,f);else{if(!m.screens[u])return;f.innerHTML=m.screens[u]}q(u)}function q(u){const m=B[O];if(!m)return;document.querySelectorAll(".exp-side-nav [data-screen]").forEach(w=>{w.classList.toggle("active",w.dataset.screen===u)});const f=document.querySelector(".exp-side-nav"),L=f&&f.querySelector(".active");if(L&&f.scrollWidth>f.clientWidth){const w=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,k=L.getBoundingClientRect(),H=f.getBoundingClientRect();f.scrollTo({left:f.scrollLeft+k.left-H.left-(f.clientWidth-k.width)/2,behavior:w?"smooth":"auto"})}const p=document.querySelector(".exp-window-title");p&&(p.textContent=`${m.code} \xB7 ${u.toUpperCase()}`)}const E={connect:"HiveConnect",risk:"HiveRisk",ventures:"HiveVentures"},v=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;let n=null;function d(u){const m=B[u],f=document.querySelector(".exp-window");f.innerHTML=`
    <div class="exp-window-bar"><i></i><i></i><i></i><span class="exp-window-title">${m.code} \xB7 End-user product preview</span><button type="button" class="exp-expand" data-focus-demo="${u}" aria-label="Open ${E[u]} full screen"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#expand"></use></svg>Full screen</button><span class="exp-preview-label">ILLUSTRATIVE</span></div>
    <div class="exp-app">
      <aside class="exp-side">
        <div class="exp-brandline"><img src="assets/images/web/${m.mark}.jpg" alt="">${m.brand}</div>
        <div class="exp-side-nav">${m.side.map((L,p)=>`<button type="button" data-screen="${L}" style="--i:${p};--c:${(m.colors||{})[L]||"#1687ff"}"><span class="side-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#${m.icons[L]}"></use></svg></span><span class="side-label">${L}</span>${(m.later||[]).includes(L)?'<span class="side-later" title="Planned after the first release">Later</span>':""}<span class="side-badge" hidden></span></button>`).join("")}</div>
        <div class="exp-side-foot">This is an interactive visual preview of the intended product experience.<br><b>Demo data only.</b></div>
      </aside>
      <section class="exp-main"></section>
    </div>
  `,f.dataset.demo=u,f.setAttribute("aria-label",`${m.code} interactive product preview`),I(m.start)}function l(u,m={}){const f=B[u],L=document.querySelector(".exp-window");if(!f||!L)return;const p=O!==null&&O!==u;if(O=u,document.querySelectorAll(".exp-choice").forEach(w=>{const k=w.dataset.demo===u;w.classList.toggle("active",k);const H=w.querySelector(".exp-pick");H&&H.setAttribute("aria-pressed",String(k)),k&&p&&!v()&&(w.classList.remove("just-picked"),w.offsetWidth,w.classList.add("just-picked"),setTimeout(()=>w.classList.remove("just-picked"),900))}),document.querySelectorAll(".df-tabs [data-df]").forEach(w=>w.setAttribute("aria-pressed",String(w.dataset.df===u))),clearTimeout(n),!p||m.instant||v()){L.classList.remove("swapping","entering"),d(u);return}L.classList.remove("entering"),L.classList.add("swapping"),n=setTimeout(()=>{d(u),L.classList.remove("swapping"),L.offsetWidth,L.classList.add("entering"),n=setTimeout(()=>L.classList.remove("entering"),900)},190)}const y={el:null,placeholder:null,lastFocus:null,open:!1,timer:null};function j(){const u=document.createElement("div");return u.className="demo-focus",u.hidden=!0,u.setAttribute("role","dialog"),u.setAttribute("aria-modal","true"),u.setAttribute("aria-label","Hive Intelligence interactive demo"),u.innerHTML=`
    <div class="df-backdrop"></div>
    <div class="df-shell">
      <div class="df-bar">
        <div class="df-brand"><img src="assets/images/web/ligeronex-mark.jpg" alt="">Hive Intelligence<span>Interactive demo</span></div>
        <div class="df-tabs" role="group" aria-label="Switch product">${Object.keys(E).map(m=>`<button type="button" data-df="${m}" aria-pressed="${m===O}">${E[m]}</button>`).join("")}</div>
        <button type="button" class="df-close" aria-label="Exit full-screen demo">Exit<kbd>Esc</kbd><span aria-hidden="true">\u2715</span></button>
      </div>
      <div class="df-slot"></div>
    </div>`,document.body.appendChild(u),u.addEventListener("click",m=>{const f=m.target.closest("[data-df]");if(f){l(f.dataset.df);return}(m.target.closest(".df-close")||m.target.classList.contains("df-backdrop"))&&T()}),u}function P(u){[".nav-wrap","main","footer"].forEach(m=>{const f=document.querySelector(m);f&&(f.inert=u)})}function g(u,m){const f=document.querySelector(".exp-workspace");f&&(u&&u!==O&&l(u,{instant:!0}),!y.open&&(clearTimeout(y.timer),y.el=y.el||j(),y.lastFocus=m||document.activeElement,y.el.contains(f)||(y.placeholder=y.placeholder||Object.assign(document.createElement("div"),{className:"exp-workspace-placeholder"}),y.placeholder.style.height=f.offsetHeight+"px",f.before(y.placeholder),y.el.querySelector(".df-slot").appendChild(f)),y.el.querySelectorAll("[data-df]").forEach(L=>L.setAttribute("aria-pressed",String(L.dataset.df===O))),document.documentElement.classList.add("df-lock"),P(!0),y.el.hidden=!1,y.open=!0,y.el.offsetWidth,y.el.classList.add("open"),y.el.querySelector(".df-close").focus({preventScroll:!0})))}function T(){y.open&&(y.open=!1,y.el.classList.remove("open"),y.timer=setTimeout(()=>{const u=y.el.querySelector(".exp-workspace");u&&y.placeholder&&y.placeholder.parentNode&&y.placeholder.replaceWith(u),y.el.hidden=!0,document.documentElement.classList.remove("df-lock"),P(!1),y.lastFocus&&y.lastFocus.isConnected&&y.lastFocus.focus({preventScroll:!0})},v()?0:340))}const F=document.querySelector(".experience-section");if(F){const u=document.querySelector(".exp-window");u.addEventListener("click",m=>{const f=m.target.closest("[data-screen]");!f||!u.contains(f)||I(f.dataset.screen)}),u.addEventListener("keydown",m=>{if(m.key!=="Enter"&&m.key!==" ")return;const f=m.target.closest("[data-screen]");!f||f.tagName==="BUTTON"||(m.preventDefault(),I(f.dataset.screen))}),document.querySelectorAll(".exp-pick").forEach(m=>{m.addEventListener("click",()=>l(m.closest(".exp-choice").dataset.demo))}),document.addEventListener("click",m=>{const f=m.target.closest("[data-focus-demo]");!f||y.open||(m.preventDefault(),g(f.dataset.focusDemo,f))}),document.addEventListener("keydown",m=>{if(m.key!=="Escape"||!y.open)return;m.preventDefault();const f=y.el.querySelector(".hc-drawer .hc-close");if(f){m.stopPropagation(),f.click();return}T()},!0),document.querySelectorAll("[data-open-demo]").forEach(m=>{m.addEventListener("click",f=>{const L=m.dataset.openDemo;B[L]&&(f.preventDefault(),l(L),F.scrollIntoView({behavior:"smooth",block:"start"}))})}),l("connect")}document.querySelectorAll('a[href^="#"]').forEach(u=>{u.addEventListener("click",()=>{window.innerWidth<=850&&S()})})})();
