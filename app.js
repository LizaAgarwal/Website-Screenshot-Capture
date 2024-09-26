function captureScreenshot(){
    const url=document.getElementById("urlInput").value;
    if(!url){
        alert("Enter website url");
        return;
    }
    const apiUrl=`https://api.screenshotone.com/take?access_key=Y4pp5hZ2NjM7Ng&url=${encodeURIComponent(url)}&viewport_width=1920&viewport_height=1080&device_scale_factor=1&image_quality=80&format=jpg&block_ads=true&block_cookie_banners=true&full_page=false&block_trackers=true&block_banners_by_heuristics=false&delay=0&timeout=60`;
    fetch(apiUrl)
        .then((res)=>{
            return res.blob();
        })
        .then((blob)=>{
            const imgUrl=URL.createObjectURL(blob);
            document.getElementById("screenshot").innerHTML=`<img src="${imgUrl}" alt="Screenshot of ${url}" width="500">`;
        })
        .catch((err)=>{
            console.log("ERROR-",err);
            alert("Failed to capture the screenshot");
        });
}


