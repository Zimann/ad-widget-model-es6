import { css } from 'emotion';

const applyStyle = () => {
    
    //DOM elements selection
    // --------------------------------------------------------------
    const widgetWrapper = document.getElementById('widget_wrapper');
    let universityRows = document.getElementsByClassName('university-row');
    let universityTitles =  document.getElementsByClassName('university-title');
    let universityImages =  document.getElementsByClassName('university-image');
    let moreInfoButton = document.getElementsByClassName('more-info-widget-button');
    let universityList = document.getElementsByClassName('university-list');
    let adText = document.getElementsByClassName('ad-specification');
    let rightSideContent = document.getElementsByClassName('right-side-content');
    let leftSideContent = document.getElementsByClassName('left-side-content');
    let leftTextWrapper = document.getElementsByClassName('left-text-wrapper');
    let cityDetail = document.getElementsByClassName('city-detail');
    // -----------------------------------------------------------------

    //define styles
    // ---------------------------------------------------------
    const bannerStyle = css`

        width:100%;
        text-align: -webkit-center;
        margin-top: 30px;  
        border: 1px solid #00000036;
        padding-top: 25px;
    `;

    const rowStyle = css`
    
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
                justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
                align-items: center;
        -webkit-box-shadow: 1px 1px black;
                box-shadow: 1px 1px black;
        padding-bottom: 10px;
        padding-top: 10px;
        width:50%;
        -webkit-box-shadow: 0px 1px 4px 2px rgba(194,180,194,1);
        box-shadow: 0px 1px 4px 2px rgba(194,180,194,1);
        margin-bottom: 24px;
        margin-left: auto;
        margin-right: auto;

        @media screen and (max-width: 950px) {
            width: 100%;
        }
    `;

    const leftSideContentStyle = css`
        display: -webkit-box; 
        display: -ms-flexbox; 
        display: flex; 
        -webkit-box-align: center; 
        -ms-flex-align: center; 
                align-items: center;
    `;

    const leftTextWrapperStyle = css`
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
    `

    const cityDetailStyle = css`
        text-align: left;
        width: 100%;
        margin: 0;
        padding-left: 10px;
        color: rgb(68, 68, 68);
        font-size: 13px;
        font-family: inherit;
        line-height: 1.5;
        text-rendering: optimizeLegibility;
    `

    const adStyle = css`

        display: inline-block;
        color: #333;
        padding: 5px;
        background-color: rgba(45, 127, 240, 0.1);
        margin-left: 15px;
        margin-top: -13px;
        font-size: 11px;
        font-weight: bold;
        line-height: 1;
        width: auto;
        min-width: 2em;
        text-align: center;
        text-transform: uppercase;
        font-family: inherit;
    `;

    const titleStyle = css`

        text-decoration: none;
        color: #2c7ef0;
        font-size: 16px;
        font-family: inherit;
        max-width: 111px;
        cursor: pointer;
        display: inline-block;
        white-space: wrap;
        white-space: nowrap;
        padding-left: 10px;

        @media screen and (max-width:960px){
            // margin-left: 10px;
            font-size: 14px;
        }
    `;

    const rightSideStyle = css`
        display: flex;
        justify-content: space-between;
        width: 45%;
    `

    const imageStyle = css`

        height: 40px;
        max-height: 40px;
        cursor: pointer;
        outline: none;
        border: none;
        padding: 0 10px 0 10px;
        @media screen and (max-width:960px){
            // padding: 0 10px 0 10px;
        }
    `;
    const buttonStyle = css`

        transition: all .1s linear;
        background-color:#0662a9;
        color: #fff;
        width: 100%;
        display: inline-block;
        max-width: 182px;
        text-transform: uppercase;
        padding: 10px 0;
        text-decoration: none;
        margin-right: 15px;
        font-size: 12px;
        font-family: inherit;
        font-weight: bold;
        cursor: pointer;
        text-align: center;

        @media screen and (max-width: 650px) {
            width: 25%;
            font-size: 9px;
        }

        &:hover {
            background-color:#044475;
        }
    `;
    // ---------------------------------------------------------

    //use the apply() method to transform DOM elements into array elements
    const arrayTransform = elementToTransform => {
        return Array.apply(null, elementToTransform);
    };

    //add styles function
    const addStyles = (item, style)=>{
            item.forEach(element=>{
                element.classList.add(style);
            });
    };
                
    //transform the selected nodes into arrays
    universityRows = arrayTransform(universityRows);
    universityTitles = arrayTransform(universityTitles);
    universityImages = arrayTransform(universityImages);
    moreInfoButton = arrayTransform(moreInfoButton);
    rightSideContent = arrayTransform(rightSideContent);
    adText = arrayTransform(adText);
    leftSideContent = arrayTransform(leftSideContent);
    leftTextWrapper = arrayTransform(leftTextWrapper);
    cityDetail = arrayTransform(cityDetail);



    //apply the pre-defined styles to our elements
    widgetWrapper.classList.add(bannerStyle);
    addStyles(rightSideContent, rightSideStyle);
    addStyles(universityImages, imageStyle);
    addStyles(universityRows, rowStyle);
    addStyles(universityTitles, titleStyle);
    addStyles(moreInfoButton, buttonStyle);
    addStyles(adText, adStyle);
    addStyles(leftSideContent, leftSideContentStyle);
    addStyles(leftTextWrapper, leftTextWrapperStyle);
    addStyles(cityDetail, cityDetailStyle);
};

export default applyStyle;
