
const $=(e)=>{return document.querySelector(e)}

const textArea = $('#text-input');
const pitch = $('#patch');
const rate = $('#rate');
const select = $('#select');
const btn = $('#submit')


const synth=window.speechSynthesis;
let voices=[];


const getVoices=()=>{
   voices=synth.getVoices();


   voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent=`${voice.name}(${voice.lang})`;
        console.log(voice.lang,voice.name)
        option.setAttribute('data-name',voice.name)
        option.setAttribute('data-lang',voice.lang)
        select.appendChild(option)

   });
}
getVoices()
if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;
}
   const speak=()=>{
      if(synth.speaking){
          console.log('Already Speaking')
          return;
         }
      if(textArea.value!==''){
        let textSpeak= new SpeechSynthesisUtterance(textArea.value)

        textSpeak.onend=()=>{
            console.log('done speaking..');
        }

        textSpeak.onerror=()=>{
            console.log('error occured');
        }
         
        const selectedVoice=select.selectedOptions[0].getAttribute('data-name');

        voices.forEach((voice)=>{
            if(voice.name===selectedVoice){
                textSpeak.voice=voice
            }});
          textSpeak.rate=rate.value;
          textSpeak.pitch=pitch.value;
          synth.speak(textSpeak);

        }
    }

btn.addEventListener('click',()=>{
    speak()
})






