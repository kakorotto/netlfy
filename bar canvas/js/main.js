
//btnCalc.addEventListener('click', drawBar);


function drawBar(  ){
    let subjectData = {
        'Chemistry':70  ,
        'Math': 30,
        'Science': 50.5,
        'Arabic':90,
        'Physics':10,
    };

    let colors     = ['#ef233c','#009c55', '#560bad', '#cbb2fe', '#995905'];
    let colorIndex = 0;
    let subject        = Object.keys( subjectData );
    let canvas         = document.getElementById("bar");
    let context        = canvas.getContext('2d'); 
    let btnCalc        = document.getElementById("calcbtn");
    let subjectsValues = Array.from( document.getElementsByClassName("input-subject"));
    let padding        = 10;
    let canvasWidth    = canvas.clientWidth ;
    let canvasHeight   = canvas.clientHeight;
    let startX         = 40;
    let barWidth       = (canvasWidth  - ( 20 * subject.length ) ) / subject.length ;
    let greatestDegree = 0;
    let barHeight      = 0;

    // Get the heightest degree
    for( subject in subjectData ) {
        greatestDegree = Math.max( greatestDegree, Math.round( subjectData[subject])  );
    }   
    
    
    for( subject in subjectData ) {
        // Draw bar
        barHeight = subjectData[subject] / greatestDegree * canvasHeight  
        //console.log( barHeight )
        barHeight = canvasHeight - barHeight  ;
        console.log(  barHeight)
        context.fillStyle = colors[ colorIndex ];   
        context.fillRect( startX, barHeight, barWidth, canvasHeight );

        //Draw text
        context.font = "14px arial bold";
        context.fillText( `${subject[0]}${subjectData[subject]}%`, startX + 2 , barHeight - 5 )
        startX += barWidth ;        
        colorIndex++;
   
    }




    // Iterate through subject input to get key and value
    //subjectsValues.forEach( subject =>  subjectData[subject.name] = subject.value );
    
 
    
    // Subject data
    let subjectData = {};
    //let canvas       = document.getElementById("bar");
    let startPoint   = 20;
    let width        = (canvas.clientWidth - 125 ) / 5  ;
    let canvasHeight = canvas.clientHeight;
    let counter      = 0;
    // Iterate through inputs and get inputs value
    subjectsValues.forEach( subject => {
        console.log( subject );
        subjectData[subject.id] = subject.value
    });

    console.log( subjectData );
    let subjectName = "CMSAP";
    // Iterate through subjects
    for( subject in subjectData ) {
        let endPoint   = canvasHeight - subjectData[subject] * 1.5;
        ctx.fillStyle = color[ counter ];
        ctx.fillRect( startPoint, endPoint, width, canvasHeight );
        
        ctx.font = "19px Tahoma";
        ctx.fillText(  subjectName[counter]+" "  + subjectData[subject], startPoint + 15 , (canvasHeight - subjectData[subject] * 1.7)  );


        startPoint += width +10;
        counter++;
        
    }


   
}

//drawBar(  )