const assetTypeRegister = document.querySelector('#asset-type-register');
const requestURL = 'TODO:GETFILE.json';
const request = new XMLHttpRequest();
      
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
      
request.onload = function () {
const spec = request.response;
        showAssetRegister(spec);
}

fuction showAssetRegister (jsonObj) {
  const assets = jsonObj.assets;
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
