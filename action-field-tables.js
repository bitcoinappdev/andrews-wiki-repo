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
	const protocol = jsonObj.protocol;
	
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
		const actionFieldsTitle = document.createElement('p');
		const field = document.createElement('p');
		const actionFieldsLabel = document.createElement('p');
		const maxBytesLabel = document.createElement('p');
		const maxBytesExample = document.createElement('p');
		const protocolActionDiv = document.createElement('div');
		const actionFieldsTitleDiv = document.createElement('div');
		const fieldDiv = document.createElement('div');
		const actionFieldsLabelDiv = document.createElement('div');
		const maxBytesLabelDiv = document.createElement('div');
		const maxBytesExampleDiv = document.createElement('div');
		
		protocolAction.textContent = 'Protocol Action';
		actionFieldsTitle.textContent = 'Action Fields for ${protocol[i]}';
		field.textContent = 'Field';
		actionFieldsLabel.textContent = 'Action Metadata';
		maxBytesLabel.textContent = 'Max Bytes';
		maxBytesExample.textContent = '153';
		
		protocolActionDiv.appendChild('assetOperation');
		actionFieldsTitleDiv.appendChild('opReturnTitle');
		fieldDiv.appendChild('field');
		actionFieldsLabelDiv.appendChild('opReturnLabel');
		maxBytesLabelDiv.appendChild('maxBytesLabel');
		maxBytesExampleDiv.appendChild('maxBytesExample');
		
		actionFieldTable.className = 'action-field-table';
		protocolActionDiv.className = 'protocol-action-div heading';
		actionFieldsTitleDiv.className = 'action-fields-title-div heading';
		fieldDiv.className = 'field-div heading';
		actionFieldsLabelDiv.className = 'action-fields-label-div';
		maxBytesLabelDiv.className = 'max-bytes-label-div';
		maxBytesExampleDiv.className = 'max-bytes-example-div';
		
		const actionFields = document.createElement('div');
		
		const fieldHeader = document.createElement('p');
		const fieldDescriptionHeader = document.createElement('p');
		const fieldDataTypeHeader = document.createElement('p');
		const fieldMaxBytesHeader = document.createElement('p');
		const fieldHeaderDiv = document.createElement('div');
		const fieldDescriptionHeaderDiv = document.createElement('div');
		const fieldDataTypeHeaderDiv = document.createElement('div');
		const fieldMaxBytesHeaderDiv = document.createElement('div');
		
		actionFields.className = 'action-fields';
		
		fieldHeaderDiv.className = 'heading';
		fieldDescriptionHeaderDiv.className = 'heading';
		fieldDataTypeHeaderDiv.className = 'heading';
		fieldMaxBytesHeaderDiv.className = 'heading';
		
		fieldHeader.textContent = 'Field';
		fieldDescriptionHeader.textContent = 'Description';
		fieldDataTypeHeader.textContent = 'Max Bytes';
		fieldMaxBytesHeader.textContent = 'Data Type';

		fieldHeaderDiv.appendChild(fieldHeader);
		fieldDescriptionHeaderDiv.appendChild(fieldDescriptionHeader);
		fieldDataTypeHeaderDiv.appendChild(fieldDataTypeHeader);
		fieldMaxBytesHeaderDiv.appendChild(fieldMaxBytesHeader);
		
		actionFields.appendChild(fieldHeaderDiv);
		actionFields.appendChild(fieldDescriptionHeaderDiv);
		actionFields.appendChild(fieldDataTypeHeaderDiv);
		actionFields.appendChild(fieldMaxBytesHeaderDiv);
		
		for (let j = 0; j < assets[i].fields.length) {
			const actionField = document.createElement('p');
			const fieldDescription = document.createElement('p');
			const fieldDataType = document.createElement('p');
			const fieldMaxBytes = document.createElement('p');
			const actionFieldDiv = document.createElement('div');
			const fieldDescriptionDiv = document.createElement('div');
			const fieldDataTypeDiv = document.createElement('div');
			const fieldMaxBytesDiv = document.createElement('div');
			
			actionField.textContent = protocol[i].fields[j].label;
			fieldDescription.textContent = protocol[i].fields[j].description;
			fieldDataType.textContent = protocol[i].fields[j].type;
			fieldMaxBytes.textContent = protocol[i].fields[j].size;
			
			actionFieldDiv.appendChild(actionField);
			fieldDescriptionDiv.appendChild(fieldDescription);
			fieldDataTypeDiv.appendChild(fieldDataType);
			fieldMaxBytes.appendChild(fieldMaxBytes);

			actionFields.appendChild(actionFieldDiv);
			actionFields.appendChild(fieldDescriptionDiv);
			actionFields.appendChild(fieldDataTypeDiv);
			actionFields.appendChild(fieldMaxBytes);
		}
		
		actionFieldTable.appendChild(protocolActionDiv);
		actionFieldTable.appendChild(actionFieldsTitleDiv);
		actionFieldTable.appendChild(fieldDiv);
		actionFieldTable.appendChild(actionFieldsLabel);
		actionFieldTable.appendChild(actionFields);
		actionFieldTable.appendChild(maxBytesLabelDiv);
		actionFieldTable.appendChild(maxBytesExampleDiv);
		actionFieldTableContainer.appendChild(actionFieldTable);
	}	
}
