
let sldrHDir, sldrBWColor

let radBW, radRGB

function setup() {
  createCanvas(400, 400);
 
  sldrHDir = createSlider(0,13,8)
  sldrHDir.position(950, 300)
  sldrHDir.style('width', '250px')
 
  sldrBWColor = createSlider(0,256,150)
  sldrBWColor.position(950, 350)
  sldrBWColor.style('width', '250px')
 
 
  radBW = createRadio()
  radBW.option('Monochrome')
  radBW.option('RGB colors')
  radBW.position(950, 400)
  radBW.selected('RGB colors')
 
 
}

function draw() {
 
  background(255);
 
 
  for( j=0; j < sldrHDir.value() ; j++)
    {
      for (i=0; i<10 ; i++)
        {
         
          if( radBW.value() == 'Monochrome' )
          {  
              if ( (i+j)%2 == 0 )
                {
                  fill ('White')
                }
              else
                {
                  fill( sldrBWColor.value() )
                }
          }
          else if( radBW.value() == 'RGB colors' )
          {  
              if ( (i+j)%2 == 0 )
                {
                  fill ('Purple')
                }
              else
                {
                  fill( sldrBWColor.value(), 150, 150 )
                }
          }
         
         /* if(j%2 == 0 && i%2 == 1)
            {
             fill ('purple')
            }
          else if(j%2 == 1 && i%2 == 0)
            {
              fill ('purple')
            }
          else
          {
            fill ('yellow')
          }
         
          */
 
          rect( 40*j,40*i, 40,40 )

        }
    }
   
}