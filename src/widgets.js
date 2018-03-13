
import  processedParameters from './components/process-src-params';

//IE polyfill
require('weakmap-polyfill');
var weakMap = new WeakMap();



const generateUniversityWidget = () => {   

    class USNGE_widget{

        constructor(){

            //array in which the names of the widgets are verified
            this.availableWidgets = ['university-banner.js'];

            //processedParameters imported from "process-src-params.js"
            this.sourceParameters = processedParameters(); 
           
            
            //polyfill for IE and EDGE for the 'Array.prototype.includes' method
            if (!Array.prototype.includes) {
                Object.defineProperty(Array.prototype, "includes", {
                  enumerable: false,
                  value: function(obj) {
                      var newArr = this.filter(function(el) {
                        return el == obj;
                      });
                      return newArr.length > 0;
                    }   
                });
              }

              if(this.availableWidgets.includes(`${this.sourceParameters[0]}${'.js'}`)) {
                this.createAsyncCallScript(this.sourceParameters[0], this.sourceParameters[1]);
            }
        }

         //create the script that will in turn create the specified widget based on the given name
        createAsyncCallScript(widget, count) {
			
            let currentScript = document.getElementById('usnge-main-widget-script');
            let currentScriptSrc = currentScript.getAttribute('src');
            let modifiedSource = currentScriptSrc.split('widgets.js');
            let contentScript = document.createElement('script');
            let documentHead = document.getElementsByName('body');
            currentScript.insertAdjacentElement('afterend', contentScript);
            contentScript.setAttribute('async' , 'true');                                                      
            contentScript.setAttribute('src', `${modifiedSource[0]}${widget}${'.js'}`);
            contentScript.setAttribute('widget-name', widget);
            contentScript.setAttribute('count', count);
            contentScript.setAttribute('id','usnge-markup-call-script');
        }
    }
 
    // instantiate our class
    const newWidget = new USNGE_widget();

};

//call the main function
generateUniversityWidget();










