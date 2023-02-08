const {parseOfftext} = PTK;
let sutras={};
const loadSutra=()=>{
    
    for (let sutra in window.sutra) {
        let out=[], previd='0';
        sutras[sutra]={};
        const lines=window.sutra[sutra].split(/\r?\n/);
        for (let i=0;i<lines.length;i++) {
            const [text,tags]=parseOfftext(lines[i]);
            if (tags.length&&tags[0].name=='ck') {
                sutras[sutra][previd]=out;
                out=[];
                previd=tags[0].attrs.id;
            }
            out.push(text);
        }
        sutras[sutra][previd]=out;
    }
    console.log(sutras)
}
const getSutra=(id)=>{
    const m=id.match(/([a-z]+)\.(.+?):(\d+)/);
    if (!m) return ''
    const s=sutras[m[1]][m[2]][parseInt(m[3])]

    return s;
}
const headwords={
    vcpp:{
        '0:0':'鳩摩羅什',
        '1:1':'我：指阿難   ，一時：某一個時候',
        '1:2':'舍衛國：Śrāvastī恆河中游北岸拘薩羅國（Kosala）都城；祇園精舍，Jetavana-vihāra 祇陀太子樹 ，給孤獨布施之園 ',
    }
}
const getHeadword=(id)=>{
    const m=id.match(/([a-z]+)\.(.+?:\d+)/);
    if (!m) return ''
    const s=headwords[m[1]][m[2]];
    return s||'';
}
loadSutra();