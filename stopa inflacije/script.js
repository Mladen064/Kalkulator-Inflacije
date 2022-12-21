function inflationCalculator()
{
    let inflacija=document.getElementById('inflationRate');
    let para=document.getElementById('money');
    let godine=document.getElementById('years');

    inflacija=parseFloat(inflationRate.value);
    para=parseFloat(money.value);
    godine=parseFloat(years.value);

    let konacnaInflacija = para + (para * ( inflacija/100 ));

    

    for(let i=1; i<godine; i++)
    {
        konacnaInflacija +=konacnaInflacija * (inflacija/100);
    }

        
    konacnaInflacija=konacnaInflacija.toFixed(2);

    let konacnokonacno=('Ukupna inflacija iznosi :'+ konacnaInflacija);
    

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    console.log(konacnaInflacija);
    window.alert(konacnokonacno);
    window.location.reload(true);
    
    

    document.querySelector('.container').appendChild(newElement);
}
 
