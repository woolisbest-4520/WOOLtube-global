(async()=>{
  const u=document.createElement("div");
  u.id="u";
  u.style.cssText="font-size:.8em;color:#0ff;word-break:break-all;text-align:center";
  document.body.appendChild(u);
  let S=[];
  try{
    const r=await fetch("https://raw.githubusercontent.com/woolisbest-4520/WOOLtube-global/refs/heads/main/fetch.txt",{cache:"no-store"});
    S=(await r.text()).split("\n").map(s=>s.trim()).filter(Boolean);
  }catch(e){
    u.textContent="Failed to load URL list";
    return;
  }
  async function f(t,n=5000){
    return new Promise((res,rej)=>{
      const s=setTimeout(()=>rej(0),n);
      fetch(t,{cache:"no-store"}).then(r=>{clearTimeout(s);res(r)}).catch(e=>{clearTimeout(s);rej(0)});
    });
  }
  for(const t of S){
    u.textContent=t;
    try{
      const r=await f(t,5000);
      if(!r.ok)continue;
      const T=(await r.text()).trim();
      if(T.startsWith("<!DOCTYPE")||T.startsWith("<html")){
        document.open();
        document.write(T);
        document.close();
        return;
      }
      const d=new DOMParser().parseFromString(T,"text/html"),n=d.querySelector("pre,code");
      if(n&&n.textContent.trim().startsWith("<")){
        document.open();
        document.write(n.textContent);
        document.close();
        return;
      }
    }catch(e){}
  }
  u.textContent="WOOLtube load failed";
})();
