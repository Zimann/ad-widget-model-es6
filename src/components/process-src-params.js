const processedParameters = () => {
    
     //IE conditions
     let currentScript = document.getElementById('usnge-main-widget-script');
    //  if (document._currentScript) {
    //     currentScript = document._currentScript;
    // } else {
    //     currentScript = document.currentScript;
    // }
    //declare variables
    let currentScriptSrc = currentScript.getAttribute('src'), sourceParameters, allSourceParameters = [], emptyArray = [];
    
    //first text split by the "?" sign
    sourceParameters = currentScriptSrc.split('?').slice(1);
    sourceParameters = sourceParameters.map(element=>{
        //second text spliy by the '=' sign
        return allSourceParameters.push(element.split('=').slice(1));
    });
    //concatenate all the parameter values into a single array
    allSourceParameters  = Array.prototype.concat.apply(emptyArray, allSourceParameters);

    //make the array with the parameter values available to the constructor function
    return allSourceParameters;
};


export default processedParameters;
