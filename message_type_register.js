const messageTypeRegister = document.querySelector('#message-type-register');
const requestURL = 'TODO:GETFILE.json';
const request = new XMLHttpRequest();
      
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
      
request.onload = function () {
const spec = request.response;
        showRegister(spec);
}

fuction showRegister (jsonObj) {
      const messages = jsonObj.messages;
      const messageTypeHeader = document.createElement('p');
      const codeHeader = document.createElement('p');
      const commentsHeader = document.createElement('p');    
      const messageTypeHeaderDiv = document.createElement('div');
      const codeHeaderDiv = document.createElement('div');
      const commentsHeaderDiv = document.createElement('div');
      
      messageTypeRegister.appendChild(messageTypeHeaderDiv);
      messageTypeRegister.appendChild(codeHeaderDiv);
      messageTypeRegister.appendChild(commentsHeaderDiv);
      
      for (let i = 0; i < messages.length; i++) {  
          const messageType = document.createElement('p');
          const code = document.createElement('p');
          const comments = document.createElement('p');
          const messageTypeDiv = document.createElement('div');
          const codeDiv = document.createElement('div');
          const commentsDiv = document.createElement('div');

          messageType.textContent = messages[i].messageType;
          code.textContent = messages[i].code;
          comments.textContent = messages[i].comments;

          messageTypeDiv.appendChild(messageType);
          codeDiv.appendChild(code);
          commentsDiv.appendChild(comments);

          messageTypeRegister.appendChild(messageTypeDiv);
          messageTypeRegister.appendChild(codeDiv);
          messageTypeRegister.appendChild(commentsDiv); 
      }
}
