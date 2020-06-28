const text = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.";

const html = "<h1>Olá mundo</h1> <p>Expressões regulares</p>";

const html2 = "<p data-teste='teste' class='teste teste'>Olá mundo</p> <div>Expressões regulares</div>";

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 !";

const cpfs = `
  Os CPFs são:

    254.224.877-45 215.978.456-12 047.258.369-96

    963.987.321-00
`;

const cpfs2 = 
    `254.224.877-45 
    215.978.456-12 
    047.258.369-96
    963.987.321-00`;

const ips = `
  Os Ips são:
    0.0.0.0
    192.168.0.25
    255.255.255.255
`;

const lookahead = `

  ONLINE 192.168.0.1 ABCDEF inactive
  OFFLINE 192.168.0.2 ABCDEF active
  ONLINE 192.168.0.3 ABCDEF active
  ONLINE 192.168.0.4 ABCDEF active
  OFFLINE 192.168.0.5 ABCDEF active
  OFFLINE 192.168.0.6 ABCDEF inactive
`

module.exports = {
  text,
  html,
  html2,
  alfabeto,
  cpfs,
  cpfs2,
  ips,
  lookahead
}