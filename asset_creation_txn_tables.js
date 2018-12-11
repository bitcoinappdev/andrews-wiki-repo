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
	
	function ascii_to_hex(str) {
		const array = [];
		for (var n = 0, l = str.length; n < l; n ++) {
			let hex = Number(str.charCodeAt(n)).toString(16);
			array.push(hex);
		}
		return array.join('');
	}
	
	for (let i = 0; i < assets.length; i++) {
		const assetCreationTable = document.createElement('div');						  
		
		const assetOperation = document.createElement('p');
		const opReturnTitle = document.createElement('p');
		const field = document.createElement('p');
		const opReturnLabel = document.createElement('p');
		const bytesLabel = document.createElement('p');
		const maxBytesLabel = document.createElement('p');
		const bytesExample = document.createElement('p');
		const maxBytesExample = document.createElement('p');
		const payloadOutputLabel = document.createElement('p');
		const lengthLabel = document.createElement('p');
		const payloudOutputExample = document.createElement('p');
		const lengthExample = document.createElement('p');
		const assetOperationDiv = document.createElement('div');
		const opReturnTitleDiv = document.createElement('div');
		const fieldDiv = document.createElement('div');
		const opReturnLabelDiv = document.createElement('div');
		const bytesLabelDiv = document.createElement('div');
		const maxBytesLabelDiv = document.createElement('div');
		const bytesExampleDiv = document.createElement('div');
		const maxBytesExampleDiv = document.createElement('div');
		const payloadOutputLabelDiv = document.createElement('div');
		const lengthLabelDiv = document.createElement('div');
		const payloadOutputExampleDiv = document.createElement('div');
		const lengthExampleDiv = document.createElement('div');
		
		assetOperationDiv.textContent = 'Asset Operation';
		opReturnTitleDiv.textContent = 'OP_RETURN for Token Creation Txn (Asset Type: ${asset[i]})';
		fieldDiv.textContent = 'Field';
		opReturnLabelDiv.textContent = 'OP_RETURN Payload';
		bytesLabelDiv.textContent = 'Bytes';
		maxBytesLabelDiv.textContent = 'Max Bytes';
		bytesExampleDiv.textContent = '145';
		maxBytesExampleDiv.textContent = '153';
		payloadOutputLabelDiv.textContent = 'Payload Output:';
		lengthLabelDiv.textContent = 'Length:';
		payloadOutputExampleDiv.textContent = //TODO: Concatenate;
		lengthExampleDiv.textContent = '145';
		
		assetOperationDiv.className = 'asset-operation-div';
		opReturnTitleDiv.className = 'op-return-title-div';
		fieldDiv.className = 'field-div';
		opReturnLabelDiv.className = 'op-return-label-div';
		bytesLabelDiv.className = 'bytes-label-div';
		maxBytesLabelDiv.className = 'max-bytes-label-div';
		bytesExampleDiv.className = 'bytes-example-div';
		maxBytesExampleDiv.className = 'max-bytes-example-div';
		payloadOutputLabelDiv.className = 'payload-output-label-div';
		lengthLabelDiv.className = 'length-label-div';
		payloadOutputExampleDiv.className = 'payload-output-example-div';
		lengthExampleDiv.className = 'length-example-div';
		
		const opReturn = document.createElement('div');
		const assetCreationHeader = document.createElement('div');
		
		const subfieldHeader = document.createElement('p');
		const maxBytesHeader = document.createElement('p');
		const hexValueHeader = document.createElement('p');
		const asciiHeader = document.createElement('p');
		const commentsHeader = document.createElement('p');
		const dataTypeHeader = document.createElement('p');
		const subfieldHeaderDiv = document.createElement('div');
		const maxBytesHeaderDiv = document.createElement('div');
		const hexValueHeaderDiv = document.createElement('div');
		const asciiHeaderDiv = document.createElement('div');
		const commentsHeaderDiv = document.createElement('div');
		const dataTypeHeaderDiv = document.createElement('div');
		
		subfieldHeaderDiv.className = 'heading';
		maxBytesHeaderDiv.className = 'heading';
		hexValueHeaderDiv.className = 'heading';
		commentsHeaderDiv.className = 'heading';
		dataTypeHeaderDiv.className = 'heading';

		subfieldHeader.textContent = 'Subfield';
		maxBytesHeader.textContent = 'Max Bytes';
		hexValueHeader.textContent = 'Hex Value (Example Values)';
		asciiHeader.textContent = 'ASCII (Example Values)';
		commentsHeader.textContent = 'Comments';
		dataTypeHeader.textContent = 'Data Type';

		opReturn.appendChild(subfieldHeaderDiv);
		opReturn.appendChild(maxBytesHeaderDiv);
		opReturn.appendChild(hexValueHeaderDiv);
		opReturn.appendChild(asciiHeaderDiv);
		opReturn.appendChild(commentsHeaderDiv);
		opReturn.appendChild(dataTypeHeaderDiv);
		
		opReturn.appendChild(assetCreationHeader);

		for (let j = 0; j < assets[i].fields.length) {
			const subfield = document.createElement('p');
			const maxBytes = document.createElement('p');
			const hexValue = document.createElement('p');
			const ascii = document.createElement('p');
			const comments = document.createElement('p');
			const dataType = document.createElement('p');
			const subfieldDiv = document.createElement('div');
			const maxBytesDiv = document.createElement('div');
			const hexValueDiv = document.createElement('div');
			const asciiDiv = document.createElement('div');
			const commentsDiv = document.createElement('div');
			const dataTypeDiv = document.createElement('div');

			subfield.textContent = assets[i].fields[j].name;
			maxBytes.textContent = assets[i].fields[j].size;
			hexValue.textContent =  ascii_to_hex(assets[i].fields[j].example);
			ascii.textContent = assets[i].fields[j].example;
			comments.textContent = assets[i].fields[j].comments;
			dataType.textContent = assets[i].fields[j].dataType;

			subfieldDiv.appendChild(subfield);
			maxBytesDiv.appendChild(maxBytes);
			hexValueDiv.appendChild(hexValue);
			asciiDiv.appendChild(ascii);
			commentsDiv.appendChild(comments);
			dataTypeDiv.appendChild(dataType);

			opReturn.appendChild(subfieldDiv);
			opReturn.appendChild(maxBytesDiv);
			opReturn.appendChild(hexValueDiv);
			opReturn.appendChild(asciiDiv);
			opReturn.appendChild(commentsDiv);
			opReturn.appendChild(dataTypeDiv);
		}
		assetCreationTable.appendChild(assetOperationDiv);
		assetCreationTable.appendChild(opReturnTitleDiv);
		assetCreationTable.appendChild(fieldDiv);
		assetCreationTable.appendChild(opReturnLabel);
		assetCreationTable.appendChild(opReturn);
		assetCreationTable.appendChild(bytesLabelDiv);
		assetCreationTable.appendChild(maxBytesLabelDiv);
		assetCreationTable.appendChild(bytesExampleDiv);
		assetCreationTable.appendChild(maxBytesExampleDiv);
		assetCreationTable.appendChild(payloadOutputLabelDiv);
		assetCreationTable.appendChild(lengthLabelDiv);
		assetCreationTable.appendChild(payloudOutputExampleDiv);
		assetCreationTable.appendChild(lengthExampleDiv);
	}
}
