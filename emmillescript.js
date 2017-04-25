/* toggle to add or remove responsive class on menu */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className == "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}




/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#right').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
}).lazylinepainter('paint'); 
 });




/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "lineart": {
        "strokepath": [
            {
                "path": "M153.8,19.2c-3.5-2.1-7.1-4.1-10.6-6.2c-3.1-1.8-5.8-4.2-9.1-5.6c-6.9-3-14.7-1.9-22-1.9c-7.3,0-14.7-0.3-21.7,2.6    c-2.9,1.2-5.6,2.8-8.1,4.7c-2.5,1.9-5.3,3.1-7.7,5c-10.4,8-15.9,19.3-22.9,30c-1.7,2.6-2.7,5.5-4.4,8.1c-1.8,2.8-4,5.7-5.6,8.6    c-1.5,2.8-1.6,6-2.3,9c-0.9,3.5-2.8,6.5-3.8,9.9c-1.4,4.7-2,9-4.2,13.5c-1.6,3.2-3.6,6.4-4.4,10c-1.8,8.3-2.4,16.8-7.5,24    c-1.1,1.6,1.5,3.1,2.6,1.5c4.8-6.6,6.2-14.8,7.6-22.6c0.8-4.8,3-8.5,5.1-12.8c1.7-3.6,2.5-7.3,3.4-11.1c1-4,3.1-7.5,4.2-11.5    c0.5-2.1,0.6-4.6,1.3-6.6c0.7-2.3,2.4-4,3.7-5.9c4.1-6.1,7.5-12.6,10.9-19.1c3.8-7.2,9-13.2,14.6-19c3-3.1,6.4-4.8,9.8-7.2    c3.8-2.7,7.3-5.1,11.9-6.5c5.2-1.5,10.3-1.4,15.6-1.4c5.1,0,10.2-0.2,15.3,0c5.6,0.2,9.3,2.8,13.8,5.7c4.2,2.7,8.7,5,13,7.6    C153.9,22.8,155.4,20.2,153.8,19.2L153.8,19.2z",
                "duration": 1400
            },
            {
                "path": "M21,130.1c-2.6,5.7-5.5,10.9-6.9,17c-0.7,2.9-1.2,5.9-2.1,8.8c-0.7,2.6-1.8,4.4-1.8,7.2c0,5.3,0.4,10.4,4.8,14    c2.2,1.9,4.6,2.5,6.9,3.8c2.3,1.4,2.7,3.6,2.2,6.5c-0.3,1.9-0.8,3.8-1.3,5.6c-1.7,6.5-3.3,12.6-3.1,19.3c0.1,3.2,0.6,5.9,1.5,8.9    c1.2,3.6,1.6,6.9,2.1,10.7c0.7,5.3,4,8.5,8.3,11.3c3.1,2.1,6.3,4,9.2,6.4c1.8,1.5,3.2,3.3,5.4,4.1c0.6,0.2,1.4-0.1,1.7-0.7    c1.8-3,1.4-6.2,1.3-9.7c0-3.2-0.4-6.3,1.1-9.4c0.9-1.8,2.4-3.4,3.5-5c4.1-5.5,7.2-11.9,9.8-18.2c1.8-4.2,3.3-8.8,4.3-13.3    c1-4.3,0.5-8.7,0.5-13.1c-0.1-9.9,0-19.8,0-29.7c0-4.6,1.5-7.2,3.2-11.3c1.2-2.7,2.2-6.8,1.4-9.7c-0.5-1.9-1.9-2.6-3.6-3.5    c-2.3-1.1-3.9-1.8-5.7-3.8c-1.1-1.1-1.8-2.4-3.1-3.4c-3.7-3-6.5-4.9-7.5-9.8c-1.5-7.3,4.4-8.2,10-8.7c7.1-0.6,13.7-2.8,17.6-9.3    c1-1.7-1.6-3.2-2.6-1.5c-3,5.1-8.2,7.1-13.8,7.6c-3.4,0.3-6.7,0.1-9.8,1.7c-5.6,3-5.6,7.8-3.7,13.5c0.9,2.6,2.5,4.9,4.6,6.6    c1.8,1.5,3.6,2.6,5.2,4.3c1.1,1.2,1.9,2.5,3.2,3.5c1.1,0.8,2.3,1.2,3.6,1.7c2.7,1.2,2.9,2.4,2.6,5.2c-0.4,3.9-2.9,6.8-4,10.4    c-1.1,3.5-0.6,7.4-0.6,11c0,5.1,0,10.2,0,15.3c0,5.1,0,10.3,0.1,15.4c0.1,5.5-1.5,10.3-3.2,15.4c-2.5,7.6-6.5,15.7-11.2,22.1    c-2,2.7-4.2,5.3-4.9,8.6c-0.9,4.8,1.5,11.1-1.1,15.5c0.6-0.2,1.1-0.5,1.7-0.7c-2.1-0.7-3.9-3.2-5.7-4.6c-2.3-1.7-4.7-3.3-7.1-4.9    c-2.6-1.7-5.5-3.4-7-6.1c-1.7-3.2-0.8-7.1-1.7-10.5c-1.8-6.6-4-12.6-2.7-19.6c1.1-6,3.5-11.7,4.3-17.8c0.4-3,0.8-7.2-2.4-8.9    c-2.3-1.2-4.6-1.4-6.9-3c-4.1-3-4.4-6.4-4.6-11.1c-0.2-4.9,2.3-10.3,3.4-15.1c1.5-6.3,4.1-11.8,6.9-17.6    C24.4,129.9,21.8,128.4,21,130.1L21,130.1z",
                "duration": 1800
            },
            {
                "path": "M81.4,94.1c5.8-9.1,12.7-17.9,20.5-25.4c4.1-4,9-7,13.5-10.6c4.6-3.7,9.4-6.9,14.7-9.6c2.7-1.4,6.6-3.1,9.7-2    c3.4,1.1,1.7,4.4-0.5,6.4c-1.7,1.6-5.7,2.8-7.9,3.7c-2.3,0.9-4.3,2.4-6.4,3.7c-4.4,2.5-8.8,4.9-13.1,7.4    c-4.4,2.6-8.7,5.7-13.4,7.8c-4,1.8-8.7,2.3-12,5.4c-1.5,1.4-2.3,3.3-3.7,4.7c-1,1.1-2.6,1.9-3.3,3.3c-3.6,7.7,12,2.8,13.9,2.1    c5-1.9,9.4-6.1,14.6-7c4.6-0.7,8.7-1.7,12.5-4.5c4.7-3.4,8.8-7.7,14.1-10.1c2.1-1,3.9-1.3,5.8-2.6c2.4-1.7,4.9-3.4,7.4-4.9    c4.8-3,10-3.7,14.6-7.2c3.6-2.6,7.5-4.7,8.2-9.4c0.7-4.8,0.1-11.2-2.1-15.6c-2.3-4.7-7.7-5.9-11.3-9.3c-1.4-1.3-3.5,0.8-2.1,2.1    c3.7,3.5,9.4,4.7,11.3,9.8c1,2.7,1.2,5.5,1.3,8.3c0.1,4.3-1.3,7.2-4.8,9.8c-2,1.5-3.9,3.2-6.2,4.4c-1.9,0.9-3.9,1.1-5.8,1.8    c-4.7,1.9-8.6,5.5-13,7.9c-4.5,2.5-9.1,4.4-13.3,7.6c-4.6,3.5-8.1,7.1-13.9,8.2c-2.4,0.5-4.8,0.4-7,1.4c-2.2,1-4.1,2.5-6.2,3.7    c-2.3,1.3-4.7,2.4-7.1,3.2c-1.8,0.6-8.3,3.3-6.5-0.2c0.5-0.9,1.8-1.9,2.5-2.7c1.9-2.3,3.5-4.2,6.4-5.3c5.1-2.1,9.3-3.7,14-6.5    c4.1-2.4,8.2-4.7,12.3-7c4.3-2.4,8.7-5.9,13.3-7.8c3.4-1.3,7.4-2.4,9.9-5.3c1.7-1.9,4-5.5,3-8.2c-0.8-2-2.3-2.3-4.2-2.5    c-5.3-0.4-8.5,0.3-13.1,2.9c-5,2.8-9.4,5.5-13.8,9.1c-5,4-10.2,7.3-14.8,11.8c-7.7,7.6-14.5,16.4-20.3,25.4    C77.8,94.2,80.4,95.8,81.4,94.1L81.4,94.1z",
                "duration": 1800
            },
            {
                "path": "M159.3,23.5c9.4,0.9,11.7,8.5,15.9,15.2c3.8,6,10.1,10.4,14.7,15.7c11.8,13.8,7.5,34.5,7.4,51c-0.1,8.9-0.6,17.8,0.2,26.7    c0.3,3.8,1,7.6,1.8,11.4c1.1,4.9-0.4,8.4-2.1,13c-2.3,6.2-5.1,13.4-2.4,20.1c0.8,2,2.1,3.2,3.7,4.5c3,2.4,5.1,5,7.7,7.7    c1.3,1.4,3.5-0.7,2.1-2.1c-2.5-2.6-4.3-5.1-7.1-7.3c-4.5-3.5-5-7.9-4.1-13.5c1.2-7,6.7-13.5,5.6-20.7c-1.5-9.9-3.3-19.2-2.6-29.3    c0.5-8.9,0.9-17.9,0.9-26.8c0-8.1-0.2-15.4-2.1-23.3c-1.8-7.6-5.9-12.7-11.4-18.1c-2.7-2.7-5.2-5.4-7.7-8.3    c-2.6-3.1-4.2-6.6-6.3-10.1c-3-4.9-8.5-8.1-14.1-8.6C157.4,20.3,157.4,23.3,159.3,23.5L159.3,23.5z",
                "duration": 1300
            },
            {
                "path": "M200,189.8c-3.2,1.2-6.7,2.5-9,5.1c-3.1,3.5-5.8,7.7-7.8,11.8c-2.4,4.7-4.5,9.8-5.7,15c-1.1,4.7-0.4,10-0.4,14.9    c0,5.2,1.6,13.2-1,17.9c-2.4,4.5-7.8,6.1-10.7,10c-1,1.4-1.4,2.9-2.2,4.3c-1.2,2.2-6.1,7.4-6.1,1.5c0-4.8,1.6-9.6,2.7-14.2    c0.2-0.8-0.3-1.5-1-1.8c-6-2.3-3.4-9.8-2.5-14.4c0.8-4.3,1.5-8.6,2.4-12.9c0.4-2,2.2-5.4,1.5-7.4c-0.7-2.2-3.1-2.5-4.1-4.8    c-4.1-9.5,8.1-14.5,11.8-21.4c2.8-5.2,3.8-13.2,1.1-18.6c-0.9-1.7-3.5-0.2-2.6,1.5c2.3,4.5,1,12-1.5,16.2    c-2.3,3.8-6.4,6.3-9.1,9.8c-3.3,4.1-5.4,12.9-0.7,17.1c1,0.9,1.8,0.5,2,1.7c0.3,1.7-1.2,4.9-1.5,6.7c-0.7,4.5-1.5,9.2-2.6,13.7    c-0.8,3.3-1.3,6.9-0.8,10.3c0.6,3.7,2.7,4.2,5.9,5.4c-0.3-0.6-0.7-1.2-1-1.8c-0.6,2.3-1.7,3.7-1.9,6.2c-0.2,3.2-0.8,6.2-1.2,9.4    c-0.3,2.7,0.3,5.3,3.2,5.5c3,0.2,6.6-1.5,8-4.1c0.8-1.6,1.2-3.4,2.1-5c1.3-2.3,3.2-3.4,5.3-5c1.7-1.3,3.4-2.7,4.8-4.4    c3.2-3.9,2.9-7.8,2.9-12.7c0-6.3-0.3-12.7-0.1-19.1c0.2-6.9,3.6-14.3,6.9-20.3c1.4-2.6,3.2-5,4.9-7.3c2-2.7,5.7-4.8,8.9-5.9    C202.6,192.1,201.8,189.2,200,189.8L200,189.8z",
                "duration": 1800
            },
            {
                "path": "M164.7,55.1c1.7,2.2,3.4,4.7,4.5,7.3c0.8,1.8,1.3,3.6,2.5,5.2c1.7,2.3,4,3.5,5.4,6.1c1.1,2,2,4.5,2.6,6.7    c1.7,5.5,1.3,11.1,2.2,16.7c0.3,2,0.6,4.2,1.4,6.1c1,2.4,2.7,4.3,3.6,6.9c2.1,6.4,0.2,11.1-2,17c-2.2,5.9-3.5,11.9-5.3,17.9    c-1.7,5.9-1.4,12.4-6,17c-3.3,3.2-6.6,6.2-9.8,9.5c-1.4,1.4,0.8,3.5,2.1,2.1c3.6-3.6,7.5-6.8,11-10.5c3.6-3.7,3.6-9,4.7-13.8    c1.5-6.7,3.4-13.2,5.7-19.7c2-5.6,4.4-10.1,3.5-16.3c-0.8-5.3-4.2-9-5.4-14c-1.4-6-1-12.2-2.5-18.3c-1-4.1-2.6-9.5-5.7-12.4    c-4.6-4.2-6.2-10.2-10-15.2C166.2,52,163.6,53.5,164.7,55.1L164.7,55.1z",
                "duration": 1000
            },
            {
                "path": "M67.7,147c-0.1,3.3,1.1,5.6,1.8,8.7c0.8,3.4,1.3,6.2,3.2,9.2c3,4.6,8.1,7.7,12,11.4c4.3,4,8.5,8.1,13.1,11.9    c5,4.1,8.5,8.2,14.6,10.5c6.8,2.6,12.4,5.2,19.9,4.3c6-0.7,12.8-1.9,17.3-6.3c2.4-2.4,3.9-5.5,5.8-8.2c2.9-4,5.5-4.9,9.5-7.2    c2.4-1.4,5.1-4.1,3.5-6.9c-0.9-1.7-3.5-0.2-2.6,1.5c1.1,1.9-4.5,3.2-5.1,3.5c-1.8,0.9-3.7,2.5-5.1,3.9c-4,3.9-5.4,9.8-10.2,12.9    c-5.4,3.5-14.3,4.9-20.5,3.8c-3.3-0.6-6.3-2-9.4-3.3c-2.1-0.9-4.6-1.4-6.5-2.6c-2.4-1.5-4.5-4.1-6.6-5.9c-2-1.7-4.1-3.4-6-5.2    c-3.1-2.9-6.1-5.9-9.2-8.8c-3.4-3.3-8-6-11-9.5c-2.2-2.6-3.1-5.6-3.7-8.9c-0.5-2.8-1.9-5.9-1.8-8.7    C70.7,145.1,67.7,145.1,67.7,147L67.7,147z",
                "duration": 1300
            },
            {
                "path": "M145.5,106.2c-3.5,0.9-5.3,4-7.4,6.7c-2.3,3-3.1,6.2-3.1,9.9c0,4.6,1.8,7.3,3.6,11.4c1.4,3.3,2.7,6.6,1.3,9.9    c-1.2,2.8-3.2,3.9-6.3,3.4c-2.6-0.4-4.6-1.9-5-4.7c0-0.3-0.4-0.6-0.7-0.6c-2.5,0.2-5.7,3.1-8,0.4c-1.2-1.5-1.3-4.3-1.6-6.1    c-0.2-0.9-1.6-0.5-1.4,0.4c0.9,5.5,2.1,9.6,8.2,8.2c2.5-0.6,1.4-1,2.6,0.9c0.6,1,0.8,1.7,1.8,2.3c2,1.2,6,1,8.1,0.4    c7.1-2.2,5.1-8.6,2.9-14.1c-1.8-4.6-4.5-8.3-3.9-13.5c0.5-4.4,4.8-12.1,9.3-13.3C146.9,107.4,146.5,106,145.5,106.2L145.5,106.2z",
                "duration": 1000
            },
            {
                "path": "M104.1,91.5c4.3-0.2,8.5-0.5,12.8-0.5c1.5,0,12.4,0.3,9.6,4c-0.7,0.9-2.6,0.3-3.6,0.2c-3.5-0.2-5.2-0.5-8.3-2.3    c-2.5-1.4-3.9-1.8-6.8-1.9c-1,0-1,1.5,0,1.5c4,0,5.6,2,8.8,3.2c2.2,0.9,4.4,0.8,6.8,1c2,0.1,4.9,0.9,5.2-1.7c0.3-3-2.4-4.5-4.7-5    c-6.4-1.4-13.2-0.3-19.7,0C103.1,90.1,103.1,91.6,104.1,91.5L104.1,91.5z",
                "duration": 600
            },
            {
                "path": "M160.5,104.5c1.6-3.7,7.3-2.7,10.6-2.5c1.3,0.1,6.5,0,7,1c1.7,3.8-3.4,2.7-4.9,2.6c-3.4-0.2-6.7-0.7-10.1-1    c-2.2-0.1-3.9-0.9-6-1.1c-1-0.1-1,1.4,0,1.5c0.9,0.1,1.6,0.8,2.5,1c1.4,0.3,3,0.2,4.5,0.3c2.8,0.3,5.5,0.6,8.3,0.8    c1.9,0.1,10.2,1.4,9.6-2.7c-0.6-4-8.9-3.7-11.6-3.9c-5-0.3-9.3-1.3-11.3,3.6C158.7,105,160.1,105.4,160.5,104.5L160.5,104.5z",
                "duration": 600
            },
            {
                "path": "M102.2,105.6c0.2-1.3,3.2-2.3,4.2-2.6c-0.3,0.1,3.2-0.4,3-0.4c2.4-0.3,5.2-0.5,7.5,0.3c1.6,0.5,3.4,1.4,3.9,2.9    c0.9,2.5-0.2,4.2-2.7,4.6c-1.5,0.3-3.4-0.1-4.9-0.1c-1.9,0-4.2,0.3-6.2,0c-3.5-0.7-3.4-4.4-5.6-6.5c-0.7-0.7-1.8,0.4-1.1,1.1    c1.5,1.5,1.8,4.3,3.4,5.8c1.8,1.7,4.7,1.2,6.9,1.2c3.9,0,11.7,2.2,11.9-3.6c0.2-4.7-2.6-6.8-7-7.4c-3.5-0.4-7.8,0.1-11.2,0.7    c-2.1,0.4-3.3,1.4-3.7,3.6C100.6,106.1,102,106.5,102.2,105.6L102.2,105.6z",
                "duration": 800
            },
            {
                "path": "M149.2,114.3c2.8-1.4,6.9-1.2,10-1.4c2.4-0.2,5.3-0.5,7.3,1.2c1.3,1,1.7,2.2,1.2,3.8c-0.7,0.2-1.5,0.2-2.2,0.2    c-2.8,0.1-5.6,0-8.4,0.1c-3.8,0.2-5.1-2.5-7.3-5.1c-0.6-0.7-1.7,0.3-1.1,1.1c1.2,1.4,2.2,3.9,3.8,5c1.5,1,3.6,0.6,5.2,0.5    c3.5-0.1,8.9,1.1,12-1.1c0.3-0.2,0.4-0.5,0.3-0.8c-1.1-4-3.6-6.4-7.8-6.4c-4.3,0.1-10-0.3-13.9,1.7    C147.6,113.5,148.4,114.8,149.2,114.3L149.2,114.3z",
                "duration": 800
            },
            {
                "path": "M161.3,113.8c1.5-0.1,4.2,2.3,1.8,3.4c-0.4,0.2-0.9,0-1.3,0.2c-0.4,0.1-0.6,0.3-1,0.5c-1.2,0.7-3.2,0.8-3.9-0.6    c-0.7-1.6,0.3-2.6,1.1-3.8c0.5-0.8-0.8-1.6-1.3-0.8c-0.6,1-1.4,1.7-1.5,3c-0.1,1.1,0.2,2.3,0.9,3.2c1.1,1.5,4,1.1,5.4,0.4    c0.9-0.5,2-0.4,2.8-1.1c0.8-0.6,1.3-1.5,1.2-2.5c-0.1-2.1-2.2-3.5-4.2-3.4C160.4,112.3,160.4,113.8,161.3,113.8L161.3,113.8z",
                "duration": 800
            },
            {
                "path": "M110.3,102.4c1.1,0,2-0.5,2.3,1c0.1,0.6,0,1.2,0.1,1.8c0.3,1.6,0.7,3.4-1.3,3.9c-0.7,0.2-1.4,0.2-2.2,0.1    c-1.2-0.2-1.8-0.7-1.9-2c-0.1-1.6,0.1-4.2,2.3-4.2c1,0,1-1.5,0-1.5c-1.1,0-2.5,0.8-3.1,1.6c-0.8,1-0.6,2.4-0.6,3.6    c0,1.3,0.1,2.5,1.2,3.3c1.1,0.7,2.6,0.8,3.8,0.7c2.9-0.3,3.9-2,3.4-4.8c-0.1-0.9-0.3-1.6-0.3-2.5c0-0.7-0.1-1.3-0.5-1.8    c-0.8-1-2.1-0.7-3.2-0.7C109.4,101,109.4,102.5,110.3,102.4L110.3,102.4z",
                "duration": 800
            },
            {
                "path": "M102.8,156.5c3.5,3,7.8,4.4,12.2,5.3c4.9,1,10.1,2.2,15.2,2.4c4.9,0.2,11.1,0.7,15.9-0.1c2.8-0.5,6-2.4,6.9-5.2    c0.3-0.9-1.2-1.3-1.4-0.4c-2.1,6.5-18.4,4.4-23.7,3.8c-7.7-0.8-17.8-1.4-24-6.8C103.1,154.8,102.1,155.9,102.8,156.5L102.8,156.5z    ",
                "duration": 600
            },
            {
                "path": "M151.9,158c0,3.7-1,4.7-3.7,6.7c-2,1.4-4.1,2.8-6.3,3.8c-6.1,2.7-13.9,1.6-20.2-0.1c-2.4-0.7-4.4-1-6.2-2.7    c-1.6-1.4-2.4-3.1-3.8-4.7c-1.7-2-3.8-3.6-6.5-3.7c-1-0.1-1,1.4,0,1.5c5.1,0.3,6.4,6.5,9.8,9c4.7,3.5,13.1,3.7,18.6,3.7    c5.9,0,9.6-1.5,14.5-5c4.2-2.9,5.2-3.3,5.2-8.5C153.4,157,151.9,157,151.9,158L151.9,158z",
                "duration": 600
            },
            {
                "path": "M132,17.9c-9.7-1.1-18.3-1.9-27,3.5c-3.7,2.3-6.7,5.6-10.1,8.3c-3.9,3.2-7.7,6-11.1,9.8C77.9,46,72.6,54.1,68.1,61.7    c-2.5,4.1-4.7,8.5-7.1,12.7c-2.5,4.6-5.9,7.8-9,11.9c-0.6,0.8,0.7,1.5,1.3,0.8c2.5-3.4,5.6-5.9,7.7-9.6c2.3-4,4.5-8,6.7-12    c4-7.5,9.5-14.1,14.2-21.2c4.9-7.3,12.8-12.6,19.5-18.3c4.1-3.5,9.1-6.4,14.5-7.4c5.2-0.9,10.8,0.2,16,0.8    C133,19.5,133,18,132,17.9L132,17.9z",
                "duration": 800
            },
            {
                "path": "M113.6,33c-5.6,2.7-10.5,5.5-14.7,10.3c-4.5,5.1-7.8,11.4-11.2,17.3C84,67.1,80.8,74.8,75.4,80    c-5.6,5.4-13.3,8.3-20.1,11.7c-0.9,0.4-0.1,1.7,0.8,1.3c6.1-3.1,12.6-5.6,18-9.9c5.2-4.1,8.1-9.6,11.3-15.3    C89,61.4,92.5,55,96.6,48.9c4.7-7,10.4-11,17.8-14.6C115.2,33.9,114.5,32.6,113.6,33L113.6,33z",
                "duration": 600
            },
            {
                "path": "M86.5,23.9c-2.3,0.6-4,3-5.8,4.5c-2.6,2.3-5.5,4.1-8.2,6.3c-2.9,2.4-5.3,5.2-8,7.8c-2.3,2.1-4.9,3.8-7.3,5.9    c-4.5,4.1-6.8,7.8-8.1,13.7c-0.6,2.8-0.9,5.7-1.1,8.5c-0.2,3.3,0.4,7.4-1.3,10.3c-0.5,0.8,0.8,1.6,1.3,0.8    c2.1-3.5,1.3-8.5,1.6-12.4c0.6-7.7,2.4-13.9,8.1-19.3c2.1-2,4.6-3.5,6.8-5.4c2.4-2.1,4.5-4.5,6.7-6.6c2.4-2.3,5.2-4.1,7.8-6.1    c2.2-1.7,5.2-5.7,7.9-6.4C87.8,25.1,87.4,23.7,86.5,23.9L86.5,23.9z",
                "duration": 800
            },
            {
                "path": "M40.4,107.6c-7.6,11-13.1,21.3-14.9,34.7c-1.9,13.8-1.5,27.8-1.5,41.7c0,1,1.5,1,1.5,0c0-13.5-0.3-27.1,1.4-40.5    c1.7-13.5,7.2-24.1,14.9-35.1C42.2,107.6,40.9,106.8,40.4,107.6L40.4,107.6z",
                "duration": 600
            },
            {
                "path": "M39.9,125.1c-1.4,4-2.8,7.5-3,11.7c-0.2,4-0.3,7.9-0.4,11.9c-0.3,8.8-0.3,17.6,0,26.5c0.3,9.3,1,18.4,1.6,27.6    c0.5,8,1.5,18.5-1.5,26c-0.4,0.9,1.1,1.3,1.4,0.4c2.8-6.9,1.9-15.8,1.7-23.1c-0.2-9-1.4-18.1-1.7-27.1c-0.3-8.9-0.5-17.8-0.2-26.6    c0.1-4.1,0.2-8.2,0.4-12.4c0.3-5.3,1.4-9.5,3.1-14.5C41.7,124.6,40.3,124.2,39.9,125.1L39.9,125.1z",
                "duration": 600
            },
            {
                "path": "M54.9,130.3c0.1,11.5,3,22.7,2.6,34.3c-0.2,5.8-0.7,11.2-4,16.2c-3.5,5-8.6,7.6-13.9,10.2c-0.9,0.4-0.1,1.7,0.8,1.3    c9-4.4,17.2-10.2,18.2-20.9c1.3-14-2.1-27.2-2.1-41C56.4,129.4,54.9,129.4,54.9,130.3L54.9,130.3z",
                "duration": 600
            },
            {
                "path": "M46.8,80.5c-3.6,3.4-4.3,7.7-4.3,12.5c0,4.1-0.2,6.7-1.5,10.6c-0.5,1.7-0.3,3.7-1,5.3c-0.4,0.9,0.9,1.6,1.3,0.8    c1.3-3,2.3-7.3,2.7-10.6c0.8-6.3-1.5-12.6,3.9-17.6C48.6,80.9,47.5,79.8,46.8,80.5L46.8,80.5z",
                "duration": 600
            },
            {
                "path": "M52.5,85.1c-4.5,3.5-4.6,9.1-4.9,14.4c-0.1,1.7,0.1,3.4,0,5.2c-0.2,3.5-1.8,6.1-3.2,9.1c-0.6,1.2-1.1,2.3-1.5,3.6    c-0.7,1.9-0.7,5.1-2.5,6.4c-0.8,0.6,0,1.9,0.8,1.3c1.6-1.2,1.7-1.9,2.2-3.8c1.1-4.4,3.7-8.1,5.1-12.4c2.4-7.2-1.8-17.2,5.2-22.6    C54.3,85.6,53.2,84.6,52.5,85.1L52.5,85.1z",
                "duration": 600
            },
            {
                "path": "M155.4,36c-3.3-1.7-6.5-1.9-10.2-2.4c-4-0.5-7-3-10.9-3.9c-8.9-2-18.5-0.7-27.6-0.5c-1,0-1,1.5,0,1.5    c8.7-0.2,18.6-1.7,27.2,0.5c3.4,0.9,6.1,3,9.6,3.7c3.8,0.7,7.7,0.5,11.2,2.4C155.5,37.8,156.2,36.5,155.4,36L155.4,36z",
                "duration": 600
            },
            {
                "path": "M156,45.6c-1.9,3.3-2.5,5.9-6.5,7.8c-2.5,1.2-5.3,1.8-7.9,3c-4.7,2.1-8.8,5.8-13,8.7c-5.2,3.6-10.9,2.7-16.3,5.3    c-2.2,1.1-3.9,2.8-5.9,4.2c-2.8,2-5.6,3.6-8.7,5c-0.9,0.4-0.1,1.7,0.8,1.3c3.1-1.4,5.9-3.1,8.7-5c2.7-1.9,5.1-4.3,8.5-5.2    c3.1-0.8,6.1-0.7,9.2-1.9c2.1-0.8,3.7-2,5.5-3.3c2.6-1.8,5.3-3.7,7.9-5.6c3.2-2.2,6.7-3.3,10.3-4.6c5.4-2,6-4.4,8.8-9.1    C157.8,45.5,156.5,44.8,156,45.6L156,45.6z",
                "duration": 800
            },
            {
                "path": "M178.3,56.3c9.8,6.8,4.2,19.9,7.3,29.5c1,3.3,3,4.6,5,7.3c2.7,3.7,4.2,9.8,4.4,14.3c0.1,1,1.6,1,1.5,0    c-0.3-4.5-1.7-9.2-3.6-13.2c-0.7-1.3-1.1-1.9-2.2-3.1c-2.9-3.2-4.3-6.4-4.6-10.7c-0.6-9.2,1.8-19.2-7-25.3    C178.2,54.5,177.5,55.8,178.3,56.3L178.3,56.3z",
                "duration": 600
            },
            {
                "path": "M190,67.7c3.3,6.9,5.6,12.8,6,20.6c0.4,6.6,0.5,13.4,0.5,20c0,1,1.5,1,1.5,0c0-7.8,0.1-15.9-0.8-23.7    c-0.7-6.6-3.1-11.8-6-17.6C190.9,66.1,189.6,66.8,190,67.7L190,67.7z",
                "duration": 600
            },
            {
                "path": "M185.2,143.7c0,9.5,0,18.9,0,28.4c0,4.9,0.3,9.9-0.1,14.7c-0.4,5-2.3,9.5-3.5,14.3c-1.2,4.4-2.2,8.4-4.7,12.2    c-2.6,4-5.9,8-8.9,11.9c-4.3,5.7-6.3,11.1-8.1,18c-0.2,0.9,1.2,1.3,1.4,0.4c1.1-4.4,2-8.5,4.3-12.5c2.1-3.7,5-7.1,7.5-10.5    c2.2-3,4.7-5.8,6.5-9.1c2-3.7,2.7-7.7,3.8-11.7c1.2-4.3,2.7-8.4,3-12.9c0.3-4.2,0.1-8.6,0.1-12.8c0-10.1,0-20.2,0-30.3    C186.8,142.7,185.2,142.7,185.2,143.7L185.2,143.7z",
                "duration": 800
            },
            {
                "path": "M172.6,195c0,4.9,0,10.7-3,14.9c-2.1,2.9-4.1,5.4-5.8,8.8c-0.4,0.9,0.9,1.6,1.3,0.8c2-3.9,5.5-7.1,7.2-11.1    c1.8-4.3,1.9-8.8,1.9-13.3C174.1,194,172.6,194,172.6,195L172.6,195z",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 216,
            "height": 279
        }
    }
};

/*
 * Lazy Line Painter
 * SVG Stroke animation.
 *
 * https://github.com/camoconnell/lazy-line-painter
 * http://www.camoconnell.com
 *
 * Copyright © 2013-2015 Cam O'Connell
 * All rights reserved.
 *
 * Licensed under the GNU license.
 *
 */


/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

(function(h){var r={init:function(a){return this.each(function(){var c=h(this),b=c.data("lazyLinePainter");c.addClass("lazylinepainter");if(!b){var b=h.extend({strokeWidth:2,strokeDash:null,strokeColor:"#000",strokeOverColor:null,strokeCap:"round",strokeJoin:"round",strokeOpacity:1,onComplete:null,onUpdate:null,onStart:null,onStrokeStart:null,onStrokeComplete:null,delay:0,ease:null,overrideKey:null,drawSequential:!0,speedMultiplier:1,reverse:!1,paused:!1,progress:0,longestDuration:0,playhead:0},a),
d=b.overrideKey?b.overrideKey:c.attr("id").replace("#","");b.width=b.svgData[d].dimensions.width;b.height=b.svgData[d].dimensions.height;b.paths=h.extend(!0,[],b.svgData[d].strokepath);var d="0 0 "+b.width+" "+b.height,f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttributeNS(null,"viewBox",d);f.setAttribute("xmlns","http://www.w3.org/2000/svg");d=h(f);b.svg=d;for(var d=b.delay,e=b.paths,g=f=0;g<e.length;g++)f+=e[g].duration+(e[g].delay||0);for(var e=b.delay,g=b.paths,k=0,l=
0;l<g.length;l++){var m=g[l].delay||0;g[l].duration+m>k&&(k=g[l].duration+m)}b.totalDuration=b.drawSequential?d+f:e+k;d=b.reverse?b.totalDuration:0;for(f=0;f<b.paths.length;f++){e=b.paths[f];e.progress=0;e.index=f;var g=e,k=b,l=f,m=document.createElementNS("http://www.w3.org/2000/svg","path"),p=h(m);k.svg.append(p);p.attr(x(k,k.paths[l]));g.el=m;e.length=Math.ceil(e.el.getTotalLength());e.delay=e.delay||0;e.duration=e.duration;g=e;k=e.el;l=e.length;m=[];for(p=0;p<l;p++){var n=k.getPointAtLength(p);
m.push({x:n.x,y:n.y})}g.positions=m;e.ease=e.ease||null;g=e.el.style;k=b;l=e.length;m=void 0;m=e.strokeDash?t(e.strokeDash,l):k.strokeDash?t(k.strokeDash,l):l+" "+l;g.strokeDasharray=m;e.el.style.strokeDashoffset=e.length;e.el.style.display="block";e.el.getBoundingClientRect();e.onStrokeStart=e.onStrokeStart||null;e.onStrokeComplete=e.onStrokeComplete||null;e.onStrokeStartDone=!1;e.onStrokeCompleteDone=!1;e.onStrokeUpdate=e.onStrokeUpdate||null;k=e.duration/b.totalDuration;d=b.reverse?d-e.duration:
b.drawSequential?b.playhead+b.delay:e.delay+b.delay;g=d/b.totalDuration;e.startTime=d;e.startProgress=g;e.durationProgress=k;b.playhead+=e.duration+e.delay}b.totalDuration*=b.speedMultiplier;c.append(b.svg);c.data("lazyLinePainter",b);c.lazylinepainter("resize")}})},paint:function(){return this.each(function(){var a=h(this),c=a.data("lazyLinePainter");a.lazylinepainter("erase");c.rAF=requestAnimationFrame(function(a){q(a,c)});if(null!==c.onStart)c.onStart()})},pause:function(){return this.each(function(){var a=
h(this).data("lazyLinePainter");a.paused||(a.paused=!0,cancelAnimationFrame(a.rAF))})},resume:function(){return this.each(function(){var a=h(this).data("lazyLinePainter");a.paused&&(requestAnimationFrame(function(c){y(c,a)}),a.paused=!1)})},erase:function(){return this.each(function(){var a=h(this).data("lazyLinePainter");a.startTime=null;a.elapsedTime=null;cancelAnimationFrame(a.rAF);a.onStrokeCompleteDone=!1;a.paused=!1;for(var c=0;c<a.paths.length;c++){var b=a.paths[c];b.el.style.strokeDashoffset=
b.length;b.onStrokeCompleteDone=!1;b.onStrokeStartDone=!1}})},destroy:function(){return this.each(function(){var a=h(this);a.removeData("lazyLinePainter");a.empty();a.removeClass("lazylinepainter")})},set:function(a){return this.each(function(){var c=h(this).data("lazyLinePainter");c.progress=a;u(c)})},get:function(){return h(this).data("lazyLinePainter")},resize:function(){this.each(function(){var a=h(this),c=a.data("lazyLinePainter");c.offset=a.offset();for(a=0;a<c.paths.length;a++)v(c,c.paths[a])})}},
y=function(a,c){c.startTime=a-c.elapsedTime;requestAnimationFrame(function(a){q(a,c)})},q=function(a,c){c.startTime||(c.startTime=a);if(null!==c.onUpdate)c.onUpdate();c.elapsedTime=a-c.startTime;c.progress=w(c.totalDuration,c.startTime,c.elapsedTime,c.ease);u(c);if(1>c.progress)c.rAF=requestAnimationFrame(function(a){q(a,c)});else if(null!==c.onComplete)c.onComplete()},u=function(a){for(var c=0;c<a.paths.length;c++){var b=a.paths[c],d=void 0;a.progress>b.startProgress&&a.progress<b.startProgress+
b.durationProgress?d=(a.progress-b.startProgress)/b.durationProgress:a.progress>=b.startProgress+b.durationProgress?d=1:a.progress<=b.startProgress&&(d=0);b.progress=w(1,0,d,b.ease);var d=b,f=d.progress*d.length;d.el.style.strokeDashoffset=a.reverse||d.reverse?-d.length+f:d.length-f;v(a,b);d=a;if(1===b.progress)d.onStrokeComplete&&!b.onStrokeCompleteDone&&(d.onStrokeComplete(b),b.onStrokeComplete||(b.onStrokeCompleteDone=!0)),b.onStrokeComplete&&!b.onStrokeCompleteDone&&(b.onStrokeComplete(b),b.onStrokeCompleteDone=
!0);else if(1E-5<b.progress&&(d.onStrokeStart&&!b.onStrokeStartDone&&(d.onStrokeStart(b),b.onStrokeStart||(b.onStrokeStartDone=!0)),b.onStrokeStart&&!b.onStrokeStartDone&&(b.onStrokeStart(b),b.onStrokeStartDone=!0),b.onStrokeUpdate))b.onStrokeUpdate(b)}},w=function(a,c,b,d){var f;0<b&&b<a?f=d?n[d](b,0,1,a):b/a:b>=a?f=1:b<=c&&(f=0);return f},v=function(a,c){var b=Math.round(c.progress*(c.length-1)),b=c.positions[b];c.position={x:a.offset.left+b.x,y:a.offset.top+b.y}},x=function(a,c){return{d:c.path,
stroke:c.strokeColor?c.strokeColor:a.strokeColor,"fill-opacity":0,"stroke-opacity":c.strokeOpacity?c.strokeOpacity:a.strokeOpacity,"stroke-width":c.strokeWidth?c.strokeWidth:a.strokeWidth,"stroke-linecap":c.strokeCap?c.strokeCap:a.strokeCap,"stroke-linejoin":c.strokeJoin?c.strokeJoin:a.strokeJoin}},t=function(a,c){for(var b="",d=a.split(","),f=0,e=d.length-1;0<=e;e--)f+=Number(d[e]);d=Math.floor(c/f);for(e=d-1;0<=e;e--)b+=a+", ";return(b+(c-d*f)+", "+c).split(",").join("px,")+"px"};h.fn.lazylinepainter=
function(a){if(r[a])return r[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)console.log("opps - issue finding method");else return r.init.apply(this,arguments)};var n={easeLinear:function(a,c,b,d){return b*a/d+c},easeInQuad:function(a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(a,
c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c},easeInQuart:function(a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(a,c,b,d){return 1>(a/=d/2)?
b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,
-10*--a)+2)+c},easeInCirc:function(a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(a,c,b,d){var f=1.70158,e=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;e||(e=.3*d);g<Math.abs(b)?(g=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*--a)*Math.sin(2*(a*d-f)*Math.PI/e))+c},easeOutElastic:function(a,
c,b,d){var f=1.70158,e=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;e||(e=.3*d);g<Math.abs(b)?(g=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin(2*(a*d-f)*Math.PI/e)+b+c},easeInOutElastic:function(a,c,b,d){var f=1.70158,e=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;e||(e=.3*d*1.5);g<Math.abs(b)?(g=b,f=e/4):f=e/(2*Math.PI)*Math.asin(b/g);return 1>a?-.5*g*Math.pow(2,10*--a)*Math.sin(2*(a*d-f)*Math.PI/e)+c:g*Math.pow(2,-10*--a)*Math.sin(2*(a*d-f)*Math.PI/e)*.5+b+c},
easeInBack:function(a,c,b,d,f){void 0==f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(a,c,b,d){return b-n.easeOutBounce(d-a,0,b,d)+c},easeOutBounce:function(a,c,b,d){return(a/=d)<1/2.75?7.5625*b*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+
.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+.984375)+c},easeInOutBounce:function(a,c,b,d){return a<d/2?.5*n.easeInBounce(2*a,0,b,d)+c:.5*n.easeOutBounce(2*a-d,0,b,d)+.5*b+c}}})(jQuery);
 
 
