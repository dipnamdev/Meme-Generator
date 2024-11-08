import React from 'react';

export default function meme(){

    const [FormData,setFormData] = React.useState({
        topText:'',
        bottomText:'',
        RandomImg:'https://i.imgflip.com/30b1gx.jpg'
    })

    const[allmeme,setAllMeme]=React.useState();
    function handleClick(event){
        const {name,value}=event.target
        setFormData(prev=>({
            ...prev,
            [name]:value
        }) );
    }

    function changeImage(){
        event.preventDefault();
        const Random=Math.floor(Math.random() *allmeme.length)
        setFormData(prev=>({
            ...prev,
            RandomImg:allmeme[Random].url
        }))
    }
    
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data => setAllMeme(data.data.memes));
    },[])


    return(
    <main>
        <form className="form">

            <input type="text"
            name='topText'
            placeholder='Top text'
            onChange={handleClick}
            value={FormData.topText}
            className='form--input'   
            />

            <input type="text"
            name='bottomText'
            placeholder='Bottom text'
            onChange={handleClick}
            value={FormData.bottomText}
            className='form--input'
            />

           <button type="submit"
           onClick={changeImage}
           className='form--button'
           >Get a new meme image 🖼</button>
        </form>
        <div className="meme">
                <img src={FormData.RandomImg} className="meme--image" />
                <h2 className="meme--text top">{FormData.topText}</h2>
                <h2 className="meme--text bottom">{FormData.bottomText}</h2>
        </div>
    </main>
    );
}