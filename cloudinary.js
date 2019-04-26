const myWidget = cloudinary.createUploadWidget({
    cloudName: `daawmv4sy`,
    uploadPreset: `tzbvcytv`,
    sources: [`local`, `url`],
    defaultSource: `local`

}, (error, result) => {
    if (error) {
        console.log(error)
    } else if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        const imgUrl = result.info.url

        //then doo all the api call here
    }

})
OpenWidget=widget=>{

    widget.open()
}

CloseWidget=widget=>{

    widget.close()
}
