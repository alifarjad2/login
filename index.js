const nameInput = document.getElementsByName('username')[0]
nameInput2.focus()
nameInput.oninput = (event) => {
    const mobile = event.target.value + ''
    console.log(event.target.value)
    console.log('test regex:', event.target.value?.match(/^09([0-9]{9})/))
    console.log('test length:', event.target.value?.length === 11)

    if(mobile.length === 11 && mobile.startsWith('09')) {
        //valid
        labelName.innerHTML = 'Telephone Number : (valid)'
    }else {
        // not valid
        labelName.innerHTML = 'Telephone Number : (NOT !!! Valid)'
    }

}
