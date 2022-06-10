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
      const name = $('#validationCustom01').val()
      const char = $('#validationCustom02').val()
      const adv = $('#validationCustomUsername').val()
      //const adj = $('#validationCustom03').val()
      //$('#adj').text(adj)
      const size = name + char + adv

      console.log(size)
      if (name != "" && char != "" && adv != "") {
        
       $('.text-area2').show()
      }
      else{
       event.preventDefault()
       event.stopPropagation()
      }
       
     }
   })


   $('#tomBtn').on('click', () =>
    if (status != "tom") {
      $('#id').find('label[for="validationCustom01"]').text("Image width:")
      $('#id').find('label[for="validationCustom02"]').text("Image width:")
    }
    status = "tom"
   )

   $('#mad').on('click', ()=>
    status = "mad"
   )
