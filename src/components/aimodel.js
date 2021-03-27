// here will be tensorflow

// import modelUrl from "../model/model.json"  
// import metadataUrl from "../model/metadata.json"  

let numOfFrames = 0;
let numOfGoodFrames = 0;
export default ({ alertBadFn, alertGoodFn, changeArray, arrOfNums }) => {
    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

    // the link to your model provided by Teachable Machine export panel
    let model, webcam, ctx, labelContainer, maxPredictions;

    async function init() {

        const URL = "./model/";
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // const modelURL = modelUrl;
        // const metadataURL = metadataUrl;

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // Note: the pose library adds a window.tmPose object to your window (window.window.tmPose)
        model = await window.tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const size = 200;
        const flip = true; // whether to flip the webcam
        webcam = new window.tmPose.Webcam(size, size, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append/get elements to the DOM
        // const canvas = document.getElementById("canvas");
        // canvas.width = size; canvas.height = size;
        // ctx = canvas.getContext("2d");
        // labelContainer = document.getElementById("label-container");
        // for (let i = 0; i < maxPredictions; i++) { // and class labels
        //     labelContainer.appendChild(document.createElement("div"));
        // }
    }

    async function loop(timestamp) {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        // Prediction #1: run input through posenet
        // estimatePose can take in an image, video or canvas html element
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        // Prediction 2: run input through teachable machine classification model
        const prediction = await model.predict(posenetOutput);

        // for (let i = 0; i < maxPredictions; i++) {
        //     const classPrediction =
        //         prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        //     labelContainer.childNodes[i].innerHTML = classPrediction;
        // }

        // console.log(prediction[0].probability > 0.8)

        CountFrames(prediction[0].probability > 0.8)

        if (prediction[0].probability < 0.8) { alertAbout() }
        else {
            alertGoodFn();
        }

        // finally draw the poses
        // drawPose(pose);
    }

    const alertAbout = () => {
        // console.log("bad")
        if (typeof alertBadFn == "function")
            alertBadFn();

    }


    const CountFrames = (isStriaight) => {
        numOfFrames++
        if (isStriaight)
            numOfGoodFrames++
        if (numOfFrames == 100)
            calculate()
    }

    const calculate = () => {
        console.log("calculate!")
        console.log(new Date().getTime())
        console.log(numOfGoodFrames / numOfFrames)


        let currentArr = arrOfNums;

        currentArr.push(numOfGoodFrames / numOfFrames)

        console.log(currentArr)
        if (currentArr.length >= 10) {
            currentArr.shift()
        }
        changeArray(currentArr);

        numOfFrames = 0;
        numOfGoodFrames = 0;
    }



    function drawPose(pose) {
        if (webcam.canvas) {
            ctx.drawImage(webcam.canvas, 0, 0);
            // draw the keypoints and skeleton
            if (pose) {
                const minPartConfidence = 0.5;
                window.tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                window.tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
            }
        }
    }

    init();
    return (<>
        {/* <div><canvas id="canvas"></canvas></div>
        <div id="label-container"></div> */}
    </>)
}