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
	for (let i = 0; i < assets.length; i++) {
		
		const assets = jsonObj.assets;
		const opReturn = document.createElement('div');
		const subfieldHeader = document.createElement('p');
		const maxBytesHeader = document.createElement('p');
		const hexValueHeader = document.createElement('p');
		const commentsHeader = document.createElement('p');
		const dataTypesHeader = document.createElement('p');
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

		for (let j = 0; j < assets[i].fields.length) {
		
		
		}
	}
      

      for (let i = 0; i < assets.length; i++) {  
          const assetType = document.createElement('p');
          const code = document.createElement('p');
          const description = document.createElement('p');
          const category = document.createElement('p');
          const legalClassification = document.createElement('p');
          const assetTypeDiv = document.createElement('div');
          const codeDiv = document.createElement('div');
          const descriptionDiv = document.createElement('div');
          const categoryDiv = document.createElement('div');
          const legalClassificationDiv = document.createElement('div');

          assetType.textContent = assets[i].assetType;
          code.textContent = assets[i].code;
          description.textContent = assets[i].description;
          category.textContent = assets[i].category;
          legalClassification.textContent = assets[i].legalClassification;
            
          assetTypeDiv.appendChild(assetType);
          codeDiv.appendChild(code);
          descriptionDiv.appendChild(description);
          categoryDiv.appendChild(category);
          legalClassificationDiv.appendChild(legalClassification);

          assetTypeRegister.appendChild(assetTypeDiv);
          assetTypeRegister.appendChild(codeDiv);
          assetTypeRegister.appendChild(descriptionDiv);
          assetTypeRegister.appendChild(categoryDiv);
          assetTypeRegister.appendChild(legalClassificationDiv);
      }
}
