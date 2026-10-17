/*! © 2026 LigeroNex. All rights reserved. Proprietary: no licence is granted to copy, modify or reuse this file. */
(function(){const e={id:"me",name:"Alex Rivera",init:"AR",role:"Platform Engineering",office:"London"},d=[{id:"sk",name:"Samira Khan",role:"Transformation Lead",office:"London",init:"SK",skills:["AI strategy","Change","Facilitation"],helps:["Change management"],mentors:!1,meet:!0,mutual:3,note:"In the London office Tue\u2013Thu"},{id:"jm",name:"James Morgan",role:"Principal Engineer, Cloud",office:"Manchester",init:"JM",skills:["AWS","Kubernetes","Terraform"],helps:["AWS","Kubernetes","Terraform"],mentors:!0,meet:!1,mutual:2,note:"Usually free Thursday afternoons"},{id:"nt",name:"Nadia Thomas",role:"Data & Analytics Manager",office:"Leeds",init:"NT",skills:["SQL","dbt","Analytics"],helps:["Data modelling","SQL"],mentors:!0,meet:!0,mutual:1,note:"Mentoring one person, room for one more"},{id:"do",name:"Daniel Obi",role:"Product Designer",office:"Remote",init:"DO",skills:["Design systems","Research"],helps:["Design critique"],mentors:!1,meet:!0,mutual:2,note:"Hosts a fortnightly virtual coffee"},{id:"pn",name:"Priya Nair",role:"Security Engineer",office:"London",init:"PN",skills:["IAM","Network policy","Threat modelling"],helps:["IAM","Security review"],mentors:!1,meet:!1,mutual:4,note:"Runs the secure-by-default clinic"},{id:"cd",name:"Chris Dale",role:"Site Reliability Engineer",office:"Manchester",init:"CD",skills:["Observability","Incident response"],helps:["Kubernetes","On-call"],mentors:!1,meet:!1,mutual:1,note:"Happy to pair on incident reviews"},{id:"ao",name:"Amara Osei",role:"Principal Engineer, AI",office:"Remote",init:"AO",skills:["Machine learning","Evaluation","Python"],helps:["Applied AI"],mentors:!0,meet:!1,mutual:2,note:"Mentors two engineers, capacity for one"},{id:"tr",name:"Tom Reyes",role:"Customer Success Manager",office:"London",init:"TR",skills:["Onboarding","Accounts"],helps:["Customer context"],mentors:!1,meet:!0,mutual:1,note:"New to the London office this month"},{id:"ep",name:"Elena Petrova",role:"VP Strategy",office:"London",init:"EP",skills:["Portfolio","Investment cases"],helps:["Business cases"],mentors:!0,meet:!1,mutual:5,note:"Sponsors two internal ventures"},{id:"mw",name:"Marcus Webb",role:"Finance Business Partner",office:"Birmingham",init:"MW",skills:["Modelling","Cost management"],helps:["Cost modelling"],mentors:!1,meet:!1,mutual:0,note:"Supports the platform cost review"},{id:"aa",name:"Aisha Rahman",role:"People Partner",office:"London",init:"AR",skills:["Onboarding","Career","Wellbeing"],helps:["Career conversations"],mentors:!0,meet:!0,mutual:3,note:"Runs the new-joiner programme"},{id:"rs",name:"Ravi Shah",role:"Engineering Manager",office:"Leeds",init:"RS",skills:["Delivery","Coaching","Hiring"],helps:["Delivery planning"],mentors:!0,meet:!1,mutual:2,note:"Coaches first-time managers"}],H=new Set(["me","sk","jm","pn","tr","aa","do"]),U=[{id:"coffee",emoji:"\u2615",name:"Cross-Team Coffee Circle",members:12,cadence:"Every two weeks",next:"Thu 15:00",blurb:"A random coffee across teams and offices.",near:3,c:["#ff6b57","#ffa94d"],people:["sk","do","tr"]},{id:"joiners",emoji:"\u{1F44B}",name:"New Joiners \xB7 London",members:23,cadence:"Weekly",next:"Mon 12:30",blurb:"For everyone in their first year.",near:6,c:["#1687ff","#45d8ff"],people:["tr","aa","sk"]},{id:"data",emoji:"\u{1F4CA}",name:"Data Guild",members:31,cadence:"Monthly",next:"Wed 16:00",blurb:"Open show-and-tell on data and analytics.",near:4,c:["#7c5cff","#b27bff"],people:["nt","ao","rs"]},{id:"green",emoji:"\u{1F331}",name:"Green Tech Network",members:18,cadence:"Monthly",next:"Fri 13:00",blurb:"Sustainability in how we build and run.",near:2,c:["#0fb99f","#46dd98"],people:["mw","ep","cd"]}],ie=["Kubernetes","IAM","Terraform","Data modelling","Applied AI","Cost modelling"],re=["Platform delivery","CI/CD","Code review"],Q={Home:{c1:"#0e6bff",c2:"#45d8ff",icon:"hexnet"},"Find people":{c1:"#2f6bff",c2:"#7a9bff",icon:"search"},Meet:{c1:"#ff6b57",c2:"#ffa94d",icon:"meet"},Help:{c1:"#1687ff",c2:"#45d8ff",icon:"help"},Learn:{c1:"#7c5cff",c2:"#b27bff",icon:"learn"},Belong:{c1:"#0fb99f",c2:"#46dd98",icon:"belong"},"My network":{c1:"#f2508b",c2:"#ff8fb1",icon:"teams"},Profile:{c1:"#4f46e5",c2:"#8b8cff",icon:"profile"}},ae={meet:"Meet",help:"Help",mentor:"Learn"},_=[["#ff6b57","#ffa94d"],["#7c5cff","#b27bff"],["#1687ff","#45d8ff"],["#0fb99f","#46dd98"],["#f2508b","#ff8fb1"],["#f59e0b","#fcd34d"],["#4f46e5","#8b8cff"],["#0891b2","#5eead4"]],p={screen:"Home",query:"",intent:"all",helpTopic:"Kubernetes",requests:{},joined:new Set(["coffee"]),dismissed:new Set,opts:{Meet:!0,Help:!0,Learn:!1,Belong:!0},topics:re.slice(),drawer:null,toast:"",focus:null},r=s=>String(s).replace(/[&<>"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[n]),T=s=>`<svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#${s}"></use></svg>`,F=s=>d.find(n=>n.id===s),f=()=>Object.keys(p.requests).length,E=s=>{const n=Q[s]||Q.Home;return`--c1:${n.c1};--c2:${n.c2}`};function X(s){let n=7;for(const j of s)n=n*31+j.charCodeAt(0)>>>0;const $=_[n%_.length];return`linear-gradient(135deg,${$[0]},${$[1]})`}function V(s,n){return`<span class="hc-av ${n||""}" style="background:${X(s.id)}">${r(s.init)}${H.has(s.id)?'<i class="hc-online" title="Available"></i>':""}</span>`}function z(s,n){return`<span class="hc-ico ${n||""}" style="${E(s)}">${T((Q[s]||Q.Home).icon)}</span>`}function ee(s,n){return`<span class="hc-ring ${n||""}" style="--p:${s}" title="${s}% match"><b>${s}<small>%</small></b></span>`}function K(s,n,$,j){return`<button type="button" class="hc-btn ${j||""}" style="${E($)}" data-act="${n}">${s}</button>`}function A(s,n){let $=58+s.mutual*3;const j=(s.skills.join(" ")+" "+s.helps.join(" ")+" "+s.role).toLowerCase();return n.forEach(o=>{o&&j.includes(o)&&($+=14)}),s.office===e.office&&($+=6),Math.min(97,$)}function C(s,n){const $=[],j=s.helps.find(i=>n.some(a=>a&&i.toLowerCase().includes(a)));j&&$.push(`Opted in to help with <b>${r(j)}</b>`);const o=s.skills.find(i=>n.some(a=>a&&i.toLowerCase().includes(a)));return o&&!j&&$.push(`Works with <b>${r(o)}</b>`),s.office===e.office&&$.push(`Also based in ${r(s.office)}`),s.mutual&&$.push(`${s.mutual} shared connection${s.mutual>1?"s":""}`),$.push(r(s.note)),$.slice(0,4)}function O(s,n,$){const j=n.toLowerCase().split(/[\s,]+/).filter(Boolean);return s.filter(o=>!p.dismissed.has(o.id)).filter(o=>!$||$(o)).filter(o=>{if(!j.length)return!0;const i=(o.name+" "+o.role+" "+o.office+" "+o.skills.join(" ")+" "+o.helps.join(" ")+(o.mentors?" mentor":"")).toLowerCase();return j.every(a=>i.includes(a))}).map(o=>({p:o,s:A(o,j)})).sort((o,i)=>i.s-o.s)}function W(s){return s==="help"?"Help requested":s==="mentor"?"Mentoring requested":"Invite sent"}function l(s,n){return`<span class="hc-done ${n||""}" style="${E(ae[s])}">${T("check")}${W(s)}</span>`}function J(s){return`
      <div class="hc-topbar">
        <label class="hc-searchbar">
          ${T("search")}
          <input id="hcSearch" type="text" value="${r(p.query)}" placeholder="${r(s||"Search people, skills, teams or offices")}" autocomplete="off" aria-label="Search people">
        </label>
        <button type="button" class="hc-bell" data-act="screen:My network" aria-label="Requests (${f()})" title="Your requests">
          ${T("bell")}${f()?`<i class="hc-badge">${f()}</i>`:""}
        </button>
        <button type="button" class="hc-me" data-act="screen:Profile" title="Your profile">
          ${V(e,"sm")}
          <span class="hc-me-txt"><b>${r(e.name)}</b><small>${r(e.role)}</small></span>
        </button>
      </div>`}function P(s,n,$,j,o){return`
      <div class="hc-head">
        <div class="hc-head-l">${z(s,"lg")}<div><small>${r(n)}</small><h4>${$}</h4><p>${j}</p></div></div>
        ${o||""}
      </div>`}function le(s,n){const{p:$,s:j}=s,o=p.requests[$.id],i=n==="help"?"Ask":n==="mentor"?"Request":"Connect";return`
      <div class="hc-row" data-act="open:${$.id}" role="button" tabindex="0">
        ${V($)}
        <div class="hc-row-main">
          <div class="hc-row-top"><b>${r($.name)}</b>${$.mentors?'<span class="hc-flag" style="'+E("Learn")+'">Mentor</span>':""}${$.meet?'<span class="hc-flag" style="'+E("Meet")+'">Open to meet</span>':""}</div>
          <small>${r($.role)} \xB7 ${r($.office)}</small>
          <div class="hc-chips">${$.skills.slice(0,3).map(a=>`<span class="hc-chip">${r(a)}</span>`).join("")}</div>
        </div>
        <div class="hc-row-end">
          ${ee(j)}
          ${o?l(o):K(i,`${n}:${$.id}`,ae[n],"sm")}
        </div>
      </div>`}function pe(s){return`<div class="hc-empty">${T("search")}<p>${r(s)}</p></div>`}function I(s,n){return`<div class="hc-banner">${T("shield")}<span>${r(s)}</span>${n?`<button type="button" class="hc-link" data-act="screen:${n}">Open ${n} \u2192</button>`:""}</div>`}function q(){const s=O(d,"",c=>c.meet),n={Meet:s[0],Help:O(d,p.helpTopic.toLowerCase(),c=>c.helps.length)[0],Learn:O(d,"",c=>c.mentors)[0]},$=U.find(c=>!p.joined.has(c.id))||U[0],j=U.find(c=>p.joined.has(c.id)),o=[{id:"tr",t:"<b>Tom Reyes</b> accepted your coffee invite",w:"Yesterday",i:"Meet"},{id:"pn",t:"<b>Priya Nair</b> answered in the secure-by-default clinic",w:"2 days ago",i:"Help"},{id:"nt",t:"<b>Nadia Thomas</b> shared a Data Guild show-and-tell",w:"Last week",i:"Belong"}],i=(c,v)=>`<button type="button" class="hc-qchip" style="${E(c)}" data-act="screen:${c}">${T(Q[c].icon)}<span>${v}</span></button>`,a=(c,v,L,S)=>`
      <div class="hc-tile" style="${E(c)}" data-act="screen:${c}" role="button" tabindex="0">
        <div class="hc-tile-top">${z(c)}<span class="hc-tile-badge">${L}</span></div>
        <h5>${c}</h5>
        <p>${v}</p>
        ${S}
        <em class="hc-go">Open ${c} \u2192</em>
      </div>`,t=c=>c?`<div class="hc-mini">${V(c.p,"xs")}<div><b>${r(c.p.name)}</b><small>${r(c.p.role)}</small></div>${ee(c.s,"xs")}</div>`:"";return`
      ${J()}
      <div class="hc-head">
        <div class="hc-head-l"><div><small>PERSONAL WORKSPACE</small><h4>Good morning, Alex <span class="hc-wave">\u{1F44B}</span></h4><p>People and conversations that could be useful to you today.</p></div></div>
        <button type="button" class="hc-btn" style="${E("Find people")}" data-act="screen:Find people">${T("sparkle")}Find someone</button>
      </div>
      <div class="hc-qchips">
        ${i("Meet",`<b>${s.length}</b> new matches this week`)}
        ${i("My network",f()?`<b>${f()}</b> pending request${f()>1?"s":""}`:"No pending requests")}
        ${j?i("Belong",`${r(j.name)} \xB7 <b>${r(j.next)}</b>`):i("Belong","Find a community")}
      </div>
      <div class="hc-grid4">
        ${a("Meet","Someone worth knowing",`${s.length} matches`,t(n.Meet))}
        ${a("Help",`Expertise in ${r(p.helpTopic)}`,"Opted-in experts",t(n.Help))}
        ${a("Learn","A mentor with capacity",p.opts.Learn?"You mentor too":"Mentors",t(n.Learn))}
        ${a("Belong","A circle beyond your team",`${U.length} communities`,`<div class="hc-mini"><span class="hc-av xs hc-emoji" style="background:linear-gradient(135deg,${$.c[0]},${$.c[1]})">${$.emoji}</span><div><b>${r($.name)}</b><small>${$.members} members \xB7 ${r($.cadence)}</small></div></div>`)}
      </div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Recent activity</b><span class="hc-tag">Illustrative</span></div>
          ${o.map(c=>`<div class="hc-feed" data-act="open:${c.id}" role="button" tabindex="0">${V(F(c.id),"sm")}<span class="hc-feed-text">${c.t}</span><small>${r(c.w)}</small></div>`).join("")}
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Your visibility</b><button type="button" class="hc-link" data-act="screen:Profile">Edit \u2192</button></div>
          ${Object.keys(p.opts).map(c=>`<div class="hc-vis" data-act="screen:Profile" role="button" tabindex="0">${z(c,"xs")}<span class="hc-vis-label">${c}</span><b class="${p.opts[c]?"on":"off"}">${p.opts[c]?"Discoverable":"Hidden"}</b></div>`).join("")}
        </div>
      </div>`}function se(){const s={all:()=>!0,meet:j=>j.meet,help:j=>j.helps.length>0,learn:j=>j.mentors},n=O(d,p.query,s[p.intent]),$=(j,o,i)=>`<button type="button" class="hc-filter ${p.intent===j?"on":""}" style="${E(i)}" data-act="intent:${j}">${i!=="Find people"?"<i></i>":""}${o}</button>`;return`
      ${J("Try \u201Ckubernetes\u201D, \u201CLondon\u201D or \u201Cmentor\u201D")}
      ${P("Find people","FIND PEOPLE","What do you need today?","Search by skill, team or office \u2014 or filter by what you need. Every result explains itself.")}
      <div class="hc-filters">
        ${$("all","Everyone","Find people")}${$("meet","Open to meet","Meet")}${$("help","Offers help","Help")}${$("learn","Mentors","Learn")}
        <span class="hc-count">${n.length} ${n.length===1?"person":"people"}</span>
      </div>
      <div class="hc-list">
        ${n.length?n.map(j=>le(j,"meet")).join(""):pe("No colleagues match that yet. Try a different skill or office.")}
      </div>`}function B(){const s=O(d,"",n=>n.meet).slice(0,4);return`
      ${J()}
      ${P("Meet","MEET","People worth knowing.","Built from interests, role and intent \u2014 never from private messages or calendars.")}
      ${p.opts.Meet?"":I("You are hidden from Meet suggestions. Others will not see you here.","Profile")}
      <div class="hc-grid2">
        ${s.map(({p:n,s:$})=>`
          <div class="hc-card" style="${E("Meet")}">
            <div class="hc-card-top">${V(n,"lg")}<div class="hc-card-id"><b>${r(n.name)}</b><small>${r(n.role)} \xB7 ${r(n.office)}</small></div>${ee($)}</div>
            <div class="hc-why-label">Why this person?</div>
            <ul class="hc-why">${C(n,[]).map(j=>`<li>${j}</li>`).join("")}</ul>
            <div class="hc-actions">
              ${p.requests[n.id]?l(p.requests[n.id],"big"):`${K("Say hello",`meet:${n.id}`,"Meet")}<button type="button" class="hc-btn ghost" data-act="skip:${n.id}">Not now</button><button type="button" class="hc-link" data-act="open:${n.id}">Profile \u2192</button>`}
            </div>
          </div>`).join("")||pe("You have responded to every suggestion. New ones arrive weekly.")}
      </div>
      <p class="hc-note">A suggestion is never a connection \u2014 both sides choose.</p>`}function u(){const s=O(d,p.helpTopic.toLowerCase(),$=>$.helps.length>0).slice(0,4),n=s[0];return`
      ${J()}
      ${P("Help","HELP","Find the right expertise.","Only colleagues who opted in to help with a topic appear here.")}
      <div class="hc-filters">
        ${ie.map($=>`<button type="button" class="hc-filter ${p.helpTopic===$?"on":""}" style="${E("Help")}" data-act="topic:${r($)}">${r($)}</button>`).join("")}
      </div>
      ${n?`
        <div class="hc-card feature" style="${E("Help")}">
          <div class="hc-card-top">${V(n.p,"lg")}<div class="hc-card-id"><span class="hc-best">Best match</span><b>${r(n.p.name)}</b><small>${r(n.p.role)} \xB7 ${r(n.p.office)}</small></div>${ee(n.s,"lg")}</div>
          <div class="hc-why-label">Why this person?</div>
          <ul class="hc-why">${C(n.p,[p.helpTopic.toLowerCase()]).map($=>`<li>${$}</li>`).join("")}</ul>
          <div class="hc-actions">
            ${p.requests[n.p.id]?l(p.requests[n.p.id],"big"):`${K("Ask for help",`help:${n.p.id}`,"Help")}<button type="button" class="hc-btn ghost" data-act="open:${n.p.id}">View profile</button>`}
          </div>
        </div>`:pe("Nobody has opted in to help with that topic yet.")}
      ${s.length>1?`<div class="hc-panel-head sep"><b>Others who can help</b><span class="hc-tag">${s.length-1}</span></div>
        <div class="hc-list">${s.slice(1).map($=>le($,"help")).join("")}</div>`:""}`}function te(){const s=O(d,p.query,n=>n.mentors);return`
      ${J("Search mentors by skill")}
      ${P("Learn","LEARN","People who can teach you.","Mentors choose their topics and how much capacity they have.")}
      ${p.opts.Learn?"":I("You are not discoverable as a mentor. Turn on Learn in your profile to appear here for others.","Profile")}
      <div class="hc-list">${s.length?s.map(n=>le(n,"mentor")).join(""):pe("No mentors match that skill yet.")}</div>`}function ce(){return`
      ${J()}
      ${P("Belong","BELONG","Find where you fit.","Communities and circles beyond your immediate team.")}
      <div class="hc-grid2">
        ${U.map(s=>{const n=p.joined.has(s.id);return`<div class="hc-card hc-comm" style="--c1:${s.c[0]};--c2:${s.c[1]}">
            <div class="hc-comm-band"><span class="hc-comm-emoji">${s.emoji}</span>${n?`<span class="hc-comm-joined">${T("check")}Joined</span>`:""}</div>
            <b class="hc-comm-name">${r(s.name)}</b>
            <p class="hc-blurb">${r(s.blurb)}</p>
            <div class="hc-comm-meta">
              <span class="hc-stack">${s.people.map($=>V(F($),"xs")).join("")}</span>
              <small>${s.members} members \xB7 ${s.near} near you</small>
            </div>
            <div class="hc-chips"><span class="hc-chip">${T("calendar")}${r(s.cadence)}</span><span class="hc-chip">Next: ${r(s.next)}</span></div>
            <div class="hc-actions">
              ${n?`<button type="button" class="hc-btn ghost" data-act="join:${s.id}">Leave</button>`:`<button type="button" class="hc-btn" style="--c1:${s.c[0]};--c2:${s.c[1]}" data-act="join:${s.id}">Join community</button>`}
            </div>
          </div>`}).join("")}
      </div>`}function he(){const s=Object.keys(p.requests).map(n=>({p:F(n),kind:p.requests[n]}));return`
      ${J()}
      ${P("My network","MY NETWORK","Connections and requests.","Everything you start from Meet, Help or Learn lands here.")}
      ${s.length?`<div class="hc-list">${s.map(({p:n,kind:$})=>`
        <div class="hc-row" data-act="open:${n.id}" role="button" tabindex="0">
          ${V(n)}
          <div class="hc-row-main"><div class="hc-row-top"><b>${r(n.name)}</b></div><small>${r(n.role)} \xB7 ${r(n.office)}</small></div>
          <div class="hc-row-end">${l($)}<button type="button" class="hc-btn sm ghost" data-act="cancel:${n.id}">Withdraw</button></div>
        </div>`).join("")}</div>`:`<div class="hc-empty">${T("teams")}<p>Nothing yet. Say hello in <b>Meet</b>, ask in <b>Help</b> or request a mentor in <b>Learn</b> and it shows up here.</p><button type="button" class="hc-btn sm" style="${E("Meet")}" data-act="screen:Meet">Go to Meet</button></div>`}
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Communities</b><span class="hc-tag">${p.joined.size} joined</span></div>
          ${p.joined.size?[...p.joined].map(n=>{const $=U.find(j=>j.id===n);return`<div class="hc-vis" data-act="screen:Belong" role="button" tabindex="0"><span class="hc-av xs hc-emoji" style="background:linear-gradient(135deg,${$.c[0]},${$.c[1]})">${$.emoji}</span><span class="hc-vis-label">${r($.name)}</span><b class="on">${r($.next)}</b></div>`}).join(""):'<p class="hc-note">You have not joined a community yet.</p>'}
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>What your employer sees</b><span class="hc-tag">Aggregate only</span></div>
          <p class="hc-note">Participation trends across the organisation \u2014 never who you connected with, or why you asked for help.</p>
        </div>
      </div>`}function h(){const s={Meet:"Coffee and introductions",Help:"Answer questions in your topics",Learn:"Be found as a mentor",Belong:"Community matching"};return`
      ${J()}
      <div class="hc-profile-hero">
        ${V(e,"xl")}
        <div><b>${r(e.name)}</b><small>${r(e.role)} \xB7 ${r(e.office)}</small><span class="hc-status"><i></i>Available this week</span></div>
      </div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Topics I can help with</b><span class="hc-tag">${p.topics.length}</span></div>
          <div class="hc-chips big">
            ${p.topics.map(n=>`<button type="button" class="hc-chip removable" data-act="untopic:${r(n)}" title="Remove ${r(n)}">${r(n)}<i>\xD7</i></button>`).join("")}
            <button type="button" class="hc-chip add" data-act="addtopic">+ Add topic</button>
          </div>
          <p class="hc-note">Colleagues only find you for topics you add here.</p>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Open to</b><span class="hc-tag">Your choice</span></div>
          ${Object.keys(p.opts).map(n=>`
            <div class="hc-toggle-row">
              ${z(n,"xs")}
              <div><b>${n}</b><small>${s[n]}</small></div>
              <button type="button" class="hc-toggle ${p.opts[n]?"on":""}" style="${E(n)}" data-act="opt:${n}" role="switch" aria-checked="${p.opts[n]}" aria-label="${n}"></button>
            </div>`).join("")}
        </div>
      </div>`}function m(){const s=F(p.drawer);if(!s)return"";const n=p.requests[s.id],$=A(s,[p.query.toLowerCase(),p.helpTopic.toLowerCase()].filter(Boolean));return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${r(s.name)}">
        <div class="hc-drawer-band" style="background:${X(s.id)}"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${V(s,"xl")}${ee($,"lg")}</div>
        <div class="hc-drawer-id"><b>${r(s.name)}</b><small>${r(s.role)} \xB7 ${r(s.office)}${H.has(s.id)?' \xB7 <span class="hc-avail">Available</span>':""}</small></div>
        <div class="hc-why-label">Why you are matched</div>
        <ul class="hc-why">${C(s,[p.query.toLowerCase(),p.helpTopic.toLowerCase()]).map(j=>`<li>${j}</li>`).join("")}</ul>
        <div class="hc-why-label">Opted in to help with</div>
        <div class="hc-chips">${s.helps.map(j=>`<span class="hc-chip strong">${r(j)}</span>`).join("")||'<span class="hc-chip">Not offering help right now</span>'}</div>
        <div class="hc-why-label">Skills</div>
        <div class="hc-chips">${s.skills.map(j=>`<span class="hc-chip">${r(j)}</span>`).join("")}</div>
        <div class="hc-drawer-actions">
          ${n?`${l(n,"big")}<button type="button" class="hc-btn ghost" data-act="cancel:${s.id}">Withdraw</button>`:`${s.meet?K("Say hello",`meet:${s.id}`,"Meet"):""}
                   ${s.helps.length?K("Ask for help",`help:${s.id}`,"Help"):""}
                   ${s.mentors?K("Request mentoring",`mentor:${s.id}`,"Learn"):""}`}
        </div>
        <p class="hc-note">${r(s.name.split(" ")[0])} chooses whether to accept. Nothing is shared until they do.</p>
      </aside>`}const w={Home:q,"Find people":se,Meet:B,Help:u,Learn:te,Belong:ce,"My network":he,Profile:h};let k=null;function R(){const s=k&&k.closest(".exp-window");if(!s)return;const n=s.querySelector('.exp-side-nav [data-screen="My network"] .side-badge');n&&(n.textContent=f(),n.hidden=!f())}function D(){if(!k)return;const s=w[p.screen]||q;k.innerHTML=`<div class="hc-app">${s()}${m()}${p.toast?`<div class="hc-toast">${T("check")}${r(p.toast)}</div>`:""}</div>`;const n=k.querySelector("#hcSearch");n&&p.focus==="search"&&(n.focus(),n.setSelectionRange(n.value.length,n.value.length)),R()}function oe(s){p.toast=s,clearTimeout(oe._t),oe._t=setTimeout(()=>{p.toast="",D()},2600)}function de(s){p.screen=s,p.drawer=null,p.focus=null,window.HiveConnect.onScreen&&window.HiveConnect.onScreen(s)}function y(s,n){switch(s){case"screen":de(n);break;case"open":p.drawer=n;break;case"close":p.drawer=null;break;case"intent":p.intent=n;break;case"topic":p.helpTopic=n;break;case"meet":case"help":case"mentor":{p.requests[n]=s,p.drawer=null,oe(`${W(s)} to ${F(n).name}. They choose whether to accept.`);break}case"cancel":delete p.requests[n],oe("Request withdrawn.");break;case"skip":p.dismissed.add(n);break;case"join":{p.joined.has(n)?(p.joined.delete(n),oe("You left the community.")):(p.joined.add(n),oe("You joined the community."));break}case"opt":p.opts[n]=!p.opts[n],oe(`${n} ${p.opts[n]?"on \u2014 colleagues can find you":"off \u2014 you are hidden"}.`);break;case"untopic":p.topics=p.topics.filter($=>$!==n);break;case"addtopic":{const $=ie.find(j=>!p.topics.includes(j));$?(p.topics.push($),oe(`Added \u201C${$}\u201D. Colleagues can now find you for it.`)):oe("You have added every topic available in this demo.");break}default:return!1}return!0}function b(s){const n=s.target.closest("[data-act]");if(!n||!k.contains(n))return;const[$,...j]=n.dataset.act.split(":");s.preventDefault(),s.stopPropagation(),y($,j.join(":"))&&D()}function g(s){s.target.id==="hcSearch"&&(p.query=s.target.value,p.screen!=="Find people"&&p.screen!=="Learn"&&p.query.trim()&&de("Find people"),p.focus="search",D())}function N(s){if(s.key==="Escape"&&p.drawer){p.drawer=null,D();return}if(s.key!=="Enter"&&s.key!==" ")return;const n=s.target.closest&&s.target.closest("[data-act]");!n||n.tagName==="BUTTON"||(s.preventDefault(),n.click())}window.HiveConnect={side:["Home","Find people","Meet","Help","Learn","Belong","My network","Profile"],icons:Object.fromEntries(Object.entries(Q).map(([s,n])=>[s,n.icon])),colors:Object.fromEntries(Object.entries(Q).map(([s,n])=>[s,n.c1])),start:"Home",badge:()=>f(),render(s,n){k=n,p.screen=s,p.drawer=null,k.dataset.bound||(k.dataset.bound="1",k.addEventListener("click",b,!0),k.addEventListener("input",g),k.addEventListener("keydown",N)),D()}}})(),(function(){const e=[["#ff6b57","#ffa94d"],["#7c5cff","#b27bff"],["#1687ff","#45d8ff"],["#0fb99f","#46dd98"],["#f2508b","#ff8fb1"],["#f59e0b","#fcd34d"],["#4f46e5","#8b8cff"],["#0891b2","#5eead4"]],d=r=>String(r??"").replace(/[&<>"]/g,T=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[T]),H=r=>`<svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#${r}"></use></svg>`,U=(r,T)=>`--c1:${r};--c2:${T}`;function ie(r){let T=7;for(const f of String(r))T=T*31+f.charCodeAt(0)>>>0;const F=e[T%e.length];return`linear-gradient(135deg,${F[0]},${F[1]})`}const re=(r,T)=>`<span class="hc-av ${T||""}" style="background:${ie(r.id)}">${d(r.init)}</span>`,Q=(r,T,F,f)=>`<span class="hc-ico ${f||""}" style="${U(T,F)}">${H(r)}</span>`,ae=(r,T,F)=>`<span class="hc-ring ${T||""}" style="--p:${r}" title="${d(F||r+"%")}"><b>${r}<small>%</small></b></span>`,_=(r,T,F)=>`<span class="hx-bar"><i style="width:${Math.max(0,Math.min(100,r))}%;${U(T,F)}"></i></span>`;function p(r){const T=r.state;let F=null,f=null,E=null,X=null,V=null,z=null;const ee={side:r.side,icons:Object.fromEntries(r.side.map(I=>[I,r.screens[I].icon])),colors:Object.fromEntries(r.side.map(I=>[I,r.screens[I].c1])),start:r.start,onScreen:null,render(I,q){F=q,T.screen=I,T.drawer=null,E=null,X=null,F.dataset.bound||(F.dataset.bound="1",F.addEventListener("click",P,!0),F.addEventListener("input",le),F.addEventListener("change",le),F.addEventListener("keydown",pe)),W()}},K=I=>r.screens[I]||r.screens[r.start];function A(I){const q=r.badge?r.badge():0;return`
        <div class="hc-topbar">
          <label class="hc-searchbar">${H("search")}
            <input id="hcSearch" type="text" value="${d(T.query)}" placeholder="${d(I||r.searchPlaceholder)}" autocomplete="off" aria-label="Search">
          </label>
          <button type="button" class="hc-bell" data-act="screen:${r.bellScreen}" aria-label="${d(r.bellLabel)} (${q})" title="${d(r.bellLabel)}">
            ${H("bell")}${q?`<i class="hc-badge">${q}</i>`:""}
          </button>
          <span class="hc-me">${re(r.me,"sm")}<span class="hc-me-txt"><b>${d(r.me.name)}</b><small>${d(r.me.role)}</small></span></span>
        </div>`}function C(I,q,se,B,u){const te=K(I);return`
        <div class="hc-head">
          <div class="hc-head-l">${Q(te.icon,te.c1,te.c2,"lg")}<div><small>${d(q)}</small><h4>${se}</h4><p>${B}</p></div></div>
          ${u||""}
        </div>`}const O=I=>[...F.querySelectorAll("[data-act]")].find(q=>q.dataset.act===I);function W(){if(!F)return;const I=K(T.screen),q=r.device?`<p class="hx-device">${H("lock")}<span>${r.device}</span></p>`:"";F.innerHTML=`<div class="hc-app${r.appClass?" "+r.appClass:""}">${q}${I.render()}${T.drawer?r.drawer():""}${T.toast?`<div class="hc-toast" role="status">${H("check")}${d(T.toast)}</div>`:""}</div>`;const se=F.querySelector("#hcSearch");se&&T.focus==="search"&&(se.focus({preventScroll:!0}),se.setSelectionRange(se.value.length,se.value.length));const B=F.querySelector(".hc-drawer");if(T.drawer&&T.drawer!==E&&B){const te=B.querySelector(".hc-close");te&&te.focus({preventScroll:!0})}else if(!T.drawer&&E&&X){const te=O(X);te&&te.focus({preventScroll:!0}),X=null}else if(z){const te=F.querySelector("#"+z);te&&te.focus({preventScroll:!0})}else if(V){const te=O(V);te&&te.focus({preventScroll:!0})}V=null,z=null,E=T.drawer;const u=F.closest(".exp-window");if(u&&r.sideBadge){const[te,ce]=r.sideBadge(),he=u.querySelector(`.exp-side-nav [data-screen="${te}"] .side-badge`);he&&(he.textContent=ce,he.hidden=!ce)}r.after&&r.after(F)}function l(I){T.toast=I,clearTimeout(f),f=setTimeout(()=>{T.toast="";const q=F&&F.querySelector(".hc-toast");q&&q.remove()},2800)}function J(I){T.screen=I,T.drawer=null,T.focus=null,X=null,ee.onScreen&&ee.onScreen(I)}function P(I){const q=I.target.closest("[data-act]");if(!q||!F.contains(q))return;const[se,...B]=q.dataset.act.split(":"),u=B.join(":");I.preventDefault(),I.stopPropagation();const te=T.drawer,ce=document.activeElement===q;if(se==="screen")J(u);else if(se==="close")T.drawer=null;else if(!r.act(se,u,q))return;!te&&T.drawer?X=q.dataset.act:ce&&se!=="screen"&&se!=="close"&&(V=q.dataset.act),W()}function le(I){if(I.target.id==="hcSearch"){if(I.type!=="input")return;T.query=I.target.value,!r.searchScreens.includes(T.screen)&&T.query.trim()&&J(r.searchScreens[0]),T.focus="search",W();return}const q=I.target.dataset.field;q&&(T.form[q]=I.target.type==="checkbox"?I.target.checked:I.target.value,I.type==="change"&&I.target.dataset.apply&&r.act("apply",q,I.target)&&(z=I.target.id||null,W()))}function pe(I){if(I.key==="Escape"&&T.drawer){T.drawer=null,W();return}if(I.key!=="Enter"&&I.key!==" ")return;const q=I.target.closest&&I.target.closest("[data-act]");!q||q.tagName==="BUTTON"||q.tagName==="INPUT"||q.tagName==="SELECT"||q.tagName==="TEXTAREA"||(I.preventDefault(),q.click())}return{api:ee,topbar:A,head:C,go:J,toast:l,paint:W,theme:K}}window.HiveUI={esc:d,icon:H,tint:U,grad:ie,avatar:re,tile:Q,ring:ae,bar:_,createApp:p}})(),(function(){const{esc:e,icon:d,tint:H,tile:U,createApp:ie}=window.HiveUI,re={id:"dr",name:"Dana Reid",init:"DR",role:"Head of Portfolio Office"},Q="12 Oct 2026",ae="14 Oct 2026",_="v0-placeholder",p=5,r=2,T=a=>a==null?"Insufficient data":a>=80?"High":a>=60?"Elevated":a>=30?"Watch":"Low",F={High:"#b42318",Elevated:"#9a3d0a",Watch:"#7a5a00",Low:"#067647","Insufficient data":"#475467"},f={Low:0,Watch:1,Elevated:2,High:3,"Insufficient data":-1},E=a=>!a.outcome&&[a.s,a.d,a.c].some(t=>t!=null&&t>=60),X=a=>!a.outcome&&(a.reported==="green"||a.reported==="amber")&&a.s!=null&&a.s>=60,V=[{id:"Atlas",title:"Payments modernisation",sponsor:"Director of Payments",trend:"Rising"},{id:"Beacon",title:"Identity and access",sponsor:"Head of Identity",trend:"Stable"},{id:"Harbour Ops",title:"Operations platform",sponsor:"Chief Operating Officer",trend:"Rising"}],z=[{id:"A-01",name:"Payments discovery complete",prog:"Atlas",team:"Compass",due:"2026-06-26",outcome:{kind:"met",note:"Met on 24 Jun 2026"}},{id:"A-02",name:"Card platform architecture approved",prog:"Atlas",team:"Compass",due:"2026-08-28",outcome:{kind:"slipped",note:"Slipped by 9 days, met on 6 Sep 2026"}},{id:"A-03",name:"Merchant onboarding API",prog:"Atlas",team:"Anchor",due:"2026-11-13",reported:"amber",s:44,d:36,c:12,conf:"Medium",confWhy:"its dependency comes from the register last updated 9 days before the snapshot",ev:{s:["Scope has grown 22% since the milestone was committed.","The forecast is still on the baseline date; the plan has not absorbed the added scope yet."],d:["One dependency on Beacon\u2019s directory clean-up has no agreed date."]},next:["Agree a date for the directory clean-up with Beacon\u2019s lead.","Decide whether the added scope stays in this milestone."]},{id:"A-04",name:"Fraud rules migration",prog:"Atlas",team:"Compass",due:"2026-11-30",reported:"amber",s:34,d:72,c:22,conf:"Medium",confWhy:"the dependency register was last updated 9 days before the snapshot",ev:{s:["The forecast moved once, by 6 days, after scope was clarified."],d:["An external supplier (fraud model vendor) has no agreed date for the model it must deliver.","The work is needed by 9 Nov 2026, three weeks before the milestone."]},next:["Get a committed date from the fraud model vendor.","Plan the rules migration so it can start on the current model if the date slips."]},{id:"A-05",name:"Settlement reporting",prog:"Atlas",team:"Anchor",due:"2026-12-04",reported:"green",s:18,d:10,c:12,conf:"High"},{id:"A-06",name:"Card tokenisation service",prog:"Atlas",team:"Harbour",due:"2026-12-11",reported:"green",s:24,d:28,c:41,conf:"High"},{id:"A-07",name:"Payments cut-over",prog:"Atlas",team:"Harbour",due:"2026-12-15",forecast:"2027-01-18",reported:"green",s:68,d:84,c:41,conf:"Medium",confWhy:"the dependency register was last updated 9 days before the snapshot",ev:{s:["The forecast has moved 3 times since the baseline, 34 days in total.","Completion needed: 14 items a week. Last 4 weeks: 8 a week."],d:["Upstream \u201CIdentity API v2\u201D (Programme Beacon) is forecast 12 days after it is needed.","2 dependencies on external suppliers have no agreed date.","Downstream: 2 milestones in Programme Atlas wait on this one."],c:["Team Harbour is planned at 113% of its capacity in weeks 47\u201350, across 3 programmes.","Within it, data engineering is planned at 131% of its capacity."]},next:["Confirm the upstream date with Programme Beacon\u2019s lead.","Agree dates for the 2 supplier dependencies.","Review Team Harbour\u2019s commitments across its 3 programmes."]},{id:"A-08",name:"Merchant migration wave 1",prog:"Atlas",team:"Anchor",due:"2027-02-26",reported:"green",s:20,d:48,c:12,conf:"Medium",confWhy:"the dependency register was last updated 9 days before the snapshot",ev:{d:["Waits on \u201CPayments cut-over\u201D, which is Elevated on slippage, one step upstream.","The cut-over\u2019s forecast still lands 11 days before this milestone needs it."]}},{id:"A-09",name:"Legacy gateway decommission",prog:"Atlas",team:"Compass",due:"2027-03-26",reported:"green",s:12,d:40,c:22,conf:"Medium",confWhy:"the dependency register was last updated 9 days before the snapshot",ev:{d:["Waits on \u201CPayments cut-over\u201D, one step upstream."]}},{id:"A-10",name:"Chargeback workflow",prog:"Atlas",team:"Compass",due:"2027-01-15",reported:"green",s:16,d:8,c:22,conf:"High"},{id:"A-11",name:"Payments monitoring dashboards",prog:"Atlas",team:"Anchor",due:"2027-02-05",reported:"green",s:10,d:6,c:12,conf:"High"},{id:"A-12",name:"Security evidence pack",prog:"Atlas",team:"Compass",due:"2027-02-19",reported:"green",s:14,d:20,c:22,conf:"High"},{id:"A-13",name:"Merchant portal refresh",prog:"Atlas",team:"Anchor",due:"2027-03-05",reported:"green",s:26,d:12,c:12,conf:"High"},{id:"A-14",name:"Payments hypercare exit",prog:"Atlas",team:"Harbour",due:"2027-04-30",reported:"none",s:8,d:30,c:41,conf:"Medium",confWhy:"the dependency register was last updated 9 days before the snapshot",ev:{d:["Waits on \u201CPayments cut-over\u201D, two steps upstream."]}},{id:"B-01",name:"Identity discovery",prog:"Beacon",team:"Quay",due:"2026-07-10",outcome:{kind:"met",note:"Met on 10 Jul 2026"}},{id:"B-02",name:"Directory clean-up",prog:"Beacon",team:"Quay",due:"2026-10-30",reported:"green",s:22,d:10,c:18,conf:"High"},{id:"B-03",name:"Identity API v2",prog:"Beacon",team:"Harbour",due:"2026-11-18",forecast:"2026-12-02",reported:"amber",s:52,d:20,c:41,conf:"High",ev:{s:["The forecast has moved twice, 14 days in total."],d:["Upstream of 2 milestones: \u201CPayments cut-over\u201D (Atlas) and \u201CDirectory access for branch staff\u201D (Beacon)."]}},{id:"B-04",name:"Access reviews automation",prog:"Beacon",team:"Tide",due:"2026-11-27",reported:"green",s:18,d:14,c:26,conf:"High"},{id:"B-05",name:"Customer notifications service",prog:"Beacon",team:"Meridian",due:"2026-11-20",forecast:"2026-12-08",reported:"green",s:71,d:18,c:30,conf:"High",ev:{s:["The forecast has moved twice since it was re-baselined, 18 days in total.","Completion needed: 18 items a week. Last 4 weeks: 9 a week.","6 blocked items; the oldest has been blocked for 16 days."],c:["Team Meridian is planned at 97% of its capacity in weeks 47\u201350."]},next:["Review scope, plan and blockers within the project.","Ask why the reported status is green while the evidence is Elevated."]},{id:"B-06",name:"Directory access for branch staff",prog:"Beacon",team:"Meridian",due:"2027-01-29",reported:"green",s:20,d:46,c:30,conf:"High",ev:{d:["Waits on \u201CIdentity API v2\u201D, which is Watch on slippage, one step upstream."]}},{id:"B-07",name:"Privileged access vault",prog:"Beacon",team:"Tide",due:"2027-02-12",reported:"green",s:12,d:10,c:26,conf:"High"},{id:"B-08",name:"Identity hypercare exit",prog:"Beacon",team:"Quay",due:"2027-03-19",reported:"none",s:6,d:22,c:18,conf:"High"},{id:"B-09",name:"Legacy directory retirement",prog:"Beacon",team:"Tide",due:"2027-04-30",reported:"none",s:4,d:26,c:26,conf:"High"},{id:"H-01",name:"Ops tooling consolidation",prog:"Harbour Ops",team:"Keel",due:"2026-09-18",outcome:{kind:"descoped",note:"Descoped on 2 Sep 2026"}},{id:"H-02",name:"Site survey complete",prog:"Harbour Ops",team:"Lantern",due:"2026-11-06",forecast:"2026-11-27",reported:"amber",s:58,d:10,c:null,conf:"Low",confWhy:"there is no capacity data for Team Lantern",ev:{s:["The forecast has moved 3 weeks since the baseline."],c:["No capacity data for Team Lantern, so capacity shows \u201Cinsufficient data\u201D, not \u201Cwithin capacity\u201D."]}},{id:"H-03",name:"Data platform migration",prog:"Harbour Ops",team:"Keel",due:"2027-01-31",reported:"amber",s:39,d:45,c:74,conf:"Medium",confWhy:"the dependency register was last updated 9 days before the snapshot",ev:{s:["Completion needed: 11 items a week. Last 4 weeks: 9 a week."],d:["Needs a network change window from the infrastructure supplier; the date is agreed but not yet confirmed."],c:["Team Keel is planned at 124% of its capacity in weeks 47\u201350, across 2 programmes.","Within it, platform engineering is planned at 138% of its capacity.","2 positions in the team are open."]},next:["Review Team Keel\u2019s commitments with the other programme\u2019s lead.","Confirm the network change window with the supplier."]},{id:"H-04",name:"Network design sign-off",prog:"Harbour Ops",team:"Lantern",due:"2026-11-27",forecast:"2026-12-09",reported:"green",s:30,d:55,c:null,conf:"Low",confWhy:"there is no capacity data for Team Lantern",ev:{s:["The forecast has moved 12 days because the site survey is late."],d:["Waits on \u201CSite survey complete\u201D, forecast 21 days after it is needed."],c:["No capacity data for Team Lantern."]}},{id:"H-05",name:"Branch network refresh",prog:"Harbour Ops",team:"Lantern",due:"2027-02-26",reported:"green",s:22,d:63,c:null,conf:"Low",confWhy:"there is no capacity data for Team Lantern, and the dependency register is 9 days old",ev:{s:["The forecast is on the baseline date."],d:["Upstream \u201CNetwork design sign-off\u201D is forecast 5 days after it is needed.","That dependency has no agreed date and is not confirmed.","Two steps upstream, \u201CSite survey complete\u201D is slipping."],c:["No capacity data for Team Lantern, so capacity cannot be assessed."]},next:["Agree and confirm the sign-off date with the network design lead.","Ask Team Lantern\u2019s lead to provide capacity data."]},{id:"H-06",name:"Branch go-live wave 1",prog:"Harbour Ops",team:"Harbour",due:"2027-03-31",reported:"none",s:10,d:24,c:41,conf:"Medium",confWhy:"the dependency register was last updated 9 days before the snapshot",ev:{d:["Waits on \u201CBranch network refresh\u201D, which is Low on slippage. Propagation uses upstream slippage, so dependency risk is not counted twice.","The slipping site survey is 3 steps upstream, beyond the propagation depth of "+r+", so it does not raise this milestone."]}}],ee=a=>z.find(t=>t.id===a),K=[{id:"D-01",up:"B-03",down:"A-07",type:"Cross-programme",need:"20 Nov 2026",agreed:"20 Nov 2026",confirmed:!0,slack:-12},{id:"D-02",ext:"Card network certification (external supplier)",down:"A-07",type:"External",need:"27 Nov 2026",agreed:null,confirmed:!1,slack:null},{id:"D-03",ext:"Terminal firmware release (external supplier)",down:"A-07",type:"External",need:"1 Dec 2026",agreed:null,confirmed:!1,slack:null},{id:"D-04",up:"A-07",down:"A-08",type:"Within programme",need:"29 Jan 2027",agreed:"29 Jan 2027",confirmed:!0,slack:11},{id:"D-05",up:"A-07",down:"A-09",type:"Within programme",need:"26 Feb 2027",agreed:"26 Feb 2027",confirmed:!0,slack:39},{id:"D-06",ext:"Fraud model (external supplier)",down:"A-04",type:"External",need:"9 Nov 2026",agreed:null,confirmed:!1,slack:null},{id:"D-07",up:"B-03",down:"B-06",type:"Within programme",need:"18 Dec 2026",agreed:"18 Dec 2026",confirmed:!0,slack:16},{id:"D-08",up:"H-02",down:"H-04",type:"Within programme",need:"6 Nov 2026",agreed:"6 Nov 2026",confirmed:!0,slack:-21},{id:"D-09",up:"H-04",down:"H-05",type:"Within programme",need:"4 Dec 2026",agreed:null,confirmed:!1,slack:-5},{id:"D-10",up:"H-05",down:"H-06",type:"Within programme",need:"5 Mar 2027",agreed:"5 Mar 2027",confirmed:!0,slack:7},{id:"D-11",up:"H-05",oos:!0,type:"Cross-programme",band:"Watch"},{id:"D-12",up:"B-02",down:"A-03",type:"Cross-programme",need:"30 Oct 2026",agreed:null,confirmed:!1,slack:0},{id:"D-13",ext:"Network change window (external supplier)",down:"H-03",type:"External",need:"14 Jan 2027",agreed:"14 Jan 2027",confirmed:!1,slack:0},{id:"D-14",up:"A-07",down:"A-14",type:"Within programme",need:"31 Mar 2027",agreed:"31 Mar 2027",confirmed:!0,slack:72}],A=["Weeks 43\u201346","Weeks 47\u201350","Weeks 51\u201302"],C={Anchor:{hc:9,progs:["Atlas"],open:0,load:[82,86,79],c:12,rf:[["Software engineering",6,null,"comp"],["Quality engineering",3,null,"floor"]]},Compass:{hc:10,progs:["Atlas"],open:0,load:[71,72,70],c:22,rf:[["Software engineering",5,80,"Low"],["Data engineering",5,64,"Low"]]},Harbour:{hc:14,progs:["Atlas","Beacon","Harbour Ops"],open:1,load:[104,113,102],c:41,rf:[["Data engineering",5,131,"High"],["Software engineering",6,null,"comp"],["Platform engineering",3,null,"floor"]]},Keel:{hc:11,progs:["Harbour Ops","Atlas"],open:2,load:[118,124,121],c:74,rf:[["Platform engineering",6,138,"High"],["Software engineering",5,108,"Watch"]]},Lantern:{hc:8,progs:["Harbour Ops"],open:0,load:null,c:null,rf:[]},Meridian:{hc:12,progs:["Beacon"],open:0,load:[96,97,94],c:30,rf:[["Software engineering",7,101,"Watch"],["Quality engineering",5,92,"Low"]]},Quay:{hc:9,progs:["Beacon"],open:0,load:[74,70,68],c:18,rf:[]},Tide:{hc:7,progs:["Beacon"],open:1,load:[85,88,80],c:26,rf:[["Software engineering",4,null,"floor"],["Business analysis",3,null,"floor"]]}},O=Object.keys(C).sort(),W=["Reviewed: no concern","Reviewed: re-plan agreed","Dependency escalated","Scope reduced","Capacity requested","Follow-up scheduled","Data incorrect","False alarm"],l=[{name:"Atlas work-tracker export",kind:"CSV with manifest",updated:"12 Oct 2026",state:"ok",note:"Fresh"},{name:"Beacon work-tracker export",kind:"CSV with manifest",updated:"12 Oct 2026",state:"warn",note:"The 13 Oct file was rejected; the 12 Oct snapshot stays authoritative"},{name:"Harbour Ops plan export",kind:"CSV with manifest",updated:"12 Oct 2026",state:"ok",note:"Fresh"},{name:"Dependency register",kind:"Register, CSV",updated:"3 Oct 2026",state:"stale",note:"9 days before the snapshot; the freshness limit is 7 days, so confidence is lowered where it is used"},{name:"Team capacity and demand",kind:"Resourcing export, totalled by team and role family before export",updated:"12 Oct 2026",state:"warn",note:"No rows for Team Lantern: its capacity shows \u201Cinsufficient data\u201D"}],J=["milestone_id","as_of","forecast_date","rebaseline_count","reported_status","scope_total","scope_done","scope_added_since_commit","blocked_count","oldest_blocked_age_days"],P={screen:"Portfolio",query:"",drawer:null,toast:"",focus:null,form:{disp:W[0],note:""},prog:"all",view:"open",chain:"A-07",period:1,reviews:[{m:"A-04",disp:"Follow-up scheduled",note:"Supplier asked for a committed date by 16 Oct.",by:"Programme lead, Atlas",when:"1 Oct 2026"},{m:"A-07",disp:"Dependency escalated",note:"Identity API v2 date raised at the cross-programme board.",by:"Programme lead, Atlas",when:"6 Oct 2026"},{m:"B-05",disp:"Reviewed: re-plan agreed",note:"Two features moved to a later release.",by:"Programme lead, Beacon",when:"8 Oct 2026"},{m:"H-03",disp:"Capacity requested",note:"Platform engineering capacity requested from the infrastructure budget.",by:"Programme lead, Harbour Ops",when:"9 Oct 2026"}]},le=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],pe=a=>{const[t,c,v]=a.split("-").map(Number);return`${v} ${le[c-1]} ${t}`},I=(a,t)=>{const c=T(a);return`<span class="hx-lvl" style="--lc:${F[c]}">${t?e(t)+" ":""}${c}${a!=null?` <i>${a}</i>`:""}</span>`},q=a=>`<span class="hx-lvl" style="--lc:${F[a]}">${a}</span>`,se=a=>`<span class="rk-conf ${a.toLowerCase()}" title="Confidence comes from freshness, completeness and coverage. It never changes a band.">${d("database")}Confidence ${a}</span>`,B={green:"Green",amber:"Amber",red:"Red",none:"None"},u=a=>`<span class="rk-rag ${a.reported}">Reported ${B[a.reported]||"None"}</span>`,te=a=>`<div class="rk-dims">
      <span class="rk-dim"><em>Slippage</em>${I(a.s)}</span>
      <span class="rk-dim"><em>Dependency</em>${I(a.d)}</span>
      <span class="rk-dim"><em>Capacity</em>${I(a.c)}</span>
    </div>`,ce=()=>z.filter(a=>!a.outcome),he=a=>z.filter(t=>t.prog===a),h=(a,t,c)=>a.filter(v=>T(v[t])===c).length,m=a=>P.reviews.filter(t=>t.m===a),w=a=>`Due ${pe(a.due)}${a.forecast?` \xB7 forecast ${pe(a.forecast)}`:""}`;function k(a){const t=m(a.id).length;return`
      <div class="hc-row rk-ms${E(a)?" gate":""}" data-act="open:${a.id}" role="button" tabindex="0" aria-label="${e(a.name)}: open the assessment">
        <div class="hc-row-main">
          <div class="hc-row-top"><span class="rk-id">${a.id}</span><b>${e(a.name)}</b>${X(a)?'<span class="rk-flag">Reported status disagrees with the evidence</span>':""}</div>
          <small>${e(a.prog)} \xB7 Team ${e(a.team)} \xB7 ${w(a)}</small>
          ${a.outcome?`<div class="rk-outcome ${a.outcome.kind}">${d("check")}${e(a.outcome.note)}</div>`:te(a)}
        </div>
        <div class="hc-row-end">${a.outcome?'<span class="hx-status done">Complete</span>':`${se(a.conf)}${u(a)}${t?`<span class="rk-rv">${t} review${t>1?"s":""}</span>`:""}`}</div>
      </div>`}function R(){return`<div class="rk-banner" role="note">${d("warn")}<span><b>Data as of ${Q}.</b> The dependency register is 9 days old, so confidence is lowered where it is used. Beacon\u2019s 13 Oct file was rejected and the 12 Oct snapshot stays in use.</span><button type="button" class="hc-link" data-act="screen:Data">Open data \u2192</button></div>`}let D;const oe={Portfolio:{icon:"portfolio",c1:"#1687ff",c2:"#45d8ff",render:de},Milestones:{icon:"flag",c1:"#0e7490",c2:"#22b8cf",render:y},Dependencies:{icon:"chain",c1:"#6941e8",c2:"#b27bff",render:g},"Team capacity":{icon:"gauge",c1:"#0b7a66",c2:"#46dd98",render:N},Reviews:{icon:"actions",c1:"#b45309",c2:"#f59e0b",render:s},Data:{icon:"database",c1:"#4f46e5",c2:"#8b8cff",render:n}};function de(){const a=ce(),t=a.filter(E),c=a.filter(X).length,v=O.filter(G=>C[G].load&&C[G].load.some(M=>M>100)).length,L=(G,M,Y,x,Z,ue,me)=>`
      <div class="hx-kpi" data-act="${me}" role="button" tabindex="0" style="${H(M,Y)}">
        ${U(G,M,Y)}<div><b>${x}</b><span>${Z}</span><small>${ue}</small></div>
      </div>`,S=(G,M)=>{const Y=["High","Elevated","Watch"].map(Z=>[Z,h(G,M,Z)]).filter(Z=>Z[1]),x=G.filter(Z=>Z[M]==null).length;return Y.map(([Z,ue])=>`<span class="hx-lvl" style="--lc:${F[Z]}">${ue} ${Z}</span>`).join("")+(x?`<span class="hx-lvl" style="--lc:${F["Insufficient data"]}">${x} insufficient data</span>`:"")||'<span class="rk-none">All Low</span>'};return`
      ${D.topbar()}
      <div class="hc-head"><div class="hc-head-l"><div><small>PORTFOLIO \xB7 DIGITAL</small><h4>Where delivery risk is building</h4><p>Three programmes in your scope. Every milestone is assessed on slippage, dependency and capacity, and the three are never combined.</p></div></div>
        <button type="button" class="hc-btn" style="${H("#0e7490","#22b8cf")}" data-act="queue">${d("flag")}Review the queue</button></div>
      ${R()}
      <div class="hx-kpis">
        ${L("flag","#0e7490","#22b8cf",a.length,"Open milestones",`${z.length-a.length} complete, outcomes recorded`,"view:open")}
        ${L("warn","#b42318","#f97066",t.length,"Past the band gate","Elevated or High in a dimension","queue")}
        ${L("radar","#9a3d0a","#f79009",c,"Status disagrees","Reported green or amber, evidence Elevated","view:gate")}
        ${L("gauge","#0b7a66","#46dd98",v,"Teams planned above capacity","In at least one period","screen:Team capacity")}
      </div>
      <div class="hc-panel">
        <div class="hc-panel-head"><b>Programmes</b><span class="hc-tag">Counts of open milestones by band</span></div>
        <div class="tb rk-progs" style="--cols:1.3fr .5fr 1.2fr 1.2fr 1.2fr .6fr">
          <div class="tb-r tb-h"><span>Programme</span><span>Open</span><span>Slippage</span><span>Dependency</span><span>Capacity</span><span>Trend</span></div>
          ${V.map(G=>{const M=he(G.id).filter(Y=>!Y.outcome);return`
            <div class="tb-r" data-act="prog:${G.id}" role="button" tabindex="0" aria-label="Show ${G.id} milestones">
              <span data-l="Programme"><b>${e(G.id)}</b><small>${e(G.title)} \xB7 sponsor: ${e(G.sponsor)}</small></span>
              <span data-l="Open">${M.length}</span>
              <span data-l="Slippage">${S(M,"s")}</span>
              <span data-l="Dependency">${S(M,"d")}</span>
              <span data-l="Capacity">${S(M,"c")}</span>
              <span data-l="Trend" class="rk-trend ${G.trend.toLowerCase()}">${G.trend}</span>
            </div>`}).join("")}
        </div>
      </div>
      <div class="hc-panel" style="margin-top:10px">
        <div class="hc-panel-head"><b>Needs attention \xB7 your scope</b><span class="hc-tag">${t.length} past the band gate</span></div>
        <div class="hc-list">${t.slice().sort((G,M)=>G.due.localeCompare(M.due)).map(k).join("")}</div>
        <p class="hc-note">Listed by due date. Only milestones Elevated or High in at least one dimension enter this queue. It is capped at 10 and is never exported as a top list.</p>
      </div>
      <p class="hc-note">HiveRisk assesses plans and teams, not people. No person is scored, and teams are never ranked. Scoring configuration ${_}: the weights and thresholds are not yet decided.</p>`}function y(){const a=P.query.toLowerCase().trim();let t=z.slice();P.prog!=="all"&&(t=t.filter(S=>S.prog===P.prog)),P.view==="open"&&(t=t.filter(S=>!S.outcome)),P.view==="gate"&&(t=t.filter(E)),P.view==="done"&&(t=t.filter(S=>S.outcome)),a&&(t=t.filter(S=>(S.id+" "+S.name+" "+S.prog+" team "+S.team).toLowerCase().includes(a)));const c=V.map(S=>S.id);t.sort((S,G)=>c.indexOf(S.prog)-c.indexOf(G.prog)||S.due.localeCompare(G.due));const v=(S,G)=>`<button type="button" class="hc-filter ${P.prog===S?"on":""}" aria-pressed="${P.prog===S}" style="${H("#0e7490","#22b8cf")}" data-act="prog:${S}">${G}</button>`,L=(S,G)=>`<button type="button" class="${P.view===S?"on":""}" aria-pressed="${P.view===S}" data-act="view:${S}">${G}</button>`;return`
      ${D.topbar("Search milestones, programmes or teams")}
      ${D.head("Milestones","MILESTONES","Every milestone, three dimensions.","Grouped by programme and listed by due date. There is no \u201Csort by risk\u201D: a queue is not a ranking.",`<div class="hx-seg" role="group" aria-label="Which milestones">${L("open","Open")}${L("gate","Past the gate")}${L("done","Complete")}</div>`)}
      <div class="hc-filters">${v("all","All programmes")}${V.map(S=>v(S.id,S.id)).join("")}<span class="hc-count">${t.length} milestone${t.length===1?"":"s"}</span></div>
      <div class="hc-list">${t.length?t.map(k).join(""):`<div class="hc-empty">${d("flag")}<p>No milestones match.</p></div>`}</div>`}function b(a,t,c){return`<div class="rk-node${a.id===P.chain?" me":""}" data-act="open:${a.id}" role="button" tabindex="0" aria-label="${e(a.name)}: open the assessment">
      <span class="rk-step">${t}</span>
      <b><span class="rk-id">${a.id}</span>${e(a.name)}</b>
      <small>${e(a.prog)} \xB7 ${w(a)}</small>
      <div class="rk-node-dims"><span>Slippage ${I(a.s)}</span>${a.id===P.chain?`<span>Dependency ${I(a.d)}</span>`:""}</div>
      ${c?`<p>${c}</p>`:""}
    </div>`}function g(){const a=ee(P.chain),t=K.filter(x=>x.down===a.id),c=K.filter(x=>x.up===a.id),v=[],L=new Set([a.id]);let S=t.filter(x=>x.up).map(x=>[x,1]);for(;S.length;){const x=[];for(const[Z,ue]of S)L.has(Z.up)||ue>3||(L.add(Z.up),v.push([Z,ue]),K.filter(me=>me.down===Z.up&&me.up).forEach(me=>x.push([me,ue+1])));S=x}v.sort((x,Z)=>Z[1]-x[1]);const G=x=>x.slack==null?"":x.slack<0?`<b class="rk-late">forecast ${-x.slack} days after it is needed</b>`:x.slack===0?"needed on its forecast date":`${x.slack} days of slack`,M=["A-07","H-05","A-04","B-06","A-03"],Y=K.filter(x=>x.ext&&!x.agreed).length;return`
      ${D.topbar()}
      ${D.head("Dependencies","DEPENDENCIES","What it waits on, and what waits on it.",`Chains are followed across programmes and to suppliers. Propagation uses upstream slippage and stops at a depth of ${r}.`)}
      <div class="hc-filters" role="group" aria-label="Choose a milestone">${M.map(x=>`<button type="button" class="hc-filter ${P.chain===x?"on":""}" aria-pressed="${P.chain===x}" style="${H("#6941e8","#b27bff")}" data-act="chain:${x}">${x} ${e(ee(x).name)}</button>`).join("")}</div>
      <div class="rk-chain">
        <div class="rk-col"><div class="rk-col-h">Upstream</div>
          ${v.length||t.some(x=>x.ext)?"":'<p class="hc-note">Nothing upstream in the data.</p>'}
          ${v.map(([x,Z])=>b(ee(x.up),`${Z} step${Z>1?"s":""} up${Z>r?" \xB7 beyond the propagation depth":""}`,x.down===a.id?`${e(x.type)} \xB7 needed ${e(x.need)} \xB7 ${x.agreed?"date agreed":'<b class="rk-late">no agreed date</b>'}${x.confirmed?"":" \xB7 not confirmed"} \xB7 ${G(x)}`:"")).join("")}
          ${t.filter(x=>x.ext).map(x=>`<div class="rk-node ext"><span class="rk-step">External supplier</span><b>${e(x.ext)}</b><small>Needed ${e(x.need)} \xB7 ${x.agreed?`agreed ${e(x.agreed)}`:'<b class="rk-late">no agreed date</b>'}${x.confirmed?"":" \xB7 not confirmed"}</small></div>`).join("")}
        </div>
        <div class="rk-col"><div class="rk-col-h">This milestone</div>${b(a,"Selected")}
          <div class="hc-panel rk-why"><div class="hc-why-label">Dependency evidence</div><ul class="hc-why">${(a.ev&&a.ev.d||["No dependency evidence above Low."]).map(x=>`<li>${e(x)}</li>`).join("")}</ul></div>
        </div>
        <div class="rk-col"><div class="rk-col-h">Downstream</div>
          ${c.length?"":'<p class="hc-note">Nothing in your scope waits on this milestone.</p>'}
          ${c.map(x=>x.oos?`<div class="rk-node oos"><span class="rk-step">Outside your scope</span><b>A milestone in another programme waits on this one</b><small>Band ${q(x.band)} \xB7 details are hidden because that programme is not in your scope</small></div>`:b(ee(x.down),x.down==="H-06"&&a.id==="H-05"?"Waits on this \xB7 propagation stops here":"Waits on this",`${e(x.type)} \xB7 needed ${e(x.need)} \xB7 ${G(x)}`)).join("")}
        </div>
      </div>
      <div class="hc-panel" style="margin-top:10px">
        <div class="hc-panel-head"><b>All dependency links in your scope</b><span class="hc-tag">${Y} supplier dates missing</span></div>
        <div class="tb rk-deps" style="--cols:1.6fr 1.6fr 1fr 1fr 1fr">
          <div class="tb-r tb-h"><span>Waits on</span><span>Milestone</span><span>Type</span><span>Needed</span><span>Date</span></div>
          ${K.filter(x=>!x.oos).map(x=>`<div class="tb-r">
            <span data-l="Waits on">${x.ext?e(x.ext):`<span class="rk-id">${x.up}</span>${e(ee(x.up).name)}`}</span>
            <span data-l="Milestone"><span class="rk-id">${x.down}</span>${e(ee(x.down).name)}</span>
            <span data-l="Type">${e(x.type)}</span>
            <span data-l="Needed">${e(x.need)}</span>
            <span data-l="Date">${x.agreed?x.confirmed?"Agreed, confirmed":"Agreed, not confirmed":'<b class="rk-late">No agreed date</b>'}</span>
          </div>`).join("")}
        </div>
      </div>
      <p class="hc-note">Incomplete dependency data shows \u201Cdependency confidence: limited\u201D, never \u201Cno dependencies\u201D. A dependency cycle in a file would reject the whole file.</p>`}function N(){const a=P.period,t=(c,v)=>`<button type="button" class="${a===c?"on":""}" aria-pressed="${a===c}" data-act="period:${c}">${v}</button>`;return`
      ${D.topbar()}
      ${D.head("Team capacity","TEAM CAPACITY","Planned demand against each team\u2019s own capacity.","Demand from every programme a team serves, against what the team can do. Team and role-family figures only; nothing is computed for a person.",`<div class="hx-seg" role="group" aria-label="Period">${A.map((c,v)=>t(v,c)).join("")}</div>`)}
      <div class="tb rk-teams" style="--cols:1.1fr .7fr 1.4fr 1.4fr .9fr">
        <div class="tb-r tb-h"><span>Team</span><span>Headcount</span><span>Programmes served</span><span>${A[a]}</span><span>Band</span></div>
        ${O.map(c=>{const v=C[c],L=v.load?v.load[a]:null;return`
          <div class="tb-r" data-act="open:T-${c}" role="button" tabindex="0" aria-label="Team ${c}: open capacity detail">
            <span data-l="Team"><b>Team ${c}</b>${v.open?`<small>${v.open} open position${v.open>1?"s":""}</small>`:""}</span>
            <span data-l="Headcount">${v.hc}</span>
            <span data-l="Programmes served">${v.progs.length} \xB7 ${e(v.progs.join(", "))}</span>
            <span data-l="${A[a]}">${L==null?'<span class="rk-none">No capacity data</span>':`<span class="rk-load${L>100?" over":""}"><i style="width:${Math.min(100,L/1.5)}%"></i></span><b class="rk-pct">${L}%</b>${L>100?'<small class="rk-over">planned above capacity</small>':""}`}</span>
            <span data-l="Band">${I(v.c)}</span>
          </div>`}).join("")}
      </div>
      <p class="hc-note">Teams are listed by name, never by load. A team is compared only with its own capacity. Role-family figures describing fewer than ${p} people are hidden and counted in the team total (proposed floor of ${p}, not yet decided). Missing capacity data shows \u201Cinsufficient data\u201D, never \u201Cwithin capacity\u201D.</p>`}function s(){const a=z.filter(c=>c.outcome),t=P.reviews.slice().reverse();return`
      ${D.topbar()}
      ${D.head("Reviews","REVIEWS AND OUTCOMES","People decide; HiveRisk records it.","Every review is a human decision with a reason. Milestone outcomes, not reviews, are how HiveRisk is judged.")}
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Reviews recorded</b><span class="hc-tag">${t.length}</span></div>
          <div class="hc-list">${t.map(c=>{const v=ee(c.m);return`
            <div class="hc-row rk-review" data-act="open:${v.id}" role="button" tabindex="0" aria-label="${e(v.name)}: open the assessment">
              <div class="hc-row-main"><div class="hc-row-top"><span class="rk-id">${v.id}</span><b>${e(c.disp)}</b></div>
                <small>${e(v.name)} \xB7 ${e(c.by)} \xB7 ${e(c.when)}</small>${c.note?`<p class="rk-note">${e(c.note)}</p>`:""}</div>
            </div>`}).join("")}</div>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Outcomes recorded</b><span class="hc-tag">${a.length} complete</span></div>
          ${a.map(c=>`<div class="hc-feed" data-act="open:${c.id}" role="button" tabindex="0"><span class="rk-outcome ${c.outcome.kind}">${d("check")}${c.outcome.kind==="met"?"Met":c.outcome.kind==="slipped"?"Slipped":"Descoped"}</span><span class="hc-feed-text"><b>${e(c.name)}</b><br>${e(c.outcome.note)}</span></div>`).join("")}
          <div class="hc-panel-head sep"><b>How HiveRisk is judged in a pilot</b></div>
          <ul class="hc-why">
            <li>How far before the due date a slip was first flagged, compared with the reported status.</li>
            <li>Lift over the reported status, and over the simple rule \u201Cthe forecast has already moved\u201D.</li>
            <li>False alarms and missed slips, against actual outcomes.</li>
          </ul>
          <p class="hc-note">A flagged milestone that is rescued looks like a false alarm, so actions are recorded beside outcomes. Reviews are counted in aggregate only; there are no statistics per reviewer.</p>
        </div>
      </div>`}function n(){return`
      ${D.topbar()}
      ${D.head("Data","DATA AND SOURCES","Your delivery tools, as export files.","Files with a manifest, checked against a field allow-list. A file with any other field is rejected whole, and the last valid snapshot stays in use.")}
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Sources and freshness</b><span class="hc-tag">As of ${Q}</span></div>
          ${l.map(a=>`<div class="rk-src ${a.state}"><span class="rk-dot" aria-hidden="true"></span><div><b>${e(a.name)}</b><small>${e(a.kind)} \xB7 updated ${e(a.updated)}</small><p>${e(a.note)}</p></div></div>`).join("")}
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Intake runs</b><span class="hc-tag">Atomic publish</span></div>
          <div class="hc-row rk-run ok"><div class="hc-row-main"><div class="hc-row-top"><b>Run 41 \xB7 12 Oct 2026, 06:00</b><span class="hx-status done">Published</span></div><small>9 files. Every hard check passed: fields, integrity, dates, duplicates, freshness and dependency cycles.</small></div></div>
          <div class="hc-row rk-run bad" data-act="open:RUN-42" role="button" tabindex="0" aria-label="Run 42: open the rejection report"><div class="hc-row-main"><div class="hc-row-top"><b>Run 42 \xB7 13 Oct 2026, 06:00</b><span class="hx-status rejected">Rejected</span></div><small>Beacon milestone snapshots: a column outside the allow-list. The whole file was rejected; the 12 Oct snapshot stays in use.</small><em class="hc-go">Open the rejection report \u2192</em></div></div>
          <div class="hc-panel-head sep"><b>Fields accepted for milestone snapshots</b></div>
          <div class="hc-chips">${J.map(a=>`<span class="hc-chip rk-code">${a}</span>`).join("")}</div>
          <p class="hc-note">Never accepted, whatever the source: assignee, reporter, commenter, owner names, emails, employee IDs, worklogs and timesheets, and free-text descriptions and comments. Export files are deleted once validated and loaded.</p>
        </div>
      </div>`}function $(){const a=P.drawer;if(a==="RUN-42")return o();if(a.startsWith("T-"))return j(a.slice(2));const t=ee(a);if(!t)return"";const c=K.filter(Y=>Y.down===t.id),v=K.filter(Y=>Y.up===t.id),L=Y=>t[Y]!=null&&t[Y]>=60,S=t.outcome?"":L("s")&&L("d")?"Slippage and dependency are both raised: the cause may be upstream. Check the chain first.":L("s")&&L("c")?"Slippage and capacity are both raised: the owning team may be over-committed across programmes.":L("s")?"Slippage only: review scope, plan and blockers within the project.":L("d")||L("c")?"Dependency or capacity raised, slippage not: an early warning. Confirm dates and commitments before it shows in the plan.":"",G=(Y,x)=>{const Z=t.ev&&t.ev[Y]||[];return`<div class="hc-why-label">${x}</div><ul class="hc-why">${(Z.length?Z:[Y==="c"&&t.c==null?"No capacity data for this team.":"Nothing above Low in this dimension."]).map(ue=>`<li>${e(ue)}</li>`).join("")}</ul>`},M=m(t.id);return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer rk-drawer" role="dialog" aria-label="${e(t.name)}">
        <div class="hc-drawer-band" style="background:linear-gradient(135deg,#0b2347,#1667c9)"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${U("flag","#0e7490","#22b8cf","lg hx-drawer-ico")}${t.outcome?'<span class="hx-status done">Complete</span>':u(t)}</div>
        <div class="hc-drawer-id"><b>${e(t.name)}</b><small>${t.id} \xB7 Programme ${e(t.prog)} \xB7 Team ${e(t.team)} \xB7 ${w(t)}</small></div>
        ${t.outcome?`<div class="rk-outcome ${t.outcome.kind} big">${d("check")}${e(t.outcome.note)}</div><p class="hc-note">Outcomes like this are the labels HiveRisk is evaluated against.</p>`:`
        <div class="hx-dim3 rk-dim3">
          <div><small>Slippage</small>${I(t.s)}</div>
          <div><small>Dependency</small>${I(t.d)}</div>
          <div><small>Capacity</small>${I(t.c)}</div>
        </div>
        <p class="rk-confline">${se(t.conf)}${t.confWhy?`<span>because ${e(t.confWhy)}.</span>`:""}</p>
        ${X(t)?`<div class="hx-prio" style="--lc:#9a3d0a"><b>Reported status disagrees with the evidence</b><span>Reported ${B[t.reported]}, slippage evidence ${T(t.s)}. Reported status is never an input to the score.</span></div>`:""}
        ${G("s","Slippage evidence")}${G("d","Dependency evidence")}${G("c","Capacity evidence")}
        <div class="hc-why-label">Depends on, and waited on by</div>
        <div class="hc-chips">${c.map(Y=>`<span class="hc-chip">${d("chain")}${Y.ext?e(Y.ext):e(ee(Y.up).name)}</span>`).join("")||'<span class="hc-chip">Nothing upstream</span>'}${v.map(Y=>`<span class="hc-chip strong">${Y.oos?"Outside your scope":e(ee(Y.down).name)} waits on this</span>`).join("")}</div>
        ${c.length||v.length?`<button type="button" class="hc-link rk-chainlink" data-act="chain:${t.id}">Open the dependency chain \u2192</button>`:""}
        ${S?`<div class="hc-why-label">Triage guide</div><p class="hx-suggest">${S}</p>`:""}
        ${t.next?`<div class="hc-why-label">Suggested next steps</div><ul class="hc-why">${t.next.map(Y=>`<li>${e(Y)}</li>`).join("")}</ul>`:""}
        <div class="hc-why-label">Review history</div>
        ${M.length?`<ul class="hc-why">${M.map(Y=>`<li><b>${e(Y.disp)}</b>&nbsp;\xB7 ${e(Y.by)}, ${e(Y.when)}${Y.note?`: ${e(Y.note)}`:""}</li>`).join("")}</ul>`:'<p class="hc-note">Not reviewed yet.</p>'}
        <div class="rk-form">
          <label for="rk-disp">Record a review</label>
          <select id="rk-disp" data-field="disp">${W.map(Y=>`<option ${P.form.disp===Y?"selected":""}>${e(Y)}</option>`).join("")}</select>
          <label for="rk-note">Reason or note</label>
          <input id="rk-note" data-field="note" value="${e(P.form.note)}" placeholder="What was decided, and why" maxlength="140">
          <button type="button" class="hc-btn" style="${H("#0e7490","#22b8cf")}" data-act="review:${t.id}">${d("check")}Record review</button>
        </div>`}
        <p class="hc-note">Last refreshed ${Q} \xB7 scoring configuration ${_}. Every item above traces to a stored evidence row. HiveRisk informs; people decide.</p>
      </aside>`}function j(a){const t=C[a],c=P.period,v=t.rf.map(([L,S,G,M])=>`<div class="tb-r">
        <span data-l="Role family"><b>${e(L)}</b></span>
        <span data-l="Holders">${S}</span>
        <span data-l="${A[1]}">${G==null?`<span class="rk-hidden">${d("lock")}Hidden: ${M==="floor"?`fewer than ${p} people, counted in the team total`:"complementary suppression"}</span>`:`${G}% ${q(M)}`}</span>
      </div>`).join("");return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer rk-drawer" role="dialog" aria-label="Team ${e(a)}">
        <div class="hc-drawer-band" style="background:linear-gradient(135deg,#0b3b34,#0f8a74)"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${U("gauge","#0b7a66","#46dd98","lg hx-drawer-ico")}${I(t.c,"Capacity")}</div>
        <div class="hc-drawer-id"><b>Team ${e(a)}</b><small>Headcount ${t.hc} \xB7 demand from ${t.progs.length} programme${t.progs.length>1?"s":""}: ${e(t.progs.join(", "))}${t.open?` \xB7 ${t.open} open position${t.open>1?"s":""}`:""}</small></div>
        ${t.load?`
        <div class="hc-why-label">Planned demand against capacity</div>
        <div class="tb rk-periods" style="--cols:1.2fr 1fr .8fr">
          <div class="tb-r tb-h"><span>Period</span><span>Load</span><span>Band</span></div>
          ${A.map((L,S)=>`<div class="tb-r${S===c?" on":""}"><span data-l="Period">${L}</span><span data-l="Load">${t.load[S]}%${t.load[S]>100?" \xB7 planned above capacity":""}</span><span data-l="Band">${I(t.c)}</span></div>`).join("")}
        </div>
        <div class="hc-why-label">By role family (${A[1]})</div>
        ${t.rf.length?`<div class="tb rk-rf" style="--cols:1.4fr .6fr 1.6fr"><div class="tb-r tb-h"><span>Role family</span><span>Holders</span><span>${A[1]}</span></div>${v}</div>`:'<p class="hc-note">One role family: the team figure is the only figure.</p>'}`:'<div class="hx-prio" style="--lc:#475467"><b>Capacity: insufficient data</b><span>No capacity rows arrived for this team. Its milestones show \u201Cinsufficient data\u201D and lower confidence, never \u201Cwithin capacity\u201D.</span></div>'}
        <p class="hc-note">A team is compared only with its own capacity, never with other teams. Nothing here describes a person; holder counts are counts. A role with one holder is never shown on its own.</p>
      </aside>`}function o(){return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer rk-drawer" role="dialog" aria-label="Rejection report, run 42">
        <div class="hc-drawer-band" style="background:linear-gradient(135deg,#3b0d0d,#b42318)"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${U("database","#4f46e5","#8b8cff","lg hx-drawer-ico")}<span class="hx-status rejected">Rejected whole</span></div>
        <div class="hc-drawer-id"><b>Rejection report \xB7 run 42</b><small>13 Oct 2026, 06:00 \xB7 beacon_milestone_snapshots.csv \xB7 schema v0</small></div>
        <div class="hc-why-label">Why</div>
        <ul class="hc-why"><li>Column <code>assignee</code> is not in the field allow-list for milestone snapshots.</li><li>Person fields never enter HiveRisk, even briefly. The report names the column, never its values.</li></ul>
        <div class="hc-why-label">What happened next</div>
        <ul class="hc-why"><li>Nothing from the file was stored or published.</li><li>The 12 Oct snapshot stays authoritative, with a staleness banner where it is used.</li><li>Beacon\u2019s data owner was told which column to remove before re-exporting.</li></ul>
        <p class="hc-note">The same rule rejects reporter, commenter, owner names, emails and employee IDs.</p>
      </aside>`}function i(a,t){switch(a){case"open":return P.drawer=t,!0;case"prog":return P.prog=t,P.screen!=="Milestones"&&(P.view="open",D.go("Milestones")),!0;case"view":return P.view=t,P.screen!=="Milestones"&&D.go("Milestones"),!0;case"queue":return P.view="gate",P.prog="all",D.go("Milestones"),!0;case"chain":return P.chain=t,P.screen!=="Dependencies"&&D.go("Dependencies"),!0;case"period":return P.period=Number(t),!0;case"review":{const c=ee(t);return P.reviews.push({m:t,disp:P.form.disp,note:(P.form.note||"").trim(),by:"You, Head of Portfolio Office",when:ae}),P.form={disp:W[0],note:""},D.toast(`Review recorded for ${c.name}. It is your decision on the record; it is not treated as ground truth.`),!0}default:return!1}}D=ie({state:P,side:Object.keys(oe),screens:oe,start:"Portfolio",me:re,act:i,drawer:$,appClass:"hx-aa rk-app",device:"HiveRisk is for work laptops: on a phone it shows a \u201Cplease use your work laptop\u201D screen. This preview adapts to your screen.",searchScreens:["Milestones"],searchPlaceholder:"Search milestones, programmes or teams",bellScreen:"Milestones",bellLabel:"Milestones past the band gate",badge:()=>ce().filter(E).length,sideBadge:()=>["Milestones",ce().filter(E).length]}),window.HiveRisk=D.api})(),(function(){const{esc:e,icon:d,tint:H,avatar:U,tile:ie,bar:re,createApp:Q}=window.HiveUI,ae={id:"je",name:"Jordan Ellis",init:"JE",role:"Product Designer"},_={je:ae,mk:{id:"mk",name:"Maya Kent",init:"MK",role:"Support Operations"},lb:{id:"lb",name:"Leo Brandt",init:"LB",role:"People Experience"},th:{id:"th",name:"Tariq Hussein",init:"TH",role:"Data Science"},rk:{id:"rk",name:"Ruth Kimani",init:"RK",role:"Platform Engineering"},ow:{id:"ow",name:"Olivia Wright",init:"OW",role:"Customer Success"},dn:{id:"dn",name:"Dev Nair",init:"DN",role:"Data Engineering"},sp:{id:"sp",name:"Sofia Petrov",init:"SP",role:"Engineering"},fa:{id:"fa",name:"Felix Adeyemi",init:"FA",role:"Finance Systems"},mo:{id:"mo",name:"Marta Ortiz",init:"MO",role:"VP Operations"},gc:{id:"gc",name:"Grace Chen",init:"GC",role:"CTO"},hb:{id:"hb",name:"Hana Boateng",init:"HB",role:"Learning & Development"}},p={onb:{name:"Faster onboarding",c:["#1687ff","#45d8ff"]},auto:{name:"Automate busywork",c:["#7c5cff","#b27bff"]},cost:{name:"Cut cloud cost",c:["#f59e0b","#fcd34d"]},green:{name:"Greener operations",c:["#0fb99f","#46dd98"]},cx:{name:"Happier customers",c:["#f2508b","#ff8fb1"]}},r=["Idea","Evidence","Experiment","Outcome"],T=["#7d8ba0","#1687ff","#7c5cff","#0fb99f"],f={screen:"Home",query:"",drawer:null,toast:"",focus:null,form:{title:"",challenge:"auto",summary:""},challengeFilter:"all",sort:"top",stageFilter:"all",ideas:[{id:"v1",title:"AI assistant that drafts support-ticket replies",author:"mk",challenge:"auto",stage:2,votes:142,comments:18,days:34,dims:{"Strategic alignment":90,"Problem significance":88,"Evidence strength":82,Feasibility:74},sponsor:"mo",members:["mk","th"],roles:["Data scientist","Designer"],tags:["AI","Support","Automation"],summary:"Draft first replies to common support tickets so agents review and send instead of writing from scratch.",evidence:["Support backlog up 22% this year (internal dashboard)","31 of 42 agents polled said they would use drafts"],next:"Run a four-week experiment with one support pod"},{id:"v2",title:"Self-serve onboarding checklist",author:"lb",challenge:"onb",stage:1,votes:96,comments:11,days:21,dims:{"Strategic alignment":84,"Problem significance":72,"Evidence strength":70,Feasibility:88},sponsor:null,members:["lb"],roles:["Frontend engineer"],tags:["Onboarding","People"],summary:"One checklist a new starter owns, with every access request and first-week task in one place.",evidence:["New starters raise an average of 9 access tickets in week one","Managers report onboarding admin as a top-three time sink"],next:"Find an executive sponsor"},{id:"v3",title:"Cloud cost anomaly alerts in team chat",author:"rk",challenge:"cost",stage:2,votes:118,comments:9,days:40,dims:{"Strategic alignment":88,"Problem significance":70,"Evidence strength":86,Feasibility:80},sponsor:"gc",members:["rk","dn"],roles:[],tags:["Cloud","FinOps"],summary:"Alert the owning team the same day their cloud spend jumps, with the likely cause attached.",evidence:["Three cost spikes last quarter went unnoticed for over a week","Tagging coverage is now above 90%, so owners are known"],next:"Measure spend avoided over six weeks"},{id:"v4",title:"Weekly customer-feedback digest",author:"ow",challenge:"cx",stage:0,votes:54,comments:6,days:6,dims:{"Strategic alignment":76,"Problem significance":64,"Evidence strength":48,Feasibility:82},sponsor:null,members:["ow"],roles:["Analyst"],tags:["Customers","Insight"],summary:"A short weekly digest of what customers asked for, grouped by theme, for every product team.",evidence:["Feedback currently lives in four separate tools"],next:"Gather evidence from two product teams"},{id:"v5",title:"Carbon-aware batch scheduling",author:"dn",challenge:"green",stage:1,votes:71,comments:7,days:18,dims:{"Strategic alignment":80,"Problem significance":58,"Evidence strength":66,Feasibility:70},sponsor:null,members:["dn","rk"],roles:["Platform engineer"],tags:["Sustainability","Data"],summary:"Run flexible batch jobs when the grid is cleanest, without missing any deadline.",evidence:["About 40% of nightly batch jobs have flexible start times"],next:"Estimate emissions avoided on one pipeline"},{id:"v6",title:"Auto-drafted release notes",author:"sp",challenge:"auto",stage:3,votes:130,comments:22,days:72,dims:{"Strategic alignment":78,"Problem significance":76,"Evidence strength":90,Feasibility:92},sponsor:"gc",members:["sp","je"],roles:[],tags:["Engineering","Automation"],summary:"Draft release notes from merged changes for a human to edit and publish.",evidence:["Pilot with two teams over six releases"],next:"Roll out to all product teams",outcome:{type:"Value",text:"Pilot: about three hours saved per release across two teams (illustrative)."}},{id:"v7",title:"Supplier invoice auto-matching",author:"fa",challenge:"auto",stage:0,votes:40,comments:3,days:3,dims:{"Strategic alignment":70,"Problem significance":50,"Evidence strength":52,Feasibility:66},sponsor:null,members:["fa"],roles:["Automation engineer"],tags:["Finance","Automation"],summary:"Match supplier invoices to purchase orders automatically and flag only the exceptions.",evidence:["Finance matches about 1,200 invoices a month by hand"],next:"Size the exception rate from last quarter"},{id:"v8",title:"Onboarding video library",author:"hb",challenge:"onb",stage:3,votes:88,comments:14,days:90,dims:{"Strategic alignment":72,"Problem significance":80,"Evidence strength":74,Feasibility:90},sponsor:"mo",members:["hb"],roles:[],tags:["Learning","Onboarding"],summary:"Short videos answering the questions every new starter asks.",evidence:["Completion rate high across the pilot cohort"],next:"Pair videos with a live Q&A session",outcome:{type:"Learning",text:"Completion was high, but questions still went to managers \u2014 pairing with live Q&A next."}},{id:"v9",title:"Design-system audit bot",author:"je",challenge:"auto",stage:0,votes:12,comments:2,days:9,dims:{"Strategic alignment":62,"Problem significance":56,"Evidence strength":44,Feasibility:80},sponsor:null,members:["je"],roles:["Frontend engineer"],tags:["Design","Quality"],summary:"Flag components that drift from the design system before they ship.",evidence:["Reviewer feedback: add how many screens drift today"],next:"Add evidence: count drifting components",feedback:"Promising \u2014 add how many screens drift today to strengthen the evidence."}].map(h=>({...h,members:h.members.slice(),roles:h.roles.slice()})),voted:new Set(["v6"]),sponsorAsked:new Set,lastCheck:null,seq:20},E=h=>f.ideas.find(m=>m.id===h),X=h=>_[h]||ae,V=h=>h>=80?"High":h>=60?"Medium":"Low",z=(h,m)=>Object.entries(h.dims).map(([w,k])=>`${w}: ${V(k)}`).join(m),ee=h=>`<span class="hx-pips" role="img" aria-label="${e(z(h,", "))}" title="${e(z(h," \xB7 "))}">${Object.values(h.dims).map(m=>`<i style="height:${Math.max(25,m)}%"></i>`).join("")}</span>`,K=h=>{const m=p[h];return`<span class="hx-ch" style="${H(m.c[0],m.c[1])}">${e(m.name)}</span>`},A=h=>`<span class="hx-stage" style="--lc:${T[h]}">${r[h]}</span>`,C=h=>`<button type="button" class="hx-vote ${f.voted.has(h.id)?"on":""}" data-act="vote:${h.id}" aria-pressed="${f.voted.has(h.id)}" title="Upvote">\u25B2<b>${h.votes}</b></button>`,O=()=>f.ideas.filter(h=>h.author===ae.id);function W(h){const m=p[h.challenge];return`
      <div class="hc-card hx-idea" style="${H(m.c[0],m.c[1])}" data-act="open:${h.id}" role="button" tabindex="0">
        <div class="hx-idea-top">${K(h.challenge)}${A(h.stage)}</div>
        <b class="hx-idea-title">${e(h.title)}</b>
        <div class="hx-idea-foot">
          ${U(X(h.author),"xs")}<small>${e(X(h.author).name)}</small>
          <span class="hx-meta">${d("chat")}${h.comments}</span>
          ${C(h)}
          ${ee(h)}
        </div>
      </div>`}let l;const J={Home:{icon:"portfolio",c1:"#1687ff",c2:"#45d8ff",render:P},Ideas:{icon:"idea",c1:"#f59e0b",c2:"#fcd34d",render:pe},Explore:{icon:"explore",c1:"#06b6d4",c2:"#67e8f9",render:I},"My submissions":{icon:"submit",c1:"#7c5cff",c2:"#b27bff",render:q},Teams:{icon:"teams",c1:"#0fb99f",c2:"#46dd98",render:se},Insights:{icon:"trend",c1:"#f2508b",c2:"#ff8fb1",render:B}};function P(){const h=f.ideas.slice().sort((k,R)=>R.votes-k.votes).slice(0,3),m=r.map((k,R)=>f.ideas.filter(D=>D.stage===R).length),w=(k,R)=>{const D=J[k];return`<button type="button" class="hc-qchip" style="${H(D.c1,D.c2)}" data-act="screen:${k}">${d(D.icon)}<span>${R}</span></button>`};return`
      ${l.topbar()}
      <div class="hc-head"><div class="hc-head-l"><div><small>INNOVATION MARKETPLACE</small><h4>What\u2019s brewing, Jordan? <span class="hc-wave">\u{1F4A1}</span></h4><p>Ideas from across the company, with a clear path from first thought to real outcome.</p></div></div>
        <button type="button" class="hc-btn" style="${H("#7c5cff","#b27bff")}" data-act="screen:My submissions">${d("sparkle")}Submit an idea</button></div>
      <div class="hc-qchips">
        ${w("Ideas",`<b>${f.ideas.length}</b> ideas this quarter`)}
        ${w("Explore",`<b>${m[2]}</b> experiments running`)}
        ${w("Insights",`<b>${m[3]}</b> outcomes recorded`)}
      </div>
      <div class="hx-pipe">
        ${r.map((k,R)=>`<button type="button" class="hx-pipe-step" style="--lc:${T[R]}" data-act="stage:${R}"><b>${m[R]}</b><span>${k}</span></button>${R<3?"<i>\u2192</i>":""}`).join("")}
      </div>
      <div class="hc-panel-head sep"><b>Trending this week</b><button type="button" class="hc-link" data-act="screen:Ideas">All ideas \u2192</button></div>
      <div class="hx-cards3">${h.map(W).join("")}</div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Open challenges</b><span class="hc-tag">Set by leadership</span></div>
          <div class="hc-chips big">${Object.keys(p).map(k=>`<button type="button" class="hx-ch big" style="${H(p[k].c[0],p[k].c[1])}" data-act="challenge:${k}">${e(p[k].name)} <b>${f.ideas.filter(R=>R.challenge===k).length}</b></button>`).join("")}</div>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Your submissions</b><button type="button" class="hc-link" data-act="screen:My submissions">Manage \u2192</button></div>
          ${O().map(k=>`<div class="hc-feed" data-act="open:${k.id}" role="button" tabindex="0">${ie("idea",p[k.challenge].c[0],p[k.challenge].c[1],"xs")}<span class="hc-feed-text"><b>${e(k.title)}</b></span>${A(k.stage)}</div>`).join("")}
        </div>
      </div>`}function le(){const h=f.query.toLowerCase().trim();let m=f.ideas.filter(w=>f.challengeFilter==="all"||w.challenge===f.challengeFilter);return f.stageFilter!=="all"&&(m=m.filter(w=>w.stage===Number(f.stageFilter))),h&&(m=m.filter(w=>(w.title+" "+w.tags.join(" ")+" "+p[w.challenge].name+" "+X(w.author).name).toLowerCase().includes(h))),m.sort((w,k)=>f.sort==="top"?k.votes-w.votes:w.days-k.days)}function pe(){const h=le(),m=(w,k,R)=>`<button type="button" class="hc-filter ${f.challengeFilter===w?"on":""}" style="${H(R[0],R[1])}" data-act="challenge:${w}">${w!=="all"?"<i></i>":""}${k}</button>`;return`
      ${l.topbar("Search ideas, tags or people")}
      ${l.head("Ideas","IDEAS","The open pipeline.","Every idea keeps its author, its evidence and its stage. Nothing disappears into a suggestion box.",`<div class="hx-seg"><button type="button" class="${f.sort==="top"?"on":""}" data-act="sort:top">Top</button><button type="button" class="${f.sort==="new"?"on":""}" data-act="sort:new">New</button></div>`)}
      <div class="hc-filters">${m("all","All challenges",["#f59e0b","#fcd34d"])}${Object.keys(p).map(w=>m(w,p[w].name,p[w].c)).join("")}
        ${f.stageFilter!=="all"?`<button type="button" class="hc-filter on" style="${H(T[f.stageFilter],T[f.stageFilter])}" data-act="stage:all">${r[f.stageFilter]} \u2715</button>`:""}
        <span class="hc-count">${h.length} idea${h.length===1?"":"s"}</span></div>
      ${h.length?`<div class="hc-grid2">${h.map(W).join("")}</div>`:`<div class="hc-empty">${d("idea")}<p>No ideas match yet \u2014 maybe yours is the first?</p><button type="button" class="hc-btn sm" style="${H("#7c5cff","#b27bff")}" data-act="screen:My submissions">Submit an idea</button></div>`}`}function I(){return`
      ${l.topbar()}
      ${l.head("Explore","PIPELINE","From idea to outcome.","An idea moves forward when it earns it: evidence, a sponsor, an experiment, a measured result.")}
      <div class="hx-kanban">
        ${r.map((h,m)=>{const w=f.ideas.filter(k=>k.stage===m).sort((k,R)=>R.votes-k.votes);return`<div class="hx-col" style="--lc:${T[m]}">
            <div class="hx-col-head"><b>${h}</b><span>${w.length}</span></div>
            ${w.map(k=>`<div class="hx-kcard" data-act="open:${k.id}" role="button" tabindex="0">
              ${K(k.challenge)}
              <b>${e(k.title)}</b>
              <div class="hx-kfoot">${U(X(k.author),"xs")}<span class="hx-meta">\u25B2 ${k.votes}</span>${k.sponsor?`<span class="hx-sponsored" title="Sponsored by ${e(X(k.sponsor).name)}">${d("check")}Sponsor</span>`:""}${k.outcome?`<span class="hx-out ${k.outcome.type.toLowerCase()}">${k.outcome.type}</span>`:""}</div>
            </div>`).join("")}
          </div>`}).join("")}
      </div>`}function q(){const h=f.lastCheck;return`
      ${l.topbar()}
      ${l.head("My submissions","MY SUBMISSIONS","Pitch an idea.","Say what and why in a sentence or two. HiveVentures tags it and checks for similar ideas before it goes live.")}
      <div class="hc-split">
        <div class="hc-panel hx-form">
          <div class="hc-panel-head"><b>New idea</b><span class="hc-tag">Takes a minute</span></div>
          <label><span>Idea title</span><input data-field="title" value="${e(f.form.title)}" placeholder="e.g. Automate expense receipt matching" maxlength="80"></label>
          <label><span>Challenge it answers</span><select data-field="challenge">${Object.keys(p).map(m=>`<option value="${m}" ${f.form.challenge===m?"selected":""}>${e(p[m].name)}</option>`).join("")}</select></label>
          <label><span>Why it matters</span><textarea data-field="summary" rows="3" placeholder="What problem does it solve, and for whom?">${e(f.form.summary)}</textarea></label>
          <div class="hc-actions"><button type="button" class="hc-btn" style="${H("#7c5cff","#b27bff")}" data-act="submit">${d("sparkle")}Submit idea</button></div>
          ${h?`<div class="hx-ai">${d("sparkle")}<div><b>AI check</b><span>Tagged ${h.tags.map(m=>`<i>${e(m)}</i>`).join("")}${h.similar?` \xB7 Similar to \u201C<a data-act="open:${h.similar.id}">${e(h.similar.title)}</a>\u201D \u2014 consider joining forces.`:" \xB7 No similar ideas found."}</span></div></div>`:""}
        </div>
        <div>
          ${O().map(m=>`
            <div class="hc-card hx-mine" style="${H(p[m.challenge].c[0],p[m.challenge].c[1])}">
              <div class="hx-idea-top">${K(m.challenge)}<span class="hx-meta">\u25B2 ${m.votes} \xB7 ${m.comments} comments</span></div>
              <b class="hx-idea-title" data-act="open:${m.id}" role="button" tabindex="0">${e(m.title)}</b>
              <div class="hx-steps">${r.map((w,k)=>`<span class="${k<m.stage?"done":k===m.stage?"now":""}">${k<m.stage?d("check"):""}${w}</span>`).join("")}</div>
              ${m.feedback?`<p class="hx-feedback">${d("chat")}${e(m.feedback)}</p>`:`<p class="hc-note">Next: ${e(m.next)}</p>`}
            </div>`).join("")}
        </div>
      </div>
      <p class="hc-note">Submissions, votes and comments are never turned into a hidden performance score.</p>`}function se(){const h=f.ideas.filter(m=>m.stage>=1&&m.stage<=2);return`
      ${l.topbar()}
      ${l.head("Teams","TEAMS","Who\u2019s building together.","Ideas attract teams. People join by choice \u2014 open roles are listed on every idea.")}
      <div class="hc-grid2">
        ${h.map(m=>{const w=p[m.challenge],k=m.members.includes(ae.id);return`<div class="hc-card" style="${H(w.c[0],w.c[1])}">
            <div class="hx-idea-top">${K(m.challenge)}${A(m.stage)}</div>
            <b class="hx-idea-title" data-act="open:${m.id}" role="button" tabindex="0">${e(m.title)}</b>
            <div class="hc-comm-meta"><span class="hc-stack">${m.members.map(R=>U(X(R),"xs")).join("")}</span><small>${m.members.length} member${m.members.length===1?"":"s"}${m.sponsor?` \xB7 sponsor ${e(X(m.sponsor).name)}`:" \xB7 seeking a sponsor"}</small></div>
            <div class="hc-chips">${m.roles.length?m.roles.map(R=>`<span class="hc-chip strong">Open: ${e(R)}</span>`).join(""):'<span class="hc-chip">Team complete</span>'}</div>
            <div class="hc-actions">${k?`<span class="hc-done" style="${H(w.c[0],w.c[1])}">${d("check")}You\u2019re on this team</span><button type="button" class="hc-btn ghost sm" data-act="join:${m.id}">Leave</button>`:`<button type="button" class="hc-btn sm" style="${H(w.c[0],w.c[1])}" data-act="join:${m.id}">Join team</button>`}</div>
          </div>`}).join("")}
      </div>`}function B(){const h=r.map((R,D)=>f.ideas.filter(oe=>oe.stage>=D).length),m=Object.keys(p).map(R=>[R,f.ideas.filter(D=>D.challenge===R).length]),w=Math.max(1,...m.map(R=>R[1])),k=f.ideas.filter(R=>R.outcome);return`
      ${l.topbar()}
      ${l.head("Insights","INSIGHTS","Is innovation moving?","The pipeline end to end \u2014 ideas in, experiments run, outcomes recorded.")}
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Pipeline funnel</b><span class="hc-tag">This quarter</span></div>
          ${r.map((R,D)=>`<div class="hx-arow"><span>${D===0?"Submitted":"Reached "+R.toLowerCase()}</span>${re(h[D]/h[0]*100,T[D],T[D])}<b>${h[D]}</b></div>`).join("")}
          <div class="hc-panel-head sep"><b>Ideas by challenge</b></div>
          ${m.map(([R,D])=>`<div class="hx-arow"><span>${e(p[R].name)}</span>${re(D/w*100,p[R].c[0],p[R].c[1])}<b>${D}</b></div>`).join("")}
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Outcomes recorded</b><span class="hc-tag">Value or learning</span></div>
          ${k.map(R=>`<div class="hx-outcome" data-act="open:${R.id}" role="button" tabindex="0"><span class="hx-out ${R.outcome.type.toLowerCase()}">${R.outcome.type}</span><b>${e(R.title)}</b><small>${e(R.outcome.text)}</small></div>`).join("")}
          <p class="hc-note">An experiment that teaches us something is a result too \u2014 both are recorded.</p>
        </div>
      </div>`}function u(){const h=E(f.drawer);if(!h)return"";const m=p[h.challenge],w=h.members.includes(ae.id);return`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${e(h.title)}">
        <div class="hc-drawer-band" style="background:linear-gradient(135deg,${m.c[0]},${m.c[1]})"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${ie("idea",m.c[0],m.c[1],"lg hx-drawer-ico")}${A(h.stage)}</div>
        <div class="hc-drawer-id"><b>${e(h.title)}</b><small>${e(X(h.author).name)} \xB7 ${e(X(h.author).role)} \xB7 ${e(m.name)}</small></div>
        <div class="hx-steps">${r.map((k,R)=>`<span class="${R<h.stage?"done":R===h.stage?"now":""}">${R<h.stage?d("check"):""}${k}</span>`).join("")}</div>
        <p class="hx-suggest">${e(h.summary)}</p>
        <div class="hc-why-label">How this idea is prioritised</div>
        ${Object.entries(h.dims).map(([k,R])=>`<div class="hx-arow"><span>${e(k)}</span>${re(R,m.c[0],m.c[1])}<b class="hx-word">${V(R)}</b></div>`).join("")}
        <div class="hc-why-label">Evidence</div>
        <ul class="hc-why" style="${H(m.c[0],m.c[1])}">${h.evidence.map(k=>`<li>${e(k)}</li>`).join("")}</ul>
        ${h.outcome?`<div class="hx-prio" style="--lc:${h.outcome.type==="Value"?"#0fb99f":"#7c5cff"}"><b>${h.outcome.type} outcome</b><span>${e(h.outcome.text)}</span></div>`:`<div class="hc-why-label">Next step</div><p class="hx-suggest">${e(h.next)}</p>`}
        <div class="hc-why-label">Team</div>
        <div class="hc-comm-meta"><span class="hc-stack">${h.members.map(k=>U(X(k),"xs")).join("")}</span><small>${h.sponsor?`Sponsored by ${e(X(h.sponsor).name)}, ${e(X(h.sponsor).role)}`:"Looking for a sponsor"}</small></div>
        <div class="hc-drawer-actions">
          ${C(h)}
          ${h.stage<3&&h.author!==ae.id?w?`<button type="button" class="hc-btn ghost" data-act="join:${h.id}">Leave team</button>`:`<button type="button" class="hc-btn" style="${H(m.c[0],m.c[1])}" data-act="join:${h.id}">Join team</button>`:""}
          ${h.sponsor?"":f.sponsorAsked.has(h.id)?`<span class="hc-done" style="${H(m.c[0],m.c[1])}">${d("check")}Sponsor intro requested</span>`:`<button type="button" class="hc-btn ghost" data-act="sponsor:${h.id}">Suggest a sponsor</button>`}
        </div>
        <p class="hc-note">There is no single score: each dimension is judged on its own, AI-assisted and reviewed by people. Ideas are compared, never the people behind them.</p>
      </aside>`}const te=new Set("a an the and or for to of in on with our we is are be by that this it from at as into".split(" "));function ce(h,m){const k=((h+" "+m).toLowerCase().match(/[a-z]{4,}/g)||[]).filter(de=>!te.has(de)),R=[...new Set(k)].slice(0,3).map(de=>de[0].toUpperCase()+de.slice(1));let D=null,oe=0;return f.ideas.forEach(de=>{const y=(de.title+" "+de.tags.join(" ")+" "+de.summary).toLowerCase(),b=k.filter(g=>y.includes(g)).length;b>oe&&(oe=b,D=de)}),{tags:R.length?R:["General"],similar:oe>=2?D:null}}function he(h,m){switch(h){case"open":return f.drawer=m,!0;case"vote":{const w=E(m);return f.voted.has(m)?(f.voted.delete(m),w.votes--):(f.voted.add(m),w.votes++),!0}case"challenge":return f.challengeFilter=m,f.stageFilter="all",f.screen!=="Ideas"&&l.go("Ideas"),!0;case"stage":return f.stageFilter=m,f.challengeFilter="all",m!=="all"&&f.screen!=="Ideas"&&l.go("Ideas"),!0;case"sort":return f.sort=m,!0;case"join":{const w=E(m);return w.members.includes(ae.id)?(w.members=w.members.filter(k=>k!==ae.id),l.toast("You left the team.")):(w.members.push(ae.id),l.toast(`You joined the team for \u201C${w.title}\u201D.`)),!0}case"sponsor":return f.sponsorAsked.add(m),l.toast("Sponsor intro requested \u2014 the innovation team will follow up."),!0;case"submit":{const w=(f.form.title||"").trim();if(w.length<6)return l.toast("Give your idea a title of at least a few words."),!0;const k=ce(w,f.form.summary||""),R="v"+ ++f.seq;return f.ideas.unshift({id:R,title:w,author:ae.id,challenge:f.form.challenge,stage:0,votes:1,comments:0,days:0,dims:{"Strategic alignment":72,"Problem significance":60,"Evidence strength":40,Feasibility:70},sponsor:null,members:[ae.id],roles:[],tags:k.tags,summary:(f.form.summary||"").trim()||"Summary to follow.",evidence:["Add evidence to move this idea forward"],next:"Gather evidence and find a sponsor"}),f.voted.add(R),f.lastCheck=k,f.form={title:"",challenge:f.form.challenge,summary:""},l.toast(k.similar?"Submitted. The AI check found a similar idea \u2014 take a look.":"Submitted. Your idea is live in the pipeline."),!0}default:return!1}}l=Q({state:f,side:Object.keys(J),screens:J,start:"Home",me:ae,act:he,drawer:u,searchScreens:["Ideas"],searchPlaceholder:"Search ideas, tags or people",bellScreen:"My submissions",bellLabel:"Updates on your ideas",badge:()=>O().filter(h=>h.feedback).length,sideBadge:()=>["My submissions",O().filter(h=>h.feedback).length]}),window.HiveVentures=l.api})(),(function(){const{esc:e,icon:d,tint:H,tile:U,createApp:ie}=window.HiveUI,re={id:"cd",name:"Claire Donovan",init:"CD",role:"Chief Operating Officer"},Q="14 Oct 2026",ae=10,_=o=>"\xA3"+Math.floor((o+50)/100).toLocaleString("en-GB"),p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=o=>{const[i,a,t]=o.split("-").map(Number);return Date.UTC(i,a-1,t)},T=r("2026-10-14"),F=o=>{const i=new Date(o);return`${i.getUTCDate()} ${p[i.getUTCMonth()]} ${i.getUTCFullYear()}`},f=o=>Math.round((r(o)-T)/864e5),E=(o,i)=>F(r(o)-i*864e5),X={A:{c:"#067647",what:"Randomised access, or randomised order of rollout waves"},B:{c:"#175cd3",what:"Staggered rollout or matched teams, with difference-in-differences"},C:{c:"#9a3d0a",what:"Before and after, or a design that failed a check: not a counterfactual estimate"},D:{c:"#475467",what:"A claim: vendor case study, business case or self-report. Never shown as a measurement"}},V=o=>o?`<span class="im-grade" style="--gc:${X[o].c}" title="Grade ${o}: ${e(X[o].what)}">Grade ${o}</span>`:'<span class="im-nograde">No result yet</span>',z=[{id:"T1",name:"AI writing assistant",fn:"Customer and Lending operations",seats:650,seatPence:3e3,renewal:"2026-12-27",plan:{id:"PL-01",units:"32 reporting units; teams under 10 people pooled with sibling teams first",design:"Staggered rollout in three waves (8 Jun, 6 Jul and 3 Aug 2026), compared with teams that did not have the tool yet (difference-in-differences)",kpi:"Cases resolved per staffed hour",counter:"Cases reopened within 7 days",windows:"12 weeks before each wave and 8 weeks after; the 2 weeks around each start left out",mde:"7.6%",noEffect:"The 95% interval includes zero",versions:[{v:1,drafted:"Imran Shah, impact analyst, 28 May 2026",approved:"Ade Mensah, Chief Financial Officer, 2 Jun 2026",note:"Approved before rollout, and before any result existed."}]},result:{effect:"+8.4%",lo:"+3.1%",hi:"+13.7%",grade:"B",at:"6 Oct 2026",checks:["Pre-trend check passed: treated and comparison teams moved together before each wave.","Placebo check passed: the real estimate is larger than 991 of 1,000 estimates from placebo rollout dates.","Counter-metric: reopened cases changed by +0.2 points (\u22120.5 to +0.9), no detectable change."],next:"A second post-period, weeks 9 to 16, reads on 23 Nov 2026, before the renewal decision."},event:{unit:"%",pre:[[.4,-2.6,3.4],[-.6,-3.4,2.2],[.2,-2.5,2.9],[-.3,-2.9,2.3]],post:[[4,-.8,8.8],[7.6,2.4,12.8],[10.4,4.6,16.2],[11.6,5.1,18.1]]},claims:[{src:"Vendor case study",kind:"Vendor",pop:"Another organisation\u2019s contact centre",fig:"Agents save up to 40 minutes a day"},{src:"Business case, approved Feb 2026",kind:"Business case",pop:"Customer operations",fig:"12% more cases resolved per hour"},{src:"Staff survey, Jul 2026",kind:"Self-report",pop:"Wave 1 users",fig:"Users estimate 30 minutes a day saved"}],seatBands:[["Customer operations",420,"350 to 400"],["Lending operations",140,"100 to 125"],["Other functions, not measured",90,"25 to 50"]],range:"Keep 450 to 520 seats in Customer and Lending operations, where the effect is grade B. The 90 seats elsewhere carry no measurement either way.",cash:{pence:142e4,line:"Agency staff, Customer operations",ref:"GL-6120-AGY",since:"Aug 2026"}},{id:"T2",name:"AI service-desk assistant",fn:"IT service desk",seats:120,seatPence:2900,renewal:"2027-06-01",plan:{id:"PL-03",units:"12 reporting units",design:"Randomised order of two rollout waves (1 Jun and 13 Jul 2026), drawn before rollout with the rollout planner",kpi:"First-contact resolution",counter:"Average handling time",windows:"8 weeks before each wave and 8 weeks after",mde:"6.0 points",noEffect:"The 95% interval includes zero",versions:[{v:1,drafted:"Imran Shah, impact analyst, 6 May 2026",approved:"Ade Mensah, Chief Financial Officer, 12 May 2026",note:"The wave order was drawn at random before rollout."}]},result:{effect:"+6.2 points",lo:"+2.0",hi:"+10.4",grade:"A",at:"21 Sep 2026",checks:["Wave order randomised before rollout.","Pre-trend check passed.","Placebo check passed: larger than 987 of 1,000 placebo assignments.","Counter-metric: handling time changed by +0.3 minutes (\u22120.4 to +1.0), no detectable change."]},event:{unit:" pts",pre:[[.3,-2.4,3],[-.5,-3.1,2.1],[.4,-2.2,3],[-.2,-2.7,2.3]],post:[[3.8,-.6,8.2],[6,1.5,10.5],[7.1,2.4,11.8],[7.9,2.9,12.9]]},claims:[{src:"Vendor case study",kind:"Vendor",pop:"Another organisation\u2019s service desk",fig:"Resolves 20% more contacts at first touch"}],seatBands:[["IT service desk",120,"100 to 115"]],range:"Keep the 120 seats: the effect is grade A. Its benefit runs through a service with a single-role dependency, so protect that capability too.",atRisk:"Runs through the IT service desk, whose knowledge base administration has one qualified holder and an untested backup."},{id:"T3",name:"AI coding assistant",fn:"Technology",seats:300,seatPence:1600,renewal:"2027-03-09",plan:{id:"PL-02",units:"14 of 20 engineering reporting units",design:"Staggered rollout in two waves (20 Jul and 17 Aug 2026), compared with units that did not have the tool yet (difference-in-differences)",kpi:"Pull-request cycle time (lower is better)",counter:"Change failure rate",windows:"12 weeks before each wave and 8 weeks after",mde:"11.5%",noEffect:"The 95% interval includes zero",versions:[{v:1,drafted:"Imran Shah, impact analyst, 7 Jul 2026",approved:"Ade Mensah, Chief Financial Officer, 14 Jul 2026",note:"Approved before any result existed."},{v:2,drafted:"Imran Shah, impact analyst, 13 Oct 2026",approved:null,note:"Created after the results: adds a second post-period. Version 1 is never edited, and the board pack shows both."}]},result:{effect:"\u22123.0%",lo:"\u221211.2%",hi:"+5.2%",grade:"B",none:!0,at:"13 Oct 2026",checks:["Pre-trend check passed.","Placebo check: the estimate sits among the placebo results (larger than 412 of 1,000), as expected with no detectable effect.","Counter-metric: change failure rate changed by \u22120.4 points (\u22122.1 to +1.3), no detectable change."]},event:{unit:"%",pre:[[.8,-6.9,8.5],[-1.1,-8.6,6.4],[.6,-7,8.2],[-.4,-7.8,7]],post:[[-1.2,-9.4,7],[-2.8,-11.2,5.6],[-3.6,-12.3,5.1],[-4.4,-13.6,4.8]]},claims:[{src:"Vendor case study",kind:"Vendor",pop:"Developers at other organisations",fig:"Up to 30% faster delivery"},{src:"Business case, approved Jun 2026",kind:"Business case",pop:"Technology",fig:"15% shorter cycle time"}],seatBands:[["Technology",300,"200 to 250"]],range:"No detectable effect at this size. The evidence supports neither expanding nor cutting: measure the remaining 6 units with randomised waves before deciding."},{id:"T4",name:"AI meeting-notes assistant",fn:"All functions",seats:1200,seatPence:700,renewal:"2027-02-03",plan:{id:"PL-04",units:"All 41 reporting units, on the same day",design:"Before and after, adjusted for the trend. Every unit got the tool on 2 Mar 2026, so no comparison group exists",kpi:"Project actions logged within 2 days of a meeting",counter:"None agreed",windows:"12 weeks before and 12 weeks after",mde:"Not available: there is no comparison group",noEffect:"Not applicable",versions:[{v:1,drafted:"Imran Shah, impact analyst, 14 Apr 2026",approved:"Ade Mensah, Chief Financial Officer, 20 Apr 2026",note:"Written after the rollout, so it says what this design cannot show."}]},result:{effect:"+11%",lo:"\u22122%",hi:"+24%",grade:"C",at:"30 Sep 2026",checks:["Not a counterfactual estimate: every unit got the tool on the same day, so nothing shows what would have happened anyway."]},claims:[{src:"Staff survey, Jun 2026",kind:"Self-report",pop:"All users",fig:"People estimate 25 minutes a day saved"}],seatBands:[["All functions",1200,"600 to 700"]],range:"Grade C only: the evidence cannot support a seat range. A decision here rests on cost and claims, and should say so."}],ee=o=>z.find(i=>i.id===o),K=o=>o.seats*o.seatPence*12,A=[{ref:"V-06",title:"Auto-drafted release notes",state:"Outcome recorded: value",fundPence:18e5,fte:[["Software engineering",10],["Design",4]],planned:"About 3 hours saved per release (claimed at approval)",realised:"46 hours a month released across 6 teams",grade:"C",label:"Before and after across the same teams: not a counterfactual estimate",cash:null,exposure:null,ror:"3.3 hours a month released per FTE-week invested (grade C)"},{ref:"V-03",title:"Cloud cost anomaly alerts in team chat",state:"Experiment",fundPence:9e5,fte:[["Platform engineering",6]],planned:"Spend avoided on the services that get alerts",realised:"\xA36,800 a month less cloud spend on 3 alerted services than on 5 matched services",grade:"B",label:"Matched services, difference-in-differences",cash:{pence:68e4,ref:"GL-7410-CLOUD"},exposure:"Runs through the cost tagging pipeline, which has one qualified holder and no backup",ror:"\xA39.07 of cash a year per \xA31 funded; \xA313,600 a year per FTE-week (grade B, cash only)"},{ref:"V-01",title:"AI assistant that drafts support-ticket replies",state:"Experiment",fundPence:24e5,fte:[["Data science",6],["Design",2]],planned:"Measurement plan PL-05 approved on 30 Sep 2026; results after 30 Nov 2026",realised:null,grade:null,label:"No result yet: the plan was approved before results",cash:null,exposure:null,ror:"Not yet"},{ref:"V-08",title:"Onboarding video library",state:"Outcome recorded: learning",fundPence:6e5,fte:[["Learning and development",5]],planned:"Fewer new-starter questions reaching managers",realised:"Learning: completion was high, but questions still reached managers",grade:null,label:"A learning outcome is recorded as a result, not a failure",cash:null,exposure:null,ror:"Not applicable"}],C=o=>o.fte.reduce((i,a)=>i+a[1],0),O=[{id:"S-1",name:"Customer contact",important:!0,tol:"4 hours",reg:"Jul 2026",caps:[{cap:"Telephony routing",role:"Contact platform engineer",cov:4,backup:"yes",tested:"Jun 2026"},{cap:"Complaint handling",role:"Complaints handler",cov:12,backup:"yes",tested:"May 2026"},{cap:"Knowledge articles",role:"Knowledge editor",cov:3,backup:"yes",tested:"Aug 2026"}]},{id:"S-2",name:"Payments settlement",important:!0,tol:"24 hours",reg:"Sep 2026",caps:[{cap:"Settlement reconciliation",role:"Settlement operations lead",cov:1,backup:"unknown",succ:"no ready-now successor",hire:16,comp:12},{cap:"Payment file transmission",role:"Payments analyst",cov:3,backup:"yes",tested:"Mar 2026"},{cap:"Scheme liaison",role:"Scheme relationship manager",cov:2,backup:"no",tested:"never"}]},{id:"S-3",name:"IT service desk",important:!0,tol:"8 hours",reg:"Aug 2026",caps:[{cap:"Knowledge base administration",role:"Knowledge base administrator",cov:1,backup:"no",tested:"never",succ:"a ready-later successor only",hire:10,comp:8},{cap:"Incident triage",role:"Service desk analyst",cov:9,backup:"yes",tested:"Sep 2026"},{cap:"Access requests",role:"Access administrator",cov:6,backup:"yes",tested:"Jul 2026"}]},{id:"S-4",name:"Mortgage servicing",important:!0,tol:"2 days",reg:"Aug 2026",caps:[{cap:"Arrears batch scheduling",role:"Batch scheduler",cov:2,backup:"yes",tested:"Aug 2026"},{cap:"Statement production",role:"Statement analyst",cov:3,backup:"yes",tested:"Jun 2026"}]},{id:"S-5",name:"Payroll",important:!0,tol:"1 day",reg:"Aug 2025",stale:!0,caps:[{cap:"Payroll run",role:"Payroll manager",cov:null,backup:"unknown"},{cap:"Pension feeds",role:"Payroll analyst",cov:null,backup:"unknown"}]},{id:"S-6",name:"Cloud cost controls",important:!1,tol:"None set",reg:"Oct 2026",caps:[{cap:"Cost tagging pipeline",role:"FinOps engineer",cov:1,backup:"no",tested:"never",succ:"unknown",hire:12,comp:6}]}],W=()=>O.flatMap(o=>o.caps.map(i=>({...i,svc:o}))),l=()=>W().filter(o=>o.cov===1),J=o=>o.caps.some(i=>i.cov==null)?null:Math.min(...o.caps.map(i=>i.cov)),P=()=>{const o=W();return Math.round(o.filter(i=>i.backup!=="unknown"&&i.cov!=null).length/o.length*100)},le=["Quarterly resilience review","Business impact analysis refresh","Incident follow-up"],pe=[{id:"sc1",label:"One role unavailable: settlement operations lead",out:"Payments settlement loses settlement reconciliation. No covered alternative exists. The exposure window is 28 weeks (16 to hire, 12 to competence), against an impact tolerance of 24 hours: tolerance exceeded."},{id:"sc2",label:"One role unavailable: knowledge base administrator",out:"The IT service desk loses knowledge base administration. The named backup has never been tested. Exposure window 18 weeks against a tolerance of 8 hours: tolerance exceeded. The service-desk assistant\u2019s grade A benefit runs through this capability: impact at risk."},{id:"sc3",label:"Two at once: a payments analyst and the scheme relationship manager",out:"Payment file transmission keeps 2 of 3 qualified people. Scheme liaison falls to 1 for the period: a new single-role dependency, but no service stops."},{id:"sc4",label:"A whole team unavailable: contact platform team",out:"Telephony routing falls from 4 qualified people to none. Customer contact loses telephony routing; against a tolerance of 4 hours, tolerance exceeded."}],I=["Assign a backup","Cross-train","Write a runbook","Test the backup","Name a successor"],q={"Customer operations":{units:[{unit:"Collections",pooled:2,people:19,kpi:"Cases resolved per staffed hour",now:"1.64",base:"1.66",chg:"\u22121%",services:"Customer contact",inits:"None",actions:0},{unit:"Complaints",people:22,kpi:"Cases resolved per staffed hour",now:"1.92",base:"1.81",chg:"+6%",services:"Customer contact",inits:"None",actions:1},{unit:"Contact centre North",pooled:3,people:64,kpi:"Cases resolved per staffed hour",now:"2.31",base:"2.12",chg:"+9%",services:"Customer contact",inits:"AI support-reply drafts (experiment pod)",actions:0},{unit:"Contact centre South",people:48,kpi:"Cases resolved per staffed hour",now:"2.18",base:"2.05",chg:"+6%",services:"Customer contact",inits:"None",actions:1}],fams:[{fam:"Complaints handlers",people:20,depth:"Regular use by 60 to 80% of seats",single:0},{fam:"Customer advisers",people:118,depth:"Regular use by 60 to 80% of seats",single:0},{fam:"Quality analysts",supp:"floor"},{fam:"Team leaders",people:16,depth:"Regular use by 40 to 60% of seats",single:0},{fam:"Workforce planners",supp:"comp"}]},Technology:{units:[{unit:"IT service desk",pooled:4,people:46,kpi:"First-contact resolution",now:"74%",base:"68%",chg:"+6 points",services:"IT service desk",inits:"None",actions:1},{unit:"Platform engineering",pooled:2,people:18,kpi:"Pull-request cycle time",now:"2.6 days",base:"2.9 days",chg:"10% shorter",services:"Cloud cost controls",inits:"Cloud cost anomaly alerts",actions:0},{unit:"Product engineering",pooled:6,people:88,kpi:"Pull-request cycle time",now:"3.1 days",base:"3.2 days",chg:"3% shorter",services:"Online channels",inits:"Auto-drafted release notes",actions:0}],fams:[{fam:"Data scientists",supp:"floor"},{fam:"Platform engineers",people:18,depth:"Regular use by 60 to 80% of seats",single:1},{fam:"Service desk analysts",people:40,depth:"Regular use by 40 to 60% of seats",single:1},{fam:"Software engineers",people:92,depth:"Regular use by 60 to 80% of seats",single:0}]},"Lending operations":{units:[{unit:"Arrears support",people:14,kpi:"Cases resolved per staffed hour",now:"1.12",base:"1.10",chg:"+2%",services:"Mortgage servicing",inits:"None",actions:0},{unit:"Mortgage servicing",people:36,kpi:"Cases resolved per staffed hour",now:"1.48",base:"1.41",chg:"+5%",services:"Mortgage servicing",inits:"None",actions:0},{unit:"Underwriting support",pooled:2,people:21,kpi:"Cases resolved per staffed hour",now:"1.36",base:"1.33",chg:"+2%",services:"Mortgage servicing",inits:"None",actions:0}],fams:[{fam:"Arrears specialists",people:14,depth:"Regular use by 20 to 40% of seats",single:0},{fam:"Mortgage advisers",people:30,depth:"Regular use by 40 to 60% of seats",single:0},{fam:"Underwriters",supp:"floor"},{fam:"Underwriting assistants",supp:"comp"}]}},se=[["Software engineering",10,"Auto-drafted release notes","46 hours a month released (grade C)"],["Platform engineering",6,"Cloud cost anomaly alerts","\xA36,800 a month less cloud spend, finance-checked (grade B)"],["Other roles, pooled because each has fewer than 10 people",17,"Support-reply drafts; release notes; onboarding videos","Results after 30 Nov; released time (grade C); a learning outcome"]],B={id:"SH-2026-0412",by:"Sana Mirza",role:"Team leader, Contact Centre South",on:"9 Oct 2026",until:"23 Oct 2026",purpose:"a project retrospective",title:"Wave 2 of the writing-assistant rollout: what I did (Jun to Sep 2026)",statement:"I led wave 2 of the writing-assistant rollout for Contact Centre South. I ran six coaching sessions and rewrote 40 reply templates with the advisers, so the drafts matched how we actually answer customers.",items:[["Coaching sessions run for advisers","6 sessions, 9 hours logged"],["Reply templates rewritten with advisers","40 templates, 14 hours (est.)"],["Questions about the rollout from other teams","5 asks, 3.5 hours (est.)"]],evidence:["Template library change record (reference kept, link removed)","Thanks from a team lead in Complaints (name removed by the employee)"]},u={screen:"Overview",query:"",drawer:null,toast:"",focus:null,form:{mpc:"21.5",cost:"31.40",action:I[0],purpose:""},toolSel:"T1",peopleTab:"teams",fn:"Customer operations",scenario:"sc2",planOption:null,seen:{ai:!1},purpose:null,purposeLog:[],clock:12,assumptions:[{key:"mpc",name:"Minutes per case at baseline",value:"21.5 minutes",owner:"Head of Customer Operations",source:"Case system, Jan to May 2026 average",v:1,date:"4 Jun 2026"},{key:"cost",name:"Loaded hourly cost of an adviser",value:"\xA331.40",owner:"Financial planning lead",source:"2026 budget",v:1,date:"4 Jun 2026"},{key:"real",name:"Realisation rate: released time that becomes cash",value:"Unknown",owner:"Financial planning lead",source:"Default until finance shows a ledger line moved",v:1,date:"4 Jun 2026"}],mpc10:215,costPence:3140,volume:38e3,cActions:[{cap:"Knowledge base administration",type:"Assign a backup",owner:"Head of IT Service Desk",due:"31 Oct 2026",status:"In progress",rec:"Approved by Claire Donovan, 7 Oct 2026"},{cap:"Scheme liaison",type:"Test the backup",owner:"Payments operations manager",due:"15 Nov 2026",status:"Planned",rec:"Approved by Claire Donovan, 7 Oct 2026"}],pack:{approved:!1,at:null,hash:null},decisions:[{line:"Cloud cost anomaly alerts",outcome:"Expand",by:"Chief Technology Officer",date:"30 Sep 2026",evidence:"Ventures import of 29 Sep 2026; grade B; Q3 pack, version 1"}],pending:{},shareGone:!1},te=o=>Math.round(parseFloat(String(o).replace("+",""))*10);function ce(o){const i=u.volume*u.mpc10*o,a=(1e3+o)*600;return Math.floor((2*i+a)/(2*a))}const he=()=>{const o=ee("T1").result;return[ce(te(o.effect)),ce(te(o.lo)),ce(te(o.hi))]};function h(){const o=z.map(a=>({key:a.id,name:a.name,kind:"AI tool",cost:`${_(K(a))} a year`,effect:a.result.none?`No detectable effect at this size (${a.result.effect}; ${a.result.lo} to ${a.result.hi})`:`${a.result.effect} ${a.plan.kpi.toLowerCase()} (${a.result.lo} to ${a.result.hi})${a.result.grade==="C"?": not a counterfactual estimate":""}`,grade:a.result.grade,cash:a.cash?`${_(a.cash.pence)} a month (${a.cash.line.toLowerCase()})`:"None shown",risk:a.atRisk||null})),i=A.map(a=>({key:a.ref,name:a.title,kind:"Funded initiative",cost:`${_(a.fundPence)} and ${C(a)} FTE-weeks`,effect:a.realised||a.planned,grade:a.grade,cash:a.cash?`${_(a.cash.pence)} a month (cloud spend)`:"None shown",risk:a.exposure}));return o.concat(i)}const m=o=>u.decisions.filter(i=>i.line===o).slice(-1)[0];let w;const k={Overview:{icon:"ledger",c1:"#1667c9",c2:"#45d8ff",render:D},"AI impact":{icon:"trend",c1:"#0e7490",c2:"#22b8cf",render:de},Renewals:{icon:"renew",c1:"#4f46e5",c2:"#8b8cff",render:y},People:{icon:"teams",c1:"#0b7a66",c2:"#46dd98",render:b},Continuity:{icon:"shield",c1:"#b42318",c2:"#f97066",render:g},Ventures:{icon:"idea",c1:"#9a3d0a",c2:"#f79009",render:N},"Board pack":{icon:"report",c1:"#334155",c2:"#64748b",render:n}},R=()=>`<div class="im-legend" aria-label="Evidence grades">${Object.keys(X).map(o=>`<span>${V(o)}<small>${e(X[o].what)}</small></span>`).join("")}</div>`;function D(){const o=u.query.toLowerCase().trim(),i=h().filter(S=>!o||(S.name+" "+S.kind).toLowerCase().includes(o)),a=[["Read the writing-assistant result",u.seen.ai,"screen:AI impact"],["Check what is at risk if a key role is empty",!!u.purpose,"screen:Continuity"],["Approve the Q4 board pack",u.pack.approved,"screen:Board pack"],["Record the decisions taken on it",u.decisions.length>1,"screen:Board pack"]],t=a.find(S=>!S[1]),c=h().filter(S=>S.risk).length,v=ee("T1"),L=(S,G,M,Y,x,Z,ue)=>`
      <div class="hx-kpi" data-act="${ue}" role="button" tabindex="0" style="${H(G,M)}">${U(S,G,M)}<div><b>${Y}</b><span>${x}</span><small>${Z}</small></div></div>`;return`
      ${w.topbar("Search the impact ledger")}
      <div class="hc-head"><div class="hc-head-l"><div><small>IMPACT LEDGER \xB7 ${Q.toUpperCase()}</small><h4>Good morning, Claire</h4><p>What your investments changed, measured against what would have happened anyway, and how fragile that change is.</p></div></div>
        ${t?`<button type="button" class="hc-btn" style="${H("#1667c9","#45d8ff")}" data-act="${t[2]}">${d("report")}${e(t[0])}</button>`:`<span class="hc-done" style="--c1:#067647">${d("check")}This week\u2019s review is complete</span>`}</div>
      <ol class="im-steps" aria-label="This week">${a.map(([S,G,M],Y)=>`<li class="${G?"done":t&&t[0]===S?"now":""}"><button type="button" data-act="${M}"><i>${G?d("check"):Y+1}</i><span>${e(S)}</span></button></li>`).join("")}</ol>
      <div class="hx-kpis">
        ${L("ledger","#1667c9","#45d8ff",h().length,"Investment lines",`${z.length} AI tools, ${A.length} funded initiatives`,"screen:Overview")}
        ${L("renew","#4f46e5","#8b8cff",z.length,"Renewals in 12 months",`Next in ${f(v.renewal)} days`,"screen:Renewals")}
        ${L("warn","#b42318","#f97066",c,"Impact at risk","Benefit through a single-role dependency","screen:Continuity")}
        ${L("report","#334155","#64748b",u.pack.approved?0:1,"Awaiting your approval",u.pack.approved?"Q4 pack issued":"Q4 board pack, version 2","screen:Board pack")}
      </div>
      <div class="hc-panel">
        <div class="hc-panel-head"><b>Impact ledger</b><span class="hc-tag">One row per investment line</span></div>
        <div class="tb im-ledger" style="--cols:1.5fr 1.1fr 2fr .7fr 1.3fr 1.3fr">
          <div class="tb-r tb-h"><span>Investment</span><span>Cost</span><span>Measured effect</span><span>Grade</span><span>Cash that moved</span><span>Continuity exposure</span></div>
          ${i.map(S=>`<div class="tb-r" data-act="open:${S.key}" role="button" tabindex="0" aria-label="${e(S.name)}: open the detail">
            <span data-l="Investment"><b>${e(S.name)}</b><small>${S.kind}${m(S.name)?` \xB7 decided: ${e(m(S.name).outcome)}`:""}</small></span>
            <span data-l="Cost">${e(S.cost)}</span>
            <span data-l="Measured effect">${e(S.effect)}</span>
            <span data-l="Grade">${V(S.grade)}</span>
            <span data-l="Cash that moved">${e(S.cash)}</span>
            <span data-l="Continuity exposure">${S.risk?`<b class="im-risk">${d("warn")}Impact at risk</b>`:"None found"}</span>
          </div>`).join("")||`<div class="hc-empty">${d("search")}<p>No investment line matches.</p></div>`}
        </div>
        ${R()}
      </div>
      <p class="hc-note">Released time and cash are separate lines and are never added together. A claim is never shown as a measurement. HiveImpact monitors organisational performance, not people: it computes no individual score, rating, ranking or flag.</p>`}function oe(o){const i=o.event;if(!i)return"";const a=i.pre.concat(i.post),t=Math.min(...a.map(ne=>ne[1]),-4),c=Math.max(...a.map(ne=>ne[2]),4),v=520,L=190,S=40,G=12,M=12,Y=30,x=ne=>S+(ne+(ne>=4?1:0))*((v-S-G)/8.6)+18,Z=ne=>M+(c-ne)/(c-t)*(L-M-Y),ue=[t,0,c].map(ne=>Math.round(ne)),me=["\u22128","\u22126","\u22124","\u22122","+2","+4","+6","+8"],be=(x(3)+x(4))/2;return`<figure class="im-chart"><svg viewBox="0 0 ${v} ${L}" role="img" aria-label="Effect by weeks since rollout: before rollout the estimates sit near zero; after rollout they are ${a.slice(4).map(ne=>(ne[0]>0?"+":"")+ne[0]).join(", ")}${i.unit.trim()==="pts"?" points":" per cent"}.">
      <rect x="${be}" y="${M}" width="${v-G-be}" height="${L-M-Y}" class="im-post"/>
      ${ue.map(ne=>`<line x1="${S}" x2="${v-G}" y1="${Z(ne)}" y2="${Z(ne)}" class="${ne===0?"im-zero":"im-grid"}"/><text x="${S-6}" y="${Z(ne)+4}" text-anchor="end">${ne>0?"+":""}${ne}</text>`).join("")}
      <line x1="${be}" x2="${be}" y1="${M}" y2="${L-Y}" class="im-roll"/>
      ${a.map((ne,ve)=>`<line x1="${x(ve)}" x2="${x(ve)}" y1="${Z(ne[1])}" y2="${Z(ne[2])}" class="im-ci${ve>=4?" post":""}"/><circle cx="${x(ve)}" cy="${Z(ne[0])}" r="4.5" class="im-pt${ve>=4?" post":""}"/><text x="${x(ve)}" y="${L-10}" text-anchor="middle">${me[ve]}</text>`).join("")}
    </svg><figcaption>Effect in ${i.unit.trim()==="pts"?"percentage points":"per cent"}, in two-week steps from 8 weeks before rollout to 8 weeks after, with 95% intervals. The shaded side is after rollout.</figcaption></figure>`}function de(){u.seen.ai=u.seen.ai||u.toolSel==="T1";const o=ee(u.toolSel),i=o.plan,a=o.result,t=z.map(M=>`<button type="button" class="hc-filter ${M.id===o.id?"on":""}" aria-pressed="${M.id===o.id}" style="${H("#0e7490","#22b8cf")}" data-act="tool:${M.id}">${e(M.name)}</button>`).join(""),[c,v,L]=he(),S=o.id==="T1"?`
      <div class="hc-panel im-money">
        <div class="hc-panel-head"><b>Hours to pounds</b><span class="hc-tag">Every link owned and editable</span></div>
        <ol class="im-chain">
          <li><span>Measured effect</span><b>${a.effect}</b><small>${a.lo} to ${a.hi} \xB7 grade ${a.grade}</small></li>
          <li><span>Hours released a month</span><b>${c.toLocaleString("en-GB")}</b><small>${v.toLocaleString("en-GB")} to ${L.toLocaleString("en-GB")} \xB7 ${u.volume.toLocaleString("en-GB")} cases a month \xD7 minutes per case</small></li>
          <li class="im-rt"><span>Released-time value a month</span><b>${_(c*u.costPence)}</b><small>${_(v*u.costPence)} to ${_(L*u.costPence)} \xB7 released time, not cash</small></li>
        </ol>
        <div class="im-cash"><span class="im-cash-l">${d("ledger")}Cash value a month</span><b>${_(o.cash.pence)}</b><small>Only where a ledger line moved: ${e(o.cash.line.toLowerCase())}, ${o.cash.ref}, since ${o.cash.since}. Licence cost: ${_(o.seats*o.seatPence)} a month.</small></div>
        <p class="im-never">${d("lock")}Released-time value and cash are separate lines. They are never added together, and the realisation rate stays \u201Cunknown\u201D until finance shows a ledger line moved.</p>
        <div class="im-assume">
          <label for="im-mpc">Minutes per case at baseline <small>Owner: Head of Customer Operations</small></label>
          <input id="im-mpc" data-field="mpc" data-apply="1" inputmode="decimal" value="${e(u.form.mpc)}">
          <label for="im-cost">Loaded hourly cost (\xA3) <small>Owner: Financial planning lead</small></label>
          <input id="im-cost" data-field="cost" data-apply="1" inputmode="decimal" value="${e(u.form.cost)}">
        </div>
        <div class="hc-why-label">Assumption register</div>
        <div class="tb im-assumptions" style="--cols:1.6fr .9fr 1.3fr .5fr .9fr">
          <div class="tb-r tb-h"><span>Assumption</span><span>Value</span><span>Owner and source</span><span>Version</span><span>Dated</span></div>
          ${u.assumptions.map(M=>`<div class="tb-r"><span data-l="Assumption">${e(M.name)}</span><span data-l="Value"><b>${e(M.value)}</b></span><span data-l="Owner and source">${e(M.owner)}<small>${e(M.source)}</small></span><span data-l="Version">v${M.v}</span><span data-l="Dated">${e(M.date)}</span></div>`).join("")}
        </div>
      </div>`:`<div class="hc-panel"><div class="hc-panel-head"><b>Hours to pounds</b></div><p class="hc-note">${a.grade==="C"?"Not converted: a before-and-after figure is not a counterfactual estimate, so it is not turned into pounds.":a.none?"Nothing to convert: there is no detectable effect at this size.":"Not converted yet: no conversion assumption has an owner. Pounds appear only when one does."}</p></div>`,G=o.id==="T3"?`
      <div class="hc-panel">
        <div class="hc-panel-head"><b>Measure-ready rollout for the remaining 6 units</b><span class="hc-tag">Rollout planner</span></div>
        ${[["p1","Randomise the order: 3 units in January, 3 in March, drawn at random","Grade A possible for the new waves","Smallest detectable effect across all 20 units: 9.6%"],["p2","Hold 3 units back as a comparison until April","Grade B","Smallest detectable effect: 10.8%"],["p3","Give all 6 units the tool in January","Grade C at best: nothing left to compare with","No counterfactual estimate possible"]].map(([M,Y,x,Z])=>`
          <label class="im-opt ${u.planOption===M?"on":""}"><input type="radio" name="im-plan" data-act="planopt:${M}" ${u.planOption===M?"checked":""}><span><b>${Y}</b><small>${x} \xB7 ${Z}</small></span></label>`).join("")}
        <div class="hc-actions"><button type="button" class="hc-btn" style="${H("#0e7490","#22b8cf")}" data-act="proposeplan">${d("submit")}Send to the named approver</button></div>
        <p class="hc-note">The approver decides. Nothing about the rollout changes until then.</p>
      </div>`:"";return`
      ${w.topbar()}
      ${w.head("AI impact","AI IMPACT","What each AI tool actually changed.","Measured against teams that did not have the tool yet, under a plan a named person approved before any result existed.")}
      <div class="hc-filters" role="group" aria-label="Choose a tool">${t}</div>
      <div class="hc-split im-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Measurement plan ${i.id}</b><span class="hc-tag">${i.versions.length>1?`${i.versions.length} versions`:"Version 1"}</span></div>
          ${i.versions.map(M=>`<div class="im-ver ${M.approved?"ok":"draft"}"><b>Version ${M.v}</b><span>Drafted by ${e(M.drafted)}</span><span>${M.approved?`Approved by ${e(M.approved)}`:"Awaiting approval"}</span><small>${e(M.note)}</small></div>`).join("")}
          <dl class="im-dl">
            <div><dt>Teams</dt><dd>${e(i.units)}</dd></div>
            <div><dt>Design</dt><dd>${e(i.design)}</dd></div>
            <div><dt>Primary measure</dt><dd>${e(i.kpi)}</dd></div>
            <div><dt>Counter-measure</dt><dd>${e(i.counter)}</dd></div>
            <div><dt>Windows</dt><dd>${e(i.windows)}</dd></div>
            <div><dt>Smallest effect this plan could detect</dt><dd>${e(i.mde)}</dd></div>
            <div><dt>What counts as no effect</dt><dd>${e(i.noEffect)}</dd></div>
          </dl>
        </div>
        <div class="hc-panel im-result">
          <div class="hc-panel-head"><b>Result</b>${V(a.grade)}</div>
          <div class="im-big">${a.none?'<b class="im-none">No detectable effect at this size</b>':`<b>${a.effect}</b>`}<span>${e(i.kpi)}${a.none?`: ${a.effect}`:""}, 95% interval ${a.lo} to ${a.hi}${a.grade==="C"?" \xB7 not a counterfactual estimate":""}</span><small>Computed ${a.at} by fixed, tested code. No model computes or drafts any number.</small></div>
          <ul class="hc-why">${a.checks.map(M=>`<li>${e(M)}</li>`).join("")}</ul>
          ${a.next?`<p class="hc-note">${e(a.next)}</p>`:""}
          ${oe(o)}
        </div>
      </div>
      <div class="hc-panel" style="margin-top:10px">
        <div class="hc-panel-head"><b>Claims against the measured result</b><span class="hc-tag">Claims are grade D</span></div>
        <div class="im-claims">
          <div class="im-claim measured"><span>${V(a.grade)}</span><b>Measured here</b><p>${a.none?"No detectable effect at this size":e(a.effect)} (${a.lo} to ${a.hi})</p><small>${e(i.units)}</small></div>
          ${o.claims.map(M=>`<div class="im-claim"><span>${V("D")}</span><b>${e(M.src)}</b><p>\u201C${e(M.fig)}\u201D</p><small>${e(M.kind)} \xB7 population: ${e(M.pop)}</small></div>`).join("")}
        </div>
        <p class="hc-note">Claims sit in the claims register beside the measured result for the same population. A claim is never shown as a measurement.</p>
      </div>
      ${S}${G}`}function y(){const o=z.slice().sort((t,c)=>t.renewal.localeCompare(c.renewal)),i=t=>Math.max(0,Math.min(100,f(t)/365*100)),a=t=>[90,60,30].map(c=>{const v=f(t)>0&&f(t)<=c;return`<span class="im-alert ${v?"sent":""}">${c} days${v?": sent":`: ${E(t,c)}`}</span>`}).join("");return`
      ${w.topbar()}
      ${w.head("Renewals","RENEWAL RADAR","What each renewal is buying.","Renewals in the next 12 months, what each tool measurably changed, seats in use and the range the evidence supports. Alerts at 90, 60 and 30 days.")}
      <div class="hc-panel">
        <div class="hc-panel-head"><b>The next 12 months</b><span class="hc-tag">${o.length} renewals</span></div>
        <div class="im-radar" role="img" aria-label="Renewals over the next 12 months: ${o.map(t=>`${t.name} in ${f(t.renewal)} days`).join("; ")}">
          <div class="im-track"></div><div class="im-ticks" aria-hidden="true"><span>Today</span><span>6 months</span><span>12 months</span></div>
          ${o.map((t,c)=>`<i class="im-mark" style="left:${i(t.renewal)}%" title="${e(t.name)}, ${F(r(t.renewal))}">${c+1}</i>`).join("")}
        </div>
      </div>
      <div class="hc-grid2" style="margin-top:10px">
        ${o.map((t,c)=>`
          <div class="hc-card im-renew" style="${H("#4f46e5","#8b8cff")}">
            <div class="hc-card-top"><span class="im-num" aria-hidden="true">${c+1}</span><div class="hc-card-id"><b>${e(t.name)}</b><small>Renews ${F(r(t.renewal))} \xB7 in ${f(t.renewal)} days \xB7 ${_(K(t))} a year</small></div>${V(t.result.grade)}</div>
            <div class="im-alerts">${a(t.renewal)}</div>
            <div class="hc-why-label">What it measurably changed</div>
            <p class="hx-suggest">${t.result.none?`No detectable effect at this size (${t.result.effect}; ${t.result.lo} to ${t.result.hi})`:`${t.result.effect} ${t.plan.kpi.toLowerCase()} (${t.result.lo} to ${t.result.hi})`}${t.result.grade==="C"?", not a counterfactual estimate":""}.</p>
            <div class="hc-why-label">Seats in use, by team band (last 28 days)</div>
            <ul class="im-seats">${t.seatBands.map(([v,L,S])=>`<li><span>${e(v)}</span><b>${L} seats</b><small>${S} active</small></li>`).join("")}</ul>
            <div class="hc-why-label">Range the evidence supports</div>
            <p class="hx-suggest">${e(t.range)}</p>
            <button type="button" class="hc-link" data-act="tool:${t.id}">Open the measurement \u2192</button>
          </div>`).join("")}
      </div>
      <p class="hc-note">The range is evidence, not a decision. Leaders decide, and the decision is recorded with the evidence used.</p>`}function b(){const o=u.peopleTab,i=(v,L)=>`<button type="button" class="${o===v?"on":""}" aria-pressed="${o===v}" data-act="ptab:${v}">${L}</button>`,a=`<div class="hc-filters" role="group" aria-label="Function">${Object.keys(q).map(v=>`<button type="button" class="hc-filter ${u.fn===v?"on":""}" aria-pressed="${u.fn===v}" style="${H("#0b7a66","#46dd98")}" data-act="fn:${v}">${v}</button>`).join("")}</div>`,t=q[u.fn];let c="";return o==="teams"&&(c=`${a}
      <div class="tb im-teams" style="--cols:1.4fr .6fr 1.5fr 1fr 1.1fr 1.2fr .8fr">
        <div class="tb-r tb-h"><span>Team</span><span>People</span><span>Its own measure</span><span>Against its own baseline</span><span>Services it runs</span><span>Initiatives</span><span>Continuity actions done</span></div>
        ${t.units.map(v=>`<div class="tb-r"><span data-l="Team"><b>${e(v.unit)}</b>${v.pooled?`<small>Pooled from ${v.pooled} teams to reach at least ${ae} people</small>`:""}</span><span data-l="People">${v.people}</span><span data-l="Its own measure">${e(v.kpi)}: ${e(v.now)}</span><span data-l="Against its own baseline">${e(v.chg)} <small>baseline ${e(v.base)}</small></span><span data-l="Services it runs">${e(v.services)}</span><span data-l="Initiatives">${e(v.inits)}</span><span data-l="Continuity actions done">${v.actions}</span></div>`).join("")}
      </div>
      <p class="hc-note">Each team against its own baseline, listed by name and never ranked. This is not an AI effect: AI effects are estimated across teams and shown by function, and an estimate for a single team is never displayed.</p>`),o==="roles"&&(c=`${a}
      <div class="tb im-fams" style="--cols:1.4fr .6fr 1.6fr 1.2fr">
        <div class="tb-r tb-h"><span>Role family</span><span>People</span><span>AI adoption depth (banded)</span><span>Single-role dependencies</span></div>
        ${t.fams.map(v=>v.supp?`<div class="tb-r im-supp"><span data-l="Role family"><b>${e(v.fam)}</b></span><span data-l="People">${d("lock")}Hidden</span><span data-l="AI adoption depth (banded)">${v.supp==="floor"?`Suppressed: fewer than ${ae} people`:"Suppressed so a hidden cell cannot be worked out by subtraction"}</span><span data-l="Single-role dependencies">Suppressed</span></div>`:`<div class="tb-r"><span data-l="Role family"><b>${e(v.fam)}</b></span><span data-l="People">${v.people}</span><span data-l="AI adoption depth (banded)">${e(v.depth)}</span><span data-l="Single-role dependencies">${v.single?`${v.single} capability; detail for resilience owners on Continuity`:"None"}</span></div>`).join("")}
      </div>
      <p class="hc-note">No cell describes fewer than ${ae} people (proposed floor, not yet decided). Fixed cuts only: there are no free filters, no \u201Cteam minus one\u201D and no cuts by personal attributes.</p>`),o==="contrib"&&(c=`
      <div class="tb im-contrib" style="--cols:1.5fr .7fr 1.5fr 1.7fr">
        <div class="tb-r tb-h"><span>Role family</span><span>FTE-weeks</span><span>Funded initiatives</span><span>What they delivered</span></div>
        ${se.map(([v,L,S,G])=>`<div class="tb-r"><span data-l="Role family"><b>${e(v)}</b></span><span data-l="FTE-weeks">${L}</span><span data-l="Funded initiatives">${e(S)}</span><span data-l="What they delivered">${e(G)}</span></div>`).join("")}
      </div>
      <p class="hc-note">Effort by role family, from the HiveVentures connection. Contributors are never named here; authorship stays in HiveVentures.</p>`),o==="shared"&&(c=u.shareGone?`
      <div class="hc-empty">${d("lock")}<p>Nothing is shared with you right now. HiveImpact cannot request, remind or chase a share, and cannot show anyone who has or has not shared.</p><button type="button" class="hc-link" data-act="restoreShare">Show the demo item again</button></div>`:`
      <article class="im-share" aria-label="Item shared with you by ${e(B.by)}">
        <p class="im-share-label">${d("share")}Shared by ${e(B.by)} from HiveRecord on ${B.on} for ${e(B.purpose)}. Self-recorded by the employee; not a complete account of their work; estimates are marked. Available until ${B.until}; the employee can withdraw it at any time.</p>
        <h5>${e(B.title)}</h5>
        <small class="im-share-who">${e(B.by)} \xB7 ${e(B.role)}</small>
        <div class="hc-why-label">In their words</div>
        <p class="hx-suggest">${e(B.statement)}</p>
        <div class="hc-why-label">Work they linked to it</div>
        <ul class="im-seats">${B.items.map(([v,L])=>`<li><span>${e(v)}</span><b>${e(L)}</b></li>`).join("")}</ul>
        <div class="hc-why-label">Evidence they attached</div>
        <ul class="hc-why">${B.evidence.map(v=>`<li>${e(v)}</li>`).join("")}</ul>
        <p class="hc-note">Read only: no download, print or forward from HiveImpact. Your view is logged with the time and the purpose shown. This item never enters a team view, an estimate, the ledger, a board pack, a digest or an export, and HiveImpact never rates, compares or summarises it.</p>
        <div class="im-demo">${d("undo")}<span><b>Demo control.</b> See what happens when ${e(B.by.split(" ")[0])} withdraws it in HiveRecord and submits the signed withdrawal record.</span><button type="button" class="hc-btn ghost sm" data-act="revoke">Withdraw (as the employee)</button></div>
      </article>
      <p class="hc-note">Only items an employee chose to share with you appear here, until they expire or are withdrawn. Nobody can see who has or has not shared, count shares, or ask for one.</p>`),`
      ${w.topbar()}
      ${w.head("People","PEOPLE","How teams and roles contribute.",`Team and role level only, with at least ${ae} people in every cell. HiveImpact computes no individual score, rating, ranking or flag.`,`<div class="hx-seg im-tabs" role="group" aria-label="People views">${i("teams","Team outcomes")}${i("roles","Role families")}${i("contrib","Contribution to initiatives")}${i("shared","Shared with you")}</div>`)}
      ${c}`}function g(){const o=pe.find(t=>t.id===u.scenario),i=u.purpose?"":`
      <div class="hc-panel im-gate">
        <div class="hc-panel-head"><b>${d("lock")}State a purpose to see role-level detail</b></div>
        <p class="hc-note">A role with one holder identifies someone in practice, so these findings are personal data. They are shown only to resilience owners, and every view is logged with its purpose. Nothing here is ever joined to anything about the role holder.</p>
        <div class="im-purpose">
          <label for="im-purpose">Purpose</label>
          <select id="im-purpose" data-field="purpose"><option value="">Choose a purpose</option>${le.map(t=>`<option ${u.form.purpose===t?"selected":""}>${e(t)}</option>`).join("")}</select>
          <button type="button" class="hc-btn" style="${H("#b42318","#f97066")}" data-act="purpose">${d("eye")}Show the detail</button>
        </div>
      </div>`,a=u.purpose?`
      <p class="im-logged">${d("eye")}<span>Viewed by you as a resilience owner for: <b>${e(u.purpose)}</b>. Logged at ${e(u.purposeLog[u.purposeLog.length-1].time)}; a monthly summary goes to the data protection officer.</span></p>
      <div class="tb im-caps" style="--cols:1.1fr 1.3fr 1.2fr .6fr .9fr 1.4fr">
        <div class="tb-r tb-h"><span>Service</span><span>Capability</span><span>Role</span><span>Covered by</span><span>Backup tested</span><span>If the role is empty</span></div>
        ${W().map(t=>`<div class="tb-r${t.cov===1?" im-single":""}">
          <span data-l="Service">${e(t.svc.name)}</span><span data-l="Capability"><b>${e(t.cap)}</b></span><span data-l="Role">${e(t.role)}</span>
          <span data-l="Covered by">${t.cov==null?'<i class="im-unknown">Unknown</i>':t.cov}</span>
          <span data-l="Backup tested">${t.backup==="unknown"?'<i class="im-unknown">Unknown</i>':t.backup==="yes"?`Yes, ${e(t.tested)}`:`No${t.tested==="never"?", never tested":""}`}</span>
          <span data-l="If the role is empty">${t.cov===1?`<b class="im-risk">No covered alternative</b><small>Exposure window ${t.hire+t.comp} weeks; ${e(t.succ)}${t.svc.important?`; tolerance ${e(t.svc.tol)}: exceeded`:""}</small>${t.svc.important||t.cap==="Cost tagging pipeline"?`<button type="button" class="hc-link" data-act="addaction:${e(t.cap)}">Add an action \u2192</button>`:""}`:t.cov==null?"Unknown until the register is refreshed":"Covered"}</span>
        </div>`).join("")}
      </div>
      <div class="hc-split" style="margin-top:10px">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Scenarios</b><span class="hc-tag">Tested against impact tolerance</span></div>
          <div class="hc-filters" role="group" aria-label="Scenario">${pe.map(t=>`<button type="button" class="hc-filter ${u.scenario===t.id?"on":""}" aria-pressed="${u.scenario===t.id}" style="${H("#b42318","#f97066")}" data-act="scenario:${t.id}">${e(t.label)}</button>`).join("")}</div>
          <div class="hx-prio" style="--lc:#b42318"><b>${e(o.label)}</b><span>${e(o.out)}</span></div>
          <p class="hc-note">HiveImpact predicts no departures. It asks what happens if a role is empty, whoever holds it.</p>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Continuity actions</b><span class="hc-tag">Organisational only</span></div>
          ${u.cActions.map(t=>`<div class="hc-feed"><span class="hx-status ${t.status==="In progress"?"progress":"planned"}">${e(t.status)}</span><span class="hc-feed-text"><b>${e(t.type)}: ${e(t.cap)}</b><br>Owner: ${e(t.owner)} \xB7 due ${e(t.due)} \xB7 ${e(t.rec)}</span></div>`).join("")}
          <div class="im-addaction">
            <label for="im-action">Next action type</label>
            <select id="im-action" data-field="action">${I.map(t=>`<option ${u.form.action===t?"selected":""}>${t}</option>`).join("")}</select>
          </div>
          <button type="button" class="hc-btn ghost sm" data-act="exportpack">${d("submit")}Export the continuity pack</button>
        </div>
      </div>`:"";return`
      ${w.topbar()}
      ${w.head("Continuity","KEY-PERSON CONTINUITY","Which services stop if a key role is empty?","Services, capabilities and roles, from your own registers. Coverage is counted in roles and people, never about a person.")}
      <div class="tb im-svcs" style="--cols:1.3fr .8fr .8fr .8fr .9fr">
        <div class="tb-r tb-h"><span>Service</span><span>Impact tolerance</span><span>Smallest coverage</span><span>Register age</span><span>Data</span></div>
        ${O.map(t=>{const c=J(t);return`<div class="tb-r"><span data-l="Service"><b>${e(t.name)}</b><small>${t.important?"Important business service":"Supporting service"}</small></span><span data-l="Impact tolerance">${e(t.tol)}</span><span data-l="Smallest coverage">${c==null?'<i class="im-unknown">Unknown</i>':u.purpose?c:c===1?"Shown with a purpose":c}</span><span data-l="Register age">${e(t.reg)}${t.stale?' <b class="im-risk">14 months old</b>':""}</span><span data-l="Data">${t.caps.some(v=>v.backup==="unknown")?"Incomplete":"Complete"}</span></div>`}).join("")}
      </div>
      <div class="im-stats">
        <span><b>${l().length}</b> single-role dependencies<small>Baseline on 1 Jul 2026: 4</small></span>
        <span><b>${P()}%</b> of capabilities with known coverage and backup status</span>
        <span><b>2</b> measured benefits at risk<small>The service-desk assistant; cloud cost alerts</small></span>
      </div>
      ${i}${a}
      <p class="hc-note">A silent register gives \u201Cunknown\u201D, never \u201Cno backup\u201D. Unknown lowers completeness, never coverage. Every register shows its age.</p>`}function N(){return`
      ${w.topbar()}
      ${w.head("Ventures","HIVEVENTURES IMPACT","What funded ideas delivered.","Realised against planned benefit, checked against finance and a comparison where the rollout allows. Most initiatives reach grade C or D, and this page says so.")}
      <div class="im-conn">${d("database")}<div><b>Connection from HiveVentures \xB7 ventures v1 \xB7 switched on by your organisation</b><small>Enabled by the Head of Finance Systems on 1 Sep 2026. Last import 12 Oct 2026: 4 initiatives; hash and signature checked; no person names. HiveImpact never writes back.</small></div></div>
      <div class="tb im-vent" style="--cols:1.4fr 1fr 1.6fr .6fr 1.2fr 1.1fr">
        <div class="tb-r tb-h"><span>Initiative</span><span>Funded</span><span>Realised</span><span>Grade</span><span>Return on resources</span><span>Continuity exposure</span></div>
        ${A.map(o=>`<div class="tb-r" data-act="open:${o.ref}" role="button" tabindex="0" aria-label="${e(o.title)}: open the detail">
          <span data-l="Initiative"><b>${e(o.title)}</b><small>${e(o.state)}</small></span>
          <span data-l="Funded">${_(o.fundPence)}<small>${C(o)} FTE-weeks</small></span>
          <span data-l="Realised">${e(o.realised||"No result yet")}<small>${e(o.label)}</small></span>
          <span data-l="Grade">${V(o.grade)}</span>
          <span data-l="Return on resources">${e(o.ror)}</span>
          <span data-l="Continuity exposure">${o.exposure?`<b class="im-risk">${d("warn")}Impact at risk</b>`:"None found"}</span>
        </div>`).join("")}
      </div>
      <p class="hc-note">A benefit claimed at approval goes to the claims register, never the measured column. Authorship stays in HiveVentures.</p>`}function s(o){let i=2166136261;for(const a of o)i^=a.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return i.toString(16).padStart(8,"0")}function n(){const o=u.pack,i=h(),a=[o.approved?"An approved board pack is ready to read.":"A board pack is waiting for its named approver.","A licence renewal is inside its alert window.","New results arrived for a measurement plan.","A continuity action is due this month.","Some backup tests are overdue."];return`
      ${w.topbar()}
      ${w.head("Board pack","BOARD PACK","Evidence the board can rely on.","Built from templates and stored results, issued only when its named approver approves it, and every version kept.")}
      <div class="hc-split">
        <div class="hc-panel im-pack">
          <div class="hc-panel-head"><b>Q4 investment review \xB7 version 2</b>${o.approved?'<span class="hx-status done">Approved and issued</span>':'<span class="hx-status planned">Draft</span>'}</div>
          <p class="hc-note">Drafted by Imran Shah, impact analyst, on 12 Oct 2026. Named approver: Claire Donovan (you). The analyst who drafts a pack does not approve it.</p>
          <ol class="im-toc">
            <li><b>Decisions the cash supports</b><span>Seats to keep or cut, ledger lines that moved, renewal ranges</span></li>
            <li><b>Impact ledger with grades</b><span>${i.length} investment lines</span></li>
            <li><b>Released-time value</b><span>Shown below the cash, labelled, never added to it</span></li>
            <li><b>Claims register</b><span>Grade D, beside the measured results</span></li>
            <li><b>Continuity exposure and impact at risk</b><span>Service level; no role holder named</span></li>
            <li><b>Method appendix</b><span>Plan versions, including PL-02 versions 1 and 2 side by side; the smallest detectable effects; checks</span></li>
            <li><b>Assumptions</b><span>Owned and dated</span></li>
          </ol>
          <p class="im-statement">${d("lock")}This pack is not for decisions about individuals.</p>
          ${o.approved?`<p class="im-ok">${d("check")}<span>Approved by you at ${o.at}. Contents hash <code>${o.hash}</code>. Version 1 (Q3, approved by Ade Mensah on 15 Jul 2026, hash <code>3f9a1c07</code>) is kept unchanged.</span></p>`:`<div class="hc-actions"><button type="button" class="hc-btn" style="${H("#1667c9","#45d8ff")}" data-act="approve">${d("check")}Approve and issue version 2</button></div>`}
        </div>
        <div class="hc-panel im-digest">
          <div class="hc-panel-head"><b>${d("mail")}Weekly digest \xB7 preview</b><span class="hc-tag">Email</span></div>
          <p class="hc-note">Executives read email on phones, and HiveImpact is for work laptops, so the digest carries no figures and no names. It is a preview here; email is sent only in production.</p>
          <div class="im-mail" aria-label="Digest preview"><b>Your HiveImpact week</b><ul>${a.map(t=>`<li>${t}</li>`).join("")}</ul><span class="im-mail-link">Open HiveImpact on your work laptop to see the detail.</span></div>
        </div>
      </div>
      <div class="hc-panel" style="margin-top:10px">
        <div class="hc-panel-head"><b>Decisions taken on the evidence</b><span class="hc-tag">Append-only</span></div>
        ${o.approved?`<div class="im-decide">
          <label for="im-dline">Investment line</label>
          <select id="im-dline" data-field="dline">${i.map(t=>`<option ${u.form.dline===t.name?"selected":""}>${e(t.name)}</option>`).join("")}</select>
          <label for="im-dout">Decision</label>
          <select id="im-dout" data-field="dout">${["Renew","Reduce","Expand","Stop","Protect"].map(t=>`<option ${u.form.dout===t?"selected":""}>${t}</option>`).join("")}</select>
          <button type="button" class="hc-btn" style="${H("#1667c9","#45d8ff")}" data-act="decide">${d("check")}Record decision</button>
        </div>`:'<p class="hc-note">Decisions are recorded once the pack they rest on is approved.</p>'}
        <div class="tb im-decisions" style="--cols:1.4fr .7fr 1.2fr .8fr 1.6fr">
          <div class="tb-r tb-h"><span>Investment line</span><span>Decision</span><span>Decided by</span><span>Date</span><span>Evidence used</span></div>
          ${u.decisions.slice().reverse().map(t=>`<div class="tb-r"><span data-l="Investment line"><b>${e(t.line)}</b></span><span data-l="Decision">${e(t.outcome)}</span><span data-l="Decided by">${e(t.by)}</span><span data-l="Date">${e(t.date)}</span><span data-l="Evidence used">${e(t.evidence)}</span></div>`).join("")}
        </div>
      </div>`}function $(){const o=u.drawer,i=ee(o),a=A.find(t=>t.ref===o);if(i){const t=m(i.name);return`
        <div class="hc-scrim" data-act="close"></div>
        <aside class="hc-drawer" role="dialog" aria-label="${e(i.name)}">
          <div class="hc-drawer-band" style="background:linear-gradient(135deg,#0b2347,#1667c9)"></div>
          <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
          <div class="hc-drawer-top">${U("trend","#0e7490","#22b8cf","lg hx-drawer-ico")}${V(i.result.grade)}</div>
          <div class="hc-drawer-id"><b>${e(i.name)}</b><small>${e(i.fn)} \xB7 ${i.seats} seats \xB7 ${_(K(i))} a year \xB7 renews ${F(r(i.renewal))}</small></div>
          <div class="hc-why-label">Measured effect</div>
          <p class="hx-suggest">${i.result.none?`No detectable effect at this size: ${i.result.effect} (${i.result.lo} to ${i.result.hi}).`:`${i.result.effect} ${e(i.plan.kpi.toLowerCase())} (95% interval ${i.result.lo} to ${i.result.hi}).`} Plan ${i.plan.id}, approved before results.</p>
          <div class="hc-why-label">Cash that moved</div>
          <p class="hx-suggest">${i.cash?`${_(i.cash.pence)} a month: ${e(i.cash.line.toLowerCase())} (${i.cash.ref}).`:"No ledger line moved. Released time, where measured, is shown separately and never as cash."}</p>
          ${i.atRisk?`<div class="hx-prio" style="--lc:#b42318"><b>Impact at risk</b><span>${e(i.atRisk)}</span></div>`:""}
          <div class="hc-why-label">Range the evidence supports</div>
          <p class="hx-suggest">${e(i.range)}</p>
          <div class="hc-why-label">Decision</div>
          <p class="hx-suggest">${t?`${e(t.outcome)}, by ${e(t.by)} on ${e(t.date)}.`:"Not yet decided."}</p>
          <div class="hc-drawer-actions"><button type="button" class="hc-btn" style="${H("#0e7490","#22b8cf")}" data-act="tool:${i.id}">${d("trend")}Open the measurement</button></div>
        </aside>`}return a?`
      <div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${e(a.title)}">
        <div class="hc-drawer-band" style="background:linear-gradient(135deg,#5a2a06,#d97706)"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        <div class="hc-drawer-top">${U("idea","#9a3d0a","#f79009","lg hx-drawer-ico")}${V(a.grade)}</div>
        <div class="hc-drawer-id"><b>${e(a.title)}</b><small>${a.ref} \xB7 ${e(a.state)} \xB7 from HiveVentures, ventures v1</small></div>
        <div class="hc-why-label">Funding decision</div>
        <p class="hx-suggest">${_(a.fundPence)} and ${C(a)} FTE-weeks: ${a.fte.map(([t,c])=>`${e(t.toLowerCase())} ${c}`).join(", ")}.</p>
        <div class="hc-why-label">Planned</div><p class="hx-suggest">${e(a.planned)}</p>
        <div class="hc-why-label">Realised</div><p class="hx-suggest">${e(a.realised||"No result yet.")} <small class="im-sub">${e(a.label)}</small></p>
        ${a.cash?`<div class="hc-why-label">Finance check</div><p class="hx-suggest">Ledger line moved: ${a.cash.ref}, ${_(a.cash.pence)} a month.</p>`:""}
        ${a.exposure?`<div class="hx-prio" style="--lc:#b42318"><b>Impact at risk</b><span>${e(a.exposure)}</span></div>`:""}
        <div class="hc-why-label">Return on resources</div><p class="hx-suggest">${e(a.ror)}</p>
        <p class="hc-note">No person is named: the export carries roles and FTE-weeks only.</p>
      </aside>`:""}function j(o,i){switch(o){case"open":return u.drawer=i,!0;case"tool":return u.toolSel=i,i==="T1"&&(u.seen.ai=!0),u.screen!=="AI impact"&&w.go("AI impact"),!0;case"ptab":return u.peopleTab=i,!0;case"fn":return u.fn=i,!0;case"scenario":return u.scenario=i,!0;case"planopt":return u.planOption=i,!0;case"proposeplan":return u.planOption?(w.toast("Rollout option sent to Ade Mensah, the named approver. Nothing changes until the approver decides."),!0):(w.toast("Choose a rollout option first."),!0);case"apply":{const a=i,t=String(u.form[a]||"").trim(),c=parseFloat(t.replace(/[£,]/g,"")),v=u.assumptions.find(L=>L.key===a);if(a==="mpc"){if(!(c>=1&&c<=120))return w.toast("Minutes per case must be between 1 and 120."),u.form.mpc=(u.mpc10/10).toFixed(1),!0;const L=Math.round(c*10);if(L===u.mpc10)return!1;u.mpc10=L,v.value=`${(L/10).toFixed(1)} minutes`,u.form.mpc=(L/10).toFixed(1)}else{if(!(c>=5&&c<=200))return w.toast("The hourly cost must be between \xA35 and \xA3200."),u.form.cost=(u.costPence/100).toFixed(2),!0;const L=Math.round(c*100);if(L===u.costPence)return!1;u.costPence=L,v.value=`\xA3${(L/100).toFixed(2)}`,u.form.cost=(L/100).toFixed(2)}return v.v+=1,v.owner="Changed by you; owner to confirm",v.date=Q,w.toast(`Assumption updated as version ${v.v}. Released-time value recalculated; cash is unchanged.`),!0}case"purpose":{const a=u.form.purpose;return a?(u.purpose=a,u.clock+=1,u.purposeLog.push({purpose:a,time:`${Q}, 10:${String(u.clock).padStart(2,"0")}`}),!0):(w.toast("Choose a purpose first. Every view of role-level detail is logged with one."),!0)}case"addaction":return u.cActions.push({cap:i,type:u.form.action,owner:i==="Settlement reconciliation"?"Payments operations manager":i==="Cost tagging pipeline"?"Head of Platform":"Head of IT Service Desk",due:"13 Nov 2026",status:"Planned",rec:`Approved by Claire Donovan, ${Q}`}),w.toast(`${u.form.action} for ${i}: recorded with an owner role, a due date and your approval.`),!0;case"exportpack":return u.clock+=1,u.purposeLog.push({purpose:u.purpose+" (export)",time:`${Q}, 10:${String(u.clock).padStart(2,"0")}`}),w.toast("Continuity pack prepared for your resilience team. The export is logged with your purpose."),!0;case"approve":{const a=JSON.stringify(h())+JSON.stringify(u.assumptions);return u.pack={approved:!0,at:`${Q}, 10:24`,hash:s(a)},u.form.dline=u.form.dline||"AI writing assistant",u.form.dout=u.form.dout||"Renew",w.toast("Version 2 approved and issued. Version 1 is kept unchanged."),!0}case"decide":{if(!u.pack.approved)return!1;const a=u.form.dline||"AI writing assistant",t=u.form.dout||"Renew",c=h().find(v=>v.name===a);return u.decisions.push({line:a,outcome:t,by:"Claire Donovan, Chief Operating Officer",date:Q,evidence:`Q4 pack, version 2 (${u.pack.hash}); ${c.grade?"grade "+c.grade:"no graded result"}`}),w.toast(`Decision recorded: ${t}, ${a}. It is append-only.`),!0}case"revoke":return u.shareGone=!0,w.toast("The withdrawal arrived: content and key deleted, a content-free record kept. No figure anywhere changed."),!0;case"restoreShare":return u.shareGone=!1,!0;default:return!1}}w=ie({state:u,side:Object.keys(k),screens:k,start:"Overview",me:re,act:j,drawer:$,appClass:"hx-aa im-app",device:"HiveImpact is for work laptops: on a phone it shows a \u201Cplease use your work laptop\u201D screen, and executives get a weekly digest by email instead. This preview adapts to your screen.",searchScreens:["Overview"],searchPlaceholder:"Search the impact ledger",bellScreen:"Board pack",bellLabel:"Waiting for you",badge:()=>(u.pack.approved?0:1)+1,sideBadge:()=>["Board pack",u.pack.approved?0:1]}),window.HiveImpact=w.api})(),(function(){const{esc:e,icon:d,tint:H,tile:U,createApp:ie}=window.HiveUI,re={id:"sm",name:"Sana Mirza",init:"SM",role:"Team leader, Contact Centre South"},Q="14 Oct 2026",ae="Your manager, HR and IT can\u2019t see it. A formal legal process can, and you\u2019ll be told.",_={G1:{title:"Reduce repeat contacts in billing queries",status:"On track",kras:[{t:"Repeat contacts within 7 days on billing queries: from 18% to 14% by December",vals:"You entered: 18% in January, 16% in June, 15% in September",status:"On track"},{t:"Refresh the 30 most-used billing knowledge articles",vals:"You entered: 22 of 30 done",status:"On track"}]},G2:{title:"Lead wave 2 of the writing-assistant rollout in Contact Centre South",status:"Done",kras:[{t:"Coach every adviser before go-live",vals:"You entered: 48 of 48 coached",status:"Done"},{t:"Rewrite the reply templates with the advisers",vals:"You entered: 40 templates",status:"Done"}]},G3:{title:"Grow as a coach",status:"At risk",kras:[{t:"Complete a service design course",vals:"Completed on 21 Aug 2026",status:"Done"},{t:"Hold a coaching conversation with each adviser every month",vals:"Your note: missed in August during the rollout",status:"At risk"}]}},p={"On track":"#066a58",Done:"#175cd3","At risk":"#9a3d0a"},r={ask:"Informal ask",ticket:"Ticket",side:"Side work",learning:"Learning"},T=[{id:"I-31",kind:"ask",title:"Send Q3 repeat-contact figures for the billing queue",source:"Slack",team:"Lending operations",urgency:"This week",est:"1 h",estBy:"you",time:"1.5 h",wk:1.5,status:"Done",when:"13 Oct",goal:"G1"},{id:"I-30",kind:"ticket",title:"Update the billing-query routing rules",source:"Jira",key:"CC-1482",priority:"High",est:"4 h",estBy:"Jira",time:"5 h",wk:5,status:"Done",when:"12 Oct",goal:"G1"},{id:"I-29",kind:"ask",title:"Cover the Complaints huddle",source:"Teams",team:"Complaints",urgency:"Today",est:null,time:"1 h",wk:1,status:"Done",when:"14 Oct",goal:null},{id:"I-28",kind:"ask",title:"Explain the new reply templates to the Collections team",source:"Slack",team:"Collections",urgency:"This week",est:"2 h",estBy:"you",time:null,wk:null,status:"Done",when:"13 Oct",goal:"G2"},{id:"I-27",kind:"ticket",title:"Review knowledge articles for the October release",source:"Jira",key:"CC-1475",priority:"Medium",est:"3 story points",estBy:"Jira",time:"2.5 h",wk:2.5,status:"In progress",when:"12 Oct",goal:"G1"},{id:"I-26",kind:"side",title:"Knowledge-article search prototype (proof of concept)",source:"Added by you",est:"16 h",estBy:"you",time:"11 h so far",wk:3,status:"In progress",when:"13 Oct",goal:"G1"},{id:"I-25",kind:"ask",title:"Pull last month\u2019s template usage for Finance",source:"Teams",team:"Finance",urgency:"No rush",est:null,time:"0.5 h",wk:.5,status:"Done",when:"12 Oct",goal:null}],F=[{id:"A1",goal:"G2",date:"30 Sep 2026",text:"I led wave 2 of the writing-assistant rollout for Contact Centre South. I ran six coaching sessions and rewrote 40 reply templates with the advisers, so the drafts matched how we actually answer customers.",reword:"Led wave 2 of the writing-assistant rollout in Contact Centre South: ran six coaching sessions and rewrote 40 reply templates with the advisers, so the drafts match how we answer customers.",ok:!0,evidence:["Template library change record, CC-1440","Thanks from a team lead in Complaints (pasted in; name removed when shared)"]},{id:"A2",goal:"G1",date:"2 Oct 2026",text:"I rewrote 22 billing knowledge articles and the routing rules for billing queries. On the figures I logged, repeat contacts on billing went from 18% in January to 15% in September.",reword:"Rewrote 22 billing articles and the routing rules, cutting repeat contacts from 18% to 15% and saving roughly 51 hours.",ok:!1,why:["It added a number that is not in your text: 51.","It added a claim you did not make: that your work caused the fall."],evidence:["Ticket CC-1482, routing rules","Monthly repeat-contact report for billing queries, attached by you"]},{id:"A3",goal:"G3",date:"28 Aug 2026",text:"I finished a service design course and used it to redesign the billing-query journey with two advisers.",reword:null,evidence:["Course certificate (stored in your private area)"]}],f=[{title:"Service design fundamentals",provider:"Online course",hours:12,done:"21 Aug 2026",proof:"Certificate uploaded",goal:"G3"},{title:"Coaching conversations workshop, parts 1 and 2",provider:"Internal workshop",hours:6,done:"14 Oct 2026",proof:"Your note",goal:"G3"},{title:"Writing-assistant champion training",provider:"Internal course",hours:3,done:"2 Jun 2026",proof:"Badge, signature checked",goal:"G2"}],E=[{title:"Knowledge-article search prototype (proof of concept)",hours:"11 h so far (estimate 16 h, set by you)",goal:"G1"},{title:"New-joiner buddy for two advisers",hours:"5 h",goal:null}],X=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],V=[6,8,7,9,11,14,18,16,12,7],z=[12,11,13,12,14,13,15,14,13,6],ee=[["G1",128],["G2",163],["G3",27],[null,94]],K=y=>y.reduce((b,g)=>b+g,0),A=[{name:"Owen Hart",role:"Contact Centre Manager (your line manager)"},{name:"Hana Okoro",role:"Head of Quality (your mentor)"},{name:"Claire Donovan",role:"Chief Operating Officer"}],C=["Development or performance conversation","Project retrospective","Recognition","Workload conversation"],O={pack:"Appraisal pack 2026 (draft, built 14 Oct 2026)",week:"Weekly report, 5 to 9 Oct 2026",month:"Monthly report, September 2026",year:"Year in review 2026, so far",A1:"Achievement: wave 2 of the writing-assistant rollout",A2:"Achievement: billing knowledge articles and routing rules",A3:"Achievement: service design course"},W=y=>{const b=new Date(Date.UTC(2026,9,14)+y*864e5);return`${b.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][b.getUTCMonth()]} ${b.getUTCFullYear()}`},l={screen:"Home",query:"",drawer:null,toast:"",focus:null,firstUse:!0,workFilter:"all",recTab:"week",capture:"message",seq:40,items:T.map(y=>({...y})),rewords:{},form:{title:"",team:"",est:"",urgency:"This week",goal:"G1",what:"pack",to:"Owen Hart",days:"14",pdf:!1,hiwhat:"A3",hito:"Claire Donovan",hipurpose:C[2],hidays:"14",reflection:"",cTitle:"Send the Q3 billing FAQ changes to Lending operations",cEst:""},grants:[{id:"G-07",what:"Monthly report, September 2026",to:"Owen Hart",created:"5 Oct 2026",until:"28 Oct 2026",pdf:!1,views:["8 Oct 2026, 09:14","12 Oct 2026, 16:40"],revoked:!1}],conns:[{id:"SH-2026-0412",what:"Achievement: wave 2 of the writing-assistant rollout",to:"Claire Donovan",purpose:"Project retrospective",created:"9 Oct 2026",until:"23 Oct 2026",revoked:!1}]},J=y=>y?_[y].title:"Not linked to a goal",P=y=>`<span class="hx-lvl" style="--lc:${p[y]}">${e(y)}</span>`,le=y=>y.est?`${e(y.est)} <small>(set by ${e(y.estBy)})</small>`:'<i class="rc-muted">No estimate</i>',pe=y=>y.time?e(y.time):'<i class="rc-muted">Not logged</i>',I=()=>`<p class="rc-promise">${d("lock")}<span><b>Private to you.</b> ${ae}</span></p>`,q=y=>y.filter(b=>!b.revoked);function se(y){return`
      <div class="hc-row rc-item" data-act="open:${y.id}" role="button" tabindex="0" aria-label="${e(y.title)}: open">
        <span class="rc-kind ${y.kind}">${r[y.kind]}</span>
        <div class="hc-row-main">
          <div class="hc-row-top"><b>${e(y.title)}</b></div>
          <small>${e(y.source)}${y.key?" "+e(y.key):""}${y.team?` \xB7 asked by ${e(y.team)}`:""}${y.priority?` \xB7 priority ${e(y.priority)}, as Jira states it`:""}${y.urgency?` \xB7 your label: ${e(y.urgency)}`:""}</small>
          <div class="rc-facts"><span>Estimate: ${le(y)}</span><span>Time: ${pe(y)}</span><span>${e(J(y.goal))}</span></div>
        </div>
        <div class="hc-row-end"><span class="hx-status ${y.status==="Done"?"done":"progress"}">${e(y.status)}</span></div>
      </div>`}let B;const u={Home:{icon:"pc-record",c1:"#1667c9",c2:"#45d8ff",render:te},Work:{icon:"actions",c1:"#0b7a66",c2:"#46dd98",render:he},"Goals and KRAs":{icon:"target",c1:"#9a3d0a",c2:"#f79009",render:h},Learning:{icon:"learn",c1:"#6941e8",c2:"#b27bff",render:m},"My Record":{icon:"report",c1:"#175cd3",c2:"#45d8ff",render:k},"Sharing and privacy":{icon:"lock",c1:"#334155",c2:"#64748b",render:R}};function te(){const y=l.items.filter(n=>n.wk!=null),b=l.items.filter(n=>n.status==="Done"),g=K(y.map(n=>n.wk)),N=l.items.filter(n=>n.wk==null).length,s=l.firstUse?`
      <div class="rc-first" role="region" aria-label="Before you start">
        <div class="rc-first-h">${U("lock","#334155","#64748b")}<div><b>This is your own record</b><span>Only you can see it. ${ae}</span></div></div>
        <ul class="hc-why">
          <li>Nothing leaves unless you share it: one item or report, with a named person, until a date you choose. You can withdraw it at any time, and you see every view.</li>
          <li>Every number here is yours, built by code from what you logged. Estimates are marked. AI only reads a message you chose to save, or rewords your own text when you ask; it never scores, ranks, recommends or flags.</li>
          <li>It is not a monitoring tool: no activity tracking, no reading of your chats or mail, and no figures about you for your employer.</li>
        </ul>
        <div class="hc-actions"><button type="button" class="hc-btn" style="${H("#1667c9","#45d8ff")}" data-act="gotit">${d("check")}Got it</button><button type="button" class="hc-link" data-act="screen:Sharing and privacy">Who can see what \u2192</button></div>
      </div>`:I();return`
      ${B.topbar()}
      <div class="hc-head"><div class="hc-head-l"><div><small>YOUR RECORD \xB7 WEEK OF 12 OCT 2026</small><h4>Hello, Sana</h4><p>What you did this week, including the asks that never reached a ticket.</p></div></div>
        <button type="button" class="hc-btn" style="${H("#0b7a66","#46dd98")}" data-act="open:add">${d("sparkle")}Save an ask</button></div>
      ${s}
      <div class="hx-kpis">
        <div class="hx-kpi" style="${H("#0b7a66","#46dd98")}" data-act="screen:Work" role="button" tabindex="0">${U("actions","#0b7a66","#46dd98")}<div><b>${b.length}</b><span>Done this week</span><small>${b.filter(n=>n.kind==="ask").length} informal asks, ${b.filter(n=>n.kind==="ticket").length} ticket${b.filter(n=>n.kind==="ticket").length===1?"":"s"}</small></div></div>
        <div class="hx-kpi" style="${H("#175cd3","#45d8ff")}" data-act="recTab:week" role="button" tabindex="0">${U("clock","#175cd3","#45d8ff")}<div><b>${g} h</b><span>Time you logged</span><small>${N} item${N===1?"":"s"} with no time logged</small></div></div>
        <div class="hx-kpi" style="${H("#6941e8","#b27bff")}" data-act="screen:Learning" role="button" tabindex="0">${U("learn","#6941e8","#b27bff")}<div><b>${K(f.map(n=>n.hours))} h</b><span>Learning this year</span><small>${f.length} entries, ${E.length} side projects</small></div></div>
        <div class="hx-kpi" style="${H("#334155","#64748b")}" data-act="screen:Sharing and privacy" role="button" tabindex="0">${U("share","#334155","#64748b")}<div><b>${q(l.grants).length+q(l.conns).length}</b><span>Shares you made</span><small>Each ends on a date you set</small></div></div>
      </div>
      <div class="hc-split">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>This week</b><button type="button" class="hc-link" data-act="screen:Work">All work \u2192</button></div>
          <div class="hc-list">${l.items.slice(0,5).map(se).join("")}</div>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Your goals</b><span class="hc-tag">Status set by you</span></div>
          ${Object.entries(_).map(([n,$])=>`<div class="hc-feed" data-act="screen:Goals and KRAs" role="button" tabindex="0">${U("target","#9a3d0a","#f79009","xs")}<span class="hc-feed-text"><b>${e($.title)}</b></span>${P($.status)}</div>`).join("")}
          <div class="hc-panel-head sep"><b>Appraisal season</b></div>
          <p class="hc-note">Your appraisal pack is built from what you logged this year. Open it in My Record when you are ready; nobody sees it unless you share it.</p>
          <button type="button" class="hc-link" data-act="recTab:pack">Open your appraisal pack \u2192</button>
        </div>
      </div>`}function ce(){const y=l.capture,b=`<div class="rc-msg"><span class="rc-msg-who">${d("chat")}Message in a Slack channel</span><p>\u201CHi Sana, could you send the Q3 billing FAQ changes before Friday\u2019s ops review? Thanks, Lending ops\u201D</p></div>`;return y==="message"?`${b}<div class="hc-actions"><button type="button" class="hc-btn" style="${H("#0b7a66","#46dd98")}" data-act="capture">${d("submit")}\u2026 Save to HiveRecord</button></div><p class="hc-note">The \u201C\u2026\u201D menu on one message, on a laptop or a phone. HiveRecord never reads channels or chats by itself.</p>`:y==="fields"?`${b}
      <div class="rc-cform" role="group" aria-label="Proposed fields">
        <p class="rc-cform-h">${d("sparkle")}Fields proposed from this one message. Check them; nothing is saved until you do.</p>
        <label for="rc-ctitle">Title</label><input id="rc-ctitle" data-field="cTitle" value="${e(l.form.cTitle)}" maxlength="120">
        <div class="rc-cgrid">
          <span><small>Asked by (team)</small><b>Lending operations</b></span>
          <span class="rc-unsure"><small>Due \xB7 inferred, please check</small><b>Fri 16 Oct 2026, 17:00</b></span>
          <span><small>Effort</small><b>Not stated in the message</b></span>
        </div>
        <label for="rc-cest">Your estimate in hours (optional)</label><input id="rc-cest" data-field="cEst" inputmode="decimal" value="${e(l.form.cEst)}" placeholder="Leave blank if unsure">
        <div class="hc-actions"><button type="button" class="hc-btn" style="${H("#0b7a66","#46dd98")}" data-act="confirmcapture">${d("check")}Save</button><button type="button" class="hc-btn ghost" data-act="cancelcapture">Cancel</button></div>
      </div>`:`<div class="rc-saved">${d("check")}<span><b>Saved to your record.</b> Only the fields you confirmed were kept, with a link back to the message. The message text was not stored.</span></div><button type="button" class="hc-link" data-act="resetcapture">Show the capture again</button>`}function he(){const y=l.query.toLowerCase().trim(),b=l.workFilter;let g=l.items.filter(s=>b==="all"||s.kind===b);y&&(g=g.filter(s=>(s.title+" "+(s.team||"")+" "+s.source+" "+J(s.goal)).toLowerCase().includes(y)));const N=(s,n)=>`<button type="button" class="hc-filter ${b===s?"on":""}" aria-pressed="${b===s}" style="${H("#0b7a66","#46dd98")}" data-act="wf:${s}">${n}</button>`;return`
      ${B.topbar("Search your work")}
      ${B.head("Work","YOUR WORK","Asks, tickets and side work.","Informal asks you saved, your own tickets (read-only) and the things you did on the side. Priority is shown as the source states it; your own urgency label is separate.",`<button type="button" class="hc-btn" style="${H("#0b7a66","#46dd98")}" data-act="open:add">${d("sparkle")}Save an ask</button>`)}
      <div class="hc-split rc-worksplit">
        <div>
          <div class="hc-filters">${N("all","All")}${N("ask","Informal asks")}${N("ticket","Tickets")}${N("side","Side work")}<span class="hc-count">${g.length} item${g.length===1?"":"s"}</span></div>
          <div class="hc-list">${g.length?g.map(se).join(""):`<div class="hc-empty">${d("search")}<p>Nothing matches.</p></div>`}</div>
          <p class="hc-note">Time not logged shows as \u201Cnot logged\u201D, never as nothing. Items without an estimate are listed, never counted as no time. Story points stay points.</p>
        </div>
        <div class="hc-panel rc-capture">
          <div class="hc-panel-head"><b>Save an ask from Slack or Teams</b><span class="hc-tag">Later slice</span></div>
          ${ce()}
        </div>
      </div>`}function h(){const y=b=>{const g=l.rewords[b.id];return b.reword?g?g==="accepted"?`<p class="rc-marked">${d("check")}Reworded and accepted by you. Marked as reworded wherever it is shared.</p>`:g==="kept"?`<p class="rc-marked">${d("check")}You kept your own words.</p>`:b.ok?`<div class="rc-reword"><b>Proposed rewording \xB7 numbers checked against your text</b><p class="rc-proposed">\u201C${e(b.reword)}\u201D</p><div class="hc-actions"><button type="button" class="hc-btn sm" style="${H("#9a3d0a","#f79009")}" data-act="acceptreword:${b.id}">Use this wording</button><button type="button" class="hc-btn ghost sm" data-act="keepreword:${b.id}">Keep mine</button></div></div>`:`<div class="rc-reword bad"><b>${d("warn")}The proposed rewording was rejected by the check, so your own text is kept.</b><p class="rc-proposed">\u201C${e(b.reword)}\u201D</p><ul class="hc-why">${b.why.map(N=>`<li>${e(N)}</li>`).join("")}</ul></div>`:`<button type="button" class="hc-link" data-act="reword:${b.id}">${d("sparkle")}Ask for a rewording</button>`:""};return`
      ${B.topbar()}
      ${B.head("Goals and KRAs","GOALS AND KRAS","Your goals, with your evidence.","Progress is what you set, and figures are the ones you entered. Nothing is inferred from your activity.")}
      ${Object.entries(_).map(([b,g])=>{const N=F.filter(n=>n.goal===b),s=l.items.filter(n=>n.goal===b);return`<div class="hc-panel rc-goal">
          <div class="hc-panel-head"><b>${e(g.title)}</b>${P(g.status)}</div>
          <div class="tb rc-kras" style="--cols:2fr 1.6fr .7fr">
            <div class="tb-r tb-h"><span>Key result area</span><span>Your measure</span><span>Your status</span></div>
            ${g.kras.map(n=>`<div class="tb-r"><span data-l="Key result area">${e(n.t)}</span><span data-l="Your measure">${e(n.vals)}</span><span data-l="Your status">${P(n.status)}</span></div>`).join("")}
          </div>
          ${N.map(n=>`<div class="rc-ach"><div class="hc-why-label">Achievement, in your words \xB7 ${e(n.date)}</div><p class="hx-suggest">${e(l.rewords[n.id]==="accepted"?n.reword:n.text)}</p>
            <div class="hc-chips">${n.evidence.map($=>`<span class="hc-chip">${d("report")}${e($)}</span>`).join("")}</div>${y(n)}</div>`).join("")}
          ${s.length?`<div class="hc-why-label">Work you linked this week</div><div class="hc-chips">${s.map(n=>`<span class="hc-chip strong">${e(n.title)}</span>`).join("")}</div>`:""}
        </div>`}).join("")}
      <p class="hc-note">Rewording works only on your own text, only when you ask. A proposed rewording is rejected if it adds a number or a claim you did not make, and nothing is used until you accept it.</p>`}function m(){return`
      ${B.topbar()}
      ${B.head("Learning","LEARNING AND SIDE WORK","What you learned, and what you built on the side.","Courses, certificates and badges, proofs of concept and side projects, linked to your goals if you choose.")}
      <div class="hc-grid2">
        ${f.map(y=>`<div class="hc-card" style="${H("#6941e8","#b27bff")}"><div class="hc-card-top">${U("learn","#6941e8","#b27bff")}<div class="hc-card-id"><b>${e(y.title)}</b><small>${e(y.provider)} \xB7 ${y.hours} hours \xB7 completed ${e(y.done)}</small></div></div>
          <div class="hc-chips"><span class="hc-chip">${d("check")}${e(y.proof)}</span><span class="hc-chip strong">${e(J(y.goal))}</span></div></div>`).join("")}
      </div>
      <div class="hc-panel" style="margin-top:10px">
        <div class="hc-panel-head"><b>Side work and proofs of concept</b><span class="hc-tag">${E.length}</span></div>
        ${E.map(y=>`<div class="hc-feed">${U("idea","#9a3d0a","#f79009","xs")}<span class="hc-feed-text"><b>${e(y.title)}</b><br>${e(y.hours)} \xB7 ${e(J(y.goal))}</span></div>`).join("")}
      </div>
      <p class="hc-note">Certificates are stored in your private area, encrypted with your own key. A proof of concept logged here stays here.</p>`}function w(){const y=Math.max(...V.map((o,i)=>o+z[i])),b=520,g=170,N=26,s=22,n=30,$=(b-N-10-n*10)/9,j=o=>g-s-o/y*(g-s-10);return`<figure class="rc-chart"><svg viewBox="0 0 ${b} ${g}" role="img" aria-label="Items you did each month, informal asks and tickets: ${X.map((o,i)=>`${o} ${V[i]} informal, ${z[i]} tickets`).join("; ")}.">
      <line x1="${N}" x2="${b-6}" y1="${g-s}" y2="${g-s}" class="rc-axis"/>
      ${X.map((o,i)=>{const a=N+i*(n+$);return`<rect x="${a}" y="${j(z[i])}" width="${n}" height="${g-s-j(z[i])}" class="rc-b-t"/><rect x="${a}" y="${j(z[i]+V[i])}" width="${n}" height="${j(z[i])-j(z[i]+V[i])}" class="rc-b-i"/><text x="${a+n/2}" y="${g-6}" text-anchor="middle">${o}</text>`}).join("")}
    </svg><figcaption><span class="rc-key i"></span>Informal asks <span class="rc-key t"></span>Tickets \xB7 October so far</figcaption></figure>`}function k(){const y=l.recTab,b=(s,n)=>`<button type="button" class="${y===s?"on":""}" aria-pressed="${y===s}" data-act="recTab:${s}">${n}</button>`,g=K(ee.map(s=>s[1]));let N="";return y==="week"&&(N=`
      <div class="hc-panel rc-report">
        <div class="hc-panel-head"><b>Weekly report \xB7 5 to 9 Oct 2026</b><span class="hc-tag">Built by code from your entries</span></div>
        <div class="rc-facts big"><span><b>9</b> items done</span><span><b>5</b> informal asks</span><span><b>4</b> planned tickets</span><span><b>31.5 h</b> time you logged</span><span><b>1.5 h</b> learning</span></div>
        <div class="tb rc-tbl" style="--cols:1.6fr 1fr 1fr">
          <div class="tb-r tb-h"><span>Estimates against time logged</span><span>Estimated</span><span>Logged</span></div>
          <div class="tb-r"><span data-l="Estimates against time logged">7 items with an estimate and logged time</span><span data-l="Estimated">14 h</span><span data-l="Logged">16.5 h</span></div>
        </div>
        <div class="hc-why-label">Without an estimate (listed, never counted as no time)</div>
        <ul class="hc-why"><li>Answer a routing question from Collections</li><li>Find the old billing FAQ for Finance</li></ul>
        <div class="hc-why-label">No time logged</div>
        <ul class="hc-why"><li>Swap rota cover with Contact Centre North</li></ul>
        <div class="hc-why-label">Goal progress, as you set it</div>
        <div class="hc-chips">${Object.values(_).map(s=>`<span class="hc-chip">${e(s.title)}: ${e(s.status)}</span>`).join("")}</div>
        <div class="hc-actions"><button type="button" class="hc-btn ghost sm" data-act="shareopen:week">${d("share")}Share this report\u2026</button></div>
      </div>`),y==="month"&&(N=`
      <div class="hc-panel rc-report">
        <div class="hc-panel-head"><b>Monthly report \xB7 September 2026</b><span class="hc-tag">Shared with Owen Hart until 28 Oct</span></div>
        <div class="rc-facts big"><span><b>25</b> items done</span><span><b>12</b> informal asks</span><span><b>13</b> tickets</span><span><b>63 h</b> time you logged</span><span><b>0 h</b> learning logged</span></div>
        <div class="tb rc-tbl" style="--cols:2fr .8fr .8fr">
          <div class="tb-r tb-h"><span>By goal</span><span>Items</span><span>Hours</span></div>
          <div class="tb-r"><span data-l="By goal">${e(_.G1.title)}</span><span data-l="Items">8</span><span data-l="Hours">18 h</span></div>
          <div class="tb-r"><span data-l="By goal">${e(_.G2.title)}</span><span data-l="Items">11</span><span data-l="Hours">34 h</span></div>
          <div class="tb-r"><span data-l="By goal">${e(_.G3.title)}</span><span data-l="Items">1</span><span data-l="Hours">2 h</span></div>
          <div class="tb-r"><span data-l="By goal">Not linked to a goal</span><span data-l="Items">5</span><span data-l="Hours">9 h</span></div>
        </div>
        <p class="hc-note">You log what you choose to log. The rest of the month is simply not logged.</p>
      </div>`),y==="year"&&(N=`
      <div class="hc-panel rc-report">
        <div class="hc-panel-head"><b>Your year in review \xB7 January to October 2026</b><span class="hc-tag">What you did, first</span></div>
        <div class="hc-why-label">What you achieved</div>
        <ul class="hc-why">${F.map(s=>`<li><b>${e(s.date)}</b>&nbsp;${e(l.rewords[s.id]==="accepted"?s.reword:s.text)}</li>`).join("")}</ul>
        <div class="rc-facts big"><span><b>${K(V)+K(z)}</b> items done</span><span><b>${K(V)}</b> informal asks</span><span><b>${K(z)}</b> tickets</span><span><b>${K(f.map(s=>s.hours))} h</b> learning</span><span><b>${E.length}</b> side projects</span></div>
        ${w()}
        <div class="hc-why-label">Time you logged, by goal (${g} h)</div>
        ${ee.map(([s,n])=>`<div class="hx-arow"><span>${e(J(s))}</span><span class="hx-bar"><i style="width:${Math.round(n/163*100)}%;${H("#175cd3","#45d8ff")}"></i></span><b>${n} h</b></div>`).join("")}
        <p class="hc-note">175 items have an estimate and logged time: estimated 352 h, logged 376 h. 37 items have no estimate and 19 have no time logged; neither is counted as no time.</p>
        <div class="rc-private">${d("eye")}<span><b>Only you see this note.</b> In 6 weeks this year you logged more than your working hours. It is not an achievement, and it is never shared unless you choose.</span></div>
        <div class="hc-actions"><button type="button" class="hc-btn ghost sm" data-act="shareopen:year">${d("share")}Share your year in review\u2026</button></div>
      </div>`),y==="pack"&&(N=`
      <div class="hc-panel rc-pack">
        <div class="hc-panel-head"><b>Appraisal pack 2026 \xB7 draft</b><span class="hc-tag">Built 14 Oct 2026 \xB7 template v1</span></div>
        <p class="hc-note">Built by code from what you logged, per goal and key result area. No part is written by a model, except text you asked to have reworded and accepted, which is marked.</p>
        ${Object.entries(_).map(([s,n])=>{const $=F.find(o=>o.goal===s),j=ee.find(o=>o[0]===s)[1];return`
          <section class="rc-psec"><h5>${e(n.title)} ${P(n.status)}</h5>
            <div class="hc-why-label">Your statement${l.rewords[$.id]==="accepted"?" \xB7 reworded, accepted by you":""}</div><p class="hx-suggest">${e(l.rewords[$.id]==="accepted"?$.reword:$.text)}</p>
            <div class="hc-why-label">Evidence</div><ul class="hc-why">${$.evidence.map(o=>`<li>${e(o)}</li>`).join("")}${n.kras.map(o=>`<li>${e(o.vals)}</li>`).join("")}</ul>
            <div class="hc-why-label">Factual totals (self-logged; estimates marked)</div><p class="hx-suggest">${j} h of linked work logged${s==="G3"?", including 18 h of learning":""}.${f.filter(o=>o.goal===s).map(o=>` Learning: ${e(o.title)}, ${o.hours} h.`).join("")}</p>
          </section>`}).join("")}
        <label class="rc-reflect" for="rc-reflection"><span>Your reflection (optional, in your own words)</span><textarea id="rc-reflection" data-field="reflection" rows="3" placeholder="What went well, what you would do differently, what you want next year">${e(l.form.reflection)}</textarea></label>
        <div class="hc-actions">
          <button type="button" class="hc-btn" style="${H("#175cd3","#45d8ff")}" data-act="shareopen:pack">${d("share")}Share with a named person\u2026</button>
          <button type="button" class="hc-btn ghost" data-act="download">${d("submit")}Download as PDF or Word</button>
        </div>
      </div>`),`
      ${B.topbar()}
      ${B.head("My Record","MY RECORD","Your reports, your year, your appraisal.","Weekly and monthly reports, the year in review and the appraisal pack, all built by code from what you logged. Every figure is illustrative in this preview.",`<div class="hx-seg rc-tabs" role="group" aria-label="My Record views">${b("week","Weekly")}${b("month","Monthly")}${b("year","Year in review")}${b("pack","Appraisal pack")}</div>`)}
      ${N}`}function R(){const y=l.grants,b=l.conns;return`
      ${B.topbar()}
      ${B.head("Sharing and privacy","SHARING AND PRIVACY","Who can see your record.","Nothing leaves unless you share it. You choose what, with whom and until when, and you can withdraw it.")}
      ${I()}
      <div class="tb rc-who" style="--cols:1.2fr 2fr">
        <div class="tb-r tb-h"><span>Who</span><span>What they can see</span></div>
        <div class="tb-r"><span data-l="Who"><b>You</b></span><span data-l="What they can see">Everything in your record, every view of what you shared, and the legal-process log for your record</span></div>
        <div class="tb-r"><span data-l="Who"><b>Someone you named</b></span><span data-l="What they can see">Only the frozen copy you shared with them, until it ends or you withdraw it</span></div>
        <div class="tb-r"><span data-l="Who"><b>Your manager, HR, IT</b></span><span data-l="What they can see">Nothing you have not shared with them by name. They cannot see whether you use HiveRecord or whether you have shared anything</span></div>
        <div class="tb-r"><span data-l="Who"><b>LigeroNex</b></span><span data-l="What they can see">Nothing in the normal course: no console and no \u201Cview as user\u201D. Your content is encrypted with your own key</span></div>
        <div class="tb-r"><span data-l="Who"><b>A formal legal process</b></span><span data-l="What they can see">Only for a legal obligation, never for performance or conduct; raised by two named roles at your employer and carried out by two people at LigeroNex. You are told, and it appears in your log below</span></div>
      </div>
      <div class="hc-split" style="margin-top:10px">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Shared with people you named</b><span class="hc-tag">${q(y).length} active</span></div>
          ${y.map(g=>`<div class="rc-grant${g.revoked?" off":""}">
            <div><b>${e(g.what)}</b><small>To ${e(g.to)} \xB7 shared ${e(g.created)} \xB7 ${g.revoked?"withdrawn by you":`until ${e(g.until)}`} \xB7 view only${g.pdf?", watermarked PDF allowed":""}</small>
            <div class="rc-views">${d("eye")}${g.views.length?`Viewed ${g.views.length} time${g.views.length>1?"s":""}: ${g.views.map(e).join("; ")}`:"Not viewed yet"}</div></div>
            ${g.revoked?"":`<button type="button" class="hc-btn ghost sm" data-act="revokegrant:${g.id}">${d("undo")}Withdraw</button>`}
          </div>`).join("")}
          <p class="hc-note">Only you see these view logs. Withdrawing stops future views; it cannot recall what someone has already read.</p>
          <div class="hc-actions"><button type="button" class="hc-btn" style="${H("#334155","#64748b")}" data-act="shareopen:pack">${d("share")}Share something\u2026</button></div>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Shared with HiveImpact</b><span class="hc-tag">Switched on by your employer</span></div>
          ${b.map(g=>`<div class="rc-grant${g.revoked?" off":""}">
            <div><b>${e(g.what)}</b><small>For ${e(g.to)} \xB7 ${e(g.purpose.toLowerCase())} \xB7 signed file downloaded ${e(g.created)} \xB7 ${g.revoked?"withdrawn: withdrawal record ready to submit":`ends ${e(g.until)}`}</small></div>
            ${g.revoked?`<button type="button" class="hc-btn ghost sm" data-act="download">${d("submit")}Download withdrawal record</button>`:`<button type="button" class="hc-btn ghost sm" data-act="revokeconn:${g.id}">${d("undo")}Withdraw</button>`}
          </div>`).join("")}
          <p class="hc-note">You carry the signed file to HiveImpact yourself, and a withdrawal the same way. HiveRecord can\u2019t see what HiveImpact does with it; the end date stops it there regardless.</p>
          <div class="hc-actions"><button type="button" class="hc-btn ghost sm" data-act="open:hishare">${d("share")}Share an item with HiveImpact\u2026</button></div>
        </div>
      </div>
      <div class="hc-split" style="margin-top:10px">
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Legal-process log for your record</b><span class="hc-tag">You can always read it</span></div>
          <p class="rc-empty">${d("check")}No requests have been made for your record. No legal hold is active.</p>
          <p class="hc-note">If there is ever a request, every step appears here and you are told.</p>
        </div>
        <div class="hc-panel">
          <div class="hc-panel-head"><b>Take your record with you</b></div>
          <p class="hc-note">Export everything at any time. Before a leaving date, the leaver export follows your employer\u2019s policy and leaves colleagues\u2019 and clients\u2019 details out.</p>
          <div class="hc-actions"><button type="button" class="hc-btn ghost sm" data-act="download">${d("submit")}Export everything</button><button type="button" class="hc-btn ghost sm" data-act="open:leaver">Preview the leaver export</button></div>
        </div>
      </div>
      <p class="hc-note">Nobody can request, chase, count or track your shares, and HiveRecord never prompts you to share. Nothing from your record ever reaches HiveRisk or any other product.</p>`}function D(y,b,g){return`<div class="hc-scrim" data-act="close"></div>
      <aside class="hc-drawer" role="dialog" aria-label="${e(y)}">
        <div class="hc-drawer-band" style="background:${b}"></div>
        <button type="button" class="hc-close" data-act="close" aria-label="Close">\xD7</button>
        ${g}
      </aside>`}function oe(){const y=l.drawer;if(y==="add")return D("Save an ask","linear-gradient(135deg,#0b3b34,#0b7a66)",`
      <div class="hc-drawer-top">${U("sparkle","#0b7a66","#46dd98","lg hx-drawer-ico")}</div>
      <div class="hc-drawer-id"><b>Save an ask</b><small>Typed by you. Only you can see it.</small></div>
      <div class="rc-form">
        <label for="rc-title">What was asked</label><input id="rc-title" data-field="title" value="${e(l.form.title)}" maxlength="120" placeholder="For example: review the October rota">
        <label for="rc-team">Asked by which team (optional)</label><input id="rc-team" data-field="team" value="${e(l.form.team)}" placeholder="Team only; names are off by default">
        <label for="rc-est">Your estimate in hours (optional)</label><input id="rc-est" data-field="est" inputmode="decimal" value="${e(l.form.est)}">
        <label for="rc-urg">Your urgency label</label><select id="rc-urg" data-field="urgency">${["Today","This week","No rush"].map(g=>`<option ${l.form.urgency===g?"selected":""}>${g}</option>`).join("")}</select>
        <label for="rc-goal">Link to a goal (optional)</label><select id="rc-goal" data-field="goal"><option value="">Not linked</option>${Object.entries(_).map(([g,N])=>`<option value="${g}" ${l.form.goal===g?"selected":""}>${e(N.title)}</option>`).join("")}</select>
        <button type="button" class="hc-btn" style="${H("#0b7a66","#46dd98")}" data-act="saveask">${d("check")}Save to your record</button>
      </div>`);if(y==="leaver")return D("Leaver export preview","linear-gradient(135deg,#1e293b,#475569)",`
      <div class="hc-drawer-top">${U("submit","#334155","#64748b","lg hx-drawer-ico")}</div>
      <div class="hc-drawer-id"><b>Leaver export \xB7 preview</b><small>Your employer\u2019s policy: the strict default, version 1</small></div>
      <div class="hc-why-label">Included</div>
      <ul class="hc-why"><li>Your goals and key result areas, with the values and notes you entered</li><li>Your achievements and reflections, in your own words</li><li>Learning entries and certificates</li><li>Monthly totals, with \u201Cnot logged\u201D shown</li><li>Saved reports and packs, with colleagues\u2019 details removed</li></ul>
      <div class="hc-why-label">Left out</div>
      <ul class="hc-why"><li>Requester, colleague and client names</li><li>Ticket titles and links, unless you rewrote a title in your own words</li><li>Message text, which is never stored anyway</li></ul>
      <p class="hc-note">You get a PDF and a file in the export format, on your work laptop. The export is free to you. Once your corporate account ends, nothing works, and your employer\u2019s copy is deleted after its retention period.</p>
      <div class="hc-drawer-actions"><button type="button" class="hc-btn" style="${H("#334155","#64748b")}" data-act="download">${d("submit")}Export now</button></div>`);if(y==="hishare"){const g=Math.min(90,Math.max(1,parseInt(l.form.hidays,10)||14));return D("Share with HiveImpact","linear-gradient(135deg,#0b2347,#1667c9)",`
        <div class="hc-drawer-top">${U("share","#1667c9","#45d8ff","lg hx-drawer-ico")}</div>
        <div class="hc-drawer-id"><b>Share one item with HiveImpact</b><small>Your employer switched this connection on and pinned its version. One item at a time; never in bulk.</small></div>
        <div class="rc-form">
          <label for="rc-hiwhat">What to share</label><select id="rc-hiwhat" data-field="hiwhat">${["A3","A2","month"].map(N=>`<option value="${N}" ${l.form.hiwhat===N?"selected":""}>${e(O[N])}</option>`).join("")}</select>
          <label for="rc-hito">Who may see it in HiveImpact</label><select id="rc-hito" data-field="hito">${A.map(N=>`<option value="${e(N.name)}" ${l.form.hito===N.name?"selected":""}>${e(N.name)}, ${e(N.role)}</option>`).join("")}</select>
          <label for="rc-hipurpose">Purpose</label><select id="rc-hipurpose" data-field="hipurpose">${C.map(N=>`<option ${l.form.hipurpose===N?"selected":""}>${N}</option>`).join("")}</select>
          <label for="rc-hidays">Ends after (days, required, at most 90)</label><select id="rc-hidays" data-field="hidays">${["7","14","30","60","90"].map(N=>`<option ${String(l.form.hidays)===N?"selected":""}>${N}</option>`).join("")}</select>
        </div>
        <div class="hc-why-label">Exactly what the file carries</div>
        <p class="rc-label">Shared by Sana Mirza from HiveRecord on ${Q} for ${e(l.form.hipurpose.toLowerCase())}. Self-recorded by the employee; not a complete account of their work; estimates are marked. Available until ${W(g)}; the employee can withdraw it at any time.</p>
        <p class="hc-note">Plus the frozen item as you composed it, with requester names removed. It is signed by HiveRecord. You download it and submit it to HiveImpact\u2019s intake yourself.</p>
        <div class="hc-drawer-actions"><button type="button" class="hc-btn" style="${H("#1667c9","#45d8ff")}" data-act="hishare">${d("submit")}Download the signed file</button></div>`)}if(y&&y.startsWith("share:")){const g=y.slice(6),N=Math.min(90,Math.max(1,parseInt(l.form.days,10)||14));return D("Share with a named person","linear-gradient(135deg,#0b2347,#175cd3)",`
        <div class="hc-drawer-top">${U("share","#175cd3","#45d8ff","lg hx-drawer-ico")}</div>
        <div class="hc-drawer-id"><b>Share: ${e(O[g])}</b><small>A frozen copy. Your later edits never change it.</small></div>
        ${I()}
        <div class="rc-form">
          <label for="rc-to">With (a named person in your organisation)</label><select id="rc-to" data-field="to">${A.map(s=>`<option value="${e(s.name)}" ${l.form.to===s.name?"selected":""}>${e(s.name)}, ${e(s.role)}</option>`).join("")}</select>
          <label for="rc-days">Ends after (days, required, at most 90)</label><select id="rc-days" data-field="days">${["7","14","30","60","90"].map(s=>`<option ${String(l.form.days)===s?"selected":""}>${s}</option>`).join("")}</select>
          <label class="rc-check"><input type="checkbox" data-field="pdf" ${l.form.pdf?"checked":""}><span>Allow a watermarked PDF (off by default; otherwise view only)</span></label>
        </div>
        <div class="hc-why-label">What they will see</div>
        <p class="rc-label">Shared by Sana Mirza on ${Q}. Recorded by the employee. Not a complete account of their work. Estimates are marked.</p>
        <ul class="hc-why"><li>Requester names and ticket links are removed.</li><li>They sign in with their work email and a one-time code; nobody else can open it.</li><li>Every view is logged, and only you see the log.</li><li>Withdrawing stops future views. It cannot recall what they have already read.</li></ul>
        <div class="hc-drawer-actions"><button type="button" class="hc-btn" style="${H("#175cd3","#45d8ff")}" data-act="grant:${g}">${d("share")}Share until ${W(N)}</button></div>`)}const b=l.items.find(g=>g.id===y);return b?D(b.title,"linear-gradient(135deg,#0b3b34,#0b7a66)",`
      <div class="hc-drawer-top">${U(b.kind==="ticket"?"report":b.kind==="side"?"idea":"chat","#0b7a66","#46dd98","lg hx-drawer-ico")}<span class="hx-status ${b.status==="Done"?"done":"progress"}">${e(b.status)}</span></div>
      <div class="hc-drawer-id"><b>${e(b.title)}</b><small>${r[b.kind]} \xB7 ${e(b.source)}${b.key?" "+e(b.key):""} \xB7 ${e(b.when)}</small></div>
      <dl class="im-dl">
        ${b.team?`<div><dt>Asked by</dt><dd>${e(b.team)} (team only; the requester\u2019s name is off by default)</dd></div>`:""}
        ${b.priority?`<div><dt>Priority</dt><dd>${e(b.priority)}, as Jira states it</dd></div>`:""}
        ${b.urgency?`<div><dt>Your urgency label</dt><dd>${e(b.urgency)}</dd></div>`:""}
        <div><dt>Estimate</dt><dd>${b.est?`${e(b.est)}, set by ${e(b.estBy)}`:"No estimate"}</dd></div>
        <div><dt>Time</dt><dd>${b.time?e(b.time):"Not logged"}</dd></div>
        <div><dt>Goal</dt><dd>${e(J(b.goal))}</dd></div>
        ${b.source==="Slack"||b.source==="Teams"?`<div><dt>Source</dt><dd>Saved from one ${e(b.source)} message. Only the fields you confirmed and a link back are kept; the message text is not stored.</dd></div>`:""}
        ${b.kind==="ticket"?"<div><dt>Source</dt><dd>Your own ticket, read-only. HiveRecord never writes to Jira.</dd></div>":""}
      </dl>
      <div class="hc-drawer-actions"><button type="button" class="hc-btn ghost" data-act="delete:${b.id}">Delete from your record</button></div>
      <p class="hc-note">Deleting is immediate and permanent.</p>`):""}function de(y,b){switch(y){case"open":return l.drawer=b,!0;case"gotit":return l.firstUse=!1,!0;case"wf":return l.workFilter=b,!0;case"recTab":return l.recTab=b,l.screen!=="My Record"&&B.go("My Record"),!0;case"capture":return l.capture="fields",!0;case"cancelcapture":return l.capture="message",B.toast("Cancelled. Nothing was saved, and the message text was discarded."),!0;case"confirmcapture":{const g=(l.form.cTitle||"").trim()||"Send the Q3 billing FAQ changes to Lending operations",N=parseFloat(l.form.cEst);return l.items.unshift({id:"I-"+ ++l.seq,kind:"ask",title:g,source:"Slack",team:"Lending operations",urgency:"This week",est:N>0?`${N} h`:null,estBy:"you",time:null,wk:null,status:"To do",when:"14 Oct",goal:"G1"}),l.capture="saved",B.toast("Saved to your record. The message text was not stored."),!0}case"resetcapture":return l.capture="message",!0;case"saveask":{const g=(l.form.title||"").trim();if(g.length<4)return B.toast("Add a few words about what was asked."),!0;const N=parseFloat(l.form.est);return l.items.unshift({id:"I-"+ ++l.seq,kind:"ask",title:g,source:"Added by you",team:(l.form.team||"").trim()||null,urgency:l.form.urgency,est:N>0?`${N} h`:null,estBy:"you",time:null,wk:null,status:"To do",when:"14 Oct",goal:l.form.goal||null}),l.form.title="",l.form.team="",l.form.est="",l.drawer=null,B.toast("Saved. Only you can see it."),!0}case"delete":return l.items=l.items.filter(g=>g.id!==b),l.drawer=null,B.toast("Deleted from your record."),!0;case"reword":{const g=F.find(N=>N.id===b);return l.rewords[b]=g.ok?"proposed":"rejected",!0}case"acceptreword":return l.rewords[b]="accepted",B.toast("Wording updated. It is marked as reworded wherever you share it."),!0;case"keepreword":return l.rewords[b]="kept",!0;case"shareopen":return l.drawer="share:"+b,!0;case"grant":{const g=Math.min(90,Math.max(1,parseInt(l.form.days,10)||14));return l.grants.unshift({id:"G-"+ ++l.seq,what:O[b],to:l.form.to,created:Q,until:W(g),pdf:!!l.form.pdf,views:[],revoked:!1}),l.drawer=null,B.toast(`Shared with ${l.form.to} until ${W(g)}. You can withdraw it at any time.`),!0}case"hishare":{const g=Math.min(90,Math.max(1,parseInt(l.form.hidays,10)||14));return l.conns.unshift({id:"SH-2026-"+ ++l.seq,what:O[l.form.hiwhat],to:l.form.hito,purpose:l.form.hipurpose,created:Q,until:W(g),revoked:!1}),l.drawer=null,B.toast("Signed file downloaded. Submit it to HiveImpact yourself; nothing was sent automatically."),!0}case"revokegrant":{const g=l.grants.find(N=>N.id===b);return g.revoked=!0,B.toast(`Withdrawn. ${g.to} can no longer open it.`),!0}case"revokeconn":{const g=l.conns.find(N=>N.id===b);return g.revoked=!0,B.toast("Withdrawn here. Submit the withdrawal record to HiveImpact; until then it may still show there, and it ends on its date regardless."),!0}case"download":return B.toast("Downloaded (a preview: no file is created here)."),!0;default:return!1}}B=ie({state:l,side:Object.keys(u),screens:u,start:"Home",me:re,act:de,drawer:oe,appClass:"hx-aa rc-app",device:"HiveRecord is for your work laptop: on a phone it shows a \u201Cplease use your work laptop\u201D screen, though saving a message from Slack or Teams works there too. This preview adapts to your screen.",searchScreens:["Work"],searchPlaceholder:"Search your work",bellScreen:"Sharing and privacy",bellLabel:"Your active shares",badge:()=>q(l.grants).length+q(l.conns).length}),window.HiveRecord=B.api})(),(()=>{const e=document.querySelector(".menu"),d=document.querySelector(".nav-links");function H(){!e||!d||(d.style.display="",d.style.position="",d.style.top="",d.style.left="",d.style.right="",d.style.padding="",d.style.background="",d.style.flexDirection="",d.style.gap="",d.style.borderBottom="",e.setAttribute("aria-expanded","false"))}e&&d&&(e.addEventListener("click",()=>{if(e.getAttribute("aria-expanded")==="true"){H();return}e.setAttribute("aria-expanded","true"),d.style.display="flex",d.style.position="absolute",d.style.top="74px",d.style.left="0",d.style.right="0",d.style.padding="22px",d.style.background="rgba(247,248,250,.97)",d.style.flexDirection="column",d.style.gap="18px",d.style.borderBottom="1px solid #e2e6eb"}),window.addEventListener("resize",()=>{window.innerWidth>850&&H()}));const U=new IntersectionObserver(A=>A.forEach(C=>{C.isIntersecting&&C.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(A=>U.observe(A));const ie='<div class="exp-user"><div class="exp-avatar">AR</div><div class="exp-status"><b>Available</b>Profile active</div></div>',re={connect:{code:"HC / HIVE CONNECT",brand:"HIVE CONNECT",mark:"mark-connect",app:"HiveConnect",get side(){return window.HiveConnect.side},get icons(){return window.HiveConnect.icons},get colors(){return window.HiveConnect.colors},get start(){return window.HiveConnect.start},screens:{Home:`
        <div class="exp-main-head">
          <div><small>PERSONAL WORKSPACE</small><h4>Good morning, Alex.</h4><p>Here are people and conversations that could be useful to you.</p></div>
          ${ie}
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
          ${ie}
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
          ${ie}
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
          ${ie}
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
          ${ie}
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
          ${ie}
        </div>
        <div class="exp-ideas">
          <div class="exp-idea"><div class="exp-idea-icon">CC</div><div><b>Cross-Team Coffee Circle</b><small>12 members \xB7 meets biweekly \xB7 3 members in your building</small></div><em>Join \u2192</em></div>
          <div class="exp-idea"><div class="exp-idea-icon">NJ</div><div><b>New Joiners \xB7 London</b><small>23 members \xB7 weekly \xB7 for everyone in their first year</small></div><em>Join \u2192</em></div>
          <div class="exp-idea"><div class="exp-idea-icon">DG</div><div><b>Data Guild</b><small>31 members \xB7 monthly \xB7 open show-and-tell sessions</small></div><em>Join \u2192</em></div>
        </div>
        <div class="exp-footnote">Communities are open by invitation of the organisation \u2014 membership is always the employee's choice.</div>
      `}},risk:{code:"HR / HIVE RISK",brand:"HIVE RISK",mark:"mark-risk",app:"HiveRisk",get side(){return window.HiveRisk.side},get icons(){return window.HiveRisk.icons},get colors(){return window.HiveRisk.colors},get start(){return window.HiveRisk.start}},ventures:{code:"HV / HIVE VENTURES",brand:"HIVE VENTURES",mark:"mark-ventures",app:"HiveVentures",get side(){return window.HiveVentures.side},get icons(){return window.HiveVentures.icons},get colors(){return window.HiveVentures.colors},get start(){return window.HiveVentures.start}},impact:{code:"HI / HIVE IMPACT",brand:"HIVE IMPACT",mark:"mark-impact",app:"HiveImpact",get side(){return window.HiveImpact.side},get icons(){return window.HiveImpact.icons},get colors(){return window.HiveImpact.colors},get start(){return window.HiveImpact.start}},record:{code:"RC / HIVE RECORD",brand:"HIVE RECORD",mark:"mark-record",app:"HiveRecord",get side(){return window.HiveRecord.side},get icons(){return window.HiveRecord.icons},get colors(){return window.HiveRecord.colors},get start(){return window.HiveRecord.start}}};let Q=null;function ae(A){const C=re[Q],O=document.querySelector(".exp-main");if(!C||!O)return;const W=C.app&&window[C.app];if(W)W.onScreen=_,W.render(A,O);else{if(!C.screens[A])return;O.innerHTML=C.screens[A]}_(A)}function _(A){const C=re[Q];if(!C)return;document.querySelectorAll(".exp-side-nav [data-screen]").forEach(J=>{J.classList.toggle("active",J.dataset.screen===A)});const O=document.querySelector(".exp-side-nav"),W=O&&O.querySelector(".active");if(W&&O.scrollWidth>O.clientWidth){const J=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,P=W.getBoundingClientRect(),le=O.getBoundingClientRect();O.scrollTo({left:O.scrollLeft+P.left-le.left-(O.clientWidth-P.width)/2,behavior:J?"smooth":"auto"})}const l=document.querySelector(".exp-window-title");l&&(l.textContent=`${C.code} \xB7 ${A.toUpperCase()}`)}const p={connect:"HiveConnect",risk:"HiveRisk",ventures:"HiveVentures",impact:"HiveImpact",record:"HiveRecord"},r=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;let T=null;function F(A){const C=re[A],O=document.querySelector(".exp-window");O.innerHTML=`
    <div class="exp-window-bar"><i></i><i></i><i></i><span class="exp-window-title">${C.code} \xB7 End-user product preview</span><button type="button" class="exp-expand" data-focus-demo="${A}" aria-label="Open ${p[A]} full screen"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#expand"></use></svg>Full screen</button><span class="exp-preview-label">ILLUSTRATIVE</span><h3 class="sr-only">${p[A]} interactive preview</h3></div>
    <div class="exp-app">
      <aside class="exp-side">
        <div class="exp-brandline"><img src="assets/images/web/${C.mark}.jpg" alt="">${C.brand}</div>
        <div class="exp-side-nav">${C.side.map((W,l)=>`<button type="button" data-screen="${W}" style="--i:${l};--c:${(C.colors||{})[W]||"#1687ff"}"><span class="side-ic"><svg class="ic" aria-hidden="true"><use href="assets/icons/hive-icons.svg#${C.icons[W]}"></use></svg></span><span class="side-label">${W}</span><span class="side-badge" hidden></span></button>`).join("")}</div>
        <div class="exp-side-foot"><b>Preview of the intended product experience.</b> Fictional people, organisations and figures. Not affiliated with any company or product named.</div>
      </aside>
      <section class="exp-main"></section>
    </div>
  `,O.dataset.demo=A,O.setAttribute("aria-label",`${C.code} interactive product preview`),ae(C.start)}function f(A,C={}){const O=re[A],W=document.querySelector(".exp-window");if(!O||!W)return;const l=Q!==null&&Q!==A;if(Q=A,document.querySelectorAll(".exp-choice").forEach(J=>{const P=J.dataset.demo===A;J.classList.toggle("active",P);const le=J.querySelector(".exp-pick");le&&le.setAttribute("aria-pressed",String(P)),P&&l&&!r()&&(J.classList.remove("just-picked"),J.offsetWidth,J.classList.add("just-picked"),setTimeout(()=>J.classList.remove("just-picked"),900))}),document.querySelectorAll(".df-tabs [data-df]").forEach(J=>J.setAttribute("aria-pressed",String(J.dataset.df===A))),clearTimeout(T),!l||C.instant||r()){W.classList.remove("swapping","entering"),F(A);return}W.classList.remove("entering"),W.classList.add("swapping"),T=setTimeout(()=>{F(A),W.classList.remove("swapping"),W.offsetWidth,W.classList.add("entering"),T=setTimeout(()=>W.classList.remove("entering"),900)},190)}const E={el:null,placeholder:null,lastFocus:null,open:!1,timer:null};function X(){const A=document.createElement("div");return A.className="demo-focus",A.hidden=!0,A.setAttribute("role","dialog"),A.setAttribute("aria-modal","true"),A.setAttribute("aria-label","Hive Intelligence interactive demo"),A.innerHTML=`
    <div class="df-backdrop"></div>
    <div class="df-shell">
      <div class="df-bar">
        <div class="df-brand"><img src="assets/images/web/ligeronex-mark.jpg" alt="">Hive Intelligence<span>Interactive demo</span></div>
        <div class="df-tabs" role="group" aria-label="Switch product">${Object.keys(p).map(C=>`<button type="button" data-df="${C}" aria-pressed="${C===Q}" aria-label="${p[C]}"><span class="df-hive">Hive</span>${p[C].slice(4)}</button>`).join("")}</div>
        <button type="button" class="df-close" aria-label="Exit full-screen demo">Exit<kbd>Esc</kbd><span aria-hidden="true">\u2715</span></button>
      </div>
      <div class="df-slot"></div>
    </div>`,document.body.appendChild(A),A.addEventListener("click",C=>{const O=C.target.closest("[data-df]");if(O){f(O.dataset.df);return}(C.target.closest(".df-close")||C.target.classList.contains("df-backdrop"))&&ee()}),A}function V(A){[".nav-wrap","main","footer"].forEach(C=>{const O=document.querySelector(C);O&&(O.inert=A)})}function z(A,C){const O=document.querySelector(".exp-workspace");O&&(A&&A!==Q&&f(A,{instant:!0}),!E.open&&(clearTimeout(E.timer),E.el=E.el||X(),E.lastFocus=C||document.activeElement,E.el.contains(O)||(E.placeholder=E.placeholder||Object.assign(document.createElement("div"),{className:"exp-workspace-placeholder"}),E.placeholder.style.height=O.offsetHeight+"px",O.before(E.placeholder),E.el.querySelector(".df-slot").appendChild(O)),E.el.querySelectorAll("[data-df]").forEach(W=>W.setAttribute("aria-pressed",String(W.dataset.df===Q))),document.documentElement.classList.add("df-lock"),V(!0),E.el.hidden=!1,E.open=!0,E.el.offsetWidth,E.el.classList.add("open"),E.el.querySelector(".df-close").focus({preventScroll:!0})))}function ee(){E.open&&(E.open=!1,E.el.classList.remove("open"),E.timer=setTimeout(()=>{const A=E.el.querySelector(".exp-workspace");A&&E.placeholder&&E.placeholder.parentNode&&E.placeholder.replaceWith(A),E.el.hidden=!0,document.documentElement.classList.remove("df-lock"),V(!1),E.lastFocus&&E.lastFocus.isConnected&&E.lastFocus.focus({preventScroll:!0})},r()?0:340))}const K=document.querySelector(".experience-section");if(K){const A=document.querySelector(".exp-window");A.addEventListener("click",C=>{const O=C.target.closest("[data-screen]");!O||!A.contains(O)||ae(O.dataset.screen)}),A.addEventListener("keydown",C=>{if(C.key!=="Enter"&&C.key!==" ")return;const O=C.target.closest("[data-screen]");!O||O.tagName==="BUTTON"||(C.preventDefault(),ae(O.dataset.screen))}),document.querySelectorAll(".exp-pick").forEach(C=>{C.addEventListener("click",()=>f(C.closest(".exp-choice").dataset.demo))}),document.addEventListener("click",C=>{const O=C.target.closest("[data-focus-demo]");!O||E.open||(C.preventDefault(),z(O.dataset.focusDemo,O))}),document.addEventListener("keydown",C=>{if(C.key!=="Escape"||!E.open)return;C.preventDefault();const O=E.el.querySelector(".hc-drawer .hc-close");if(O){C.stopPropagation(),O.click();return}ee()},!0),document.querySelectorAll("[data-open-demo]").forEach(C=>{C.addEventListener("click",O=>{const W=C.dataset.openDemo;re[W]&&(O.preventDefault(),f(W),K.scrollIntoView({behavior:"smooth",block:"start"}))})}),f("connect")}document.querySelectorAll('a[href^="#"]').forEach(A=>{A.addEventListener("click",()=>{window.innerWidth<=850&&H()})})})();
