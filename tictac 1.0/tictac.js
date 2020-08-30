var k=0;
var j,i,w,count;

// declaring a 2d array in java script
var arr= new Array(3);
for(i=0;i<3;i++)arr[i] = new Array(3);

//initializing every element to 0
for(i=1;i<=3;i++)
    for(j=1;j<=3;j++)
        arr[i][j]=0;

function f(a,b)
{
    k++;
    if(k%2==0)
    {
        document.getElementById("table_blank_left").innerHTML="Player 1 Turn";
    }
    if(k%2==1)
    {
        document.getElementById("table_blank_left").innerHTML="Player 2 Turn";
    }


    for(i=0;i<3;i++)
    {
       for(j=0;j<3;j++)
       {
        if(i==a-1 && j==b-1)
        {
            if(k%2==1)
            {
                document.getElementById(10*a+b).style.backgroundImage = "url('cross.jpg')";
                arr[i][j]=1;
            }
            if(k%2==0)
            {
                document.getElementById(10*a+b).style.backgroundImage = "url('circle.jpg')";
                arr[i][j]=2;
            }
            document.getElementById(10*a+b).innerHTML="";
            break;
        }
       } 
    }

    for(w=1;w<=2;w++)
    {
        for(i=0;i<3;i++)
        {
            for(j=0,count=0;j<3;j++)
            {
                if(arr[i][j]==w) count++;
                if(count==3) win(w);
                
            }
            for(j=0,count=0;j<3;j++)
            {
                if(arr[j][i]==w) count++;
                if(count==3) win(w);
            }
        }
    
        for(i=0,count=0;i<3;i++)
        {
            if(arr[i][i]==w) count++;
            if(count==3) win(w);
        }
        for(i=0,count=0;i<3;i++)
        {
            if(arr[i][2-i]==w) count++;
            if(count==3) win(w);
        }
    }
}

function win(a)
{
    for(i=1;i<=3;i++)
        for(j=1;j<=3;j++)
            document.getElementById(10*i+j).innerHTML="";

    if(a==1)document.getElementById("heading").innerHTML="Player 1 Won! (X)";
    if(a==2)document.getElementById("heading").innerHTML="Player 2 Won! (O)";
    document.getElementById("table_blank_left").innerHTML="";

}