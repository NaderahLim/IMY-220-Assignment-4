
$(document).ready(function()
{
    //alert('The document is ready!');

    //-----------------------------------------------------------------------------------------------------------------
    //Text Data Type
    $("div[data-type*='text']").on('click', 'button', function()
    {
        let buttonEdit = $(this).hide();
        //console.log($(this).parent().data('type'));
        let span=$(this).prev().hide();
        let bold=$(this).prev().prev().hide();

        let Input = $('<input></input>', 
        {
            html: 'Input',
            type: 'text',
            class: 'col-8 mr-5 mb-5 p-3 form-control',
            value: span.text(),
        });
           
        let InputValue= Input.val();

        let Button = $('<button></button>', 
        {
            html: 'Update',
            class: 'col mb-5 ml-5 mr-5 btn btn-dark pull-right',
        });
            
        let elementList = [Input, Button];

        let Div = $('<div></div>', 
        {
            html: elementList,
            class: 'row',
        });
        
        $(this).replaceWith(Div);
        Button.on('click',function()
        {
            console.log("test");
            Div.hide();
            
            //$(this).hide();
            bold.show();
            span.text(InputValue).show();
            
            buttonEdit.show();        
        });
    });
    //Text Data Type
    //-----------------------------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------------------------
    //Email Data Type
    $("div[data-type*='email']").on('click', 'button', function()
    {
        let buttonEdit = $("button");
        //console.log(buttonEdit.text());
        let email=$(this).prev().hide();
        let span=$(this).prev().hide();
        let bold=$(this).prev().prev().hide();

        let Input = $('<input></input>', 
        {
            html: 'Input',
            type: 'email',
            class: 'col-8 mr-5 mb-5 p-3 form-control',
            value: email.text(),
        });
            
        let Button = $('<button></button>', 
        {
            html: 'Update',
            class: 'col mb-5 ml-5 mr-5 btn btn-dark pull-right',
        });
            
        let elementList = [Input, Button];

        let Div = $('<div></div>', 
        {
            html: elementList,
            class: 'row',
        });

        $(this).replaceWith(Div);

        Button.on('click',function()
        {
            console.log("test");
            Div.hide();

            span.show();
            bold.show();
        });
    });
    //Email Data Type
    //-----------------------------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------------------------
    //Date Data Type
    $("div[data-type*='date']").on('click', 'button', function()
    {
        let date=$(this).prev().hide();
        let span=$(this).prev().hide();
        let bold=$(this).prev().prev().hide();

        //Input(Value) UPDATE
         let Input = $('<input></input>', 
         {
             html: 'Input',
             type: 'date',
             class: 'col-8 mr-5 mb-5 p-3 form-control',
             value: date.text(),
         });
             
         let Button = $('<button></button>', 
         {
             html: 'Update',
             class: 'col mb-5 ml-5 mr-5 btn btn-dark pull-right',
             id: 'UpdateButton',
         });
             
         let elementList = [Input, Button];
 
         let Div= $('<div></div>', 
         {
             html: elementList,
             class: 'row',
             id: 'Date'
         });
         
         $(this).replaceWith(Div);

         Button.on('click',function()
         {
             console.log("test");
             Div.hide();
 
             span.show();
             bold.show();
         });
    });
    //Date Data Type
    //-----------------------------------------------------------------------------------------------------------------
});
    

