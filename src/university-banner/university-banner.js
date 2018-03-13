import applyStyles from './apply-styles';
import apiEndpoints from './apiEndpoints';
import "babel-polyfill";
import axios from 'axios'
require('url-search-params-polyfill');

const universityBanner = () => {
    
    const currentScript = document.getElementById('usnge-markup-call-script');
    const count = currentScript.getAttribute('count');
    const widgetName = currentScript.getAttribute('widget-name');
    const widgetContainer = document.createElement('div');
    widgetContainer.setAttribute('data-widget', widgetName);
    widgetContainer.setAttribute('id', 'widget_wrapper');  
    let markUpContent;
    const createMarkup = () => {
        widgetContainer.innerHTML = markUpContent;
        const insertMarkup = () => {currentScript.insertAdjacentElement('afterend', widgetContainer);};
        insertMarkup();
    };

    // const data = new URLSearchParams();
    //           data.append('widgets', 'university-banner');
    //           data.append('page_url', 'http://' + window.location.hostname + window.location.pathname);


    // const apiCall = (() => {
    //     fetch('./university-info.json', {
    //         method: 'POST',
    // body: data
    //     }).then(res => res.json())
    //     .then(data =>  {
        
    //         data.forEach((element, index)=>{
      
    //                 if(index >= count){
                    //     return;
                    // }
                    // else if(index > 0) {
                    //     markUpContent += 
                    //     `<div class="university-row">
                    //             <div class="left-side-content">
                    //                 <span class="ad-specification">Ad</span>
                    //                 <div class="left-text-wrapper">
                    //                     <a target="_blank" href="${response.data[index].page_url}" class="university-title">${response.data[index].long_name}</a>
                    //                     <p class="city-detail">Minneapolis, MN & Online</p>
                    //                 </div>
                    //             </div>
                    //             <a target="_blank" href="${response.data[index].page_url}"><img class="university-image" src="${response.data[index].logo}"></a>
                    //             <a target="_blank" href="${response.data[index].page_url}" class="more-info-widget-button">More info</a>
                    //     </div>`; 
                    
                    // } else {
                    //     markUpContent = 
                    //     `<div class="university-row">
                    //             <div class="left-side-content">
                    //                 <span class="ad-specification">Ad</span>
                    //                 <div class="left-text-wrapper">
                    //                     <a target="_blank" href="${response.data[index].page_url}" class="university-title">${response.data[index].long_name}</a>
                    //                     <p class="city-detail">Minneapolis, MN & Online</p>
                    //                 </div>
                    //             </div>
                    //             <a target="_blank" href="${response.data[index].page_url}"><img class="university-image" src="${response.data[index].logo}"></a>
                    //             <a target="_blank" href="${response.data[index].page_url}" class="more-info-widget-button">More info</a>
                    //     </div>`;       
                    // }
                    //insert the markup in our 'div' container
    //                 createMarkup();                   
    //         }); 
    //         applyStyles();
    //     })
    //     .catch(err=>console.log(err));
    // });

    
    const apiCall = (() => {


        const data = new URLSearchParams();
              data.append('widgets', 'university-banner');
              data.append('page_url', 'http://' + window.location.hostname + window.location.pathname);

        axios({
            method: 'POST',
            url: apiEndpoints.api_url,
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            data: data
          }).then(response=>{
              console.log(response.data);
              //generate the actual MARKUP for the widget
            response.data.forEach((element, index)=>{
                    // stopping point for the loop to display only the number specified in the count variable
                    if(index  >= count){
                        return;
                    }
                    else if(index > 0) {
                        markUpContent += 
                        `<div class="university-row">
                                <div class="left-side-content">
                                    <span class="ad-specification">Ad</span>
                                    <div class="left-text-wrapper">
                                        <a target="_blank" href="${response.data[index].page_url}" class="university-title">${response.data[index].long_name}</a>
                                        <p class="city-detail">Minneapolis, MN & Online</p>
                                    </div>
                                </div>
                                <a target="_blank" href="${response.data[index].page_url}"><img class="university-image" src="${response.data[index].logo}"></a>
                                <a target="_blank" href="${response.data[index].page_url}" class="more-info-widget-button">More info</a>
                        </div>`; 
                    
                    } else {
                        markUpContent = 
                        `<div class="university-row">
                                <div class="left-side-content">
                                    <span class="ad-specification">Ad</span>
                                    <div class="left-text-wrapper">
                                        <a target="_blank" href="${response.data[index].page_url}" class="university-title">${response.data[index].long_name}</a>
                                        <p class="city-detail">Minneapolis, MN & Online</p>
                                    </div>
                                </div>
                                <a target="_blank" href="${response.data[index].page_url}"><img class="university-image" src="${response.data[index].logo}"></a>
                                <a target="_blank" href="${response.data[index].page_url}" class="more-info-widget-button">More info</a>
                        </div>`;       
                    }
                    //insert the markup in our 'div' container
                    createMarkup();                   
            }); 

            //imported from 'applyStyles'
            applyStyles();
          })
          .catch(function (error) {
            console.log(error);
          });
    });

    //initiate the api call
    apiCall();

};

universityBanner();
