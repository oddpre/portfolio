// Hamburger menu.

const menuDropDownMobile = () =>
{
    document.getElementById("menu").classList.toggle("active");
}


//Validation of the form and summmoning of a "Thank you for your message" message. 

const validateForm = () =>
{
    //Can already validate email with the type="email" attribute. If checking for email through JS, use of regex is the way to go. 
    /* Example below.
    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    */
    alert("Thank you for your message!");

}