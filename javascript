//	Obtém	referências	para	os	elementos	da	página
const	textarea	=	document.querySelector('#textarea');
const	speakButton	=	document.querySelector('#speak-button');
const	stopButton	=	document.querySelector('#stop-button');
const	downloadButton	=	document.querySelector('#download-button');
//	Cria	uma	nova	instância	de	um	objeto	SpeechSynthesisUtterance
const	utterance	=	new	SpeechSynthesisUtterance();
//	Define	a	função	para	ser	chamada	quando	o	botão	"Speak"	for	clicado
speakButton.addEventListener('click',	()	=>	{
		//	Obtém	o	texto	do	campo	de	texto
		const	text	=	textarea.value;
		//	Configura	a	fala	sintética	com	o	texto	e	outras	opções
		utterance.text	=	text;
		utterance.volume	=	1;
		utterance.rate	=	1;
		utterance.pitch	=	1;
		//	Fala	o	texto
		window.speechSynthesis.speak(utterance);
});
//	Define	a	função	para	ser	chamada quando	o	botão	"Stop"	for	clicado
stopButton.addEventListener('click',	()	=>	{
		//	Interrompe	a	fala	sintética
		window.speechSynthesis.cancel();
});
//	Define	a	função	para	ser	chamada	quando	o	botão	"Download"	for	clicado
downloadButton.addEventListener('click',	()	=>	{
		//	Verifica	se	o	navegador	tem	suporte	ao	Web	Speech	API
		if	('speechSynthesis'	in	window)	{
				//	Obtém	o	texto	do	campo	de	texto
				const	text	=	textarea.value;
				//	Configura	a	fala	sintética	com	o	texto	e	outras	opções
				utterance.text	=	text;
				utterance.volume	=	1;
				utterance.rate	=	1;
				utterance.pitch	=	1;
				//	Obtém	a	URL	para	o	arquivo	de	áudio	gerado	pela	fala	sintética
				const	audioUrl	=	URL.createObjectURL(utterance);
				//	Cria	um	link	para	o	arquivo	de	áudio
				const	link	=	document.createElement('a');
				link.setAttribute('href',	audioUrl);
				link.setAttribute('download',	'speech.mp3');
				//	Adiciona	o	link	à	página	e	o	clica	para	iniciar	o	download
				document.body.appendChild(link);
				link.click();
				//	Remove	o	link	da	página
				document.body.removeChild(link);
		}
})