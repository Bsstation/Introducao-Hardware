"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	},
	"inicio": {
		"Title": "Bem vindo",
		"Subtitle": "Esse é o jogo Introdução ao Hardware",
		"Message": "<p> </p><p>Versão 1.0.</p>"
	}
};


// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {
	aula: "Music - Pacing.mp3",
	drama: "drama.mp3",
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {
	putaria: "putaria.mp3",
	putaria2: "putaria2.mp3",
};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {
	"computador": "computador.png",
	"gabinete": "gabinete.png",
	"monitor": "monitor.png",
	"teclado": "teclado.png",
	"CPU": "CPU.png",
	"driveCD": "driveCD.png",
	"PenDrive": "PenDrive.png",
	"componentes": "componentes.png",
	"processador": "processador.png",
	"RAM": "RAM.png",
	"HD": "HD.png",
	"HD1": "HD1.png",
	"video": "video.png",
	"computadoraberto": "computadoraberto.png",
	"fonte": "fonte.png",
	"placas": "placas.png",
	"cooler": "cooler.png",
	"pilha": "pilha.png",

};

// Define the backgrounds for each scene.
const scenes = {
	"sala": "classroom_morning.jpg",
	"sala-noite": "classroom_night.jpg",
	"quarto": "quarto.png",
	"quarto-noite": "room_evening_light_off.jpg",
	"putaria1": "11.png",
	"putaria2": "12.png",

};

// Define the Characters
const characters = {
	"p": {
		"Name": "Professora",
		"Color": "#5bcaff",
		"Images":{
			"01": "01.png",
			"02": "02.png",
			"03": "03.png",
			"04": "04.png",
			"05": "05.png"
		}
	},
	"me": {
		"Name": "{{player.name}}",
		"Color": "#5bcaff",
		"Images":{
			
		}
	},
	"?": {
		"Name": "???",
		"Color": "#5bcaff",
		"Images":{
			"11": "11.png",
			"12": "12.png",
			"12.1": "12.1.png",
			"13": "13.png",
			"14": "14.png"
			
		}
	},
	"c": {
		"Name": "Colega",
		"Color": "#5bcaff",
		"Images":{
			"06": "06.png",
			"07": "07.png",
			"08": "08.png",
			"09": "09.png",
			"10": "10.png"


		}
	},
};

let script = {
	// The game starts here.
	"English":{
	"Start": [
		"notify Welcome",
		{
			"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
					return true;
				},
				"Warning": "You must enter a name!"
			}
		},

		"h Hi {{player.Name}} Welcome to Monogatari!",

		{
			"Choice": {
				"Dialog": "h Have you already read some documentation?",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "No",
					"Do": "jump No"
				}
			}
		}
	],

	"Yes": [

		"h That's awesome!",
		"h Then you are ready to go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	],

	"No": [

		"h You can do it now.",

		"display message Help",

		"h Go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	]
	},

	"Português":{
	"Start": [
		"scene black",
		"centered Bem vindo.",
		"centered Neste jogo você vai aprender sobre a anatomia do computador e as noções básicas de como os componentes funcionam.",
		"scene sala with fadeIn",
		"play music aula with loop",
		"Cheguei a escola.",
		"Vejo minha amiga de infancia se aproximando de mim.",
		"show c 06 with fadeIn center",
		"c Parece que estamos estudando juntos novamente, espero que tenhamos um bom primeiro dia de aula.",
		"hide c with fadeOut",
		"show c 10 center",
		"c Bem, agora vou pro meu lugar, a professora está chegando.",
		"hide c with fadeOut",
		"A professora entra na sala de aula.",
		"show p 01 with fadeIn center",
		"p Bom dia.",
		"p Sou eu quem vai assumir a turma de agora em diante.",
		"hide p with fadeOut",
		"show p 02 center",
		"p Antes de começar a aula e os conteúdos propriamente ditos eu gostaria de conhecer a turma com uma breve apresentação.",
		{
				"Input": {
					"Text": "Qual seu nome?",
					"Validation": function(input){
						return input.trim().length > 2;
					},
					"Save": function(input){
						storage.player.name = input;
						return true;
					},
					"Warning": "Por favor digite seu nome!"
				}
			},
		
		"p Prazer em conhece-lo {{player.name}}, agora podemos prosseguir.",
		"hide p with fadeOut",
		"show p 03 fadeIn center",
		"p Na aula de hoje vamos começar com os conceitos basicos a respeito do computador.",
		"p Esse é um computador.",
		"show computador right with fadeIn ",
		"p É uma ferramenta muito comum hoje em dia, mas nem todos o conhecem com clareza.",
		"p Olhando por fora podemos ver um conjuto de componentes.",
		"hide computador with fadeOut",
		"show monitor right with fadeIn ",
		"p Esse é o monitor.",
		"p Ja é de conhecimento geral sua utilidade.",
		"p Existem modelos mais modernos que alem da visualização contam com uma tela sensivel ao toque como o toutch dos celulares.",
		"hide monitor with fadeOut",
		"show teclado right with fadeIn ",
		"p Tambem de conhecimento geral temos o teclado e o mouse que servem para operar o computador e fornecer dados.",
		"p Existem modelos diferentes dependendo do uso que se vá ter, alguns tem funcionalidades extras pra determinada atividade.",
		"p Como os kits Gamers por exemplo.",
		"hide teclado with fadeOut",
		"show gabinete right with fadeIn ",
		"p Esse é o gabinete. Muitos ainda o confundem e chamam de CPU, é um erro comum.",
		"hide p fadeout",
		"show p 04 fadeIn center",
		"p CPU é um pequeno componente interno que fica conectado a paca mãe, o processador.",
		"p Todo esse envolto exterior se chama gabinete, basicamente é uma plataforma de encaixe e organização de todos os componentes.",
		"p Tem tambem o papel de proteção ja que é um invólucro contra poeira e muitos fatores de risco a máquina.",
		"hide gabinete with fadeOut",
		"show computador right with fadeIn ",
		"p Se você prestar atenção vai perceber que todos os dispositivos periféricos levam ao gabinete, isto acontece porque todos eles se conectam a placa mãe de alguma forma.",
		"p Esses podem ser categorizados em 3 tipos de dispositivos: de entrada, de saída e os que são ambos",
		"hide p fadeout",
		"show p 05 fadeIn center",
		"p Calma que é facil de entender, não precisa decorar nada.",
		"p A logica é que os dispositivos de entrada são todos aqueles em que o usuario envia dados para dentro do cumputador.",
		"p Os de saída o oposto, o usuario recebe dados que vem de dentro do computador.",
		"p Vamos ver alguns exemplor agora.",
		"hide computador with fadeOut",
		"show monitor right with fadeIn ",
		"p O monitor visto antes é um dispositivo de saída. O computador processa o que vai ser exposto visualmente e envia a imagem para ele.",
		"hide monitor with fadeOut",
		"show teclado right with fadeIn ",
		"p Ja o teclado e o mouse são dispositivos de entrada. O usuario não recebe dados deles, mas os usa para enviar dados ao computador, seja texto ou comandos.",
		"hide teclado with fadeOut",
		"show PenDrive right with fadeIn ",
		"show driveCD left with fadeIn ",
		"p Esses dispositivos, o pendrive e o drive de CD/DVD são ambos.",
		"p O drive de CD/DVD pode tanto ler os dados do disco quanto gravar seus arquivos nele.",
		"p Isso vale tambem para o pendrive, ele pode ser usado tanto para ler os arquivos que tem nele quanto para gravar os arquivos do computador nele.",
		"p Dispositivos desse tipo conseguem ser de entrada e saída.",
		"hide PenDrive with fadeOut",
		"hide driveCD with fadeOut",
		"scene sala-noite with fadeIn",
		"stop music aula with fade 5",
		"show p 01 with fadeIn",
		"p Então essa foi a aula de hoje, até amanhã.",
		"hide p with fadeOut",
		"wait 1000",
		"scene black with fadeIn",
		"No dia seguinte.",
		"scene sala with fadeIn",
		"show p 05 center with fadeIn",
		"p Bom dia turma, o primeiro conteúdo ja foi concluído ontem.",
		"p Então vamos começar a primeira avaliação.",
		"jump Avaliação1",
	],


	"Avaliação1": [
	"hide p fadeout",
	"show p 02 fadeIn center",
	"hide driveCD with fadeOut",
	function(){
				storage.status.contador += 1;
				storage.status.prova = 1;
			},
		{"Conditional": { //jump da questão 1
   			 "Condition": function(){
       		 return storage.status.contador == 1;
    	},
    		"True": "jump Questão1e1",
		}}, 
		{"Conditional": { //jump da questão 2
   			 "Condition": function(){
       		 return storage.status.contador == 2;
    	},
    		"True": "jump Questão1e2",
		}}, 
		{"Conditional": { //jump da questão 3
   			 "Condition": function(){
       		 return storage.status.contador == 3;
    	},
    		"True": "jump Questão1e3",
		}}, 
		{"Conditional": { //jump da questão 4
   			 "Condition": function(){
       		 return storage.status.contador == 4;
    	},
    		"True": "jump Questão1e4",
		}}, 
		{"Conditional": { //jump para calcular resultado
   			 "Condition": function(){
       		 return storage.status.contador == 5;
    	},
    		"True": "jump Resultado",
		}}, 
	],

	"Questão1e1": [
		"p Primeira questão.",
		"show gabinete right with fadeIn",
		{
				"Choice":{
					"Dialog": "p {{player.name}} qual o nome desse componente?",
					"A1": {
						"Text": "CPU",
						"Do": "jump Errado"
					}, 
					"A2": {
						"Text": "Gabinete",
						"Do": "jump Certo"
					}, 
					"A3": {
						"Text": "Caixa Preta",
						"Do": "jump Errado",
					}, 
				}
			},
	],

	"Questão1e2": [
		"hide gabinete with fadeOut",
		"p Vamos a segunda questão.",
		
		{
				"Choice":{
					"Dialog": "p Quais os tipos de dispositivos periféricos?",
					"A1": {
						"Text": "Recepção, processamento e analise ",
						"Do": "jump Errado"
					}, 
					"A2": {
						"Text": "    Digitação, sonoro e visual    ",
						"Do": "jump Errado"
					}, 
					"A3": {
						"Text": "     Entrada, saída e mistos     ",
						"Do": "jump Certo",
					}, 
				}
			},
	],

	"Questão1e3": [
		"p Vamos a terceira questão.",
		"show teclado right with fadeIn ",
		{
				"Choice":{
					"Dialog": "p Que tipo de dispositivo são esses?",
					"A1": {
						"Text": "Entrada",
						"Do": "jump Certo"
					}, 
					"A2": {
						"Text": "Saída",
						"Do": "jump Errado"
					}, 
					"A3": {
						"Text": "Misto",
						"Do": "jump Errado",
					}, 
				}
			},
	],
	"Questão1e4": [
		"hide teclado with fadeOut",
		"p Vamos a quarta questão.",
		"show driveCD left with fadeIn",
		{
				"Choice":{
					"Dialog": "Que tipo de dispositivo é esse? ",
					"A1": {
						"Text": "Entrada",
						"Do": "jump Errado"
					}, 
					"A2": {
						"Text": "Saída",
						"Do": "jump Errado"
					}, 
					"A3": {
						"Text": "Misto",
						"Do": "jump Certo",
					}, 
				}
			},
	],

	"Capitulo2":[
		"scene black with fadeIn",
		"No dia seguinte.",
		"scene sala with fadeIn",
		"play music aula",
		"show c 08 center with fadeIn",
		"c Bom dia {{player.name}}.",
		"me Bom dia.",
		"c Se deu bem na prova?",
		"me Pro começo até que não foi tão mal.",
		"hide c",
		"show c 10 center",
		"c A professora ta chegando, vou pra minha cadeira.",
		"me Até mais.",
		"c Até.",
		"hide c with fadeOut",
		"wait 1000",
		"show p 01 center with fadeIn",
		"p Bom dia turma.",
		"p A aula de hoje vai ser mais profunda que aula passada.",
		"hide p",
		"show p 02 center",
		"p Vamos ver o computador internamente.",
		"show computadoraberto left with fadeIn",
		"p Alguns computadores variam na organização dos componentes, mas independente da localização de cada peça há um padrão que se encontra em todos.",
		"show fonte right with fadeIn",
		"p Essa é uma fonte de alimentação, ela recebe a energia que vem da tomada 110/220v e redistribui para os demais componentes regulando-a de acordo com os funcionamentos de cada peça.",
		"hide fonte with fadeOut",
		"show HD1 right with fadeIn",
		"p Esse é um HD. Pode ser encontrado encaixado em alguma plataforma nas extremidades do gabinete.",
		"p Ele é um disco rigido que tem como função armazenar arquivos e dados, sejam do sistema operacional, programas ou do usuario.",
		"hide HD1 with fadeOut",
		"show video right with fadeIn",
		"p Essa é uma placa de video, se encontra conectada a placa mãe e com conexões voltadas ao lado de fora do gabinete.",
		"p Semelhante a ela é possivel ver outras placas como uma placa de audio ou de rede.",
		"p Ela é responsável por administrar e controlar as funções de exibição de vídeo na tela.",
		"p Jogos e programas graficos atuais exigem configurações mais avançadas e placas mais robustas dependendo do desempenho exigido.",
		"hide video with fadeOut",
		"show CPU right with fadeIn",
		"p Essa é a placa mãe. Como o próprio nome diz ela é uma das partes cruciais do funcionamento do computador.",
		"p Possui um conjunto de circuitos integrados (chip set) o qual reconhece e gerencia o funcionamento de todo o equipamento.",
		"p Toda placa mãe possui o programa de controle BIOS, que é o responsável pelo teste inicial do sistema e que guarda as configurações do hardware e as informações referentes à data e hora.",
		"p O BIOS faz o chamado boot, que consiste em carregar o programa do sistema operacional, que está arquivado no disco rígido.",
		"p Com o sistema operacional carregado, o computador está pronto para executar os comandos e executar outros programas.",
		"hide computadoraberto with fadeOut",
		"show pilha left with fadeIn",
		"p Para manter as configurações da BIOS, ou seja, os dados gravados no chip de memória, é usada uma bateria de níquel-cádmio ou lítio, normalmente de 3 volts.",
		"p Por isso mesmo com o computador desligado, o relógio e as configurações de hardware são mantidas.",
		"p Se a bateria ficar fraca aparecem as mensagens (Battery low) e (Memory size wrong). Então a bateria deve ser substituída por outra com as mesmas características.",
		"p O relógio ajuda a perceber quando a bateria está ficando fraca. Se, toda vez que se ligar o pc, aparecer a hora e a data com informação errada, em muitos minutos ou horas e até dias, é o momento para trocar a bateria.",
		"p Pode ser encontrada em lojas que vendem pilhas para relógios e telefones, tem uma vida útil que varia de dois a quatro anos.",
		"hide CPU with fadeOut",
		"hide pilha with fadeOut",
		"hide p",
		"show p 05 center",
		"p Com isso encerramos a aula de hoje, antes de prosseguir o conteúdo será feita uma avaliação na proxima aula sobre essas noções introdutórias. Estudem bem.",
		"hide p with fadeOut",
		"stop music aula with fade 5",
		"scene black with fadeIn",
		"No dia seguinte.",
		"scene sala with fadeIn",
		"show c 06 center with fadeIn",
		"c Bom dia {{player.name}}!",
		"me Bom dia.",
		"hide c",
		"show c 10 center",
		"c Preparado pra avaliação?",
		"me Creio que sim.",
		"c A professora esta chegando, vou indo pro meu lugar.",
		"me Certo, boa sorte.",
		"hide c",
		"show c 09 center",
		"c Obrigada, pra você tambem.",
		"hide c with fadeOut",
		"wait 1000",
		"show p 01 center with fadeIn",
		"p Bom dia turma, hoje vou aplicar a segunda avaliação sobre o conteúdo da aula passada.",
		"jump Avaliação2",
	],

	"Avaliação2":[
	"hide p fadeout",
	"show p 02 fadeIn center",
	function(){
			storage.status.contador += 1;
			storage.status.prova = 2;
		},
		{"Conditional": { //jump da questão 1
   			 "Condition": function(){
       		 return storage.status.contador == 1;
    	},
    		"True": "jump Questão2e1",
		}}, 
		{"Conditional": { //jump da questão 2
   			 "Condition": function(){
       		 return storage.status.contador == 2;
    	},
    		"True": "jump Questão2e2",
		}}, 
		{"Conditional": { //jump da questão 3
   			 "Condition": function(){
       		 return storage.status.contador == 3;
    	},
    		"True": "jump Questão2e3",
		}}, 
		{"Conditional": { //jump da questão 4
   			 "Condition": function(){
       		 return storage.status.contador == 4;
    	},
    		"True": "jump Questão2e4",
		}}, 
		{"Conditional": { //jump para calcular resultado
   			 "Condition": function(){
       		 return storage.status.contador == 5;
    	},
    		"True": "jump Resultado",
		}}, 
	],

	"Questão2e1": [
		"p Primeira questão.",
		"show HD1 right with fadeIn",
		{
				"Choice":{
					"Dialog": "p O que é isso?",
					"A1": {
						"Text": "HD",
						"Do": "jump Certo"
					}, 
					"A2": {
						"Text": "Processador",
						"Do": "jump Errado"
					}, 
					"A3": {
						"Text": "Fonte",
						"Do": "jump Errado",
					}, 
				}
			},
	],
	"Questão2e2": [
		"hide HD1 with fadeOut",
		"p Segunda questão.",
		{
				"Choice":{
					"Dialog": "p O que é o boot?",
					"A1": {
						"Text": "Manter o relógio e data com a maquina desligada",
						"Do": "jump Errado"
					}, 
					"A2": {
						"Text": "Sistema de resfriamento",
						"Do": "jump Errado"
					}, 
					"A3": {
						"Text": "Carregar o programa do sistema operacional",
						"Do": "jump Certo",
					}, 
				}
			},
	],
	"Questão2e3": [
		"show fonte right with fadeIn",
		"p Terceira questão.",
		{
				"Choice":{
					"Dialog": "p Que componente é esse?",
					"A1": {
						"Text": "Placa de rede",
						"Do": "jump Errado"
					}, 
					"A2": {
						"Text": "Fonte",
						"Do": "jump Certo"
					}, 
					"A3": {
						"Text": "Placa mãe",
						"Do": "jump Errado",
					}, 
				}
			},
	],
	"Questão2e4": [
		"hide fonte with fadeOut",
		"p Quarta questão.",
		{
				"Choice":{
					"Dialog": "p Em caso do relógio e data sempre estarem errados ao ligar o computador, o que pode ser?",
					"A1": {
						"Text": "Memoria RAM",
						"Do": "jump Errado"
					}, 
					"A2": {
						"Text": "Problema na fonte",
						"Do": "jump Errado"
					}, 
					"A3": {
						"Text": "Bateria do BIOS fraca",
						"Do": "jump Certo",
					}, 
				}
			},
	],

	"Capitulo3":[
		"scene black with fadeIn",
		"No dia seguinte.",
		"scene sala with fadeIn",
		"play music aula",
		"show c 08 center with fadeIn",
		"c Olá {{player.name}}, vejo que anda se esforçando pra conseguir absorver o conteúdo",
		"me Olá, na medida do possivel sim.",
		"hide c",
		"show c 10 center",
		"c Haha pois continue assim, parece que sua vida está focada nessa sala de aula, a gente poderia sair mais vezes.",
		"me Quem sabe.",
		"c A professora ja está chegando, vou ao meu lugar, até mais.",
		"me Até mais.",
		"hide c with fadeOut",
		"wait 1000",
		"show p 02 center with fadeIn",
		"show componentes left with fadeIn",
		"p Todas as outras peças se conectam na placa mãe, possuindo vários tipos de conectores.",
		"show processador right with fadeIn",
		"p O processador (CPU) é instalado em seu socket.",
		"p A CPU é considerada a parte mais importante de um computador, pois é responsável pelo processamento de todos os tipos de dados e pela apresentação do resultado do processamento.",
		"p É ali onde são interpretadas e executadas as instruções fornecidas pelos aplicativos (softwares), como o sistema operacional e o editor de textos, por exemplo.",
		"hide processador with fadeOut",
		"show cooler right with fadeIn",
		"p Logo acima do processador pode-se notar uma hélice encaixada.",
		"p É o cooeler, ele tem função de resfriamento do processador que é uma parte vital sujeito a aquecimento e tambem pode ser encontrado em outros locais/componentes.",
		"p Como nas saidas de ar em alguma das extremidades. Com a circulação do ar a troca de calor é mais rapida e efetiva podendo assim permitir que os componentes não cheguem ao seu limite de temperatura danificando o equipamento.",
		"hide cooler with fadeOut",
		"show HD right with fadeIn",
		"p O disco rígido (HD) é ligado nas portas IDE ou ATA.",
		"p O coração de um HD é este disco, feito de alumínio ou vidro, e com duas camadas de um material magnético aplicado nos dois lados. Essa parte, chamada platter, é o local onde se armazenam todas as informações do PC.",
		"p Os platters são afixados em um eixo de alumínio, capaz de girá-los em velocidades de 5.600 RPM ou 7.200 RPM, nos modelos mais comuns e, até 15.000 RPM, nos modelos mais avançados.",
		"p Uma das peças responsáveis pela gravação das informações é um braço mecânico de alumínio. O braço movimenta-se sobre o disco rígido por meio de um mecanismo deslocando-se por impulsos magnéticos de repulsão e atração.",
		"p A função desse braço é deslocar um conjunto de ímãs, que formam as cabeças de leitura eletromagnéticas, as quais escrevem as linhas de informações nos platters ou as leem. Essas linhas medem centésimos de milímetros e são todos os dados contidos no seu computador.",
		"hide HD with fadeOut",
		"show video right with fadeIn",
		"p A placa de vídeo pode ser conectada nos slots AGP 8x ou PCI-Express 16x.",
		"p É composta por um processador com GPU e memoria. Ela processa os dados e transforma ele em comandos visuais.",
		"p Pode ser dedicada ou integrada, as chamandas onboard e offboard.",
		"p Isso porque a placa de video pode ser um componente integrado na placa mãe ou uma peça externa dedicada a tal funcioladidade apenas.",
		"p Implica diretamente na performance, uma integrada utiliza a memoria RAM no seu funcionamento, enquanto uma dedicada tem componentes mais robustos e alto desempenho por ser de finalidade unica e especializada.",
		"hide video with fadeOut",
		"show placas right with fadeIn",
		"p As outras placas (placa de som, placa de rede ...) podem ser encaixadas nos slots PCI.",
		"p Igualmente como a de video, cada uma realiza sua função especifica.",
		"hide placas with fadeOut",
		"show RAM right with fadeIn",
		"p Há os encaixes das memórias.",
		"p A memoria RAM é um hardware de armazenamento volátil de memória. Isto significa que esta peça armazena dados de programas em execução enquanto o computador está ligado, mas tem a memoria limpa ao desligar a maquina.",
		"p A RAM tem uma velocidae alta em relação ao HD, recebe dados dos processos e programas sendo executados armazenando em seus chips de memoria.",
		"p Sendo assim, agiliza o funcionamento do processador que teria um rendimento muito lento se não tivesse a memoria RAM de alta velocidade.",
		"hide RAM with fadeOut",
		"hide p",
		"show p 04 center",
		"p Essa foi a aula de hoje, espero que tenham prestado bastante atenção pois amanhã será feita uma avaliação. Até mais.",
		"hide p with fadeOut",
		"stop music aula with fade 5",
		"scene black with fadeIn",
		"No dia seguinte.",
		"scene sala with fadeIn",
		"show c 07 center with fadeIn",
		"c Bom dia {{player.name}}, eis que a prova de hoje parece ser mais dificil.",
		"c Está preparado?",
		"me Acho que sim, não deve ser tão complicada assim.",
		"c Falando nisso a professora ja vem chegando com as provas.",
		"c Vou pro meu lugar, boa sorte.",
		"me Obrigado, igualmente.",
		"hide c with fadeOut",
		"show p 01 center with fadeIn",
		"p Bom dia turma.",
		"hide p",
		"show p 05 center",
		"p Como combinado agora será aplicada a terceira avaliação.",
		"jump Avaliação3",
		
	],

	"Avaliação3":[
	"hide p fadeout",
	"show p 02 fadeIn center",
	function(){
			storage.status.contador += 1;
			storage.status.prova = 3;
		},
		{"Conditional": { //jump da questão 1
   			 "Condition": function(){
       		 return storage.status.contador == 1;
    	},
    		"True": "jump Questão3e1",
		}}, 
		{"Conditional": { //jump da questão 2
   			 "Condition": function(){
       		 return storage.status.contador == 2;
    	},
    		"True": "jump Questão3e2",
		}}, 
		{"Conditional": { //jump da questão 3
   			 "Condition": function(){
       		 return storage.status.contador == 3;
    	},
    		"True": "jump Questão3e3",
		}}, 
		{"Conditional": { //jump da questão 4
   			 "Condition": function(){
       		 return storage.status.contador == 4;
    	},
    		"True": "jump Questão3e4",
		}}, 
		{"Conditional": { //jump para calcular resultado
   			 "Condition": function(){
       		 return storage.status.contador == 5;
    	},
    		"True": "jump Resultado",
		}}, 
	],
	"Questão3e1": [
		"p Primeira questão.",
		"show processador right with fadeIn",
		{
				"Choice":{
					"Dialog": "p Que coponente é esse?",
					"A1": {
						"Text": "Cooler",
						"Do": "jump Errado"
					}, 
					"A2": {
						"Text": "Processador",
						"Do": "jump Certo"
					}, 
					"A3": {
						"Text": "Chip de memoria",
						"Do": "jump Errado",
					}, 
				}
			},
	],
	"Questão3e2": [
		"hide processador with fadeOut",
		"p Segunda questão.",
		"show HD1 right with fadeIn",
		{
				"Choice":{
					"Dialog": "p Qual a função do Platter no HD?",
					"A1": {
						"Text": "Gravação e leitura dos dados",
						"Do": "jump Errado"
					}, 
					"A2": {
						"Text": "Gerar impulsos magneticos ao braço de aluminio",
						"Do": "jump Errado"
					}, 
					"A3": {
						"Text": "Local de armazenamento dos dados",
						"Do": "jump Certo",
					}, 
				}
			},
	],	
	"Questão3e3": [
		"hide HD1 with fadeOut",
		"p Terceira questão.",
		"show video right with fadeIn",
		{
				"Choice":{
					"Dialog": "p Essa é uma placa integrada ou dedicada?",
					"A1": {
						"Text": "Integrada",
						"Do": "jump Errado"
					}, 
					"A2": {
						"Text": "Dedicada",
						"Do": "jump Certo"
					}, 
				}
			},
	],	
	"Questão3e4": [
		"hide video with fadeOut",
		"p Quarta questão.",
		{
				"Choice":{
					"Dialog": "p Qual a principal vantagem da memorira RAM?",
					"A1": {
						"Text": "Limite de armazenamento",
						"Do": "jump Errado"
					}, 
					"A2": {
						"Text": "Velocidade",
						"Do": "jump Certo"
					}, 
					"A3": {
						"Text": "Baixo custo",
						"Do": "jump Errado",
					}, 
				}
			},
	],	

	"Capituloextra1":[
		"wait 1000",
		"show c 07 center with fadeIn",
		"c Vejo que andou se esforçando nos estudos.",
		"me Claro que sim, a vida ta complicada.",
		"hide c",
		"show c 08 center",
		"c Parece que você não tem jeito mesmo.",
		"hide c",
		"show c 10 center",
		"c A vida pode estar dificil, mas tem umas coisas bem faceis pra você agora.",
		"me O que?",
		"c ...",
		"hide c",
		"show c 09 center",
		"c Fecha os olhos, só abra quando eu disser.",
		"me Ok.",
		"scene black",
		"...",
		"c Ja pode abrir.",
		" ",
	
		"play music drama",
		"wait 5000",
		"show computador right with fadeIn,",
		"wait 3000",
		"hide computador with fadeOut",
		"wait 3000",
		"show componentes left with fadeIn",
		"wait 3000",
		"hide componentes with fadeOut",
		"wait 3000",
		"show cooler right with fadeIn",
		"wait 3000",
		"hide cooler with fadeOut",
		"wait 3000",
		"show computadoraberto left with fadeIn",
		"wait 3000",
		"hide computadoraberto with fadeOut",
		"wait 3000",
		"show CPU right with fadeIn",
		"wait 3000",
		"hide CPU with fadeOut",
		"wait 3000",
		"show driveCD left with fadeIn",
		"wait 3000",
		"hide driveCD with fadeOut",
		"wait 3000",
		"show fonte right with fadeIn",
		"wait 3000",
		"hide fonte with fadeOut",
		"wait 3000",
		"centered Final Extra 1.",
		"end",
	],
	"Capituloextra2":[
		"wait 1000",
		"show c 07 center with fadeIn",
		"c Vejo que passou por muitas dificuldades ao longo das aulas.",
		"me Sim, a vida ta complicada.",
		"hide c",
		"show c 08 center",
		"c Parece que você não tem jeito mesmo.",
		"hide c",
		"show c 10 center",
		"c A vida pode estar dificil, mas tem umas coisas bem faceis pra você agora.",
		"me O que?",
		"c ...",
		"hide c",
		"show c 09 center",
		"c Você parece estar muito estressado pelas notas, porque não vamos la em casa? Não tem ninguem la, a gente pode relaxar um pouco.",
		"me Ah, ta certo, vamos la!",
		"scene black",
		"Vamos caminhando juntos para casa dela.",
		"scene quarto with fadeIn",
		"show c 10 center with fadeIn",
		"c Então, esse é o meu quarto.",
		"me Legal, gostei daqui.",
		"hide c",
		"show c 09 center",
		"c ...",
		"c Me espera só um minuto, vou tomar um copo dágua e ja volto.",
		"me Ok.",
		"hide c with fadeOut",
		"...",
		"Alguem entra no quarto.",
		"show ? 11 center with fadeIn",
		"me Quem é você?",
		"hide ?",
		"show ? 12 center",
		"? Relaxa cara, sou o irmão dela.",
		"me O que você ta fazendo cara?!",
		"A luz é apagada.",
		"scene quarto-noite",
		"show ? 12.1 center",
		"? Calma, só estou arrumando o clima.",
		"hide ?",
		"show ? 13 center with shake",
		"? E me livrando de uma calça desnecessaria, é hora de relaxar.",
		"hide ?",
		"show ? 14 center with shake",
		"hide ?",
		"show ? 14 center with tada",
		"me Espera aí cara! Deve ser um engano!!!",
		"scene black with fadeIn",
		"hide ? with fadeOut",

		"play music drama",
		"wait 5000",
		"show computador right with fadeIn,",
		"wait 3000",
		"hide computador with fadeOut",
		"wait 3000",
		"show componentes left with fadeIn",
		"wait 3000",
		"hide componentes with fadeOut",
		"wait 3000",
		"show cooler right with fadeIn",
		"wait 3000",
		"hide cooler with fadeOut",
		"wait 3000",
		"show computadoraberto left with fadeIn",
		"wait 3000",
		"hide computadoraberto with fadeOut",
		"wait 3000",
		"show CPU right with fadeIn",
		"wait 3000",
		"hide CPU with fadeOut",
		"wait 3000",
		"show driveCD left with fadeIn",
		"wait 3000",
		"hide driveCD with fadeOut",
		"wait 3000",
		"show fonte right with fadeIn",
		"wait 3000",
		"hide fonte with fadeOut",
		"wait 3000",
		"centered Final Extra 2.",
		"end",
	],
	"Creditos":[
		"scene black with fadeIn",
		"wait 5000",
		"show computador right with fadeIn,",
		"wait 3000",
		"hide computador with fadeOut",
		"wait 3000",
		"show componentes left with fadeIn",
		"wait 3000",
		"hide componentes with fadeOut",
		"wait 3000",
		"show cooler right with fadeIn",
		"wait 3000",
		"hide cooler with fadeOut",
		"wait 3000",
		"show computadoraberto left with fadeIn",
		"wait 3000",
		"hide computadoraberto with fadeOut",
		"wait 3000",
		"show CPU right with fadeIn",
		"wait 3000",
		"hide CPU with fadeOut",
		"wait 3000",
		"show driveCD left with fadeIn",
		"wait 3000",
		"hide driveCD with fadeOut",
		"wait 3000",
		"show fonte right with fadeIn",
		"wait 3000",
		"hide fonte with fadeOut",
		"wait 3000",
		"centered Final normal",
		"end",
	],


	"Certo":[
		function(){
				storage.status.acertos += 1;
				storage.status.putaria1 += 1;
			},
		"hide p fadeout",
		"show p 03 fadein center",
		"p Acertou! Muito bem.",
		{"Conditional": { //jump da avaliação 1
   			 "Condition": function(){
       		 return storage.status.prova == 1;
    	},
    		"True": "jump Avaliação1",
		}}, 
		{"Conditional": { //jump da avaliação 2
   			 "Condition": function(){
       		 return storage.status.prova == 2;
    	},
    		"True": "jump Avaliação2",
		}}, 
		{"Conditional": { //jump da avaliação 3
   			 "Condition": function(){
       		 return storage.status.prova == 3;
    	},
    		"True": "jump Avaliação3",
		}}, 

	],
	"Errado":[
		"hide p fadeout",
		"show p 04 fadein center",
		"p Resposta errada, mas não desanime!",
		function(){
				storage.status.putaria2 += 1;
			},
		{"Conditional": { //jump da avaliação 1
   			 "Condition": function(){
       		 return storage.status.prova == 1;
    	},
    		"True": "jump Avaliação1",
		}}, 
		{"Conditional": { //jump da avaliação 2
   			 "Condition": function(){
       		 return storage.status.prova == 2;
    	},
    		"True": "jump Avaliação2",
		}}, 
		{"Conditional": { //jump da avaliação 3
   			 "Condition": function(){
       		 return storage.status.prova == 3;
    	},
    		"True": "jump Avaliação3",
		}}, 
	],

	"Resultado":[
		function(){
				storage.status.contador = 0;//zerar contador de questões
			},
		{"Conditional": { //resultado da avaliação
   			 "Condition": function(){
       		 return storage.status.acertos > 1;
    	},
    		"True": "jump Aprovado",
    		"False": "jump Reprovado",
		}}, 
	],

	"Aprovado":[
		"p Parabéns {{player.name}} você passou no teste!",
		"scene sala-noite with fadeIn",
		"show p 05 center with fadeIn",
		"p Vejo que ja esta tarde, até mais, te vejo na proxima aula.",
		"hide p with fadeOut",
		function(){
			storage.status.avaliação += 1;//implementa o numero de provas concluidas com exito
			storage.status.acertos = 0;//zera a contagem de acertos
		},
		{"Conditional": { //jump da avaliação 1 para proxima etapa
   			 "Condition": function(){
       		 return storage.status.prova == 1;
    	},
    		"True": "jump Capitulo2",
		}}, 
		{"Conditional": { //jump da avaliação 2 para proxima etapa
   			 "Condition": function(){
       		 return storage.status.prova == 2;
    	},
    		"True": "jump Capitulo3",
		}},
		{"Conditional": { //jump da avaliação 3 para proxima etapa
   			 "Condition": function(){
       		 return storage.status.prova == 3;
    	},
    		"True": "jump Resultadofinal",
		}}, 	
		],

	"Reprovado":[
		"p Não foi dessa vez {{player.name}}, você não passou no teste, mas continue tentando!",
		"scene sala-noite with fadeIn",
		"show p 05 center with fadeIn",
		"p Vejo que ja esta tarde, até mais, te vejo na proxima aula.",
		"hide p with fadeOut",
		function(){
			storage.status.acertos = 0;//zera a contagem de acertos
		},
		{"Conditional": { //jump da avaliação 1 para proxima etapa
   			 "Condition": function(){
       		 return storage.status.prova == 1;
    	},
    		"True": "jump Capitulo2",
		}}, 
		{"Conditional": { //jump da avaliação 2 para proxima etapa
   			 "Condition": function(){
       		 return storage.status.prova == 2;
    	},
    		"True": "jump Capitulo3",
		}}, 
		{"Conditional": { //jump da avaliação 3 para proxima etapa
   			 "Condition": function(){
       		 return storage.status.prova == 3;
    	},
    		"True": "jump Resultadofinal",
		}}, 
	],

	"Resultadofinal":[
		{"Conditional": { //jump da avaliação 3 para proxima etapa
   			 "Condition": function(){
       		 return storage.status.avaliação >= 2;
    	},
    		"True": "jump Conclusão",
    		"False": "jump Reprovação",
		}}, 
	],
	"Conclusão":[
		"scene black with fadeIn",
		"No dia seguinte.",
		"scene sala with fadeIn",
		"show p 01 center fadeIn",
		"p Bom dia alunos, esse periodo de aulas foi muito enriquecedor e gratificante.",
		"p Foi possivel passar muita coisa e hoje é o dia de receber o resultado dessa caminhada.",
		"hide p",
		"show p 04 center",
		"p Você passou {{player.name}}. Parabens!",
		"p Aproveite seus novos conhecimentos e boa sorte nas proximas etapas que lhe aguardam!",
		"hide p with fadeOut",
		"Logo em seguida ocorre uma confraternização, me divirto com meus colegas e como salgados como se não houvesse amanhã.",
		"scene sala-noite with fadeIn",
		"show p 02 center with fadeIn",
		"p Então pessoal, nossa confraternização acaba agora. Fico muito satisfeita em lecionar nessa turma.",
		"p Até a proxima!",
		"hide p with fadeOut",
		//"end",
		{"Conditional": { //Ver se vai pro final secreto bom
   			 "Condition": function(){
       		 return storage.status.putaria1 == 12;
    	},
    		"True": "jump Capituloextra1",
    		"False": "jump Creditos",
		}}, 
	],
	"Reprovação":[
		"scene black with fadeIn",
		"No dia seguinte.",
		"scene sala with fadeIn",
		"show p 01 center fadeIn",
		"p Bom dia alunos, esse periodo de aulas foi muito enriquecedor e gratificante.",
		"p Foi possivel passar muita coisa e hoje é o dia de receber o resultado dessa caminhada.",
		"hide p",
		"show p 04 center",
		"p Você não passou {{player.name}}.",
		"p Não se desvie do caminho, nunca é tarde para tentar novamente.",
		"hide p with fadeOut",
		"Logo em seguida ocorre uma confraternização, me divirto com meus colegas tentando me manter animado.",
		"scene sala-noite with fadeIn",
		"show p 02 center with fadeIn",
		"p Então pessoal, nossa confraternização acaba agora. Fico muito satisfeita em lecionar nessa turma.",
		"p Até a proxima!",
		"hide p with fadeOut",
		//"end",
		{"Conditional": { //Ver se vai pro final secreto ruim
   			 "Condition": function(){
       		 return storage.status.putaria2 == 12;
    	},
    		"True": "jump Capituloextra2",
    		"False": "jump Creditos",
		}}, 
	],
	
	}
};

