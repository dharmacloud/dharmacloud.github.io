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
    console.log(s)
    return s;
}
loadSutra();