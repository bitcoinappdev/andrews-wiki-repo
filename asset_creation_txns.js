const assetCreationTxnContainer = document.querySelector('#asset-creation-txn-container');
const assetCreationTxn = document.querySelector('.asset-creation-txn');
const requestURL = 'TODO:GETFILE.json';
const request = new XMLHttpRequest();
      
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
      
request.onload = function () {
      const spec = request.response;
      showAssetRegister(spec);
}

fuction showAssetCreationTxns (jsonObj) {
	const assets = jsonObj.assets;
	
	for (let i = 0; i < assets.length; i++) {
		const opReturn = document.createElement('div');
		const opReturnHeader = document.createElement('div');
		const subfieldHeader = document.createElement('p');
		const maxBytesHeader = document.createElement('p');
		const hexValueHeader = document.createElement('p');
		const commentsHeader = document.createElement('p');
		const dataTypeHeader = document.createElement('p');
		const subfieldHeaderDiv = document.createElement('div');
		const maxBytesHeaderDiv = document.createElement('div');
		const hexValueHeaderDiv = document.createElement('div');
		const commentsHeaderDiv = document.createElement('div');
		const dataTypeHeaderDiv = document.createElement('div');

		subfieldHeaderDiv.className = 'heading';
		maxBytesHeaderDiv.className = 'heading';
		hexValueHeaderDiv.className = 'heading';
		commentsHeaderDiv.className = 'heading';
		dataTypeHeaderDiv.className = 'heading';

		subfieldHeader.textContent = 'Subfield';
		maxBytesHeader.textContent = 'Max Bytes';
		hexValueHeader.textContent = 'Hex Value';
		commentsHeader.textContent = 'Comments';
		dataTypeHeader.textContent = 'Data Type';

		opReturn.appendChild(subfieldHeaderDiv);
		opReturn.appendChild(maxBytesHeaderDiv);
		opReturn.appendChild(hexValueHeaderDiv);
		opReturn.appendChild(commentsHeaderDiv);
		opReturn.appendChild(dataTypeHeaderDiv);
		
		opReturn.appendChild(opReturnHeader);

		for (let j = 0; j < assets[i].fields.length) {
			const subfield = document.createElement('p');
			const maxBytes = document.createElement('p');
			const hexValue = document.createElement('p');
			const comments = document.createElement('p');
			const dataType = document.createElement('p');
			const subfieldDiv = document.createElement('div');
			const maxBytesDiv = document.createElement('div');
			const hexValueDiv = document.createElement('div');
			const commentsDiv = document.createElement('div');
			const dataTypeDiv = document.createElement('div');

			subfield.textContent = assets[i].assetType;
			maxBytes.textContent = assets[i].code;
			hexValue.textContent = assets[i].description;
			comments.textContent = assets[i].category;
			dataType.textContent = assets[i].legalClassification;

			subfieldDiv.appendChild(subfield);
			maxBytesDiv.appendChild(maxBytes);
			hexValueDiv.appendChild(hexValue);
			commentsDiv.appendChild(comments);
			dataTypeDiv.appendChild(dataType);

			op_return.appendChild(subfieldDiv);
			op_return.appendChild(maxBytesDiv);
			op_return.appendChild(hexValueDiv);
			op_return.appendChild(commentsDiv);
			op_return.appendChild(dataTypeDiv);
		}
	}
}
