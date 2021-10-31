img = "";
 status = "";
objects = [];
 function preload()
 {
      img = loadImage('dog_cat.jpg');
     } 
     function setup() 
     { 
         canvas = createCanvas(380, 380); 
         canvas.center(); 
         video = createCapture(VIDEO);
         video.hide();
         objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
         document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
        } 
        function modelLoaded() 
        { 
            console.log("Model Loaded!") 
            status = true;
            } 
            function gotResults(error, results) 
            { 
                if (error) { console.log(error);
                 } 
                 console.log(results);
                 objects = results;
                }
                 function draw() 
                 { 
                             fill(r,g,b);
                             percent = floor(objects[i].confidence *100);
                             text(objects[i].label + ""+percent+"%" ,objects[i].x,objects[i].y);
                             noFill();
                             image(video, 0, 0, 380, 380); 
                     if(status!="person")
                     {
                         r = random(255);
                         g = random(255);
                         b = random(255);
                         objectDetector.detect(video, gotResults);
                         for(i = 0;i<objects.length;i++)
                         document.getElementById("status").innerHTML = "Status: Baby Detected!";
                             document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;
                             stopSound();
                         {
                             else
                             {
                                document.getElementById("status").innerHTML = "Status: Baby Not Detected!";
                                startSound('alarm_classic.mp3');
                             }
                             stroke(r,g,b);
                             rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
                         }