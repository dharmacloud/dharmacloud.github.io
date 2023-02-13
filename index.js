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
            ['覺培法師','https://www.youtube.com/embed/iOmnkIK7x8g?start=904&autoplay=1'],
        ],
        '1:1':[
            ['王菲','https://www.youtube.com/embed/nWXV8DORi64?start=45&autoplay=1'],
        ],
        '1:2':[
            ['如本法師','https://www.youtube.com/embed/E2tLeZDdFCk?start=754&autoplay=1']            
        ],
        '1:3':[
            ['法鼓山','https://www.youtube.com/embed/RquHJ4jzXKs?start=49&autoplay=1']
        ],
        '1:4':[
            ['刀郎','https://www.youtube.com/embed/vxIFNYssEGw?start=43&autoplay=1']
        ],        
        '2:0':[
            ['木魚佛堂','https://www.youtube.com/embed/UfbMZ0Uu-A8?start=280&autoplay=1'],
        ],
        '2:2':[ 
            ['心定法師', 'https://www.youtube.com/embed/m9ZmMrY88qE?start=469&autoplay=1'],
        ],
        '2:3':[
            ['蔣勳','https://www.youtube.com/embed/wjvwySjCVoQ?start=55&autoplay=1']
        ],
        '2:4':[
            ['黃慧音','https://www.youtube.com/embed/LZDdosrsf-k?start=128&autoplay=1'],
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