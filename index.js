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

const clips={
    vcpp:{
        '0:0':[
            ['覺培法師','https://youtu.be/iOmnkIK7x8g?t=904'],
        ],
        '1:2':[
            ['刀郎','https://youtu.be/embed/vxIFNYssEGw?t=20']
        ],
        '2:0':[
            ['木魚佛堂','https://youtu.be/embed/UfbMZ0Uu-A8?t=280'],
        ],
        '2:2':[ 
            ['心定法師', 'https://youtu.be/embed/m9ZmMrY88qE?t=469'],
            ['黃慧音','https://youtu.be/embed/LZDdosrsf-k?t=104'],
        ],
        '2:3':[
            ['蔣勳','https://youtu.be/embed/wjvwySjCVoQ?t=55']
        ]
    }
}
const getMovieClip=(id)=>{
    const m=id.match(/([a-z]+)\.(.+?:\d+)/);
    if (!m) return ''
    const arr=clips[m[1]][m[2]];
    const out=[];
    for (let i=0;i<arr.length;i++) {
        out.push('<button onclick=play("'+arr[i][1]+'")>'+arr[i][0]+'</button> ')
    }
    return out.join(' ');
}
loadSutra();