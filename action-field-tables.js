const requestURL = 'TODO:GETFILE.json';
const request = new XMLHttpRequest();
      
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
      
request.onload = function () {
  	const spec = request.response;
  	showActionFieldTables(spec);
}

fuction showActionFieldTables (jsonObj) {
	const actionFieldTableContainer = document.querySelector('#action-field-table-container');
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
		const actionFieldTable = document.createElement('div');						  
		const protocolAction = document.createElement('p');
		const actionFieldTitle = document.createElement('p');
		const field = document.createElement('p');
		const opReturnLabel = document.createElement('p');
		const bytesLabel = document.createElement('p');
		const maxBytesLabel = document.createElement('p');
		const bytesExample = document.createElement('p');
		const maxBytesExample = document.createElement('p');
		const payloadOutputLabel = document.createElement('p');
		const lengthLabel = document.createElement('p');
		const payloadOutputExample = document.createElement('p');
		const lengthExample = document.createElement('p');
		const protocolActionDiv = document.createElement('div');
		const actionFieldTitleDiv = document.createElement('div');
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
		
		protocolAction.textContent = 'Protocol Action';
		opReturnTitle.textContent = 'OP_RETURN for Token Creation Txn (Asset Type: ${asset[i]})';
		field.textContent = 'Field';
		opReturnLabel.textContent = 'OP_RETURN Payload';
		bytesLabel.textContent = 'Bytes';
		maxBytesLabel.textContent = 'Max Bytes';
		bytesExample.textContent = '145';
		maxBytesExample.textContent = '153';
		payloadOutputLabel.textContent = 'Payload Output:';
		lengthLabel.textContent = 'Length:';
		lengthExample.textContent = '145';
		
		assetOperationDiv.appendChild('assetOperation');
		opReturnTitleDiv.appendChild('opReturnTitle');
		fieldDiv.appendChild('field');
		opReturnLabelDiv.appendChild('opReturnLabel');
		bytesLabelDiv.appendChild('bytesLabel');
		maxBytesLabelDiv.appendChild('maxBytesLabel');
		bytesExampleDiv.appendChild('bytesExample');
		maxBytesExampleDiv.appendChild('maxBytesExample');
		payloadOutputLabelDiv.appendChild('payloadOutputLabel');
		lengthLabelDiv.appendChild('lengthLabel');
		lengthExampleDiv.appendChild('lengthExample');
		
		assetCreationTable.className = 'asset-creation-table';
		assetOperationDiv.className = 'asset-operation-div heading';
		opReturnTitleDiv.className = 'op-return-title-div heading';
		fieldDiv.className = 'field-div heading';
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
		
		const assetCreationHeader = document.createElement('p');
		const subfieldHeader = document.createElement('p');
		const maxBytesHeader = document.createElement('p');
		const hexValueHeader = document.createElement('p');
		const asciiHeader = document.createElement('p');
		const commentsHeader = document.createElement('p');
		const dataTypeHeader = document.createElement('p');
		const assetCreationHeaderDiv = document.createElement('div');
		const subfieldHeaderDiv = document.createElement('div');
		const maxBytesHeaderDiv = document.createElement('div');
		const hexValueHeaderDiv = document.createElement('div');
		const asciiHeaderDiv = document.createElement('div');
		const commentsHeaderDiv = document.createElement('div');
		const dataTypeHeaderDiv = document.createElement('div');
		
		opReturn.className = 'asset-creation-op-return';
		assetCreationHeaderDiv.className = 'asset-creation-header-div';
		subfieldHeaderDiv.className = 'heading';
		maxBytesHeaderDiv.className = 'heading';
		commentsHeaderDiv.className = 'heading';
		dataTypeHeaderDiv.className = 'heading';
		
		assetCreationHeader.textContent = 'Asset Creation Header (See Asset Definition, Asset Creation and Asset Amendment Actions)';
		subfieldHeader.textContent = 'Subfield';
		maxBytesHeader.textContent = 'Max Bytes';
		hexValueHeader.textContent = 'Hex Value (Example Values)';
		asciiHeader.textContent = 'ASCII (Example Values)';
		commentsHeader.textContent = 'Comments';
		dataTypeHeader.textContent = 'Data Type';

		subfieldHeaderDiv.appendChild(subfieldHeader);
		maxBytesHeaderDiv.appendChild(maxBytesHeader);
		hexValueHeaderDiv.appendChild(hexValueHeader);
		asciiHeaderDiv.appendChild(asciiHeader);
		commentsHeaderDiv.appendChild(commentsHeader);
		dataTypeHeaderDiv.appendChild(dataTypeHeader);
		
		opReturn.appendChild(subfieldHeaderDiv);
		opReturn.appendChild(maxBytesHeaderDiv);
		opReturn.appendChild(hexValueHeaderDiv);
		opReturn.appendChild(asciiHeaderDiv);
		opReturn.appendChild(commentsHeaderDiv);
		opReturn.appendChild(dataTypeHeaderDiv);
		
		opReturn.appendChild(assetCreationHeader);
		
		const fullPayloadOutput = 0;

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
			
			fullPayloadOutput += hexValue.textContent;
			
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
		
		payloadOutputExample.textContent = fullPayloadOutput;
		payloadOutputExampleDiv.appendChild('payloadOutputExample');
		
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
		assetCreationTable.appendChild(payloadOutputExampleDiv);
		assetCreationTable.appendChild(lengthExampleDiv);
		assetCreationTableContainer.appendChild(assetCreationTable);
	}	
}
