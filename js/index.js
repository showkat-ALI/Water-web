const sourceBox = [
    "images/slideshow-1_e2f43c8e-023a-4046-bbdd-7a5af949958d_2048x.png",
    "images/slideshow-2_c7b6c930-1859-4be9-a0bc-b5784c025735_2048x.png"

]
let sourceCount = 0;
const sliderImage= document.getElementById("silde-image");
setInterval(()=>{
    if(sourceCount >= sourceBox.length){
        sourceCount= 0;
    }
    const imageChange= sourceBox[sourceCount];
    sliderImage.setAttribute("src",imageChange)
    sourceCount ++;
},2500)