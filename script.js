  let status = 'mad'
  
   $('#myform').on('submit', (event) => {
     console.log("text")
    //form.classList.add('was-validated')

    event.preventDefault()
    if (status === 'mad') {
       const name = $('#validationCustom01').val()
       const char = $('#validationCustom02').val()
       const adv = $('#validationCustomUsername').val()
       const adj = $('#validationCustom03').val()

       $('#name').text(name)
       $('#char').text(" " + char)
       $('#adv').text(adv)
       $('#adj').text(adj)
        console.log(name)
       if (name != "" && char != "" && adv != "" && adj != "") {
         
        $('.text-area').show()
       }
       else{
        event.preventDefault()
        event.stopPropagation()
       }
     }


     else { // status == 'tom'
      const name = parseInt($('#validationCustom01').val())
      const char = parseInt($('#validationCustom02').val())
      const adv = parseInt($('#validationCustomUsername').val())
      if (Number.isInteger(name) && Number.isInteger(char) && Number.isInteger(adv)){
        const size = (name * char) * adv / 8000

        $('#size').text(size)
        console.log(size)
  
        if (name != "" && char != "" && adv != "") {
        
         $('.text-area2').show()

        }
        else{
         event.preventDefault()
         event.stopPropagation()
        }
      } 
     }
   })

function tomBtn() {
    if (status != "tom") {
      $('.container h1').text("Tom Thumb (insert numbers!)")
      $('#lname').text("Image width:")
      $('#lchar').text("Image height:")
      $('#ladv').text("Number of colors:")
      $('#adject').hide()
      $('button').text("Calc")
      $('.text-area').hide()

      console.log($('#lname').text())
    }
    status = "tom"
}

   $('#mad').on('click', ()=>{
    status = "mad"
   })
